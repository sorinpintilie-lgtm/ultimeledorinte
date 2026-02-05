/**
 * WordPress Import Script
 * 
 * This script is a placeholder for migrating content from WordPress to MDX.
 * It provides a scaffold for fetching HTML from WordPress URLs and converting
 * them to MDX format with frontmatter.
 * 
 * Usage:
 *   npx tsx scripts/import-wordpress.ts
 * 
 * Before running:
 *   1. Update the SOURCE_URLS array with the WordPress URLs you want to import
 *   2. Run npm install to install dependencies
 *   3. Run the script
 */

interface PostFrontmatter {
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
}

// TODO: Update these URLs with the actual WordPress URLs you want to import
const SOURCE_URLS: string[] = [
  // 'https://ultimeledorinte.com/2025/08/11/viata-unui-senior-la-buzias/',
  // Add more URLs here
]

async function fetchHTML(url: string): Promise<string> {
  // TODO: Implement actual HTML fetching
  // This is a placeholder that shows the structure
  console.log(`Fetching: ${url}`)
  
  // const response = await fetch(url)
  // return await response.text()
  
  return ''
}

function extractTitle(html: string): string {
  // TODO: Implement title extraction from HTML
  // Example: /<h1[^>]*>(.*?)<\/h1>/i
  return 'Title not extracted'
}

function extractDate(html: string): string {
  // TODO: Implement date extraction from HTML
  // Look for date meta tags or post content dates
  return new Date().toISOString().split('T')[0]
}

function extractContent(html: string): string {
  // TODO: Implement content extraction
  // Extract main content, clean up HTML, convert to MDX
  
  // Steps:
  // 1. Find the post content container
  // 2. Remove WordPress-specific elements (shortcodes, comments, etc.)
  // 3. Convert HTML to Markdown/MDX
  // 4. Handle special cases (images, links, etc.)
  
  return 'Content not extracted'
}

function extractExcerpt(html: string): string {
  // TODO: Implement excerpt extraction
  // Look for meta description or first paragraph
  return 'Excerpt not extracted'
}

function extractTags(html: string): string[] {
  // TODO: Implement tag extraction
  // Look for tag meta tags or tag links in the HTML
  return []
}

function extractCategory(html: string): { name: string; slug: string } {
  // TODO: Implement category extraction
  return { name: 'General', slug: 'general' }
}

function extractCoverImage(html: string): string | undefined {
  // TODO: Implement featured image extraction
  return undefined
}

function generateFrontmatter(post: {
  title: string
  slug: string
  date: string
  author: string
  category: { name: string; slug: string }
  tags: string[]
  excerpt: string
  coverImage?: string
}): string {
  return `---
title: "${post.title}"
slug: "${post.slug}"
date: "${post.date}"
author: "${post.author}"
category: 
  name: "${post.category.name}"
  slug: "${post.category.slug}"
tags: [${post.tags.map(t => `"${t}"`).join(', ')}]
excerpt: "${post.excerpt}"
${post.coverImage ? `coverImage: "${post.coverImage}"` : ''}
---
`
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function importPost(url: string): Promise<void> {
  console.log(`\nImporting: ${url}`)
  
  try {
    const html = await fetchHTML(url)
    
    const title = extractTitle(html)
    const slug = slugify(title)
    const date = extractDate(html)
    const content = extractContent(html)
    const excerpt = extractExcerpt(html)
    const tags = extractTags(html)
    const category = extractCategory(html)
    const coverImage = extractCoverImage(html)
    
    const frontmatter = generateFrontmatter({
      title,
      slug,
      date,
      author: 'Dan Goldiș',
      category,
      tags,
      excerpt,
      coverImage,
    })
    
    const mdxContent = frontmatter + '\n\n' + content
    
    // TODO: Write to file
    // const filename = `content/posts/${slug}.mdx`
    // fs.writeFileSync(filename, mdxContent)
    // console.log(`Written: ${filename}`)
    
    console.log('Frontmatter generated (file writing not implemented)')
    console.log('---')
    console.log(mdxContent.slice(0, 500) + '...')
    
  } catch (error) {
    console.error(`Error importing ${url}:`, error)
  }
}

async function main() {
  console.log('WordPress to MDX Import Script')
  console.log('==============================\n')
  
  if (SOURCE_URLS.length === 0) {
    console.log('No URLs to import. Update SOURCE_URLS in scripts/import-wordpress.ts')
    return
  }
  
  console.log(`Found ${SOURCE_URLS.length} URLs to import\n`)
  
  for (const url of SOURCE_URLS) {
    await importPost(url)
  }
  
  console.log('\nImport complete!')
  console.log('\nNext steps:')
  console.log('1. Review generated MDX files')
  console.log('2. Clean up content (paraphrase, format)')
  console.log('3. Add additional metadata as needed')
  console.log('4. Move files to content/posts/ directory')
}

// Run the script
main().catch(console.error)
