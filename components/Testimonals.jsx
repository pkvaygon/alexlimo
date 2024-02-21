"use client";
import { Image } from 'next/image';
import { StarIcon } from './icons';
import { Card } from '@nextui-org/react';
   

    
export default function Testimonals() {
    const testimonals = [
        {
            name: "B Howard",
            date: "3 days ago",
            text: "Service is excellent, Andy is great driver! Well ran company",
            rating: 5
        },
        {
            name: "Phillip Lord",
            date: "18 days ago",
            text: "Service is excellent, Andy is great driver! Well ran company",
            rating: 5
        },
        {
            name: "CONNIE STATON",
            date: "1 month ago",
            text: "Service is excellent, Andy is great driver! Well ran company",
            rating: 5
        },
        {
            name: "Catherine Seidler",
            date: "1 month ago",
            text: "Service is excellent, Andy is great driver! Well ran company",
            rating: 5
        },
        
     ];
    return (
        <section className="w-full p-4 max-sm:py-6 grid grid-cols-4 max-sm:grid-cols-1 gap-3 grid-flow-row">
            {
                testimonals.map((el, index) => (
                    <Card className='text-[#fff] h-auto p-4 bg-black/50 flex flex-col gap-2' key={index}>
                        <h6>{el.name}</h6>
                        <div className="flex">
            {[...Array(5)].map((_, starIndex) => (
              <StarIcon key={starIndex} />
            ))}
          </div>
                        <span>{el.date}</span>
                        <p className="text-default-400">{el.text}</p>
                </Card>
                ))
            }

    </section>
        )

}