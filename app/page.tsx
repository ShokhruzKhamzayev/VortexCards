import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { GoOrganization } from "react-icons/go";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-[100dvh] gap-[50px] flex-col md:flex-row">
      <Link href={'/individual'} className="flex items-center flex-col border border-slate-600 dark:border-slate-100 py-[30px] px-[70px] rounded-[16px] w-[200px] gap-[15px]">
        <BiUser size={40}/>
        Individuallar
      </Link>
      <Link href={'/organization'} className="flex items-center flex-col border border-slate-600 dark:border-slate-100 py-[30px] px-[70px] rounded-[16px] w-[200px] gap-[15px]">
        <GoOrganization size={40}/>
        Organizatsiyalar
      </Link>
    </div>
  );
}
