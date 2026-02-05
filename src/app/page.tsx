import Link from 'next/link'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts'
import { PostCard } from '@/components/PostCard'

export default function HomePage() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  const randomQuote = allPosts.length > 0 
    ? allPosts[Math.floor(Math.random() * allPosts.length)].frontmatter.excerpt 
    : "Fiecare zi este o poveste."

  return (
    <div className="animate-enter">
      {/* Hero Section - Dramatic Visual Design */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary/20" />
        
        {/* Hero Image with parallax-like effect */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/default.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large ornamental diamond */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rotate-45 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/5 rotate-45 rounded-full" />
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent/20 rotate-45 animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 border border-accent/20 rotate-45 animate-pulse delay-700" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent/30 rotate-45 animate-pulse delay-300" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 border border-accent/25 rotate-45 animate-pulse delay-500" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-accent/10 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-accent/10 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-accent/10 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-accent/10 rounded-br-3xl" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom max-w-5xl mx-auto text-center px-6">
          {/* Decorative line above */}
          <div className="flex items-center justify-center mb-10 animate-enter-delay-1">
            <div className="h-px w-20 bg-accent/30" />
            <div className="mx-6 w-3 h-3 rotate-45 bg-accent/40" />
            <div className="h-px w-20 bg-accent/30" />
          </div>
          
          {/* Article count badge */}
          <div className="mb-10 animate-enter-delay-1">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-background-secondary/50 backdrop-blur-sm rounded-full border border-accent/10">
              <span className="article-number text-3xl">{allPosts.length}</span>
              <span className="text-sm font-medium tracking-widest uppercase text-foreground-muted">
                Articole publicate
              </span>
            </div>
          </div>
          
          {/* Main Title with dramatic styling */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 animate-enter-delay-2">
            <span className="block text-foreground-muted/80 font-light text-xl md:text-2xl mb-4 tracking-widest uppercase">
              Un jurnal despre
            </span>
            <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground-muted bg-clip-text text-transparent">
              viață, timp,
            </span>
            <span className="block italic font-serif text-accent">
              călătorii și sens
            </span>
          </h1>
          
          {/* Decorative line below title */}
          <div className="flex items-center justify-center mb-10 animate-enter-delay-2">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-12 animate-enter-delay-3">
            Reflecții despre seniorat, aventuri și 
            <span className="text-accent"> bucuria de a trăi</span> fiecare zi la maximum.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-enter-delay-4">
            <Link
              href="/blog"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:scale-105"
            >
              <span className="relative z-10 font-medium text-lg">Citește blogul</span>
              <span className="relative z-10 text-xl transition-transform group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/despre"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-accent/30 rounded-xl hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 group"
            >
              <span className="font-medium text-lg">Despre proiect</span>
              <span className="text-xl opacity-50 group-hover:opacity-100 transition-opacity">✦</span>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-20 bg-border" />
        <div className="mx-6 w-3 h-3 rotate-45 border border-accent/30" />
        <div className="h-px w-20 bg-border" />
      </div>

      {/* Articles Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-accent/30" />
            <h2 className="font-serif text-2xl md:text-3xl">Câteva articole</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <div 
                key={post.slug} 
                className="reveal h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-border/50" />
        <div className="mx-4 w-2 h-2 rotate-45 bg-accent/20" />
        <div className="h-px w-16 bg-border/50" />
      </div>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-background-secondary/30 relative overflow-hidden">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-40 h-40 border-r-2 border-t-2 border-accent/5 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 border-l-2 border-b-2 border-accent/5 rounded-bl-3xl" />
        
        <div className="relative container-custom max-w-4xl mx-auto text-center">
          {/* Large quote mark */}
          <div className="text-8xl font-serif text-accent/10 leading-none mb-4">
            "
          </div>
          
          <blockquote>
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground mb-8 relative z-10">
              "{randomQuote}"
            </p>
            <footer className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent/20" />
              <cite className="not-italic text-sm font-medium tracking-widest uppercase text-foreground-muted">
                — Dan Goldiș
              </cite>
              <div className="h-px w-12 bg-accent/20" />
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-border/50" />
        <div className="mx-4 w-2 h-2 rotate-45 bg-accent/20" />
        <div className="h-px w-16 bg-border/50" />
      </div>

      {/* Categories Section */}
      <section className="py-20 md:py-24">
        <div className="container-custom max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-accent/30" />
            <h2 className="font-serif text-2xl md:text-3xl">Categorii</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative p-6 bg-background-secondary/30 rounded-lg border border-border/50 hover:border-accent/40 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Decorative corner on hover */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-accent/0 group-hover:border-accent/40 transition-all" />
                
                <div>
                  <span className="text-xs font-medium text-accent mb-1 block">
                    {category.count} {category.count === 1 ? 'articol' : 'articole'}
                  </span>
                  <h3 className="font-serif text-lg group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-border/50" />
        <div className="mx-4 w-2 h-2 rotate-45 bg-accent/20" />
        <div className="h-px w-16 bg-border/50" />
      </div>

      {/* Tags Section */}
      <section className="py-16 md:py-20 bg-background-secondary/20">
        <div className="container-custom max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent/20" />
            <h3 className="font-serif text-xl text-foreground-muted">Etichete populare</h3>
            <div className="h-px w-12 bg-accent/20" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map((tag, index) => (
              <Link
                key={tag.name}
                href={`/tag/${tag.name.toLowerCase()}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sand/40 hover:bg-accent rounded-full text-sm text-foreground-muted hover:text-white transition-all duration-300"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="opacity-40">#</span>
                <span>{tag.name}</span>
                <span className="text-xs ml-1 px-1.5 py-0.5 bg-white/20 rounded-full">
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-16 bg-border/50" />
        <div className="mx-4 w-2 h-2 rotate-45 bg-accent/20" />
        <div className="h-px w-16 bg-border/50" />
      </div>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="relative p-12 md:p-16 bg-accent/5 rounded-3xl border border-accent/10 text-center">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/20 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/20 rounded-br-lg" />
            
            {/* Inner decorative line */}
            <div className="absolute inset-4 border border-dashed border-accent/10 rounded-2xl pointer-events-none" />
            
            <div className="relative">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Primește noutăți în inbox
              </h2>
              
              <p className="text-foreground-muted mb-8 max-w-md mx-auto">
                Fii primul care descoperă noile povestiri. Fără spam, doar conținut relevant.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email-ul tău"
                  className="flex-1 px-6 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  aria-label="Email pentru newsletter"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-300 font-medium"
                >
                  Abonează-te
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-accent/10">
                <p className="text-xs text-foreground-muted">
                  {tags.length} etichete • {categories.length} categorii • {allPosts.length} articole
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
