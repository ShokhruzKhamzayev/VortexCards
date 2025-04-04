

type PageProps = {
  slug: string
}

export default function IsPaid({slug}: PageProps) {
  return (
    <div className='p-[10px]'>
     
        <h1>Uzr, lekin oylik to'lov vaqtida qilinmagani sababli sizning web-saytingiz vaqtinchalik o'chirildi</h1>
        <div>
            <h3>Agar saytingizni qayta yana ishlashini xohlasangiz {slug} so'zi va chekni bizga jo'nating</h3>
        </div>
    </div>
  )
}
