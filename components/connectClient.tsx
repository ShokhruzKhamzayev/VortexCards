'use client'

import { InnerDetailTypo } from '@/types'
import React from 'react'
import { FaRegHandshake } from 'react-icons/fa6'

export default function ConnectClient({person}: {
    person: InnerDetailTypo
}) {
    const handleSmsShare = () => {
        const message = encodeURIComponent("Hey! Check out this cool website: " + window.location.href);
        const smsUrl = `sms:?&body=${message}`;
        window.location.href = smsUrl;
      };
  return (
    <button className="email text-center" onClick={handleSmsShare}>
        <div  style={{backgroundColor: person.secondaryColor.hex}} className='p-[15px] w-fit rounded-full mx-auto'>
        <FaRegHandshake size={25} color='white' />
        </div>
        Connect
    </button>
  )
}
