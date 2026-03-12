import type { SiteSettings } from '@/types';
import CountdownTimer from '@/components/CountdownTimer';
import WaitlistForm from '@/components/WaitlistForm';

interface HeroSectionProps {
  settings: SiteSettings | null;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const headline =
    settings?.metadata?.hero_headline ||
    'Dating, but make it transparent.';
  const subtext =
    settings?.metadata?.hero_subtext ||
    'Show your tabs. Find your match. No hiding.';
  const ctaText = settings?.metadata?.cta_button_text || 'Join the Waitlist';
  const launchDate = settings?.metadata?.launch_date;
  const heroImage = settings?.metadata?.hero_image;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-purple-950/50 to-brand-darker" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Coming Soon — Be the first to know
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
              <span className="gradient-text">{headline}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {subtext}
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <WaitlistForm ctaText={ctaText} />
            </div>

            {launchDate && (
              <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-medium">
                  Launching in
                </p>
                <CountdownTimer launchDate={launchDate} />
              </div>
            )}
          </div>

          {/* Right: Hero visual */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {heroImage ? (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
                <img
                  src={`${heroImage.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt="Open Book Dating"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
                <div className="relative w-80 h-[500px] glass rounded-3xl p-6 flex flex-col items-center justify-center">
                  <div className="text-8xl mb-6 animate-float">📱</div>
                  <div className="space-y-3 w-full">
                    <div className="glass rounded-lg px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                      <span>🔍</span> How to impress on a first date
                    </div>
                    <div className="glass rounded-lg px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                      <span>🍕</span> Best pizza near me
                    </div>
                    <div className="glass rounded-lg px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                      <span>🐱</span> Cute cat videos compilation
                    </div>
                    <div className="glass rounded-lg px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                      <span>📚</span> Am I the main character?
                    </div>
                    <div className="glass rounded-lg px-4 py-3 text-sm text-pink-300 flex items-center gap-2">
                      <span>💕</span> Open Book Dating waitlist
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}