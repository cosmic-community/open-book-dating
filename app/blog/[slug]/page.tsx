// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found — Open Book Dating' };
  }

  return {
    title: `${post.title} — Open Book Dating Blog`,
    description:
      post.metadata?.content?.substring(0, 160)?.replace(/[#*_\->\[\]]/g, '') ||
      'Read this post on the Open Book Dating blog.',
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post.metadata?.featured_image;
  const publishedDate =
    post.metadata?.published_date || post.created_at;
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  // Changed: Get author name safely since author is an object, not a string
  const authorName = post.metadata?.author?.metadata?.name || post.metadata?.author?.title || '';
  const markdownContent = post.metadata?.content || '';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <article>
          {featuredImage && (
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}

          <header className="mb-10">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              {formattedDate && <span>{formattedDate}</span>}
              {authorName && (
                <>
                  <span>•</span>
                  <span>By {authorName}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Changed: Use MarkdownRenderer instead of dangerouslySetInnerHTML */}
          <div
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-white
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-pink-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-blockquote:border-pink-500 prose-blockquote:text-gray-300
              prose-code:text-pink-400
              prose-img:rounded-xl
              prose-li:text-gray-300
              prose-hr:border-white/10"
          >
            <MarkdownRenderer content={markdownContent} />
          </div>
        </article>

        {/* Back to blog CTA */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/15 transition-all"
          >
            ← More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}