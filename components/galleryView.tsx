'use client'

import { useEffect, useState } from "react";
import RViewerJS from "viewerjs-react";
import "viewerjs-react/dist/index.css";

const imagesList = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400"
];

export default function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const imgs: any = await Promise.all(
        imagesList.map((url) => {
          return fetch(url)
            .then((res) => res.blob())
            .then((blob) => URL.createObjectURL(blob));
        })
      );
      setImages(imgs);
    }
    fetchData();
  }, []);

  return (
    // @ts-ignore
      <RViewerJS className="grid grid-cols-2 gap-[20px]">
        {images.map((img, idx) => (
          <img className="w-[full]" src={img} alt="example" key={`images_${idx}`} />
        ))}
      </RViewerJS>
  );
}
