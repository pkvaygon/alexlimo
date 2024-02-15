"use client";
import { Card, Image, CardBody } from "@nextui-org/react";
import type { CardProps } from "@nextui-org/react";
import {BlogCardsProps} from '@/types'

export default function BlogCards({ images, ...props }: { images: BlogCardsProps[] } & CardProps) {
    return (
        <>
            {images.map((el, index) => (
                <Card key={index} className="w-full bg-white text-black " radius="none" shadow="none" {...props}>
                    <CardBody className="flex max-lg:flex-col flex-row  flex-wrap p-0 sm:flex-nowrap">
                        <Image
                        radius="none"
                            removeWrapper
                            alt={el.label}
                            className="h-auto max-md:h-[340px] w-full flex-none object-cover max-lg:h-[340px] lg:w-48 object-top "
                            src={el.image.toString()}
                        />
                        <div className="px-4 py-5">
                            <h3 className="text-large font-medium">{el.label}</h3>
                            <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                                <p>{el.description}</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </>
    );
}