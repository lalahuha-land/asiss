create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  site_key text unique not null,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

create policy "Public read site content"
  on public.site_content
  for select
  using (true);

create policy "Authenticated insert site content"
  on public.site_content
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated update site content"
  on public.site_content
  for update
  using (auth.role() = 'authenticated');
