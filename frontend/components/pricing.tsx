import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { TiInputChecked } from "react-icons/ti"
import DialogForm from "./ui/dialogForm"
import { getTranslations } from "next-intl/server"

export default async function Pricing() {
    const t = await getTranslations('home.pricing')
    const plans = [
        {
            title: t("plans.first.title"),
            price: t("plans.first.price"),
            subs: t("plans.first.renewal"),
            amenities: [
                t("plans.first.benefits.first"), t("plans.first.benefits.second"), t("plans.first.benefits.third"), t("plans.first.benefits.fourth"), t("plans.first.benefits.fifth"),
            ]
        },
        {
            title: t("plans.second.title"),
            price: t("plans.second.price"),
            subs: t("plans.second.renewal"),
            amenities: [
                t("plans.second.benefits.first"), t("plans.first.benefits.second"), t("plans.second.benefits.third"), t("plans.second.benefits.fourth"), t("plans.second.benefits.fifth"),
            ],
            promo: t("plans.second.promo")
        },
        {
            title: t("plans.third.title"),
            price: t("plans.third.price"),
            subs: t("plans.third.renewal"),
            amenities: [
                t("plans.third.benefits.first"), t("plans.third.benefits.second"), t("plans.third.benefits.third"), t("plans.third.benefits.fourth"), t("plans.third.benefits.fifth"),
            ]
        },
    ]
  return (
    <div className="custom-container pt-[130px] pb-[60px] rounded-[20px]" id="plans">
        <div className="text-center px-[20px] space-y-[20px]">
            <h1 className="text-[26px] md:text-[32px] font-semibold">{t("title")}</h1>
            <p className="font-medium">{t("subheader")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] px-[10px] md:px-[30px] pt-[30px] pb-[30px] lg:pb-[60px] mt-[20px]">
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
                            <h2 className="text-[23px] font-medium py-[10px]"><span className="text-[26px] font-semibold">{plan.price} </span></h2>
                            <p>{plan.subs}</p>
                        </div>
                    <Dialog>
                    <DialogTrigger asChild>
                        <button className="bg-[#f5f5f7] text-black flex justify-center items-center border-slate-300 py-[12px] my-[10px] border rounded-[12px] w-full cursor-pointer">{t("button")}</button>
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
