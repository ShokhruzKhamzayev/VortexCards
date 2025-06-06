'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import axios  from 'axios'
import { useTranslations } from 'next-intl'

const formSchema = z.object({
    fullName: z.string().min(3),
    number: z.string().min(9)
})

type Form = z.infer<typeof formSchema>

export default function FormContact() {
    const {handleSubmit, formState: {errors}, reset, register} = useForm({resolver: zodResolver(formSchema)})

    function submit(data: Form) {
      const template = `📩 New Message from VortexCards received! ✅%0A
👤 FIO: ${data.fullName}%0A
📞 Telefon raqam: ${data.number}`
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
}
}
  const t = useTranslations('home.contact')
  return (
    <form action={'#'} onSubmit={handleSubmit(submit)} className='flex flex-col gap-[15px]'>
        <input type="text" placeholder={t("placeholders.name")} className={`outline-none border-b py-[10px] ${errors.fullName ? 'border-red-500' : "border-slate-300"}`} {...register('fullName')} />
        <label htmlFor="number" className={`border-b py-[10px] flex items-center ${errors.number ? 'border-red-500' : "border-slate-300"}`}>
            <span>+998</span>
            <input type="number" {...register('number')} id="number" placeholder='00 000 00 00' className={`outline-none pl-[10px]`} />
        </label>
        <div className='flex items-center justify-between py-[15px] flex-col gap-[30px] lg:flex-row'>
          <span className='text-balance lg:max-w-1/2 text-[14px] opacity-85'>{t("reminders.text")}</span>
          <button className='text-black bg-white rounded-[14px] py-[12px] px-[15px]'>{t("reminders.button")}</button>
        </div>
    </form>
  )
}
