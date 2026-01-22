import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import ListingCard from '@/components/ListingCard'
import { listings } from '@/lib/listings'
import { teamMembers } from '@/lib/team'
import { images } from '@/lib/images'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const recentListings = listings.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.heroHome}
            alt="Modern kitchen interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full min-h-[700px] flex items-end section">
          <Container>
            <div className="flex justify-between items-end pb-12">
              {/* Left Content */}
              <div className="max-w-lg">
                <p className="text-eyebrow text-white mb-4">
                  REAL ESTATE PARTNER
                </p>
                <h1 className="text-h1 max-md:text-h1-mobile text-white mb-8">
                  Clear guidance for every move
                </h1>
                <Button href="/listings" variant="ghost">
                  Browse Listings
                </Button>
              </div>

              {/* Agent Card */}
              <Link
                href="/services/valuation"
                className="hidden md:flex bg-white rounded-card p-4 items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 2).map((member) => (
                    <div
                      key={member.id}
                      className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-body-medium text-text-primary">
                    Get home valuation
                  </p>
                  <p className="text-sm text-muted">Talk to an agent</p>
                </div>
                <ArrowRight className="w-5 h-5 text-text-primary" />
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* Recent Listings Section */}
      <Section size="large">
        <Container>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-h2 text-text-primary">Recent Listings</h2>
            <Button href="/listings" variant="outline">
              View all
            </Button>
          </div>

          <div className="listings-grid">
            {recentListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-eyebrow text-muted mb-4">ABOUT US</p>
              <h2 className="text-h2 text-text-primary mb-6">
                The move matters as much as the destination
              </h2>
              <p className="text-body text-muted mb-8">
                Hillcrest Realty began with a simple idea: buying or selling a home should feel clear, not confusing. Too often, people found themselves overwhelmed. We wanted to change that.
              </p>
              <Button href="/about" variant="outline">
                About
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src={images.aboutPreview}
                alt="Modern living room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section size="large">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-eyebrow text-muted mb-4">OUR SERVICES</p>
              <h2 className="text-h2 text-text-primary mb-6">Our offering</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Know',
                description: 'Understand your market with comprehensive valuations and insights.',
              },
              {
                title: 'List',
                description: 'Get your property in front of the right buyers with expert marketing.',
              },
              {
                title: 'Move',
                description: 'Navigate the entire process with guidance from start to finish.',
              },
            ].map((service) => (
              <div key={service.title} className="bg-white">
                <h6 className="text-eyebrow text-muted mb-2">{service.title}</h6>
                <p className="text-body text-text-primary">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/services/valuation">Get your estimate</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
