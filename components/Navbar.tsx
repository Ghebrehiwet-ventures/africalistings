'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/listings', label: 'Listings' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="h-navbar bg-white px-section-x py-4 flex items-center justify-between max-md:px-section-x-mobile">
      {/* Logo */}
      <Link
        href="/"
        className="text-[20px] font-normal tracking-[-0.8px] text-logo"
      >
        africa.estate
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-nav text-text-primary hover:underline transition-all"
          >
            {link.label}
          </Link>
        ))}
        <Button href="/contact" variant="outline">
          Contact
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-text-primary" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-navbar left-0 right-0 bg-white border-t border-gray-100 p-6 md:hidden z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav text-text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="outline" className="mt-2">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
