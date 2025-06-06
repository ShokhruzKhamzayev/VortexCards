'use server'

import { InnerDetailTypo, OrganizationTypo } from '@/types'
import axios from 'axios'

const baseUrl = process.env.DATABASE_API_TEST 

export async function fetchAllIndividuals() {
    const allInd = await axios<{data: InnerDetailTypo[]}>(baseUrl + '/individuals?filters[seo][$eq]=true')
    return allInd
}


export async function fetchAllOrganizations() {
    const allOrg = await axios<{data: OrganizationTypo[]}>(baseUrl + '/organizations?filters[seo][$eq]=true')
    return allOrg
}

export async function fetchSpecIndividual(slug: string, locale: string) {
    const specInd = await axios<{data: InnerDetailTypo[] }>(baseUrl + `/individuals?filters[slug][$eq]=${slug}&locale=${locale}&populate[avatar]=true&populate[partnersLogo]=true&populate[projects]=true&populate[contactDownload]=true&populate[organizations]=true&populate[banner]=true`)
    return specInd
}

export async function fetchSpecOrganization(slug: string, locale: string) {
    const specOrg = await axios<{data: OrganizationTypo[] }>(baseUrl + `/organizations?filters[slug][$eq]=${slug}&locale=${locale}&populate[avatar]=true&populate[individuals][populate]=avatar&populate[banner]=true&populate[contactDownload]=true&populate[projects]=true&populate[partnersLogo]=true`)
    return specOrg
}