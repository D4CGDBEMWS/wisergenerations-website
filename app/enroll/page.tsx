import type { Metadata } from 'next'
import { EnrollForm } from '@/components/forms/EnrollForm'

export const metadata: Metadata = {
  title: 'Enroll — Tell Us About Your Project',
  description: 'Express interest in Life Is a Project™. Share your delivery preference, track, and project sponsor. We\'ll be in touch within 48 hours.',
}

export default function EnrollPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Enroll</p>
          <h1 className="text-3xl font-bold text-navy mb-4">Tell Us About Your Project</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Not ready to purchase yet? Submit your interest and we'll reach out with next steps,
            cohort dates, and answers to your questions.
          </p>
          <div className="bg-light-gold border border-gold/30 rounded-xl p-5 space-y-3">
            <p className="text-navy font-bold text-sm">What Happens After You Submit</p>
            {[
              'You receive a welcome email within minutes',
              'Crystal or a team member contacts you within 48 hours',
              'We confirm your track (Foundation / Leadership) and delivery preference',
              'You receive enrollment instructions and pricing',
            ].map((s) => (
              <div key={s} className="flex items-start gap-2">
                <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                <p className="text-gray-700 text-xs">{s}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-navy rounded-xl p-5">
            <p className="text-gold font-bold text-sm mb-1">Ready to purchase now?</p>
            <p className="text-gray-300 text-xs mb-3">Skip this form and go directly to checkout.</p>
            <a href="/pricing" className="inline-block bg-gold text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
              View Pricing →
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <EnrollForm />
        </div>
      </div>
    </div>
  )
}
