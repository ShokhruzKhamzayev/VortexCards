import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="custom_bg">
      <Header/>
      <main className="custom-container py-[50px]">
        <div className="space-y-[20px]">
          <h1 className="text-[26px] md:text-[35px] lg:text-[55px] font-semibold ">Sizga kerak bo'ladigan so'ngi tashrif qog'ozi!</h1>
          <p className="uppercase text-[19px] md:text-[23px] ">BIRINCHI MULOQOT NUQTASIDA O‘ZINGIZNI BRENDLANG, POZITSIYALANG VA AJRATING.</p>
          <div className="space-x-[15px] mt-[150px]">
            <Link className="bg-white border text-black border-white rounded-[12px] px-[15px] py-[10px]" href={'/'}>Biz bilan bog'lanish</Link>
            <Link className="bg-transparent border text-white border-white rounded-[12px] px-[15px] py-[10px]" href={'/'}>Demo versitani oling</Link>
          </div>
          <div className="flex items-center gap-[10px]">
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
      </main>
    </div>
  );
}
