'use client'
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

import animation from '../public/isPaidAnimation.json'
import Link from 'next/link';

type PageProps = {
  slug: string
}

export default function IsPaid({slug}: PageProps) {
  return (
    <div className='p-[10px] pb-[20px]'>
     <Lottie
          loop
          animationData={animation}
            play
            className='w-full'
            />
        <h1 className='text-2xl font-semibold text-center'>Uzr, lekin oylik to'lov vaqtida qilinmagani sababli sizning web-saytingiz vaqtinchalik o'chirildi</h1>
        <div>
            <h3 className='text-center tracking-wide mt-[30px]'>Agar saytingizni qayta yana ishlashini xohlasangiz {slug} so'zi va chekni bizga jo'nating</h3>
            <div className='flex flex-col justify-center items-center gap-[20px] pt-[20px]'>
              <a className='bg-white text-black py-[10px] px-[17px] border border-black dark:border-white rounded-[13px] block' href="https://t.me/Khamzayev_Shokhruz">Jo'natish uchun link</a>
              <Link className='bg-transparent py-[10px] px-[17px] border border-black dark:border-white rounded-[13px] block' href={'/'}>Bosh sahifaga qaytish</Link>
            </div>
        </div>
    </div>
  )
}
