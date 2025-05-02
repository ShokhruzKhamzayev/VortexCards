import InnerDetails from '@/components/innerDetail'
import { fetchSpecIndividual } from '@/lib'
import { Metadata } from 'next'

type PageProps = {
  params: Promise<{ slug: string, locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug, locale} = await params
  const {data} = await fetchSpecIndividual(slug, locale)
  const person = data.data[0]
  return {
    title: person.fullName,
    description: person.excerpt,
    keywords: ["VortexCards", "Visitka", 'NFC visitka'],
    creator: "VortexHub | Shaxruzbek",
    openGraph: {
      title: person.fullName,
      description: person.excerpt,
      images: person.avatar.url
    }
  }
}

export default async function Individual({params}: PageProps) {
    const {slug, locale} = await params
  return (
    <div>
        <InnerDetails slug={slug} locale={locale}/>
    </div>
  )
}
