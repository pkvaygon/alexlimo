import { NavlinksProps,VehicleProps } from "@/types";
import { StaticImageData } from "next/image";


import busCar from '@/public/bus_car.png'
import bmwCar from '@/public/bmw_car.png'
import jeepCar from '@/public/jeep_car.png'
import mersBus from '@/public/mers_bus.png'


import image1 from '@/public/image_1.png'
import image2 from '@/public/image_2.png'
import image3 from '@/public/image_3.png'


export const navlinks: NavlinksProps[] = [
    {id: 1,label: 'Home', href: '/'},
    {id: 2,label: 'Book Online', href: '/book-online/'},
    {id: 3,label: 'Services', href: '/services/'},
    {id: 4,label: 'Contact', href: '/contact/'},
]


export const images: any[] = [image1, image2, image3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex;


export const vehicles: any[] = [
{
image: 'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706929860/bus_car_lwnnke.png',
name: 'CHEVR',
passengers: 6,
bags: 6,
price: 162.14,
},
{
    image: 'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706929860/bmw_car_chrgzx.png',
    name: 'BMW MX 2024',
    passengers: 4,
    bags: 3,
    price: 200.00,
    },
    {
        image: 'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706929860/lincolnNavigator_io4nn6.png',
        name: 'Cadillac Escalade ESV',
        passengers: 6,
        bags: 6,
        price: 180.14,
        },
        {
            image: 'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706929861/van_sprinter_lligkw.png',
            name: 'SPRINTER VAN',
            passengers: 10,
            bags: 8,
            price: 110.00,
            }
]
// Make a reservations
// Button Order Ride change make a reservation change color Nuteral color(email)
// terms & conditions cope text
// change we who we are description text
// godaddy hosting website