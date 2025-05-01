import Footer from "@/components/footer"
import Header from "@/components/header"
import { getTranslations } from "next-intl/server"


export default async function Privacy() {
  const t = await getTranslations('privacy')
  const content = {
    terms: [
      {
        title: t("terms.first.title"),
        desc: (
          <p>{t("terms.first.content")}</p>
        )
      },
      {
        title: t("terms.second.title"),
        desc: (
          <ul>
            <li>{t("terms.second.list1")}</li>
            <li>{t("terms.second.list2")}</li>
          </ul>
        )
      },
      {
        title: t("terms.third.title"),
        desc: (
          <ul>
            <li>{t("terms.third.list1")}</li>
            <li>{t("terms.third.list2")}</li>
          </ul>
        )
      },
      {
        title: t("terms.fourth.title"),
        desc: (
          <>
            <p>{t("terms.fourth.text")}</p>
            <ul>
              <li>{t("terms.fourth.list1")}</li>
              <li>{t("terms.fourth.list2")}</li>
              <li>{t("terms.fourth.list3")}</li>
            </ul>
          </>
        )
      },
      {
        title: t("terms.fifth.title"),
        desc: (
          <p>{t("terms.fifth.content")}</p>
        )
      },
      {
        title: t("terms.sixth.title"),
        desc: (
          <p>{t("terms.sixth.content")}</p>
        )
      },
      {
        title: t("terms.seventh.title"),
        desc: (
          <p>{t('terms.seventh.content')}</p>
        )
      },
      {
        title: t('terms.eighth.title'),
        desc: (
          <>
            <p>{t('terms.eighth.content')}
            </p>
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <a href="mailto:support@vortexhub.uz">📩 support@vortexhub.uz</a>
              <a href="tel:+998919866898">📞 +998 91 986 68 98</a>
            </div>
          </>
        )
      },
    ],
    privacy: [
      {
        title: t("privacy.first.title"),
        desc: (
          <p>{t("privacy.first.content")}</p>
        )
      },
      {
        title: t("privacy.second.title"),
        desc: (
          <>
            <p>{t("privacy.second.content")}</p>
            <ul className="my-[10px]">
              <li>{t("privacy.second.list1")}</li>
              <li>{t("privacy.second.list2")}</li>
              <li>{t("privacy.second.list3")}</li>
              <li>{t("privacy.second.list4")}</li>
              <li>{t("privacy.second.list5")}</li>
            </ul>
          </>
        )
      },
      {
        title: t("privacy.third.title"),
        desc: (
          <>
            <p>{t("privacy.third.content")}</p>
            <ul>
              <li>{t("privacy.third.list1")}</li>
              <li>{t("privacy.third.list2")}</li>
              <li>{t("privacy.third.list3")}</li>
            </ul>
          </>
        )
      },
      {
        title: t("privacy.fourth.title"),
        desc: (
          <p>{t("privacy.fourth.content")}</p>
        )
      },
      {
        title: t("privacy.fifth.title"),
        desc: (
          <p>{t("privacy.fifth.content")}</p>
        )
      },
      {
        title: t("privacy.sixth.title"),
        desc: (
          <>
            <p>{t("privacy.sixth.content")}</p>
            <ul>
              <li>{t("privacy.sixth.list1")}</li>
              <li>{t("privacy.sixth.list2")}</li>
              <li>{t("privacy.sixth.list3")}</li>
            </ul>
          </>
        )
      },
      {
        title: t("privacy.seventh.title"),
        desc: (
          <>
            <p>{t("privacy.seventh.content")}
            </p>
            <div className="flex flex-col gap-[10px] mt-[10px]">
              <a href="#">📩 support@uzbusinessconnect.uz</a>
              <a href="#">📞 +998 (XX) XXX-XX-XX</a>
            </div>
          </>
        )
      }
    ]
  }
  return (
    <div>
        <Header withMain={false}/>
        <div className="flex items-start justify-between custom-container py-[40px]">
          <div className="w-[48%]">
            <h1 className="text-center text-3xl font-bold mb-[15px]">{t("starter.privacy")}</h1>
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
            <h1 className="text-center text-3xl font-bold mb-[15px]">{t("starter.terms")}</h1>
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
