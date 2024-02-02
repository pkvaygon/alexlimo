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
image: 'https://mail.google.com/mail/u/0?ui=2&ik=c0771eba79&attid=0.0.2&permmsgid=msg-f:1789666392615176339&th=18d62c1a1e484893&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_DcKzpwMeLxzoW1-LZ1kk6cPw9MfSn4JvjNdY1w_Ilq27x4dQ-Qb4F2_IzIk-Ig6FwkQUErPZXKrBNN76et6JX91Qf77_N2AFcP3Ny6n2UqYRPvmw-3WttZo4&disp=emb',
name: 'Trailer Car',
passengers: 6,
bags: 6,
price: 162.14,
},
{
    image: 'https://mail.google.com/mail/u/0?ui=2&ik=c0771eba79&attid=0.0.3&permmsgid=msg-f:1789666392615176339&th=18d62c1a1e484893&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ909dBMOYlNwFYmOCJRwjCC4YRJxQCnjLpm2UFaN6hMZjjgL8CIUdmaheGxHzrDgvGpkbUgb15rlNxlIvddfLhs7VRW5hkjtZMOhbOOIkGrHeRRvEM-kQ5HH94&disp=emb',
    name: 'BMW MX 2024',
    passengers: 4,
    bags: 3,
    price: 200.00,
    },
    {
        image: 'https://mail.google.com/mail/u/0?ui=2&ik=c0771eba79&attid=0.0.4&permmsgid=msg-f:1789666392615176339&th=18d62c1a1e484893&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-JeKMXWa1Bbr6aUJTFw83C3OAyu6yO76xysXvWguA_35COMICkXLEKGt_S5S0TB1RjeizEMuwGqTZ-tYl2WhMSwG13-0UQ5Tds_73-C7RDp9YaQNvjyRoabco&disp=emb',
        name: 'Jeep car',
        passengers: 6,
        bags: 6,
        price: 180.14,
        },
        {
            image: 'https://mail.google.com/mail/u/0?ui=2&ik=c0771eba79&attid=0.0.1&permmsgid=msg-f:1789666392615176339&th=18d62c1a1e484893&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9qxYYNJI_mW8xCFww3VlDhqe7_7O8NyI0uFLFOGTou0A6BHbz7aSPOLULwG1j_9jhRTQP9ElHOHyx9-cSp_uoQzRY0iURqRSZQJ-sGRmrG0G6hsicP41ZJs_A&disp=emb',
            name: 'Mercedes Car',
            passengers: 10,
            bags: 8,
            price: 110.00,
            }
]