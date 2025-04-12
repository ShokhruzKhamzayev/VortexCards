import InnerOrganization from "@/components/specOrganization"
import { fetchSpecOrganization } from "@/lib"
import { Metadata } from "next"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {slug} = await params
  const {data} = await fetchSpecOrganization(slug)
  const organization = data.data[0]
  return {
    title: organization.name,
    description: organization.aboutOrganization,
    keywords: ["VortexCards", "Visitka", 'NFC visitka'],
    creator: "VortexHub | Shaxruzbek",
    openGraph: {
      title: organization.name,
      description: organization.aboutOrganization,
      images: organization.avatar.url
    }
  }
}

export default async function Organization({params}: PageProps) {
  const {slug} = await params
  return (
    <InnerOrganization slug={slug}/>
  )
}
