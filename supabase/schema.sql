-- Ejecutar en el editor SQL de Supabase. No exponer SERVICE_ROLE_KEY.
create table if not exists public.orders (id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id),created_at timestamptz not null default now(),items jsonb not null,total_cents integer not null check(total_cents>=0),notes text default '',status text not null default 'pendiente_pago',payment_provider text,payment_reference text unique);
create table if not exists public.requests (id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id),description text not null,status text not null default 'nuevo',created_at timestamptz not null default now());
alter table public.orders enable row level security;alter table public.requests enable row level security;
create policy "own orders read" on public.orders for select to authenticated using(auth.uid()=user_id);
create policy "own requests read" on public.requests for select to authenticated using(auth.uid()=user_id);
create policy "own requests insert" on public.requests for insert to authenticated with check(auth.uid()=user_id);
-- Los cambios de estado y los cobros se efectúan únicamente desde el servidor con service role.
