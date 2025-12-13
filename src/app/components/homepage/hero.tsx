"use client";

import React, { useState, useEffect } from "react";
import { Star, MapPin, Sparkles, Award } from "lucide-react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const Exterior1 = `${S3_BASE}/IMG_2422.webp`;
const Environment1 = `${S3_BASE}/IMG_2257.webp`;
const Entrance1 = `${S3_BASE}/IMG_2256.webp`;
const Exterior2 = `${S3_BASE}/IMG_2248.webp`;
const Swimmingpool1 = `${S3_BASE}/IMG_2267.webp`;

const slides = [
  {
    src: Entrance1,
    title: "Welcome to Enchula Resort",
    subtitle: "Discover luxury living and authentic Kenyan hospitality",
  },
  {
    src: Environment1,
    title: "Experience Serenity",
    subtitle: "Surrounded by breathtaking landscapes and elegance",
  },
  {
    src: Exterior1,
    title: "Relax in Style",
    subtitle: "A unique resort experience awaits",
  },
  {
    src: Exterior2,
    title: "Your Perfect Getaway",
    subtitle: "Relax, unwind, and enjoy world-class hospitality",
  },
  {
    src: Swimmingpool1,
    title: "Unforgettable Memories",
    subtitle: "Create moments that last a lifetime",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000); // Match this with CSS transition duration
    }, 6000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {slides.map((slide, idx) => {
        const isActive = idx === index;
        const isLeaving =
          idx === (index - 1 + slides.length) % slides.length && isTransitioning;

        return (
          <div
  key={idx}
  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
    isActive
      ? "opacity-100 z-10"
      : isLeaving
      ? "opacity-0 z-10"
      : "opacity-0 z-0"
  }`}
>
  <Image
    src={slide.src}
    alt={slide.title}
    fill
    priority
    className="object-cover"
    quality={100}
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />


            {isActive && (
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-[#F8F3EF] px-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#A9745B]/20 backdrop-blur-md rounded-full border border-[#A9745B]/30 mb-6 animate-fadeIn">
                  <Sparkles className="w-5 h-5 text-[#A9745B]" />
                  <span className="text-sm font-semibold tracking-wide">
                    LUXURY RESORT EXPERIENCE
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight animate-fadeInUp">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-2xl text-[#F8F3EF]/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
                  {slide.subtitle}
                </p>

                {/* Highlights removed as requested */}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fadeInUp">
                  <button className="group relative px-10 py-4 bg-gradient-to-r from-[#A04040] to-[#5C2E2E] text-white text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
                    <a href="/booking">Book Your Stay</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

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
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
