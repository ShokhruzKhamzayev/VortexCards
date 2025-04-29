'use client'

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Nav({className}: {
  className?: string,
}) {
  const t = useTranslations();
  return (
    <nav className={cn("space-x-[20px]", className)}>
      <Link href={'/#main'}>{t("home.nav.main")}</Link>
      <Link href={'/#info'}>{t("home.nav.info")}</Link>
      <Link href={'/#plans'}>{t("home.nav.plan")}</Link>
      <Link href={'/#users'}>{t("home.nav.cliets")}</Link>
      <Link href={'/#usage'}>{t("home.nav.how")}</Link>
      <Link href={'/#contact'}>{t("home.nav.contact")}</Link>
    </nav>
  )
}
