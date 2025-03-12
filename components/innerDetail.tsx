import React from 'react'
import { BsTelegram } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn, FaLocationDot, FaRegCalendar, FaRegHandshake } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoCall, IoLogoYoutube } from 'react-icons/io5'

export default function InnerDetails({slug}: {slug: string}) {
  return (
    <div className='max-w-[500px] mx-auto my-[30px] rounded-[20px]'>
        <div className="starter">
            <div className="banner relative">
                <div className='w-full h-[200px] rounded-t-[20px] bg-slate-400'></div>
            <div className="imgAndLoc">
                <div className='w-[140px] h-[140px] rounded-full bg-slate-950  border-[2px] border-white absolute top-[100%] left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center'></div>
                <a href='/' className="location absolute top-[100%] right-1/8  translate-y-[-50%] flex items-center flex-col">
                    <div className='bg-slate-700 p-[10px] rounded-full'>
                        <FaLocationDot color='white' />
                    </div>
                    <p className='text-[11px]'>Location</p>
                </a>
            </div>
            </div>
        </div>
        <div className="posAndLinks">
            <div className='text-center space-y-[15px] mt-[90px]'>
                <h1 className='font-[700] text-[1.875rem] leading-[2.25rem] text-balance mx-[50px]'>Kimdirov Kimdir Kimdirovich</h1>
                <h3 className='text-[#f9bf41] text-[15px] '>Organizatsiyasi</h3>
                <h3 className='text-[.875rem] leading-[1.25rem]'>Positsiyasi</h3>
            </div>
            <div className='grid grid-cols-4'>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <IoMdMail size={30} />
                    </div>
                    Email
                </div>
                <div className="call">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <IoCall />
                    </div>
                    Call
                </div>
                <div className="calendar">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <FaRegCalendar />
                    </div>
                    Calendar
                </div>
                <div className="connect">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <FaRegHandshake />
                    </div>
                    Connect
                </div>
                <div className="linkedin">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <FaLinkedinIn />
                    </div>
                    Linkedin
                </div>
                <div className="instagram">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <FaInstagram />
                    </div>
                    Instagram
                </div>
                <div className="youtube">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <IoLogoYoutube />
                    </div>
                    Youtube
                </div>
                <div className="telegram">
                    <div className='bg-slate-600 p-[10px] rounded-full'>
                        <BsTelegram />
                    </div>
                    Telegram
                </div>
            </div>
        </div>
        
    </div>
  )
}
