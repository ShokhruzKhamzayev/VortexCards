export interface InnerDetailTypo {
    fullName: string,
    organizations: { name: string, aboutOrganization: string, slug: string }[],
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
    aboutIndividual: string,
    slug: string,
    secondaryColor: string,
    videos: string,
    websiteUrl: string
    banner: {
      url: string
    }
    contactDownload: {
			url: string
    },
    partnersLogo: {
      url: string
    }[],
    projects: {
      url: string
    }[],
    textForConnection: string,
    createdAt: Date,
    isPaid: boolean,
    facebook: string
}

export interface OrganizationTypo {
    name: string,
  location: string,
  individuals: [ { fullName: string, avatar: {url: string}, slug: string } ],
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
  aboutOrganization: string,
  slug: string,
  instagram: string,
  secondaryColor: string,
  videos: string,
  websiteUrl: string
  banner: {
    url: string
  }
  contactDownload: {
    url: string
  },
  projects: {
    url: string
  }[],
  textForConnection: string,
  isPaid: boolean,
  createdAt: Date,
  linkedin: string,
  facebook: string,
  partnersLogo: {
    url: string
  }[],
}