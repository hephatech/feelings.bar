import { NoiseBackground } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

const rules = [
  {
    number: '01',
    title: 'QUELLO CHE ACCADE AL BAR...',
    description:
      "Resta sul muro. Le tue foto sono artefatti di un momento. Non le vendiamo a uomini in giacca e cravatta, ma una volta appuntate, fanno parte del vibe. Tu hai i diritti, noi abbiamo la galleria license.",
  },
  {
    number: '02',
    title: 'NO CREEPY PEOPLE',
    description:
      "Questa è una community, non un vicolo buio. Rispetta la privacy degli altri. Non mettere foto di gente che non ti ha dato il consenso. Se ti comporti da jerk, ti cancelliamo come vecchia carta da parati.",
  },
  {
    number: '03',
    title: 'SOLO EMOZIONI RAW',
    description:
      "Siamo qui per il grano, la grain e gli scarabocchi di notte. Roba AI-generated o corporate spam verrà incenerita. Keep it analog, anche se è digital.",
  },
  {
    number: '04',
    title: 'I DATI',
    description:
      "Tracciamo il tuo vibe per migliorare l'app. No weird surveillance, solo abbastanza per sapere se la musica è troppo alta o la luce è giusta. Check settings se vuoi andare ghost.",
  },
]

export default function TermsPage() {
  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative min-h-screen w-full pt-16 flex items-center justify-center noise-bg bg-surface-container-low z-10">
        {/* Pinned Paper Dialog */}
        <div className="relative max-w-2xl w-full mx-6 transform -rotate-1 md:rotate-1">
          {/* Pushpin */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            <span
              className="material-symbols-outlined text-red-600 text-5xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              push_pin
            </span>
          </div>

          {/* The Notebook Paper */}
          <div className="bg-white text-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>

            {/* Red Margin Line */}
            <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-red-200"></div>

            {/* Paper Content */}
            <div className="relative z-10 pl-8 notebook-lines">
              <h2 className="font-headline font-black text-5xl mb-12 tracking-tighter uppercase italic border-b-4 border-black inline-block">
                LE REGOLE
              </h2>

              <div className="font-mono space-y-8 text-sm md:text-base leading-relaxed">
                {rules.map((rule) => (
                  <section key={rule.number}>
                    <p className="font-bold underline mb-2">
                      {rule.number}. {rule.title}
                    </p>
                    <p>{rule.description}</p>
                  </section>
                ))}
              </div>

              {/* Button Scraps */}
              <div className="mt-16 flex flex-col md:flex-row gap-6 justify-end items-center">
                <button className="bg-[#0D0D0D] text-white font-headline font-bold text-xl px-10 py-4 paper-tear-left transform -rotate-2 hover:scale-105 transition-transform hover:bg-primary-container hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  NON OGGI
                </button>
                <button className="bg-primary-container text-black font-headline font-black text-2xl px-12 py-5 paper-tear-right transform rotate-3 hover:scale-110 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  CI STO
                </button>
              </div>
            </div>

            {/* Tape Accents */}
            <div className="absolute top-10 -right-8 w-24 h-8 bg-[#fef3c7]/60 rotate-45 backdrop-blur-sm border-x border-white/20"></div>
            <div className="absolute -bottom-4 left-20 w-32 h-10 bg-[#fef3c7]/40 -rotate-3 backdrop-blur-sm border-y border-white/10"></div>
          </div>
        </div>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
