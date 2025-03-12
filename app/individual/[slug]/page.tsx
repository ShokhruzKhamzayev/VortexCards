import InnerDetails from '@/components/innerDetail'
import React from 'react'

type PageProps = {
    params: {
        slug: string
    }
}

export default async function Individual({params}: PageProps) {
    const {slug} = await params
  return (
    <div>
        <InnerDetails slug={slug}/>
    </div>
  )
}
