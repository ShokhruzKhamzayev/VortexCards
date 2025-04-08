'use client'

import { InnerDetailTypo } from '@/types'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaFilePdf } from 'react-icons/fa6'

const PDFViewerNoSSR = dynamic(() => import('@/components/pdf/customPdf'), {
  ssr: false,
})

export default function PdfOpener({person}: {
  person: InnerDetailTypo
}) {
    const [state, setState] = useState(false)
    const link = usePathname()
  return (
    <>
        <button onClick={() => setState(!state)} className="location gap-[10px] absolute top-[100%] left-1/8  translate-y-[-50%] flex items-center flex-col cursor-pointer">
            <div className='p-[15px] rounded-full' style={{backgroundColor: person.secondaryColor.hex}} >
                <FaFilePdf  color='white' />
            </div>
            <p className='text-[11px]'>Yuklash</p>
        </button>
        <div className={`bg-white/50 fixed inset-0 backdrop-blur-lg z-[99999] transition-all duration-300 ${state ? "opacity-100 block" : "opacity-0 hidden"}`} onClick={() => setState(false)}></div>
        <div className={`${state ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
          <PDFViewerNoSSR state={state} data={person} link={link}/>
        </div>
    </>
  )
}
