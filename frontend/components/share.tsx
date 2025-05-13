'use client'

import {
  EmailShareButton
} from 'next-share'

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaShareAlt } from "react-icons/fa"
import { FaRegCopy } from 'react-icons/fa6'
import { TiMessages } from "react-icons/ti"

import { MdEmail } from 'react-icons/md'
import { toast } from 'sonner'
import CustomImage from './ui/customImage'
import { useTranslations } from 'next-intl'

export default function Share({children, classname, secColor, fullName}: {
    children: React.ReactNode,
    classname?: string,
    secColor: string,
    fullName: string,
}) {
  const [isShareSupported, setIsShareSupported] = useState(false);
  const t = useTranslations('innerPages.share')
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
    const customLink = `https://cards.vortexhub.uz${pathname}`
    
    const copylink = () => {
        navigator.clipboard.writeText(customLink)
        toast.success(t("copied"))
    }
  return (
    <Drawer>
        <DrawerTrigger className={`flex gap-[15px] ${classname} p-[0.75rem] justify-center items-center text-white border-b-[2px] border-white cursor-pointer hover:grayscale-75 transition-all duration-200`} style={{backgroundColor: secColor}}>
            {children}
        </DrawerTrigger>
        <DrawerContent className='max-w-[500px] mx-auto text-center min-h-fit'>
            <DrawerHeader className='space-y-[20px] pb-[50px]'>
                <DrawerTitle className='text-[25px] font-semibold'>{fullName}</DrawerTitle>
                    <div className='relative max-w-full w-[200px] h-[200px] overflow-hidden mx-auto'>
                      <CustomImage src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${customLink}`} alt='qr code of the profile' />
                    </div>
                <DrawerDescription onClick={copylink} className='flex items-center gap-[10px] justify-center'>
                  <FaRegCopy />
                  {t("copy")}
                </DrawerDescription>
                <h3 className='text-center font-medium text-[16px] mb-[20px]'>{t("shareCard")}</h3>
                <div className='flex justify-between items-center px-[30px]'>
                <button
                    onClick={handleSmsShare}
                    className="text-center cursor-pointer"
                    >
                    <div className='p-[10px] rounded-full w-fit mx-auto' style={{backgroundColor: secColor, color: 'white'}}>
                        <TiMessages size={32} className='text-white'/> 
                    </div>
                    <p className='my-[10px] block text-black dark:text-white'>{t("sms")}</p>              
                </button>
                <EmailShareButton
                    url={customLink}
                    subject={fullName}
                    body="body"
                >
                    <div className='p-[10px] rounded-full w-fit mx-auto cursor-pointer' style={{backgroundColor: secColor}}>
                        <MdEmail size={32} className='text-white' />
                    </div>
                    <p className='my-[10px] block text-black dark:text-white '>{t("email")}</p>
                </EmailShareButton>
                <button
                    onClick={handleShare}
                    disabled={!isShareSupported}
                    className="cursor-pointer">
                        <div className='p-[10px] rounded-full w-fit mx-auto' style={{backgroundColor: secColor}}>
                            <FaShareAlt size={32} className='text-white'/>
                        </div>
                        <p className='my-[10px] block text-black dark:text-white '>{t("other")}</p>
                    </button>
                </div>
            </DrawerHeader>
        </DrawerContent>
    </Drawer>  
    )
}
