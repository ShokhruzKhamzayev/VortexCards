
export default function InfoInnerDetail({children, Icon}: {
    children?: React.ReactNode,
    Icon?: any
}) {
  return (
    <div>
        <div className="w-full h-[1px] bg-slate-700 dark:bg-slate-100 relative my-[30px]">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-50 dark:bg-black p-[10px] rounded-full">
            <span className="text-black dark:text-white">{Icon}</span>
            </div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
