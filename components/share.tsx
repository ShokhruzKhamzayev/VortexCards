'use client'

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

export default function Share({children, classname, secColor}: {
    children: React.ReactNode,
    classname?: string,
    secColor: string
}) {
    const pathname = usePathname() || '';

    const customLink = `https://uzconnect.vercel.app${pathname}`

  return (
    <Drawer>
        <DrawerTrigger className={`flex items-center gap-[15px] ${classname} p-[0.75rem] justify-center text-white border-b-[2px] border-white cursor-pointer`} style={{backgroundColor: secColor}}>
            {children}
        </DrawerTrigger>
            <DrawerContent className='max-w-[500px] mx-auto'>
            <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                    <span>NImadir</span>
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${customLink}`} alt='qr code of the profile'/>
                </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>  
    )
}
