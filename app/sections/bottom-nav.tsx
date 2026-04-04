import Link from 'next/link'

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 bg-surface shadow-[0_-4px_0px_0px_rgba(0,0,0,1)] h-20">
      <Link href="/" className="flex flex-col items-center justify-center bg-primary-container text-black p-2 shadow-hard scale-110">
        <span className="material-symbols-outlined">home</span>
        <span className="font-headline text-[10px] font-bold uppercase mt-1">Home</span>
      </Link>
      
      <Link href="/menu" className="flex flex-col items-center justify-center text-white p-2 opacity-80">
        <span className="material-symbols-outlined">restaurant_menu</span>
        <span className="font-headline text-[10px] font-bold uppercase mt-1">Menu</span>
      </Link>
      
      <Link href="/events" className="flex flex-col items-center justify-center text-white p-2 opacity-80">
        <span className="material-symbols-outlined">event</span>
        <span className="font-headline text-[10px] font-bold uppercase mt-1">Events</span>
      </Link>
      
      <Link href="/community" className="flex flex-col items-center justify-center text-white p-2 opacity-80">
        <span className="material-symbols-outlined">group</span>
        <span className="font-headline text-[10px] font-bold uppercase mt-1">Community</span>
      </Link>
    </nav>
  )
}
