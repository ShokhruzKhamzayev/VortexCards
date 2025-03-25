import { FaInstagram, FaTelegram } from "react-icons/fa6";
import FormContact from "./formContact";
import CustomImage from "./ui/customImage";

export default function Contact() {
  return (
    <div className="my-[60px]">
        <div className="flex custom-container custom_bg pt-[40px] pl-[50px] rounded-[20px] items-end justify-between flex-col lg:flex-row">
          <div className="pb-[30px] w-full lg:w-1/2">
              <h1 className="text-[25px] font-semibold text-balance mb-[40px]">Ilova haqida ko'proq ma'lumot olish uchun biz bilan bog'laning</h1>
              <FormContact/>
              <div className="flex justify-between mt-[25px]">
                <div>
                  <span>Social networks</span>
                  <div className="flex items-center gap-[20px]">
                    <a href="#">
                      <FaTelegram/>
                    </a>
                    <a href="#">
                      <FaInstagram/>
                    </a>
                  </div>
                </div>
                <div>
                  <p>Telefon raqami</p>
                  <a href="#">+998 91 986 68 98</a>
                </div>
                <div>
                  <p>Elektron pochta</p>
                  <a href="#">support@vortexhub.uz</a>
                </div>
              </div>
              <a href="#" className="flex items-center justify-between text-black bg-white py-[16px] px-[25px] rounded-[16px] mt-[35px]">
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
