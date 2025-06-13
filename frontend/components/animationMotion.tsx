'use client'
import { motion } from "framer-motion";
import React from "react";

export default function MotionDiv({children, className}: {
    children: React.ReactNode,
    className?:string
}) {
  return (
    <motion.div className={className} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.3, ease: "easeIn"}}>
        {children}
    </motion.div>
  )
}
