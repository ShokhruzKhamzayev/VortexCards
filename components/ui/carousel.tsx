'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { YouTubeEmbed } from '@next/third-parties/google'

export function EmblaCarousel({size, data, type}: {
  size: string,
  data?: any,
  type: "video" | "photo"
}) {  
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 3000})])
  return (    
  <div className="embla overflow-hidden" ref={emblaRef}>      
  <div className="embla__container flex ">   
      {
        type === 'video' ? (
            data.map((content: any, idx: number) => (
              <div className="embla__slide" key={idx} style={{flex: size}}>
                <YouTubeEmbed videoid={content} key={idx}/>        
              </div>     
            ))
        ) : (
          <>
            <div className="embla__slide" style={{flex: size}}>1</div>
            <div className="embla__slide" style={{flex: size}}>1</div>
            <div className="embla__slide" style={{flex: size}}>1</div>
            <div className="embla__slide" style={{flex: size}}>1</div>
            <div className="embla__slide" style={{flex: size}}>1</div>
            <div className="embla__slide" style={{flex: size}}>1</div>
          </>
        )
      }
    </div>    
    </div>  
    )}