'use client'

import Image from "next/image";
import Nav from "./nav";
import ThemeSwitcher from "./themeSwitcher";
import { useEffect, useRef, useState } from "react";
import Cards from '../public/cards.png'
import Link from "next/link";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);

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
    <div>
      <div ref={navRef}
        className={`w-full transition-all duration-300  border-b border-slate-200  ${
          isFixed ? "fixed top-0 custom_bg shadow-md z-[9999] p-0" : "relative bg-transparent p-[10px]"
        }`}>
          <header className="custom-container flex justify-between items-center py-[15px]">
              <div className="flex items-center gap-[20px]">
                  <Image src={'/logo.png'} alt="the brand logo" width={70} height={70} className="rounded-[12px]"/>
                  <Nav className="hidden lg:flex"/>
              </div>
              <div className="flex items-center gap-[15px]">
                  <a href="tell:+998919866898" className="bg-[#ca65ce] rounded-[12px] py-[10px] px-[15px] hidden lg:block">+998919866898</a>
                  <ThemeSwitcher/>
              </div> 
          </header>
        </div>
        <main id="main" className={`custom-container py-[50px] flex items-center flex-col gap-[30px] lg:gap-0 lg:flex-row ${isFixed ? "pt-[200px]" : "pt-[50px]"}`}>
        <div className="space-y-[20px] isolate z-[20] w-full lg:w-[60%]">
          <h1 className="text-[26px] md:text-[35px] lg:text-[55px] font-semibold ">Sizga kerak bo'ladigan so'ngi tashrif qog'ozi!</h1>
          <p className="uppercase text-[19px] md:text-[23px] ">BIRINCHI MULOQOT NUQTASIDA O‘ZINGIZNI BRENDLANG, POZITSIYALANG VA AJRATING.</p>
          <div className="mt-[150px] flex flex-col lg:flex-row gap-[30px] flex-wrap">
            <Link className="bg-white border text-black border-white rounded-[12px] text-center px-[15px] py-[10px]" href={'#contact'}>Biz bilan bog'lanish</Link>
            <Link className="bg-transparent border text-white border-white rounded-[12px] px-[15px] py-[10px] text-center" href={'/individual/hamidov-sardorbek'}>Demo versitani oling</Link>
          </div>
          <div className="flex items-center gap-[10px] relative isolate flex-wrap">
            <div className="bg-[#ca65ce] py-[10px] px-[20px] rounded-[12px]">
              <span>Ijtimoiy tarmoqlar</span>
            </div>
            <div className="bg-[#ca65ce] py-[10px] px-[20px] rounded-[12px]">
              <span>Veb-sayt</span>
            </div>
            <div className="bg-[#ca65ce] py-[10px] px-[20px] rounded-[12px]">
              <span>Portfolio</span>
            </div>
            <div className="bg-[#ca65ce] py-[10px] px-[20px] rounded-[12px]">
              <span>Mini-sayt</span>
            </div>
            <div className="bg-[#ca65ce] py-[10px] px-[20px] rounded-[12px]">
              <span>Xizmatlar</span>
            </div>
          </div>
        </div>
        <Image src={Cards} alt="cards" className="w-full lg:w-[40%]"/>
      </main>
    </div>
    
  )
}
