import Link from 'next/link'
import Image from 'next/image'
import { Home, Bath, Maximize } from 'lucide-react'
import { Listing, formatPrice } from '@/lib/listings'

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.slug}`} className="group block">
      {/* Image Container */}
      <div className="relative mb-3">
        <div className="relative h-card-image w-full overflow-hidden rounded-card">
          <Image
            src={listing.images[0]}
            alt={listing.address}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="badge">{listing.status}</span>
          <span className="badge">{listing.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-card-gap-sm">
        {/* Price */}
        <p className="text-body-muted">{formatPrice(listing.price)}</p>

        {/* Address */}
        <h3 className="text-body-medium text-text-primary group-hover:underline">
          {listing.address}
        </h3>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-body-muted">
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            {listing.sqft} sq.ft
          </span>
          <span className="flex items-center gap-1.5">
            <Home className="w-4 h-4" />
            {listing.beds} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            {listing.baths} Bath
          </span>
        </div>
      </div>
    </Link>
  )
}
