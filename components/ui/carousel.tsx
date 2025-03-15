'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { YouTubeEmbed } from '@next/third-parties/google'
import CustomImage from './customImage'

export function EmblaCarousel({size, data, type, photos}: {
  size: string,
  data?: any,
  type: "video" | "photo",
  photos?: {
    url: string
  }[]
}) {  
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000, stopOnInteraction: false})])
  return (    
  <div className="embla overflow-hidden" ref={emblaRef}>      
  <div className="embla__container flex">   
      {
        type === 'video' ? (
            data.map((content: any, idx: number) => (
              <div className="embla__slide" key={idx} style={{flex: size}}>
                <YouTubeEmbed videoid={content} key={idx}/>        
              </div>     
            ))
        ) : (
          photos?.map(photo => (
            <div key={photo.url} className="embla__slide relative max-w-[90%] mx-auto h-[150px]" style={{flex: size}}>
              <CustomImage src={photo.url} alt='photo of partners' classname='object-contain' />
            </div>
          ))
        )
      }
    </div>    
    </div>  
    )}