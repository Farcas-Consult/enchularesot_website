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
    image: `${S3_BASE}/IMG_2246.webp`,
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
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % tourSpots.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + tourSpots.length) % tourSpots.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const currentSpot = tourSpots[current];
  const Icon = currentSpot.icon;
  const categoryLabel = currentSpot.category === "resort" 
    ? "Inside Enchula Resort" 
    : "Experiences & Activities";

  return (
    <section id="virtual-tour" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {tourSpots.map((spot, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${spot.image}')` }}
          />
        ))}
        <div className="relative z-30 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FAF5F0] mb-4 drop-shadow-lg">
            Virtual Tour
          </h1>
          <p className="text-lg md:text-2xl text-[#D7BFA8] max-w-2xl mx-auto font-light drop-shadow">
            Explore Enchula Resort and its experiences from anywhere. Navigate through our beautiful spaces and discover what awaits you.
          </p>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {tourSpots.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${current === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-[#2C1B16]/60 hover:bg-[#5C4033]/60 text-[#FAF5F0] p-3 rounded-full backdrop-blur-sm border border-[#5C4033]/40 transition-all duration-300 hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-[#2C1B16]/60 hover:bg-[#5C4033]/60 text-[#FAF5F0] p-3 rounded-full backdrop-blur-sm border border-[#5C4033]/40 transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mb-8">
          <Link
            href="/rooms"
            className="px-5 py-2.5 bg-[#2C1B16]/60 hover:bg-[#5C4033]/60 text-[#FAF5F0] rounded-full backdrop-blur-sm border border-[#5C4033]/40 transition-all duration-300 hover:border-[#800000] flex items-center gap-2 text-sm font-medium"
          >
            ← Return to Rooms
          </Link>
          <Link
            href="/"
            className="px-4 py-2.5 bg-transparent hover:bg-[#2C1B16]/40 text-[#D7BFA8] rounded-full backdrop-blur-sm border border-[#5C4033]/30 flex items-center gap-2 text-sm font-medium"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </div>

        {/* Info Card */}
        <div className="max-w-2xl bg-white border border-[#5C4033]/20 rounded-3xl p-6 md:p-8 shadow-2xl mb-12">
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              currentSpot.category === "resort"
                ? "bg-[#800000]/10 text-[#A04040] border border-[#800000]/10"
                : "bg-[#2E8B57]/10 text-[#2E8B57] border border-[#2E8B57]/10"
            }`}>
              {categoryLabel}
            </span>
          </div>
          <div className="flex items-start gap-4">
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${currentSpot.color}20`, border: `1px solid ${currentSpot.color}60` }}
            >
              <Icon className="w-8 h-8" style={{ color: currentSpot.color }} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight text-[#2E1A15]">
                {currentSpot.title}
              </h1>
              <p className="text-base md:text-lg text-[#5C4033] leading-relaxed">
                {currentSpot.description}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="px-3 py-1.5 bg-[#2C1B16]/10 border border-[#5C4033]/10 rounded-full text-xs md:text-sm font-medium text-[#A04040]"
            >
               {currentSpot.id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
            </span>
            <span className="px-3 py-1.5 bg-[#800000]/10 text-[#A04040] rounded-full text-xs md:text-sm font-medium">
               Fully Accessible
            </span>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {tourSpots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                pauseAutoPlay();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-[#A04040] w-6"
                  : "bg-[#5C4033]/30 hover:bg-[#A04040]/60"
              }`}
              aria-label={`Go to ${tourSpots[idx].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}