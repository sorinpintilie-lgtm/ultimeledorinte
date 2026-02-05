'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/blog', label: 'Blog' },
    { href: '/despre', label: 'Despre' },
  ]

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-xl font-medium">
            Ultimele dorințe
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl font-medium transition-all duration-300 ${
            isScrolled ? 'text-foreground' : 'text-foreground'
          } hover:text-accent`}
        >
          <span className="relative">
            Ultimele dorințe
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted hover:text-foreground transition-all duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          {/* Decorative separator */}
          <span className="w-px h-6 bg-border" />
          
          {/* Search button */}
          <Link
            href="/blog"
            aria-label="Caută"
            className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-all duration-200 group"
          >
            <Search className="w-5 h-5" />
            <span className="text-sm font-medium hidden lg:block group-hover:text-accent transition-colors">Caută</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground-muted hover:text-foreground transition-colors relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100'
              }`} 
            />
            <X 
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 -rotate-90'
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t border-border bg-background/98 backdrop-blur-md transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground-muted hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-sand/50"
              onClick={() => setIsMenuOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border my-2" />
          <Link
            href="/blog"
            className="flex items-center gap-3 text-lg font-medium text-foreground-muted hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-sand/50"
            onClick={() => setIsMenuOpen(false)}
          >
            <Search className="w-5 h-5" />
            Caută
          </Link>
        </nav>
      </div>
    </header>
  )
}
