'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{locale: string}>()

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    router.push(pathname.replace(segments[1], lang))
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Image priority={true} quality={80} src={`/${params.locale}.png`} alt='Uzbekistan' width={28} height={28} className='rounded-full'/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit z-[999999999]">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => changeLanguage('uz')} className='flex items-center gap-[10px]'>
            <Image priority={true} quality={80} src={'/uz.png'} alt='Uzbekistan' width={28} height={28} className='rounded-full '/>
            <span>O'zbek</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={() => changeLanguage('ru')} className='flex items-center gap-[10px]'>
            <Image priority={true} quality={80} src={'/ru.png'} alt='Russian' width={28} height={28} className='rounded-full '/>
            <span>Русский</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={() => changeLanguage('en')} className='flex items-center gap-[10px]'>
            <Image priority={true} quality={80} src={'/en.png'} alt='English' width={28} height={28} className='rounded-full '/>
            <span>English</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
