import type { Metadata } from 'next'
import { PRICING_TIERS } from '@/lib/constants'
import { PricingCard } from '@/components/pricing/PricingCard'
import { CalloutBox } from '@/components/ui/CalloutBox'

export const metadata: Metadata = {
  title: 'Pricing & Enrollment',
  description: 'Enroll in Life Is a Project™. Four pricing tiers from $497. Online self-paced, live virtual cohort, and in-person Metro Atlanta options.',
}

const FAQ = [
  { q: 'Is there a payment plan?', a: 'Contact us at wisergenerations.com/contact to discuss payment plan options. We want to remove financial barriers for motivated students.' },
  { q: 'Can I switch from online to in-person?', a: 'If space is available in an upcoming in-person cohort, you may upgrade. Contact us within 30 days of your original enrollment.' },
  { q: 'What if I miss a session?', a: 'Online students can work at their own pace with no deadlines. In-person students have access to session materials online and can schedule a 15-minute catch-up call.' },
  { q: 'How do I use my certificate for CAPM?', a: 'Your completion certificate documents 23 hours of PMI-aligned education. Full application steps are at wisergenerations.com/capm.' },
  { q: 'Is there a discount for groups or organizations?', a: 'Yes. Contact us for school, church, and employer group pricing. Minimum 5 students for group rates.' },
]

export default function PricingPage() {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Pricing & Enrollment</p>
        <h1 className="text-4xl font-bold text-navy mb-4">Choose Your Program</h1>
        <p className="text-gray-600 text-lg">Same 7 Project Principles™ framework. Three delivery modes. One certificate.</p>
        <div className="mt-4 inline-block bg-light-gold border border-gold/30 rounded-full px-4 py-2">
          <p className="text-sm text-navy">Use code <span className="font-mono font-bold text-gold">LAUNCH25</span> for 25% off at checkout</p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => <PricingCard key={tier.id} tier={tier} />)}
        </div>
      </div>

      {/* CAPM Note */}
      <div className="max-w-3xl mx-auto px-4 mb-20">
        <CalloutBox label="CAPM® NOTE">
          All tiers include a completion certificate documenting 23 hours of PMI-aligned project management
          education toward your CAPM® exam application. The CAPM® requires a high school diploma or equivalent.
        </CalloutBox>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQ.map((item) => (
            <div key={item.q} className="border-b border-gray-100 pb-6">
              <p className="font-semibold text-navy mb-2">{item.q}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">
          More questions?{' '}
          <a href="/contact" className="text-gold hover:underline">Contact Crystal directly →</a>
        </p>
      </div>
    </div>
  )
}
