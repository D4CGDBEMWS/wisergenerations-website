export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const password = req.headers.get('x-admin-password')
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const [contacts, interests, enrollments] = await Promise.all([
    supabaseAdmin.from('contact_submissions').select('*').order('created_at', { ascending: false }),
    supabaseAdmin.from('program_interest').select('*').order('created_at', { ascending: false }),
    supabaseAdmin.from('enrollments').select('*').order('created_at', { ascending: false }),
  ])

  return NextResponse.json({
    contacts: contacts.data || [],
    interests: interests.data || [],
    enrollments: enrollments.data || [],
  })
}
