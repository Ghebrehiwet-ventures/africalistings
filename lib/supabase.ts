import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface PublicListing {
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
  approved: boolean
  created_at: string
}

export async function getPublicListings(): Promise<PublicListing[]> {
  const { data, error } = await supabase
    .from('public_listings')
    .select('*')
  
  if (error) {
    console.error('Error fetching listings:', error)
    return []
  }
  
  return data || []
}
