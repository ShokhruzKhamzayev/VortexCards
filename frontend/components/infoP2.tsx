import { getTranslations } from "next-intl/server"
import { BiMessage } from "react-icons/bi"
import { MdConnectWithoutContact } from "react-icons/md"
import { PiPresentationFill } from "react-icons/pi"

export default async function InfoPartTwo() {
    const t = await getTranslations('home.profit')
    const cards = [
        {
            icon: <BiMessage color="#5bacee" fill="white"/>,
            title: t('list.first.title'),
            desc: t('list.first.text')
        },
        {
            icon: <MdConnectWithoutContact color="#5bacee" fill="white"/>,
            title: t('list.second.title'),
            desc: t('list.second.text')
        },
        {
            icon: <PiPresentationFill color="#5bacee" fill="white"/>,
            title: t('list.third.title'),
            desc: t('list.third.text')
        }
    ]
  return (
    <div className="py-[130px]" id="usage">
        <div className="custom-container">
            <div className="text-center space-y-[20px] py-[40px]">
                <h1 className="text-[23px] md:text-[28px] lg:text-[35px] font-semibold text-balance">{t("title")}</h1>
                <p className="tracking-wider">{t("subheader")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-[20px]">
                {
                    cards.map((card, idx) => (
                        <div key={idx} className="space-y-[13px] bg-[#f5f5f7] dark:bg-[#1f1e20] py-[20px] px-[25px] rounded-[16px]">
                            <div className="bg-blue-700 rounded-full p-[10px] w-fit">
                                {card.icon}
                            </div>
                            <h1 className="text-[19px] font-semibold">{card.title}</h1>
                            <p className="font-medium">{card.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
