export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerEmail } = await req.json()
    if (!priceId) return NextResponse.json({ error: 'Price ID required.' }, { status: 400 })

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wisergenerations.com'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      customer_email: customerEmail || undefined,
      allow_promotion_codes: true,
      metadata: { source: 'wisergenerations.com' },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Could not create checkout session.' }, { status: 500 })
  }
}
