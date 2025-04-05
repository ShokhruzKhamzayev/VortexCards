import { BiMessage } from "react-icons/bi"
import { MdConnectWithoutContact } from "react-icons/md"
import { PiPresentationFill } from "react-icons/pi"

const cards = [
    {
        icon: <BiMessage color="#5bacee" fill="white"/>,
        title: 'Ko‘proq tavsiyalar va mijozlar jalb qiling',
        desc: "Potentsial va hozirgi mijozlaringizga bir tugmani bosish orqali sizga elektron pochta xabarlari, qo'ng'iroqlar va matnli xabarlar yuborishiga ruxsat bering."
    },
    {
        icon: <MdConnectWithoutContact color="#5bacee" fill="white"/>,
        title: 'Xaridorlar bilan bog‘lanish osonlashadi',
        desc: "Ushbu tezkor NFC bilan jihozlangan tashrif qog'ozlar ma'lumot va kontaklar almashishni osonlashtiradi va ishingizni yanada mukammalashtiradi."
    },
    {
        icon: <PiPresentationFill color="#5bacee" fill="white"/>,
        title: 'Ishlaringizni qiyinchiliksiz ko\'rsating',
        desc: "Har safar telegramni ochib o'z servisingizni taqdim qilishdan charchagandirsiz. Ushbu kartalar siz xohlagan ma'lumotlarni o'z ichida saqlaydi."
    }
]

export default function InfoPartTwo() {
  return (
    <div className="py-[130px] mt-[20px] bg-white dark:bg-black" id="usage">
        <div className="custom-container">
            <div className="text-center space-y-[20px] py-[40px]">
                <h1 className="text-[23px] md:text-[28px] lg:text-[35px] font-semibold text-balance">Ko'proq daromad olishingizga yordam berish uchun mo'ljallangan</h1>
                <p className="tracking-wider">Potentsial mijozlar mini-saytingizga tashrif buyurganida, ko'proq takliflarni oling va ko'proq bitimlar tuzing.</p>
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
