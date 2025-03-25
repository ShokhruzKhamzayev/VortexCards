'use client'

import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import CustomImage from "./ui/customImage"
import Link from "next/link"

const users = [ 
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
    {
        title: 'Direktor - Uzbek Business Connect',
        image: '/userPreview1.jpg'
    },
]

export default function UsersInfo() {
    const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])
  return (
    <div className="bg-black text-white pt-[130px] pb-[100px]" id="users">
        <div className="starter space-y-[20px] text-center custom-container">
            <h1 className="text-[25px] md:text-[32px] lg:text-[39px] font-semibold">Ko'proq daromad olishingizga yordam berish uchun mo'ljallangan</h1>
            <p className="tracking-wider font-medium">Potentsial mijozlar mini-saytingizga tashrif buyurganida, ko'proq takliflarni oling va ko'proq bitimlar tuzing.</p>
        </div>
        <div className="embla overflow-hidden cursor-grab" ref={emblaRef}>      
            <div className="embla__container flex mt-[30px]"> 
                {
                    users.map((user, idx) => (
                        <div className="embla__slide w-full px-[30px] text-center flex-[0_0_98%] md:flex-[0_0_48.333%] lg:flex-[0_0_30.333%]" key={idx}>
                            <div className="bg-[#1f1e20]  pt-[20px] px-[30px] rounded-[12px]">
                                <h1 className="mb-[10px] font-medium text-[20px]">{user.title}</h1>
                                <div className="w-full h-[400px] relative overflow-hidden">
                                    <CustomImage src={user.image} alt={user.title} classname="object-contain"/>
                                </div>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
        <div className="invitation custom_bg custom-container rounded-[20px]">
            <div className="mt-[40px] flex flex-col justify-center items-center lg:flex-row lg:justify-between p-[30px] gap-[30px]">
                <h3 className="text-center font-semibold text-[23px] md:text-[30px] max-w-full lg:max-w-[40%] lg:text-left">Biz kontentni to‘ldirish va tashrif qog‘ozini yaratish bilan shug‘ullanamiz.</h3>
                <Link href={'/'} className="text-black bg-white py-[14px] px-[20px] rounded-[13px]">Biz bilan bog'lanish</Link>
            </div>
        </div>
    </div>
  )
}
