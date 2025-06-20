import { fetchSpecOrganization } from '@/lib'
import { BiShare, BiUser } from 'react-icons/bi'
import { BsTelegram } from 'react-icons/bs'
import { FaBuilding, FaFacebook, FaInstagram, FaLinkedinIn, FaLocationDot, FaMedal, FaRegShareFromSquare, FaVideo } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoCall, IoLogoYoutube } from 'react-icons/io5'
import { RiContactsBook3Fill } from 'react-icons/ri'
import InfoInnerDetail from './infoInnerDetail'
import CustomImage from './ui/customImage'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MdPhotoLibrary } from 'react-icons/md'
import ConnectClient from './connectClient'
import GalleryView from './galleryView'
import IsPaid from './isPaid'
import Share from './share'
import { Social } from './social'
import ThemeSwitcher from './themeSwitcher'
import { EmblaCarousel } from './ui/carousel'
import ScrollToTopShared from './ui/scrollToTop'
import DownloadPdfButton from './pdf/customDownload'
import { LocaleSwitcher } from './langSwitcher'
import { getTranslations } from 'next-intl/server'
import Markdown from 'react-markdown'
import MotionDiv from './animationMotion'

export default async function InnerDetails({slug, locale}: {slug: string, locale: string}) {
    const {data} = await fetchSpecOrganization(slug, locale)
    const organization = data.data[0]
    if(!organization) {
        notFound()
    }
    const t = await getTranslations('innerPages')
    const videos = organization?.videos?.split(',')
    console.log(organization.excerpt)
  return (
    <>
        <MotionDiv className='max-w-[500px] mx-auto  md:my-[30px] rounded-[20px] bg-slate-50 dark:bg-black shadow-0 md:shadow-lg shadow-slate-800 dark:shadow-slate-200 pb-[10px]'>
        {
            organization.isPaid ? (
                <>
                    <div className="starter">
                        <div className="banner relative">
                            <div className='w-full h-[200px] relative'>
                               <div className='absolute top-[10px] left-[10px] z-[30] bg-white rounded-full dark:bg-black p-[10px] h-[48px]'>
                                    <LocaleSwitcher/>
                                </div>
                                <div className='absolute top-[10px] right-[10px] z-[30] bg-white rounded-full dark:bg-black p-[10px]'>
                                    <ThemeSwitcher/>
                                </div>
                                {
                                    organization?.banner && (
                                        <Image src={organization.banner.url} alt='banner of the profile' fill className='rounded-0 md:rounded-t-[20px]'/>
                                    )
                                }
                            </div>
                        <div className="imgAndLoc">
                            <div className='absolute top-[100%] left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center rounded-full'>
                            <div className='w-[140px] h-[140px] rounded-full relative overflow-hidden'>
                                <CustomImage load='eager' src={organization.avatar.url} alt={organization.name} classname='rounded-full border-[3px] border-white'/>
                            </div>
                            </div>
                            <DownloadPdfButton data={organization} slug={slug}/>
                            <a href={organization.location} className="location gap-[10px] absolute top-[100%] right-1/8  translate-y-[-50%] flex items-center flex-col">
                                <div className={`p-[15px] rounded-full`} style={{backgroundColor: organization.secondaryColor}}>
                                    <FaLocationDot color='white' />
                                </div>
                                <p className='text-[11px]'>{t("starter.location")}</p>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="max-w-[90%] mx-auto">
                    <div className="posAndLinks">
                        <div className='text-center space-y-[15px] mt-[90px]'>
                            <h1 className='font-[700] text-[1.875rem] leading-[2.25rem] text-balance'>{organization.name}</h1>
                            <h3 className='text-yellow-800 dark:text-[#f9bf41] text-[15px] '>{organization.fieldOfOrganization}</h3>
                        </div>
                        <div className='grid grid-cols-4 gap-[30px] mt-[30px]'>
                            <Social link={`tel:${organization.telephoneNumber}`} color={organization.secondaryColor} text={t("links.tell")}>
                                <IoCall size={25} color='white' />
                            </Social>
                            <Social link={organization.instagram} color={organization.secondaryColor} text={t("links.insta")}>
                                <FaInstagram size={25} color='white' />
                            </Social>
                            <Social link={organization.facebook} color={organization.secondaryColor} text={t("links.facebook")}>
                                <FaFacebook size={25} color='white' />
                            </Social>
                            <Social link={organization.telegram} color={organization.secondaryColor} text={t("links.tg")}>
                                <BsTelegram size={25} color='white' />
                            </Social>
                            <ConnectClient person={organization} />
                            <Social link={organization.email} color={organization.secondaryColor} text={t("links.mail")}>
                                <IoMdMail size={25} color='white' />
                            </Social>
                            <Social link={organization.linkedin} color={organization.secondaryColor} text={t("links.linkedin")}>
                                <FaLinkedinIn size={25} color='white' />
                            </Social>
                            <Social link={organization.youtube} color={organization.secondaryColor} text={t("links.yt")}>
                                <IoLogoYoutube size={25} color='white' />
                            </Social>
                        </div>
                    </div>
                     <div className="share flex justify-between gap-[2px] mt-[20px]">
                        <a href={organization.contactDownload.url} download={organization.contactDownload.url} className='flex items-center gap-[0.5rem] w-[70%] rounded-l-[10px] p-[0.75rem] justify-center text-white border-b-[2px] border-white hover:grayscale-75 transition-all duration-200' style={{backgroundColor: organization.secondaryColor }}>
                            <RiContactsBook3Fill />
                            {t("actions.addContacts")}
                        </a>
                        <Share fullName={organization.name} secColor={organization.secondaryColor} classname='w-[30%] rounded-r-[15px]'>
                            <span>{t("actions.share")}</span>
                        </Share>
                    </div>
                    <a href={organization.website} target='_blank' className='w-full flex justify-center items-center p-[0.75rem] rounded-[15px] mt-[10px] text-white border-b-[2px] border-white hover:grayscale-75 transition-all duration-200' style={{backgroundColor: organization.secondaryColor}}>
                        {t("actions.website")}
                    </a>
                    <InfoInnerDetail Icon={<FaBuilding  size={30}/>}>
                    <div>
                        <h1 className='text-center font-medium text-[20px] mb-[15px]'>{t("about.aboutUs")}</h1>
                        <Markdown>
                            {organization.aboutOrganization}
                        </Markdown>
                    </div>
                    </InfoInnerDetail>
                    {
                        organization?.partnersLogo?.length >= 1 && (
                            <InfoInnerDetail Icon={<FaMedal size={30}/>}>
                                <div className="carousel">
                                    <EmblaCarousel photos={organization.partnersLogo} type='photo' size='0 0 50%'/>
                                </div>
                            </InfoInnerDetail>
                        )
                    }
                    {
                        organization?.videos?.length >= 1 && (
                            <InfoInnerDetail Icon={<FaVideo  size={30}/>}>
                                <div className="carousel">
                                    <EmblaCarousel type='video' data={videos} size='0 0 100%' />
                                </div>
                            </InfoInnerDetail>
                        )
                    }
                    {
                        organization?.individuals.length >= 1 && (
                            <InfoInnerDetail Icon={<BiUser size={30}/>}>
                                <div className='grid grid-cols-2 md:grid-cols-3 gap-[20px]'>
                                    {
                                        organization.individuals.map(organization => (
                                            <Link href={`/individual/${organization.slug}`} key={organization.slug} className='w-full space-y-[10px]'>
                                                <div className='relative w-[100px] h-[100px] overflow-hidden mx-auto'>
                                                    <CustomImage load='lazy' src={organization.avatar.url} alt={organization.fullName} classname='rounded-full border-[3px] border-white object-contain'/>
                                                </div>
                                                <h1 className='text-center text-[13px] font-medium'>{organization.fullName}</h1>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </InfoInnerDetail>
                        )
                    }
                    <InfoInnerDetail Icon={<MdPhotoLibrary size={30}/>}>
                        <GalleryView photos={organization.projects}/>
                    </InfoInnerDetail>
                    <InfoInnerDetail Icon={<FaRegShareFromSquare size={30}/>}>
                        <div className='pt-[10px]'>
                            <Share fullName={organization.name} secColor={organization.secondaryColor} classname='w-full rounded-[12px]'>
                                {t("actions.share")}
                            </Share>
                            <a className='bg-transparent border border-slate-800 dark:border-slate-100  rounded-[12px] py-[8px] px-[15px] w-fit mx-auto block my-[20px]' href={`/${locale}#contact`}>{t("getCard")}</a>
                        </div>
                    </InfoInnerDetail>
                    <ScrollToTopShared/>
        </div>
                </>
            ) : (
                <IsPaid slug={organization.slug}/>
            )
        }
    </MotionDiv>
    </>
  )
}