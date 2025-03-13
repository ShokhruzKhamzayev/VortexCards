import { fetchSpecIndividual } from '@/lib'
import { BiHome, BiShare, BiUser } from 'react-icons/bi'
import { BsTelegram } from 'react-icons/bs'
import { FaInstagram, FaLinkedinIn, FaLocationDot, FaRegCalendar, FaRegHandshake, FaRegShareFromSquare } from 'react-icons/fa6'
import { GoOrganization } from "react-icons/go"
import { IoMdMail } from 'react-icons/io'
import { IoCall, IoLogoYoutube } from 'react-icons/io5'
import { RiContactsBook3Fill } from 'react-icons/ri'
import InfoInnerDetail from './infoInnerDetail'
import CustomImage from './ui/customImage'

import { FloatingNav } from './ui/floating-navbar'
import Share from './share'
import {EmblaCarousel} from './ui/carousel'

export default async function InnerDetails({slug}: {slug: string}) {
    const {individual: person} = await fetchSpecIndividual(slug)
    const navItems = [
        {
            name: 'Home',
            icon: <BiHome size={25}/>,
            link:'/'
        }
    ]
    const temp = {__html: person.organization.aboutOrganization.html}
    const indTemp = {__html: person.aboutIndividual.html}
  return (
    <>
    <FloatingNav navItems={navItems}/>
        <div className='max-w-[500px] mx-auto  md:my-[30px] rounded-[20px] bg-slate-50 dark:bg-black shadow-0 md:shadow-lg shadow-slate-800 dark:shadow-slate-200 pb-[10px]'>
        <div className="starter">
            <div className="banner relative">
                <div className='w-full h-[200px] rounded-t-[20px] relative'>
                <div className='w-full h-[200px] rounded-t-[20px] bg-slate-400'></div>
                </div>
            <div className="imgAndLoc">
                <div className='absolute top-[100%] left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center rounded-full'>
                <div className='w-[140px] h-[140px] rounded-full relative overflow-hidden'>
                    <CustomImage src={person.avatar.url} alt={person.fullName} classname='rounded-full border border-white'/>
                </div>
                </div>
                <a href='/' className="location absolute top-[100%] right-1/8  translate-y-[-50%] flex items-center flex-col">
                    <div className='bg-slate-700 p-[15px] rounded-full'>
                        <FaLocationDot color='white' />
                    </div>
                    <p className='text-[11px]'>Location</p>
                </a>
            </div>
            </div>
        </div>
        <div className="custom-container">
        <div className="posAndLinks">
            <div className='text-center space-y-[15px] mt-[90px]'>
                <h1 className='font-[700] text-[1.875rem] leading-[2.25rem] text-balance'>{person.fullName}</h1>
                <h3 className='text-[#f9bf41] text-[15px] '>{person.organization.name}</h3>
                <h3 className='text-[.875rem] leading-[1.25rem]'>{person.position}</h3>
            </div>
            <div className='grid grid-cols-4 gap-[30px] mt-[30px]'>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto hover:bg-slate-400'>
                    <IoMdMail size={25} color='white' />
                    </div>
                    Email
                </a>
                <a href={`tel:${person.telephoneNumber}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto hover:grayscale-75'>
                        <IoCall size={25} color='white' />
                    </div>
                    Call
                </a>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <FaRegCalendar size={25} color='white' />
                    </div>
                    Calendar
                </a>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <FaRegHandshake size={25} color='white' />
                    </div>
                    Connect
                </a>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <FaLinkedinIn size={25} color='white' />
                    </div>
                    Linkedin
                </a>
                <a href={`https://instagram.com/${person.instagram}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <FaInstagram size={25} color='white' />
                    </div>
                    Instagram
                </a>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <IoLogoYoutube size={25} color='white' />
                    </div>
                    Youtube
                </a>
                <a href={`${person}`} className="email text-center text-[">
                    <div className='bg-slate-600 p-[15px] w-fit rounded-full mx-auto'>
                    <BsTelegram size={25} color='white' />
                    </div>
                    Telegram
                </a>
            </div>
        </div>
        <div className="share flex justify-between gap-[2px] mt-[20px]">
            <button className='flex items-center gap-[0.5rem] w-[70%] bg-slate-500 rounded-l-[10px] p-[0.75rem] justify-center text-white border-b-[2px] border-white'>
                <RiContactsBook3Fill />
                ADD TO CONTACTS
            </button>
            <Share classname='w-[30%] rounded-r-[15px]'>
                <BiShare/>
                SHARE
            </Share>
        </div>
        <a href='https://vortexhub.uz' className='w-full flex justify-center items-center p-[0.75rem] bg-slate-500 rounded-[15px] mt-[10px] text-white border-b-[2px] border-white'>
            Website
        </a>
        <div className="carousel">
            <EmblaCarousel  />
        </div>
        <InfoInnerDetail Icon={<GoOrganization size={30}/>}>
            <div dangerouslySetInnerHTML={temp}></div>
        </InfoInnerDetail>
        <InfoInnerDetail Icon={<BiUser size={30}/>}>
            <div dangerouslySetInnerHTML={indTemp}></div>
        </InfoInnerDetail>
        <InfoInnerDetail Icon={<FaRegShareFromSquare size={30}/>}>
            <Share classname='w-full rounded-[12px]'>
                SHARE MY INFO
            </Share>
            <a className='bg-transparent border border-slate-800 dark:border-slate-100  rounded-[12px] py-[8px] px-[15px] w-fit mx-auto block my-[20px]' href="#">GET YOUR CONTACT CARD</a>
        </InfoInnerDetail>
        </div>
    </div>
    </>
  )
}