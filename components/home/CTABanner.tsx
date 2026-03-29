import { Button } from '@/components/ui/Button'

export function CTABanner() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Enroll Today
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Life Project Is Waiting
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Join the next cohort of young professionals who are managing their lives with the
          discipline of an enterprise project manager.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/pricing" size="lg">View Pricing & Enroll</Button>
          <Button href="/contact" variant="outline" size="lg">Talk to Crystal</Button>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Use code <span className="text-gold font-mono font-bold">LAUNCH25</span> for 25% off your first enrollment.
        </p>
      </div>
    </section>
  )
}
