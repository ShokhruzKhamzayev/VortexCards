'use client'

import dynamic from 'next/dynamic'

const PDFViewerNoSSR = dynamic(() => import('@/components/pdf/customPdf'), {
  ssr: false,
})

import { useParams } from "next/navigation"

export default function PDFCustomInd() {
  const {slug} = useParams()
  return (
    <PDFViewerNoSSR slug={slug}/>
  )
}
