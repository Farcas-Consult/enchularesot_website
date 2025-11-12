"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Home, Users, BedDouble, Utensils, TreePine, Mountain, Camera, Globe } from "lucide-react";
import Link from "next/link";

const tourSpots = [
  // ===== RESORT INTERIORS =====
  {
    id: "entrance",
    title: "Grand Entrance",
    description: "Accessible ramp under majestic acacia trees. Staff ready to assist with luggage and orientation.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
    icon: Home,
    color: "#800000",
    category: "resort"
  },
  {
    id: "lobby",
    title: "Main Lodge",
    description: "Thatched-roof reception with Braille signage, hearing loop, and lowered counter for wheelchair users.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    icon: Users,
    color: "#A9745B",
    category: "resort"
  },
  {
    id: "accessible-room",
    title: "Accessible Deluxe Room",
    description: "Ground-floor suite with wide doors, roll-in shower, grab bars, and emergency alert system.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80",
    icon: BedDouble,
    color: "#D7BFA8",
    category: "resort"
  },
  {
    id: "restaurant",
    title: "Savanna Restaurant",
    description: "Open-air dining with lowered tables, allergy-aware menu, and views of the surrounding plains.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
    icon: Utensils,
    color: "#A04040",
    category: "resort"
  },

  // ===== SURROUNDINGS =====
  {
    id: "savanna-view",
    title: "Savanna Panorama",
    description: "Step outside to sweeping views of Kajiado’s golden grasslands, dotted with acacia trees and grazing wildlife.",
    image: "https://images.unsplash.com/photo-1544797073-e9707573b560?w=1920&q=80",
    icon: TreePine,
    color: "#8A653B",
    category: "surroundings"
  },
  {
    id: "maasai-village",
    title: "Maasai Cultural Experience",
    description: "Visit a nearby Maasai manyatta (village). Learn beadwork, traditional dance, and sustainable coexistence with nature.",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e7a1aa4e?w=1920&q=80",
    icon: Globe,
    color: "#C23B22",
    category: "surroundings"
  },
  {
    id: "wildlife-corridor",
    title: "Wildlife Corridor",
    description: "Enchula lies near Nairobi National Park’s southern buffer zone. Spot giraffes, zebras, and antelopes from our garden.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1920&q=80",
    icon: Mountain,
    color: "#2E8B57",
    category: "surroundings"
  },
  {
    id: "sunset-point",
    title: "Sunset Over the Rift",
    description: "End your day at our hillside viewpoint — watch the sun dip behind the Ngong Hills in fiery orange and purple hues.",
    image: "https://images.unsplash.com/photo-1506018718741-2e1f1b3d1f1e?w=1920&q=80",
    icon: Camera,
    color: "#D2691E",
    category: "surroundings"
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
    : "Around Kajiado";

  return (
    // ✅ Main wrapper: adds top padding to avoid navbar overlap
    <div className="min-h-screen bg-[#1A0F0B] text-[#FAF5F0] overflow-hidden relative pt-24 pb-12">
      {/* Background Image (full screen, but content won't be covered) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${currentSpot.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E1A15]/50 via-[#2C1B16]/70 to-[#221812]/90"></div>
      </div>

      {/* Content Container: safe from navbar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Navigation Buttons (top-right, below navbar) */}
        <div className="flex justify-end gap-3 mb-8">
          <Link
            href="/#rooms"
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
        <div className="max-w-2xl bg-[#2C1B16]/50 backdrop-blur-lg border border-[#5C4033]/40 rounded-3xl p-6 md:p-8 shadow-2xl mb-12">
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              currentSpot.category === "resort"
                ? "bg-[#800000]/20 text-[#D7BFA8] border border-[#800000]/30"
                : "bg-[#2E8B57]/20 text-[#A9D9A6] border border-[#2E8B57]/30"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                {currentSpot.title}
              </h1>
              <p className="text-base md:text-lg text-[#D7BFA8] leading-relaxed">
                {currentSpot.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span
              className="px-3 py-1.5 bg-[#2C1B16]/60 border border-[#5C4033]/40 rounded-full text-xs md:text-sm font-medium"
              style={{ color: currentSpot.color }}
            >
              📍 {currentSpot.id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
            </span>
            <span className="px-3 py-1.5 bg-[#800000]/20 text-[#D7BFA8] rounded-full text-xs md:text-sm font-medium">
              ♿ Fully Accessible
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
                  ? "bg-[#D7BFA8] w-6"
                  : "bg-[#5C4033]/50 hover:bg-[#D7BFA8]/60"
              }`}
              aria-label={`Go to ${tourSpots[idx].title}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel Controls (arrows) - positioned relative to viewport but won't cover navbar */}
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

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#800000] rounded-full animate-pulse"></div>
          <span className="text-sm text-[#D7BFA8]">Auto Tour • {categoryLabel}</span>
        </div>
      )}
    </div>
  );
}