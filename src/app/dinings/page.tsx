"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// 🔴 Fixed: Removed trailing spaces in S3_BASE
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function DiningPage() {
  // Hero carousel images
  const backgroundImages = [
    `${S3_BASE}/Dining1.jpg`,
    `${S3_BASE}/Dining4.jpg`,
  ];
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to reserve a table or inquire about dining options."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;

  return (
    <section id="dining" className="relative min-h-screen bg-[var(--brand-background)]">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${
              index === currentBg ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${
                currentBg === idx ? 'bg-[var(--brand-secondary-maroon)]' : 'bg-white/40'
              } transition-all`}
              onClick={() => setCurrentBg(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dining Experiences Section — ONLY REAL OFFERINGS */}
        <div className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8F5F2F] mb-8 text-center">
            Dining Experiences
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Restaurant Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/Restaurant1.jpg`}
                  alt="Restaurant Interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-2">
                  Signature Restaurant
                </h3>
                <p className="text-[#4A2400] mb-3">
                  Savor international cuisine crafted with fresh local ingredients. Our restaurant offers a warm, elegant ambiance perfect for any meal.
                </p>
                <p className="text-[#B99A66] font-semibold">Open daily 7AM – 10PM</p>
              </div>
            </div>

            {/* Bar Lounge Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/Bar2.jpg`}
                  alt="Bar Lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-2">
                  Bar Lounge
                </h3>
                <p className="text-[#4A2400] mb-3">
                  Unwind with expertly crafted cocktails, premium spirits, and a curated wine selection in our sophisticated bar lounge.
                </p>
                <p className="text-[#B99A66] font-semibold">Open daily 12PM – 11PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Reservation Button */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 text-[#4A2400] bg-[#FFD3A3] hover:bg-[#8F5F2F] hover:text-white hover:scale-105 hover:shadow-xl border border-[#8F5F2F]"
          >
            Reserve Your Table on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}