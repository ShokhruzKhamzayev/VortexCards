import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Nav({className}: {
  className?: string
}) {
  return (
    <nav className={cn("space-x-[20px] hidden lg:flex", className)}>
        <Link href={'/'}>Bosh sahifa</Link>
        <Link href={'/'}>Xarakterli</Link>
        <Link href={'/'}>Tariflar</Link>
        <Link href={'/'}>Mijozlar</Link>
        <Link href={'/'}>Qanday foydalanish kerak</Link>
        <Link href={'/'}>Kontaktlar</Link>
    </nav>
  )
}
