"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function FoodDrinksPoster() {
  const posterData = {
    category: "Food & Drinks",
    heroImages: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    ],
    description: "Indulge in exquisite culinary experiences from morning till night.",
    detailImages: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);
  // Hero carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % posterData.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === posterData.detailImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? posterData.detailImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center px-0 py-0">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[340px] w-full flex items-center justify-center overflow-hidden">
        {posterData.heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === currentHero ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="relative z-30 text-center w-full px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#FAF5F0] mb-4 drop-shadow-lg">
            {posterData.category}
          </h1>
          <p className="text-lg md:text-xl text-[#D7BFA8] mt-4 max-w-2xl mx-auto font-light drop-shadow">
            {posterData.description}
          </p>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {posterData.heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${currentHero === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
              onClick={() => setCurrentHero(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl px-6 py-16 md:px-20">
        {/* Top Back Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#A04040] hover:text-[#800000] mb-10 transition text-lg font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Amenities
        </Link>

        {/* Booklet / Carousel */}
        <div className="relative mt-12 w-full max-w-3xl h-[400px] md:h-[500px] flex items-center justify-center bg-white rounded-2xl shadow-lg">
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-0 z-10 p-4 bg-black/50 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <Image
            src={posterData.detailImages[currentIndex]}
            alt={`Food detail ${currentIndex + 1}`}
            width={800}
            height={500}
            className="object-cover w-full h-full rounded-2xl shadow-lg"
          />

          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-0 z-10 p-4 bg-black/50 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Page indicators */}
          <div className="absolute bottom-4 flex gap-2">
            {posterData.detailImages.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-[#FAF5F0]" : "bg-[#D7BFA8]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#A04040] text-white font-semibold rounded-xl hover:bg-[#800000] transition"
          >
            Return to Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
