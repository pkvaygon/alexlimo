import Link from 'next/link'
import FooterIcon from '@/components/FooterIcon'
import { AddressIcon, CellPhoneIcon } from './icons';
import FooterIcons from '@/components/FooterIcon';

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Reservation",
    href: "/book-online",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];



export default function Footer() {
  return (
    <footer className="flex w-full flex-col bg-[#07020d]">
      <div className="container flex w-full max-w-7xl flex-col items-center justify-center px-6 gap-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
        {/* <h1 className='text-4xl  text-center font-camomile rounded-full text-white'>Elite Luxury Limousine</h1> */}
        <h1 className='text-6xl  text-center font-baskerville rounded-full text-white'>Elite Luxury Limousine</h1>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              className="text-default-500"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-x-4">
         <FooterIcon/>
        </div> */}
        <div className='grid grid-cols-3 max-sm:grid-cols-1  grid-flow-row gap-6'>
<div className="w-full flex flex-col gap-3 justify-start items-start">
  <h6 className='text-white text-lg font-semibold'>About Us</h6>
  <p>Elite Luxury Limousine offers a new perspective on the black car service – for the Chicago area and suburbs. We don`t give you just another car transportation; we provide you with the whole experience of our services. What defines our service and attitude is professionalism, discretion, reliability and VIP treatment.</p>
</div>
<div className="w-full flex flex-col gap-3 justify-start items-start">
  <h6 className='text-white text-lg font-semibold'>Our Services</h6>
  <ul className='flex flex-col gap-3'>
    <li>Corporate Transportation & Roadshows</li>
    <li>Special Occasions & Events</li>
    <li>Airport Services & Transport</li>
    <li>Night On The Town Rides</li>
    <li>Sightseeing Tours</li>
    <li>Sport Events</li>
  </ul>
</div>
<div className="w-full flex flex-col gap-3 justify-start items-start">
            <h6 className='text-white text-lg font-semibold'>For More Information</h6>
            <Link className="flex justify-start gap-3 items-center" href="tel:+18158147071"><CellPhoneIcon/>1 (815) 814-7071</Link>
            <Link className="flex justify-start gap-3 items-center" href="https://www.google.com/maps/place/111+North+Wabash,+Suite+100,+Chicago,+IL+60602"><AddressIcon />111 North Wabash, Suite 100, Chicago, IL 60602 </Link>
            <FooterIcons/>
</div>
        </div>
        <div className="flex justify-between max-sm:flex-col-reverse max-sm:items-start w-full items-center gap-6">
        <p className=" text-center text-small text-default-400">
          &copy; 2024 Alex Inc. All rights reserved.
        </p>
        <Link className="text-default-400 text-xs" href="/terms-conditions">terms & conditions</Link>
        </div>
      </div>
    </footer>
  );
}
