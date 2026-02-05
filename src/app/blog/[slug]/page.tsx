import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { format } from 'date-fns'
import { ro } from 'date-fns/locale'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug, getPostsByCategory, getPostsByTag } from '@/lib/posts'
import { mdxComponents } from '@/components/MDXComponents'
import { PostCard } from '@/components/PostCard'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.frontmatter.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Articol negăsit',
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content } = post
  const readingTime = Math.ceil(content.split(/\s+/).length / 200)

  // Get related posts
  const categoryPosts = getPostsByCategory(frontmatter.category.slug)
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
  
  // If not enough category posts, add tag posts
  let relatedPosts = [...categoryPosts]
  if (relatedPosts.length < 3) {
    const tagPosts = getPostsByTag(frontmatter.tags[0] || '')
      .filter((p) => p.slug !== slug && !relatedPosts.some((rp) => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length)
    relatedPosts = [...relatedPosts, ...tagPosts]
  }

  // Get prev/next posts
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <article className="animate-fade-in">
      {/* Breadcrumb */}
      <nav className="container-custom py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-foreground">Acasă</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link 
              href={`/category/${frontmatter.category.slug}`} 
              className="hover:text-foreground"
            >
              {frontmatter.category.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground truncate max-w-[200px]">{frontmatter.title}</li>
        </ol>
      </nav>

      {/* Post Header */}
      <header className="container-custom py-8">
        <Link
          href={`/category/${frontmatter.category.slug}`}
          className="inline-block text-sm uppercase tracking-wider text-accent mb-4 hover:underline"
        >
          {frontmatter.category.name}
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          {frontmatter.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <time dateTime={frontmatter.date}>
            {format(new Date(frontmatter.date), 'd MMMM yyyy', { locale: ro })}
          </time>
          <span>·</span>
          <span>{readingTime} min citire</span>
          <span>·</span>
          <span>de {frontmatter.author}</span>
        </div>

        {frontmatter.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag.toLowerCase()}`}
                className="text-sm px-3 py-1 bg-border/50 rounded-full text-muted hover:bg-border transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className="container-custom">
        <div className="prose-custom max-w-3xl">
          <p className="lead text-xl md:text-2xl font-serif italic text-muted mb-8">
            {frontmatter.excerpt}
          </p>
          <MDXRemote source={content} components={mdxComponents} />
          
          {/* Source */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted">
              <strong>Sursa:</strong>{' '}
              <a 
                href={`https://ultimeledorinte.com/${frontmatter.date.split('-')[0]}/${frontmatter.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                ultimeledorinte.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container-custom py-12 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevPost && (
            <Link
              href={`/blog/${prevPost.frontmatter.slug}`}
              className="group p-4 border border-border rounded-lg hover:border-accent/30 transition-colors"
            >
              <span className="text-xs text-muted">← Articol anterior</span>
              <p className="mt-2 font-serif group-hover:text-accent transition-colors">
                {prevPost.frontmatter.title}
              </p>
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.frontmatter.slug}`}
              className="group p-4 border border-border rounded-lg hover:border-accent/30 transition-colors md:text-right"
            >
              <span className="text-xs text-muted">Articol următor →</span>
              <p className="mt-2 font-serif group-hover:text-accent transition-colors">
                {nextPost.frontmatter.title}
              </p>
            </Link>
          )}
        </div>
      </nav>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container-custom py-12 border-t border-border">
          <h2 className="font-serif text-2xl mb-8">Articole conexe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} variant="small" />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
