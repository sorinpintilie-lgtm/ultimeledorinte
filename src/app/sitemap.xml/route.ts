import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://ultimeledorinte.com'
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  const lastModified = posts.length > 0 ? new Date(posts[0].frontmatter.date) : new Date()

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteUrl}/category/${cat.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const tagEntries: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${siteUrl}/tag/${tag.name.toLowerCase()}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [
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
}
