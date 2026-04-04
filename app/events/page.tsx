import { NoiseBackground, Ticket, Polaroid, SectionHeader } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

export default function EventsPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto min-h-screen z-10">
        <SectionHeader
          title="THE GIG"
          highlight="LIST."
          tagline="Don't miss out, these sell fast!"
          variant="hero"
        />

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-y-32 relative"
        >
          {/* Event 1: DJ Y2K */}
          <div className="md:col-span-8 relative z-20"
          >
            <Ticket
              day="24"
              month="October"
              time="10:00 PM - LATE"
              title="DJ Y2K B2B BOYZ"
              subtitle="Main Room / Jungle / Breakbeat"
              price=""
              variant="primary"
              rotation={-1}
            >
              <div className="mt-8 flex items-center gap-4"
              >
                <button className="bg-black text-primary-container font-headline font-black px-8 py-3 uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  RSVP NOW
                </button>
                <span className="font-marker text-hot-pink text-xl rotate-12 underline"
                >Hottest ticket!</span>
              </div>
            </Ticket>
          </div>

          {/* Polaroid 1 */}
          <div className="md:col-span-4 flex justify-center items-center"
          >
            <Polaroid
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCOrMoXkGesN2JErL7H4L10Fyul-EuQF1yuul6PLiXHktedwkhk2_CtgQm4KUIm0WxbD4si8eicGhISNrbNtO5xYozSPeLelp-aZygUjKqET5iOO-iX_HAXtqGatImtnayvvBhgElkka_KV6MCz0Tt1lpiFAu5-aGF1D1sFL6z_18yVPp9ZTCECBnUeNgfLNY6grpKdIYHPLk1kQGwUhCwVsnn1uv37TMytXNva9UEWG1N3cidkCt5woMWkfk16uw1majzbN54B4w5X"
              alt="Gig crowd"
              caption="Last time was crazy..."
              rotation={6}
              tape="corners"
              grayscale
            />
          </div>

          {/* Event 2: Karaoke */}
          <div className="md:col-start-5 md:col-span-8 relative z-10"
          >
            <Ticket
              day="25"
              month="October"
              time="08:00 PM DOORS"
              title="KARAOKE RUMBLE"
              subtitle="The Pit • Free Entry • BYO Vocals"
              variant="dark"
              rotation={2}
            >
              <div className="absolute -bottom-10 right-4 md:-right-10 transform rotate-12"
              >
                <svg className="text-hot-pink" height="100" viewBox="0 0 100 100" width="100"
                >
                  <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="5,5" strokeWidth="2"
                  ></circle>
                  <text fill="currentColor" fontFamily="Permanent Marker" fontSize="20" textAnchor="middle" x="50" y="55"
                  >FREE!</text>
                </svg>
              </div>
            </Ticket>
          </div>

          {/* Polaroid 2 */}
          <div className="md:col-span-4 md:col-start-1 md:row-start-2 flex justify-center items-center"
          >
            <Polaroid
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWjOalcWPognuXWT3srmkDGIXXWtV9OvBw0VhLQqDGop-KH_hsnq39ctFP0kj7K6RayXu7XfyjdAuYBRob_ifNribhG6LaU8QfcyiHcGVLe62NrAQA-UGxtHOjCi1Mc36qQYp2EfKQu4sWaPOboNNnjT7xNGN1zhDOMWNBYzhOMAZiWsvom3xiXb5Qd7TUEeRrBryrfMPLXlkojCQE550hPtUMiYjuG_FVm7Rl8RvwgOEcCce6Rq-9p92HbtVgPa5ewRamBObZgjT"
              alt="Singer"
              caption="Who's next?"
              rotation={-12}
              tape="bottom"
            />
          </div>

          {/* Event 3: Sold Out */}
          <div className="md:col-span-9 relative z-20"
          >
            <Ticket
              day="28"
              month="October"
              time="$10 COVER"
              title="THE FRIED CHICKENS"
              subtitle="Live Band • Punk / Garage"
              variant="sold-out"
              rotation={-2}
              stamp="sold-out"
            />

            {/* Scribble arrow */}
            <div className="absolute -top-16 right-0 text-primary-container hidden md:block"
            >
              <svg fill="none" height="120" stroke="currentColor" strokeWidth="4" viewBox="0 0 100 100" width="120"
              >
                <path d="M10 80C30 80 80 50 80 20M80 20L65 25M80 20L75 35" strokeLinecap="round" strokeLinejoin="round"
                ></path>
              </svg>
              <span className="font-marker text-xl absolute top-0 right-[-80px] w-32"
              >Missed it! Sad face.</span>
            </div>
          </div>
        </div>

        {/* Bottom Tags */}
        <div className="mt-32 border-t-4 border-white pt-12 text-center"
        >
          <p className="font-marker text-3xl text-white/40 rotate-2"
          >More coming soon... maybe.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <span className="bg-hot-pink text-white font-headline font-black px-4 py-1 -rotate-3 uppercase"
            >#FEELINGS</span>
            <span className="bg-primary-container text-black font-headline font-black px-4 py-1 rotate-6 uppercase"
            >#LIVE</span>
            <span className="bg-white text-black font-headline font-black px-4 py-1 -rotate-6 uppercase"
            >#LOUDER</span>
          </div>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
