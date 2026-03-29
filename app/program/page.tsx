import type { Metadata } from 'next'
import { PRINCIPLES, SESSIONS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CalloutBox } from '@/components/ui/CalloutBox'

export const metadata: Metadata = {
  title: 'The 7 Project Principles™ — Program Overview',
  description: 'Life Is a Project™ is a 14-session leadership program for ages 17–21 built on the 7 Project Principles™ — a PMI-aligned personal development framework.',
}

const PHASES = [
  { name: 'INITIATE', sessions: [1, 2], color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'PLAN', sessions: [3, 4, 5], color: 'bg-light-gold border-gold text-amber-800' },
  { name: 'EXECUTE', sessions: [6, 7, 8, 9, 10], color: 'bg-light-navy border-navy text-navy' },
  { name: 'CLOSE & RENEW', sessions: [11, 12, 13, 14], color: 'bg-green-50 border-green-200 text-green-800' },
]

export default function ProgramPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">The Framework</p>
      <h1 className="text-4xl font-bold text-navy mb-4">The 7 Project Principles™</h1>
      <p className="text-gray-600 text-lg max-w-2xl mb-12">
        Each principle maps directly to a PMI project management discipline — creating an integrated
        framework that is both professionally credible and personally transformative.
      </p>

      {/* Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {PRINCIPLES.map((p) => (
          <div key={p.number} className="border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{p.number}</div>
              <div>
                <p className="font-bold text-navy text-base leading-tight">{p.name}</p>
                <p className="text-gold text-xs">{p.pm}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{p.life}</p>
          </div>
        ))}
      </div>

      {/* Curriculum */}
      <SectionHeader eyebrow="14-Session Curriculum" title="Four Phases. One Framework." subtitle="The program mirrors the project life cycle: Initiate, Plan, Execute, Close & Renew." />
      <div className="mt-10 space-y-8 mb-20">
        {PHASES.map((phase) => (
          <div key={phase.name}>
            <div className={`inline-block border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${phase.color}`}>
              PHASE: {phase.name}
            </div>
            <div className="space-y-2">
              {SESSIONS.filter((s) => phase.sessions.includes(s.number)).map((s) => (
                <div key={s.number} className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg px-5 py-3 hover:border-gold transition-colors">
                  <span className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{s.number}</span>
                  <div>
                    <p className="font-medium text-navy text-sm">{s.title}</p>
                    <p className="text-gray-400 text-xs">{s.principle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {[
          { name: 'Foundation Track', ages: 'Ages 17–19', color: 'border-blue-300', desc: 'School-to-work transition focus. Foundational PM vocabulary. Real-life application of all 7 principles with school and early career contexts.' },
          { name: 'Leadership Track', ages: 'Ages 19–21', color: 'border-gold', desc: 'Professional context framing. Full PM methodology. CAPM preparation. Career-facing applications of all 7 principles.' },
        ].map((t) => (
          <div key={t.name} className={`border-2 ${t.color} rounded-xl p-6`}>
            <p className="font-bold text-navy text-lg">{t.name}</p>
            <p className="text-gold text-sm font-medium mb-3">{t.ages}</p>
            <p className="text-gray-600 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Capstone */}
      <div className="bg-navy rounded-2xl p-8 text-white mb-12">
        <p className="text-gold font-bold uppercase text-sm tracking-widest mb-4">Capstone Portfolio (6 Artifacts)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['Personal Project Charter', '15%'],
            ['Scope Statement + Wheel of Life', '15%'],
            ['Sprint Plan + History', '20%'],
            ['Stakeholder Register & Engagement Plan', '15%'],
            ['Leadership Pitch Feedback File', '15%'],
            ['Personal Retrospective Cadence', '20%'],
          ].map(([name, weight]) => (
            <div key={name} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2.5">
              <span className="text-gray-200 text-sm">{name}</span>
              <span className="text-gold font-bold text-sm">{weight}</span>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox label="CAPM PATHWAY">
        Graduates receive a completion certificate documenting 23 hours of PMI-aligned project management
        education — the exact requirement for the CAPM® exam application.
      </CalloutBox>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/pricing" size="lg">Enroll in the Program</Button>
        <Button href="/capm" variant="outline" size="lg">CAPM Pathway Details</Button>
      </div>
    </div>
  )
}
