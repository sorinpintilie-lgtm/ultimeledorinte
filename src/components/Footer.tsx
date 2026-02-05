import Link from 'next/link'
import { getAllCategories, getAllTags } from '@/lib/posts'

export async function Footer() {
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <footer className="border-t border-border mt-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4 group-hover:text-accent transition-colors">
                Ultimele dorințe ale unui văduv tânăr
              </h3>
            </Link>
            <p className="text-foreground-muted leading-relaxed max-w-md">
              Un jurnal despre viață, timp, călătorii și sens, scris cu luciditate și umor. 
              Reflecții despre seniorat, aventuri și bucuria de a trăi fiecare zi.
            </p>
            
            {/* Decorative quote */}
            <blockquote className="mt-8 pl-4 border-l-2 border-accent/30">
              <p className="font-serif text-lg italic text-foreground-muted">
                „Fiecare zi este o poveste merită spusă."
              </p>
            </blockquote>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Categorii
            </h4>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/0 group-hover:bg-accent/50 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {category.name}
                    </span>
                    <span className="text-xs text-stone ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Navigare
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-foreground-muted hover:text-foreground transition-all duration-200 group"
                >
                  <span className="group-hover:text-accent transition-colors">Acasă</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-foreground-muted hover:text-foreground transition-all duration-200 group"
                >
                  <span className="group-hover:text-accent transition-colors">Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/despre"
                  className="text-foreground-muted hover:text-foreground transition-all duration-200 group"
                >
                  <span className="group-hover:text-accent transition-colors">Despre</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rss"
                  className="text-foreground-muted hover:text-foreground transition-all duration-200 group"
                >
                  <span className="group-hover:text-accent transition-colors">RSS</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Tags cloud */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-accent" />
              Etichete
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 12).map((tag) => (
                <Link
                  key={tag.name}
                  href={`/tag/${tag.name.toLowerCase()}`}
                  className="inline-flex items-center px-3 py-1 bg-sand/50 hover:bg-accent hover:text-white rounded-full text-xs text-foreground-muted hover:text-white transition-all duration-200"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-foreground-muted">
              © {new Date().getFullYear()} <span className="font-serif text-foreground">Dan Goldiș</span>. 
              Toate drepturile rezervate.
            </p>
            
            {/* Decorative element with logo */}
            <div className="flex items-center gap-4">
              <span className="text-stone text-xs tracking-widest uppercase">Crafted in the clouds by</span>
              <a 
                href="https://sky.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="/skyro-logo.png" 
                  alt="sky.ro" 
                  className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            {/* Tag links */}
            <div className="flex gap-4">
              {tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag.name}
                  href={`/tag/${tag.name.toLowerCase()}`}
                  className="text-xs text-foreground-muted hover:text-accent transition-colors underline decoration-border hover:decoration-accent underline-offset-4"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
