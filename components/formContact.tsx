'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const formSchema = z.object({
    fullName: z.string().min(3),
    number: z.string().min(9)
})

type Form = z.infer<typeof formSchema>

export default function FormContact() {
    const {handleSubmit, formState: {errors}, reset, register} = useForm({resolver: zodResolver(formSchema)})

    function submit(data: Form) {
      console.log(data)
      reset()
    }
  return (
    <form action={'#'} onSubmit={handleSubmit(submit)} className='flex flex-col gap-[15px]'>
        <input type="text" placeholder='Sizning ismingiz' className={`outline-none border-b py-[10px] ${errors.fullName ? 'border-red-500' : "border-slate-300"}`} {...register('fullName')} />
        <label htmlFor="number" className={`border-b py-[10px] ${errors.number ? 'border-red-500' : "border-slate-300"}`}>
            <span>+998</span>
            <input type="number" {...register('number')} id="number" placeholder='00 000 00 00' className={`outline-none pl-[10px]`} />
        </label>
        <div className='flex items-center justify-between py-[15px]'>
          <span className='text-balance max-w-1/2'>So'rovni qoldirish orqali siz maxfiylik qoidalariga rozilik bildirasiz</span>
          <button className='text-black bg-white rounded-[14px] py-[12px] px-[15px]'>Biz bilan bog'lanish</button>
        </div>
    </form>
  )
}
