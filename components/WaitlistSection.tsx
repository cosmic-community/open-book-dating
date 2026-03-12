import WaitlistForm from '@/components/WaitlistForm';

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker to-purple-950/30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">📖💕</div>
        <h2 className="text-4xl sm:text-5xl font-black mb-6">
          <span className="gradient-text">
            Ready to open up?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-4 leading-relaxed">
          Be among the first to experience dating with{' '}
          <span className="text-pink-400 font-semibold">
            radical transparency
          </span>
          . Join our waitlist and we&apos;ll let you know the moment we launch.
        </p>
        <p className="text-gray-400 mb-10">
          🔒 No spam, ever. Just one email when it&apos;s go time.
        </p>

        <WaitlistForm ctaText="Get Early Access 🚀" variant="section" />

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            2,000+ on the waitlist
          </span>
          <span>•</span>
          <span>Free to join</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}