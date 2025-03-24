import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {FaInstagram} from 'react-icons/fa6'
import Image from "next/image";

export function Features() {
  return (
    <div>
        <div className="custom-container text-center space-y-[20px] py-[40px]">
            <h1 className="text-[23px] md:text-[28px] lg:text-[35px] font-semibold text-balance">Uzbek Business Connect kartangizni ulashish va tavsiyanomalarni olishning 4 ta usuli</h1>
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Image src={'/stiker.png'} alt="sticker" width={150} height={150}/>,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Image src={'/card.png'} alt="sticker" width={250} height={100}/>,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Image src={'/braclet.png'} alt="sticker" width={150} height={150}/>,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Image src={'/qr.png'} alt="sticker" width={150} height={150} />,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Image src={'/contact.png'} alt="sticker" width={150} height={150} />,
    icon: <FaInstagram className="h-4 w-4 text-neutral-500" />,
  },
];
