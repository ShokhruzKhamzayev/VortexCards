'use client';

import { usePathname, useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    router.push(pathname.replace(segments[1], lang))
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          ochish
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuLabel>Tilni tanlang</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => changeLanguage('uz')}>
            Uzbek
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('ru')}>
            Russian
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage('en')}>
            English
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
