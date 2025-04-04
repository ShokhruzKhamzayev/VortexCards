import { PiStickerLight } from "react-icons/pi";

import Image from "next/image";
import { FaIdCard, FaInstagram } from 'react-icons/fa6';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Features() {
  return (
    <div>
        <div className="custom-container text-center space-y-[20px] py-[40px]">
            <h1 className="text-[23px] md:text-[28px] lg:text-[35px] font-semibold text-balance">VortexCards sizga ushbu servislarni taqdim qiladi</h1>
            <p className="tracking-wider">BIRINCHI MULOQOT NUQTASIDA O‘ZINGIZNI BRENDLANG, POZITSIYALANG VA AJRATING.</p>
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
const items = [
  {
    title: "Smart brendlash ",
    description: "Raqamli tashrif kartangizni istalgan joyda baham ko‘ring",
    header: <Image src={'/stiker.png'} alt="sticker" width={150} height={150} className="border border-black rounded-full dark:border-white "/>,
    icon: <PiStickerLight className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jalb qiluvchi dizayn",
    description: "Karta brendingizni ta’sirchan qiladi",
    header: <Image src={'/card.jpg'} alt="sticker" width={250} height={100} className="border border-black dark:border-white rounded-[15px]"/>,
    icon: <FaIdCard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "NFC texnologiyasi",
    description: "Bir tegish bilan aloqalarni o‘rnatish.",
    header: <Image src={'/braclet.png'} alt="sticker" width={150} height={150}/>,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "QR kod ",
    description:
      "Telefon kamerasi orqali tezkor kirish.",
    header: <Image src={'/qr.png'} alt="sticker" width={150} height={150} />,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Oson kontakt almashish",
    description: "O'z websaytingizga raqamingizni biriktiramiz, endi raqam va ismlar aytib almashish tarixda qoldi.",
    header: <Image src={'/contact.png'} alt="sticker" width={150} height={150} />,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
];
