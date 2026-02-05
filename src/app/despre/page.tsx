import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Despre | Ultimele dorințe ale unui văduv tânăr',
  description: 'Despre proiect, autor și misiunea acestui jurnal personal.',
}

export default function AboutPage() {
  return (
    <div className="animate-enter">
      {/* Hero Section for About */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary/10" />
        
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/10 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-accent/10 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-accent/10 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/10 rounded-br-3xl" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-accent/3 rounded-full blur-3xl" />
        
        <div className="relative container-custom max-w-4xl mx-auto px-6">
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-accent/30" />
            <div className="mx-6 w-3 h-3 rotate-45 bg-accent/40" />
            <div className="h-px w-20 bg-accent/30" />
          </div>
          
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Despre proiect</h1>
            <p className="text-xl text-muted italic">
              „Ultimele dorințe ale unui văduv tânăr" — un jurnal despre viață, timp, călătorii și sens.
            </p>
          </header>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="flex items-center justify-center py-8">
        <div className="h-px w-20 bg-border" />
        <div className="mx-6 w-3 h-3 rotate-45 border border-accent/30" />
        <div className="h-px w-20 bg-border" />
      </div>

      {/* Content Sections */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-3xl mx-auto px-6">
          {/* Cine sunt */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Cine sunt</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Sunt Dan Goldiș, un senior care a ales să-și petreacă anii de maturitate 
              scriind despre experiențele, reflecțiile și observațiile sale. Acest blog 
              reprezintă o colecție de momente, gânduri și povești din viața de zi cu zi.
            </p>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Scriu cu luciditate și umor despre subiecte care contează: relațiile, 
              călătoriile, sănătatea, pierderea și regăsirea sensului în fiecare zi 
              care trece.
            </p>
            
            {/* Personal quote */}
            <blockquote className="pl-4 border-l-2 border-accent/30 italic text-foreground my-8">
              „Anii nu sunt o povară, ci o comoară de experiență și înțelepciune."
            </blockquote>
          </div>

          {/* Ce veți găsi aici */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Ce veți găsi aici</h2>
            <ul className="space-y-4 text-foreground-muted">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✦</span>
                <span><strong>Reflecții personale</strong> — gânduri despre viață, îmbătrânire și descoperirea de sine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✦</span>
                <span><strong>Călătorii</strong> — aventuri și descoperiri din România și din lume</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✦</span>
                <span><strong>Momente speciale</strong> — întâmplări care merită povestite</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✦</span>
                <span><strong>Sfaturi și observații</strong> — învățăminte din experiență</span>
              </li>
            </ul>
          </div>

          {/* Viața la Buziaș */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Viața la Buziaș</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Un loc de poveste, unde fiecare colț își are propria istorie. 
              Aici am găsit liniștea și inspirația pentru a scrie.
            </p>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/buzias.jpg"
                alt="Viața la Buziaș"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Misiunea mea */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Misiunea mea</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Cred că fiecare zi are o poveste de spus. Prin acest jurnal, încerc să 
              surprind esența vieții trăite cu atenție și recunoștință. Vreau să 
              arăt că anii nu sunt o povară, ci o comoară de experiență și înțelepciune.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Sper că scrierile mele vă vor inspira să vă apreciați propriile călătorii 
              și să găsiți sens în fiecare moment.
            </p>
          </div>

          {/* Image gallery - single row */}
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/senior.jpg"
                  alt="Viață și experiență"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/croaziera.jpg"
                  alt="Călătorii"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative p-8 md:p-12 bg-accent/5 rounded-2xl border border-accent/10">
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/20 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/20 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/20 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/20 rounded-br-lg" />
            
            <div className="text-center">
              <h2 className="font-serif text-2xl mb-4">Contact</h2>
              <p className="text-foreground-muted mb-6">
                Pentru întrebări, sugestii sau simplu pentru a spune „salut", mă puteți 
                contacta prin intermediul rețelelor sociale sau prin email.
              </p>
              <a
                href="mailto:dan@exemplu.com"
                className="inline-flex items-center gap-2 text-accent hover:underline text-lg"
              >
                <span>dan@exemplu.com</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <footer className="mt-12 pt-8 border-t border-border text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <span>←</span>
              <span>Citește articolele</span>
            </Link>
          </footer>
        </div>
      </section>
    </div>
  )
}
