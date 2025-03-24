import Link from "next/link";

export default function Nav() {
  return (
    <nav className="space-x-[20px] hidden lg:block">
        <Link href={'/'}>Bosh sahifa</Link>
        <Link href={'/'}>Xarakterli</Link>
        <Link href={'/'}>Tariflar</Link>
        <Link href={'/'}>Mijozlar</Link>
        <Link href={'/'}>Qanday foydalanish kerak</Link>
        <Link href={'/'}>Kontaktlar</Link>
    </nav>
  )
}
