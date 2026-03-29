import { Hero } from '@/components/home/Hero'
import { PrinciplesGrid } from '@/components/home/PrinciplesGrid'
import { DeliveryModes } from '@/components/home/DeliveryModes'
import { CTABanner } from '@/components/home/CTABanner'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Process" title="Three Steps to Managing Your Life Project" center />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Track', body: 'Online self-paced or in-person cohort in Metro Atlanta. Both deliver the complete 7 Project Principles™ framework across 14 sessions.' },
              { step: '02', title: 'Build Your Portfolio', body: '14 sessions, 6 capstone artifacts, and real PM tools applied to your life. Sprint plans, stakeholder registers, retrospectives — all documented.' },
              { step: '03', title: 'Earn Your Certificate', body: '23 documented hours of PMI-aligned education. Your completion certificate supports your CAPM® exam application.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-light-gold border-2 border-gold text-gold font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                <h3 className="text-navy font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrinciplesGrid />
      <DeliveryModes />

      {/* Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-navy italic leading-relaxed mb-6">
            "I built the framework because I lived it. Now we build the platform so every young professional can too."
          </blockquote>
          <p className="text-gold font-bold">— Crystal Stewart</p>
          <p className="text-gray-500 text-sm">The Project Management Evangelist™ · Founder & CEO, Enterprise Academy™</p>
          <div className="mt-8">
            <Button href="/about">Read Crystal's Story</Button>
          </div>
        </div>
      </section>

      {/* CAPM Banner */}
      <section className="py-12 bg-light-gold border-y border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-navy font-bold text-lg mb-2">CAPM® Pathway Ready</p>
          <p className="text-gray-700">This program documents <strong>23 hours</strong> of PMI-aligned project management education — the exact requirement for your CAPM® exam application.</p>
          <Button href="/capm" variant="outline" size="sm" className="mt-4">Learn About the CAPM Pathway →</Button>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
