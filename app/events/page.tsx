import { NoiseBackground } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

export default function EventsPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto min-h-screen z-10">
        {/* Hero Header */}
        <div className="relative mb-24 md:mb-32">
          <div className="absolute -top-10 -left-6 md:-left-20 transform -rotate-12 opacity-80 z-0">
            <svg className="text-primary-container" fill="none" height="180" viewBox="0 0 200 200" width="180" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 160C40 160 60 40 160 40M160 40L140 30M160 40L170 60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
            </svg>
          </div>
          
          <h2 className="font-headline font-black text-7xl md:text-9xl tracking-tighter uppercase text-white leading-none relative z-10">
            THE GIG <br/> <span className="text-primary-container">LIST.</span>
          </h2>
          
          <p className="font-marker text-hot-pink text-2xl md:text-4xl mt-4 -rotate-2 transform translate-x-4">
            Don&apos;t miss out, these sell fast!
          </p>
        </div>

        {/* Scattered Events Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-y-32 relative">
          
          {/* Event 1: Yellow Headliner Ticket */}
          <div className="md:col-span-8 relative z-20 transform -rotate-1 md:hover:rotate-0 transition-transform duration-300">
            <div className="bg-primary-container text-black p-8 md:p-12 shadow-hard-xl ticket-jagged-right paper-texture relative flex flex-col md:flex-row gap-8 min-h-[250px]">
              <div className="md:w-1/3 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-black/30 pb-6 md:pb-0 md:pr-8">
                <span className="font-headline font-black text-6xl leading-none">24</span>
                <span className="font-marker text-2xl uppercase">October</span>
                <div className="mt-4 font-bold text-lg">10:00 PM - LATE</div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <h3 className="font-headline font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
                  DJ Y2K B2B BOYZ
                </h3>
                <p className="font-mono text-xl font-bold uppercase opacity-80">Main Room / Jungle / Breakbeat</p>
                
                <div className="mt-8 flex items-center gap-4">
                  <button className="bg-black text-primary-container font-headline font-black px-8 py-3 uppercase tracking-tighter hover:scale-105 transition-transform"
                  >
                    RSVP NOW
                  </button>
                  <span className="font-marker text-hot-pink text-xl rotate-12 underline">Hottest ticket!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Polaroid 1 */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div className="bg-white p-4 pb-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transform rotate-6 hover:rotate-2 transition-transform duration-500 w-64"
            >
              <div className="relative bg-slate-200 aspect-square overflow-hidden mb-4"
              >
                <img 
                  alt="Gig crowd" 
                  className="w-full h-full object-cover filter grayscale sepia brightness-90" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOrMoXkGesN2JErL7H4L10Fyul-EuQF1yuul6PLiXHktedwkhk2_CtgQm4KUIm0WxbD4si8eicGhISNrbNtO5xYozSPeLelp-aZygUjKqET5iOO-iX_HAXtqGatImtnayvvBhgElkka_KV6MCz0Tt1lpiFAu5-aGF1D1sFL6z_18yVPp9ZTCECBnUeNgfLNY6grpKdIYHPLk1kQGwUhCwVsnn1uv37TMytXNva9UEWG1N3cidkCt5woMWkfk16uw1majzbN54B4w5X"
                />
                {/* Tape corners */}
                <div className="absolute -top-2 -left-4 w-12 h-6 masking-tape transform -rotate-45"></div>
                <div className="absolute -top-2 -right-4 w-12 h-6 masking-tape transform rotate-45"></div>
              </div>
              <p className="font-marker text-black text-center text-lg">Last time was crazy...</p>
            </div>
          </div>

          {/* Event 2: Dark RSVP Ticket */}
          <div className="md:col-start-5 md:col-span-8 relative z-10 transform rotate-2 md:hover:rotate-0 transition-transform duration-300"
          >
            <div className="bg-surface-container-highest border-4 border-white text-white p-8 md:p-12 shadow-hard-xl ticket-jagged-right paper-texture relative flex flex-col md:flex-row gap-8 min-h-[200px]"
            >
              <div className="md:w-1/3 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-white/20 pb-6 md:pb-0 md:pr-8"
              >
                <span className="font-headline font-black text-6xl leading-none text-primary-container">25</span>
                <span className="font-marker text-2xl uppercase">October</span>
                <div className="mt-4 font-bold text-lg">08:00 PM DOORS</div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center"
              >
                <h3 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-2"
                >KARAOKE RUMBLE</h3>
                <p className="font-mono text-lg opacity-60">The Pit • Free Entry • BYO Vocals</p>
                
                <div className="absolute -bottom-10 right-4 md:-right-10 transform rotate-12"
                >
                  <svg className="text-hot-pink" height="100" viewBox="0 0 100 100" width="100"
                  >
                    <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="5,5" strokeWidth="2"></circle>
                    <text fill="currentColor" fontFamily="Permanent Marker" fontSize="20" textAnchor="middle" x="50" y="55">FREE!</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Polaroid 2 */}
          <div className="md:col-span-4 md:col-start-1 md:row-start-2 flex justify-center items-center"
          >
            <div className="bg-white p-4 pb-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transform -rotate-12 hover:rotate-0 transition-transform duration-500 w-64"
            >
              <div className="relative bg-slate-200 aspect-[3/4] overflow-hidden mb-4"
              >
                <img 
                  alt="Singer" 
                  className="w-full h-full object-cover filter contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWjOalcWPognuXWT3srmkDGIXXWtV9OvBw0VhLQqDGop-KH_hsnq39ctFP0kj7K6RayXu7XfyjdAuYBRob_ifNribhG6LaU8QfcyiHcGVLe62NrAQA-UGxtHOjCi1Mc36qQYp2EfKQu4sWaPOboNNnjT7xNGN1zhDOMWNBYzhOMAZiWsvom3xiXb5Qd7TUEeRrBryrfMPLXlkojCQE550hPtUMiYjuG_FVm7Rl8RvwgOEcCce6Rq-9p92HbtVgPa5ewRamBObZgjT"
                />
                <div className="absolute -bottom-2 -left-4 w-12 h-6 masking-tape transform rotate-12"></div>
                <div className="absolute -bottom-2 -right-4 w-12 h-6 masking-tape transform -rotate-12"></div>
              </div>
              <p className="font-marker text-black text-center text-lg">Who&apos;s next?</p>
            </div>
          </div>

          {/* Event 3: Sold Out Ticket */}
          <div className="md:col-span-9 relative z-20 transform -rotate-2 md:hover:rotate-0 transition-transform duration-300"
          >
            <div className="bg-surface-container-highest border-4 border-white/30 text-white/50 p-8 md:p-12 shadow-hard-xl ticket-jagged-right paper-texture relative flex flex-col md:flex-row gap-8 min-h-[200px] overflow-hidden"
            >
              {/* Sold Out Stamp */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
              >
                <div className="border-8 border-hot-pink text-hot-pink font-headline font-black text-6xl md:text-8xl px-12 py-4 uppercase -rotate-12 opacity-90 scale-110"
                >SOLD OUT</div>
              </div>
              
              <div className="md:w-1/3 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-white/10 pb-6 md:pb-0 md:pr-8"
              >
                <span className="font-headline font-black text-6xl leading-none">28</span>
                <span className="font-marker text-2xl uppercase">October</span>
                <div className="mt-4 font-bold text-lg">$10 COVER</div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center"
              >
                <h3 className="font-headline font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-2"
                >THE FRIED CHICKENS</h3>
                <p className="font-mono text-lg">Live Band • Punk / Garage</p>
              </div>
            </div>
            
            {/* Scribble arrow */}
            <div className="absolute -top-16 right-0 text-primary-container hidden md:block"
            >
              <svg fill="none" height="120" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100" width="120" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 80C30 80 80 50 80 20M80 20L65 25M80 20L75 35" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="font-marker text-xl absolute top-0 right-[-80px] w-32">Missed it! Sad face.</span>
            </div>
          </div>

        </div>

        {/* Bottom Scrapbook Elements */}
        <div className="mt-32 border-t-4 border-white pt-12 text-center relative"
        >
          <p className="font-marker text-3xl text-white/40 rotate-2">More coming soon... maybe.</p>
          
          <div className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <span className="bg-hot-pink text-white font-headline font-black px-4 py-1 -rotate-3 uppercase">#FEELINGS</span>
            <span className="bg-primary-container text-black font-headline font-black px-4 py-1 rotate-6 uppercase">#LIVE</span>
            <span className="bg-white text-black font-headline font-black px-4 py-1 -rotate-6 uppercase">#LOUDER</span>
          </div>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
