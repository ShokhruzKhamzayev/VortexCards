import Link from "next/link"
import { TiInputChecked } from "react-icons/ti"

const plans = [
    {
        title: 'Yagona reja',
        price: "2,500,000",
        subs: "Yiliga 650 000 so'mga avtomatik yangilash",
        amenities: [
            '1 Mini portfolio', '1 NFC karta', '1 NFC stiker', '1 NFC braslet', '1 Yillik xizmat*'
        ]
    },
    {
        title: 'Katta jamoa',
        price: "1,000,000",
        subs: "Yiliga 650 000 so'mga avtomatik yangilash",
        amenities: [
            '12 Mini portfolio', '12 NFC karta', '12 NFC stiker', '12 NFC braslet', '1 Yillik xizmat*'
        ],
        promo: 'Eng mashhur tarif'
    },
    {
        title: 'Kichik jamoa',
        price: '1,500,000',
        subs: "Yiliga 650 000 so'mga avtomatik yangilash",
        amenities: [
            '6 Mini portfolio', '6 NFC karta', '6 NFC stiker', '6 NFC braslet', '1 Yillik xizmat*'
        ]
    },
]

export default function Pricing() {
  return (
    <div className="custom-container custom_bg pt-[60px] rounded-[20px]">
        <div className="text-center">
            <h1 className="text-[26px] md:text-[32px] font-semibold">Uzbek Business Connect tariflari</h1>
            <p className="font-medium">20 dan ortiq raqamli biznes kartalar/mini-saytlar kerakmi?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] px-[30px] pt-[30px] pb-[30px] lg:pb-[60px]">
            {
                plans.map(plan => (
                    <div key={plan.title} className="bg-[#d461bd] py-[45px] px-[20px] rounded-[15px] relative">
                        {
                            plan.promo && (
                                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#1878f3] py-[10px] px-[15px] rounded-[13px] text-center">
                                    <span className="font-medium">{plan.promo}</span>
                                </div>
                            )
                        }
                        <div className="text-center">
                            <h3 className="text-[22px] font-medium">{plan.title}</h3>
                            <h2 className="text-[23px] font-medium py-[10px]"><span className="text-[26px] font-semibold">{plan.price} </span>so'm</h2>
                            <p>{plan.subs}</p>
                        </div>
                        <Link href={'/'} className="bg-[#c472c9] flex justify-center items-center border-slate-300 py-[12px] my-[10px] border rounded-[12px]">Planni tanlang</Link>
                        <div className="space-y-[15px] mt-[20px]">
                            {
                                plan.amenities.map((amenity, idx) => (
                                    <div className="flex items-center gap-[7px]" key={idx}>
                                        <TiInputChecked/>
                                        <span>{amenity}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
