-- CBE Nexus international textbook and course-book payment ledger.
-- Apply this migration in Supabase SQL Editor before enabling book checkout.
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
-- Access is mediated by the CBE Nexus server service-role client only.
COMMENT ON TABLE public.published_book_sales IS
  'Verified textbook/course-book sales, USD settlement values and 70/30 seller/platform earnings.';
