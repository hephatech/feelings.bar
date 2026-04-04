import Link from 'next/link'
import { Suspense } from 'react'
import { getSiteMetadata, getCocktails, getEvents } from '@/lib/boneyard'
import { 
  NoiseBackground, 
  SplashSplatters, 
  PolaroidFrame, 
  ScrapbookCard,
  StickerButton,
  Tape,
} from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'
import { HeroSection } from '@/app/sections/hero-section'

// Loading component for Suspense
function SectionLoader() {
  return (
    <div className="animate-pulse bg-surface-container-high h-64 rounded-lg">
      <div className="h-8 bg-surface-container-highest rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-surface-container-highest rounded w-2/3"></div>
    </div>
  )
}

// Async component for cocktails
async function CocktailsSection() {
  const cocktails = await getCocktails()
  const featured = cocktails.slice(0, 3)
  
  return (
    <section className="mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary-container text-black px-4 py-2 font-mono font-bold text-sm shadow-hard rotate-[-2deg]">
          THE MENU
        </div>
        <div className="h-px bg-outline-variant flex-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((cocktail, index) => (
          <Link 
            key={cocktail.id}
            href={`/menu/${cocktail.slug}`}
            className="group"
          >
            <div 
              className="bg-surface-container p-6 shadow-hard transition-all group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline font-black text-xl uppercase">{cocktail.name}</h3>
                <span className="font-mono text-primary-container font-bold">
                  {cocktail.currency}{cocktail.price}
                </span>
              </div>
              
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">
                {cocktail.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase bg-surface-container-high px-2 py-1">
                  {cocktail.mood}
                </span>
                <span className="text-[10px] font-mono uppercase bg-surface-container-high px-2 py-1">
                  {cocktail.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/menu"
          className="inline-block font-headline font-bold uppercase hover:underline decoration-primary-container decoration-4 underline-offset-4"
        >
          View Full Menu →
        </Link>
      </div>
    </section>
  )
}

// Async component for events
async function EventsSection() {
  const events = await getEvents()
  const upcoming = events.slice(0, 2)
  
  return (
    <section className="mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary-container text-black px-4 py-2 font-mono font-bold text-sm shadow-hard rotate-[1deg]">
          UPCOMING EVENTS
        </div>
        <div className="h-px bg-outline-variant flex-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcoming.map((event) => (
          <Link 
            key={event.id}
            href={`/events/${event.slug}`}
            className="group block"
          >
            <div className="border-2 border-outline-variant p-6 transition-all group-hover:border-primary-container">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-mono text-[10px] text-primary-container uppercase tracking-widest mb-1">
                    {event.date} • {event.time}
                  </p>
                  <h3 className="font-headline font-black text-2xl uppercase">{event.title}</h3>
                </div>
                {event.ticketsAvailable && event.price && (
                  <span className="font-mono text-sm font-bold bg-primary-container text-black px-3 py-1">
                    ${event.price}
                  </span>
                )}
              </div>
              
              <p className="font-body text-on-surface-variant">{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// Main page component
export default function HomePage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />
      
      <main className="relative pt-32 pb-24 px-6 md:px-12 z-10 max-w-7xl mx-auto min-h-screen">
        <SplashSplatters showTopLeft showBottomRight />
        
        <HeroSection />
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrapbookCard
            entryNumber="Entry 001"
            title="The Menu"
            description="Distilled emotions served in chilled glassware. From 'Midnight Regret' to 'Golden Hour Bliss'."
            href="/menu"
            linkText="Read the specs →"
            variant="primary"
          />
          
          <ScrapbookCard
            entryNumber="Entry 002"
            title="The Vibe"
            description="Lo-fi beats, high-fidelity flavors. A space designed to be felt, not just seen."
          />
          
          <ScrapbookCard
            entryNumber="Entry 003"
            title="Location"
            description="Tucked away in the concrete cracks of the city. Look for the yellow light."
          />
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <CocktailsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <EventsSection />
        </Suspense>
        
      </main>
      
      <SideNav />
      <BottomNav />
    </>
  )
}
