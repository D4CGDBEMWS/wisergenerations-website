import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Crystal — Wiser Generations',
  description: 'Get in touch with Crystal Stewart and the Enterprise Academy™ team.',
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Contact</p>
          <h1 className="text-4xl font-bold text-navy mb-4">Talk to Crystal</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Questions about the program, in-person cohort availability, group pricing, or
            speaking engagements — Crystal or a team member responds within 2 business days.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Email', value: 'crystal@wisergenerations.com' },
              { label: 'Location', value: 'Smyrna, GA (Metro Atlanta)' },
              { label: 'Program', value: 'learn.wisergenerations.com' },
              { label: 'Community', value: 'community.wisergenerations.com' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gold font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-navy font-medium text-sm mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
