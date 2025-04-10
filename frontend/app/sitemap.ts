import { fetchAllIndividuals, fetchAllOrganizations } from "@/lib";
import { MetadataRoute } from "next";

const baseUrl = 'https://cards.vortexhub.uz'

type sitemapTypo = {
    url: string,
    changeFrequency: 'monthly' | 'daily',
    priority: number,
    lastModified: Date
}[]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const {individuals} = await fetchAllIndividuals()
    const {organizations} = await fetchAllOrganizations()
    const modifiedIndividuals: sitemapTypo = individuals.map(individual => ({
        url: `${baseUrl}/individual/${individual.slug}`,
        changeFrequency: 'monthly',
        priority: 0.1,
        lastModified: individual.createdAt
    }))
    const modifiedOrganizations: sitemapTypo = organizations.map(individual => ({
        url: `${baseUrl}/individual/${individual.slug}`,
        changeFrequency: 'monthly',
        priority: 0.1,
        lastModified: individual.createdAt
    }))
    return [
        {
            url: `${baseUrl}`,
            changeFrequency: 'never',
            priority: 1,
        },
        ...modifiedIndividuals,
        ...modifiedOrganizations
    ]
}