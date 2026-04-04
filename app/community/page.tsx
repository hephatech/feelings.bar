import { NoiseBackground, SplashSplatters, StickerButton } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

export default function CommunityPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-24 px-6 md:px-12 z-10 max-w-7xl mx-auto min-h-screen">
        <SplashSplatters showTopLeft showBottomRight />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary-container text-black px-4 py-2 font-mono font-bold text-sm shadow-hard rotate-[-1deg]">
              ENTRY 003
            </div>
            <div className="h-px bg-outline-variant flex-1" />
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            THE <span className="text-primary-container">WALL</span>
          </h1>

          <p className="font-body text-xl max-w-2xl italic opacity-80">
            A collective memory of nights that turned into mornings.
            Share your story, join the inner circle.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-surface-container p-8 shadow-hard relative">
            <div className="absolute -top-4 -right-4 w-20 h-8 tape rotate-[-20deg]" />
            
            <h2 className="font-headline font-black text-2xl uppercase mb-4">
              Join the Inner Circle
            </h2>
            
            <p className="font-body text-on-surface-variant mb-6">
              Get exclusive invites, early access to events, and cocktail recipes
              delivered to your inbox. No spam, just vibes.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-black border-2 border-outline-variant px-4 py-3 font-mono text-sm focus:border-primary-container focus:outline-none transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="bg-primary-container text-black font-headline font-bold px-6 py-3 shadow-hard hover:translate-y-0.5 transition-transform uppercase w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h2 className="font-headline font-black text-2xl uppercase">
              Find Us
            </h2>

            {[
              { name: 'Instagram', handle: '@feelings.bar', icon: 'photo_camera' },
              { name: 'Spotify', handle: 'Feelings Bar Playlist', icon: 'music_note' },
              { name: 'Twitter', handle: '@feelingsbar', icon: 'chat' },
            ].map((social, i) => (
              <a
                key={social.name}
                href="#"
                className="flex items-center gap-4 p-4 bg-surface-container hover:bg-surface-container-high transition-colors group"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <span className="material-symbols-outlined text-primary-container text-2xl">
                  {social.icon}
                </span>
                <div>
                  <div className="font-headline font-bold uppercase">{social.name}</div>
                  <div className="font-mono text-xs text-on-surface-variant">{social.handle}</div>
                </div>
                <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Photo Wall Preview */}
        <div className="mb-16">
          <h2 className="font-headline font-black text-2xl uppercase mb-8 flex items-center gap-4">
            <span>The Wall</span>
            <div className="h-px bg-outline-variant flex-1" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-surface-container shadow-hard flex items-center justify-center"
                style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
              >
                <span className="material-symbols-outlined text-4xl text-primary-container/20">
                  photo
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-mono text-sm text-on-surface-variant mb-4">
              Share your moments #feelingsbar
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <StickerButton href="mailto:hello@feelings.bar" rotation={-3}>
            GET IN TOUCH
          </StickerButton>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
