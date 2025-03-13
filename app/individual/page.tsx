import CustomImage from "@/components/ui/customImage"
import { fetchAllIndividuals } from "@/lib"
import Link from "next/link"

export default async function Individual() {
  const {individuals} = await fetchAllIndividuals()
  return (
    <div className="lg:max-w-[1000px] mx-auto max-w-[90%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          individuals.map(person => (
            <Link href={`/individual/${person.slug}`} key={person.slug}>
              <div className="relative w-full h-[350px] overflow-hidden">
                <CustomImage src={person.avatar.url} alt={person.fullName} classname="object-cover rounded-[15px]"/>
              </div>
              <div>
                <h1>{person.fullName}</h1>
                <h3>{person.organization.name}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
