import { Heart, Library, Plus, Search, HomeIcon } from "lucide-react";

export function Sidebar() {
    return (
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2 mb-10'>
            <span className='w-3 h-3 bg-rose-500 rounded-full' />
            <span className='w-3 h-3 bg-yellow-600 rounded-full' />
            <span className='w-3 h-3 bg-green-600 rounded-full' />
          </div>
          <nav className='space-y-5'>
            <a href='#' className='flex items-center gap-4 text-sm font-semibold text-zinc-100'>
              <HomeIcon size={20} />
              Home
            </a>
            <a href='#' className='flex items-center gap-4 text-sm font-semibold text-zinc-300'>
              <Search size={20} />
              Search
            </a>
            <a href='#' className='flex items-center gap-4 text-sm font-semibold text-zinc-300'>
              <Library size={20} />
              Your Library
            </a>
          </nav>
          <nav className='space-y-5 mt-10'>
            <a href='#' className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <div className='bg-zinc-300 text-zinc-600 p-1 rounded-sm'>
                <Plus size={16} />
              </div>
              Create Playlist
            </a>
            <a href='#' className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <div className='bg-gradient-to-tr from-purple-600 to-cyan-100 text-white  p-1 rounded-sm' >
                <Heart size={16} />
              </div>
              Create Playlist
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4'>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Niver Nico</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Bad Songs</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Sofrência das antigas</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Funk das antigas</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Eletro pra trampo</a>
            <a href="#" className='text-xs text-zinc-400 hover:text-zinc-100'>Rock pra trampo</a>
          </nav>
        </aside>
    )
}