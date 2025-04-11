'use server'

import { InnerDetailTypo, OrganizationTypo } from '@/types'
import axios from 'axios'
import {GraphQLClient, gql} from 'graphql-request'

const client = new GraphQLClient(process.env.DATABASE_API!)

const baseUrl = process.env.DATABASE_API_TEST 

// export async function fetchSpecOrganization(slug: string) {
//     const myQuery = gql`
//         query MyQuery {
//             organization(where: {slug: "${slug}"}) {
//                 name
//                 location
//                 individual {
//                 fullName
//                 slug
//                 avatar {
//                     url
//                 }
//                 }
//                 avatar {
//                 url
//                 }
//                 calendar
//                 instagram
//                 email
//                 fieldOfOrganization
//                 telegram
//                 telephoneNumber
//                 website
//                 youtube
//                 aboutOrganization{
//                     html
//                 }
//                 secondaryColor {
//                     hex
//                     }
//                 videos
//                 websiteUrl
//                 banner {
//                 url
//                 }
//                 contactNumber{
//                         url
//                 }
//                 projects {
//                     url
//                 }
//                 textForConnection
//                 isPaid
//             }
//         }
//     `

//     const data = await client.request<{organization: OrganizationTypo}>(myQuery)
//     return data
// } 

export async function fetchAllIndividuals() {
    const myQuery = gql`
        query MyQuery {
            individuals(where: {seo: true}) {
                slug
                createdAt
            }
        }
    `

    const data = await client.request<{individuals: InnerDetailTypo[]}>(myQuery)
    return data
}


export async function fetchAllOrganizations() {
    const myQuery = gql`
        query MyQuery {
            organizations(where: {seo: true}) {
                slug
                createdAt
            }
        }
    `

    const data = await client.request<{organizations: OrganizationTypo[]}>(myQuery)
    return data
}

export async function fetchSpecIndividual(slug: string) {
    const specInd = await axios<{data: InnerDetailTypo[] }>(baseUrl + `/individuals?filters[slug][$eq]=${slug}&populate=*`)
    return specInd
}

export async function fetchSpecOrganization(slug: string) {
    const specOrg = await axios<{data: OrganizationTypo[] }>(baseUrl + `/organizations?filters[slug][$eq]=${slug}&populate[avatar]=true&populate[individuals][populate]=avatar&populate[banner]=true&populate[contactDownload]=true&populate[projects]=true`)
    return specOrg
}