import { Maximize2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume1 } from "lucide-react";
import { Laptop2, LayoutList, Mic2 } from "lucide-react";
import Image from "next/image";

import albumOne from '../album-1.jpg'

export function Footer() {
    return (
        <footer className='bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <Image 
                src={albumOne}
                alt='Capa do album'
                width={60}
                height={60}
                className='w-full object-cover rounded'
            />
            <div className='flex flex-col'>
                <strong className='font-normal'>Melancholly hill</strong>
                <span className='text-xs text-zinc-400'>Gorillaz</span>
            </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
            <div className='flex gap-6 items-center'>
            <Shuffle size={20} className='text-zinc-300' />
            <SkipBack size={20} className='text-zinc-300' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                <Play />
            </button>
            <SkipForward size={20} className='text-zinc-300'  />
            <Repeat size={20} className='text-zinc-300'  />
            </div>

            <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>1:12</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-48 h-1 rounded-full'></div>
                </div>
                <span className='text-xs text-zinc-400'>3:22</span>
            </div>
            </div>
            <div className='flex items-center gap-4'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-2'>
                <Volume1 size={20} />
                <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
                </div>
            </div>

            <Maximize2 size={20} />
            </div>
        </footer>
    )
}