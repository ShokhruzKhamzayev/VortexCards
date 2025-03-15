import InnerDetails from '@/components/innerDetail'
import { fetchSpecIndividual } from '@/lib'
import { Metadata } from 'next'
import React from 'react'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug} = await params
  const {individual: person} = await fetchSpecIndividual(slug)
  return {
    title: person.fullName,
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
