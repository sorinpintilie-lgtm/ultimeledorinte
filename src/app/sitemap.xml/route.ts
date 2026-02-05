import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, getAllTags, type Post, type Category, type Tag } from '@/lib/posts'

export async function GET() {
  const siteUrl = 'https://ultimeledorinte.com'
  const posts: Post[] = getAllPosts()
  const categories: Category[] = getAllCategories()
  const tags: Tag[] = getAllTags()
  const lastModified = posts.length > 0 ? new Date(posts[0].frontmatter.date) : new Date()

  const postEntries: MetadataRoute.Sitemap = posts.map((post: Post) => ({
    url: `${siteUrl}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat: Category) => ({
    url: `${siteUrl}/category/${cat.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const tagEntries: MetadataRoute.Sitemap = tags.map((tag: Tag) => ({
    url: `${siteUrl}/tag/${tag.name.toLowerCase()}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/despre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...postEntries,
    ...categoryEntries,
    ...tagEntries,
  ]

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((entry) => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${(typeof entry.lastModified === 'string' ? new Date(entry.lastModified) : entry.lastModified || new Date()).toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`).join('')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  )
}
