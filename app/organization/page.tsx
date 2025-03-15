import CustomImage from "@/components/ui/customImage"
import { fetchAllOrganizations } from "@/lib"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default async function Organizations() {
  const {organizations} = await fetchAllOrganizations()
  return (
    <div className="lg:max-w-[1100px] mx-auto max-w-[90%] my-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {
          organizations.map(organization => (
            <Link href={`/organization/${organization.slug}`} key={organization.slug} className="border border-slate-700 dark:border-white py-[10px] px-[15px] rounded-[15px] text-center">
              <div className="relative w-full h-[350px] overflow-hidden mb-[15px]">
                <CustomImage src={organization.avatar.url} alt={organization.name} classname="object-cover rounded-[15px]"/>
              </div>
              <div className="space-y-[15px]">
                <h1 className="text-3xl font-semibold">{organization.name}</h1>
                <h3 className="text-yellow-500 text-[12px] font-medium">{organization.fieldOfOrganization}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
