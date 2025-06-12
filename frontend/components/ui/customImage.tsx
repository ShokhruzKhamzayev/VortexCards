'use client'

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function CustomImage({ src, alt, classname, load }: {
    src: StaticImageData | string,
    alt: string,
    classname?: string,
    load: "eager" | "lazy"
}) {
    const [loading, setLoading] = useState(true)
    return (
        <Image src={src} alt={alt || ""} fill className={cn(`transition-all duration-500 ${loading ? "blur-3xl grayscale z-[1] scale-125" : "scale-100 blur-0 grayscale-0"}`, classname)} onLoad={(() => { setLoading(false) })} loading={load} />
    )
}