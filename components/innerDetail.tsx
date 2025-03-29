import { fetchSpecIndividual } from '@/lib'
import { BiShare, BiUser } from 'react-icons/bi'
import { BsTelegram } from 'react-icons/bs'
import { FaBuilding, FaInstagram, FaLinkedinIn, FaLocationDot, FaMedal, FaRegShareFromSquare, FaVideo } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoCall, IoLogoYoutube } from 'react-icons/io5'
import { MdPhotoLibrary } from "react-icons/md"
import { RiContactsBook3Fill } from 'react-icons/ri'
import InfoInnerDetail from './infoInnerDetail'
import CustomImage from './ui/customImage'

import ScrollToTop from "react-scroll-to-top";
import Image from 'next/image'
import Link from 'next/link'
import ConnectClient from './connectClient'
import GalleryView from './galleryView'
import Share from './share'
import ThemeSwitcher from './themeSwitcher'
import { EmblaCarousel } from './ui/carousel'

export default async function InnerDetails({slug}: {slug: string}) {
    const {individual: person} = await fetchSpecIndividual(slug)
    const temp = {__html: person?.organization?.aboutOrganization.html}
    const videos = person.videos.split(',')

  return (
    <>
        <div className='max-w-[500px] mx-auto  md:my-[30px] rounded-[20px] bg-slate-50 dark:bg-black shadow-0 md:shadow-lg shadow-slate-800 dark:shadow-slate-200 pb-[10px]'>
        <div className="starter w-full">
            <div className="w-full h-[200px]  relative">
                <div className='absolute top-[10px] right-[10px] z-[30] bg-white rounded-full dark:bg-black p-[10px]'>
                    <ThemeSwitcher/>
                </div>
                <Image src={person.banner.url} fill alt='banner for profile' className='rounded-0 md:rounded-t-[20px]'/>
            <div className="imgAndLoc">
                <div className='absolute top-[100%] left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center rounded-full'>
                <div className='w-[140px] h-[140px] rounded-full relative overflow-hidden'>
                    <CustomImage src={person.avatar.url} alt={person.fullName} classname='rounded-full border-[3px] border-white'/>
                </div>
                </div>
                <a href={person.location} className="location absolute top-[100%] right-1/8  translate-y-[-50%] flex items-center flex-col">
                    <div className='p-[15px] rounded-full' style={{backgroundColor: person.secondaryColor.hex}}>
                        <FaLocationDot color='white' />
                    </div>
                    <p className='text-[11px]'>Location</p>
                </a>
            </div>
            </div>
        </div>
        <div className="custom-container">
        <div className="posAndLinks">
            <div className='text-center space-y-[7px] mt-[90px]'>
                <h1 className='font-[700] text-[1.875rem] leading-[2.25rem] text-balance'>{person.fullName}</h1>
                {
                    person.organization && (
                        <Link href={`/organization/${person.organization.slug}`} className='text-yellow-600 dark:text-[#f9bf41]  text-[15px] block'>{person.organization.name}</Link>
                    )
                }
                <h3 className='text-[.875rem] leading-[1.25rem]'>{person.position}</h3>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[30px]'>
                <a href={`tel:${person.telephoneNumber}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto transition-all duration-200 hover:grayscale-75'>
                        <IoCall size={25} color='white' />
                    </div>
                    Telefon
                </a>
                <a href={`https://instagram.com/${person.instagram}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto hover:grayscale-75 transition-all duration-200'>
                    <FaInstagram size={25} color='white' />
                    </div>
                    Instagram
                </a>
                <a href={`mailto:${person.email}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto hover:grayscale-75 transition-all duration-200'>
                    <IoMdMail size={25} color='white' />
                    </div>
                    Email
                </a>
                <ConnectClient person={person} />
                <a href={`https://www.linkedin.com/in/${person.linkedin}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto hover:grayscale-75 transition-all duration-200'>
                    <FaLinkedinIn size={25} color='white' />
                    </div>
                    Linkedin
                </a>
                <a href={`https://www.youtube.com/@${person.youtube}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto hover:grayscale-75 transition-all duration-200'>
                    <IoLogoYoutube size={25} color='white' />
                    </div>
                    Youtube
                </a>
                <a href={`https://t.me/${person.telegram}`} className="email text-center">
                    <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto hover:grayscale-75 transition-all duration-200'>
                    <BsTelegram size={25} color='white' />
                    </div>
                    Telegram
                </a>
            </div>
        </div>
        <div className="share flex justify-between gap-[2px] mt-[20px]">
            <a href={person.contactDownload.url} download={person.contactDownload.url} className='flex items-center gap-[0.5rem] w-[70%] rounded-l-[10px] p-[0.75rem] justify-center text-white border-b-[2px] border-white hover:grayscale-75 transition-all duration-200' style={{backgroundColor: person.secondaryColor.hex, }}>
                <RiContactsBook3Fill />
                Kontaktga qo'shish
            </a>
            <Share fullName={person.fullName} secColor={person.secondaryColor.hex} classname='w-[30%] rounded-r-[15px]'>
                <BiShare/>
                ULASHISH
            </Share>
        </div>
        <a href={`https://${person.websiteUrl}`} className='w-full flex justify-center items-center p-[0.75rem] rounded-[15px] mt-[10px] text-white border-b-[2px] border-white hover:grayscale-75 transition-all duration-200' style={{backgroundColor: person.secondaryColor.hex}}>
            Website
        </a>
        {
            person?.organization && (
        <InfoInnerDetail Icon={<FaBuilding size={30}/>}>
                <div>
                    <h1 className='text-center font-medium text-[20px] mb-[15px]'>Biz haqimizda</h1>
                    <div dangerouslySetInnerHTML={temp}></div>
                </div>
           
        </InfoInnerDetail>
         )}
        {
            person.partnersLogo.length > 1 && (
                <InfoInnerDetail Icon={<FaMedal size={30}/>}>
                    <div className="carousel">
                        <EmblaCarousel photos={person.partnersLogo} type='photo' size='0 0 33.33%'/>
                    </div>
                </InfoInnerDetail>
            )
        }
        {
            person.videos.length > 1 && (
                <InfoInnerDetail Icon={<FaVideo  size={30}/>}>
                    <div className="carousel">
                        <EmblaCarousel type='video' data={videos}  size='0 0 100%'/>
                    </div>
                </InfoInnerDetail>
            )
        }
        <InfoInnerDetail Icon={<BiUser size={30}/>}>
        <div>
            <h1 className='text-center font-medium text-[20px] mb-[15px]'>{person.fullName}</h1>
            <div>{person.aboutIndividual}</div>
        </div>
        </InfoInnerDetail>
        <InfoInnerDetail Icon={<MdPhotoLibrary size={30}/>}>
            <GalleryView photos={person.projects}/>
        </InfoInnerDetail>
        <InfoInnerDetail Icon={<FaRegShareFromSquare size={30}/>}>
            <div className='pt-[10px]'>
            <Share fullName={person.fullName} secColor={person.secondaryColor.hex} classname='w-full rounded-[12px]'>
                ULASHISH
            </Share>
            <Link className='bg-transparent border border-slate-800 dark:border-slate-100  rounded-[12px] py-[8px] px-[15px] w-fit mx-auto block my-[20px]' href="/#contact">O'zingizni kartangizni oling</Link>
            </div>
        </InfoInnerDetail>
        </div>
        <ScrollToTop smooth />
    </div>
    </>
  )
}