import Link from 'next/link'
import FooterIcon from '@/components/FooterIcon'

const navLinks = [
  {
    name: "Home",
    href: "#",
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
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 gap-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
        <h1 className='text-4xl  text-center font-camomile rounded-full text-white'>Elite Luxury Limousine</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
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
        </div>
        <p className="mt-1 text-center text-small text-default-400">
          &copy; 2024 Joel Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
