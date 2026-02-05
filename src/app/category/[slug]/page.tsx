import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllPosts, getPostsByCategory, getAllCategories } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import Link from 'next/link'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((cat) => ({
    slug: cat.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const categories = getAllCategories()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: 'Categorie negăsită',
    }
  }

  return {
    title: `${category.name} | Ultimele dorințe`,
    description: `Articole din categoria ${category.name}`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const categories = getAllCategories()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    notFound()
  }

  const posts = getPostsByCategory(slug)

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
            <li className="text-foreground">{category.name}</li>
          </ol>
        </nav>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{category.name}</h1>
        <p className="text-muted">
          {posts.length} {posts.length === 1 ? 'articol' : 'articole'} în această categorie
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} variant="large" />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted">Nu există articole în această categorie încă.</p>
          <Link href="/blog" className="text-accent hover:underline mt-4 inline-block">
            Vezi toate articolele
          </Link>
        </div>
      )}
    </div>
  )
}
