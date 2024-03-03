"use client";
import React from 'react';
import { Image } from 'next/image';
import { StarIcon } from './icons';
import { Card } from '@nextui-org/react';
   

    
export default function Testimonals() {
    const testimonals = [
        {
            name: "Garret Knorr",
            // date: "3 days ago",
            text: `I've used many limo services for many
            decades but found Elite Luxury Limousine
            to be the best. Their drivers are courteous
            and their dispatcher (Norm) was especially
            helpful during our recent travels.`,
            rating: 5
        },
        {
            name: "Robert Williams",
            // date: "18 days ago",
            text: `Our driver was waiting for us when we
            arrived at the airport. The drive was smooth
            and uneventful just how I like it! Extremely
            professional from start to finish. We will be
            using Elite Luxury Limousine again.`,
            rating: 5
        },
        {
            name: "Elizabeth Alvarez",
            // date: "1 month ago",
            text: `The quality of service and their
            flexibility is top notch. I’ve been
            fortunate to use their services a few
            times and not once have I not been
            satisfied.`,
            rating: 5
        },
        {
            name: "Mitch Mccrea",
            // date: "1 month ago",
            text: `We were happy with our drivers Alexis and
            Chris. They were able to get us through
            parade traffic and then airport construction
            so we could make our flight in plenty of
            time. We will definitely be contacting Elite
            Luxury Limousine for our next visit.`,
            rating: 5
        },
        {
            name: "Scott A",
            // date: "1 month ago",
            text: `Top notch service. Gladly recommend this
            company. Will use again for sure!`,
            rating: 5
        },
        {
            name: "Phillip Weber",
            // date: "1 month ago",
            text: `Our driver was waiting for us when
            we arrived at the airport as they track
            the flight. The drive was smooth and
            uneventful just how I like it!
            Extremely professional from start to
            finish. Will be using Elite Luxury
            Limousine again.`,
            rating: 5
        },
        
    ];
    return (
         <section  className="carousel carousel-center max-w-full p-4 space-x-4 overflow-x-scroll  rounded-none relative">
            {
                testimonals.map((el, index) => (
                    <Card className='text-[#fff] w-[300px] carousel-item h-auto p-4 bg-black/50 flex flex-col gap-2' key={index}>
                        <h6>{el.name}</h6>
                        <div className="flex">
            {[...Array(5)].map((_, starIndex) => (
              <StarIcon key={starIndex} />
            ))}
          </div>
                        {/* <span>{el.date}</span> */}
                        <p className="text-default-400">{el.text}</p>
                </Card>
      ))
    }
    </section>
        )

}