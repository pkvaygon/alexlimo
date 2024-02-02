import Image from 'next/image';
import Link from 'next/link';
import BannerVideo from './../components/BannerVideo';
import private_driver from '@/public/private_driver.png'
import Map from '@/components/GoogleMapFiles/GoogleMap'
import DateComponent from '@/components/FormFiles/DatePicker';
import SearchLocation from '@/components/FormFiles/SearchLocation';
import HomeBanner from '@/components/HomeBanner';
import PeopleForm from '@/components/FormFiles/PeopleForm';
import PaymentFormComponent from '@/components/SquarePayment/PaymentForm'
export default function Home() {
  
  return (
    <>
    <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="relative z-0 w-full h-screen max-sm:overflow-visible overflow-hidden bg-black-800">
          <HomeBanner/>
        <div className=" max-sm:w-[90%] max-sm:mx-auto gap-3 flex flex-col justify-start items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold max-sm:text-2xl ">The Best Chaffeur Company</h1>
          <h2 className="text-lg max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua</h2>
<Link href="order-ride" className="px-12 py-4 bg-blue-800 text-white">Order Ride</Link>
        </div>
      </div>
      </section>
      <section className=" flex-row w-full h-[500px] flex max-sm:h-[700px] max-sm:flex-col max-md:flex-row max-md:h-[90vh] max-lg:h-[400px] lg:flex-row ">
        <div  className="h-1/2 relative max-sm:h-1/2 max-sm:w-full max-md:w-1/2 max-md:h-full max-lg:w-1/2 max-lg:h-full lg:w-1/2 lg:h-full">
          <Image sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 100vw" src={private_driver} quality={100} alt="order driver" fill priority className="object-cover" />
        </div>
        <div className=" text-black w-1/2 h-full flex justify-center items-center max-sm:h-1/2 max-sm:w-full">
          <div className="w-4/5 mx-auto flex flex-col text-black gap-2 items-start justify-start">
            <h3 className=" font-inter max-sm:text-sm text-base">Who Are we</h3>
            <h1 className="font-space max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-5xl leading-10 non-italic font-medium">We are Exceptional <br/> Private Drivers</h1>
            <p className="font-inter max-sm:text-base text-lg">Our clients receive remarkable results because we get to help
them build their business without compromising our creativity!
We love what we do in the world of finance.</p>
            <Link className="font-space p-2 bg-blue-800 text-white text-base leading-7 font-medium" href="/contacts">Contact Us</Link>
          </div>
        </div>
      </section>
      <section className="max-sm:h-auto flex-wrap container flex max-sm:flex-col-reverse justify-between items-start mt-3">
        <div className="w-1/2 max-sm:w-full">
          <DateComponent/>
          <SearchLocation />
          <div className="w-full p-4">
<PeopleForm/>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full h-[400px] max-sm:h-[300px]">
        <Map/>
        </div>
      </section>
      
    </>
  );
}
