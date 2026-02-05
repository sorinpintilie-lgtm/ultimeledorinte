# Ultimele dorințe ale unui văduv tânăr

Un jurnal despre viață, timp, călătorii și sens, scris cu luciditate și umor.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: MDX with local filesystem
- **Fonts**: Playfair Display (serif), Inter (sans)

## Features

- 📝 Full blog with categories, tags, search
- 🔍 Client-side search with filters
- 📱 Fully responsive design
- ♿ WCAG-accessible
- 🚀 Static generation for optimal performance
- 🔗 SEO-optimized (OpenGraph, Schema.org, sitemap, RSS)
- 🌙 Calm, editorial design with Romanian diacritics support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ultimeledorinte

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
ultimeledorinte/
├── content/
│   └── posts/           # MDX files (blog posts)
│       ├── viata-unui-senior-la-buzias.mdx
│       ├── cum-am-devenit-vedeta-internationala.mdx
│       └── am-trait-o-zi-in-care-era-sa-mor.mdx
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── blog/
│   │   │   ├── [slug]/  # Individual post pages
│   │   │   └── page.tsx # Blog index with search/filters
│   │   ├── category/
│   │   │   └── [slug]/  # Category pages
│   │   ├── tag/
│   │   │   └── [slug]/  # Tag pages
│   │   ├── despre/      # About page
│   │   ├── rss.xml/     # RSS feed
│   │   └── sitemap.xml/ # Sitemap
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   ├── Search.tsx
│   │   ├── Pagination.tsx
│   │   └── MDXComponents.tsx
│   └── lib/             # Utility functions
│       └── posts.ts     # Post fetching/manipulation
├── scripts/
│   └── import-wordpress.ts  # WordPress import scaffold
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Content Management

### Adding New Posts

Create a new `.mdx` file in `content/posts/` with the following frontmatter:

```yaml
---
title: "Titlul articolului"
slug: "titlul-articolului"
date: "2024-01-21"
author: "Dan Goldiș"
category: 
  name: "Numele categoriei"
  slug: "slug-ul-categoriei"
tags: ["eticheta1", "eticheta2"]
excerpt: "Un rezumat scurt al articolului (max 25 cuvinte)"
coverImage: "/path/to/image.jpg"  # optional
featured: true  # optional, for homepage featured section
---

# Conținutul articolului în MDX
```

### Post Structure

Each post supports:
- Full Markdown/MDX syntax
- Frontmatter metadata
- Custom MDX components
- Estimated reading time calculation
- Automatic table of contents (for long posts)
- Related posts based on category/tags

## Design System

### Colors

- Background: `#FAF7F2` (warm off-white)
- Text: `#141414` (near-black)
- Secondary text: `#4B4B4B`
- Accent: `#0F3D3E` (muted forest green)
- Borders: `#E8E1D8`

### Typography

- Headings: Playfair Display
- Body: Inter
- Code: System mono

### Spacing

- Max line width: 70–78 characters for readability
- Comfortable line-height (1.7+ for body text)
- Generous whitespace

## SEO

The site includes:
- OpenGraph meta tags
- Twitter card support
- Schema.org BlogPosting markup
- Automatic sitemap.xml
- RSS feed (rss.xml)
- Canonical URLs

## Accessibility

- Semantic HTML structure
- Skip links for keyboard navigation
- Proper heading hierarchy
- ARIA labels where needed
- Focus states for interactive elements
- WCAG-friendly color contrast

## Scripts

### WordPress Import

A scaffold for importing content from WordPress is available at `scripts/import-wordpress.ts`:

```bash
npx tsx scripts/import-wordpress.ts
```

Before running, update `SOURCE_URLS` with the WordPress URLs you want to import.

## License

MIT License - feel free to use this template for your own blog.

## Credits

Built with ❤️ using Next.js and TailwindCSS.
