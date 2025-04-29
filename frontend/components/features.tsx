import { PiStickerLight } from "react-icons/pi";

import Image from "next/image";
import { FaIdCard, FaInstagram } from 'react-icons/fa6';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { getTranslations } from "next-intl/server";

export async function Features() {
  const t = await getTranslations("home.fullInfo")
  const items = [
    {
      title: t("cards.first.title"),
      description: t("cards.first.desc"),
      header: <Image src={'/stiker.png'} alt="sticker" width={150} height={150} className="border border-black rounded-full dark:border-white "/>,
      icon: <PiStickerLight className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("cards.second.title"),
      description: t("cards.second.desc"),
      header: <Image src={'/card.jpg'} alt="sticker" width={250} height={100} className="border border-black dark:border-white rounded-[15px]"/>,
      icon: <FaIdCard className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("cards.third.title"),
      description: t("cards.third.desc"),
      header: <Image src={'/braclet.png'} alt="sticker" width={150} height={150}/>,
      icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("cards.fourth.title"),
      description: t("cards.fourth.desc"),
      header: <Image src={'/qr.png'} alt="sticker" width={150} height={150} />,
      icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("cards.fifth.title"),
      description: t("cards.fifth.desc"),
      header: <Image src={'/contact.png'} alt="sticker" width={150} height={150} />,
      icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <div className="bg-[#f5f5f7] dark:bg-[#1f1e20] pb-[30px]">
        <div className="custom-container text-center space-y-[20px] py-[40px]">
            <h1 className="text-[23px] md:text-[28px] lg:text-[35px] font-semibold text-balance">{t("title")}</h1>
            <p className="tracking-wider">{t("subheader")}</p>
        </div>
        <BentoGrid className="custom-container">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
    </BentoGrid>
    </div>
  );
}

