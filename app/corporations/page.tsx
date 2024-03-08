import Link from "next/link";
import private_driver from "@/public/benze.jpg";
import Image from "next/image";
import ad from "@/public/corporation_banner.jpg";
export default function CorporationsPage() {
  return (
    // <section className=" sm:mt-[80px] py-5 text-[#D4D4D8] flex-row w-full sm:h-[500px]  flex max-sm:h-[740px]  max-sm:flex-col max-md:flex-row max-md:h-[90vh] max-lg:h-[400px] lg:flex-row ">
    //   <div className="h-1/2 relative max-sm:h-1/2 max-sm:w-full max-md:w-1/2 max-md:h-full max-lg:w-1/2 max-lg:h-full lg:w-1/2 lg:h-full">
    //     <Image
    //       sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 100vw"
    //       src={private_driver}
    //       quality={100}
    //       alt="order driver"
    //       fill
    //       priority
    //       className="object-cover object-center"
    //     />
    //   </div>
    //   <div className=" w-1/2 h-full flex justify-center items-center max-sm:h-1/2 max-sm:w-full">
    //     <div className="container mx-auto h-full flex flex-col  max-sm:gap-1 gap-2 items-start justify-around">
    //       <h3
    //         id="contactusform"
    //         className="font-space max-sm:text-xl max-md:text-3xl max-lg:text-4xl lg:text-5xl leading-10 non-italic font-medium">
    //         Who Are we
    //       </h3>
    //       <p className="max-sm:text-[14px]">
    //         We set the benchmark when it comes to client service coupled with
    //         the best fleet in the industry. We are family owned and locally
    //         operated and deeply rooted in tradition where integrity and
    //         reliability resonate throughout the organization.
    //       </p>
    //       <h1 className="font-space max-sm:text-xl max-md:text-3xl max-lg:text-4xl lg:text-5xl leading-10 non-italic font-medium">
    //         We are Exceptional <br /> Private Drivers
    //       </h1>
    //       <p className="font-inter max-sm:text-[14px] lg:text-lg">
    //         All our drivers are professionally licensed chauffers with years of
    //         experience delivering unapparelled service where compromise doesn’t
    //         exist. We love what we do!
    //       </p>
    //       <Link
    //         href="/contact-us"
    //         className="px-4 py-2 bg-[#afa581] font-semibold text-md rounded-sm text-white">
    //         Contact Us
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className=" max-sm:mt-3 mt-[36px] pt-10">
      <article className="w-full shadow-lg relative max-sm:h-[80px] h-[200px] max-sm:my-3">
        <div className=" font-timesroman absolute z-10 text-sm sm:text-4xl max-sm:left-[10%]  max-sm:top-[10%] left-16 top-20 text-white">
          Make your trip an unforgettable moment together.
        </div>
        <Image
          priority
          fill
          className="brightness-50 w-full object-cover object-top backdrop-brightness-50"
          src={ad}
          alt="Order limo"
        />
      </article>
      <section className="w-full max-sm:h-auto flex h-[400px] max-md:flex-col justify-between items-start ">
        <div className="max-md:w-full max-sm:h-auto  w-1/2 h-full gap-4 flex flex-col justify-start items-start p-4">
          <h2 className="max-sm:text-2xl text-4xl">Budget Friendly Corporate Service</h2>
          <p>
            Corporate Limousine can be used for a variety of reasons. For
            example, to transport their executives, business partners and
            clients. Elite Luxury Limousine provides professional limousine
            services for our corporate partners no matter the event or required
            needs. When courting new clients there is nothing more important
            than image and it begins with the moment you’ve arranged their
            transportation. Our fleet can accommodate any occasion whether the
            need is a sedan, SUV, to large busses.
          </p>
        </div>
        <div className="max-md:w-full max-sm:h-[300px] w-1/2 h-full relative">
          <Image src={private_driver} fill priority objectFit="cover" alt="driver corporations"/>
        </div>
      </section>
    </section>
  );
}
