'use client'

import { useTranslations } from 'next-intl';
import React from 'react'
import { FaRegHandshake } from 'react-icons/fa6'

export default function ConnectClient({person}: {
    person: any
}) {
  const handleSmsShare = () => {
    const message = encodeURIComponent(person.textForConnection + " " + window.location.href);
    const smsUrl = `sms:?&body=${message}`;
    window.location.href = smsUrl;
  };
  const t = useTranslations('innerPages')
  return (
    <button className="email text-center cursor-pointer" onClick={handleSmsShare}>
        <div  style={{backgroundColor: person.secondaryColor}} className='p-[15px] w-fit rounded-full mx-auto hover:grayscale-75 transition-all duration-200 mb-[6px]'>
        <FaRegHandshake size={25} color='white' />
        </div>
        {t("links.connect")}
    </button>
  )
}
