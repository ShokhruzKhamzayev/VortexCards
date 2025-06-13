'use client'

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import CustomImage from "./ui/customImage"
import { useTranslations } from "next-intl"

export default function Testimonials() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])
    const t = useTranslations('home.testimonials')

    const testimonials = [
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
        {
            img: '/testimonials1.png',
            fullName: 'Bakhodir Ayupov',
            position: 'CEO of IT Park University',
            comment: t("testimonials.first.testimonial")
        },
    ]
  return (
    <div className="py-[40px] mb-[50px]">
        <h1 className="text-[26px] font-semibold custom-container">{t("title")}</h1>
        <div>
        <div className="embla overflow-hidden cursor-grab" ref={emblaRef}>      
            <div className="embla__container flex mt-[30px]">
                {
                    testimonials.map((testimonial, idx) => (
                        <div key={idx} className="embla__slide flex-[0_0_98%] md:flex-[0_0_48.333%] lg:flex-[0_0_25%] mx-[30px] px-[20px]">
                            <div className="py-[10px] px-[15px]  bg-[#f5f5f7] dark:bg-[#1f1e20] rounded-[16px]">
                            <div className="w-full flex items-center gap-[10px]">
                                <div className="relative w-[70px] h-[70px]">
                                    <CustomImage load="lazy" src={testimonial.img} alt={testimonial.fullName} classname="rounded-full "/>
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-semibold">{testimonial.fullName}</h3>
                                    <p className="text-[14px] font-medium">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="italic mt-[15px]">{`"${testimonial.comment}"`}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}
