'use client'

import RViewerJS from "viewerjs-react";
import "viewerjs-react/dist/index.css";
import CustomImage from "./ui/customImage";

export default function App({photos}: {
  photos: {
    url: string
  }[]
}) {

  return (
    // @ts-ignore
      <RViewerJS className="grid grid-cols-2 gap-[20px]">
        {photos.map((img, idx) => (
          <div key={`images_${idx}`} className="relative w-full h-[150px] overflow-hidden">
            <CustomImage src={img.url} alt="example" classname="object-contain"  />
          </div>
        ))}
      </RViewerJS>
  );
}
