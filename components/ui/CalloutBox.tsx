interface CalloutBoxProps {
  label: string
  children: React.ReactNode
  variant?: 'gold' | 'navy'
}

export function CalloutBox({ label, children, variant = 'gold' }: CalloutBoxProps) {
  const styles = {
    gold: { border: 'border-l-4 border-gold bg-light-gold', label: 'text-gold', text: 'text-navy' },
    navy: { border: 'border-l-4 border-navy bg-light-navy', label: 'text-navy', text: 'text-gray-700' },
  }
  const s = styles[variant]
  return (
    <div className={`${s.border} p-4 rounded-r-lg my-4`}>
      <p className={`text-xs font-bold uppercase tracking-wider ${s.label} mb-1`}>{label}</p>
      <p className={`text-sm italic ${s.text}`}>{children}</p>
    </div>
  )
}
