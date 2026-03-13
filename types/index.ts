export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface SiteSettings {
  id: string;
  slug: string;
  title: string;
  metadata: {
    app_name: string;
    tagline: string;
    hero_headline: string;
    hero_subtext: string;
    hero_image?: CosmicFile;
    cta_button_text: string;
    launch_date?: string;
  };
}

export interface Feature {
  id: string;
  slug: string;
  title: string;
  metadata: {
    icon_emoji: string;
    title: string;
    description: string;
  };
}

export interface SelectDropdownValue {
  key: string;
  value: string;
}

export interface PricingTier {
  id: string;
  slug: string;
  title: string;
  metadata: {
    tier_name: string;
    price: string;
    billing_period?: SelectDropdownValue | string;
    features_list: string;
    featured_tier: boolean;
    cta_text?: string;
  };
}

export interface TeamMember {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    role: string;
    bio?: string;
    photo?: CosmicFile;
    tab_confession?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content?: string;
  created_at?: string;
  metadata: {
    content: string;
    featured_image?: CosmicFile;
    author?: TeamMember;
    published_date?: string;
  };
}

export interface Testimonial {
  id: string;
  slug: string;
  title: string;
  metadata: {
    name: string;
    quote: string;
    photo?: CosmicFile;
    rating?: number;
    tabs_open_when_matched?: number;
  };
}