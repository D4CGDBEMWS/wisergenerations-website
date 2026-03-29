import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { CalloutBox } from '@/components/ui/CalloutBox'

export const metadata: Metadata = {
  title: 'CAPM® Pathway — PMI Certification for Young Professionals',
  description: 'Life Is a Project™ documents 23 hours of PMI-aligned education toward the CAPM® exam. Learn eligibility, application steps, and curriculum alignment.',
}

const ECO_MAP = [
  ['Principle 1: Initiate Intentionally', 'Initiating — Project Charter, Authorization'],
  ['Principle 2: Define Your Scope', 'Scope Management — WBS, Scope Statement, Creep Prevention'],
  ['Principle 3: Execute the Critical Path', 'Schedule Management — CPM, Float, Milestones'],
  ['Principle 4: Align Your Stakeholders', 'Stakeholder Management — Register, Engagement Plans'],
  ['Principle 5: Listen to the Requirements', 'Communications — Requirements Gathering, Active Listening'],
  ['Principle 6: Integrate Your Team', 'Integration Management — RACI, Team Coordination'],
  ['Principle 7: Run Your Retrospective', 'Agile Frameworks — Retrospectives, Continuous Improvement'],
]

const STEPS = [
  { n: 1, title: 'Go to pmi.org', body: 'Navigate to pmi.org. Click "Sign In" then "Create Account." Complete registration with your name, email, and country.' },
  { n: 2, title: 'Apply for the CAPM®', body: 'After login, go to Certifications → CAPM → Apply. The application takes about 30 minutes. PMI reviews in 5–10 business days.' },
  { n: 3, title: 'Enter Your Education Hours', body: 'In the Education section, enter: Institution: Enterprise Academy™ | Program: Life Is a Project™ | Hours: 23' },
  { n: 4, title: 'Upload Your Certificate', body: 'Download your completion certificate from your student portal. Upload it as proof of education in the PMI application.' },
  { n: 5, title: 'Schedule Your Exam', body: 'Once approved, pay the exam fee ($225 member / $300 non-member) and schedule your 150-question online proctored exam.' },
]

export default function CAPMPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">CAPM® Pathway</p>
      <h1 className="text-4xl font-bold text-navy mb-4">Your CAPM® Pathway Starts Here</h1>
      <p className="text-gray-600 text-lg mb-10">
        The Certified Associate in Project Management (CAPM)® is a globally recognized PMI credential
        for professionals at the start of their PM journey. Life Is a Project™ provides the 23 education
        hours you need to apply.
      </p>

      {/* What is CAPM */}
      <div className="bg-light-navy rounded-xl p-8 mb-10">
        <h2 className="text-xl font-bold text-navy mb-4">What Is the CAPM®?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Issued by', value: 'Project Management Institute (PMI)' },
            { label: 'Recognized', value: 'Globally by employers in every industry' },
            { label: 'Requirements', value: 'High school diploma + 23 hours PM education' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-gold font-bold uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-navy font-medium text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <CalloutBox label="ELIGIBILITY NOTE">
        CAPM® eligibility requires a high school diploma or equivalent. Students who hold or will hold
        a diploma before their exam date are eligible to apply their Enterprise Academy™ education
        hours toward the CAPM® application.
      </CalloutBox>

      {/* Curriculum alignment */}
      <h2 className="text-2xl font-bold text-navy mt-12 mb-6">How the 7 Project Principles™ Align to the PMI Exam</h2>
      <div className="overflow-hidden rounded-xl border border-gray-200 mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-4 py-3 font-semibold">7 Project Principle™</th>
              <th className="text-left px-4 py-3 font-semibold">PMI ECO Domain</th>
            </tr>
          </thead>
          <tbody>
            {ECO_MAP.map(([principle, domain], i) => (
              <tr key={principle} className={i % 2 === 0 ? 'bg-white' : 'bg-light-navy'}>
                <td className="px-4 py-3 text-navy font-medium">{principle}</td>
                <td className="px-4 py-3 text-gray-600">{domain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Application steps */}
      <h2 className="text-2xl font-bold text-navy mb-6">Step-by-Step: Applying After Graduation</h2>
      <div className="space-y-4 mb-12">
        {STEPS.map((s) => (
          <div key={s.n} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">{s.n}</div>
            <div>
              <p className="font-bold text-navy">{s.title}</p>
              <p className="text-gray-600 text-sm mt-1">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-navy rounded-xl p-6 text-white mb-8">
        <p className="text-gold font-bold mb-2">Students Who Haven't Earned Their Diploma Yet</p>
        <p className="text-gray-300 text-sm">
          You're building the knowledge base now. Every principle you master is real PM competency.
          When your diploma is in hand, your Enterprise Academy™ certificate is ready to submit.
          Save your materials and contact us when you're eligible.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button href="/pricing" size="lg">Enroll & Start the Pathway</Button>
        <a href="https://pmi.org/certifications/certified-associate-capm" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-light-navy transition-colors">
          Visit PMI.org →
        </a>
      </div>
    </div>
  )
}
