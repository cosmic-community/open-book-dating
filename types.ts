export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    app_name?: string;
    tagline?: string;
    hero_headline?: string;
    hero_subtext?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    cta_button_text?: string;
    launch_date?: string;
  };
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    icon_emoji?: string;
    title?: string;
    description?: string;
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    tier_name?: string;
    price?: string;
    billing_period?: string;
    features_list?: string;
    featured_tier?: boolean | string;
    cta_text?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    tab_confession?: string;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: string;
    published_date?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name?: string;
    quote?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
    tabs_open_when_matched?: string;
  };
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}