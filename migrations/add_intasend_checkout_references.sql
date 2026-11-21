-- IntaSend hosted checkout references for CBE Nexus international payments.
-- Safe to run more than once.
ALTER TABLE public.published_book_sales
  ADD COLUMN IF NOT EXISTS intasend_checkout_id text;

ALTER TABLE public.global_teachers
  ADD COLUMN IF NOT EXISTS intasend_checkout_id text;

CREATE INDEX IF NOT EXISTS published_book_sales_intasend_checkout_idx
  ON public.published_book_sales (intasend_checkout_id);

CREATE INDEX IF NOT EXISTS global_teachers_intasend_checkout_idx
  ON public.global_teachers (intasend_checkout_id);

COMMENT ON COLUMN public.published_book_sales.intasend_checkout_id IS
  'IntaSend hosted checkout ID used for server-side payment verification.';
COMMENT ON COLUMN public.global_teachers.intasend_checkout_id IS
  'IntaSend hosted checkout ID used for server-side payment verification.';
