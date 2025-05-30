import InnerOrganization from "@/components/specOrganization"
import { fetchSpecOrganization } from "@/lib"
import { Metadata } from "next"

type PageProps = {
  params: Promise<{ slug: string, locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug, locale} = await params
  const {data} = await fetchSpecOrganization(slug, locale)
  const organization = data.data[0]
  return {
    title: organization.name,
    description: organization.excerpt,
    keywords: ["VortexCards", "Visitka", 'NFC visitka'],
    creator: "VortexHub | Shaxruzbek",
    openGraph: {
      title: organization.name,
      description: organization.excerpt,
      images: organization.avatar.url
    }
  }
}

export default async function Organization({params}: PageProps) {
  const {slug, locale} = await params
  return (
    <InnerOrganization slug={slug} locale={locale}/>
  )
}
