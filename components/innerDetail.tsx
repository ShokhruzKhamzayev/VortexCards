import { BiShare } from 'react-icons/bi'
import { BsTelegram } from 'react-icons/bs'
import { FaInstagram, FaLinkedinIn, FaLocationDot, FaRegCalendar, FaRegHandshake } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { IoCall, IoLogoYoutube } from 'react-icons/io5'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { Button } from './ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

export default function InnerDetails({slug}: {slug: string}) {
  return (
    <div className='max-w-[500px] mx-auto  md:my-[30px] rounded-[20px]'>
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
        <div className="custom-container">
        <div className="posAndLinks">
            <div className='text-center space-y-[15px] mt-[90px]'>
                <h1 className='font-[700] text-[1.875rem] leading-[2.25rem] text-balance'>Kimdirov Kimdir Kimdirovich</h1>
                <h3 className='text-[#f9bf41] text-[15px] '>Organizatsiyasi</h3>
                <h3 className='text-[.875rem] leading-[1.25rem]'>Positsiyasi</h3>
            </div>
            <div className='grid grid-cols-4 gap-[30px]'>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <IoMdMail size={30} />
                    </div>
                    Email
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <IoCall size={30} />
                    </div>
                    Call
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <FaRegCalendar size={30} />
                    </div>
                    Calendar
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <FaRegHandshake size={30} />
                    </div>
                    Connect
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <FaLinkedinIn size={30} />
                    </div>
                    Linkedin
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <FaInstagram size={30} />
                    </div>
                    Instagram
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <IoLogoYoutube size={30} />
                    </div>
                    Youtube
                </div>
                <div className="email text-center text-[">
                    <div className='bg-slate-600 p-[10px] w-fit rounded-full mx-auto'>
                    <BsTelegram size={30} />
                    </div>
                    Telegram
                </div>
            </div>
        </div>
        <div className="share flex justify-between gap-[2px]">
            <button className='flex items-center gap-[0.5rem] w-[70%] bg-slate-500 rounded-l-[10px] p-[0.75rem] justify-center'>
                <RiContactsBook3Fill />
                ADD TO CONTACTS
            </button>
            <Drawer>
                <DrawerTrigger className='flex items-center gap-[10px] w-[30%] bg-slate-500 rounded-r-[15px] p-[0.75rem] justify-center'>
                    <BiShare/>
                    SHARE
                </DrawerTrigger>
                <DrawerContent className='max-w-[700px] mx-auto'>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </div>
        <button className='w-full flex justify-center items-center p-[0.75rem] bg-slate-500 rounded-[15px] mt-[10px]'>
            Website
        </button>
        </div>
    </div>
  )
}
