'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PhoneNav({className, setMenu}: {
  className?: string,
  setMenu: Function
}) {
  return (
    <nav className={cn("space-x-[20px]", className)}>
        <Link onClick={() => setMenu(false)} href={'/#main'}>Bosh sahifa</Link>
        <Link onClick={() => setMenu(false)} href={'/#info'}>Ma'lumot</Link>
        <Link onClick={() => setMenu(false)} href={'/#plans'}>Tariflar</Link>
        <Link onClick={() => setMenu(false)} href={'/#users'}>Mijozlar</Link>
        <Link onClick={() => setMenu(false)} href={'/#usage'}>Qanday foydalanish kerak</Link>
        <Link onClick={() => setMenu(false)} href={'/#contact'}>Kontakt</Link>
    </nav>
  )
}
