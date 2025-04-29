'use client'

import Image from "next/image";
import Nav from "./nav";
import ThemeSwitcher from "./themeSwitcher";
import { useEffect, useRef, useState } from "react";
import Cards from '../public/cards.png'
import Link from "next/link";
import { BurgerMenu } from "./ui/burgerMenu";
import { useTranslations } from "next-intl";

export default function Header({withMain}: {
  withMain: boolean
}) {
  const [isFixed, setIsFixed] = useState(false);
  const [menu, setMenu] = useState(false);

  const navRef = useRef(null);
  const t = useTranslations();
  console.log(t('home'))

  useEffect(() => {
    if(menu) {
      setIsFixed(true)
    }
  }, [menu])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 56) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div ref={navRef}
        className={`w-full transition-all duration-300  border-b border-slate-200  ${
          isFixed ? "fixed top-0 custom_bg shadow-md z-[9999] p-0" : "relative bg-transparent p-[10px]"
        }`}>
          <header className="custom-container flex justify-between items-center py-[15px] h-[100px]">
              <div className="flex items-center gap-[20px]">
                  <Link href={'/'}>
                    <Image src={'/logo.png'} alt="the brand logo" width={70} height={70} className="rounded-[12px]"/>
                  </Link>
                  <Nav className="hidden lg:flex"/>
              </div>
              <div className="flex items-center gap-[15px]">
                  <a href="tell:+998919866898" className="bg-[#f5f5f7] text-black rounded-[12px] py-[10px] px-[15px] hidden lg:block">+998919866898</a>
                  <div className="flex items-center gap-[15px]">
                    <ThemeSwitcher/>
                    <BurgerMenu menu={menu} setMenu={setMenu}/>
                  </div>
              </div> 
          </header>
        </div>
        {
          withMain ? (
            <main id="main" className={`custom-container py-[50px] min-h-screen justify-center flex items-center flex-col gap-[30px] lg:gap-0 lg:flex-row ${isFixed ? "pt-[200px]" : "pt-[50px]"}`}>
        <div className="space-y-[20px] isolate z-[20] w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-[32px] md:text-[35px] lg:text-[55px] font-semibold ">Sizga kerak bo'ladigan so'ngi tashrif qog'ozi!</h1>
          <h2 className="text-[17x] font-bold tracking-wide">Birinchi taassurot – muvaffaqiyat kaliti!</h2>
          <p className="text-[14px] md:text-[18px] ">VortexCards bilan zamonaviy va interaktiv tashrif qog‘oziga ega bo‘ling. Brendingizni ajoyib tarzda namoyish qiling va raqobatchilaringizdan ajralib turing!</p>
          <div className="mt-[30px] lg:mt-[150px] flex flex-col lg:flex-row gap-[30px] flex-wrap">
            <Link className="bg-[#f5f5f7] text-black rounded-[12px] text-center px-[15px] py-[10px]" href={'#contact'}>Biz bilan bog'lanish</Link>
            <Link className="bg-transparent border text-black border-black dark:text-white dark:border-white  rounded-[12px] px-[15px] py-[10px] text-center" href={'/individual/shaxruzbek-xamzayev'}>Demo versiyani oling</Link>
          </div>
          <div className="flex items-center gap-[10px] relative isolate flex-wrap justify-center lg:justify-start mt-[40px] lg:mt-0">
            <div className="bg-[#1b1f3b] text-white py-[10px] px-[20px] rounded-[12px]">
              <span>Ijtimoiy tarmoqlar</span>
            </div>
            <div className="bg-[#1b1f3b] text-white py-[10px] px-[20px] rounded-[12px]">
              <span>Veb-sayt</span>
            </div>
            <div className="bg-[#1b1f3b] text-white py-[10px] px-[20px] rounded-[12px]">
              <span>Portfolio</span>
            </div>
            <div className="bg-[#1b1f3b] text-white py-[10px] px-[20px] rounded-[12px]">
              <span>Mini-sayt</span>
            </div>
            <div className="bg-[#1b1f3b] text-white py-[10px] px-[20px] rounded-[12px]">
              <span>Xizmatlar</span>
            </div>
          </div>
        </div>
        <Image src={Cards} alt="cards" className="w-full lg:w-[40%] hidden lg:block"/>
      </main>
          ) : ('')
        }
    </div>
    
  )
}
