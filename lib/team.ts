import { images } from './images'

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  rating: number
  reviews: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jessica Hayes',
    role: 'Senior Agent',
    image: images.team[0],
    rating: 5,
    reviews: '99+ reviews',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Sales Director',
    image: images.team[1],
    rating: 5,
    reviews: '87 reviews',
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Property Consultant',
    image: images.team[2],
    rating: 5,
    reviews: '72 reviews',
  },
]
