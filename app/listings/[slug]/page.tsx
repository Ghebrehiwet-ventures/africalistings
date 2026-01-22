import Image from 'next/image'
import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { listings, getListingBySlug, formatPrice } from '@/lib/listings'
import { teamMembers } from '@/lib/team'
import { MapPin, Home, Bath, Maximize, Star } from 'lucide-react'

interface ListingPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return listings.map((listing) => ({
    slug: listing.slug,
  }))
}

export default function ListingPage({ params }: ListingPageProps) {
  const listing = getListingBySlug(params.slug)

  if (!listing) {
    notFound()
  }

  const agent = teamMembers[0] // Default to first agent

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={listing.images[0]}
          alt={listing.address}
          fill
          className="object-cover"
          priority
        />

        {/* Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="badge">{listing.status}</span>
          <span className="badge">{listing.type}</span>
        </div>

        {/* Show All Images Button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-white rounded-badge px-4 py-2 text-sm font-medium text-text-primary hover:bg-gray-50 transition-colors">
            Show all images ({listing.images.length})
          </button>
        </div>
      </section>

      {/* Content */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Location */}
              <div className="flex items-center gap-2 text-muted mb-4">
                <MapPin className="w-4 h-4" />
                <span>{listing.location}</span>
              </div>

              {/* Title */}
              <h1 className="text-h1 max-md:text-h1-mobile text-text-primary mb-6">
                {listing.address}
              </h1>

              {/* Price and Metadata */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                <div>
                  <p className="text-sm text-muted">Listing price</p>
                  <p className="text-h3 text-text-primary">
                    {formatPrice(listing.price)}
                  </p>
                </div>

                <div className="flex items-center gap-6 text-body-muted">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4" />
                    {listing.sqft} sq.ft
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Home className="w-4 h-4" />
                    {listing.beds} Bed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    {listing.baths} Bath
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-8">
                <h2 className="text-h3 text-text-primary mb-4">
                  About this property
                </h2>
                <p className="text-body text-muted">{listing.description}</p>
              </div>
            </div>

            {/* Agent Sidebar */}
            <div>
              <div className="bg-white rounded-card border border-gray-100 p-6">
                <h3 className="text-h5 text-text-primary mb-6">
                  Contact realtor
                </h3>

                {/* Agent Card */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-body-medium text-text-primary">
                      {agent.name}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span>{agent.rating} stars</span>
                      <span>·</span>
                      <span>{agent.reviews}</span>
                    </div>
                  </div>
                </div>

                <Button href="/contact" className="w-full">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
