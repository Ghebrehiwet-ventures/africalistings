'use client'

import { useState } from 'react'

const listings = [
    {
            id: '1',
            title: 'Luxury Villa with Ocean View',
            price: 450000,
            currency: 'USD',
            location: 'Camps Bay, Cape Town',
            country: 'South Africa',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
            bedrooms: 5,
            bathrooms: 4,
            area_sqm: 420,
            property_type: 'Villa',
            broker: 'Pam Golding Properties'
    },
    {
            id: '2',
            title: 'Modern Apartment in Westlands',
            price: 185000,
            currency: 'USD',
            location: 'Westlands, Nairobi',
            country: 'Kenya',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
            bedrooms: 3,
            bathrooms: 2,
            area_sqm: 145,
            property_type: 'Apartment',
            broker: 'Knight Frank Kenya'
    },
    {
            id: '3',
            title: 'Beachfront Property',
            price: 320000,
            currency: 'USD',
            location: 'Diani Beach, Mombasa',
            country: 'Kenya',
            image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
            bedrooms: 4,
            bathrooms: 3,
            area_sqm: 280,
            property_type: 'House',
            broker: 'Hass Consult'
    },
    {
            id: '4',
            title: 'Penthouse in Victoria Island',
            price: 890000,
            currency: 'USD',
            location: 'Victoria Island, Lagos',
            country: 'Nigeria',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
            bedrooms: 4,
            bathrooms: 4,
            area_sqm: 350,
            property_type: 'Penthouse',
            broker: 'Fine and Country Nigeria'
    },
    {
            id: '5',
            title: 'Garden Estate Family Home',
            price: 275000,
            currency: 'USD',
            location: 'East Legon, Accra',
            country: 'Ghana',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
            bedrooms: 5,
            bathrooms: 3,
            area_sqm: 320,
            property_type: 'House',
            broker: 'Broll Ghana'
    },
    {
            id: '6',
            title: 'Riad with Rooftop Terrace',
            price: 380000,
            currency: 'USD',
            location: 'Medina, Marrakech',
            country: 'Morocco',
            image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&q=80',
            bedrooms: 6,
            bathrooms: 4,
            area_sqm: 400,
            property_type: 'Riad',
            broker: 'Moroccan Properties'
    },
    {
            id: '7',
            title: 'Safari Lodge Investment',
            price: 1200000,
            currency: 'USD',
            location: 'Serengeti Region',
            country: 'Tanzania',
            image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
            bedrooms: 12,
            bathrooms: 12,
            area_sqm: 1500,
            property_type: 'Lodge',
            broker: 'Tanzania Properties Ltd'
    },
    {
            id: '8',
            title: 'Waterfront Apartment',
            price: 195000,
            currency: 'USD',
            location: 'Waterfront, Cape Town',
            country: 'South Africa',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
            bedrooms: 2,
            bathrooms: 2,
            area_sqm: 110,
            property_type: 'Apartment',
            broker: 'Seeff Properties'
    },
    {
            id: '9',
            title: 'Colonial Style Mansion',
            price: 520000,
            currency: 'USD',
            location: 'Karen, Nairobi',
            country: 'Kenya',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
            bedrooms: 6,
            bathrooms: 5,
            area_sqm: 550,
            property_type: 'Mansion',
            broker: 'Knight Frank Kenya'
    }
    ]

const countries = ['All', 'Kenya', 'South Africa', 'Nigeria', 'Ghana', 'Morocco', 'Tanzania']

export default function ListingsPage() {
      const [selectedCountry, setSelectedCountry] = useState('All')

  const filteredListings = selectedCountry === 'All'
        ? listings
          : listings.filter(l => l.country === selectedCountry)

  return (
          <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
                <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16 px-8">
                        <div className="max-w-6xl mx-auto">
                                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                              Find Your Dream Property in Africa
                                  </h1>
                                  <p className="text-xl opacity-90">
                                              Aggregated listings from top brokers across the continent
                                  </p>
                        </div>
                </div>
          
                <div className="max-w-6xl mx-auto px-8 py-12">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {countries.map(country => (
                          <button
                                            key={country}
                                            onClick={() => setSelectedCountry(country)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                                                selectedCountry === country
                                                                  ? 'bg-amber-600 text-white'
                                                                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-400'
                                            }`}
                                          >
                              {country}
                          </button>
                        ))}
                        </div>
                
                        <p className="text-gray-600 mb-6">
                                  Showing {filteredListings.length} properties
                        </p>
                
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredListings.map((listing) => (
                          <div
                                            key={listing.id}
                                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                          >
                                        <div className="relative">
                                                        <img
                                                                              src={listing.image}
                                                                              alt={listing.title}
                                                                              className="w-full h-56 object-cover"
                                                                            />
                                                        <div className="absolute top-4 left-4">
                                                                          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                                              {listing.country}
                                                                          </span>
                                                        </div>
                                                        <div className="absolute top-4 right-4">
                                                                          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm">
                                                                              {listing.property_type}
                                                                          </span>
                                                        </div>
                                        </div>
                          
                                        <div className="p-5">
                                                        <h2 className="font-bold text-xl mb-2 text-gray-800">
                                                            {listing.title}
                                                        </h2>
                                                        <p className="text-gray-500 text-sm mb-3">
                                                            {listing.location}
                                                        </p>
                                                        <p className="text-2xl font-bold text-amber-600 mb-4">
                                                                          ${listing.price.toLocaleString()}
                                                        </p>
                                        
                                                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                                                          <span>{listing.bedrooms} beds</span>
                                                                          <span>{listing.bathrooms} baths</span>
                                                                          <span>{listing.area_sqm} m2</span>
                                                        </div>
                                        
                                                        <div className="pt-4 border-t border-gray-100">
                                                                          <p className="text-xs text-gray-400">
                                                                                              Listed by <span className="font-medium text-gray-600">{listing.broker}</span>
                                                                          </p>
                                                        </div>
                                        </div>
                          </div>
                        ))}
                        </div>
                </div>
          </div>
        )
}</div>
