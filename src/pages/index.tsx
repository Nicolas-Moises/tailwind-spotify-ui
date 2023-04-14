import { Inter } from 'next/font/google'

import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

import albumOne from '../album-1.jpg'
import albumTwo from '../album-2.jpg'
import albumThree from '../album-3.jpg'
import albumFour from '../album-4.jpg'
import albumFive from '../album-5.jpg'
import albumSix from '../album-6.jpg'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col '>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft size={24} />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight size={24} />
            </button>
          </div>
          <h1 className='font-bold text-3xl mt-10'>
            Good afternoon
          </h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>

              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumTwo}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>
              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumThree}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>
              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumFour}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>
              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumFive}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>
              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors group'>
              <Image 
                src={albumSix}
                alt='Capa do album'
                width={100}
                height={120}
              />
              <strong>
                Gorillaz
              </strong>
              <button className='ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <div className='w-full flex items-center justify-between mt-10'>
            <h2 className='font-bold text-2xl  capitalize'>
              Made for Nicolas Moises
            </h2>
            <button className='text-sm text-zinc-300 font-bold hover:text-zinc-100'>
              Show all
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
            <a href='#' className='bg-zinc-400/5 p-3 rounded-md hover:bg-zinc-400/20 flex flex-col gap-2'>
              <Image 
                src={albumOne}
                alt='Capa do album'
                width={100}
                height={120}
                className='w-full object-cover rounded'
              />
              <strong className='font-semibold'>
                Gorillaz 
              </strong>
              <span className='text-sm text-zinc-400'>Demon Days, 2005 Califórnia USA</span>
            </a>
          </div>

          
        </main>
      </div>
      <Footer />
    </div>
  )
}
