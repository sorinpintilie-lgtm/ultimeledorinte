'use client'

import { useState, useMemo } from 'react'
import { Post, getAllCategories, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'
import { Search } from '@/components/Search'
import Link from 'next/link'

interface BlogClientProps {
  initialPosts: Post[]
  categories: ReturnType<typeof getAllCategories>
  tags: ReturnType<typeof getAllTags>
}

export function BlogClient({ initialPosts, categories, tags }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest')

  const filteredPosts = useMemo(() => {
    let result = [...initialPosts]

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter((post) =>
        post.frontmatter.title.toLowerCase().includes(q) ||
        post.frontmatter.excerpt.toLowerCase().includes(q) ||
        post.frontmatter.category.name.toLowerCase().includes(q) ||
        post.frontmatter.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (post) => post.frontmatter.category.slug === selectedCategory
      )
    }

    // Filter by tag
    if (selectedTag) {
      result = result.filter((post) =>
        post.frontmatter.tags.some(
          (t) => t.toLowerCase() === selectedTag.toLowerCase()
        )
      )
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB
    })

    return result
  }, [initialPosts, searchQuery, selectedCategory, selectedTag, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('')
    setSelectedTag('')
  }

  const hasFilters = searchQuery || selectedCategory || selectedTag

  return (
    <div className="container-custom py-12 animate-fade-in">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Blog</h1>
        <p className="text-foreground-muted">
          Explorează articolele despre viață, călătorii și reflecții.
        </p>
      </header>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <Search posts={initialPosts} />

        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background"
            aria-label="Filtrează după categorie"
          >
            <option value="">Toate categoriile</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name} ({cat.count})
              </option>
            ))}
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background"
            aria-label="Filtrează după etichetă"
          >
            <option value="">Toate etichetele</option>
            {tags.map((tag) => (
              <option key={tag.name} value={tag.name}>
                #{tag.name} ({tag.count})
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-background"
            aria-label="Sortează"
          >
            <option value="newest">Cele mai noi</option>
            <option value="oldest">Cele mai vechi</option>
          </select>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-accent hover:underline"
            >
              Resetează filtrele
            </button>
          )}
        </div>

        {/* Active filters */}
        {hasFilters && (
          <p className="text-sm text-foreground-muted">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'articol' : 'articole'} găsite
          </p>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} variant="large" />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground-muted mb-4">Nu s-au găsit articole cu filtrele aplicate.</p>
          <button
            onClick={clearFilters}
            className="text-accent hover:underline"
          >
            Șterge filtrele
          </button>
        </div>
      )}

      {/* Quick Tag Cloud */}
      {tags.length > 0 && (
        <section className="mt-12 pt-8 border-t border-border">
          <h2 className="font-serif text-lg mb-4">Etichete populare</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setSelectedTag(tag.name)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag.name
                    ? 'bg-accent text-white'
                    : 'bg-sand/40 text-foreground-muted hover:bg-accent hover:text-white'
                }`}
              >
                #{tag.name}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
