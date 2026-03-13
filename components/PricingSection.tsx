import type { PricingTier } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic'; // Changed: import from correct module

interface PricingSectionProps {
  tiers: PricingTier[];
}

export default function PricingSection({ tiers }: PricingSectionProps) {
  if (!tiers || tiers.length === 0) return null;

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">Plans for every vibe</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free. Upgrade when you&apos;re ready to get serious about
            being open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => {
            const isFeatured =
              tier.metadata?.featured_tier === true ||
              getMetafieldValue(tier.metadata?.featured_tier) === 'true';
            const featuresList = tier.metadata?.features_list || '';
            const features = featuresList
              .split('\n')
              .map((f: string) => f.trim())
              .filter(Boolean);

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  isFeatured
                    ? 'gradient-bg shadow-2xl shadow-pink-500/20 scale-105'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-white text-brand-dark text-xs font-bold uppercase tracking-wider">
                      Most Popular 🔥
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tier.metadata?.tier_name || tier.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">
                      {tier.metadata?.price || '$0'}
                    </span>
                    {tier.metadata?.billing_period && (
                      <span className="text-gray-300 text-sm">
                        /{getMetafieldValue(tier.metadata.billing_period)}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span
                        className={
                          isFeatured ? 'text-white/90' : 'text-gray-300'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                    isFeatured
                      ? 'bg-white text-brand-dark hover:bg-gray-100'
                      : 'glass text-white hover:bg-white/20'
                  }`}
                >
                  {tier.metadata?.cta_text || 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}