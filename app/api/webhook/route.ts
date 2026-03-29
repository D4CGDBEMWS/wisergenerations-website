export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'
import { sendEnrollmentConfirmation } from '@/lib/resend'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Fetch line items to get product name
    let productName = 'Life Is a Project™'
    try {
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { expand: ['data.price.product'] })
      const product = lineItems.data[0]?.price?.product as Stripe.Product
      if (product?.name) productName = product.name
    } catch {}

    // Save to Supabase
    await supabaseAdmin.from('enrollments').insert([{
      stripe_session_id: session.id,
      stripe_payment_intent: session.payment_intent as string,
      customer_email: session.customer_details?.email || '',
      customer_name: session.customer_details?.name || '',
      product_name: productName,
      amount_paid: session.amount_total || 0,
      currency: session.currency || 'usd',
      status: 'active',
    }])

    // Send confirmation email
    if (session.customer_details?.email) {
      await sendEnrollmentConfirmation(
        session.customer_details.name || 'there',
        session.customer_details.email,
        productName
      )
    }
  }

  return NextResponse.json({ received: true })
}

// App Router handles raw body automatically — no config needed
