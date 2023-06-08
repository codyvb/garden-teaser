import Image from 'next/image'
import Link from 'next/image'


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">

      <div className='mt-[20%]'>
      <div className="w-[150px] h-[150px] bg-cover bg-[url('/earf.png')]"></div>
      
      <div className='text-2xl font-pixeloid'>
      The Garden
      </div>

      <div className='text-md mt-4 text-center mb-auto font-pixeloid'>
      <a href='https://twitter.com/gardenwtf'>Coming Soon</a>
      </div>
      </div>

    </main>
  )
}
