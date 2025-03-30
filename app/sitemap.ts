import { MetadataRoute } from "next";

const baseUrl = 'https://cards.vortexhub.uz/'

export async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: baseUrl,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}