import { createClient } from '@supabase/supabase-js'

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, key)
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(url, key)
}

export const supabase = {
  from: (table: string) => getSupabase().from(table),
}

export const supabaseAdmin = {
  from: (table: string) => getSupabaseAdmin().from(table),
  storage: { from: (bucket: string) => getSupabaseAdmin().storage.from(bucket) },
}
