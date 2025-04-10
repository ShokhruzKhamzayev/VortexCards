'use client'

import { YouTubeEmbed } from '@next/third-parties/google'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export function EmblaCarousel({size, data, type, photos}: {
  size: string,
  data?: any,
  type: "video" | "photo",
  photos?: {
    url: string
  }[]
}) {  
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])
  return (    
  <div className="embla overflow-hidden" ref={emblaRef}>      
  <div className="embla__container flex">   
      {
        type === 'video' ? (
            data.map((content: any, idx: number) => (
              <div className="embla__slide w-full px-[30px] z-[99]" key={idx} style={{flex: size}}>
                <YouTubeEmbed videoid={content} key={idx}/>        
              </div>     
            ))
        ) : (
          photos?.map(photo => (
            <div key={photo.url} className="embla__slide w-full px-[5px] z-[99]" style={{flex: size}}>
              <div className='relative w-full h-[120px] md:h-[150px]'>
                <Image fill src={photo.url} alt='photo of partners' className='object-cover' />
              </div>
            </div>
          ))
        )
      }
    </div>    
    </div>  
    )}