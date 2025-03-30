import { fetchAllIndividuals } from "@/lib";
import { MetadataRoute } from "next";

const baseUrl = 'https://cards.vortexhub.uz/'

export async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const {individuals} = await fetchAllIndividuals()
    const data = individuals.map(individual => {
        return {
            url: `${baseUrl}${individual.slug}`,
            priority: 0.5,
            images: [individual.avatar.url],
            lastModified: individual.createdAt
        }
    })
    return [
        {
            url: baseUrl,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}