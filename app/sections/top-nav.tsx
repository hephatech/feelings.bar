'use client'

import Link from 'next/link'
import { useState } from 'react'

export function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-surface/80 backdrop-blur-md shadow-hard">
      <Link 
        href="/"
        className="text-3xl font-black text-primary-container italic tracking-tighter uppercase font-headline"
      >
        FEELINGS BAR
      </Link>
      
      <nav className="hidden md:flex gap-4 font-headline font-bold tracking-tighter uppercase items-center">
        <Link href="/" className="bg-primary-container text-black px-4 py-1 rotate-[-1deg] shadow-hard">
          Home
        </Link>
        <Link href="/menu" className="text-white hover:text-primary-container transition-transform hover:scale-105">
          Menu
        </Link>
        <Link href="/events" className="text-white hover:text-primary-container transition-transform hover:scale-105">
          Eventi
        </Link>
        <Link href="/community" className="text-white hover:text-primary-container transition-transform hover:scale-105">
          Community
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-primary-container text-3xl hover:scale-110 transition-transform"
        >
          account_circle
        </button>
        
        <button 
          className="md:hidden material-symbols-outlined text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-t-2 border-outline-variant md:hidden">
          <nav className="flex flex-col p-6 font-headline font-bold tracking-tighter uppercase">
            <Link href="/" className="py-3 text-primary-container">Home</Link>
            <Link href="/menu" className="py-3 text-white">Menu</Link>
            <Link href="/events" className="py-3 text-white">Eventi</Link>
            <Link href="/community" className="py-3 text-white">Community</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
