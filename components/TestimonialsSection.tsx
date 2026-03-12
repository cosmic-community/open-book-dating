import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-dark to-brand-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-3">
            Love Stories
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">What our beta users say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real people. Real tabs. Real connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const photo = testimonial.metadata?.photo;
            const rating = testimonial.metadata?.rating ?? 5;
            const ratingNum = typeof rating === 'number' ? rating : parseInt(String(rating), 10) || 5;

            return (
              <div
                key={testimonial.id}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < ratingNum ? 'text-yellow-400' : 'text-gray-600'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.metadata?.quote || ''}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  {photo ? (
                    <img
                      src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata?.name || testimonial.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-sm">
                      💕
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.metadata?.name || testimonial.title}
                    </p>
                    {testimonial.metadata?.tabs_open_when_matched && (
                      <p className="text-xs text-pink-400">
                        📱 {testimonial.metadata.tabs_open_when_matched} tabs
                        open when matched
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}