'use client'

import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    fullName: z.string().min(3),
    staff: z.string(),
    companyName: z.string(),
    position: z.string(),
    number: z.string().min(9),
    email: z.string().email()
})

type Form = z.infer<typeof formSchema>

export default function DialogForm() {
    const {handleSubmit, register, reset, formState:{errors}} = useForm<Form>({resolver: zodResolver(formSchema)})
    function submit(data: Form) {
        console.log(data)
    }
  return (
    <form action={'#'} onSubmit={handleSubmit(submit)}>
        <div  className="grid grid-cols-1 md:grid-cols-2">
            <input type="text" placeholder="Ismingiz" />
            <input type="text" placeholder="Xodimlar soni" />
            <input type="text" placeholder="Kompaniya nomi" />
            <input type="text" placeholder="Lavozim" />
            <label htmlFor="number" className={`border-b py-[10px] flex items-center ${errors.number ? 'border-red-500' : "border-slate-300"}`}>
                <span>+998</span>
                <input type="number" {...register('number')} id="number" placeholder='00 000 00 00' className={`outline-none pl-[10px]`} />
            </label>
            <input type="email" placeholder="Email pochta" />
        </div>
        <button className="w-fit mx-auto">Yuborish</button>
    </form>
  )
}
