import {
  getSiteSettings,
  getFeatures,
  getPricingTiers,
  getTeamMembers,
  getBlogPosts,
  getTestimonials,
} from '@/lib/cosmic';

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WaitlistSection from '@/components/WaitlistSection';
import BlogCard from '@/components/BlogCard';

export const revalidate = 60;

export default async function HomePage() {
  const [settings, features, pricingTiers, teamMembers, blogPosts, testimonials] =
    await Promise.all([
      getSiteSettings(),
      getFeatures(),
      getPricingTiers(),
      getTeamMembers(),
      getBlogPosts(),
      getTestimonials(),
    ]);

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection settings={settings} />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection tiers={pricingTiers} />
      <TeamSection members={teamMembers} />

      {/* Blog Preview Section */}
      {recentPosts.length > 0 && (
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-purple-950/20 to-brand-darker" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
                From the Blog
              </p>
              <h2 className="text-4xl sm:text-5xl font-black mb-4">
                <span className="gradient-text">Fresh takes on dating</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tips, stories, and insights from the Open Book team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/15 transition-all"
              >
                View All Posts →
              </a>
            </div>
          </div>
        </section>
      )}

      <WaitlistSection />
    </>
  );
}