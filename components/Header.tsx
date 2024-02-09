"use client";
import React, { useState, } from "react";
import {Navbar,NavbarMenu, NavbarBrand, NavbarContent, NavbarItem, Link,  NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
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
   <Navbar isBlurred={false} className="dark  text-[#F5A524] fixed top-0 left-0 px-0 p-0 w-full h-[68px] flex justify-start lg:justify-center items-center">
   {/* <Navbar isBlurred={false} className="dark header_shadow text-white fixed top-0 left-0 px-0 p-0 w-full h-[68px] flex justify-start lg:justify-center items-center"> */}
        <NavbarContent className="h-full p-0 sm:max-w-[50%] overflow-hidden ">
        <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                    onClick={toggleMenu}
                />
        <NavbarBrand className=" max-sm:w-[10%] w-[800px]">
            <h1 className='w-auto text-4xl font-baskerville max-lg:text-xl italic text-yellow'>Elite Luxury Limousine</h1>
        </NavbarBrand>
        </NavbarContent>
        <NavbarMenu className=" dark h-auto py-3 backdrop-blur-sm bg-black/30">
                {navlinks.map((el) => (
                    <NavbarMenuItem key={el.id}>
                        <Link
                             className={`${
                              pathname === el.href
                                ? 'text-[#F5A524]'
                                : 'text-gray/800 hover:backdrop-blur-md hover:bg-black/30'
                            } w-full p-1 my-1 text-white`}
                            href={el.href}
                            size="lg"
                            onClick={closeMenu}
                        >
                            {el.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
          </NavbarMenu>
        <NavbarContent className="max-md:hidden" justify="start">
          {navlinks.map(el => (
          <NavbarItem key={el.id} className="text-white">
            <Link underline="active" className={pathname === el.href ? "text-[#F7B750]" : "text-[#F5A524]"}  href={el.href}>
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
