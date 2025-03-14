export interface InnerDetailTypo {
    fullName: string,
    organization: { name: string, aboutOrganization: {
        html: HTMLElement
    }, slug: string },
    position: string,
    email: string,
    telephoneNumber: string,
    linkedin: string,
    instagram: string,
    telegram: string,
    youtube: string,
    location: string,
    avatar: {
        url: string
    },
    aboutIndividual: {
        html: HTMLElement
    },
    slug: string,
    secondaryColor: {
        hex: string
    }
}

export interface OrganizationTypo {
    name: string,
  location: string,
  individual: [ { fullName: string, avatar: {url: string}, slug: string } ],
  avatar: {
    url: string
  },
  calendar: string,
  email: string,
  fieldOfOrganization: string,
  telegram: string,
  telephoneNumber: string,
  website: string,
  youtube: string,
  aboutOrganization: { html: HTMLElement },
  slug: string,
  instagram: string,
  secondaryColor: {
    hex: string
  }
}