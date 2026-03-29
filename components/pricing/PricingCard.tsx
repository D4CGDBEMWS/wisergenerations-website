'use client'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { PricingTier } from '@/types'
import { clsx } from 'clsx'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function PricingCard({ tier }: { tier: PricingTier }) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: tier.priceId }),
      })
      const { url, error } = await res.json()
      if (error) { alert(error); setLoading(false); return }
      window.location.href = url
    } catch {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={clsx(
      'relative rounded-2xl p-8 border-2 flex flex-col transition-shadow hover:shadow-lg',
      tier.highlight ? 'border-gold bg-navy text-white shadow-xl' : 'border-gray-200 bg-white'
    )}>
      {tier.badge && (
        <div className={clsx(
          'absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full',
          tier.highlight ? 'bg-gold text-white' : 'bg-navy text-white'
        )}>
          {tier.badge}
        </div>
      )}
      <div className="mb-6">
        <h3 className={clsx('text-xl font-bold mb-1', tier.highlight ? 'text-white' : 'text-navy')}>
          {tier.name}
        </h3>
        <p className={clsx('text-sm', tier.highlight ? 'text-gray-300' : 'text-gray-500')}>{tier.description}</p>
      </div>
      <div className="mb-6">
        <span className={clsx('text-5xl font-bold', tier.highlight ? 'text-white' : 'text-navy')}>
          ${tier.price.toLocaleString()}
        </span>
        <span className={clsx('text-sm ml-1', tier.highlight ? 'text-gray-300' : 'text-gray-400')}>one-time</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className={clsx('flex items-start gap-2 text-sm', tier.highlight ? 'text-gray-200' : 'text-gray-600')}>
            <span className="text-gold mt-0.5 flex-shrink-0">✓</span> {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        disabled={loading || !tier.priceId}
        className={clsx(
          'w-full py-3 px-6 rounded-xl font-bold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
          tier.highlight
            ? 'bg-gold text-white hover:bg-amber-600 focus:ring-gold'
            : 'bg-navy text-white hover:bg-blue-900 focus:ring-navy',
          (loading || !tier.priceId) && 'opacity-50 cursor-not-allowed'
        )}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing...
          </span>
        ) : !tier.priceId ? 'Coming Soon' : 'Enroll Now'}
      </button>
      {!tier.priceId && (
        <p className="text-xs text-center mt-2 text-gray-400">Contact us to be notified when available</p>
      )}
    </div>
  )
}
