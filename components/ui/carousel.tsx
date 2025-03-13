'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {  
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 1000, align: 'center' }, [Autoplay()])

    useEffect(() => {
        if(emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])
  return (    
  <div className="embla" ref={emblaRef}>      
  <div className="embla__container">        
    <div className="embla__slide">Slide 1</div>       
     <div className="embla__slide">Slide 2</div>        
     <div className="embla__slide">Slide 3</div>     
      </div>    
      </div>  
    )}