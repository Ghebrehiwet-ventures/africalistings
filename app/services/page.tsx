import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { images } from '@/lib/images'

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroServices}
            alt="Modern kitchen with flowers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="relative h-full min-h-[600px] flex items-end section">
          <Container>
            <div className="max-w-lg pb-12">
              <p className="text-eyebrow text-white mb-4">OUR SERVICES</p>
              <h1 className="text-h1 max-md:text-h1-mobile text-white">
                What Hillcrest Realty Can Do for You
              </h1>
            </div>
          </Container>
        </div>
      </section>

      {/* Services Grid */}
      <Section size="large">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Know',
                subtitle: 'Market Analysis',
                description:
                  'Get comprehensive market insights and property valuations. Understand exactly what your home is worth with our detailed analysis tools and local expertise.',
              },
              {
                title: 'List',
                subtitle: 'Property Marketing',
                description:
                  'Professional photography, virtual tours, and targeted marketing to get your property in front of qualified buyers. We handle everything from staging to closing.',
              },
              {
                title: 'Move',
                subtitle: 'Full-Service Support',
                description:
                  'From your first inquiry to handing over the keys, our agents guide you through every step. Negotiation, paperwork, inspections – we make it seamless.',
              },
            ].map((service) => (
              <div key={service.title}>
                <h6 className="text-eyebrow text-muted mb-2">{service.title}</h6>
                <h3 className="text-h3 text-text-primary mb-4">
                  {service.subtitle}
                </h3>
                <p className="text-body text-muted">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/services/valuation">Get your home valuation</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
