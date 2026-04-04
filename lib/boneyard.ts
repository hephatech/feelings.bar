// Boneyard - Centralized data layer for feelings.bar
// This file contains mock data, types, and data fetching utilities
// that will be gradually replaced by PayloadCMS as features grow

// ============================================================================
// TYPES
// ============================================================================

export interface Cocktail {
  id: string
  slug: string
  name: string
  description: string
  price: number
  currency: string
  ingredients: string[]
  image?: string
  category: 'signature' | 'classic' | 'mocktail' | 'shot'
  mood: string
  abv?: string
  available: boolean
}

export interface Event {
  id: string
  slug: string
  title: string
  description: string
  date: string
  time: string
  image?: string
  type: 'live-music' | 'dj-set' | 'workshop' | 'private'
  capacity: number
  ticketsAvailable: boolean
  price?: number
}

export interface Reservation {
  id: string
  name: string
  email: string
  phone?: string
  date: string
  time: string
  guests: number
  occasion?: string
  notes?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: string
}

export interface SiteMetadata {
  name: string
  tagline: string
  description: string
  address?: string
  phone?: string
  email?: string
  social: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  hours: {
    [key: string]: string
  }
}

// ============================================================================
// MOCK DATA - The "Boneyard"
// This data will be migrated to PayloadCMS as collections are created
// ============================================================================

export const siteMetadata: SiteMetadata = {
  name: 'FEELINGS BAR',
  tagline: 'DRINK YOUR FEELINGS LOUDLY',
  description: 'A multi-sensory dive into the analog artifacts of our collective memory.',
  address: 'Tucked away in the concrete cracks of the city',
  phone: '+1 (555) 123-4567',
  email: 'hello@feelings.bar',
  social: {
    instagram: '@feelings.bar',
    facebook: 'feelingsbar',
    twitter: '@feelingsbar',
  },
  hours: {
    monday: 'Closed',
    tuesday: '6pm - 2am',
    wednesday: '6pm - 2am',
    thursday: '6pm - 3am',
    friday: '6pm - 4am',
    saturday: '6pm - 4am',
    sunday: '6pm - 12am',
  },
}

export const cocktails: Cocktail[] = [
  {
    id: '1',
    slug: 'midnight-regret',
    name: 'Midnight Regret',
    description: 'A bittersweet symphony of bourbon, smoked maple, and dark chocolate bitters. For the nights that blur into mornings.',
    price: 18,
    currency: '$',
    ingredients: ['Bourbon', 'Smoked Maple Syrup', 'Dark Chocolate Bitters', 'Orange Peel'],
    category: 'signature',
    mood: 'Melancholic',
    abv: '24%',
    available: true,
  },
  {
    id: '2',
    slug: 'golden-hour-bliss',
    name: 'Golden Hour Bliss',
    description: 'Tequila kissed by turmeric and honey, topped with prosecco. Captures that perfect moment before sunset.',
    price: 16,
    currency: '$',
    ingredients: ['Tequila', 'Turmeric', 'Honey', 'Prosecco', 'Lemon'],
    category: 'signature',
    mood: 'Euphoric',
    abv: '18%',
    available: true,
  },
  {
    id: '3',
    slug: 'neon-melancholy',
    name: 'Neon Melancholy',
    description: 'Gin infused with butterfly pea flower, elderflower, and a spark of citrus. Changes color as you sip.',
    price: 17,
    currency: '$',
    ingredients: ['Gin', 'Butterfly Pea Flower', 'Elderflower Liqueur', 'Lemon', 'Soda'],
    category: 'signature',
    mood: 'Contemplative',
    abv: '20%',
    available: true,
  },
  {
    id: '4',
    slug: 'old-fashioned',
    name: 'Analog Old Fashioned',
    description: 'The classic, unapologetically unchanged. Bourbon, sugar, bitters, and time.',
    price: 15,
    currency: '$',
    ingredients: ['Bourbon', 'Demerara Sugar', 'Angostura Bitters', 'Orange'],
    category: 'classic',
    mood: 'Nostalgic',
    abv: '32%',
    available: true,
  },
  {
    id: '5',
    slug: 'virgin-sunrise',
    name: 'Virgin Sunrise',
    description: 'All the vibes, none of the buzz. Orange, grenadine, and a secret blend of spices.',
    price: 10,
    currency: '$',
    ingredients: ['Orange Juice', 'Grenadine', 'Spice Blend', 'Soda'],
    category: 'mocktail',
    mood: 'Bright',
    available: true,
  },
]

export const events: Event[] = [
  {
    id: '1',
    slug: 'lofi-sunday',
    title: 'Lo-Fi Sundays',
    description: 'Vinyl selectors spinning chill beats while you unwind. Bring your sketchbook, your journal, or just your thoughts.',
    date: '2024-04-07',
    time: '18:00 - 23:00',
    type: 'dj-set',
    capacity: 60,
    ticketsAvailable: false,
  },
  {
    id: '2',
    slug: 'jazz-jam-thursday',
    title: 'Jazz Jam Thursdays',
    description: 'Live improvisational jazz. Local musicians welcome to join the jam.',
    date: '2024-04-11',
    time: '20:00 - 01:00',
    type: 'live-music',
    capacity: 80,
    ticketsAvailable: true,
    price: 10,
  },
  {
    id: '3',
    slug: 'cocktail-workshop',
    title: 'Cocktail Craft Workshop',
    description: 'Learn the art of mixology. This week: Infusions and bitters. Take home your own bitters kit.',
    date: '2024-04-15',
    time: '17:00 - 19:00',
    type: 'workshop',
    capacity: 15,
    ticketsAvailable: true,
    price: 45,
  },
]

// ============================================================================
// DATA FETCHING UTILITIES
// These simulate CMS calls and will be replaced with actual PayloadCMS SDK calls
// ============================================================================

// Simulate network delay for realistic loading states
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getCocktails(): Promise<Cocktail[]> {
  // TODO: Replace with PayloadCMS call
  // const payload = await getPayloadClient()
  // return payload.find({ collection: 'cocktails' })
  await delay(800)
  return cocktails
}

export async function getCocktailBySlug(slug: string): Promise<Cocktail | null> {
  await delay(600)
  return cocktails.find((c) => c.slug === slug) || null
}

export async function getEvents(): Promise<Event[]> {
  await delay(700)
  return events
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  await delay(500)
  return events.find((e) => e.slug === slug) || null
}

export async function getSiteMetadata(): Promise<SiteMetadata> {
  await delay(300)
  return siteMetadata
}

// ============================================================================
// STATIC PARAMS GENERATORS
// For Next.js generateStaticParams
// ============================================================================

export function getCocktailSlugs(): string[] {
  return cocktails.map((c) => c.slug)
}

export function getEventSlugs(): string[] {
  return events.map((e) => e.slug)
}
