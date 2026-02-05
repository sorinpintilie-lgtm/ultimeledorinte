import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center animate-fade-in">
      <h1 className="font-serif text-6xl mb-4">404</h1>
      <p className="text-xl text-muted mb-8">Pagina nu a fost găsită</p>
      <p className="text-muted mb-8">
        Se pare că te-ai rătăcit. Pagina pe care o cauți nu există sau a fost mutată.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
      >
        Înapoi la pagina principală
      </Link>
    </div>
  )
}
