import Image from "next/image";
import Nav from "./nav";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <header className="custom-container flex justify-between items-center py-[15px] border-b border-slate-500 dark:border-slate-200">
        <div className="flex items-center gap-[20px]">
            <Image src={'/logo.jpg'} alt="the brand logo" width={100} height={100} className="rounded-[12px]"/>
            <Nav/>
        </div>
        <div className="flex items-center gap-[15px]">
            <a href="tell:+998919866898">+998919866898</a>
            <ThemeSwitcher/>
        </div>
    </header>
  )
}
