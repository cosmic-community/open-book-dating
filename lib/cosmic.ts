import { createBucketClient } from '@cosmicjs/sdk';
import type {
  SiteSettings,
  Feature,
  PricingTier,
  TeamMember,
  BlogPost,
  Testimonial,
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects
      .find({ type: 'site-settings' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    const settings = response.objects[0];
    if (!settings) return null;
    return settings as SiteSettings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    return response.objects as Feature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    console.error('Error fetching features:', error);
    return [];
  }
}

export async function getPricingTiers(): Promise<PricingTier[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pricing-tiers' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    return response.objects as PricingTier[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    console.error('Error fetching pricing tiers:', error);
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'slug', 'title', 'metadata', 'content'])
      .depth(1);
    const posts = response.objects as BlogPost[];
    return posts.sort((a, b) => {
      const dateA = new Date(a.metadata?.published_date || a.created_at).getTime();
      const dateB = new Date(b.metadata?.published_date || b.created_at).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'slug', 'title', 'metadata', 'content', 'created_at'])
      .depth(1);
    return response.object as BlogPost;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    console.error('Error fetching testimonials:', error);
    return [];
  }
}