"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {EmblaOptionsType} from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from '@/utils';
import Image from 'next/image';
export default function HomeBanner() {
  const options: EmblaOptionsType = { align: 'start', loop: true }
  const SLIDE_COUNT = 3
  const slides = Array.from(Array(SLIDE_COUNT).keys())
  type PropType = {
    slides: number[]
    options?: EmblaOptionsType
  }
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({delay: 3000})])
    return (
        <section className="w-full h-full mt-[68px] md:mt-[80px]">
        <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
              </div>
              <Image
                priority
                sizes='100vw'
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Elite Luxury Limousine"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
        </section>
        )

}