"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Star,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Award,
} from "lucide-react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: <Star className="w-5 h-5" />, text: "4-Star Luxury" },
    { icon: <MapPin className="w-5 h-5" />, text: "Nairobi - Namanga Rd, Kajiado" },
    { icon: <Award className="w-5 h-5" />, text: "Award-Winning" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#2E1A15] pt-24"
    >
      {/* Background Carousel */}
    {/* Background Carousel */}
<div className="absolute inset-0">
  {images.map((img, idx) => (
    <div
      key={idx}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        idx === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={img}
        alt={`Enchula Resort ${idx + 1}`}
        fill
        className="w-full h-full object-cover"
      />
    </div>
  ))}
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#3E1E1E]/70 via-[#2E1A15]/60 to-[#2E1A15]/80"></div>
</div>
      {/* Hero Content */}
      <div className="relative z-10 text-center text-[#F8F3EF] px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#A9745B]/20 backdrop-blur-md rounded-full border border-[#A9745B]/30 mb-8 animate-fadeIn">
          <Sparkles className="w-5 h-5 text-[#A9745B]" />
          <span className="text-sm font-semibold tracking-wide">
            LUXURY RESORT EXPERIENCE
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight animate-fadeInUp">
          Welcome to{" "}
          <span className="block mt-2 bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
            Enchula Resort
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-[#F8F3EF]/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
          Discover <span className="text-[#A9745B] font-semibold">luxury living</span> and{" "}
          <span className="text-[#A04040] font-semibold">authentic Kenyan hospitality</span>{" "}
          surrounded by breathtaking landscapes and serene elegance.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fadeInUp">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-[#F8F3EF]/10 backdrop-blur-md rounded-full border border-[#D7BFA8]/30"
            >
              <span className="text-[#A9745B]">{item.icon}</span>
              <span className="text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fadeInUp">
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-10 py-4 bg-gradient-to-r from-[#A04040] to-[#5C2E2E] text-white text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Stay
            </span>
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("about");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border-2 border-[#F8F3EF]/70 text-[#F8F3EF] text-lg font-semibold rounded-full bg-[#F8F3EF]/10 hover:bg-[#F8F3EF]/20 transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Discover More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp">
          {[
            { value: "45+", label: "Luxury Rooms" },
            { value: "10K+", label: "Happy Guests" },
            { value: "24/7", label: "Concierge" },
            { value: "5-Star", label: "Rating" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F3EF]/10 backdrop-blur-md rounded-2xl p-4 border border-[#F8F3EF]/20"
            >
              <div className="text-3xl font-bold text-[#A9745B] mb-1">
                {item.value}
              </div>
              <div className="text-sm text-[#F8F3EF]/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-[#F8F3EF]">
          <span className="text-sm font-semibold tracking-wide">
            SCROLL TO EXPLORE
          </span>
          <div className="w-6 h-10 border-2 border-[#F8F3EF]/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#A9745B] rounded-full animate-scrollDot"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-[#A9745B]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scrollDot {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-scrollDot {
          animation: scrollDot 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}