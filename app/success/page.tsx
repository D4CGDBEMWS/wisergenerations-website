import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = { title: 'Enrollment Confirmed — Wiser Generations' }

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 border-4 border-green-400 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-navy mb-3">Enrollment Confirmed</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Your payment was successful. Check your email for your enrollment confirmation —
          it includes everything you need to get started.
        </p>

        <div className="bg-light-gold border border-gold/30 rounded-xl p-6 text-left mb-8">
          <p className="font-bold text-navy mb-3">What Happens Next</p>
          <ol className="space-y-2">
            {[
              'Check your inbox for your enrollment confirmation email',
              'You\'ll receive access to your Thinkific course portal within 24 hours',
              'If your tier includes community access, watch for a Circle invitation',
              'Download your Student Workbook from the course portal',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://learn.wisergenerations.com" target="_blank" rel="noopener noreferrer"
            className="bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
            Access Your Course →
          </a>
          <Button href="/capm" variant="outline">View CAPM Next Steps</Button>
        </div>

        <p className="text-gray-400 text-xs mt-8">
          Questions? <Link href="/contact" className="text-gold hover:underline">Contact us →</Link>
        </p>
      </div>
    </div>
  )
}
