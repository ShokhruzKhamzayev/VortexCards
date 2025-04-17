import InnerDetails from '@/components/innerDetail'
import { fetchAllIndividuals, fetchSpecIndividual } from '@/lib'
import { Metadata } from 'next'
import React from 'react'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug} = await params
  const {data} = await fetchSpecIndividual(slug)
  const person = data.data[0]
  return {
    title: person.fullName,
    description: person.aboutIndividual,
    keywords: ["VortexCards", "Visitka", 'NFC visitka'],
    creator: "VortexHub | Shaxruzbek",
    openGraph: {
      title: person.fullName,
      description: person.aboutIndividual,
      images: person.avatar.url
    }
  }
}

export const revalidate = 3600

export const dynamicParams = true

export async function generateStaticParams() {
  const {data} = await fetchAllIndividuals()
  return data.data.map((ind) => ({slug: ind.slug}))
}

export default async function Individual({params}: PageProps) {
    const {slug} = await params
  return (
    <div>
        <InnerDetails slug={slug}/>
    </div>
  )
}
