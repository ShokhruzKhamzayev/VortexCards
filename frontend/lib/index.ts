'use server'

import { InnerDetailTypo, OrganizationTypo } from '@/types'
import axios from 'axios'

const baseUrl = process.env.DATABASE_API_TEST 

export async function fetchAllIndividuals() {
    const allInd = await axios<{data: InnerDetailTypo[]}>(baseUrl + '/individuals')
    return allInd
}


export async function fetchAllOrganizations() {
    const allOrg = await axios<{data: OrganizationTypo[]}>(baseUrl + '/organizations')
    return allOrg
}

export async function fetchSpecIndividual(slug: string) {
    const specInd = await axios<{data: InnerDetailTypo[] }>(baseUrl + `/individuals?filters[slug][$eq]=${slug}&populate=*`)
    return specInd
}

export async function fetchSpecOrganization(slug: string) {
    const specOrg = await axios<{data: OrganizationTypo[] }>(baseUrl + `/organizations?filters[slug][$eq]=${slug}&populate[avatar]=true&populate[individuals][populate]=avatar&populate[banner]=true&populate[contactDownload]=true&populate[projects]=true`)
    return specOrg
}