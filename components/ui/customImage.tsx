'use client'

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function CustomImage({ src, alt, classname }: {
    src: StaticImageData | string,
    alt: string,
    classname: string
}) {
    const [loading, setLoading] = useState(true)
    return (
        <Image src={src} alt={alt || ""} fill className={`object-cover transition-all duration-500 ${classname} ${loading ? "blur-3xl grayscale z-[1] scale-125" : "scale-100 blur-0 grayscale-0"}`} onLoad={(() => { setLoading(false) })} />
    )
}