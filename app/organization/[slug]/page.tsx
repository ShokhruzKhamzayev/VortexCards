import InnerOrganization from "@/components/specOrganization"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function Organization({params}: PageProps) {
  const {slug} = await params
  return (
    <InnerOrganization slug={slug}/>
  )
}
