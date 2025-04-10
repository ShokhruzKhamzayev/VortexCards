'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Nav({className}: {
  className?: string,
}) {
  return (
    <nav className={cn("space-x-[20px]", className)}>
        <Link href={'/#main'}>Bosh sahifa</Link>
        <Link href={'/#info'}>Ma'lumot</Link>
        <Link href={'/#plans'}>Tariflar</Link>
        <Link href={'/#users'}>Mijozlar</Link>
        <Link href={'/#usage'}>Qanday foydalanish kerak</Link>
        <Link href={'/#contact'}>Kontakt</Link>
    </nav>
  )
}
