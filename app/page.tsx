import { NoiseBackground, ScrapbookCardV2 } from '@/components'
import SplashSplatters from '@/components/splash-splatters'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'
import { siteMetadata, philosophy, callToAction } from '@/lib/boneyard'

export default function HomePage() {
  return (
    <>
      <NoiseBackground />
      <SplashSplatters />
      <TopNav />

      <main className="relative min-h-screen z-10 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 overflow-hidden">
          {/* Animated Letters */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              {'FEELINGS'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-headline font-black text-primary-container leading-none animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-4">
              {'OGNI'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-3xl md:text-4xl font-body text-outline italic"
                >
                  {letter}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-2">
              {'GIORNO'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl font-headline font-black text-outline-variant tracking-tight"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 md:mt-16 text-center">
            <ScrapbookCardV2
              variant="primary"
              shadow="lg"
              rotation={-2}
              className="inline-block"
            >
              <h1 className="text-xl md:text-3xl font-headline font-black uppercase tracking-tighter"
              >
                {siteMetadata.tagline}
              </h1>
            </ScrapbookCardV2>
          </div>

          {/* Quick Categories */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto px-4"
          >
            {[
              { label: 'Food \u0026 Drink', icon: 'restaurant' },
              { label: 'Live Music', icon: 'music_note' },
              { label: 'DJ \u0026 Karaoke', icon: 'mic' },
            ].map((item, i) => (
              <ScrapbookCardV2
                key={i}
                variant={i === 0 ? 'primary' : i === 1 ? 'white' : 'secondary'}
                shadow="md"
                rotation={i % 2 === 0 ? -2 : 2}
                className="text-center py-4"
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl mb-2 block"
                >
                  {item.icon}
                </span>
                <span className="font-mono text-xs md:text-sm uppercase"
                >{item.label}</span>
              </ScrapbookCardV2>
            ))}
          </div>
        </section>

        {/* Philosophy Sections */}
        <section className="px-4 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            {/* Perché Feelings? */}
            <ScrapbookCardV2
              variant="primary"
              shadow="lg"
              rotation={-1}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3"
                >
                  <div className="aspect-square bg-surface-container flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-8xl text-primary-container"
                    >
                      favorite
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3"
                >
                  <h2 className="text-4xl md:text-5xl font-headline font-black mb-4 uppercase"
                  >
                    {philosophy.feelings.title}
                  </h2>
                  <p className="font-mono text-lg leading-relaxed"
                  >
                    {philosophy.feelings.content}
                  </p>
                </div>
              </div>
            </ScrapbookCardV2>

            {/* Perché Fried Chicken? */}
            <ScrapbookCardV2
              variant="default"
              shadow="xl"
              rotation={1}
              className="!border-4 !border-primary-container"
            >
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center"
              >
                <div className="w-full md:w-1/3"
                >
                  <div className="aspect-square bg-error-container flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-8xl text-white"
                    >
                      restaurant
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3"
                >
                  <h2 className="text-4xl md:text-5xl font-headline font-black mb-4 uppercase"
                  >
                    {philosophy.friedChicken.title}
                  </h2>
                  <p className="font-mono text-lg leading-relaxed"
                  >
                    {philosophy.friedChicken.content}
                  </p>
                </div>
              </div>
            </ScrapbookCardV2>

            {/* Perché Cocktails? */}
            <ScrapbookCardV2
              variant="white"
              shadow="lg"
              rotation={-1}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3"
                >
                  <div className="aspect-square bg-primary flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-8xl text-black"
                    >
                      local_bar
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-black"
                >
                  <h2 className="text-4xl md:text-5xl font-headline font-black mb-4 uppercase"
                  >
                    {philosophy.cocktails.title}
                  </h2>
                  <p className="font-mono text-lg leading-relaxed"
                  >
                    {philosophy.cocktails.content}
                  </p>
                </div>
              </div>
            </ScrapbookCardV2>

            {/* Chi Siamo? */}
            <ScrapbookCardV2
              variant="secondary"
              shadow="lg"
              rotation={0}
            >
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center"
              >
                <div className="w-full md:w-1/3"
                >
                  <div className="aspect-square bg-surface-container-high flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-8xl text-hot-pink"
                    >
                      groups
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3"
                >
                  <h2 className="text-4xl md:text-5xl font-headline font-black mb-4 uppercase"
                  >
                    {philosophy.chiSiamo.title}
                  </h2>
                  <p className="font-mono text-lg leading-relaxed"
                  >
                    {philosophy.chiSiamo.content}
                  </p>
                </div>
              </div>
            </ScrapbookCardV2>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 text-center">
          <ScrapbookCardV2
            variant="primary"
            shadow="xl"
            rotation={-2}
            className="inline-block max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-headline font-black mb-6 uppercase"
            >
              {callToAction.main}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={siteMetadata.social.instagram ? `https://instagram.com/${siteMetadata.social.instagram.replace('@', '')}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-primary-container font-headline font-black text-xl px-8 py-4 uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Seguici su IG
              </a>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteMetadata.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-headline font-black text-xl px-8 py-4 uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Come Trovarci
              </a>
            </div>
          </ScrapbookCardV2>
        </section>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
