"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Two-row navigation
  const navLinksRow1 = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dinings" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
  ];
  const navLinksRow2 = [
    { name: "Amenities", href: "/amenities" },
    { name: "Experience & Activities", href: "/experience_activities" },
    { name: "Games", href: "/games" },
    { name: "Virtual Tour", href: "/Virtual-tour" },
    { name: "Wellness & Gym", href: "/wellness" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2E1A15] shadow">
      <div className="flex items-center justify-between px-4 py-1 bg-[#2E1A15] border-b border-[#DCC7A1]/30">
        {/* Logo and ENCHULA left */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula_Logo.webp"
            alt="Enchula Resort Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-white tracking-wider font-serif">ENCHULA</span>
        </Link>
        {/* Navigation links center, two rows */}
        <div className="hidden md:flex flex-col flex-1 justify-center items-center w-full">
          <div className="flex flex-nowrap justify-center items-center gap-x-4 gap-y-1 pb-1 w-full overflow-x-auto scrollbar-hide">
            {navLinksRow1.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white font-bold uppercase tracking-wide px-3 py-2 transition-all duration-200 nav-link whitespace-nowrap"
                style={{letterSpacing: '0.08em'}}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DCC7A1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </div>
          <div className="flex flex-nowrap justify-center items-center gap-x-4 gap-y-1 pt-1 w-full overflow-x-auto scrollbar-hide">
            {navLinksRow2.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white font-bold uppercase tracking-wide px-3 py-2 transition-all duration-200 nav-link whitespace-nowrap"
                style={{letterSpacing: '0.08em'}}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#DCC7A1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </Link>
            ))}
          </div>
        </div>
        {/* Book Now and Contact right */}
        <div className="flex flex-col items-end gap-2">
          <Link
            href="/booking"
            className="px-7 py-2 bg-[#DCC7A1] text-[#800000] font-extrabold rounded-full shadow-xl hover:bg-[#A04040] hover:text-white transition-all whitespace-nowrap text-base tracking-wide uppercase border-2 border-[#DCC7A1] hover:border-[#A04040] focus:outline-none focus:ring-2 focus:ring-[#A04040]"
            style={{ letterSpacing: '0.08em' }}
          >
            BOOK NOW
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border-2 border-[#A04040] text-[#A04040] bg-white font-bold rounded-full shadow hover:bg-[#A04040] hover:text-white transition-all text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#A04040]"
            style={{ letterSpacing: '0.08em' }}
          >
            CONTACT US
          </Link>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-end px-4 py-1 bg-[#2E1A15]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#DCC7A1] hover:text-white p-2"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#2E1A15] px-4 pb-4 space-y-2">
          <div className="flex flex-col gap-1">
            {navLinksRow1.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-white font-bold uppercase tracking-wide px-3 transition-all duration-200 border-b-2 border-transparent hover:border-[#DCC7A1] text-base"
                style={{letterSpacing: '0.08em'}}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            {navLinksRow2.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-white font-bold uppercase tracking-wide px-3 transition-all duration-200 border-b-2 border-transparent hover:border-[#DCC7A1] text-base"
                style={{letterSpacing: '0.08em'}}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="/booking"
            className="block mt-3 px-6 py-2 bg-[#DCC7A1] text-[#800000] font-extrabold rounded-full shadow-xl hover:bg-[#A04040] hover:text-white transition-all text-base tracking-wide uppercase text-center border-2 border-[#DCC7A1] hover:border-[#A04040] focus:outline-none focus:ring-2 focus:ring-[#A04040]"
            style={{ letterSpacing: '0.08em' }}
          >
            BOOK NOW
          </Link>
          <Link
            href="/contact"
            className="block mt-2 px-5 py-2 border-2 border-[#A04040] text-[#A04040] bg-white font-bold rounded-full shadow hover:bg-[#A04040] hover:text-white transition-all text-sm uppercase tracking-wide text-center focus:outline-none focus:ring-2 focus:ring-[#A04040]"
            style={{ letterSpacing: '0.08em' }}
          >
            CONTACT US
          </Link>
        </nav>
      )}
    </header>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */


