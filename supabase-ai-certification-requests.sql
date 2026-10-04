create table if not exists public.ai_certification_requests (
  id text primary key,
  learner_name text not null,
  email text,
  phone text,
  course_slug text not null,
  course_title text not null,
  final_score numeric not null,
  module_scores jsonb not null default '[]'::jsonb,
  project_title text not null,
  project_evidence text not null,
  mpesa_receipt text not null,
  payment_number text not null default '0798462815',
  certification_fee numeric not null default 250,
  status text not null default 'pending_payment_verification',
  payment_verified_at timestamptz,
  payment_verified_by text,
  certificate_id text,
  created_at timestamptz not null default now()
);
create index if not exists ai_cert_requests_status_idx on public.ai_certification_requests(status);
create index if not exists ai_cert_requests_receipt_idx on public.ai_certification_requests(mpesa_receipt);
alter table public.ai_certification_requests enable row level security;
create policy "Admin/service role manages certification requests"
on public.ai_certification_requests for all
to service_role using (true) with check (true);