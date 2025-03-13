import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'

import { Button } from './ui/button'

export default function Share({children, classname}: {
    children: React.ReactNode,
    classname?: string
}) {
  return (
    <Drawer>
        <DrawerTrigger className={`flex items-center gap-[15px] ${classname} bg-slate-500 p-[0.75rem] justify-center text-white border-b-[2px] border-white cursor-pointer`}>
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
