import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { images } from '@/lib/images'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-eyebrow text-muted mb-4">ABOUT US</p>
              <h1 className="text-h1 max-md:text-h1-mobile text-text-primary mb-6">
                A home that fits your life
              </h1>
              <p className="text-body text-muted mb-8">
                Hillcrest Realty began with a simple idea: buying or selling a home should feel clear, not confusing. Too often, people found themselves overwhelmed. We wanted to change that.
              </p>
              <p className="text-body text-muted">
                Our team brings together decades of experience in real estate, design, and customer service. We believe that every transaction should be handled with care, transparency, and expertise.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src={images.aboutHero}
                alt="Modern living room with green sofa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section size="large" className="bg-badge-bg">
        <Container>
          <h2 className="text-h2 text-text-primary mb-12 text-center">
            What we believe
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clarity',
                description:
                  'No jargon, no confusion. We explain every step of the process in terms you can understand.',
              },
              {
                title: 'Integrity',
                description:
                  'Your interests always come first. We provide honest advice, even when it means a longer road.',
              },
              {
                title: 'Excellence',
                description:
                  'From our marketing to our negotiations, we hold ourselves to the highest standards.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-h3 text-text-primary mb-4">{value.title}</h3>
                <p className="text-body text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-text-primary mb-6">
              Ready to find your next home?
            </h2>
            <p className="text-body text-muted mb-8">
              Let us guide you through your real estate journey with clarity and care.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/listings">Browse Listings</Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
