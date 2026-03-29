import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { CalloutBox } from '@/components/ui/CalloutBox'

export const metadata: Metadata = {
  title: 'About Crystal Stewart & Enterprise Academy™',
  description: 'Crystal Stewart is The Project Management Evangelist™ and Founder of Enterprise Academy™. Learn the story behind Life Is a Project™.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">About</p>
      <h1 className="text-4xl font-bold text-navy mb-8">Crystal Stewart — The Project Management Evangelist™</h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p className="text-xl text-gray-600 leading-relaxed">
          Founder & CEO of Enterprise Academy™. Crystal brings PMI methodology, faith-driven purpose,
          and 20+ years of enterprise transformation experience to a program designed to give young
          professionals the same tools that high-performing teams use — applied to the most important
          project of their lives: themselves.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10">Enterprise Academy™</h2>
        <p>
          Based in Smyrna, Georgia, Enterprise Academy™ delivers professional development programs that
          certify and transform the next generation of project managers. Our flagship program,
          Life Is a Project™, serves young professionals ages 17–21 through both online and in-person
          formats across Metro Atlanta and beyond.
        </p>

        <CalloutBox label="Mission">
          To equip every young professional with the tools, mindset, and methodology to treat their life
          as their most important project — and execute it with excellence.
        </CalloutBox>

        <h2 className="text-2xl font-bold text-navy mt-10">The Origin of the 7 Project Principles™</h2>
        <p>
          Twenty years of enterprise transformation work will teach you a few things about projects.
          It will teach you that the most sophisticated tools in the world cannot save a project whose
          PM does not know what they are building. And if you pay close enough attention, it will teach
          you that the same discipline separating a successful project from a failed one is exactly what
          separates a purposeful life from a reactive one.
        </p>
        <p>
          That realization became Life Is a Project™. The 7 Project Principles™ are Crystal's original
          intellectual contribution — a proprietary framework that translates PMI project management
          methodology into a personal leadership system for young professionals.
        </p>

        <h2 className="text-2xl font-bold text-navy mt-10">Faith and Framework</h2>
        <p>
          Crystal cannot separate her faith from her work. Life Is a Project™ is available in two
          editions: the Kingdom Edition (full faith integration with the 7 Spheres of Influence) and
          the Leadership Edition (secular professional leadership, identical framework). Both are built
          on the conviction that your life is a project worth managing with excellence.
        </p>

        <div className="bg-navy rounded-xl p-8 text-white mt-10">
          <p className="text-gold font-bold uppercase text-xs tracking-widest mb-3">Crystal's Credentials</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✓ PMP® — Project Management Professional (PMI)</li>
            <li>✓ 20+ years enterprise project management and transformation</li>
            <li>✓ Founder & CEO, Enterprise Academy™</li>
            <li>✓ Creator, The 7 Project Principles™ (proprietary methodology)</li>
            <li>✓ Based in Smyrna, GA (Metro Atlanta)</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/program">Explore the Program</Button>
        <Button href="/contact" variant="outline">Contact Crystal</Button>
      </div>
    </div>
  )
}
