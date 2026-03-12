import type { Feature } from '@/types';

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-purple-950/20 to-brand-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">
            Why Open Book?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">Features that keep it real</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No filters, no facades. Just radically honest connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.metadata?.icon_emoji || '✨'}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.metadata?.title || feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.metadata?.description || 'An awesome feature.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}