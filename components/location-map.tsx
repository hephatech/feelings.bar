'use client'

import { useEffect, useState } from 'react'
import { ScrapbookCardV2 } from './scrapbook-card-v2'

// Feelings Bar coordinates
// Via Confalonieri, 7, 20821 Meda MB, Italy
const FEELINGS_LOCATION = {
  lat: 45.6613,
  lng: 9.1626,
  address: 'Via Confalonieri, 7, 20821 Meda MB',
  phone: '+39 (351)-708 5845',
}

export function LocationMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="px-4 md:px-12 py-16 max-w-7xl mx-auto">
        <ScrapbookCardV2 variant="white" shadow="lg" className="h-[400px] flex items-center justify-center">
          <p className="font-mono text-black">Caricamento mappa...</p>
        </ScrapbookCardV2>
      </section>
    )
  }

  return (
    <section className="px-4 md:px-12 py-16 max-w-7xl mx-auto">
      <ScrapbookCardV2
        variant="primary"
        shadow="xl"
        rotation={-1}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Info Panel */}
          <div className="p-6 md:p-8 bg-black text-white">
            <h3 className="text-2xl md:text-3xl font-headline font-black uppercase mb-6"
            >
              Vieni a trovarci
            </h3>
            
            <div className="space-y-4 font-mono"
            >
              <div className="flex items-start gap-3"
              >
                <span className="material-symbols-outlined text-primary-container"
                >
                  location_on
                </span>
                <div>
                  <p className="font-bold">Indirizzo</p>
                  <p className="text-sm opacity-80">{FEELINGS_LOCATION.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3"
              >
                <span className="material-symbols-outlined text-primary-container"
                >
                  phone
                </span>
                <div>
                  <p className="font-bold">Telefono</p>
                  <a 
                    href={`tel:${FEELINGS_LOCATION.phone.replace(/\s/g, '')}`}
                    className="text-sm opacity-80 hover:text-primary-container transition-colors"
                  >
                    {FEELINGS_LOCATION.phone}
                  </a>
                </div>
              </div>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(FEELINGS_LOCATION.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-primary-container text-black px-4 py-2 font-headline font-bold uppercase text-sm hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
                Apri in Google Maps
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="md:col-span-2 h-[300px] md:h-[400px] relative bg-surface-container"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d${FEELINGS_LOCATION.lng}!3d${FEELINGS_LOCATION.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM5JzQwLjciTiA5wrAwOSc0NS40IkU!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Feelings Bar Location"
            />
            
            {/* Custom Marker Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none"
            >
              <div className="relative"
              >
                <div className="w-8 h-8 bg-primary-container rounded-full flex items-center justify-center shadow-lg animate-bounce"
                >
                  <span className="material-symbols-outlined text-black text-lg"
                >
                    restaurant
                  </span>
                </div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-primary-container absolute -bottom-[10px] left-1/2 -translate-x-1/2"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer attribution */}
        <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between text-xs font-mono opacity-60"
        >
          <span>© Feelings Bar</span>
          <div className="flex items-center gap-2"
          >
            <span>Map data © Google</span>
          </div>
        </div>
      </ScrapbookCardV2>
    </section>
  )
}
