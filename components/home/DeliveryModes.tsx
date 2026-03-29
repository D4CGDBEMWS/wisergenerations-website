import { SectionHeader } from '@/components/ui/SectionHeader'

const modes = [
  {
    icon: '💻',
    title: 'Online Self-Paced',
    subtitle: 'Work on your schedule',
    features: ['All 14 sessions on demand', 'Student Workbook PDF', 'Completion certificate', 'CAPM documentation'],
  },
  {
    icon: '🎥',
    title: 'Live Virtual Cohort',
    subtitle: 'Join a 14-week group',
    features: ['Live sessions via Zoom', 'Cohort accountability', 'Real-time facilitator feedback', 'Community access'],
  },
  {
    icon: '📍',
    title: 'In-Person · Metro Atlanta',
    subtitle: 'Smyrna, GA · Max 20 seats',
    features: ['Weekly in-person sessions', 'Facilitator-led by Crystal', 'Physical workbook included', 'Capstone ceremony'],
  },
]

export function DeliveryModes() {
  return (
    <section className="py-20 bg-light-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Delivery Options" title="Choose How You Learn" center
          subtitle="Same 7 Project Principles™ framework. Three ways to experience it." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((m) => (
            <div key={m.title} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="text-navy font-bold text-xl mb-1">{m.title}</h3>
              <p className="text-gold text-sm font-medium mb-4">{m.subtitle}</p>
              <ul className="space-y-2">
                {m.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-gold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
