"use client";

import React, { useState, useEffect } from "react";
import { Droplets, Leaf, Sun, Recycle, Heart, TreePine } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/IMG_2257.webp`,
  `${S3_BASE}/IMG_2248.webp`,
  `${S3_BASE}/IMG_3385.webp`,
];

export default function Sustainability() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sustainabilityData = [
    {
      title: "Solar Energy",
      description:
        "100% of our resort is powered by renewable solar energy, reducing carbon emissions and embracing clean technology for a greener future.",
      icon: <Sun size={48} className="text-[#800000]" />,
    },
    {
      title: "Water Conservation",
      description:
        "Advanced rainwater harvesting and greywater recycling systems reduce water consumption by 60% while maintaining luxury standards.",
      icon: <Droplets size={48} className="text-[#A04040]" />,
    },
    {
      title: "Zero Waste Initiative",
      description:
        "Our comprehensive recycling program and composting systems divert 95% of waste from landfills, creating a circular economy.",
      icon: <Recycle size={48} className="text-[#5C4033]" />,
    },
    {
      title: "Organic Gardens",
      description:
        "Farm-to-table dining featuring ingredients from our organic gardens, eliminating pesticides and supporting local biodiversity.",
      icon: <Leaf size={48} className="text-[#D7BFA8]" />,
    },
    {
      title: "Native Reforestation",
      description:
        "We plant 10 native trees for every guest stay, actively restoring local ecosystems and offsetting your carbon footprint.",
      icon: <TreePine size={48} className="text-[#800000]" />,
    },
    {
      title: "Community Impact",
      description:
        "Supporting local artisans and conservation projects, ensuring your stay creates positive social and environmental change.",
      icon: <Heart size={48} className="text-[#A04040]" />,
    },
  ];

  return (
    <section id="sustainability" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === currentBgIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="relative z-30 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FAF5F0] mb-4 drop-shadow-lg">
            Sustainability
          </h1>
          <p className="text-lg md:text-2xl text-[#D7BFA8] max-w-2xl mx-auto font-light drop-shadow">
            Luxury meets responsibility. Discover our green initiatives and how your stay supports a better planet.
          </p>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {BACKGROUND_IMAGES.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${currentBgIndex === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
              onClick={() => setCurrentBgIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#A04040]/50">
            <span className="text-[#F8F3EF] font-semibold tracking-wide text-sm uppercase">
              SUSTAINABILITY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F8F3EF] mb-6 tracking-tight">
            Luxury Meets
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Our Commitments
            </span>
          </h2>
          <p className="text-[#D7BFA8] text-xl max-w-3xl mx-auto leading-relaxed">
            Experience guilt-free indulgence. Every moment at Enchula Resort actively contributes
            to environmental preservation and community empowerment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden hover:border-[#800000]/50 transition-all duration-300 border border-[#5C4033]/20 shadow-lg"
            >
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2E1A15] mb-4 group-hover:text-[#A04040] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5C4033] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-2">100%</div>
            <div className="text-[#A04040] text-sm uppercase tracking-wide">Renewable Energy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#A04040] mb-2">60%</div>
            <div className="text-[#A04040] text-sm uppercase tracking-wide">Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#A04040] mb-2">95%</div>
            <div className="text-[#A04040] text-sm uppercase tracking-wide">Waste Diverted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-2">10,000+</div>
            <div className="text-[#A04040] text-sm uppercase tracking-wide">Trees Planted</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5C4033] via-[#A04040] to-[#800000] text-white font-semibold rounded-full hover:from-[#A04040] hover:via-[#800000] hover:to-[#5C4033] transition-all duration-300 shadow-lg hover:shadow-[#A04040]/40 transform hover:scale-105"
          >
            <Leaf size={20} />
            Book Your Sustainable Escape
          </a>
        </div>
      </div>
    </section>
  );
}
