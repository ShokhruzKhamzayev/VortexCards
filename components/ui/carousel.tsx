'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {  
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay({delay: 2000})])
  return (    
  <div className="embla overflow-hidden" ref={emblaRef}>      
  <div className="embla__container flex">        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 1</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 2</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 3</div> 
    <div className="embla__slide flex-[0_0_33.33%]">Slide 1</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 2</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 3</div> 
    <div className="embla__slide flex-[0_0_33.33%]">Slide 1</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 2</div>        
    <div className="embla__slide flex-[0_0_33.33%]">Slide 3</div>      
    </div>    
    </div>  
    )}