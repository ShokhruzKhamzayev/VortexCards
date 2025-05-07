'use client'

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Nav({className}: {
  className?: string,
}) {
  const t = useTranslations();
  const params = useParams<{locale: string}>()
  return (
    <nav className={cn("space-x-[20px]", className)}>
      <Link locale={params.locale} href={'/#main'}>{t("home.nav.main")}</Link>
      <Link locale={params.locale} href={'/#info'}>{t("home.nav.info")}</Link>
      <Link locale={params.locale} href={'/#plans'}>{t("home.nav.plan")}</Link>
      <Link locale={params.locale} href={'/#users'}>{t("home.nav.cliets")}</Link>
      <Link locale={params.locale} href={'/#usage'}>{t("home.nav.how")}</Link>
      <Link locale={params.locale} href={'/#contact'}>{t("home.nav.contact")}</Link>
    </nav>
  )
}
