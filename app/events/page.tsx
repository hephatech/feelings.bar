import Link from 'next/link'
import { Suspense } from 'react'
import { getEvents } from '@/lib/boneyard'
import { NoiseBackground, SplashSplatters, StickerButton } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

// Async component for events content
async function EventsContent() {
  const events = await getEvents()

  return (
    <>
      {/* Events List */}
      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="group relative bg-surface-container p-6 md:p-8 shadow-hard transition-all hover:translate-y-1"
            style={{ transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Date Column */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="inline-block bg-primary-container text-black p-4 shadow-hard rotate-[-3deg]">
                  <div className="font-headline font-black text-3xl">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="font-mono text-xs uppercase font-bold">
                    {new Date(event.date).toLocaleDateString('it-IT', { month: 'short' })}
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono uppercase text-primary-container bg-primary-container/10 px-2 py-1">
                    {event.type.replace('-', ' ')}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-on-surface-variant">
                    {event.time}
                  </span>
                </div>

                <h3 className="font-headline font-black text-2xl md:text-3xl uppercase mb-2">
                  {event.title}
                </h3>

                <p className="font-body text-on-surface-variant">
                  {event.description}
                </p>
              </div>

              {/* Action Column */}
              <div className="md:col-span-3 text-center md:text-right">
                {event.ticketsAvailable ? (
                  <div className="space-y-2">
                    {event.price && (
                      <div className="font-mono text-sm font-bold text-primary-container">
                        ${event.price}
                      </div>
                    )}
                    <button className="bg-primary-container text-black font-headline font-bold text-sm px-4 py-2 shadow-hard hover:translate-y-0.5 transition-transform uppercase"
                    >
                      Prendi Biglietto
                    </button>
                  </div>
                ) : (
                  <span className="font-mono text-xs uppercase text-on-surface-variant"
                  >
                    Ingresso Gratis
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default function EventsPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-24 px-6 md:px-12 z-10 max-w-7xl mx-auto min-h-screen">
        <SplashSplatters showTopLeft showBottomRight />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-container text-black px-4 py-2 font-mono font-bold text-sm shadow-hard rotate-[1deg]">
              ENTRY 002
            </div>
            <div className="h-px bg-outline-variant flex-1" />
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6"
          >
            GLI <span className="text-primary-container">EVENTI</span>
          </h1>

          <p className="font-body text-xl max-w-2xl italic opacity-80">
            Sere lunghe, musica dal vivo, e quel collective buzz dei momenti condivisi.
            Check what's coming up e segna il calendario.
          </p>
        </div>

        {/* Events Content */}
        <Suspense fallback={
          <div className="animate-pulse space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-surface-container rounded-lg" />
            ))}
          </div>
        }
        >
          <EventsContent />
        </Suspense>

        {/* Host an Event CTA */}
        <div className="mt-16 p-8 bg-surface-container shadow-hard relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-headline font-black text-2xl uppercase mb-2"
              >
                Vuoi hostare un evento?
              </h3>
              <p className="font-body text-on-surface-variant"
              >
                Da private parties a live performances, let's make it happen.
              </p>
            </div>
            <StickerButton href="/contact" rotation={2}>
              CONTATTACI
            </StickerButton>
          </div>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
