// Boneyard - Centralized data layer for feelings.bar
// UPDATED WITH OFFICIAL DATA from https://www.feelings.bar/
// Source: Official website scraped 2026-04-04

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
  category: 'signature' | 'classic' | 'creative' | 'mocktail' | 'shot'
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
  type: 'live-music' | 'dj-set' | 'karaoke' | 'food-drink' | 'private'
  capacity?: number
  ticketsAvailable: boolean
  price?: number
  isFree?: boolean
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
  address: string
  phone: string
  email?: string
  instagram: string
  social: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
  hours: {
    [key: string]: string
  }
}

export interface FriedChicken {
  id: string
  name: string
  pieces: number
  price: number
  description: string
}

export interface CoffeeItem {
  id: string
  name: string
  price: number
}

export interface WineItem {
  id: string
  name: string
  price: number
  type: 'red' | 'white' | 'prosecco'
}

// ============================================================================
// OFFICIAL DATA - Feelings Bar Meda
// Source: https://www.feelings.bar/
// Address: Via Confalonieri, 7, 20821 Meda MB
// Phone: +39 (351)-708 5845
// ============================================================================

export const siteMetadata: SiteMetadata = {
  name: 'FEELINGS BAR',
  tagline: 'FRIED CHICKEN \u0026 COCKTAILS',
  description: 'Il miglior pollo fritto della Brianza. Siamo di origine Dominicana, amiamo il calore della convivialità, la musica e il buon cibo. Feelings è una nuova realtà e una nuova proposta a conduzione familiare.',
  address: 'Via Confalonieri, 7, 20821 Meda MB',
  phone: '+39 (351)-708 5845',
  email: undefined,
  instagram: '@_feelings_bar',
  social: {
    instagram: '@_feelings_bar',
    facebook: undefined,
    twitter: undefined,
  },
  hours: {
    sunday: '17:30 - 01:00',
    monday: '17:30 - 01:00',
    tuesday: '17:30 - 01:00',
    wednesday: '17:30 - 01:00',
    thursday: '17:30 - 02:00',
    friday: '17:30 - 02:00',
    saturday: '17:30 - 02:00',
  },
}

// Official Philosophy Sections
export const philosophy = {
  feelings: {
    title: 'Perché Feelings?',
    content: 'La traduzione del termine Feelings è sensazioni. Il Feeling è un particolare stato emotivo per cui due o più persone provano contemporaneamente le stesse sensazioni, in quanto sentono una vicinanza di affetto e un coinvolgimento. Feelings vuole essere un luogo di positività e di reciprocità con le persone che lo sceglieranno: come? Bevendo un caffè, un cocktail o un bicchiere di vino, assaporando una fetta di torta, una bruschetta o un pezzo di pollo fritto, ascoltando bella musica e conversando con il personale.',
  },
  friedChicken: {
    title: 'Perché Fried Chicken?',
    content: 'Il pollo fritto ha le sue origini negli Stati Uniti. Tecniche di frittura scozzesi e condimenti dell\'Africa Occidentale sono stati combinati dagli afroamericani. Oggi il pollo fritto è un piatto di fama mondiale ed è diventato il protagonista dell\'industria del fast food. Da Feelings mangerai il pollo fritto all\'americana, come fatto a casa: fuori croccante e speziato, dentro morbido e succoso.',
  },
  cocktails: {
    title: 'Perché Cocktails?',
    content: 'Cock-tail, la cui traduzione è coda di gallo, deriva da una leggenda per la quale l\'inizio della giornata era segnata dal canto del gallo, mentre la fine da una bevanda alcolica. L\'esperienza e la professionalità del team di Feelings propongono Cocktails classici e le novità dei Cocktails creativi.',
  },
  chiSiamo: {
    title: 'Chi Siamo?',
    content: 'Siamo di origine Dominicana, amiamo il calore della convivialità, la musica e il buon cibo. Feelings è una nuova realtà e una nuova proposta a conduzione familiare: è un bar fatto di sensazioni, che vi avvolge in un clima sereno e positivo, dove musica e parole vi accompagnano attraverso un\'esperienza di degustazioni e bevande.',
  },
}

// Official CTA
export const callToAction = {
  main: 'Vieni a trovarci e scopri il miglior pollo fritto della Brianza!',
  cta: 'VIENI A TROVARCI',
}

// ============================================================================
// MENU - Official from feelings.bar
// ============================================================================

export const friedChickenMenu: FriedChicken[] = [
  {
    id: '1',
    name: 'Pollo Fritto (2 pezzi)',
    pieces: 2,
    price: 6.20,
    description: 'Fuori croccante e speziato, dentro morbido e succoso',
  },
  {
    id: '2',
    name: 'Pollo Fritto (4 pezzi)',
    pieces: 4,
    price: 10.60,
    description: 'Fuori croccante e speziato, dentro morbido e succoso',
  },
  {
    id: '3',
    name: 'Pollo Fritto (7 pezzi)',
    pieces: 7,
    price: 17.90,
    description: 'Fuori croccante e speziato, dentro morbido e succoso',
  },
  {
    id: '4',
    name: 'Pechurinas',
    pieces: 0,
    price: 9.50,
    description: 'Specialità della casa',
  },
]

export const sides = [
  { id: '1', name: 'Patatine fritte', price: 4.50 },
  { id: '2', name: 'Tostones', price: 5.00 },
  { id: '3', name: 'Platano', price: 4.50 },
]

export const coffeeMenu: CoffeeItem[] = [
  { id: '1', name: 'Espresso', price: 1.20 },
  { id: '2', name: 'Decaffeinato', price: 1.20 },
  { id: '3', name: 'Macchiato', price: 1.20 },
  { id: '4', name: 'Cappuccino', price: 1.50 },
  { id: '5', name: 'Caffè Latte', price: 2.00 },
  { id: '6', name: 'Marocchino', price: 1.80 },
]

// Official Cocktails from website
export const cocktails: Cocktail[] = [
  // Classici
  {
    id: '1',
    slug: 'aperol-spritz',
    name: 'Aperol Spritz',
    description: 'Il classico italiano. Aperol, prosecco e soda.',
    price: 8.00,
    currency: '€',
    ingredients: ['Aperol', 'Prosecco', 'Soda', 'Arancia'],
    category: 'classic',
    mood: 'Refreshing',
    available: true,
  },
  {
    id: '2',
    slug: 'negroni',
    name: 'Negroni',
    description: 'Equilibrio perfetto tra gin, campari e vermouth.',
    price: 9.00,
    currency: '€',
    ingredients: ['Gin', 'Campari', 'Vermouth Rosso', 'Scorza d\'Arancia'],
    category: 'classic',
    mood: 'Sophisticated',
    abv: '24%',
    available: true,
  },
  {
    id: '3',
    slug: 'old-fashioned',
    name: 'Old Fashioned',
    description: 'Bourbon, zucchero e bitter. Il cocktail per eccellenza.',
    price: 10.00,
    currency: '€',
    ingredients: ['Bourbon', 'Zucchero', 'Angostura Bitter', 'Arancia'],
    category: 'classic',
    mood: 'Classic',
    abv: '32%',
    available: true,
  },
  {
    id: '4',
    slug: 'moscow-mule',
    name: 'Moscow Mule',
    description: 'Vodka, ginger beer e lime. Servito in tazza di rame.',
    price: 9.00,
    currency: '€',
    ingredients: ['Vodka', 'Ginger Beer', 'Lime', 'Menta'],
    category: 'classic',
    mood: 'Spicy',
    available: true,
  },
  // Creativi - Official names from website
  {
    id: '5',
    slug: 'daddys-favourite',
    name: 'Daddy\'s Favourite',
    description: 'Cocktail creativo della casa.',
    price: 12.00,
    currency: '€',
    ingredients: ['Ingredienti segreti della casa'],
    category: 'creative',
    mood: 'Bold',
    available: true,
  },
  {
    id: '6',
    slug: 'lost-in-transit',
    name: 'Lost in Transit',
    description: 'Un viaggio in un bicchiere.',
    price: 11.00,
    currency: '€',
    ingredients: ['Ingredienti segreti della casa'],
    category: 'creative',
    mood: 'Adventurous',
    available: true,
  },
  {
    id: '7',
    slug: 'midnight-fever',
    name: 'Midnight Fever',
    description: 'Per le notti che non vogliono finire.',
    price: 13.00,
    currency: '€',
    ingredients: ['Ingredienti segreti della casa'],
    category: 'creative',
    mood: 'Energetic',
    available: true,
  },
  {
    id: '8',
    slug: 'tears-of-joy',
    name: 'Tears of Joy',
    description: 'Felicità in forma liquida.',
    price: 12.00,
    currency: '€',
    ingredients: ['Ingredienti segreti della casa'],
    category: 'creative',
    mood: 'Emotional',
    available: true,
  },
]

export const wineMenu: WineItem[] = [
  { id: '1', name: 'House Red (calice)', price: 5.00, type: 'red' },
  { id: '2', name: 'House White (calice)', price: 5.00, type: 'white' },
  { id: '3', name: 'Prosecco DOCG', price: 6.50, type: 'prosecco' },
  { id: '4', name: 'Premium Select', price: 8.00, type: 'red' },
]

export const beerMenu = [
  { id: '1', name: 'Lager 0.4l', price: 5.50 },
  { id: '2', name: 'IPA 0.33l', price: 6.50 },
  { id: '3', name: 'Craft Selection', price: 7.50 },
]

export const softDrinks = [
  { id: '1', name: 'Coca Cola', price: 3.50 },
  { id: '2', name: 'Fanta', price: 3.50 },
  { id: '3', name: 'Lemon Soda', price: 3.50 },
  { id: '4', name: 'Ginger Beer', price: 4.50 },
  { id: '5', name: 'Chinotto', price: 4.00 },
  { id: '6', name: 'Still/Sparkling Water', price: 2.00 },
]

// ============================================================================
// EVENTS - Based on official categories
// Categories from website: Food & Drink, Live Music, DJ & Karaoke
// ============================================================================

export const events: Event[] = [
  {
    id: '1',
    slug: 'karaoke-rumble',
    title: 'KARAOKE RUMBLE',
    description: 'BYO Vocals - The Pit. Free Entry. Karaoke a ritmo alto con la migliore selezione di hits.',
    date: '2024-10-25',
    time: '08:00 PM DOORS',
    type: 'karaoke',
    ticketsAvailable: true,
    isFree: true,
  },
  {
    id: '2',
    slug: 'dj-y2k-boyz',
    title: 'DJ Y2K B2B BOYZ',
    description: 'Main Room / Jungle / Breakbeat. La notte più calda della Brianza.',
    date: '2024-10-24',
    time: '10:00 PM - LATE',
    type: 'dj-set',
    ticketsAvailable: true,
    price: 15,
  },
  {
    id: '3',
    slug: 'fried-chickens-live',
    title: 'THE FRIED CHICKENS',
    description: 'Live Band • Punk / Garage. Musica dal vivo con la band locale.',
    date: '2024-10-28',
    time: '$10 COVER',
    type: 'live-music',
    ticketsAvailable: false,
    price: 10,
  },
]

// ============================================================================
// GALLERY - Official photo descriptions from website
// ============================================================================

export const gallery = {
  official: [
    {
      id: '1',
      alt: 'Primo piano del bar',
      description: 'Vista interior del bar',
    },
    {
      id: '2',
      alt: 'Yellow: The energy you need when your day feels dark',
      description: 'Elemento decorativo amarillo - la energía que necesitas',
    },
    {
      id: '3',
      alt: 'Logo ufficiale del feelings bar - fried chicken \u0026 cocktails',
      description: 'Logo oficial',
    },
    {
      id: '4',
      alt: 'Foto del nostro murale con tutte le parole che rappresentano il feelings',
      description: 'Mural con palabras del feelings',
    },
    {
      id: '5',
      alt: 'Immagine delle scale che ti fanno lasciare tutte le bad vibes fuori dal feelings con le frasi motivazionali',
      description: 'Escaleras con frases motivacionales',
    },
    {
      id: '6',
      alt: 'Famiglia = ❤️, immagine del team che ti farà sentire come in famiglia dentro al feelings bar',
      description: 'El equipo familiar dominicano',
    },
    {
      id: '7',
      alt: 'Foto di un tavolo con cocktail e cibo, niente di meno che il nostro pollo fritto',
      description: 'Cocktails y pollo frito en la mesa',
    },
    {
      id: '8',
      alt: 'Foto del nostro barista che prepara un cocktail',
      description: 'El bartender preparando drinks',
    },
  ],
}

// ============================================================================
// DATA FETCHING UTILITIES
// ============================================================================

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getCocktails(): Promise<Cocktail[]> {
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

export async function getFriedChickenMenu(): Promise<FriedChicken[]> {
  await delay(400)
  return friedChickenMenu
}

export async function getCoffeeMenu(): Promise<CoffeeItem[]> {
  await delay(300)
  return coffeeMenu
}

// ============================================================================
// STATIC PARAMS GENERATORS
// ============================================================================

export function getCocktailSlugs(): string[] {
  return cocktails.map((c) => c.slug)
}

export function getEventSlugs(): string[] {
  return events.map((e) => e.slug)
}
