import { NavlinksProps } from "@/types";
import { StaticImageData } from "next/image";

export const navlinks: NavlinksProps[] = [
    {id: 1,label: 'Home', href: '/'},
    {id: 2,label: 'Book Online', href: '/book-online/'},
    {id: 3,label: 'Services', href: '/services/'},
    {id: 4,label: 'Contact', href: '/contact/'},
]
import image1 from '@/public/image_1.png'
import image2 from '@/public/image_2.png'
import image3 from '@/public/image_3.png'

export const images: any[] = [image1, image2, image3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex;