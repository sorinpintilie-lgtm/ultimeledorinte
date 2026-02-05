import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllTags, getPostsByTag, getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'

interface TagPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    slug: tag.name.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const tags = getAllTags()
  const tag = tags.find((t) => t.name.toLowerCase() === decodedSlug.toLowerCase())

  if (!tag) {
    return {
      title: 'Etichetă negăsită',
    }
  }

  return {
    title: `#${tag.name} | Ultimele dorințe`,
    description: `Articole etichetate cu ${tag.name}`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const tags = getAllTags()
  const tag = tags.find((t) => t.name.toLowerCase() === decodedSlug.toLowerCase())

  if (!tag) {
    notFound()
  }

  const posts = getPostsByTag(tag.name)

  return (
    <div className="container-custom py-12 animate-fade-in">
      <header className="mb-8">
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-foreground">Acasă</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">#{tag.name}</li>
          </ol>
        </nav>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">#{tag.name}</h1>
        <p className="text-muted">
          {posts.length} {posts.length === 1 ? 'articol' : 'articole'} etichetate cu „{tag.name}”
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} variant="large" />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted">Nu există articole cu această etichetă încă.</p>
          <Link href="/blog" className="text-accent hover:underline mt-4 inline-block">
            Vezi toate articolele
          </Link>
        </div>
      )}
    </div>
  )
}
