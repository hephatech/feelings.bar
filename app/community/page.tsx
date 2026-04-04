'use client'

import { useState } from 'react'
import { NoiseBackground, ScrapbookCardV2, Polaroid } from '@/components'
import { UploadModal } from '@/app/components/upload-modal'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

const polaroids = [
  {
    id: 1,
    caption: 'La Famiglia ❤️',
    rotation: -2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc8DFySMATWrRn06udMAEqfv6CVcnvhrTbnZDYBuKPwNLeFuAWlB8kiTvNBtMz6X4b497k-Kb4sg0YeUX6RFQLjpmxZkTQ09zjMh9aMN-9uq1Kb1nOvsTvxNetQBbIfDKHgzJp7htVIpxTO-f5Z--Oum6Kvy7e3InyQnW9q-AC6163ldoMgIxGeymJvmBAYwVM1TZv29t8_ledrgR7a0LW5Ff5vcMCF9zRN5ibSb0az7vOX0WgRdHcsMV0wq8GvauysGt8h0SnGgzB',
    alt: 'Amici che ridono al bar',
    tape: { top: true, left: '1/2', rotate: 2 },
  },
  {
    id: 2,
    caption: 'TUTTO FIGO',
    rotation: 3,
    translateY: 8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkbEwQsS45twJv5ObTh2ejEl4I7wwBRQoC74UKP9G3ZiIqPruEzGm93eG9-klKTfpjM5mszlf4TVSdxObXKFtdboOKNVPrlVMXkujK9PzPxZTfh0ORSvs1xuuIE5vOnF4MhC40nghIs8Z4RcrdpzsVmN5SO6eKw-2-VzNXYM28_qc01D9jXj4BG2J7DZsTbaykZSpJ6-xEIe6rfnUy7nePxIaCXOs6WWoD9jvbBz7vXno33NFD06h6ECXD-Z88uVVjttzVFpuAkuMU',
    alt: 'Mural de graffiti',
    aspect: 'four-five',
    tape: { top: true, right: 4, rotate: -15 },
  },
  {
    id: 3,
    caption: 'SOLO BELLE VIBES',
    rotation: -1,
    translateY: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPSCw7xI0lmks3MmH73IdQ34afNNAgwjo1HMuoS8PhZ_ajhgVV5YIisOElsMlMCILYOG17iasWkuLgHKryxVVGMqHlB_GdU9D04fisryFyyTd1onfoLFK24AubumveRapWLoYNsvxxoa83Udh6e_HPVNuZsUFzsT2SFFrz36YZ9ixDl5-gAq8w8rLZqt0SxpNEsqc04n0BaAgyWWZsN3Cv2RTLqmP6a6TqO8XRePq7ckVUNKxnC21N-BTEyAeyiL-FYyQOnTrrjBTz',
    alt: 'Pollo frito y cocktails',
    tape: { top: true, left: -6, rotate: 90 },
  },
  {
    id: 4,
    caption: 'DOPO IL TRAMONTO',
    rotation: 5,
    translateY: -12,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYYGpfoWLZbxmHtgFQeIOQKBbjFKpJBM10wRX89pnseIpZluqclc4VVUjXJqldNRI5ajTtmsnT5mqe4GNtQtUbDCmdWNMd8cl5vimcPNPI9SiRs4xLeA3SqnzmhpaWlC53C41xgYshEwE2TpRVsK_KOoMoeQrk60fZEwaRtozwbvL3FEw_LnqHU7wBrw0r6l2buhva1fBWhWrw37sbbyZJls-Z_3wv-PkBwm48OZZHCPX8l0pv0KTIml0lN7IIGnndW4fVmQhZzeeV',
    alt: 'Interior del bar con neón',
    aspect: 'portrait',
  },
  {
    id: 5,
    caption: 'SIAMO QUI',
    rotation: -4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbNik4sP7HsUg05xJc9sFQhf9V8J9XpHwLZimn35GJSIQTEFdtPdZs93jJdpirLim-r25n_vPwJhUhHRQYFkne2ERnIGQoEQS8yFgnh_RSxG5nAE3_vmmdmji9d-WMoECt2bCJZTAv5fhjut79FwbOce_ji0kJMRNuNXD93wVS6cexeNTtMGNY9pd6NRbzJaTnX4oAE3jeBmVVgLL9MQi-22T9ksBQz_wsUuH_UJ-YOWs1HNnRJzlQQ-PkCiD_LwhZIhZ4tOWWFcig',
    alt: 'Gente bailando',
    tape: { bottom: true, left: 4, rotate: 5 },
  },
  {
    id: 6,
    caption: 'CHE VIBE?',
    rotation: 2,
    translateY: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIciwxdmM34FOHdKKhtCHVTezx2u4EGmrF7_uyCXn_yrrCpeCS27eocJDfF54NUb2libc0R5iLwA0mqoOriXOloRrNyeuIW2p9vRsjMiQqwUT5AWYecPBCbYltMU1xexs1qRt2HU5H3HCAFiIleaMalbWYlJimc17EBsOBakOHtkXbO1Q4pQjcq7SzEjLuuDi7uBReNGZsDWsgow16n23Wq9tMLIQhesYgo63Od2rAhEqkm38P7j81AB9_XtVJFDOyweGB5L2nwFym',
    alt: 'Tocadiscos vintage',
  },
]

function CustomTape({ position, rotate }: { position: string | number; rotate: number }) {
  const leftStyle = position === '1/2' 
    ? 'left-1/2 -translate-x-1/2' 
    : typeof position === 'number' 
      ? `left-[${position * 4}px]` 
      : ''
  
  return (
    <div
      className={`absolute w-24 h-8 masking-tape z-10 ${leftStyle}`}
      style={{ 
        top: '-16px',
        transform: `rotate(${rotate}deg)`,
      }}
    />
  )
}

export default function CommunityPage() {
  const [isUploadOpen, setIsUploadOpen] = useState(false)

  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-24 pb-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen z-10">
        {/* Section Title */}
        <div className="relative z-10 mb-12">
          <h1 className="text-7xl md:text-9xl font-black font-headline italic tracking-tighter text-white uppercase mix-blend-difference"
          >
            IL MURO
          </h1>
          <ScrapbookCardV2
            variant="primary"
            shadow="md"
            rotation={3}
            className="absolute -top-4 -right-4 md:right-20 !px-6 !py-2"
          >
            <span className="font-headline font-bold text-xl uppercase">Diario di Comunità</span>
          </ScrapbookCardV2>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start relative"
        >
          {polaroids.map((polaroid) => (
            <div
              key={polaroid.id}
              className="relative group transition-transform hover:rotate-0 hover:z-20 hover:scale-105 duration-300"
              style={{
                transform: `rotate(${polaroid.rotation}deg) ${polaroid.translateY ? `translateY(${polaroid.translateY * 4}px)` : ''}`,
              }}
            >
              <Polaroid
                imageUrl={polaroid.image}
                alt={polaroid.alt}
                caption={polaroid.caption}
                rotation={0} /* Rotation applied by parent */
                aspectRatio={polaroid.aspect || 'square'}
                tape={polaroid.tape ? 'custom' : 'none'}
                customTape={polaroid.tape ? (
                  <CustomTape 
                    position={polaroid.tape.left || polaroid.tape.right || '1/2'} 
                    rotate={polaroid.tape.rotate || 0} 
                  /
                ) : undefined}
                grayscale
                className="w-full"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Floating Sticker */}
      <div className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-50 group"
      >
        <button
          onClick={() => setIsUploadOpen(true)}
          className="w-32 h-32 md:w-48 md:h-48 bg-primary-container text-black font-headline font-black text-xl md:text-2xl rounded-full flex items-center justify-center p-6 text-center leading-none uppercase rotate-[-12deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 group-hover:rotate-0 transition-all cursor-pointer"
        >
          AGGIUNGI LA TUA FACCIA
        </button>
      </div>

      <UploadModal isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} />

      <SideNav />
      <BottomNav />
    </>
  )
}
