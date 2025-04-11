
export function Social({link, text, color, children}: {
    link: string,
    text: string,
    color: string,
    children: React.ReactNode
}) {
    if(link == null) {
        return ""
    }
    return (
        <a target="_blank" href={link} className="email text-center">
            <div style={{backgroundColor: color}} className='p-[15px] w-fit rounded-full mb-[6px] mx-auto transition-all duration-200 hover:grayscale-75'>
                {children}
            </div>
            {text}
        </a>
    )
}