import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { teamMembers } from '@/lib/team'
import { Star } from 'lucide-react'

export default function TeamPage() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-h1 max-md:text-h1-mobile text-text-primary max-w-lg">
            Meet the realtors who guide your next move
          </h1>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-card overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <h3 className="text-h5 text-text-primary mb-1">{member.name}</h3>
              <p className="text-sm text-muted mb-2">{member.role}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 text-sm text-muted">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>{member.rating} stars</span>
                <span>·</span>
                <span>{member.reviews}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-body text-muted mb-6">
            Want to join our team? We're always looking for talented agents.
          </p>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </Container>
    </Section>
  )
}
