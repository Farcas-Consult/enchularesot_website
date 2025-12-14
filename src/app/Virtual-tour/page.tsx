"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Home, Users, BedDouble, Utensils, TreePine, Dumbbell, Camera, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const tourSpots = [
  // ===== RESORT INTERIORS =====
  {
    id: "entrance",
    title: "Grand Entrance",
    description: "Welcome to Enchula Resort - where luxury meets nature in the heart of Kajiado.",
    image: `${S3_BASE}/IMG_2256.webp`,
    icon: Home,
    color: "#800000",
    category: "resort"
  },
  {
    id: "lobby",
    title: "Main Reception",
    description: "Our welcoming reception area with modern amenities and warm hospitality.",
    image: `${S3_BASE}/Reception1.jpg`,
    icon: Users,
    color: "#A9745B",
    category: "resort"
  },
  {
    id: "deluxe-room",
    title: "Deluxe Double Room",
    description: "Spacious rooms with king-size beds, modern amenities, and stunning views.",
    image: `${S3_BASE}/IMG_2346.webp`,
    icon: BedDouble,
    color: "#D7BFA8",
    category: "resort"
  },
  {
    id: "restaurant",
    title: "Dining Experience",
    description: "Exquisite dining with local and international cuisine in elegant settings.",
    image: `${S3_BASE}/IMG_2236.webp`,
    icon: Utensils,
    color: "#A04040",
    category: "resort"
  },

  {
    id: "twin-room",
    title: "Twin Room",
    description: "Comfortable twin rooms perfect for friends or family traveling together.",
    image: `${S3_BASE}/IMG_2321.webp`,
    icon: BedDouble,
    color: "#A9745B",
    category: "resort"
  },
  {
    id: "superior-room",
    title: "Superior Room",
    description: "Premium accommodations with enhanced amenities and elegant decor.",
    image: `${S3_BASE}/IMG_2300.webp`,
    icon: BedDouble,
    color: "#D7BFA8",
    category: "resort"
  },
  {
    id: "events",
    title: "Event Spaces",
    description: "Versatile venues for weddings, corporate events, and special celebrations.",
    image: `${S3_BASE}/Marriage1.webp`,
    icon: Camera,
    color: "#C23B22",
    category: "resort"
  },
  {
    id: "wellness",
    title: "Wellness & Spa",
    description: "Rejuvenating spa treatments and wellness experiences for complete relaxation.",
    image: `${S3_BASE}/Wellness.webp`,
    icon: Sparkles,
    color: "#8A653B",
    category: "resort"
  },
  {
    id: "gym",
    title: "Fitness Center",
    description: "State-of-the-art gym facilities to maintain your fitness routine.",
    image: `${S3_BASE}/IMG_2174.webp`,
    icon: Dumbbell,
    color: "#2E8B57",
    category: "resort"
  },

  // ===== EXPERIENCES =====
  {
    id: "nature-walks",
    title: "Nature Walks",
    description: "Guided walks through the beautiful Kenyan landscape surrounding our resort.",
    image: `${S3_BASE}/Nature2.webp`,
    icon: TreePine,
    color: "#2E8B57",
    category: "experiences"
  },
  {
    id: "cultural",
    title: "Maasai Cultural Experience",
    description: "Immerse yourself in authentic Maasai traditions and cultural heritage.",
    image: `${S3_BASE}/Maasai1.webp`,
    icon: Globe,
    color: "#C23B22",
    category: "experiences"
  },
  {
    id: "stargazing",
    title: "Stargazing",
    description: "Experience the clear African night sky with guided stargazing sessions.",
    image: `${S3_BASE}/Stargazing.webp`,
    icon: Camera,
    color: "#D2691E",
    category: "experiences"
  },
  {
    id: "outdoor",
    title: "Outdoor Activities",
    description: "Adventure awaits with various outdoor activities and excursions.",
    image: `${S3_BASE}/Outdoor1.webp`,
    icon: TreePine,
    color: "#8A653B",
    category: "experiences"
  },
];

export default function VirtualTourPage() {
  // Key areas for the static gallery
  const sections = [
    {
      id: "resort",
      label: "Resort",
      images: [`${S3_BASE}/IMG_2256.webp`, `${S3_BASE}/Reception1.jpg`, `${S3_BASE}/IMG_2246.webp`],
      info: "Welcome to Enchula Resort. Explore our beautiful entrance and lobby areas."
    },
    {
      id: "accommodation",
      label: "Accommodation",
      images: [`${S3_BASE}/Room1.jpg`, `${S3_BASE}/Room2.jpg`, `${S3_BASE}/Room3.jpg`, `${S3_BASE}/Room4.jpg`],
      info: "Relax in our luxurious rooms and suites."
    },
    {
      id: "restaurant",
      label: "Restaurant & Dining",
      images: [`${S3_BASE}/IMG_2236.webp`, `${S3_BASE}/Dining1.jpg`, `${S3_BASE}/Dining2.jpg`, `${S3_BASE}/Dining3.jpg`],
      info: "Dine in style with local and international cuisine."
    },
    {
      id: "events",
      label: "Events",
      images: [`${S3_BASE}/Marriage1.webp`, `${S3_BASE}/Conference1.jpg`, `${S3_BASE}/Conference2.jpg`],
      info: "Host your special events in our versatile spaces."
    },
    {
      id: "gym",
      label: "Gym",
      images: [`${S3_BASE}/IMG_2174.webp`, `${S3_BASE}/IMG_2195.webp`, `${S3_BASE}/IMG_2182.webp`],
      info: "Stay fit in our state-of-the-art gym."
    },
    {
      id: "wellness",
      label: "Wellness",
      images: [`${S3_BASE}/Wellness.webp`, `${S3_BASE}/IMG_2189.webp`],
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

  return (
    <section id="virtual-tour" className="relative min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/90 border-b border-neutral-200 flex justify-center gap-4 py-4 shadow-sm">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${activeSection === section.id ? 'bg-[#A04040] text-white' : 'bg-neutral-100 text-[#5C4033] hover:bg-[#A04040]/10'}`}
            onClick={() => { setActiveSection(section.id); setGalleryIndex(0); }}
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Section Content */}
      <div className="w-full flex flex-col items-center justify-center py-8 bg-gradient-to-b from-[#f8f3ef] to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E1A15] mb-2 text-center">Explore Your Private Oasis</h1>
        <p className="text-lg md:text-xl text-[#5C4033] max-w-2xl text-center mb-2">Step inside Enchula Resort and discover every corner before you arrive.</p>
      </div>

      {sections.map((section) => (
        <div key={section.id} id={section.id} className={`w-full min-h-[60vh] flex flex-col justify-center items-center ${activeSection === section.id ? '' : 'hidden'}`}>
          <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {section.images.length > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#A04040]/80 hover:bg-[#800000] text-white rounded-full p-2 z-10"
                onClick={() => setGalleryIndex((galleryIndex - 1 + section.images.length) % section.images.length)}
                aria-label="Previous image"
              >&#8592;</button>
            )}
            <img
              src={section.images[galleryIndex]}
              alt={section.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
            {section.images.length > 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#A04040]/80 hover:bg-[#800000] text-white rounded-full p-2 z-10"
                onClick={() => setGalleryIndex((galleryIndex + 1) % section.images.length)}
                aria-label="Next image"
              >&#8594;</button>
            )}
            {/* Gallery dots */}
            {section.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {section.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${galleryIndex === idx ? 'bg-[#A04040]' : 'bg-[#D7BFA8]/50'}`}
                    onClick={() => setGalleryIndex(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#A04040] mt-8 mb-4 text-center bg-white/80 px-4 py-2 rounded-xl shadow-lg">{section.label}</h2>
          <p className="text-[#5C4033] mb-6 text-center bg-white/80 px-4 py-2 rounded-xl shadow">{section.info}</p>
        </div>
      ))}

      {/* Sticky Book Now Button */}
      <a
        href="/booking"
        className="fixed bottom-6 right-6 z-50 bg-[#A04040] hover:bg-[#800000] text-white px-6 py-3 rounded-full shadow-2xl font-bold text-lg transition-all duration-300 border-2 border-white/30"
      >
        Book Now
      </a>
    </section>
  );
}