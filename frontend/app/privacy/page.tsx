import Footer from "@/components/footer"
import Header from "@/components/header"

const content = {
  terms: [
    {
      title: '1. Umumiy shartlar',
      desc: (
        <p>Ushbu veb-saytdan foydalanish orqali siz quyidagi shartlarga rozilik bildirasiz. Agar ushbu shartlarga rozi bo‘lmasangiz, iltimos, xizmatlarimizdan foydalanmang.</p>
      )
    },
    {
      title: '2. Xizmatdan foydalanish huquqi',
      desc: (
        <ul>
          <li>Foydalanuvchi o‘z shaxsiy ma’lumotlarini to‘g‘ri va haqqoniy kiritishi kerak</li>
          <li>Xizmat faqat qonuniy va maqsadga muvofiq ishlatilishi lozim</li>
        </ul>
      )
    },
    {
      title: '3. Foydalanuvchining majburiyatlari',
      desc: (
        <ul>
          <li>Xizmatimizdan faqat qonuniy maqsadlarda foydalanish</li>
          <li>Shaxsiy ma’lumotlaringizni xavfsiz saqlash</li>
          <li>Xizmatdan foydalanishda hech qanday zararli yoki noqonuniy faoliyat yuritmaslik</li>
        </ul>
      )
    },
    {
      title: '4. Xizmatlarning cheklovlari',
      desc: (
        <>
          <p>Uzbek Business Connect quyidagi holatlarda foydalanuvchining hisobini to‘xtatish yoki bekor qilish huquqiga ega:</p>
          <ul>
            <li>Soxta yoki firibgarlik maqsadida xizmatdan foydalanish</li>
            <li>Uchinchilarga zarar yetkazuvchi kontent joylash</li>
            <li>Veb-sayt yoki tizim xavfsizligiga tahdid qilish</li>
          </ul>
        </>
      )
    },
    {
      title: '5. Intellektual mulk huquqlari',
      desc: (
        <p>Ushbu veb-saytda joylashgan barcha matnlar, rasmlar, logotiplar va dizaynlar Uzbek Business Connect’ga tegishli. Foydalanuvchilar ushbu materiallardan faqat shaxsiy yoki notijorat maqsadlarda foydalanishlari mumkin.</p>
      )
    },
    {
      title: '6. Javobgarlik cheklovi',
      desc: (
        <p>Biz xizmatlarimizning doimiy ishlashiga va ma’lumotlarning to‘g‘riligiga harakat qilamiz, biroq texnik nosozliklar yoki uchinchi tomon ta’siridan kelib chiqqan muammolar uchun javobgar emasmiz.</p>
      )
    },
    {
      title: '7. Shartlarning o‘zgarishi',
      desc: (
        <p>Uzbek Business Connect istalgan vaqtda ushbu shartlarni o‘zgartirish huquqini saqlab qoladi. O‘zgarishlar veb-saytda e’lon qilingan kundan boshlab kuchga kiradi.</p>
      )
    },
    {
      title: '8. Biz bilan bog‘lanish',
      desc: (
        <>
          <p>Agar sizda ushbu shartlar bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘lanishingiz mumkin:
          </p>
          <div className="flex flex-col gap-[10px]">
            <a href="mailto:support@vortexhub.uz">📩 support@vortexhub.uz</a>
            <a href="tel:+998919866898">📞 +998 91 986 68 98</a>
          </div>
        </>
      )
    },
  ],
  privacy: [
    {
      title: '1. Kirish',
      desc: (
        <p>Ushbu maxfiylik siyosati Uzbek Business Connect foydalanuvchilarining shaxsiy ma’lumotlarini qanday to‘plashimiz, saqlashimiz va ishlatishimiz haqida tushuncha beradi. Biz sizning maxfiyligingizni hurmat qilamiz va shaxsiy ma’lumotlaringiz xavfsizligini ta’minlashga harakat qilamiz.</p>
      )
    },
    {
      title: '2. Qanday ma’lumotlarni yig‘amiz?',
      desc: (
        <>
          <p>Biz quyidagi ma’lumotlarni yig‘ishimiz mumkin:</p>
          <ul>
            <li>Ism, familiya</li>
            <li>Telefon raqami va elektron pochta manzili</li>
            <li>Tashkilot nomi va lavozim</li>
            <li>Veb-saytingiz yoki ijtimoiy tarmoq profilingiz ma’lumotlari</li>
            <li>IP-manzil va qurilma ma’lumotlari</li>
          </ul>
        </>
      )
    },
    {
      title: '3. Ma’lumotlaringiz qanday ishlatiladi?',
      desc: (
        <>
          <p>Biz foydalanuvchilarning shaxsiy ma’lumotlarini quyidagi maqsadlarda ishlatamiz:</p>
          <ul>
            <li>Profilingizni yaratish va xizmatimizdan foydalanish imkonini berish</li>
            <li>Aloqa o‘rnatish va xizmat ko‘rsatish sifatini yaxshilash</li>
            <li>Yangi xizmatlar va aksiyalar haqida xabar berish</li>
          </ul>
        </>
      )
    },
    {
      title: '4. Shaxsiy ma’lumotlaringizni uchinchi tomon bilan bo‘lishamizmi?',
      desc: (
        <p>Yo‘q, sizning shaxsiy ma’lumotlaringiz uchinchi shaxslar bilan sizning ruxsatingizsiz ulashilmaydi. Faqat qonuniy talab bo‘lsa yoki xavfsizlik choralarini ta’minlash uchun tegishli organlarga taqdim etilishi mumkin.</p>
      )
    },
    {
      title: '5. Cookie fayllardan foydalanish',
      desc: (
        <p>Biz veb-saytimiz tajribasini yaxshilash uchun cookie-fayllardan foydalanamiz. Siz istalgan vaqtda cookie sozlamalarini o‘zgartirishingiz mumkin.</p>
      )
    },
    {
      title: '6. Foydalanuvchi huquqlari',
      desc: (
        <>
          <p>Siz quyidagi huquqlarga egasiz:</p>
          <ul>
            <li>O‘z ma’lumotlaringizni ko‘rish, o‘zgartirish yoki o‘chirish</li>
            <li>Bizning marketing xabarlarimizdan voz kechish</li>
            <li>Ma’lumotlaringizni o‘chirishni talab qilish</li>
          </ul>
        </>
      )
    },
    {
      title: '8. Biz bilan bog‘lanish',
      desc: (
        <>
          <p>Agar sizda ushbu shartlar bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘lanishingiz mumkin:
          </p>
          <div className="flex flex-col gap-[10px]">
            <a href="#">📩 support@uzbusinessconnect.uz</a>
            <a href="#">📞 +998 (XX) XXX-XX-XX</a>
          </div>
        </>
      )
    }
  ]
}

export default function Privacy() {
  return (
    <div>
        <Header withMain={false}/>
        <div className="flex items-start justify-between custom-container py-[40px]">
          <div className="w-[48%]">
            <h1 className="text-center text-3xl font-bold mb-[15px]">Maxfiylik siyosati</h1>
            {
              content.privacy.map(cnt => (
                <div key={cnt.title} className="py-[10px]">
                  <h3 className="font-semibold tracking-wide text-xl pb-[10px]">{cnt.title}</h3>
                  <div className="pl-[20px]">
                    {cnt.desc}
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-[48%]">
            <h1 className="text-center text-3xl font-bold mb-[15px]">Foydalanish shartlari</h1>
            {
              content.terms.map(trm => (
                <div key={trm.title} className="py-[10px]">
                  <h3 className="font-semibold tracking-wide text-xl pb-[10px]">{trm.title}</h3>
                  <div className="pl-[20px]">
                    {trm.desc}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Footer/>
    </div>
  )
}
