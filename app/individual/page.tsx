export const dynamic = 'force-dynamic'

import CustomImage from "@/components/ui/customImage"
import { fetchAllIndividuals } from "@/lib"
import Link from "next/link"

export default async function Individual() {
  const {individuals} = await fetchAllIndividuals()
  return (
    <div className="lg:max-w-[1100px] mx-auto max-w-[90%] my-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
        {
          individuals.map(person => (
            <Link href={`/individual/${person.slug}`} key={person.slug} className="border border-slate-700 dark:border-white py-[10px] px-[15px] rounded-[15px] text-center">
              <div className="relative w-full h-[350px] overflow-hidden mb-[15px]">
                <CustomImage src={person.avatar.url} alt={person.fullName} classname="object-cover rounded-[15px]"/>
              </div>
              <div className="space-y-[15px]">
                <h1 className="text-3xl font-semibold">{person.fullName}</h1>
                <h3 className="text-yellow-500 text-[12px] font-medium">{person.organization.name}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
