"use client";
import {
   Navbar,
   NavBody,
   NavItems,
   MobileNav,
   NavbarLogo,
   NavbarButton,
   MobileNavHeader,
   MobileNavToggle,
   MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavBar() {
   const navItems = [
      {
         name: "Home",
         link: "/",
      },
      {
         name: "About Us",
         link: "#aboutus",
      },
      {
         name: "Caregivers",
         link: "#caregivers",
      },
   ];

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   return (
      <div className="relative w-full">
         <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
               <NavbarLogo />
               <NavItems items={navItems} />
               <div className="flex items-center gap-4">
                  <NavbarButton variant="secondary" className="hover:text-white hover:bg-green-500">Join Us</NavbarButton>
                  <NavbarButton variant="primary" className="hover:text-white hover:bg-blue-600">Pre-Order</NavbarButton>
               </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
               <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                     isOpen={isMobileMenuOpen}
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
               </MobileNavHeader>

               <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                  {navItems.map((item, idx) => (
                     <a
                        key={`mobile-link-${idx}`}
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative text-neutral-600 dark:text-neutral-300">
                        <span className="block">{item.name}</span>
                     </a>
                  ))}
                  <div className="flex w-full flex-col gap-4">
                     <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full">
                        Login
                     </NavbarButton>
                     <NavbarButton
                        onClick={() => setIsMobileMenuOpen(false)}
                        variant="primary"
                        className="w-full">
                        Book a call
                     </NavbarButton>
                  </div>
               </MobileNavMenu>
            </MobileNav>
         </Navbar>
         {/* Navbar */}
      </div>
   );
}

