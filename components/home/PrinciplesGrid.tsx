import { PRINCIPLES } from '@/lib/constants'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function PrinciplesGrid() {
  const phaseColors: Record<string, string> = {
    internal: 'bg-light-navy text-navy',
    relational: 'bg-light-gold text-gold',
    regenerative: 'bg-green-50 text-green-700',
  }
  const phaseLabels: Record<string, string> = {
    internal: 'Internal',
    relational: 'Relational',
    regenerative: 'Regenerative',
  }
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Framework"
          title="The 7 Project Principles™"
          subtitle="Each principle maps directly to a PMI project management discipline — creating a framework that is professionally credible and personally transformative."
          center
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p) => (
            <div key={p.number} className="group border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {p.number}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${phaseColors[p.phase]}`}>
                  {phaseLabels[p.phase]}
                </span>
              </div>
              <h3 className="font-bold text-navy text-lg mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
              <p className="text-xs text-gold font-medium mb-2">PM: {p.pm}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{p.life}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
