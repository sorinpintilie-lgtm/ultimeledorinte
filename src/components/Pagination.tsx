import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const showPages = pages.filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
  )

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Navigare pagini">
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}${currentPage > 2 ? `?page=${currentPage - 1}` : ''}`}
          className="px-3 py-1 border border-border rounded text-sm hover:bg-border/50 transition-colors"
          aria-label="Pagina anterioară"
        >
          ←
        </Link>
      )}

      {showPages.map((page, index) => {
        const showEllipsisBefore = index > 0 && page - showPages[index - 1] > 1
        const showEllipsisAfter = index < showPages.length - 1 && showPages[index + 1] - page > 1

        return (
          <span key={page} className="contents">
            {showEllipsisBefore && (
              <span className="px-2 text-muted" aria-hidden="true">
                ...
              </span>
            )}
            <Link
              href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
              className={`px-3 py-1 border rounded text-sm transition-colors ${
                page === currentPage
                  ? 'bg-accent text-white border-accent'
                  : 'border-border hover:bg-border/50'
              }`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </Link>
            {showEllipsisAfter && (
              <span className="px-2 text-muted" aria-hidden="true">
                ...
              </span>
            )}
          </span>
        )
      })}

      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="px-3 py-1 border border-border rounded text-sm hover:bg-border/50 transition-colors"
          aria-label="Pagina următoare"
        >
          →
        </Link>
      )}
    </nav>
  )
}
