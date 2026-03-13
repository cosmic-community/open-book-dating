import Link from 'next/link';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

// Changed: Added helper to safely extract author display name from object or string
function getAuthorName(author: unknown): string {
  if (!author) return '';
  if (typeof author === 'string') return author;
  if (typeof author === 'object' && author !== null) {
    const authorObj = author as { title?: string; metadata?: { name?: string } };
    return authorObj.metadata?.name || authorObj.title || '';
  }
  return '';
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post.metadata?.featured_image;
  const publishedDate = post.metadata?.published_date || post.created_at;
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  // Changed: Safely extract author name instead of rendering raw object
  const authorName = getAuthorName(post.metadata?.author);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
        {featuredImage && (
            <div className="aspect-video overflow-hidden">
              <img
                src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-6">
            {formattedDate && (
              <p className="text-xs text-pink-400 font-medium mb-2">
                {formattedDate}
              </p>
            )}
            <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors mb-2 line-clamp-2">
              {post.title}
            </h3>
            {authorName && (
              <p className="text-sm text-gray-400">By {authorName}</p>
            )}
          </div>
      </article>
    </Link>
  );
}