"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Grouped Navigation Structure
  const navGroups = [
    {
      name: "Home",
      id: "hero",
      dropdown: false,
    },
    {
      name: "About",
      dropdown: true,
      items: [
        { name: "About Us", id: "about" },
        { name: "Health & Safety", id: "health-safety" },
        { name: "Sustainability", id: "sustainability" },
        { name: "Accessibility", id: "accessibility" },
      ],
    },
    {
      name: "Stay",
      dropdown: true,
      items: [
        { name: "Rooms", id: "rooms" },
        { name: "Amenities", id: "amenities" },
        { name: "Gallery", id: "gallery" },
      ],
    },
    {
      name: "Experiences",
      dropdown: true,
      items: [
        { name: "Dining", id: "dining" },
        { name: "Kids & Family", id: "kids_family" },
        { name: "Wellness & Spa", id: "wellness" },
        { name: "Events & Weddings", id: "events" },
        { name: "Experience & Activities", id: "experience_activities" },
      ],
    },
    {
      name: "Guest Info",
      dropdown: true,
      items: [
        { name: "Reviews & Testimonials", id: "guest_reviews" },
        { name: "Blog & Travel Tips", id: "blog" },
        { name: "Contact", id: "contact" },
      ],
    },
    {
      name: "Book Now",
      id: "booking",
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
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src={Logo}
            alt="Enchula Resort Logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-[#5C4033]"
          />
          <span className="ml-2 text-xl md:text-2xl font-bold bg-linear-to-r from-[#A04040] to-[#A9745B] bg-clip-text text-transparent">
            Enchula Resort
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navGroups.map((group) => (
            <div key={group.name} className="relative group">
              {group.dropdown ? (
                <>
                  <button className="text-[#F8F3EF] hover:text-[#A9745B] transition-colors duration-200 font-medium flex items-center gap-1">
                    {group.name}
                    <ChevronDown className="w-4 h-4 mt-0.5" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-56 bg-[#2C1B16]/95 backdrop-blur-md rounded-xl shadow-2xl border border-[#5C4033]/30 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {group.items?.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-5 py-3 text-[#F8F3EF] hover:bg-[#5C4033]/30 hover:text-[#D7BFA8] transition-colors text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => scrollToSection(group.id!)}
                  className="text-[#F8F3EF] hover:text-[#A9745B] transition-colors duration-200 font-medium"
                >
                  {group.name}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#F8F3EF] hover:text-[#A9745B] transition-colors p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[800px] mt-2 pb-4" : "max-h-0"
        }`}
      >
        <nav className="bg-[#2E1A15] px-4 space-y-1">
          {navGroups.map((group) => (
            <div key={group.name}>
              {group.dropdown ? (
                <MobileDropdown
                  title={group.name}
                  items={group.items || []}
                  scrollToSection={scrollToSection}
                />
              ) : (
                <button
                  onClick={() => scrollToSection(group.id!)}
                  className="w-full text-left text-[#F8F3EF] hover:text-[#A9745B] transition-colors py-3 px-2 font-medium text-base"
                >
                  {group.name}
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

interface DropdownItem {
  id: string;
  name: string;
}

interface MobileDropdownProps {
  title: string;
  items: DropdownItem[];
  scrollToSection: (id: string) => void;
}

// Reusable Mobile Accordion Dropdown
function MobileDropdown({ title, items, scrollToSection }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-[#F8F3EF] hover:text-[#A9745B] transition-colors py-3 px-2 font-medium"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mb-2" : "max-h-0"
        }`}
      >
        <div className="bg-[#2C1B16]/40 rounded-lg px-4 py-2 space-y-2 ml-2 border-l-2 border-[#800000]">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-sm text-[#D7BFA8] hover:text-[#FAF5F0] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
