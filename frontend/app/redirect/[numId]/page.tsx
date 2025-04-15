'use client'

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Redirect() {
  const params = useParams()
  const router = useRouter()
//   useEffect(() => {
//     if(!params) {
//       router.push('/')
//     } else {
//       router.push(`/individual/${params.numId}`)
//     }
//   }, [])
  return (  
    <div>{JSON.stringify(params)} </div>
  )
}
