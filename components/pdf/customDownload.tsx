'use client';

import { pdf } from '@react-pdf/renderer';
import CustomPdf from './customPdf';
import { usePathname } from 'next/navigation';
import { FaFilePdf } from 'react-icons/fa6';


export default function DownloadPdfButton({data, slug}: {
  data: any,
  slug: string
}) {
  const customLink = usePathname()
  const handleDownload = async () => {
    const blob = await pdf(<CustomPdf data={data} link={customLink}/>).toBlob();
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = slug + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  console.log(slug)
  return (
    <button onClick={() => handleDownload()} className="location gap-[10px] absolute top-[100%] left-1/8  translate-y-[-50%] flex items-center flex-col cursor-pointer">
        <div className='p-[15px] rounded-full' style={{backgroundColor: data.secondaryColor.hex}} >
            <FaFilePdf  color='white' />
        </div>
        <p className='text-[11px]'>Yuklash</p>
    </button>
  );
}
