import { PolaroidFrame, StickerButton, Tape } from '@/components'

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Side: Editorial Content */}
      <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
        <div className="relative inline-block self-start rotate-[-2deg]">
          <span className="bg-primary-container text-black px-4 py-2 text-sm font-mono font-bold shadow-hard uppercase">
            EST. 2024 / VOL. 01
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
          DRINK YOUR <br/>
          <span className="text-primary-container">FEELINGS</span> <br/>
          LOUDLY.
        </h1>
        
        <p className="font-body text-xl md:text-2xl leading-relaxed max-w-md italic opacity-90">
          A multi-sensory dive into the analog artifacts of our collective memory. 
          This is not just a bar; it's a living journal of every late night and early morning.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-surface-container-highest p-4 rotate-[1deg] shadow-hard max-w-xs">
            <p className="font-mono text-xs opacity-70 mb-2">// CURRENT STATE</p>
            <p className="font-headline font-bold text-lg uppercase leading-tight">Mood: High Octane & Nostalgic</p>
          </div>
        </div>
      </div>

      {/* Right Side: Polaroid Frame */}
      <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2 relative">
        <div className="relative">
          <Tape position="top-left" rotation={-45} />
          <Tape position="bottom-right" rotation={-30} />
          
          <PolaroidFrame
            rotation={3}
            caption="SATURDAY NIGHT ARTIFACT #042"
            imageUrl="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
            imageAlt="Moody dark bar interior with neon lighting"
          />
          
          {/* Scribble Arrow */}
          <div className="absolute -bottom-10 -left-20 hidden md:block">
            <svg className="rotate-[15deg]" fill="none" height="80" viewBox="0 0 120 80" width="120" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 70C30 70 50 10 110 20" stroke="#ff69b4" strokeDasharray="10 10" strokeLinecap="round" strokeWidth="6"></path>
              <path d="M100 10L115 22L98 35" stroke="#ff69b4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
            </svg>
          </div>
          
          {/* CTA Sticker */}
          <StickerButton 
            href="/reservations" 
            rotation={-5}
            className="absolute -bottom-4 -left-12"
          >
            SNAG A TABLE
          </StickerButton>
        </div>

        {/* Background Polaroids */}
        <div className="absolute -top-10 -right-4 w-32 h-40 bg-white p-2 pb-8 shadow-hard rotate-[-15deg] -z-10 opacity-40">
          <div className="w-full h-full bg-surface-container-highest"></div>
        </div>
        <div className="absolute bottom-10 -right-20 w-40 h-32 bg-white p-2 pb-8 shadow-hard rotate-[25deg] -z-10 opacity-30">
          <div className="w-full h-full bg-surface-container-high"></div>
        </div>
      </div>
    </div>
  )
}
