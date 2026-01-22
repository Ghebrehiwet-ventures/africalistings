'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Input from '@/components/forms/Input'
import Textarea from '@/components/forms/Textarea'
import SegmentedControl from '@/components/forms/SegmentedControl'
import { images } from '@/lib/images'

export default function ValuationPage() {
  const [requestType, setRequestType] = useState('sell')

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images.heroValuation}
            alt="Aerial view of neighborhood"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="relative h-full min-h-[600px] flex items-end section">
          <Container>
            <div className="max-w-lg pb-12">
              <h1 className="text-h1 max-md:text-h1-mobile text-white mb-8">
                Know what your home is worth
              </h1>
              <Button href="#valuation-form" variant="ghost">
                Get your valuation
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* Valuation Form Section */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-form p-10 shadow-sm border border-gray-100">
              <h2 className="text-h2 text-text-primary text-center mb-2">
                Request a Valuation
              </h2>
              <p className="text-body text-muted text-center mb-8">
                Fill in your details and we will contact you shortly.
              </p>

              <form className="space-y-6">
                {/* Request Type */}
                <div className="flex justify-center mb-8">
                  <SegmentedControl
                    name="requestType"
                    options={[
                      { value: 'buy', label: 'Buy' },
                      { value: 'sell', label: 'Sell' },
                      { value: 'value', label: 'Value house' },
                    ]}
                    value={requestType}
                    onChange={setRequestType}
                  />
                </div>

                <Input
                  label="Full name"
                  name="fullName"
                  placeholder="John Smith"
                  required
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Property address"
                    name="address"
                    placeholder="123 Oak Avenue"
                    required
                  />
                  <Input
                    label="Zip Code"
                    name="zipCode"
                    placeholder="90210"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john.smith@email.com"
                    required
                  />
                  <Input
                    label="Phone number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <Textarea
                  label="Additional information"
                  name="message"
                  placeholder="Tell us about your property or what you're looking for"
                  rows={4}
                />

                <Button type="submit" size="large" className="w-full mt-8">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
