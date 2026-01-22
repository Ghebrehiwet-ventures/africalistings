import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Input from '@/components/forms/Input'
import Textarea from '@/components/forms/Textarea'
import { images } from '@/lib/images'

export default function ContactPage() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.heroContact}
          alt="Aerial view of neighborhood"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-16 px-4">
        <div className="bg-white rounded-form p-10 w-full max-w-xl shadow-lg">
          <h1 className="text-h2 text-text-primary text-center mb-2">
            Contact Us
          </h1>
          <p className="text-body text-muted text-center mb-8">
            Fill in your details and we will contact you shortly.
          </p>

          <form className="space-y-6">
            <Input
              label="Full name"
              name="fullName"
              placeholder="John Smith"
              required
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Address"
                name="address"
                placeholder="123 Oak Avenue"
              />
              <Input
                label="Zip Code"
                name="zipCode"
                placeholder="90210"
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
              label="Message"
              name="message"
              placeholder="Tell us a bit about your home or what you're looking for"
              rows={4}
            />

            <Button type="submit" size="large" className="w-full mt-4">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
