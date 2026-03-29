'use client'
import { clsx } from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  loading?: boolean
}

export function Button({
  children, href, onClick, variant = 'primary', size = 'md',
  className, disabled, type = 'button', loading,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-gold text-white hover:bg-amber-600 focus:ring-gold',
    secondary: 'bg-navy text-white hover:bg-blue-900 focus:ring-navy',
    outline: 'border-2 border-gold text-gold hover:bg-light-gold focus:ring-gold',
    ghost: 'text-navy hover:text-gold hover:bg-light-navy focus:ring-navy',
  }
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }
  const cls = clsx(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)

  if (href) return <Link href={href} className={cls}>{children}</Link>
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls}>
      {loading ? <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" /> : null}
      {children}
    </button>
  )
}
