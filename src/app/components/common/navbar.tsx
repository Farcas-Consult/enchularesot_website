"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";


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
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Dining", href: "/dinings" },
    { name: "Events & Meetings", href: "/events" },
    { name: "Wellness & Fitness", href: "/wellness" },
    { name: "Experiences & Activities", href: "/experience_activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Virtual Tour", href: "/Virtual-tour" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#2E1A15] shadow transition-all duration-300 m-0 p-0">
      {/* Mobile: Top row with call, WhatsApp, and email icons, logo, and book button */}
      <div className="md:hidden flex flex-col w-full bg-transparent">
        <div className="flex justify-between items-center w-full px-4 pt-2 pb-1">
          <div className="flex gap-4">
            <a href="tel:+254727000027" aria-label="Call" className="p-2"><Phone className="w-6 h-6 text-white" /></a>
            <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.93L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.4 0 4.63.84 6.4 2.36A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10Zm4.29-7.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.01-.35-.04-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.23-.18.18-.7.68-.7 1.66 0 .98.72 1.93.82 2.07.1.14 1.41 2.16 3.42 2.95.48.17.85.27 1.14.34.48.1.92.09 1.27.06.39-.04 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23Z" /></svg>
            </a>
            <a href="mailto:info@enchularesort.co.ke" aria-label="Email" className="p-2"><Mail className="w-6 h-6 text-white" /></a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#DCC7A1] hover:text-white p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="flex justify-center items-center w-full pb-2">
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
        </div>
        <div className="flex justify-center items-center w-full pb-2">
          <Link href="/booking" className="px-5 py-2 bg-white text-[#7B4B2A] font-bold rounded shadow hover:bg-[#A9745B] hover:text-white transition-colors text-xs tracking-widest uppercase" style={{letterSpacing: '0.12em'}}>BOOK</Link>
        </div>
      </div>
      {/* Desktop nav row remains unchanged below */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 bg-transparent">
        {/* Logo and contact icons */}
        <div className="flex items-center gap-2 min-w-[120px]">
          <Link href="/" className="flex items-center gap-2">
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
          <div className="flex items-center gap-3 ml-4">
            <a href="tel:+254727000027" aria-label="Call" className="p-2"><Phone className="w-5 h-5 text-white" /></a>
            <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.93L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.4 0 4.63.84 6.4 2.36A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10Zm4.29-7.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.12.13-.2.2-.33.07-.13.03-.25-.01-.35-.04-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.23-.18.18-.7.68-.7 1.66 0 .98.72 1.93.82 2.07.1.14 1.41 2.16 3.42 2.95.48.17.85.27 1.14.34.48.1.92.09 1.27.06.39-.04 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23Z" /></svg>
            </a>
            <a href="mailto:info@enchularesort.co.ke" aria-label="Email" className="p-2"><Mail className="w-5 h-5 text-white" /></a>
          </div>
        </div>
        {/* Main links center */}
        <nav className="flex flex-1 justify-center items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#F8F3EF] font-normal tracking-normal hover:text-[#A9745B] transition-colors text-xs capitalize"
              style={{letterSpacing: '0.02em'}}>
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Book Now right */}
        <div className="flex items-center ml-4">
          <Link href="/booking" className="px-5 py-2 bg-[#7B4B2A] text-white font-bold rounded shadow hover:bg-[#A9745B] transition-colors text-xs tracking-widest uppercase" style={{letterSpacing: '0.12em'}}>BOOK NOW</Link>
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
            <div className="flex flex-col gap-1 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-[#F8F3EF] font-normal capitalize tracking-normal px-3 transition-all duration-200 border-b-2 border-transparent hover:border-[#A9745B] text-xs"
                  style={{letterSpacing: '0.02em'}} 
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


