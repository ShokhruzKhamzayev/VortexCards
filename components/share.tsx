'use client'

import {
    EmailIcon,
    EmailShareButton
} from 'next-share'

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaRegCopy } from 'react-icons/fa6'
import { TiMessages } from "react-icons/ti"
import { FaShareAlt } from "react-icons/fa";

import { toast } from 'sonner'
import CustomImage from './ui/customImage'
import { MdEmail } from 'react-icons/md'
export default function Share({children, classname, secColor, fullName}: {
    children: React.ReactNode,
    classname?: string,
    secColor: string,
    fullName: string,
}) {
    const [isShareSupported, setIsShareSupported] = useState(false);

    useEffect(() => {
        // @ts-ignore
      if (navigator.share) {
        setIsShareSupported(true);
      }
    }, []);

    const handleSmsShare = () => {
        const message = encodeURIComponent("Salom! Ushbu vizitkani tekshirib ko'ring: " + window.location.href);
        const smsUrl = `sms:?&body=${message}`;
        window.location.href = smsUrl;
      };
  
    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Check this out!",
            text: "Hey, check out this cool website!",
            url: window.location.href,
          });
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        alert("Your browser does not support sharing.");
      }
    };
  
    const pathname = usePathname() || '';
    const customLink = `https://uzconnect.vercel.app${pathname}`
    
    const copylink = (e: any) => {
        navigator.clipboard.writeText(customLink)
        toast.success("Havola ko'chirildi!")
    }


  return (
    <Drawer>
        <DrawerTrigger className={`flex items-center gap-[15px] ${classname} p-[0.75rem] justify-center text-white border-b-[2px] border-white cursor-pointer`} style={{backgroundColor: secColor}}>
            {children}
        </DrawerTrigger>
        <DrawerContent className='max-w-[500px] mx-auto text-center pb-[10px]'>
            <DrawerHeader className='space-y-[20px]'>
                <DrawerTitle className='text-[25px] font-semibold'>{fullName}</DrawerTitle>
                    <div className='relative w-[300px] h-[300px] overflow-hidden mx-auto'>
                        <CustomImage src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${customLink}`} alt='qr code of the profile'/>
                    </div>
                <DrawerDescription onClick={copylink} className='flex items-center gap-[10px] justify-center'>
                        <FaRegCopy />
                        Nusxalash
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <h3 className='text-center font-medium text-[16px] mb-[20px]'>Vizitkani ulashish</h3>
                <div className='flex justify-between items-center px-[30px]'>
                <button
                    onClick={handleSmsShare}
                    className="text-white px-4 py-2 rounded-lg text-center"
                    >
                    <div className='p-[10px] rounded-full w-fit mx-auto' style={{backgroundColor: secColor}}>
                        <TiMessages size={32}/> 
                    </div>
                    <span className='my-[10px] block'>SMS orqali</span>              
                </button>
                <EmailShareButton
                    url={customLink}
                    subject={fullName}
                    body="body"
                >
                    <div className='p-[10px] rounded-full w-fit mx-auto' style={{backgroundColor: secColor}}>
                        <MdEmail size={32}/>
                    </div>
                    <span className='my-[10px] block'>Email orqali</span>
                </EmailShareButton>
                <button
                    onClick={handleShare}
                    disabled={!isShareSupported}
                    className="text-white"
                     text-center>
                        <div className='p-[10px] rounded-full w-fit mx-auto' style={{backgroundColor: secColor}}>
                            <FaShareAlt size={32}/>
                        </div>
                        <span className='my-[10px] block'>Boshqalar</span>
                    </button>
                </div>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>  
    )
}
