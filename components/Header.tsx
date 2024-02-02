"use client";
import React, { useState, } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,  NavbarMenuToggle} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { navlinks } from "@/utils";
export default function Header() {
  const pathname = usePathname()
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};
const closeMenu = () => {
  setIsMenuOpen(false);
};
  return (
    <>
   <Navbar isBlurred={false} className="dark header_shadow text-white fixed top-0 left-0 px-0 p-0 w-full h-[68px] flex justify-start lg:justify-center items-center">
        <NavbarContent className="sm:max-w-[20%] overflow-hidden ">
        <style jsx>{`
    ul {
      overflow: visible !important;
    }
  `}</style>
        <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                    onClick={toggleMenu}
                />
        <NavbarBrand className="max-sm:w-[10%] w-[400px]">
            <h1 className='text-4xl font-camomile rounded-full'>Elite Luxury Limo</h1>
          
        </NavbarBrand>
      </NavbarContent>
        <NavbarContent className="max-sm:hidden" justify="center">
          {navlinks.map(el => (
          <NavbarItem key={el.id} className="text-white">
            <Link underline="hover" color={pathname === el.href ? "foreground" : "primary"}  href={el.href}>
              {el.label}
            </Link>
          </NavbarItem>
          ))
          }

      </NavbarContent>
    </Navbar>
      </>
  );
}
