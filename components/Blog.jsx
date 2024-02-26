import airport_transportation from '@/public/airtransport.jpg'
import corporate from '@/public/corporate.jpg'
import privatetour from '@/public/privatetour.jpg'
import events from '@/public/events.jpg'
import BlogCards from './BlogCards';


export default function Blog(){
    const images = [
        {
        id: 'airport',
        image:'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706915757/airtransport_fzsw07.jpg',
        label: 'Airport Transportation',
        description: `We are is the premier service to utilize for airport transportation service whether it’s to or from the airport. We serve
        all major airports as well as all private jet centers. We offer world class airport car service our chauffeurs go above and beyond to
        provide the service you expect. We take great pride in making sure our clients enjoy first-class service and comfort as you travel
        in style to and from your destinations.`
    },
        {
        id: 'corporate',
        image:'https://res.cloudinary.com/dxvf93ovn/image/upload/v1708031489/corporate_meeting_ioons7.jpg',
        label: 'Corporate Serviсes',
        description: `We are is committed to providing our corporate limo service clientele with the best corporate transportation service
        available. Whether you’re entertaining existing or potential clients, company employees or just simply traveling to business
        meetings…Elite Luxury Limo has the vehicles and professionalism to serve all your corporate transportation needs. All of our
        chauffeurs are professionally trained drivers who are dedicated to making your business transportation service experience with
        Elite Luxury Limo the best possible.`,
    },
        {
        id: 'tours',
        image:'https://res.cloudinary.com/dxvf93ovn/image/upload/v1706915757/privatetour_badhzi.jpg',
        label: 'Private Excursion & Tours',
        description: `We offer charter services in order to afford you a way to explore in luxury many well-known beautiful and
        exciting locations throughout Chicagoland. Our clients travel in the ultimate comfort driven by our professional chauffeurs that
        have in-depth knowledge of all landmarks and exciting destinations you’re seeking to visit. If you wish to visit somewhere off the
        beaten path it’s not an issue simply provide your chauffer with the details and address if available and they’ll be more than happy
        to take you there.`,
    },
        {
        id: 'events',
        image:'https://res.cloudinary.com/dxvf93ovn/image/upload/v1708031549/events2_nkd62t.jpg',
        label: 'Events & Special Occasions',
        description: `We specialize in providing you the highest level of professional transportation limousine services for any and all
        of your big moment and once-in-a-lifetime events and occasions. Let our professional chauffeurs drive you to that special
        moment in your life you’ll be driven in comfort unrushed and arrive on time.`,
    },
    ]
return(
    <div id="services" className="scroll-mt-20 grid grid-cols-1 grid-flow-row sm:grid-cols-1 md:grid-cols-2  sm:grid-rows-2  max-lg:gap-y-3">
        <BlogCards images={images} />
    </div>
    )

}