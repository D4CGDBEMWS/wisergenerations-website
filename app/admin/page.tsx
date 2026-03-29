'use client'
import { useState } from 'react'

interface Row { [key: string]: string | number }

function Table({ rows, title }: { rows: Row[]; title: string }) {
  if (!rows.length) return <p className="text-gray-400 text-sm py-4">No {title.toLowerCase()} yet.</p>
  const cols = Object.keys(rows[0]).filter(k => k !== 'id')
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-navy text-white">
            {cols.map(c => <th key={c} className="text-left px-3 py-2 font-medium capitalize">{c.replace(/_/g, ' ')}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {cols.map(c => (
                <td key={c} className="px-3 py-2 text-gray-600 max-w-xs truncate">
                  {c === 'created_at' ? new Date(row[c] as string).toLocaleDateString() : String(row[c] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [data, setData] = useState<{ contacts: Row[]; interests: Row[]; enrollments: Row[] } | null>(null)
  const [tab, setTab] = useState<'contacts' | 'interests' | 'enrollments'>('contacts')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/submissions', {
        headers: { 'x-admin-password': password },
      })
      if (res.status === 401) { setError('Incorrect password.'); setLoading(false); return }
      const json = await res.json()
      setData(json)
      setAuthed(true)
    } catch {
      setError('Could not connect. Try again.')
    }
    setLoading(false)
  }

  function downloadCSV(rows: Row[], filename: string) {
    if (!rows.length) return
    const cols = Object.keys(rows[0])
    const csv = [cols.join(','), ...rows.map(r => cols.map(c => JSON.stringify(r[c] ?? '')).join(','))].join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    a.download = filename
    a.click()
  }

  if (!authed) return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        <h1 className="text-2xl font-bold text-navy mb-6 text-center">Admin Dashboard</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-1">Admin Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Enter admin password" required />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-navy text-white font-semibold py-2.5 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-50">
            {loading ? 'Checking...' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  )

  const tabs = [
    { key: 'contacts' as const, label: 'Contact Forms', count: data?.contacts.length ?? 0 },
    { key: 'interests' as const, label: 'Program Interest', count: data?.interests.length ?? 0 },
    { key: 'enrollments' as const, label: 'Enrollments', count: data?.enrollments.length ?? 0 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-navy">Admin Dashboard</h1>
        <button onClick={() => setAuthed(false)} className="text-sm text-gray-400 hover:text-gray-600">Sign Out</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {tabs.map(t => (
          <div key={t.key} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-navy">{t.count}</p>
            <p className="text-gray-500 text-sm mt-1">{t.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${tab === t.key ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-navy'}`}>
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      <div className="flex justify-end mb-4">
        <button onClick={() => downloadCSV(data![tab] as Row[], `${tab}-${new Date().toISOString().split('T')[0]}.csv`)}
          className="text-sm text-navy border border-navy px-3 py-1.5 rounded-lg hover:bg-light-navy transition-colors">
          ⬇ Export CSV
        </button>
      </div>

      {data && <Table rows={data[tab] as Row[]} title={tab} />}
    </div>
  )
}
