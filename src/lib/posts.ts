import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  author: string
  category: {
    name: string
    slug: string
  }
  tags: string[]
  excerpt: string
  coverImage?: string
  featured?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: data.slug,
        frontmatter: data as PostFrontmatter,
        content,
      }
    })

  return allPosts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts()
  return posts.find((post) => post.frontmatter.slug === slug) || null
}

export function getFeaturedPosts(): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.frontmatter.featured)
}

export function getPostsByCategory(categorySlug: string): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => 
    post.frontmatter.category.slug === categorySlug
  )
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => 
    post.frontmatter.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const posts = getAllPosts()
  const categoryMap = new Map<string, number>()

  posts.forEach((post) => {
    const slug = post.frontmatter.category.slug
    categoryMap.set(slug, (categoryMap.get(slug) || 0) + 1)
  })

  return Array.from(categoryMap.entries()).map(([slug, count]) => ({
    name: posts.find(p => p.frontmatter.category.slug === slug)?.frontmatter.category.name || slug,
    slug,
    count,
  }))
}

export function getAllTags(): { name: string; count: number }[] {
  const posts = getAllPosts()
  const tagMap = new Map<string, number>()

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
    })
  })

  return Array.from(tagMap.entries()).map(([name, count]) => ({
    name,
    count,
  }))
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
