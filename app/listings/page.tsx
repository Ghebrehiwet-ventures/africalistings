'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import ListingCard from '@/components/ListingCard'
import Tabs from '@/components/Tabs'
import { listings, Listing } from '@/lib/listings'

const filterTabs = [
  { id: 'for-sale', label: 'For sale' },
  { id: 'coming-soon', label: 'Coming soon' },
  { id: 'sold', label: 'Sold' },
]

const statusMap: Record<string, Listing['status']> = {
  'for-sale': 'For sale',
  'coming-soon': 'Coming soon',
  'sold': 'Sold',
}

export default function ListingsPage() {
  const [activeTab, setActiveTab] = useState('for-sale')

  const filteredListings = listings.filter(
    (listing) => listing.status === statusMap[activeTab]
  )

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h1 className="text-h1 max-md:text-h1-mobile text-text-primary">
            Listings
          </h1>
          <Tabs
            tabs={filterTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Listings Grid */}
        <div className="listings-grid">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {/* Empty State */}
        {filteredListings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-body-muted">No listings found in this category.</p>
          </div>
        )}
      </Container>
    </Section>
  )
}
