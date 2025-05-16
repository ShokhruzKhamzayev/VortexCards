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
      <Link href={`/${params.locale}#main`}>{t("home.nav.main")}</Link>
      <Link href={`/${params.locale}#info`}>{t("home.nav.info")}</Link>
      <Link href={`/${params.locale}#plans`}>{t("home.nav.plan")}</Link>
      <Link href={`/${params.locale}#users`}>{t("home.nav.cliets")}</Link>
      <Link href={`/${params.locale}#usage`}>{t("home.nav.how")}</Link>
      <Link href={`/${params.locale}#contact`}>{t("home.nav.contact")}</Link>
    </nav>
  )
}
