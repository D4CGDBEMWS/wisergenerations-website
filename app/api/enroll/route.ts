export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendEnrollWelcome } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { firstName, lastName, email } = data
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'First name, last name, and email are required.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from('program_interest').insert([{
      first_name: firstName, last_name: lastName, email,
      age: data.age, registrant_type: data.registrantType,
      delivery_preference: data.deliveryPreference, diploma_status: data.diplomaStatus,
      sponsor_name: data.sponsorName, sponsor_email: data.sponsorEmail,
      how_heard: data.howHeard, message: data.message,
    }])
    if (error) console.error('Supabase error:', error)

    await sendEnrollWelcome(firstName, email)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
