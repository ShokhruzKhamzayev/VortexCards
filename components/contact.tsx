import { FaInstagram, FaTelegram } from "react-icons/fa6";
import FormContact from "./formContact";
import CustomImage from "./ui/customImage";

export default function Contact() {
  return (
    <div className="pt-[130px] mb-[60px]" id="contact">
        <div className="flex custom-container custom_bg pt-[40px] px-[20px] lg:pl-[50px] rounded-[20px] items-end justify-between flex-col lg:flex-row">
          <div className="pb-[30px] w-full lg:w-1/2">
              <h1 className="text-[25px] font-semibold lg:text-balance mb-[40px] text-center lg:text-left">Ilova haqida ko'proq ma'lumot olish uchun biz bilan bog'laning</h1>
              <FormContact/>
              <div className="flex justify-between mt-[25px] flex-wrap">
                <div>
                  <span>Ijtimoiy tarmoqlar</span>
                  <div className="flex items-center gap-[20px] mt-[13px]">
                    <a className="bg-white rounded-full p-[13px]" href="https://t.me/vortexhubb">
                      <FaTelegram color="black" size={25}/>
                    </a>
                    <a className="bg-white rounded-full p-[13px]" href="https://www.instagram.com/vortex_hub/">
                      <FaInstagram color="black" size={25}/>
                    </a>
                  </div>
                </div>
                <div>
                  <p>Telefon raqami</p>
                  <a href="tel:+998919866898" className="mt-[10px] block bg-white text-black py-[13px] px-[20px] rounded-[13px]">+998 91 986 68 98</a>
                </div>
                <div>
                  <p>Elektron pochta</p>
                  <a className="mt-[10px] block bg-white text-black py-[13px] px-[20px] rounded-[13px]" href="mailto:support@vortexhub.uz">support@vortexhub.uz</a>
                </div>
              </div>
              <a href="https://t.me/Khamzayev_Shokhruz" className="flex items-center justify-between text-black bg-white py-[16px] px-[25px] rounded-[16px] mt-[35px] flex-col lg:flex-row gap-[20px]">
                <div>
                  <p>Tez aloqa uchun</p>
                  <span>+998 91 986 68 98</span>
                </div>
                <div className="flex items-center gap-[5px]">
                  <span>@vortexhub</span>
                  <span><FaTelegram color="blue"/></span>
                </div>
              </a>
          </div>
          <div className="relative w-full lg:w-1/2 h-[400px] overflow-hidden hidden lg:block">
              <CustomImage src={'/contact_photo.png'} alt="contact menu photo" classname="object-contain"/>
          </div>
      </div>
    </div>
  )
}
