"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Home, Users, BedDouble, Utensils, TreePine, Dumbbell, Camera, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";



export default function VirtualTourPage() {
  // Key areas for the static gallery
  const sections = [
    {
      id: "resort",
      label: "Resort",
      images: [`${S3_BASE}/IMG_2256.webp`, `${S3_BASE}/Reception1.jpg`, `${S3_BASE}/Surrounding1.jpg`,`${S3_BASE}/Surroundings2.jpg`,`${S3_BASE}/Surroundings3.jpg`],
      info: "Welcome to Enchula Resort. Explore our beautiful entrance and lobby areas."
    },
    {
      id: "accommodation",
      label: "Accommodation",
      images: [`${S3_BASE}/Room7.jpg`, `${S3_BASE}/Room2.jpg`, `${S3_BASE}/Room3.jpg`, `${S3_BASE}/Room4.jpg`,`${S3_BASE}/Room10.jpg`,`${S3_BASE}/Room8.jpg`,`${S3_BASE}/Room6.jpg`,`${S3_BASE}/Room5.jpg`,`${S3_BASE}/Room4.jpg`],
      info: "Relax in our luxurious rooms and suites."
    },
    {
      id: "restaurant",
      label: "Restaurant & Dining",
      images: [`${S3_BASE}/IMG_2236.webp`, `${S3_BASE}/Dining1.jpg`, `${S3_BASE}/Dining2.jpg`, `${S3_BASE}/Dining3.jpg`,`${S3_BASE}/Dining6.jpg`,`${S3_BASE}/Dining4.jpg`,`${S3_BASE}/Dining5.jpg`],
      info: "Dine in style with local and international cuisine."
    },
    {
      id: "events",
      label: "Events",
      images: [
        `${S3_BASE}/Conference1.jpg`,
        `${S3_BASE}/Conference2.jpg`,
        `${S3_BASE}/Event1.jpeg`,
        `${S3_BASE}/Event3.jpeg`,
        `${S3_BASE}/Event18.jpeg`,
        `${S3_BASE}/Event10.jpeg`,
        `${S3_BASE}/Event8.jpeg`,
        `${S3_BASE}/Event6.jpeg`,
        `${S3_BASE}/Part3.jpeg`,
        `${S3_BASE}/Event15.jpeg`,
        `${S3_BASE}/Event12.jpeg`
      ],
      info: "Host your special events in our versatile spaces."
    },
    {
      id: "gym",
      label: "Gym",
      images: [`${S3_BASE}/IMG_2174.webp`, `${S3_BASE}/IMG_2195.webp`, `${S3_BASE}/IMG_2182.webp`, `${S3_BASE}/IMG_2173.webp`],
      info: "Stay fit in our state-of-the-art gym."
    },
    {
      id: "wellness",
      label: "Wellness",
      images: [`${S3_BASE}/Wellness.webp`, `${S3_BASE}/IMG_2189.webp`,`${S3_BASE}/IMG_3391.webp`],
      info: "Rejuvenate at our spa and wellness center."
    },
    {
      id: "surroundings",
      label: "Surroundings",
      images: [`${S3_BASE}/Surrounding1.jpg`, `${S3_BASE}/Surroundings2.jpg`, `${S3_BASE}/Surroundings3.jpg`],
      info: "Explore the beautiful surroundings of the resort."
    },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const images = sections.find((s) => s.id === activeSection)?.images || [];
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSection, sections]);

  return (
    <section id="virtual-tour" className="relative min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 border-b border-neutral-200 flex justify-center gap-4 py-4 shadow-sm">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${activeSection === section.id ? 'bg-[#5A2E00] text-white' : 'bg-neutral-100 text-[#5C4033] hover:bg-[#5A2E00]/10'}`}
            onClick={() => { setActiveSection(section.id); setGalleryIndex(0); }}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Section Content: Only Images and Gallery Dots */}
      {sections.map((section) => (
        <div key={section.id} id={section.id} className={`w-full min-h-0 flex flex-col justify-center items-center ${activeSection === section.id ? '' : 'hidden'}`}>
          <div className="relative w-full flex items-center justify-center overflow-auto" style={{ minHeight: '0', minWidth: '0' }}>
            <img
              src={section.images[galleryIndex]}
              alt={section.label}
              style={{ width: '100vw', height: '80vh', objectFit: 'cover', display: 'block' }}
            />
            {section.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {section.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${galleryIndex === idx ? 'bg-[#5A2E00]' : 'bg-[#D7BFA8]/50'}`}
                    onClick={() => setGalleryIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Sticky Book Now Button */}
      <a
        href="/booking"
        className="fixed bottom-6 right-6 z-50 bg-[#FFD3A3] hover:bg-[#8F5F2F] text-[#4A2400] hover:text-white px-6 py-3 rounded-full shadow-2xl font-bold text-lg transition-all duration-300 border-2 border-[#8F5F2F]"
      >
        Book Now
      </a>
    </section>
  );
}