'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from 'lucide-react'
import { Post } from '@/lib/posts'

interface SearchProps {
  posts: Post[]
}

export function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState('')

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return posts.filter((post) => {
      const { frontmatter, content } = post
      return (
        frontmatter.title.toLowerCase().includes(q) ||
        frontmatter.excerpt.toLowerCase().includes(q) ||
        frontmatter.category.name.toLowerCase().includes(q) ||
        frontmatter.tags.some((t) => t.toLowerCase().includes(q)) ||
        content.toLowerCase().includes(q)
      )
    }).slice(0, 10)
  }, [query, posts])

  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          placeholder="Caută articole..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          aria-label="Caută articole"
        />
      </div>

      {filteredPosts.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <ul className="py-2">
            {filteredPosts.map((post) => (
              <li key={post.frontmatter.slug}>
                <Link
                  href={`/blog/${post.frontmatter.slug}`}
                  className="block px-4 py-2 hover:bg-border/30 transition-colors"
                  onClick={() => setQuery('')}
                >
                  <p className="font-serif text-sm font-medium">
                    {post.frontmatter.title}
                  </p>
                  <p className="text-xs text-muted mt-1 line-clamp-1">
                    {post.frontmatter.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {query && filteredPosts.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 p-4 text-center text-sm text-muted">
          Nu s-au găsit rezultate pentru „{query}”
        </div>
      )}
    </div>
  )
}
