'use client'
import dynamic from 'next/dynamic';

import animation from '../../public/animation.json'
import Link from 'next/link';
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function NotFound() {
  return (
    <div className='custom-container'>
        <div className='max-w-[500px] mx-auto text-center min-h-[100dvh] flex justify-center items-center flex-col gap-[15px]'>
        <Lottie
          loop
          animationData={animation}
            play
            className='w-full'
            />
            <h1 className='text-[25px] md:text-[32px] font-semibold tracking-wide'>Internetda yo'qolib qoldingiz!</h1>
            <Link className='bg-black dark:bg-white py-[12px] px-[17px] text-white dark:text-black rounded-[13px]' href={'/'}>Bosh sahifaga qaytish</Link>
        </div>
    </div>
  )
}
