import Image from "next/image";
import Nav from "./nav";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="custom-container">
        <div className="top-footer flex justify-between items-center lg:border-b border-slate-600 dark:border-slate-100 py-[30px] border-0">
            <div className="flex items-center gap-[20px]">
                <Image src={'/logo.png'} alt="our logo" width={80} height={80}/>
                <div className="hidden lg:block">
                    <Nav/>
                </div>
            </div>
            <a href="tel:+998919866898" className="bg-[#353437] text-white py-[12px] px-[18px] rounded-[16px]">+998 91 986 68 98</a>
        </div>
        <div className="block lg:hidden border-b border-slate-600 dark:border-slate-100 py-[30px] lg:border-0">
            <Nav className="flex flex-col gap-[15px] justify-center items-center"/>
        </div>
        <div className="bottom-footer py-[20px] space-x-[20px]">
            <Link className="text-slate-500 dark:text-slate-300" href="/privacy">Maxfiylik siyosati</Link>
            <Link className="text-slate-500 dark:text-slate-300" href="/privacy">Foydalanish shartlari</Link>
        </div>
    </footer>
  )
}
