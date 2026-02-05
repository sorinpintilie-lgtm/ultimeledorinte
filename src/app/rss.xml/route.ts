import { Feed } from 'feed'
import { getAllPosts } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export async function GET() {
  const posts: Post[] = getAllPosts()
  const siteUrl = 'https://ultimeledorinte.com'

  const feed = new Feed({
    title: 'Ultimele dorințe ale unui văduv tânăr',
    description: 'Un jurnal despre viață, timp, călătorii și sens, scris cu luciditate și umor.',
    id: siteUrl,
    link: siteUrl,
    language: 'ro',
    copyright: `© ${new Date().getFullYear()} Dan Goldiș. Toate drepturile rezervate.`,
    updated: posts.length > 0 ? new Date(posts[0].frontmatter.date) : new Date(),
    generator: 'Next.js + Feed',
  })

  posts.forEach((post: Post) => {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${siteUrl}/blog/${post.frontmatter.slug}`,
      link: `${siteUrl}/blog/${post.frontmatter.slug}`,
      description: post.frontmatter.excerpt,
      content: post.frontmatter.excerpt,
      author: [
        {
          name: post.frontmatter.author,
        },
      ],
      date: new Date(post.frontmatter.date),
      categories: post.frontmatter.tags,
    } as any)
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
