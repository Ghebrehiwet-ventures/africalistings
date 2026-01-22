'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import { supabase, PublicListing } from '@/lib/supabase'

export default function ListingsPage() {
  const [listings, setListings] = useState<PublicListing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase
        .from('public_listings')
        .select('*')
      
      if (error) {
        console.error('Error:', error)
      } else {
        setListings(data || [])
      }
      setLoading(false)
    }
    fetchListings()
  }, [])

  if (loading) {
    return (
      <Section>
        <Container>
          <p>Loading listings...</p>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container>
        <h1 className="text-h1 max-md:text-h1-mobile text-text-primary mb-8">
          Listings ({listings.length})
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="border rounded-lg overflow-hidden bg-white shadow">
              {listing.images && listing.images.length > 0 && (
                <img 
                  src={listing.images[0]} 
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{listing.title}</h2>
                <p className="text-xl font-bold text-blue-600">
                  {listing.currency} {listing.price?.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  {listing.city}, {listing.island}
                </p>
                <p className="text-sm mt-2">
                  {listing.bedrooms} bed · {listing.bathrooms} bath · {listing.area_sqm} sqm
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {listing.description?.substring(0, 100)}...
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Images: {listing.images?.length || 0}
                </p>
              </div>
            </div>
          ))}
        </div>

        {listings.length === 0 && (
          <p className="text-center text-gray-500">No listings found.</p>
        )}
      </Container>
    </Section>
  )
}
