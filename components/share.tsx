import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

import { Button } from './ui/button'

export default function Share({children, classname, secColor}: {
    children: React.ReactNode,
    classname?: string,
    secColor: string
}) {
  return (
    <Drawer>
        <DrawerTrigger className={`flex items-center gap-[15px] ${classname} p-[0.75rem] justify-center text-white border-b-[2px] border-white cursor-pointer`} style={{backgroundColor: secColor}}>
            {children}
        </DrawerTrigger>
            <DrawerContent className='max-w-[500px] mx-auto'>
            <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>  
            )
}
