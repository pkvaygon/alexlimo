import Image from 'next/image';
import Link from 'next/link';
import private_driver from '@/public/private_driver.png'
import Map from '@/components/GoogleMapFiles/GoogleMap'
import DateComponent from '@/components/FormFiles/DatePicker';
import SearchLocation from '@/components/FormFiles/SearchLocation';
import HomeBanner from '@/components/HomeBanner';
import PeopleForm from '@/components/FormFiles/PeopleForm';
import Footer from '@/components/Footer'
import Blog from './../components/Blog';
import ad from '@/public/adpicture.jpg'
import BannerVideo from '@/components/BannerVideo'
import SelectService from '@/components/FormFiles/SelectService'
export default function Home() {

  return (
    <>
    <section className=" text-white w-full h-screen flex flex-col justify-center items-center">
        <div className="relative z-0 w-full h-screen max-sm:overflow-visible overflow-hidden bg-black-800">
          {/* <HomeBanner/> */}
          <BannerVideo/>
        <div className=" max-sm:w-[90%] sm:container sm:w-full max-sm:mx-auto gap-3 bg-black-800 flex flex-col justify-start items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-6xl font-bold font-rochester max-sm:text-2xl max-md:text-xl outline-1 outline-black outline-solid ">Elite Luxury Limousine</h1>
          <h2 className="text-lg max-sm:text-sm  max:md:text-md w-full font-medium italic">Experience isn&apos;t Expensive, it&apos;s Priceless</h2>
<Link href="#reservation" className="px-12 py-4 bg-[#afa581] text-lg rounded-sm text-white">Make a Reservation</Link>
        </div>
      </div>
      </section>
      <section className=" text-[#D4D4D8] flex-row w-full sm:h-[500px]  flex max-sm:h-[740px]  max-sm:flex-col max-md:flex-row max-md:h-[90vh] max-lg:h-[400px] lg:flex-row ">
        <div  className="h-1/2 relative max-sm:h-1/2 max-sm:w-full max-md:w-1/2 max-md:h-full max-lg:w-1/2 max-lg:h-full lg:w-1/2 lg:h-full">
          <Image sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 100vw" src={private_driver} quality={100} alt="order driver" fill priority className="object-cover" />
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center max-sm:h-1/2 max-sm:w-full">
          <div className="container mx-auto h-full flex flex-col  max-sm:gap-1 gap-2 items-start justify-around">
            <h3 className=" font-bold font-inter max-sm:text-sm text-base">Who Are we</h3>
            <p className="max-sm:text-[14px]">We set the benchmark when it comes to client service coupled with the best fleet in
the industry. We are family owned and locally operated and deeply rooted in
tradition where integrity and reliability resonate throughout the organization.</p>
            <h1 className="font-space max-sm:text-xl max-md:text-3xl max-lg:text-4xl lg:text-5xl leading-10 non-italic font-medium">We are Exceptional <br/> Private Drivers</h1>
            <p className="font-inter max-sm:text-[14px] lg:text-lg">All our drivers are professionally licensed chauffers’ with years of experience delivering unapparelled service where compromise doesn’t exist. We love what we do!</p>
            <Link className="fpx-12 py-2 px-3 bg-[#afa581] text-lg rounded-sm text-white" href="/contacts">Contact Us</Link>
          </div>
        </div>
      </section>
      <article className="w-full relative max-sm:my-3">
        <div className=' font-bartkey absolute z-10 text-lg sm:text-[36px]  left-16 top-24 text-white'>Make your trip an unforgettable moment together.</div>
        <Image priority className="brightness-50 w-full h-[300px] object-cover object-top backdrop-brightness-50" src={ad} alt="Order limo"/>
      </article>
      <article className="container py-8">
        <Blog/>
      </article>
      <section id="reservation" className="py-2 max-sm:h-auto bg-white h-[520px] flex-wrap container flex max-sm:flex-col-reverse justify-between items-start mt-3">
        <div className=" w-1/2 max-sm:w-full h-full flex flex-col items-start justify-start">
          <SelectService/>
          <DateComponent/>
          <SearchLocation />
          <div className="w-full px-4">
            <PeopleForm/>
          </div>
        </div>
          <div className="w-1/2 max-sm:w-full h-1/2 max-md:h-full md:h-[500px] max-sm:h-[300px]">
        <Map/>
        </div>
      </section>
      <Footer/>
    </>
  );
}
