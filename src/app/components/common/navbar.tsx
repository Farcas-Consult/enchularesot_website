"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Main nav with dropdowns
  const navLinksRow1 = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Amenities", href: "/amenities" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Dining", href: "/dinings" },
    { name: "Events", href: "/events" },
  ];
  const navLinksRow2 = [
    { name: "Experience & Activities", href: "/experience_activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Games", href: "/games" },
    { name: "Guest Reviews", href: "/guest_reviews" },
    { name: "Gym", href: "/gym" },
    { name: "Health & Safety", href: "/health_safety" },
    { name: "Kids & Family", href: "/kids_family" },
    { name: "Rooms", href: "/rooms" },
    { name: "Virtual Tour", href: "/Virtual-tour" },
    { name: "Wellness", href: "/wellness" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2E1A15] shadow">
      {/* Top Row: Contact Icons, Centered Logo, Book Now */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#DCC7A1]/40 bg-[#2E1A15]">
        {/* Left: Contact Icons */}
        <div className="flex items-center gap-4 text-[#DCC7A1] text-lg">
          <a href="tel:+254727000027" className="hover:text-white" title="Call"><Phone className="w-5 h-5" /></a>
          <a href="mailto:info@enchularesort.co.ke" className="hover:text-white" title="Email"><Mail className="w-5 h-5" /></a>
          <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" className="hover:text-white" title="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
        </div>
        {/* Center: Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image 
            src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula_Logo.webp"
            alt="Enchula Resort Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-bold text-white tracking-wider mt-1">Enchula</span>
        </Link>
        {/* Right: Book Now */}
        <Link href="/booking" className="px-6 py-2 bg-white text-[#7A1F2E] font-bold rounded shadow hover:bg-[#DCC7A1] transition-all whitespace-nowrap">BOOK NOW</Link>
      </div>
      {/* Main Navigation Row */}
      <nav className="hidden md:block bg-[#2E1A15] text-[#DCC7A1] font-semibold text-base border-b border-[#DCC7A1]/30">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 py-2">
          {navLinksRow1.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white px-2 py-1">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 pb-2">
          {navLinksRow2.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-white px-2 py-1">
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile Nav */}
      <div className="md:hidden flex justify-end px-4 py-2 bg-[#2E1A15]">
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
            <Link key={link.name} href={link.href} className="block py-2 text-[#DCC7A1] hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link href="/booking" className="block mt-2 px-4 py-2 bg-white text-[#7A1F2E] font-bold rounded text-center">BOOK NOW</Link>
        </nav>
      )}
    </header>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */

function MobileDropdown({ title, items }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-[#F8F3EF] hover:text-[#A9745B] py-3 px-2 font-medium"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all ${
          isOpen ? "max-h-96 mb-2" : "max-h-0"
        }`}
      >
        <div className="bg-[#2C1B16]/40 rounded-lg px-4 py-2 ml-2 border-l-2 border-[#800000] space-y-2">
          {items.map((item: any) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm text-[#D7BFA8] hover:text-[#FAF5F0]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
