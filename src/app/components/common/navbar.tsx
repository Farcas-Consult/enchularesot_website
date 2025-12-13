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
    { name: "Accessibility", href: "/accessibility" },
    { name: "Amenities", href: "/amenities" },
    { name: "Blog", href: "/blog" },
    { name: "Dining", href: "/dinings" },
    { name: "Events", href: "/events" },
  ];
  const navLinksRow2 = [
    { name: "Experience & Activities", href: "/experience_activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Games", href: "/games" },
    { name: "Rooms", href: "/rooms" },
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
        <div className="hidden md:flex flex-col flex-1 justify-center items-center">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-1 pb-1">
            {navLinksRow1.map((link) => (
              <Link key={link.name} href={link.href} className="text-[#DCC7A1] hover:text-white text-sm font-semibold uppercase tracking-wide px-2 py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-1 pt-1">
            {navLinksRow2.map((link) => (
              <Link key={link.name} href={link.href} className="text-[#DCC7A1] hover:text-white text-sm font-semibold uppercase tracking-wide px-2 py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Book Now and Contact right */}
        <div className="flex flex-col items-end gap-2">
          <Link href="/booking" className="px-7 py-2 bg-white text-[#7A1F2E] font-bold rounded shadow-lg hover:bg-[#DCC7A1] transition-all whitespace-nowrap text-base tracking-wide uppercase">BOOK NOW</Link>
          <Link href="/contact" className="text-[#DCC7A1] hover:text-white text-sm font-bold uppercase tracking-wide px-3 py-1 transition-colors">Contact</Link>
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
          {[...navLinksRow1, ...navLinksRow2].map((link) => (
            link.name !== "Contact" ? (
              <Link key={link.name} href={link.href} className="block py-2 text-[#DCC7A1] hover:text-white text-sm font-semibold uppercase">
                {link.name}
              </Link>
            ) : null
          ))}
          <Link href="/booking" className="block mt-2 px-6 py-2 bg-white text-[#7A1F2E] font-bold rounded shadow-lg text-base tracking-wide uppercase text-center">BOOK NOW</Link>
          <Link href="/contact" className="block mt-2 text-[#DCC7A1] hover:text-white text-sm font-bold uppercase text-center px-3 py-1">Contact</Link>
        </nav>
      )}
    </header>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */


