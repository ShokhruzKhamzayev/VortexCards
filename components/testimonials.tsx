'use client'

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import CustomImage from "./ui/customImage"

const testimonials = [
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
    {
        img: '/testimonials1.png',
        fullName: 'Bakhodir Ayupov',
        position: 'CEO of IT Park University',
        comment: 'Juda foydali va zarur mahsulot, ayniqsa, mening ish faoliyatimda, doimiy uchrashuvlar va hamkorlar bilan muzokaralarni inobatga olsak. Menimcha, bu zamonaviy tendensiyalar va texnologiyalarga mos keladigan juda dolzarb yechim.'
    },
]

export default function Testimonials() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])
  return (
    <div className="py-[40px]">
        <h1 className="text-[26px] font-semibold custom-container">Bizning ajoyib foydalanuvchilarimiz nima deyishadi</h1>
        <div>
        <div className="embla overflow-hidden cursor-grab" ref={emblaRef}>      
            <div className="embla__container flex mt-[30px]">
                {
                    testimonials.map((testimonial, idx) => (
                        <div key={idx} className="embla__slide flex-[0_0_98%] md:flex-[0_0_48.333%] lg:flex-[0_0_25%] mx-[30px] bg-[#f5f5f7] py-[10px] px-[15px] rounded-[16px]">
                            <div className="w-full flex items-center gap-[10px]">
                                <div className="relative w-[70px] h-[70px]">
                                    <CustomImage src={testimonial.img} alt={testimonial.fullName} classname="rounded-full "/>
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-semibold">{testimonial.fullName}</h3>
                                    <p className="text-[14px] font-medium">{testimonial.position}</p>
                                </div>
                            </div>
                            <p className="italic mt-[15px]">{`"${testimonial.comment}"`}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}
