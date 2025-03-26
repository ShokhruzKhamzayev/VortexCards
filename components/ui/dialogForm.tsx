'use client'

import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "sonner"

const formSchema = z.object({
    fullName: z.string().min(3),
    staff: z.string().optional(),
    companyName: z.string().optional(),
    position: z.string().optional(),
    number: z.string().min(9),
    email: z.string().optional()
})

type Form = z.infer<typeof formSchema>

export default function DialogForm() {
    const {handleSubmit, register, reset, formState:{errors}} = useForm<Form>({resolver: zodResolver(formSchema)})
    function submit(data: Form) {
        const template = `📩 New Message from VortexCards received! ✅%0A
  👤 FIO: ${data.fullName}%0A
  📞 Telefon raqam: ${data.number}%0A
  👥 Xodimlar soni: ${data.staff}%0A
  ℹ️ Organizatsiya nomi: ${data.companyName}%0A
  👤 Lavozimi: ${data.position}%0A,
  📩 Email pochta: ${data.email}
  `
    try {
        const status = axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_telegram_api!}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID!}&text=${template}`, template)
        toast.promise(status, {
            success: 'Yuborildi',
            loading: 'Yuborilmoqda...',
            error: 'Serverda xatolik!'
        })
    reset()
  } catch (err) {
    console.log(err)
  }}
  return (
    <form action={'#'} onSubmit={handleSubmit(submit)}>
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <input className={`outline-none border-b py-[10px] ${errors.fullName ? 'border-red-500' : "border-slate-300"}`} type="text" placeholder="Ismingiz" {...register('fullName')} />
            <input className={`outline-none border-b py-[10px] ${errors.staff ? 'border-red-500' : "border-slate-300"}`} type="text" placeholder="Xodimlar soni" {...register('staff')}/>
            <input className={`outline-none border-b py-[10px] ${errors.companyName ? 'border-red-500' : "border-slate-300"}`} type="text" placeholder="Kompaniya nomi" {...register('companyName')}/>
            <input className={`outline-none border-b py-[10px] ${errors.position ? 'border-red-500' : "border-slate-300"}`} type="text" placeholder="Lavozim" {...register('position')} />
            <label htmlFor="number" className={`border-b py-[10px] ${errors.number ? 'border-red-500' : "border-slate-300"}flex items-center ${errors.number ? 'border-red-500' : "border-slate-300"}`}>
                <span>+998</span>
                <input type="number" {...register('number')} id="number" placeholder='00 000 00 00' className={`outline-none pl-[10px]`} />
            </label>
            <input className={`outline-none border-b py-[10px] ${errors.email ? 'border-red-500' : "border-slate-300"}`} type="email" placeholder="Email pochta" {...register('email')}/>
        </div>
        <button className="w-fit mx-auto bg-[#f5f5f7] dark:bg-[#1f1e20] py-[10px] px-[25px] rounded-[14px] block mt-[20px]">Yuborish</button>
    </form>
  )
}
