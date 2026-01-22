import Link from 'next/link'
import Section from './Section'
import Container from './Container'

const sitemapLinks = [
  { href: '/listings', label: 'Listings' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/services/valuation', label: 'Valuation Request' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: '#', label: 'Twitter (X)' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <Section>
        <Container>
          {/* Tagline */}
          <h2 className="text-h2 text-text-primary mb-16 max-w-md">
            Clear guidance for buying and selling homes.
          </h2>

          {/* Footer Grid */}
          <div className="footer-grid">
            {/* Contact Info */}
            <div>
              <h5 className="text-h5 text-text-primary mb-4">Email</h5>
              <p className="text-body-muted mb-8">hello@cresthillrealty.com</p>

              <h5 className="text-h5 text-text-primary mb-4">Phone</h5>
              <p className="text-body-muted">+1 (455) 123-4567</p>
            </div>

            {/* Sitemap */}
            <div>
              <h5 className="text-h5 text-text-primary mb-4">Sitemap</h5>
              <div className="flex flex-col gap-4">
                {sitemapLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-body-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h5 className="text-h5 text-text-primary mb-4">Social</h5>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-body-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Watermark Logo */}
      <div className="overflow-hidden pb-8">
        <div className="watermark-logo text-center select-none">
          Hillcrest Realty
        </div>
      </div>
    </footer>
  )
}
