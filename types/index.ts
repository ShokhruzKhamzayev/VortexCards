export interface InnerDetailTypo {
    fullName: string,
    organization: { name: string, aboutOrganization: {
        html: HTMLElement
    } },
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
    }
}