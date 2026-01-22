'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Listing {
    id: string
    title: string
    price: number
    currency: string
    description: string
    island: string
    city: string
    images: string[]
    bedrooms: number
    bathrooms: number
    area_sqm: number
    property_type: string
    listing_type: string
}

export default function ListingsPage() {
    const [listings, setListings] = useState<Listing[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

  useEffect(() => {
        async function fetchListings() {
                const { data, error } = await supabase
                  .from('public_listings')
                  .select('*')

          if (error) {
                    console.error('Supabase error:', error)
                    setError(error.message)
          } else {
                    setListings(data || [])
          }
                setLoading(false)
        }
        fetchListings()
  }, [])

  if (loading) {
        return (
                <div className="min-h-screen bg-gray-50 p-8">
                        <p className="text-center text-gray-600">Loading listings...</p>p>
                </div>div>
              )
  }
  
    if (error) {
          return (
                  <div className="min-h-screen bg-gray-50 p-8">
                          <p className="text-center text-red-600">Error: {error}</p>p>
                  </div>div>
                )
    }
  
    return (
          <div className="min-h-screen bg-gray-50 p-8">
                <h1 className="text-3xl font-bold mb-8">Listings ({listings.length})</h1>h1>
                
            {listings.length === 0 ? (
                    <p className="text-gray-500">No listings found.</p>p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {listings.map((listing) => (
                                  <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {listing.images && listing.images.length > 0 && (
                                                    <img
                                                                        src={listing.images[0]}
                                                                        alt={listing.title}
                                                                        className="w-full h-48 object-cover"
                                                                      />
                                                  )}
                                                <div className="p-4">
                                                                <h2 className="font-semibold text-lg">{listing.title}</h2>h2>
                                                                <p className="text-xl font-bold text-blue-600">
                                                                  {listing.currency} {listing.price?.toLocaleString()}
                                                                </p>p>
                                                                <p className="text-sm text-gray-500">
                                                                  {listing.city}, {listing.island}
                                                                </p>p>
                                                                <p className="text-sm mt-2">
                                                                  {listing.bedrooms} bed · {listing.bathrooms} bath · {listing.area_sqm} sqm
                                                                </p>p>
                                                </div>div>
                                  </div>div>
                                ))}
                    </div>div>
                )}
          </div>div>
        )
}</div>
