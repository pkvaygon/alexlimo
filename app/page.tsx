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
    <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="relative z-0 w-full h-screen max-sm:overflow-visible overflow-hidden bg-black-800">
          <HomeBanner/>
          {/* <BannerVideo/> */}
        <div className=" max-sm:w-[90%] sm:container sm:w-full max-sm:mx-auto gap-3 bg-black-800 flex flex-col justify-start items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold max-sm:text-2xl max-md:text-xl ">Experience isn&apos;t Expensive, it&apos;s Priceless</h1>
          <h2 className="text-lg max-sm:text-sm  max:md:text-md w-full">We are a family and locally owned business deeply rooted in tradition serving the Chicago and Milwaukee markets. Where
integrity and reliability resonate throughout the organization. We look forward to you or your organization joining our family of
satisfied clients.</h2>
<Link href="order-ride" className="px-12 py-4 bg-[#afa581] text-lg rounded-sm text-white">Make a Reservation</Link>
        </div>
      </div>
      </section>
      <section className=" flex-row w-full sm:h-[500px]  flex max-sm:h-[700px]  max-sm:flex-col max-md:flex-row max-md:h-[90vh] max-lg:h-[400px] lg:flex-row ">
        <div  className="h-1/2 relative max-sm:h-1/2 max-sm:w-full max-md:w-1/2 max-md:h-full max-lg:w-1/2 max-lg:h-full lg:w-1/2 lg:h-full">
          <Image sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 100vw" src={private_driver} quality={100} alt="order driver" fill priority className="object-cover" />
        </div>
        <div className=" text-black w-1/2 h-full flex justify-center items-center max-sm:h-1/2 max-sm:w-full">
          <div className="container mx-auto h-full flex flex-col text-black gap-2 items-start justify-around">
            <h3 className=" font-inter max-sm:text-sm text-base">Who Are we</h3>
            <h1 className="font-space max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-5xl leading-10 non-italic font-medium">We are Exceptional <br/> Private Drivers</h1>
            <p className="font-inter max-sm:text-base lg:text-lg">All our drivers are professionally licensed chauffers’ with years of experience delivering unapparelled service where compromise doesn’t exist. We love what we do!</p>
            <Link className="font-space p-2 bg-blue-800 text-white text-base leading-7 font-medium" href="/contacts">Contact Us</Link>
          </div>
        </div>
      </section>
      <article className="w-full relative max-sm:my-5">
        <div className=' font-bartkey absolute z-10 text-lg sm:text-[36px]  left-16 top-24 text-white'>Make your trip an unforgettable moment together.</div>
        <Image priority className="brightness-50 w-full h-[300px] object-cover object-top backdrop-brightness-50" src={ad} alt="Order limo"/>
      </article>
      <article className="container py-8">
        <Blog/>
      </article>
      <section className="max-sm:h-auto h-[520px] flex-wrap container flex max-sm:flex-col-reverse justify-between items-start mt-3">
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
