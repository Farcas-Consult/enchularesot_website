"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function FoodDrinksPoster() {
  const posterData = {
    category: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description: "Indulge in exquisite culinary experiences from morning till night.",
    detailImages: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="min-h-screen bg-[#2E1A15] text-[#FAF5F0] flex flex-col items-center px-6 py-16 md:px-20">
      <div className="w-full max-w-5xl">
        {/* Top Back Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#D7BFA8] hover:text-[#FAF5F0] mb-10 transition text-lg font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Amenities
        </Link>

        {/* Poster Header */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={posterData.image}
            alt={posterData.category}
            width={1200}
            height={600}
            className="object-cover w-full h-[60vh]"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#FAF5F0]">
              {posterData.category}
            </h1>
            <p className="text-lg md:text-xl text-[#E8DCC8] mt-4 max-w-2xl text-center">
              {posterData.description}
            </p>
          </div>
        </div>

        {/* Booklet / Carousel */}
        <div className="relative mt-12 w-full max-w-3xl h-[400px] md:h-[500px] flex items-center justify-center">
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
            className="px-6 py-3 bg-[#D7BFA8] text-[#2E1A15] font-semibold rounded-xl hover:bg-[#FAF5F0] transition"
          >
            Return to Amenities
          </Link>
        </div>
      </div>
    </section>
  );
}
