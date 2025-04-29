import { YouTubeEmbed } from "@next/third-parties/google"
import Image from "next/image"
import { getTranslations } from 'next-intl/server';

export default async function InfoEntry() {
  const t = await getTranslations('home.infoVideo');
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
            <p><span className="font-semibold">{t("text")}</span><br /> <br /> {t("textCon")}</p>
            
        </div>
    </div>
  )
}
