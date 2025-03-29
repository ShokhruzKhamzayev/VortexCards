'use client'
import dynamic from 'next/dynamic';

import animation from '../public/animation.json'
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function NotFound() {
  return (
    <div>
        <Lottie
                loop
                animationData={animation}
                play
                className='w-full h-[200px] md:w-[60%] lg:w-1/2'
            />
    </div>
  )
}
