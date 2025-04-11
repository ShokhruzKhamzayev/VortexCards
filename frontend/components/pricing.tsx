import Link from "next/link"
import { TiInputChecked } from "react-icons/ti"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogOverlay } from "@radix-ui/react-dialog"
import DialogForm from "./ui/dialogForm"

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
    <div className="custom-container pt-[130px] pb-[60px] rounded-[20px]" id="plans">
        <div className="text-center px-[20px] space-y-[20px]">
            <h1 className="text-[26px] md:text-[32px] font-semibold">Uzbek Business Connect tariflari</h1>
            <p className="font-medium">20 dan ortiq raqamli biznes kartalar/mini-saytlar kerakmi?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] px-[10px] md:px-[30px] pt-[30px] pb-[30px] lg:pb-[60px]">
            {
                plans.map(plan => (
                    <div key={plan.title} className="custom_bg py-[45px] px-[20px] rounded-[15px] relative">
                        {
                            plan.promo && (
                                <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#f5f5f7] text-black py-[10px] px-[15px] rounded-[13px] text-center">
                                    <span className="font-medium">{plan.promo}</span>
                                </div>
                            )
                        }
                        <div className="text-center">
                            <h3 className="text-[22px] font-medium">{plan.title}</h3>
                            <h2 className="text-[23px] font-medium py-[10px]"><span className="text-[26px] font-semibold">{plan.price} </span>so'm</h2>
                            <p>{plan.subs}</p>
                        </div>
                    <Dialog>
                    <DialogTrigger asChild>
                        <button className="bg-[#f5f5f7] text-black flex justify-center items-center border-slate-300 py-[12px] my-[10px] border rounded-[12px] w-full cursor-pointer">Planni tanlang</button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[850px]">
                        <DialogHeader>
                        <DialogTitle>{plan.title}</DialogTitle>
                        </DialogHeader>
                        <div>
                            <DialogForm/>
                        </div>
                    </DialogContent>
                    </Dialog>
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
