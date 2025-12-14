"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);


  
  // Row1: Main, longer; Row2: Secondary, shorter
  const navLinksRow1 = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dinings" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Amenities", href: "/amenities" },
    { name: "Wellness & Gym", href: "/wellness" },
    { name: "Contact Us", href: "/contact" },
  ];
  const navLinksRow2 = [
    { name: "Experience & Activities", href: "/experience_activities" },
    { name: "Games", href: "/games" },
    { name: "Virtual Tour", href: "/Virtual-tour" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#2E1A15] shadow transition-all duration-300 m-0 p-0">
      {/* Secondary nav row */}
      <div className="hidden md:flex justify-center items-center w-full px-4 py-1 bg-transparent text-[#DCC7A1] text-sm font-semibold tracking-wider gap-2 uppercase" style={{letterSpacing: '0.07em'}}>
        {navLinksRow2.map((link, idx) => (
          <React.Fragment key={link.name}>
            <Link href={link.href} className="hover:text-[#A9745B] transition-colors">{link.name}</Link>
            {idx < navLinksRow2.length - 1 && <span className="mx-1">|</span>}
          </React.Fragment>
        ))}
      </div>
      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 py-2 bg-transparent">
        {/* Logo left */}
        <Link href="/" className="flex items-center gap-2 min-w-[120px]">
          <Image 
            src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula_Logo.webp"
            alt="Enchula Resort Logo"
            width={56}
            height={56}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-bold text-[#DCC7A1] tracking-wider font-serif">ENCHULA</span>
        </Link>
        {/* Main links center */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinksRow1.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#F8F3EF] font-semibold tracking-wider hover:text-[#A9745B] transition-colors text-base uppercase"
              style={{letterSpacing: '0.07em'}}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Book Now right (desktop only) */}
        <div className="hidden md:flex items-center ml-4">
          <Link href="/booking" className="px-5 py-2 bg-[#7B4B2A] text-white font-bold rounded shadow hover:bg-[#A9745B] transition-colors text-xs tracking-widest uppercase" style={{letterSpacing: '0.12em'}}>BOOK NOW</Link>
        </div>
        {/* Book Now and menu for mobile */}
        <div className="md:hidden flex items-center">
          <Link href="/booking" className="px-4 py-2 bg-[#7B4B2A] text-white font-bold rounded shadow hover:bg-[#A9745B] transition-colors text-xs tracking-widest uppercase mr-2" style={{letterSpacing: '0.12em'}}>BOOK NOW</Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#DCC7A1] hover:text-white p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Slide-in Menu & Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Slide-in Menu */}
          <nav className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#18120E] z-50 shadow-lg px-6 py-8 flex flex-col space-y-4 animate-slide-in">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end mb-4 text-[#DCC7A1] hover:text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col gap-1">
              {navLinksRow2.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-[#DCC7A1] font-semibold tracking-wider hover:text-[#A9745B] transition-colors text-sm uppercase"
                  style={{letterSpacing: '0.07em'}} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 mt-2">
              {navLinksRow1.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-[#F8F3EF] font-bold uppercase tracking-wider px-3 transition-all duration-200 border-b-2 border-transparent hover:border-[#A9745B] text-base"
                  style={{letterSpacing: '0.07em'}} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="/booking"
              className="block mt-3 px-6 py-2 bg-[#7B4B2A] text-white font-bold rounded shadow hover:bg-[#A9745B] transition-colors text-xs tracking-widest uppercase text-center"
              style={{ letterSpacing: '0.12em' }}
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
            </Link>
          </nav>
          {/* Slide-in animation */}
          <style jsx global>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}
    </header>
  );
}


