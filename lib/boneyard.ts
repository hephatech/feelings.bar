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
  tagline: 'DOVE I SENTIMENTI HANNO GUSTO',
  description: 'Fried chicken fatto in casa, cocktails che raccontano storie, e quel feeling di famiglia dominicana che ti avvolge come un abbraccio.',
  address: 'In mezzo al caos della città',
  phone: '+1 (555) 123-4567',
  email: 'ciao@feelings.bar',
  social: {
    instagram: '@feelings.bar',
    facebook: 'feelingsbar',
    twitter: '@feelingsbar',
  },
  hours: {
    monday: 'Chiuso - ci riposiamo',
    tuesday: '18:00 - 02:00',
    wednesday: '18:00 - 02:00',
    thursday: '18:00 - 03:00',
    friday: '18:00 - 04:00',
    saturday: '18:00 - 04:00',
    sunday: '18:00 - 00:00',
  },
}

export const cocktails: Cocktail[] = [
  {
    id: '1',
    slug: 'mezzanotte-senza-rimorso',
    name: 'Mezzanotte Senza Rimorso',
    description: 'Bourbon, sciroppo d\'acero affumicato e bitter al cioccolato fondente. Per le notti che diventano mornings.',
    price: 18,
    currency: '$',
    ingredients: ['Bourbon', 'Sciroppo d\'Acero Affumicato', 'Bitter al Cioccolato', 'Scorza d\'Arancia'],
    category: 'signature',
    mood: 'Melancholic',
    abv: '24%',
    available: true,
  },
  {
    id: '2',
    slug: 'golden-hour-dolce-vita',
    name: 'Golden Hour Dolce Vita',
    description: 'Tequila baciata dalla curcuma e dal miele, top con prosecco. Quel momento perfetto prima del tramonto.',
    price: 16,
    currency: '$',
    ingredients: ['Tequila', 'Curcuma', 'Miele', 'Prosecco', 'Limone'],
    category: 'signature',
    mood: 'Euphoric',
    abv: '18%',
    available: true,
  },
  {
    id: '3',
    slug: 'malinconia-neon',
    name: 'Malinconia Neon',
    description: 'Gin infuso con fiore di pisello e sambuco, con una scintilla di citrus. Cambia colore mentre lo sorseggi.',
    price: 17,
    currency: '$',
    ingredients: ['Gin', 'Fiore di Pisello', 'Liquore di Sambuco', 'Limone', 'Soda'],
    category: 'signature',
    mood: 'Contemplative',
    abv: '20%',
    available: true,
  },
  {
    id: '4',
    slug: 'old-fashioned-analogico',
    name: 'Old Fashioned Analogico',
    description: 'Il classico, senza scuse. Bourbon, zucchero, bitter e tempo. Come faceva nonno.',
    price: 15,
    currency: '$',
    ingredients: ['Bourbon', 'Zucchero Demerara', 'Angostura Bitter', 'Arancia'],
    category: 'classic',
    mood: 'Nostalgic',
    abv: '32%',
    available: true,
  },
  {
    id: '5',
    slug: 'alba-virgin',
    name: 'Alba Virgin',
    description: 'Tutte le vibes, zero sbornia. Arancia, granatina e un blend segreto di spezie.',
    price: 10,
    currency: '$',
    ingredients: ['Succo d\'Arancia', 'Granatina', 'Blend di Spezie', 'Soda'],
    category: 'mocktail',
    mood: 'Bright',
    available: true,
  },
]

export const events: Event[] = [
  {
    id: '1',
    slug: 'lofi-domenica',
    title: 'Lo-Fi Domenica',
    description: 'Vinili selezionati, beats rilassati e zero stress. Porta il tuo sketchbook, il tuo journal, o semplicemente i tuoi pensieri.',
    date: '2024-04-07',
    time: '18:00 - 23:00',
    type: 'dj-set',
    capacity: 60,
    ticketsAvailable: false,
  },
  {
    id: '2',
    slug: 'jazz-jam-giovedi',
    title: 'Jazz Jam Giovedì',
    description: 'Jazz improvvisato live. Musicisti locali welcome to join the jam - porta il tuo strumento!',
    date: '2024-04-11',
    time: '20:00 - 01:00',
    type: 'live-music',
    capacity: 80,
    ticketsAvailable: true,
    price: 10,
  },
  {
    id: '3',
    slug: 'workshop-cocktail',
    title: 'Workshop: L\'Arte del Cocktail',
    description: 'Impara l\'arte della mixology. Questa settimana: Infusi e bitter. Porta a casa il tuo kit personalizzato.',
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
