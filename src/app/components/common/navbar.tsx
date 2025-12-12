"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Top row: secondary links
  const topLinks = [
    { name: "Offers & Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Videos", href: "/videos" },
    { name: "Awards & Recognition", href: "/awards" },
    { name: "Virtual Tour Experience", href: "/Virtual-tour" },
  ];
  // Bottom row: main navigation
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms & Cabins", href: "/rooms" },
    { name: "Food & Drinks", href: "/dinings" },
    { name: "Meetings & Events", href: "/events" },
    { name: "Bush Massage & Spa", href: "/wellness" },
    { name: "Fun Experiences", href: "/experience_activities" },
    { name: "Gym", href: "/gym" },
    { name: "Kids & Family", href: "/kids_family" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#2E1A15] shadow" : "bg-[#2E1A15]/90"}`}>
      {/* Top Row: Secondary Links */}
      <div className="hidden md:flex justify-center items-center w-full py-2 text-sm font-semibold tracking-wide text-[#D7BFA8] bg-transparent">
        {topLinks.map((link, idx) => (
          <React.Fragment key={link.name}>
            <Link href={link.href} className="hover:text-[#A9745B] transition-colors px-2">
              {link.name}
            </Link>
            {idx < topLinks.length - 1 && <span className="mx-1">|</span>}
          </React.Fragment>
        ))}
      </div>
      {/* Bottom Row: Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer pr-6 min-w-[140px]">
          <Image 
            src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Enchula_Logo.webp"
            alt="Enchula Resort Logo"
            width={52}
            height={52}
            className="rounded-full object-cover border-2 border-[#A9745B] bg-white"
            priority
          />
          <span className="ml-3 text-xl font-bold text-[#A9745B] whitespace-nowrap">ENCHULA</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center flex-wrap gap-x-4 gap-y-2" style={{ marginLeft: '80px' }}>
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className="text-[#F8F3EF] hover:text-[#A9745B] font-medium px-2 py-1 rounded transition-colors"
              >
                {link.name}
              </Link>
              {idx < navLinks.length - 1 && <span className="text-[#A9745B] mx-1">|</span>}
            </React.Fragment>
          ))}
          <Link href="/booking" className="ml-4 px-4 py-1 bg-[#A9745B] hover:bg-[#A04040] text-white font-semibold rounded transition-all whitespace-nowrap">BOOK NOW</Link>
        </nav>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#F8F3EF] hover:text-[#A9745B] p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu: All links in one column */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[800px] mt-2 pb-4" : "max-h-0"
        }`}
      >
        <nav className="bg-[#2E1A15] px-4 space-y-1">
          {[...topLinks, ...navLinks].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 px-2 text-[#F8F3EF] hover:text-[#A9745B] font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/booking" className="block mt-2 px-4 py-1 bg-[#A9745B] hover:bg-[#A04040] text-white font-semibold rounded text-center">BOOK NOW</Link>
        </nav>
      </div>
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
