'use client'

import { useState } from 'react'
import { NoiseBackground } from '@/components'
import { TopNav } from '@/app/sections/top-nav'
import { SideNav } from '@/app/sections/side-nav'
import { BottomNav } from '@/app/sections/bottom-nav'

const timeSlots = ['20:00', '21:30', '23:00', '00:30']

export default function ReservationsPage() {
  const [guests, setGuests] = useState(4)
  const [selectedTime, setSelectedTime] = useState('21:30')

  return (
    <>
      <NoiseBackground />
      <TopNav />

      <main className="relative pt-24 pb-32 px-4 max-w-md mx-auto min-h-screen z-10">
        {/* Modal Heading Section */}
        <div className="mb-8 relative">
          <h2 className="font-headline font-black text-5xl text-primary-container uppercase tracking-tighter leading-none -rotate-2">
            SNAG A <br/> TABLE
          </h2>
          <div className="absolute -right-2 -top-4 transform rotate-12">
            <span className="material-symbols-outlined text-hot-pink text-5xl">sell</span>
          </div>
          <p className="font-mono text-sm mt-4 opacity-80 max-w-[200px]">
            Grab your spot in the void. No refunds. No regrets.
          </p>
        </div>

        {/* Polaroid Visual */}
        <div className="mb-10 transform -rotate-2">
          <div className="bg-white p-3 pb-12 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative">
            <div className="aspect-square bg-surface-container-highest overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLNhd0uZJ3ogZ0sBfO_xXE9nxkuGFH5NMutGOZjmrob00HLvQnL8dcqQ-_wHsH5NW3hivSHRrN1VPzloSzzPQumouPUhXkMEmYhO5BK7RoK5Tsy3lfjXLAJPLyoA4GfpnkrNE9WKxNu_qlGzzESYxuDtXj5PYuXjTE4VfIpzaiLh2epR28t0oGYMC2yPhREqjUIQMmaOcJO7RRcFqESh9ygYjJam1FA11xuZuJCCxxxnZiM_NwXr5hWNSvwo8kH4d93v6-rjQZ7jP3"
                alt="Interior of the bar booth"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            <p className="absolute bottom-2 left-4 font-mono text-black text-xs italic">
              Booth #4 - The Deep End
            </p>
            <div className="absolute -top-4 -right-4 bg-secondary-container/80 px-4 py-1 transform rotate-12 text-[10px] font-mono text-white border border-white/20">
              RESERVED
            </div>
          </div>
        </div>

        {/* Date Picker: Zine Style */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-hot-pink">event</span>
            <h3 className="font-headline font-bold uppercase tracking-tight text-xl pink-scribble inline-block">
              Pick a Date
            </h3>
          </div>
          <div className="bg-surface-container-low p-6 jagged-border shadow-[0_8px_0_0_rgba(0,0,0,1)]">
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] opacity-60 mb-2">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              <div className="py-2 text-xs font-mono opacity-20">12</div>
              <div className="py-2 text-xs font-mono opacity-20">13</div>
              <div className="py-2 text-xs font-mono opacity-20">14</div>
              <div className="py-2 text-xs font-mono border border-white/10">15</div>
              <div className="py-2 text-xs font-mono border border-white/10">16</div>
              <div className="py-2 text-xs font-mono bg-primary-container text-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] -rotate-3">17</div>
              <div className="py-2 text-xs font-mono border border-white/10">18</div>
              <div className="py-2 text-xs font-mono border border-white/10">19</div>
              <div className="py-2 text-xs font-mono border border-white/10">20</div>
              <div className="py-2 text-xs font-mono border border-white/10">21</div>
              <div className="py-2 text-xs font-mono border border-white/10">22</div>
              <div className="py-2 text-xs font-mono border border-white/10">23</div>
              <div className="py-2 text-xs font-mono border border-white/10">24</div>
              <div className="py-2 text-xs font-mono border border-white/10">25</div>
            </div>
          </div>
        </section>

        {/* Time Slots: Sticker Style */}
        <section className="mb-12 relative">
          <div className="absolute -left-10 top-0 text-hot-pink opacity-50 transform rotate-180 scale-x-[-1]">
            <span className="material-symbols-outlined text-6xl">subdirectory_arrow_right</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-hot-pink">schedule</span>
            <h3 className="font-headline font-bold uppercase tracking-tight text-xl pink-scribble inline-block">
              Select Time
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`font-mono text-sm px-4 py-2 transition-all ${
                  selectedTime === time
                    ? 'bg-primary-container text-black font-bold -rotate-2 shadow-[4px_4px_0_0_rgba(255,0,85,0.4)] border-2 border-black hover:scale-110'
                    : 'bg-white text-black rotate-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border border-black/10 hover:-translate-y-1'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        {/* Guest Count */}
        <section className="mb-12">
          <label className="font-mono text-xs uppercase opacity-60 block mb-2">
            How many souls?
          </label>
          <div className="flex items-center gap-6 border-b-2 border-white/20 pb-4">
            <button
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="material-symbols-outlined text-3xl hover:text-primary-container transition-colors"
            >
              remove
            </button>
            <span className="font-headline font-black text-5xl">
              {guests.toString().padStart(2, '0')}
            </span>
            <button
              onClick={() => setGuests(Math.min(12, guests + 1))}
              className="material-symbols-outlined text-3xl hover:text-primary-container transition-colors"
            >
              add
            </button>
          </div>
        </section>

        {/* Confirm Button: High Contrast Caution Sticker */}
        <button className="w-full bg-primary-container text-black py-6 px-4 font-headline font-black text-2xl uppercase tracking-widest shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/5 group-active:bg-black/20"></div>
          <div className="flex justify-between items-center relative z-10">
            <span className="material-symbols-outlined">warning</span>
            <span>CONFIRM BOOKING</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </button>

        <p className="text-center font-mono text-[10px] uppercase mt-8 opacity-40">
          By confirming, you agree to exist within the feelings bar ecosystem.
        </p>
      </main>

      <SideNav />
      <BottomNav />
    </>
  )
}
