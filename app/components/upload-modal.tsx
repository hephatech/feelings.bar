'use client'

import { useState } from 'react'

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [caption, setCaption] = useState('')
  const [location, setLocation] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md bg-surface-container-highest p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-none animate-in fade-in zoom-in duration-200">
        {/* Close Action */}
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-on-background text-background w-10 h-10 flex items-center justify-center hover:bg-primary-container transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Headline */}
        <h1 className="font-headline font-black text-4xl italic tracking-tighter uppercase text-primary-fixed mb-8 leading-none">
          UNISCITI AL CAOS
        </h1>

        {/* The Polaroid Artifact */}
        <div className="relative group cursor-pointer bg-white p-4 pb-16 rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-transform hover:-rotate-1 active:scale-95">
          <div className="relative aspect-square bg-surface-container-low overflow-hidden flex items-center justify-center border border-black/5 polaroid-inner-glow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYTYXiw8T0ruRCN0oWkp0zSrG_-y90anZPFwufNZSlTgJa_z2fWesHfbUqyGmHhlxt3TB9yfpMVSmDKkcJJGUkt3jojidxzM5ge5c-r8X_KYdbwczSWLboTPiM2-c_x-tC7WFK5woaEytPVuQkCWTsp1Vi7l3AzXZBb450J7Kxt6XzS7vHg8c7-kDhuj6l3jKQSbDT3p6Xo1odBeAiDNEnWAiAFbQXZvsDe2BeveflJravT2Rz2Of82fMol7r1EqDikcWCr6CWMNQR"
              alt="Placeholder Polaroid"
              className="w-full h-full object-cover grayscale contrast-125 opacity-30 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-4xl mb-2">add_a_photo</span>
              <p className="font-headline font-bold text-xs tracking-widest uppercase bg-black text-white px-2 py-1">
                TAP PER SCATTARE
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="border-b border-black/10 w-full mb-1"></div>
            <p className="font-mono text-black/40 text-[10px] uppercase tracking-tighter italic">
              IN SVILUPPO...
            </p>
          </div>

          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#E6E2D3] opacity-80 mix-blend-multiply rotate-2 shadow-sm pointer-events-none"></div>
        </div>

        {/* Form Section */}
        <div className="mt-10 space-y-6">
          <div className="relative">
            <label className="block font-headline font-bold text-[10px] tracking-widest text-primary-fixed uppercase mb-2">
              Didascalia Sharpie
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="SCRIVI QUALCOSA QUI..."
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant text-on-surface font-mono focus:ring-0 focus:border-primary-fixed scribble-underline placeholder:text-on-surface-variant/30 uppercase"
            />
          </div>

          <div className="relative">
            <label className="block font-headline font-bold text-[10px] tracking-widest text-primary-fixed uppercase mb-2">
              Location / Vibe
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="IL BAR SOTTERRANEO"
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant text-on-surface font-mono focus:ring-0 focus:border-primary-fixed scribble-underline placeholder:text-on-surface-variant/30 uppercase"
            />
          </div>

          <button className="w-full mt-4 bg-primary-container text-on-primary-fixed font-headline font-black text-xl py-4 tracking-tighter uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 transition-all"
          >
            INVIA
          </button>
        </div>

        <div className="mt-8 flex justify-between items-center opacity-40">
          <div className="font-mono text-[10px] uppercase">FILE_NO: 0092-B</div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-sm">emergency</span>
            <span className="material-symbols-outlined text-sm">scan_delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}
