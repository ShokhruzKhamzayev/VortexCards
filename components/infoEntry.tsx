import { YouTubeEmbed } from "@next/third-parties/google"
import Image from "next/image"

export default function InfoEntry() {
  return (
    <div className="custom-container flex justify-between items-center pt-[130px] pb-[80px] flex-col lg:flex-row gap-[30px]" id="info">
        <div className="relative w-full lg:w-[47%]">
            <YouTubeEmbed videoid="D6qS1eJBARs"/>
        </div>
        <div className="w-full lg:w-[47%] text-center lg:text-left lg:m-0">
            <div className="flex gap-[10px] items-center pb-[20px] justify-center">
                <Image src={'/logo.png'} alt="our logo" width={100} height={80}/>
                <h1>VortexCards</h1>
            </div>
            {/* <p><span className="font-semibold">Uzbek Business Connect kuchli marketing va qidiruv vositasi bo‘lib, u sizga birinchi aloqa nuqtasida darhol o‘zingizni esda qolarli ko‘rinishda ko‘rsatishga va sizni yagona mantiqiy tanlov sifatida ko‘rsatishga yordam beradi. </span><br /> <br /> U yuqori darajadagi istiqbollar bilan bog'lanish, marketing xabaringizni etkazish va baxtli mijozlarga aylanadigan suhbatlarda qatnashish imkonini berish uchun mo'ljallangan.</p> */}
            <p>📲 Raqamli karta bilan o‘z biznesingizni rivojlantiring! <br/>
💼 Bir necha soniyada aloqalarni o‘rnatish imkoniyati! <br/>
🌎 Global miqyosda mijozlar bilan bog‘laning!</p>
        </div>
    </div>
  )
}
