"use client";

import React, { useState, useEffect } from "react";
import { Star, MapPin, Sparkles, Award } from "lucide-react";
import Image from "next/image";

const S3_BASE =
  "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const Exterior1 = `${S3_BASE}/Relax.jpeg`;
const Environment1 = `${S3_BASE}/IMG_2257.webp`;
const Entrance1 = `${S3_BASE}/Welcome.jpeg`;
const Exterior2 = `${S3_BASE}/Surrounding1.jpg`;
const Conference = `${S3_BASE}/Event1.jpeg`;

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
    src: Conference,
    title: "Your Events Partners",
    subtitle: "Host unforgettable events with us",
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
          idx === (index - 1 + slides.length) % slides.length &&
          isTransitioning;

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
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight animate-fadeInUp font-lora"
                  style={{ color: "#FFFFFF" }}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-nunito"
                  style={{ color: "#FFFFFF" }}
                >
                  {slide.subtitle}
                </p>

                {/* Highlights removed as requested */}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fadeInUp">
                  <a href="/booking">
                    <button
                      className="group relative px-10 py-4 text-[#4A2400] text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "#FFD3A3" }}
                    >
                      Book Your Stay
                    </button>
                  </a>
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
