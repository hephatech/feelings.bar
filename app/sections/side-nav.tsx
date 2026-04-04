import Link from 'next/link'

export function SideNav() {
  return (
    <aside className="hidden lg:flex flex-col h-full pt-24 pb-8 fixed left-0 top-0 z-40 w-64 bg-surface shadow-hard-xl translate-x-[-230px] hover:translate-x-0 transition-transform duration-500 ease-in-out">
      <div className="px-6 mb-8">
        <h4 className="text-primary-container font-bold font-headline text-xl uppercase tracking-tighter">
          ANALOG ARTIFACT
        </h4>
        <p className="font-mono text-[10px] text-white/50">FEELINGS BAR VOL. 1</p>
      </div>
      
      <nav className="flex flex-col flex-1 font-mono text-sm tracking-tight">
        <Link href="/archive" className="text-white opacity-70 hover:opacity-100 px-4 py-2 mx-2 mb-1 flex items-center gap-3 hover:bg-primary-container/10">
          <span className="material-symbols-outlined text-xs">folder_open</span>
          Archive
        </Link>
        <Link href="/gallery" className="text-white opacity-70 hover:opacity-100 px-4 py-2 mx-2 mb-1 flex items-center gap-3 hover:bg-primary-container/10">
          <span className="material-symbols-outlined text-xs">photo_library</span>
          Gallery
        </Link>
        <Link href="/playlists" className="text-white opacity-70 hover:opacity-100 px-4 py-2 mx-2 mb-1 flex items-center gap-3 hover:bg-primary-container/10">
          <span className="material-symbols-outlined text-xs">queue_music</span>
          Playlists
        </Link>
        <Link href="/newsletter" className="text-white opacity-70 hover:opacity-100 px-4 py-2 mx-2 mb-1 flex items-center gap-3 hover:bg-primary-container/10">
          <span className="material-symbols-outlined text-xs">mail</span>
          Newsletter
        </Link>
        <Link href="/contact" className="text-white opacity-70 hover:opacity-100 px-4 py-2 mx-2 mb-1 flex items-center gap-3 hover:bg-primary-container/10">
          <span className="material-symbols-outlined text-xs">chat_bubble</span>
          Contact
        </Link>
      </nav>
      
      <div className="px-6 py-4 mt-auto">
        <div className="bg-primary-container text-black p-2 text-[10px] font-bold font-mono rotate-2 shadow-hard">
          © FEELINGS BAR 2024
        </div>
      </div>
    </aside>
  )
}
