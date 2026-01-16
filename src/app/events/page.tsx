"use client";

import Image from "next/image";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  // Corporate Retreats & Conferences
  `${S3_BASE}/Conference1.jpg`,
  
  `${S3_BASE}/Conference2.jpg`,
  
  `${S3_BASE}/Conference2.jpg`,
  
  `${S3_BASE}/Conference3.jpg`,
];

export default function EventsPage() {
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="events" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-3000 ease-in-out ${index === currentBgIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={img}
              alt="Event hero image"
              fill
              className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              quality={90}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {BACKGROUND_IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white transition-all ${currentBgIndex === idx ? 'bg-(--color-primary)' : 'bg-(--color-gold)/40'} hover:bg-(--color-primary)`}
              onClick={() => setCurrentBgIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10">
            <span className="text-[#B99A66] font-semibold tracking-wide text-sm uppercase">
              EVENTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8F5F2F] mb-6 leading-tight">
            Your <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Special Moments</span>, Our Serene Setting
          </h2>
          <p className="text-lg text-[#4A2400] max-w-3xl mx-auto">
            Social Events | Corporate Events - Event Planning, Event Decor, Catering
          </p>
        </div>

        {/* Retreats and Conferences Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#8F5F2F] mb-4 text-center">Retreats and Conferences</h2>
          <p className="text-lg text-[#4A2400] mb-8 text-center">Host your retreats and conferences in our professional, inspiring spaces.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              `${S3_BASE}/Conference1.jpg`,
              `${S3_BASE}/Conference2.jpg`,
              `${S3_BASE}/Conference3.jpg`,
              `${S3_BASE}/Conference4.jpg`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Retreats and conferences ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Corporate and Social Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#8F5F2F] mb-4 text-center">Corporate and Social Events</h2>
          <p className="text-lg text-[#4A2400] mb-8 text-center">Celebrate weddings, parties, and corporate gatherings in style.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              `${S3_BASE}/Marriage1.webp`,
              `${S3_BASE}/Marriage2.webp`,
              `${S3_BASE}/Marriage3.webp`,
              `${S3_BASE}/Birthday1.webp`,
              `${S3_BASE}/Birthday2.webp`,
              `${S3_BASE}/Birthday3.webp`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Corporate and social event ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Team Building Section */}
        <div>
          <h2 className="text-3xl font-bold text-[#8F5F2F] mb-4 text-center">Team Building</h2>
          <p className="text-lg text-[#4A2400] mb-8 text-center">Engage your team with fun and effective team building activities.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              `${S3_BASE}/Conference2.jpg`,
              `${S3_BASE}/Conference3.jpg`,
              `${S3_BASE}/Conference4.jpg`,
              `${S3_BASE}/Birthday2.webp`,
              `${S3_BASE}/Birthday3.webp`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Team building ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

       

        {/* CTA */}
        <div className="text-center bg-white p-8 rounded-2xl border border-[#5C4033]/20 shadow-lg">
          <p className="text-[#4A2400] text-lg mb-6 font-semibold">
            Ready to plan your event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-[#A04040]">
              <span className="text-2xl">📞</span>
              <a href="tel:+254723003164" className="font-semibold transition-colors px-4 py-2 rounded-full bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]">
                0723003164
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#A04040]">
              <span className="text-2xl">✉️</span>
              <a href="mailto:events@enchularesort.co.ke" className="font-semibold transition-colors px-4 py-2 rounded-full bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]">
                events@enchularesort.co.ke
              </a>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center gap-3">
            <span className="text-[#A04040]">Follow us:</span>
              <a 
                href="https://instagram.com/events.by.enchula" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]"
              >
                <span className="text-xl">📸</span>
                events.by.enchula
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}