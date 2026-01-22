import { images } from './images'

export interface Listing {
  id: string
  slug: string
  address: string
  location: string
  price: number
  sqft: number
  beds: number
  baths: number
  type: 'Apartment' | 'Single-family home' | 'Condo'
  status: 'For sale' | 'Coming soon' | 'Sold'
  images: string[]
  description: string
}

export const listings: Listing[] = [
  {
    id: '1',
    slug: '100-maple-street-hillcrest',
    address: '100 Maple Street, Hillcrest',
    location: 'Northwood, USA',
    price: 315000,
    sqft: 689,
    beds: 2,
    baths: 1,
    type: 'Apartment',
    status: 'For sale',
    images: [images.listings[0]],
    description: 'Beautiful apartment in the heart of Hillcrest. This stunning 2-bedroom apartment offers modern living with natural light throughout. Features include hardwood floors, updated kitchen with stainless steel appliances, and a private balcony overlooking the neighborhood park.'
  },
  {
    id: '2',
    slug: '106-pine-lane-midtown',
    address: '106 Pine Lane, Midtown',
    location: 'Midtown, USA',
    price: 279000,
    sqft: 527,
    beds: 1,
    baths: 1,
    type: 'Apartment',
    status: 'For sale',
    images: [images.listings[1]],
    description: 'Cozy apartment in vibrant Midtown. Perfect for first-time buyers or investors looking for a rental property.'
  },
  {
    id: '3',
    slug: '109-cedar-road-riverside',
    address: '109 Cedar Road, Riverside',
    location: 'Riverside, USA',
    price: 645000,
    sqft: 1636,
    beds: 4,
    baths: 2,
    type: 'Single-family home',
    status: 'For sale',
    images: [images.listings[2]],
    description: 'Spacious family home in the desirable Riverside neighborhood. Features a large backyard and two-car garage.'
  },
  {
    id: '4',
    slug: '142-pine-lane-cedar-ridge',
    address: '142 Pine Lane, Cedar Ridge',
    location: 'Cedar Ridge, USA',
    price: 425000,
    sqft: 1200,
    beds: 3,
    baths: 2,
    type: 'Condo',
    status: 'For sale',
    images: [images.listings[3]],
    description: 'Modern condo with stunning views. Open floor plan with high ceilings and premium finishes throughout.'
  },
  {
    id: '5',
    slug: '112-elm-street-hillcrest',
    address: '112 Elm Street, Hillcrest',
    location: 'Hillcrest, USA',
    price: 289000,
    sqft: 612,
    beds: 1,
    baths: 1,
    type: 'Apartment',
    status: 'For sale',
    images: [images.listings[4]],
    description: 'Charming apartment in a historic building. Walking distance to shops, restaurants, and public transit.'
  },
  {
    id: '6',
    slug: '220-oak-avenue-downtown',
    address: '220 Oak Avenue, Downtown',
    location: 'Downtown, USA',
    price: 550000,
    sqft: 1450,
    beds: 3,
    baths: 2,
    type: 'Single-family home',
    status: 'Coming soon',
    images: [images.listings[5]],
    description: 'Coming soon to the market! Beautiful townhouse in the heart of downtown.'
  },
]

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find(listing => listing.slug === slug)
}

export function getListingsByStatus(status: Listing['status']): Listing[] {
  return listings.filter(listing => listing.status === status)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}
