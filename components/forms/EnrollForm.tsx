'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const INITIAL = {
  firstName: '', lastName: '', email: '', age: '18',
  registrantType: 'Young Professional', deliveryPreference: 'Not sure yet',
  diplomaStatus: 'Yes', sponsorName: '', sponsorEmail: '', howHeard: 'Search/Google', message: '',
}

export function EnrollForm() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch { setStatus('error') }
  }

  if (status === 'success') return (
    <div className="bg-light-gold border border-gold rounded-xl p-8 text-center">
      <div className="text-4xl mb-4">🎯</div>
      <h3 className="text-navy font-bold text-xl mb-2">Your Project Has Been Received</h3>
      <p className="text-gray-600 mb-4">We'll be in touch within 48 hours about your enrollment options.</p>
      <p className="text-gold font-medium italic">"Your life project is waiting." — Crystal Stewart</p>
    </div>
  )

  const field = (label: string, name: string, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-medium text-navy mb-1">{label}</label>
      <input type={type} value={(form as any)[name]} onChange={set(name)} placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
    </div>
  )
  const select = (label: string, name: string, opts: string[]) => (
    <div>
      <label className="block text-sm font-medium text-navy mb-1">{label}</label>
      <select value={(form as any)[name]} onChange={set(name)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
        {opts.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {field('First Name *', 'firstName', 'text', 'First name')}
        {field('Last Name *', 'lastName', 'text', 'Last name')}
      </div>
      {field('Email Address *', 'email', 'email', 'your@email.com')}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {select('Age', 'age', ['17', '18', '19', '20', '21', 'Other'])}
        {select('I am a:', 'registrantType', ['Student', 'Young Professional', 'Parent registering my student', 'Organization / Employer'])}
      </div>
      {select('Preferred Delivery', 'deliveryPreference', ['Online Self-Paced', 'Live Virtual Cohort', 'In-Person Metro Atlanta', 'Not sure yet'])}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">
          Do you hold a high school diploma?
          <span className="ml-1 text-gray-400 font-normal text-xs">(required for CAPM pathway)</span>
        </label>
        <select value={form.diplomaStatus} onChange={set('diplomaStatus')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold">
          {['Yes', 'Not yet', 'Equivalent / GED'].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {field('Project Sponsor Name', 'sponsorName', 'text', 'Parent, guardian, or mentor')}
        {field('Sponsor Email', 'sponsorEmail', 'email', 'sponsor@email.com')}
      </div>
      {select('How did you hear about us?', 'howHeard', ['PMI', 'LinkedIn', 'Church/Community', 'Referral', 'Search/Google', 'Social Media', 'Other'])}
      <div>
        <label className="block text-sm font-medium text-navy mb-1">Tell us about the project you want to build (optional)</label>
        <textarea rows={3} value={form.message} onChange={set('message')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          placeholder="What's the most important thing you're trying to build in your life right now?" />
      </div>
      {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
      <Button type="submit" loading={status === 'loading'} size="lg" className="w-full">Submit My Interest</Button>
      <p className="text-xs text-gray-400 text-center">We'll respond within 48 hours. No spam, ever.</p>
    </form>
  )
}
