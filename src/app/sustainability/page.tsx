"use client";

import React from "react";
import { Droplets, Leaf, Sun, Recycle, Heart, TreePine } from "lucide-react";

// ✅ Import local images from assets
import Solar from "@/assets/SolarEnergy2_result.png";
import Water from "@/assets/Waterconservation1.jpg";
import Waste from "@/assets/Zerowaste1.jpg";
import Gardens from "@/assets/OrganicGarden1.jpg";
import Reforestation from "@/assets/Nativeforest1.jpg";
import Community from "@/assets/communityimpact1.jpg";
import Background from "@/assets/Sustainability1.jpg";

export default function Sustainability() {
  const sustainabilityData = [
    {
      title: "Solar Energy",
      description:
        "100% of our resort is powered by renewable solar energy, reducing carbon emissions and embracing clean technology for a greener future.",
      icon: <Sun size={48} className="text-[#800000]" />,
      image: Solar,
    },
    {
      title: "Water Conservation",
      description:
        "Advanced rainwater harvesting and greywater recycling systems reduce water consumption by 60% while maintaining luxury standards.",
      icon: <Droplets size={48} className="text-[#A04040]" />,
      image: Water,
    },
    {
      title: "Zero Waste Initiative",
      description:
        "Our comprehensive recycling program and composting systems divert 95% of waste from landfills, creating a circular economy.",
      icon: <Recycle size={48} className="text-[#5C4033]" />,
      image: Waste,
    },
    {
      title: "Organic Gardens",
      description:
        "Farm-to-table dining featuring ingredients from our organic gardens, eliminating pesticides and supporting local biodiversity.",
      icon: <Leaf size={48} className="text-[#D7BFA8]" />,
      image: Gardens,
    },
    {
      title: "Native Reforestation",
      description:
        "We plant 10 native trees for every guest stay, actively restoring local ecosystems and offsetting your carbon footprint.",
      icon: <TreePine size={48} className="text-[#800000]" />,
      image: Reforestation,
    },
    {
      title: "Community Impact",
      description:
        "Supporting local artisans and conservation projects, ensuring your stay creates positive social and environmental change.",
      icon: <Heart size={48} className="text-[#A04040]" />,
      image: Community,
    },
  ];

  return (
    <section
      id="sustainability"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E1A15]/95 via-[#2E1A15]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              className="group relative bg-[#D7BFA8]/10 backdrop-blur-md rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-[#A04040]/30 hover:border-[#A04040] shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={item.image.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#2C1B16] mb-4 group-hover:text-[#A04040] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-[#FAF5F0] leading-relaxed">{item.description}</p>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/40 via-transparent to-transparent pointer-events-none"></div>
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
            <div className="text-[#D7BFA8] text-sm uppercase tracking-wide">Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#A04040] mb-2">95%</div>
            <div className="text-[#D7BFA8] text-sm uppercase tracking-wide">Waste Diverted</div>
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
