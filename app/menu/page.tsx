import Link from 'next/link'
import { Suspense } from 'react'
import { getCocktails } from '@/lib/boneyard'
import { NoiseBackground, SplashSplatters, ScrapbookCard, StickerButton } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

// Async component for menu content
async function MenuContent() {
  const cocktails = await getCocktails()

  return (
    <>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {['Tutti', 'Signature', 'Classici', 'Mocktail'].map((filter, i) => (
          <button
            key={filter}
            className={`px-4 py-2 font-mono text-sm font-bold uppercase transition-all ${
              i === 0
                ? 'bg-primary-container text-black shadow-hard'
                : 'bg-surface-container text-white hover:bg-surface-container-high'
            }`}
            style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cocktails.map((cocktail, index) => (
          <div
            key={cocktail.id}
            className="group relative"
          >
            {/* Polaroid Card */}
            <div
              className="bg-white p-4 pb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-y-1"
              style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-surface-container mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high to-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-primary-container/30">
                    local_bar
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-black">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-black text-xl uppercase">
                    {cocktail.name}
                  </h3>
                  <span className="font-mono font-bold text-primary-container bg-black px-2 py-1">
                    {cocktail.currency}{cocktail.price}
                  </span>
                </div>

                <p className="font-body text-sm text-black/70 mb-3">
                  {cocktail.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {cocktail.ingredients.slice(0, 3).map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] font-mono uppercase bg-black/5 px-2 py-1"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-black/50">
                    Mood: {cocktail.mood}
                  </span>
                  {cocktail.abv && (
                    <span className="text-xs font-mono font-bold">
                      {cocktail.abv}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Tape Effect */}
            <div
              className="absolute -top-2 -left-2 w-16 h-6 tape opacity-60"
              style={{ transform: `rotate(${index % 2 === 0 ? -45 : -30}deg)` }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default function MenuPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-24 px-6 md:px-12 z-10 max-w-7xl mx-auto min-h-screen">
        <SplashSplatters showTopLeft showBottomRight />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-container text-black px-4 py-2 font-mono font-bold text-sm shadow-hard rotate-[-2deg]">
              ENTRY 001
            </div>
            <div className="h-px bg-outline-variant flex-1" />
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            LA <span className="text-primary-container">SCORTA</span>
          </h1>

          <p className="font-body text-xl max-w-2xl italic opacity-80">
            Emozioni distillate servite in bicchieri ghiacciati. Ogni cocktail racconta una storia,
            ogni sorso sblocca un ricordo.
          </p>
        </div>

        {/* Menu Content */}
        <Suspense fallback={
          <div className="animate-pulse space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-surface-container rounded-lg" />
            ))}
          </div>
        }
        >
          <MenuContent />
        </Suspense>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <StickerButton href="/reservations" rotation={-3}>
            PRENOTA UN TAVOLO
          </StickerButton>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
