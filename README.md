# Open Book Dating

![App Preview](https://imgix.cosmicjs.com/361cf050-1e4c-11f1-bc33-8fcc215f642c-autopilot-photo-1506794778202-cad84cf45f1d-1773344809926.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A bold, playful landing page for **Open Book Dating** — the revolutionary dating app where you have to show each other all of your open browser tabs before you can swipe to match. Because real connection starts with radical transparency. 📱💕

## Features

- 🏠 **Dynamic Hero Section** with animated headline, launch countdown timer, and waitlist CTA
- ⭐ **Features Showcase** powered by Cosmic CMS content
- 💰 **Pricing Tiers** with beautiful comparison cards
- 👥 **Meet the Team** with fun "tab confessions" from each member
- 💬 **Testimonials** from beta users with their tab counts when matched
- 📝 **Blog** with individual post pages for content marketing
- 📧 **Waitlist Signup** integrated throughout the site
- ⏰ **Launch Countdown Timer** building anticipation
- 📱 **Fully Responsive** mobile-first design
- 🎨 **Modern UI** with gradients, glassmorphism, and smooth animations

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69b317a262dcf6ad64d91fbc&clone_repository=69b3190f62dcf6ad64d9200f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials. User instructions: A matchmaking website (like tinder) for people, but they have to show each other all of the tabs on their phone before they can swipe to match. I need a landing page for this application that we will be building. I need people to get exciting about this fun new company and to get on the waiting list to be the first to know when we launch!"

### Code Generation Prompt

> "Build a Next.js application for a company website called 'Open Book Dating'. The content is managed in Cosmic CMS with the following object types: site-settings, features, pricing-tiers, team-members, blog-posts, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A matchmaking website (like tinder) for people, but they have to show each other all of the tabs on their phone before they can swipe to match. I need a landing page for this application that we will be building. I need people to get exciting about this fun new company and to get on the waiting list to be the first to know when we launch!"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **[Next.js 16](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI component library
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Cosmic](https://www.cosmicjs.com/docs)** — Headless CMS for content management
- **[@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk)** — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the content models set up

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd open-book-dating

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Run the development server
bun dev
```

### Environment Variables

Create a `.env.local` file with:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Objects

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single blog post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug: 'my-post' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses 6 content types from Cosmic:

| Object Type | Description |
|---|---|
| `site-settings` | App name, tagline, hero content, launch date |
| `features` | App features with emoji icons |
| `pricing-tiers` | Subscription tiers and pricing |
| `team-members` | Team bios with tab confessions |
| `blog-posts` | Blog content with featured images |
| `testimonials` | User quotes with ratings |

## Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in project settings
4. Deploy

### Netlify

1. Push to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->