import type { Metadata } from 'next';
import { getBlogPosts } from '@/lib/cosmic';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog — Open Book Dating',
  description:
    'Tips, stories, and insights about authentic dating and radical transparency.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">
            Our Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="gradient-text">Open Book Journal</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts on dating, authenticity, and why your tabs say more about
            you than your bio ever could.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              No posts yet
            </h2>
            <p className="text-gray-400">
              We&apos;re working on our first articles. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}