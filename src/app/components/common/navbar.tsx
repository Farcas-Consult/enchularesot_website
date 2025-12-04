"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/assets/Enchula_Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New navigation with actual pages
  const navGroups = [
    {
      name: "Home",
      href: "/", // Your homepage
      dropdown: false,
    },
    {
      name: "About",
      dropdown: true,
      items: [
        { name: "About Us", href: "/about" },
        { name: "Health & Safety", href: "/health_safety" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Accessibility", href: "/accessibility" },
      ],
    },
    {
      name: "Stay",
      dropdown: true,
      items: [
        { name: "Rooms", href: "/rooms" },
        { name: "Amenities", href: "/amenities" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    {
      name: "Experiences",
      dropdown: true,
      items: [
        { name: "Dining", href: "/dinings" },
        { name: "Kids & Family", href: "/kids_family" },
        { name: "Wellness & Spa", href: "/wellness" },
        { name: "Events & Weddings", href: "/events" },
        { name: "Experience & Activities", href: "/experience_activities" },
        { name: "Gym", href: "/gym" },
      ],
    },
    {
      name: "Guest Info",
      dropdown: true,
      items: [
        { name: "Reviews", href: "/guest_reviews" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      name: "Book Now",
      href: "/booking",
      dropdown: false,
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2E1A15] shadow-lg py-4"
          : "bg-[#2E1A15]/20 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src={Logo}
            alt="Enchula Resort Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-[#5C4033]"
          />
          <span className="ml-2 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A04040] to-[#A9745B]">
            Enchula Resort
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navGroups.map((group) => (
            <div key={group.name} className="relative group">
              {group.dropdown ? (
                <>
                  <button className="text-[#F8F3EF] hover:text-[#A9745B] transition-colors font-medium flex items-center gap-1">
                    {group.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <div className="absolute left-0 mt-2 w-56 bg-[#2C1B16]/95 backdrop-blur-md rounded-xl shadow-2xl border border-[#5C4033]/30 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block w-full px-5 py-3 text-[#F8F3EF] hover:bg-[#5C4033]/30 hover:text-[#D7BFA8] text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={group.href!}
                  className="text-[#F8F3EF] hover:text-[#A9745B] transition-colors font-medium"
                >
                  {group.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#F8F3EF] hover:text-[#A9745B] transition-colors p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[800px] mt-2 pb-4" : "max-h-0"
        }`}
      >
        <nav className="bg-[#2E1A15] px-4 space-y-1">
          {navGroups.map((group) =>
            group.dropdown ? (
              <MobileDropdown key={group.name} title={group.name} items={group.items!} />
            ) : (
              <Link
                key={group.name}
                href={group.href!}
                className="block py-3 px-2 text-[#F8F3EF] hover:text-[#A9745B] font-medium"
              >
                {group.name}
              </Link>
            )
          )}
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
