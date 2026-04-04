import { NoiseBackground } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

export default function MenuPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen z-10">
        {/* Hero Title */}
        <div className="mb-16 relative">
          <div className="inline-block bg-primary-container text-on-primary-container px-6 py-2 rotate-[-2deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4">
            <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-none">
              THE STASH
            </h1>
          </div>
          <p className="font-mono text-lg md:text-xl max-w-md mt-4 opacity-80 leading-tight">
            // AUTHENTIC FLAVORS // RAW ENERGY // NO COMPROMISE // VOL. 1
          </p>
        </div>

        {/* Bento Grid Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* CAFFETTERIA SECTION */}
          <section className="md:col-span-5 bg-surface-container-low p-8 relative shadow-[6px_6px_0px_0px_rgba(255,222,0,1)]">
            <div className="absolute -top-4 -right-4 bg-error-container text-white px-3 py-1 text-xs font-headline font-bold rotate-12 uppercase">
              Hot & Fresh
            </div>
            <h2 className="text-4xl font-headline font-black mb-8 border-b-4 border-primary-container inline-block uppercase">
              Caffetteria
            </h2>
            
            <ul className="space-y-4 font-mono">
              <li className="flex justify-between items-end gap-2 group hover:text-primary transition-colors">
                <span className="text-xl">Espresso</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">1.20</span>
              </li>
              <li className="flex justify-between items-end gap-2">
                <span className="text-xl">Decaffeinato</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">1.20</span>
              </li>
              <li className="flex justify-between items-end gap-2">
                <span className="text-xl">Macchiato</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">1.20</span>
              </li>
              <li className="flex justify-between items-end gap-2">
                <span className="text-xl">Cappuccino</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">1.50</span>
              </li>
              <li className="flex justify-between items-end gap-2">
                <span className="text-xl">Caffè Latte</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">2.00</span>
              </li>
              <li className="flex justify-between items-end gap-2">
                <span className="text-xl">Marocchino</span>
                <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
                <span className="font-bold">1.80</span>
              </li>
            </ul>
          </section>

          {/* POLLO FRITTO SECTION */}
          <section className="md:col-span-7 bg-surface-container-highest p-8 relative rotate-[1deg]">
            {/* Polaroid Frame */}
            <div className="absolute -top-12 -right-8 w-48 h-60 bg-white p-2 shadow-2xl rotate-[-5deg] z-10 hidden lg:block">
              <div className="w-full h-44 bg-surface-dim overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale contrast-125" 
                  alt="Crispy golden fried chicken wings in a metal basket" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3TX6vp3Oitj1B6pDBufJyW9qS7L48TBPgOa1DBfrn7nsN62Vrsq8nlYVxvmSF8nUj3G0R0X7hOUzBNrDgBq-nCLqzOooL90ZVJcvq00YSS4ghkg2F-4BmyPy5h723PyE5tp0z2eM_mtGUq9b-UF2SpDcfXtdaujVgt_Ixz2fcpFrDAv_9wH7LDf8sJkBjNEGoCLBpTLRwn5CQug8ElWkwcSVrOEm0aLfDWeWiBmqYgZ7ZAvi8AU9yudlphSbX5mSpGu0pd1-0eWUw"
                />
              </div>
              <div className="pt-4 text-black font-mono text-center text-xs leading-none">
                THE BEST BIRD IN TOWN
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-6 tape-effect rotate-3"></div>
            </div>

            <h2 className="text-5xl font-headline font-black mb-8 uppercase tracking-tighter">
              Pollo Fritto
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 font-mono">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-lg">2 pezzi</span>
                  <span className="bg-primary text-black font-bold px-2">6.20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">4 pezzi</span>
                  <span className="bg-primary text-black font-bold px-2">10.60</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg">7 pezzi</span>
                  <span className="bg-primary text-black font-bold px-2">17.90</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm opacity-60 leading-tight italic border-l-2 border-primary pl-4">
                  All chicken served with our signature 'Feelings' spicy oil and lemon wedge.
                </p>
                <div className="flex justify-between mt-4">
                  <span className="text-lg font-bold">Pechurinas</span>
                  <span className="text-xl">9.50</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-outline-variant">
              <h3 className="font-headline font-bold text-2xl uppercase mb-4 text-primary">
                Contorno
              </h3>
              <div className="flex flex-wrap gap-4 font-mono">
                <span className="bg-surface-variant px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">
                  Patatine fritte
                </span>
                <span className="bg-surface-variant px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">
                  Tostones
                </span>
                <span className="bg-surface-variant px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer">
                  Platano
                </span>
              </div>
            </div>
          </section>

          {/* COCKTAILS SECTION (WIDE) */}
          <section className="md:col-span-12 bg-primary-container text-on-primary-container p-8 md:p-12 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-[0.5deg]">
            {/* Marquee */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center overflow-hidden">
              <div className="whitespace-nowrap font-headline font-black text-xs text-primary animate-marquee tracking-widest px-4">
                MIXOLOGY // NO RULES // POUR HEAVY // MIXOLOGY // NO RULES // POUR HEAVY // MIXOLOGY // NO RULES // POUR HEAVY
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
              <div>
                <h2 className="text-6xl font-headline font-black mb-12 uppercase italic leading-none scribble-underline">
                  Classici
                </h2>
                
                <ul className="space-y-6 font-mono text-xl">
                  <li className="flex justify-between border-b-2 border-black/10 pb-2">
                    <span>Aperol Spritz</span>
                    <span className="font-black">8.00</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2">
                    <span>Negroni</span>
                    <span className="font-black">9.00</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2">
                    <span>Old Fashioned</span>
                    <span className="font-black">10.00</span>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2">
                    <span>Moscow Mule</span>
                    <span className="font-black">9.00</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-6xl font-headline font-black mb-12 uppercase italic leading-none scribble-underline">
                  Creativi
                </h2>
                
                <ul className="space-y-6 font-mono text-xl">
                  <li className="flex justify-between border-b-2 border-black/10 pb-2 relative group cursor-pointer">
                    <span className="z-10">Daddy's Favourite</span>
                    <span className="font-black z-10">12.00</span>
                    <div className="absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2 relative group cursor-pointer">
                    <span className="z-10">Lost in Transit</span>
                    <span className="font-black z-10">11.00</span>
                    <div className="absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2 relative group cursor-pointer">
                    <span className="z-10">Midnight Fever</span>
                    <span className="font-black z-10">13.00</span>
                    <div className="absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </li>
                  <li className="flex justify-between border-b-2 border-black/10 pb-2 relative group cursor-pointer">
                    <span className="z-10">Tears of Joy</span>
                    <span className="font-black z-10">12.00</span>
                    <div className="absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* VINI & PROSECCO */}
          <section className="md:col-span-4 bg-surface-container p-6 border-t-8 border-primary relative">
            <h3 className="font-headline font-black text-2xl mb-6 uppercase">Vini & Prosecco</h3>
            
            <ul className="font-mono space-y-3 opacity-90">
              <li className="flex justify-between">
                <span>House Red (Glass)</span>
                <span>5.00</span>
              </li>
              <li className="flex justify-between">
                <span>House White (Glass)</span>
                <span>5.00</span>
              </li>
              <li className="flex justify-between">
                <span>Prosecco DOCG</span>
                <span>6.50</span>
              </li>
              <li className="flex justify-between">
                <span>Premium Select</span>
                <span>8.00</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-outline-variant">
              <h3 className="font-headline font-black text-2xl mb-4 uppercase">Birre</h3>
              <ul className="font-mono space-y-3 opacity-90">
                <li className="flex justify-between">
                  <span>Lager 0.4l</span>
                  <span>5.50</span>
                </li>
                <li className="flex justify-between">
                  <span>IPA 0.33l</span>
                  <span>6.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Craft Selection</span>
                  <span>7.50</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SOFT DRINKS */}
          <section className="md:col-span-4 bg-white text-black p-6 ripped-edge-top relative rotate-[-2deg]">
            <h3 className="font-headline font-black text-3xl mb-6 uppercase">Soft Drinks</h3>
            
            <ul className="font-mono space-y-4">
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Coca Cola</span>
                <span>3.50</span>
              </li>
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Fanta</span>
                <span>3.50</span>
              </li>
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Lemon Soda</span>
                <span>3.50</span>
              </li>
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Ginger Beer</span>
                <span>4.50</span>
              </li>
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Chinotto</span>
                <span>4.00</span>
              </li>
              <li className="flex justify-between items-center bg-black/5 px-2 py-1">
                <span className="font-bold">Still/Sparkling Water</span>
                <span>2.00</span>
              </li>
            </ul>
          </section>

          {/* KITCHEN HOURS + BAR IMAGE */}
          <section className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-secondary-container p-6 shadow-[8px_8px_0px_0px_rgba(255,222,0,1)]">
              <span className="material-symbols-outlined text-4xl mb-4 text-primary">
                restaurant_menu
              </span>
              <h4 className="font-headline font-bold text-xl uppercase mb-2">Kitchen Hours</h4>
              <p className="font-mono text-sm leading-tight italic">
                FRI-SAT: 18:00 - 02:00<br/>
                SUN-THU: 18:00 - 00:00
              </p>
            </div>
            
            <div className="relative w-full h-48 bg-surface-container-highest overflow-hidden">
              <img 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay" 
                alt="Bar atmosphere" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWeYXjpAzfB9jup_9N46RLxOR2amxmFo0AtLsb_FFP-IAMcpLeD6VWbsROFxtyIOTpvau1q1NruoH_oQjx3dcDKtsu7jh3xGM9eM1AWRmmenZ07bLpj0iOFcripBE7f3w_NWAG5x2s-nKMX_1VJMGb-YqILjCj6Lp6KxdbWIjeMF8Qra-HKeXNyLoKSGYGw-FV7HM9u98NMy41FicdmDRwI0i2xZXSdmlS26F1n9aLw1O8eKNAXkSxMldE_1rU4xrNnQ3y_kmmDZv-"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-black font-headline font-black text-2xl px-4 py-2 rotate-[-15deg] shadow-xl uppercase">
                  Don't Panic
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
