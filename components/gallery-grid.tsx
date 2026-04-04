'use client'

import { useEffect } from 'react'
import { ScrapbookCardV2 } from './scrapbook-card-v2'

// Gallery grid component matching official feelings.bar layout
// 7 images in masonry-style grid

const galleryImages = [
  {
    id: '1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc8DFySMATWrRn06udMAEqfv6CVcnvhrTbnZDYBuKPwNLeFuAWlB8kiTvNBtMz6X4b497k-Kb4sg0YeUX6RFQLjpmxZkTQ09zjMh9aMN-9uq1Kb1nOvsTvxNetQBbIfDKHgzJp7htVIpxTO-f5Z--Oum6Kvy7e3InyQnW9q-AC6163ldoMgIxGeymJvmBAYwVM1TZv29t8_ledrgR7a0LW5Ff5vcMCF9zRN5ibSb0az7vOX0WgRdHcsMV0wq8GvauysGt8h0SnGgzB',
    alt: 'Primo piano del bar',
    caption: 'Primo piano del bar',
    span: 'col-span-2 row-span-2',
  },
  {
    id: '2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOrMoXkGesN2JErL7H4L10Fyul-EuQF1yuul6PLiXHktedwkhk2_CtgQm4KUIm0WxbD4si8eicGhISNrbNtO5xYozSPeLelp-aZygUjKqET5iOO-iX_HAXtqGatImtnayvvBhgElkka_KV6MCz0Tt1lpiFAu5-aGF1D1sFL6z_18yVPp9ZTCECBnUeNgfLNY6grpKdIYHPLk1kQGwUhCwVsnn1uv37TMytXNva9UEWG1N3cidkCt5woMWkfk16uw1majzbN54B4w5X',
    alt: 'Yellow energy',
    caption: 'Yellow: The energy you need when your day feels dark',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPSCw7xI0lmks3MmH73IdQ34afNNAgwjo1HMuoS8PhZ_ajhgVV5YIisOElsMlMCILYOG17iasWkuLgHKryxVVGMqHlB_GdU9D04fisryFyyTd1onfoLFK24AubumveRapWLoYNsvxxoa83Udh6e_HPVNuZsUFzsT2SFFrz36YZ9ixDl5-gAq8w8rLZqt0SxpNEsqc04n0BaAgyWWZsN3Cv2RTLqmP6a6TqO8XRePq7ckVUNKxnC21N-BTEyAeyiL-FYyQOnTrrjBTz',
    alt: 'Logo Feelings',
    caption: 'Logo ufficiale del feelings bar',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJWjOalcWPognuXWT3srmkDGIXXWtV9OvBw0VhLQqDGop-KH_hsnq39ctFP0kj7K6RayXu7XfyjdAuYBRob_ifNribhG6LaU8QfcyiHcGVLe62NrAQA-UGxtHOjCi1Mc36qQYp2EfKQu4sWaPOboNNnjT7xNGN1zhDOMWNBYzhOMAZiWsvom3xiXb5Qd7TUEeRrBryrfMPLXlkojCQE550hPtUMiYjuG_FVm7Rl8RvwgOEcCce6Rq-9p92HbtVgPa5ewRamBObZgjT',
    alt: 'Mural',
    caption: 'Il nostro murale',
    span: 'col-span-1 row-span-2',
  },
  {
    id: '5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYYGpfoWLZbxmHtgFQeIOQKBbjFKpJBM10wRX89pnseIpZluqclc4VVUjXJqldNRI5ajTtmsnT5mqe4GNtQtUbDCmdWNMd8cl5vimcPNPI9SiRs4xLeA3SqnzmhpaWlC53C41xgYshEwE2TpRVsK_KOoMoeQrk60fZEwaRtozwbvL3FEw_LnqHU7wBrw0r6l2buhva1fBWhWrw37sbbyZJls-Z_3wv-PkBwm48OZZHCPX8l0pv0KTIml0lN7IIGnndW4fVmQhZzeeV',
    alt: 'Scale',
    caption: 'Lascia le bad vibes fuori',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '6',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbNik4sP7HsUg05xJc9sFQhf9V8J9XpHwLZimn35GJSIQTEFdtPdZs93jJdpirLim-r25n_vPwJhUhHRQYFkne2ERnIGQoEQS8yFgnh_RSxG5nAE3_vmmdmji9d-WMoECt2bCJZTAv5fhjut79FwbOce_ji0kJMRNuNXD93wVS6cexeNTtMGNY9pd6NRbzJaTnX4oAE3jeBmVVgLL9MQi-22T9ksBQz_wsUuH_UJ-YOWs1HNnRJzlQQ-PkCiD_LwhZIhZ4tOWWFcig',
    alt: 'Famiglia',
    caption: 'Famiglia = ❤️',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '7',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIciwxdmM34FOHdKKhtCHVTezx2u4EGmrF7_uyCXn_yrrCpeCS27eocJDfF54NUb2libc0R5iLwA0mqoOriXOloRrNyeuIW2p9vRsjMiQqwUT5AWYecPBCbYltMU1xexs1qRt2HU5H3HCAFiIleaMalbWYlJimc17EBsOBakOHtkXbO1Q4pQjcq7SzEjLuuDi7uBReNGZsDWsgow16n23Wq9tMLIQhesYgo63Od2rAhEqkm38P7j81AB9_XtVJFDOyweGB5L2nwFym',
    alt: 'Barista',
    caption: 'Il nostro barista',
    span: 'col-span-2 row-span-1',
  },
]

export function GalleryGrid() {
  return (
    <section className="px-4 md:px-12 py-16 max-w-7xl mx-auto">
      <ScrapbookCardV2
        variant="default"
        shadow="lg"
        rotation={-0.5}
        className="mb-8 inline-block"
      >
        <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter"
        >
          Feelings Bar è tutto questo e molto altro!
        </h2>
      </ScrapbookCardV2>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`relative group overflow-hidden ${image.span} ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            } ${index === 3 ? 'md:row-span-2' : ''} ${
              index === 6 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="absolute inset-0 bg-surface-container animate-pulse"
            ></div>
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <p className="font-mono text-sm text-white">{image.caption}</p>
            </div>

            {/* Tape Effect on corners */}
            <div className="absolute top-2 left-2 w-8 h-4 masking-tape -rotate-45 opacity-70"
            ></div>
            <div className="absolute top-2 right-2 w-8 h-4 masking-tape rotate-45 opacity-70"
            ></div>
          </div>
        ))}
      </div>
    </section>
  )
}
