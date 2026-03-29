import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { CalloutBox } from '@/components/ui/CalloutBox'

export const metadata: Metadata = {
  title: 'Community — Wiser Generations',
  description: 'Join the Wiser Generations community for Life Is a Project™ participants. Sprint accountability, cohort spaces, CAPM study, and alumni networking.',
}

const SPACES = [
  { icon: '👋', name: 'Welcome & Introductions', desc: 'Post your Project Status and meet your fellow project managers.' },
  { icon: '🏃', name: 'The Sprint Wall', desc: 'Weekly sprint goals, check-ins, and milestone celebrations.' },
  { icon: '👥', name: 'Cohort Spaces', desc: 'Private spaces for each active in-person and virtual cohort.' },
  { icon: '🎓', name: 'Capstone Gallery', desc: 'Graduates share their completed project charters and capstone work.' },
  { icon: '📋', name: 'CAPM Pathway', desc: 'Study resources, exam tips, and support for CAPM applicants.' },
  { icon: '🌐', name: 'Alumni Network', desc: 'Graduate directory for ongoing professional connection.' },
]

export default function CommunityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Community</p>
      <h1 className="text-4xl font-bold text-navy mb-4">Join the Wiser Generations Community</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">
        A private community for Life Is a Project™ participants and graduates. Share sprint goals,
        celebrate milestones, connect with your cohort, and access CAPM study resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {SPACES.map((s) => (
          <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold transition-colors">
            <div className="text-2xl mb-3">{s.icon}</div>
            <p className="font-bold text-navy text-sm mb-1">{s.name}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <CalloutBox label="COMMUNITY ACCESS">
        Community access is included with the Digital + Community and Complete Program tiers.
        Purchase either qualifying tier and receive your community invitation automatically within 24 hours.
      </CalloutBox>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href="https://community.wisergenerations.com" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors">
          Enter the Community →
        </a>
        <Button href="/pricing" variant="outline">Get Community Access</Button>
      </div>
    </div>
  )
}
