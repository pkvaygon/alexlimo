import Image from 'next/image';
import airport_transportation from '@/public/airtransport.jpg'
import corporate from '@/public/corporate.jpg'
import privatetour from '@/public/privatetour.jpg'
import events from '@/public/events.jpg'


export default function Blog(){
    const images = [
    {
        image:airport_transportation,
        label: 'Airport Transportation'
    },
    {
        image:corporate,
        label: 'Corporate Servives'
    },
    {
        image:privatetour,
        label: 'Private Excursion & Tours'
    },
    {
        image:events,
        label: 'Events & Special Occasions'
    },
    ]
return(
    <div className="w-full grid sm:grid-cols-2 sm:grid-rows-2 gap-3">
    {
    images.map((el,index)=>(
        <div key={index}>
            <Image className="w-full h-[300px] object-cover" src={el.image} alt={el.label}/>
            <h3>{el.label}</h3>
        </div>
        ))
    }
    </div>
    )

}