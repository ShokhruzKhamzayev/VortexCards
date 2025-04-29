import InnerOrganization from "@/components/specOrganization"
import { fetchAllOrganizations, fetchSpecOrganization } from "@/lib"
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

export const revalidate = 3600

export const dynamicParams = true 

export async function generateStaticParams() {
  const {data} = await fetchAllOrganizations()
  return data.data.map((org) => ({slug: org.slug}))
}

export default async function Organization({params}: PageProps) {
  const {slug} = await params
  return (
    <InnerOrganization slug={slug}/>
  )
}
