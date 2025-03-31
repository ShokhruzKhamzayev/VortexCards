'use client'

import React from 'react'
import Nav from '../nav'

import {motion} from 'framer-motion'

export default function OverlayMenu({state, setMenu}: {
    state: boolean,
    setMenu: Function
}) {
  return (
    <div className={`fixed bg-white text-black dark:text-white flex justify-center items-center dark:bg-black z-[99] w-full transition-all left-0 duration-1000, ${state ? "top-[100px]" : "top-[-120%]"}`} style={{ height: 'calc(100vh - 100px)'}}>
        <motion.div whileInView={{opacity: 1}} transition={{duration: 0.3, ease: 'backInOut'}} initial={{opacity: 0}} className='custom-container '>
            <Nav className='flex flex-col justify-center items-center gap-[20px]' setMenu={setMenu}/>
        </motion.div>
    </div>
  )
}
