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
        ]
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {
                plans.map(plan => (
                    <div key={plan.title} className="bg-[#d461bd] py-[13px] px-[20px]">
                        <div className="text-center">
                            <h3>{plan.title}</h3>
                            <h2><span>{plan.price} so'm</span></h2>
                            <p>{plan.subs}</p>
                        </div>
                        <Link href={'/'}>Planni tanlang</Link>
                        <div>
                            {
                                plan.amenities.map((amenity, idx) => (
                                    <div key={idx}>
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
