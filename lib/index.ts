import { InnerDetailTypo } from '@/types'
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