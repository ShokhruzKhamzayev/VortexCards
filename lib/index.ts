import { InnerDetailTypo, OrganizationTypo } from '@/types'
import {GraphQLClient, gql} from 'graphql-request'

const client = new GraphQLClient(process.env.DATABASE_API!)

export async function fetchSpecIndividual(slug: string) {
    const myQuery = gql`
        query MyQuery {
            individual(where: {slug: "${slug}"}) {
                fullName
                organization {
                name
                aboutOrganization {
                    html
                }
                slug
                }
                position
                email
                telephoneNumber
                linkedin
                instagram
                telegram
                youtube
                location
                avatar {
                    url
                }
                aboutIndividual {
                    html
                }
                secondaryColor {
                    hex
                    }
                videos
                websiteUrl
                banner {
                url
                }
                contactDownload {
                        url
                }
                partnersLogo {
                url
                }
                projects {
                    url
                }
            }
        }
    `

    const data = await client.request<{individual: InnerDetailTypo}>(myQuery)
    return data
}

export async function fetchAllIndividuals() {
    const myQuery = gql`
        query MyQuery {
            individuals {
                fullName
                organization {
                name
                }
                avatar {
                url
                }
                slug
            }
        }
    `

    const data = await client.request<{individuals: InnerDetailTypo[]}>(myQuery)
    return data
}

export async function fetchAllOrganizations() {
    const myQuery = gql`
        query MyQuery {
            organizations {
                name
                slug
                avatar {
                url
                }
                fieldOfOrganization
            }
        }
    `

    const data = await client.request<{organizations: OrganizationTypo[]}>(myQuery)
    return data
}

export async function fetchSpecOrganization(slug: string) {
    const myQuery = gql`
        query MyQuery {
            organization(where: {slug: "${slug}"}) {
                name
                location
                individual {
                fullName
                slug
                avatar {
                    url
                }
                }
                avatar {
                url
                }
                calendar
                instagram
                email
                fieldOfOrganization
                telegram
                telephoneNumber
                website
                youtube
                aboutOrganization{
                    html
                }
                secondaryColor {
                    hex
                    }
                videos
                websiteUrl
                banner {
                url
                }
                contactNumber{
                        url
                }
                projects {
                    url
                }
            }
        }
    `

    const data = await client.request<{organization: OrganizationTypo}>(myQuery)
    return data
} 