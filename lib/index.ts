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
            }
        }
    `

    const data = await client.request<{individual: InnerDetailTypo}>(myQuery)
    return data
}