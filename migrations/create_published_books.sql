-- CBE Nexus global textbook and course-book publishing marketplace
-- Apply this migration in Supabase SQL Editor before enabling the publisher pages.

CREATE TABLE IF NOT EXISTS public.published_books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL REFERENCES public.sellers(id) ON DELETE CASCADE,
  title text NOT NULL,
  summary text NOT NULL,
  author_name text NOT NULL,
  country text NOT NULL,
  curriculum text NOT NULL,
  subject text NOT NULL,
  level text NOT NULL,
  price numeric(12,2) NOT NULL CHECK (price > 0),
  currency text NOT NULL DEFAULT 'KES',
  pdf_key text NOT NULL,
  cover_key text NOT NULL,
  cover_mime text NOT NULL DEFAULT 'image/jpeg',
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','in_review','revision_required','approved','published','rejected')),
  isbn_status text NOT NULL DEFAULT 'not_started'
    CHECK (isbn_status IN ('not_started','requested','in_process','assigned','not_applicable')),
  isbn text,
  review_notes text NOT NULL DEFAULT '',
  poster_generated_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS published_books_seller_created_idx
  ON public.published_books (seller_id, created_at DESC);
CREATE INDEX IF NOT EXISTS published_books_public_status_idx
  ON public.published_books (status, created_at DESC);

ALTER TABLE public.published_books ENABLE ROW LEVEL SECURITY;
-- Access is mediated by the CBE Nexus server using its service-role Supabase client.
-- Do not add public INSERT/UPDATE policies for this table.
COMMENT ON TABLE public.published_books IS
  'Publisher submissions for CBE Nexus global textbook and course-book marketplace. Files are stored in Cloudflare R2; seller/admin access is mediated by server endpoints.';


-- Verified international book sales. The seller/platform split is recorded only
-- after Paystack confirms the exact USD amount and reference server-side.
CREATE TABLE IF NOT EXISTS public.published_book_sales (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid NOT NULL REFERENCES public.published_books(id) ON DELETE RESTRICT,
  seller_id uuid NOT NULL REFERENCES public.sellers(id) ON DELETE RESTRICT,
  buyer_email text NOT NULL,
  payment_reference text NOT NULL UNIQUE,
  amount numeric(12,2) NOT NULL CHECK (amount > 0),
  currency text NOT NULL DEFAULT 'USD' CHECK (currency = 'USD'),
  source_amount numeric(12,2) NOT NULL CHECK (source_amount > 0),
  source_currency text NOT NULL,
  exchange_rate numeric(18,8) NOT NULL CHECK (exchange_rate > 0),
  seller_amount numeric(12,2),
  platform_amount numeric(12,2),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','paid','failed','refunded')),
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS published_book_sales_seller_created_idx
  ON public.published_book_sales (seller_id, created_at DESC);
CREATE INDEX IF NOT EXISTS published_book_sales_book_created_idx
  ON public.published_book_sales (book_id, created_at DESC);
CREATE INDEX IF NOT EXISTS published_book_sales_status_idx
  ON public.published_book_sales (status, created_at DESC);

ALTER TABLE public.published_book_sales ENABLE ROW LEVEL SECURITY;
-- All reads/writes are mediated by the CBE Nexus server service-role client.
