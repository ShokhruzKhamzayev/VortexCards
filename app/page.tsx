import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

import Cards from '../public/cards.png'
import InfoEntry from "@/components/infoEntry";
import UsersInfo from "@/components/usersInfo";
import { Features } from "@/components/features";
import InfoPartTwo from "@/components/infoP2";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
    <div className="custom_bg rounded-b-[20px]">
      <Header/>
      <main id="main" className="custom-container py-[50px] flex items-center flex-col gap-[30px] lg:gap-0 lg:flex-row">
        <div className="space-y-[20px] isolate z-[20] w-full lg:w-[60%]">
          <h1 className="text-[26px] md:text-[35px] lg:text-[55px] font-semibold ">Sizga kerak bo'ladigan so'ngi tashrif qog'ozi!</h1>
          <p className="uppercase text-[19px] md:text-[23px] ">BIRINCHI MULOQOT NUQTASIDA O‘ZINGIZNI BRENDLANG, POZITSIYALANG VA AJRATING.</p>
          <div className="mt-[150px] flex flex-col lg:flex-row gap-[30px] flex-wrap">
            <Link className="bg-white border text-black border-white rounded-[12px] text-center px-[15px] py-[10px]" href={'/'}>Biz bilan bog'lanish</Link>
            <Link className="bg-transparent border text-white border-white rounded-[12px] px-[15px] py-[10px] text-center" href={'/'}>Demo versitani oling</Link>
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
      <InfoEntry/>
      <UsersInfo/>
      <Features/>
      <InfoPartTwo/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}
