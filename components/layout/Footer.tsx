import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="text-gold font-bold text-lg">Enterprise Academy™</p>
            <p className="text-gray-300 text-sm mt-1 mb-4">Wiser Generations · Life Is a Project™</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Equipping the next generation of professionals with the tools, mindset, and methodology
              to treat their life as their most important project — and execute it with excellence.
            </p>
            <p className="text-gold text-sm mt-4 font-medium">Smyrna, GA (Metro Atlanta)</p>
          </div>
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">Program</p>
            <div className="flex flex-col gap-2">
              {[['Program Overview', '/program'], ['Pricing', '/pricing'], ['CAPM Pathway', '/capm'], ['Enroll', '/enroll']].map(([l, h]) => (
                <Link key={h} href={h} className="text-sm text-gray-400 hover:text-gold transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-3">Company</p>
            <div className="flex flex-col gap-2">
              {[['About', '/about'], ['Blog', '/blog'], ['Community', '/community'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} className="text-sm text-gray-400 hover:text-gold transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Enterprise Academy™. All rights reserved.</p>
          <p className="text-gray-500 text-xs">
            The 7 Project Principles™, Life Is a Project™, and The Project Management Evangelist™ are trademarks of Enterprise Academy™.
          </p>
        </div>
      </div>
    </footer>
  )
}
