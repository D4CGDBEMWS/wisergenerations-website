import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
            Enterprise Academy™ · Wiser Generations
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Life Is a Project.
            <br />
            <span className="text-gold">Are You Managing It?™</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            A 14-session leadership program for young professionals ages 17–21, built on the
            7 Project Principles™ — a proprietary project management framework for personal excellence.
            Earn your CAPM® pathway certificate. Online and in-person in Metro Atlanta.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button href="/pricing" size="lg">Start the Program</Button>
            <Button href="/program" variant="outline" size="lg">Explore the Framework</Button>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['PMI-Aligned', 'CAPM Pathway', '23 Education Hours', 'Ages 17–21', 'Online + Metro Atlanta'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-[0.02] rounded-full translate-x-1/2 translate-y-1/2" />
    </section>
  )
}
