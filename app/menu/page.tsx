import { NoiseBackground, ScrapbookCardV2, Polaroid, Marquee } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

interface MenuItemProps {
  name: string
  price: string
  highlight?: boolean
}

function MenuItem({ name, price, highlight }: MenuItemProps) {
  return (
    <li className="flex justify-between items-end gap-2 group hover:text-primary transition-colors">
      <span className={highlight ? 'text-lg font-bold' : 'text-xl'}>{name}</span>
      <div className="flex-grow border-b border-dashed border-outline-variant mb-1"></div>
      <span className={highlight ? 'text-xl' : 'font-bold'}>{price}</span>
    </li>
  )
}

interface MenuItemBadgeProps {
  name: string
  price: string
}

function MenuItemBadge({ name, price }: MenuItemBadgeProps) {
  return (
    <div className="flex justify-between">
      <span className="text-lg">{name}</span>
      <span className="bg-primary text-black font-bold px-2">{price}</span>
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-32 pb-32 px-4 md:px-12 max-w-7xl mx-auto min-h-screen z-10">
        {/* Hero */}
        <div className="mb-16 relative"
        >
          <ScrapbookCardV2
            variant="primary"
            shadow="lg"
            rotation={-2}
            className="inline-block px-6 py-2 mb-4"
          >
            <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-none"
            >
              THE STASH
            </h1>
          </ScrapbookCardV2>
          
          <p className="font-mono text-lg md:text-xl max-w-md mt-4 opacity-80 leading-tight"
          >
            // AUTHENTIC FLAVORS // RAW ENERGY // NO COMPROMISE // VOL. 1
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          
          {/* Caffetteria */}
          <ScrapbookCardV2
            variant="default"
            shadow="md"
            rotation={0}
            className="md:col-span-5 !border-4 !border-primary-container"
          >
            <div className="absolute -top-4 -right-4 bg-error-container text-white px-3 py-1 text-xs font-headline font-bold rotate-12 uppercase"
            >
              Hot & Fresh
            </div>
            
            <h2 className="text-4xl font-headline font-black mb-8 border-b-4 border-primary-container inline-block uppercase"
            >Caffetteria</h2>
            
            <ul className="space-y-4 font-mono"
            >
              <MenuItem name="Espresso" price="1.20" />
              <MenuItem name="Decaffeinato" price="1.20" />
              <MenuItem name="Macchiato" price="1.20" />
              <MenuItem name="Cappuccino" price="1.50" />
              <MenuItem name="Caffè Latte" price="2.00" />
              <MenuItem name="Marocchino" price="1.80" />
            </ul>
          </ScrapbookCardV2>

          {/* Pollo Fritto */}
          <ScrapbookCardV2
            variant="default"
            shadow="lg"
            rotation={1}
            className="md:col-span-7"
          >
            <div className="absolute -top-12 -right-8 hidden lg:block"
            >
              <Polaroid
                imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuB3TX6vp3Oitj1B6pDBufJyW9qS7L48TBPgOa1DBfrn7nsN62Vrsq8nlYVxvmSF8nUj3G0R0X7hOUzBNrDgBq-nCLqzOooL90ZVJcvq00YSS4ghkg2F-4BmyPy5h723PyE5tp0z2eM_mtGUq9b-UF2SpDcfXtdaujVgt_Ixz2fcpFrDAv_9wH7LDf8sJkBjNEGoCLBpTLRwn5CQug8ElWkwcSVrOEm0aLfDWeWiBmqYgZ7ZAvi8AU9yudlphSbX5mSpGu0pd1-0eWUw"
                alt="Crispy golden fried chicken wings"
                caption="THE BEST BIRD IN TOWN"
                rotation={-5}
                size="sm"
              />
            </div>

            <h2 className="text-5xl font-headline font-black mb-8 uppercase tracking-tighter"
            >Pollo Fritto</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 font-mono"
            >
              <div className="space-y-4"
              >
                <MenuItemBadge name="2 pezzi" price="6.20" />
                <MenuItemBadge name="4 pezzi" price="10.60" />
                <MenuItemBadge name="7 pezzi" price="17.90" />
              </div>
              
              <div className="space-y-4"
              >
                <p className="text-sm opacity-60 leading-tight italic border-l-2 border-primary pl-4"
                >
                  All chicken served with our signature &apos;Feelings&apos; spicy oil and lemon wedge.
                </p>
                <div className="flex justify-between mt-4"
                >
                  <span className="text-lg font-bold">Pechurinas</span>
                  <span className="text-xl">9.50</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-outline-variant"
            >
              <h3 className="font-headline font-bold text-2xl uppercase mb-4 text-primary"
              >Contorno</h3>
              <div className="flex flex-wrap gap-4 font-mono"
              >
                {['Patatine fritte', 'Tostones', 'Platano'].map((item) => (
                  <span
                    key={item}
                    className="bg-surface-variant px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrapbookCardV2>

          {/* Cocktails */}
          <ScrapbookCardV2
            variant="primary"
            shadow="xl"
            rotation={-0.5}
            className="md:col-span-12 !pt-16"
          >
            <div className="absolute top-0 left-0 w-full"
            >
              <Marquee
                text="MIXOLOGY // NO RULES // POUR HEAVY // MIXOLOGY // NO RULES // POUR HEAVY // MIXOLOGY // NO RULES // POUR HEAVY"
                speed="normal"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4"
            >
              <div>
                <h2 className="text-6xl font-headline font-black mb-12 uppercase italic leading-none scribble-underline"
                >Classici</h2>
                
                <ul className="space-y-6 font-mono text-xl"
                >
                  {[
                    { name: 'Aperol Spritz', price: '8.00' },
                    { name: 'Negroni', price: '9.00' },
                    { name: 'Old Fashioned', price: '10.00' },
                    { name: 'Moscow Mule', price: '9.00' },
                  ].map((cocktail) => (
                    <li
                      key={cocktail.name}
                      className="flex justify-between border-b-2 border-black/10 pb-2"
                    >
                      <span>{cocktail.name}</span>
                      <span className="font-black">{cocktail.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-6xl font-headline font-black mb-12 uppercase italic leading-none scribble-underline"
                >Creativi</h2>
                
                <ul className="space-y-6 font-mono text-xl"
                >
                  {[
                    { name: "Daddy's Favourite", price: '12.00' },
                    { name: 'Lost in Transit', price: '11.00' },
                    { name: 'Midnight Fever', price: '13.00' },
                    { name: 'Tears of Joy', price: '12.00' },
                  ].map((cocktail) => (
                    <li
                      key={cocktail.name}
                      className="flex justify-between border-b-2 border-black/10 pb-2 relative group cursor-pointer"
                    >
                      <span className="z-10">{cocktail.name}</span>
                      <span className="font-black z-10">{cocktail.price}</span>
                      <div className="absolute -inset-2 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrapbookCardV2>

          {/* Vini & Prosecco */}
          <ScrapbookCardV2
            variant="default"
            shadow="sm"
            rotation={0}
            className="md:col-span-4 !border-t-8 !border-primary"
          >
            <h3 className="font-headline font-black text-2xl mb-6 uppercase"
            >Vini & Prosecco</h3>
            
            <ul className="font-mono space-y-3 opacity-90"
            >
              <MenuItem name="House Red (Glass)" price="5.00" />
              <MenuItem name="House White (Glass)" price="5.00" />
              <MenuItem name="Prosecco DOCG" price="6.50" />
              <MenuItem name="Premium Select" price="8.00" />
            </ul>
            
            <div className="mt-8 pt-6 border-t border-outline-variant"
            >
              <h3 className="font-headline font-black text-2xl mb-4 uppercase"
              >Birre</h3>
              <ul className="font-mono space-y-3 opacity-90"
              >
                <MenuItem name="Lager 0.4l" price="5.50" />
                <MenuItem name="IPA 0.33l" price="6.50" />
                <MenuItem name="Craft Selection" price="7.50" />
              </ul>
            </div>
          </ScrapbookCardV2>

          {/* Soft Drinks */}
          <ScrapbookCardV2
            variant="white"
            shadow="lg"
            rotation={-2}
            className="md:col-span-4 !bg-white !text-black ripped-edge-top"
          >
            <h3 className="font-headline font-black text-3xl mb-6 uppercase"
            >Soft Drinks</h3>
            
            <ul className="font-mono space-y-4"
            >
              {[
                { name: 'Coca Cola', price: '3.50' },
                { name: 'Fanta', price: '3.50' },
                { name: 'Lemon Soda', price: '3.50' },
                { name: 'Ginger Beer', price: '4.50' },
                { name: 'Chinotto', price: '4.00' },
                { name: 'Still/Sparkling Water', price: '2.00' },
              ].map((drink) => (
                <li
                  key={drink.name}
                  className="flex justify-between items-center bg-black/5 px-2 py-1"
                >
                  <span className="font-bold">{drink.name}</span>
                  <span>{drink.price}</span>
                </li>
              ))}
            </ul>
          </ScrapbookCardV2>

          {/* Kitchen Hours + Image */}
          <div className="md:col-span-4 flex flex-col gap-8"
          >
            <ScrapbookCardV2
              variant="secondary"
              shadow="lg"
              rotation={0}
            >
              <span className="material-symbols-outlined text-4xl mb-4 text-primary"
              >
                restaurant_menu
              </span>
              <h4 className="font-headline font-bold text-xl uppercase mb-2"
              >Kitchen Hours</h4>
              <p className="font-mono text-sm leading-tight italic"
              >
                FRI-SAT: 18:00 - 02:00<br/>
                SUN-THU: 18:00 - 00:00
              </p>
            </ScrapbookCardV2>

            <div className="relative w-full h-48 bg-surface-container-highest overflow-hidden"
            >
              <img
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
                alt="Bar atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWeYXjpAzfB9jup_9N46RLxOR2amxmFo0AtLsb_FFP-IAMcpLeD6VWbsROFxtyIOTpvau1q1NruoH_oQjx3dcDKtsu7jh3xGM9eM1AWRmmenZ07bLpj0iOFcripBE7f3w_NWAG5x2s-nKMX_1VJMGb-YqILjCj6Lp6KxdbWIjeMF8Qra-HKeXNyLoKSGYGw-FV7HM9u98NMy41FicdmDRwI0i2xZXSdmlS26F1n9aLw1O8eKNAXkSxMldE_1rU4xrNnQ3y_kmmDZv-"
              />
              <div className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-primary text-black font-headline font-black text-2xl px-4 py-2 rotate-[-15deg] shadow-xl uppercase"
                >
                  Don&apos;t Panic
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
