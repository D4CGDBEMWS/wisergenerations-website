interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : ''}>
      {eyebrow && (
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}
