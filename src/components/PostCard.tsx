'use client'

import Link from 'next/link'
import { Post } from '@/lib/posts'

interface PostCardProps {
  post: Post
  variant?: 'large' | 'small' | 'compact'
}

export function PostCard({ post, variant = 'large' }: PostCardProps) {
  const { title, excerpt, date, category, tags, slug } = post.frontmatter
  const formattedDate = new Date(date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Select image based on tags
  const getImageByTags = () => {
    const lowerTags = tags.map(t => t.toLowerCase())
    
    if (lowerTags.some(t => t.includes('buzias') || t.includes('banat'))) {
      return '/buzias.jpg'
    }
    if (lowerTags.some(t => t.includes('croaziera') || t.includes('calatorie'))) {
      return '/croaziera.jpg'
    }
    if (lowerTags.some(t => t.includes('slovenia') || t.includes('sloven'))) {
      return '/slovenia.jpg'
    }
    if (lowerTags.some(t => t.includes('senior') || t.includes('viata'))) {
      return '/senior.jpg'
    }
    return '/default.jpg'
  }

  const imageSrc = getImageByTags()

  return (
    <article 
      className={`
        group relative bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden
        border border-border/50 transition-all duration-500
        hover:shadow-xl hover:border-accent/30 hover:-translate-y-1
        ${variant === 'large' ? 'h-full flex flex-col' : ''}
      `}
    >
      {/* Image with overlay */}
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
        
        {/* Category badge */}
        <Link
          href={`/category/${category.slug}`}
          className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-white text-xs font-medium rounded-full shadow-lg hover:bg-accent transition-colors"
        >
          {category.name}
        </Link>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow ${variant === 'compact' ? 'p-4' : 'p-6'}`}>
        {/* Meta info */}
        <div className="flex items-center gap-3 text-xs text-foreground-muted mb-3">
          <time dateTime={date}>{formattedDate}</time>
        </div>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className={`
            font-serif font-bold text-foreground group-hover:text-accent transition-colors
            ${variant === 'compact' ? 'text-lg mb-2' : 'text-xl mb-3'}
          `}>
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        {variant !== 'compact' && (
          <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {excerpt}
          </p>
        )}

        {/* Tags */}
        {variant !== 'compact' && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs px-2 py-1 bg-sand/50 text-foreground-muted rounded-md hover:bg-accent/10 hover:text-accent transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
