'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
      <div className="text-4xl mb-4">✓</div>
      <h3 className="text-navy font-bold text-xl mb-2">Message Received</h3>
      <p className="text-gray-600">Crystal or a team member will respond within 2 business days.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Name *</label>
          <input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy mb-1">Email *</label>
          <input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Subject</label>
        <select value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
          {['General Inquiry', 'Program Question', 'Sponsorship', 'Speaking', 'Partnership'].map(s => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Message *</label>
        <textarea required rows={5} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="How can Crystal help you?" />
      </div>
      {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
      <Button type="submit" loading={status === 'loading'} size="lg">Send Message</Button>
    </form>
  )
}
