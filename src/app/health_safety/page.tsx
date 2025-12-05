"use client";

import React, { useState, useEffect } from "react";
import { Hand, UserCheck, Droplet, Shield, Sparkles, Wind, Thermometer, Stethoscope } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/IMG_2267.webp`,
  `${S3_BASE}/IMG_2272.webp`,
  `${S3_BASE}/IMG_2252.webp`,
];

const healthSafetyData = [
  {
    title: "Contactless Technology",
    description: "Seamless digital check-in/out and mobile room keys ensure zero-contact convenience throughout your entire stay.",
    icon: <UserCheck size={48} className="text-[#800000]" />,
  },
  {
    title: "Medical-Grade Sanitization",
    description: "Hospital-level disinfection protocols using EPA-approved products ensure every surface meets the highest hygiene standards.",
    icon: <Droplet size={48} className="text-[#A04040]" />,
  },
  {
    title: "Advanced Air Purification",
    description: "HEPA filtration systems continuously circulate and purify air, removing 99.97% of airborne particles and allergens.",
    icon: <Wind size={48} className="text-[#D7BFA8]" />,
  },
  {
    title: "Certified Safety Protocols",
    description: "Our staff undergo rigorous training and follow WHO-endorsed health protocols to ensure your complete protection.",
    icon: <Shield size={48} className="text-[#5C4033]" />,
  },
  {
    title: "Wellness Monitoring",
    description: "24/7 health support with temperature screening and on-call medical professionals for your peace of mind.",
    icon: <Thermometer size={48} className="text-[#800000]" />,
  },
  {
    title: "Hygiene Stations",
    description: "Premium hand sanitizer and hygiene stations strategically placed throughout the resort for instant access.",
    icon: <Hand size={48} className="text-[#A04040]" />,
  },
  {
    title: "On-Site Medical Care",
    description: "Fully equipped medical facility with licensed healthcare professionals available around the clock for any concerns.",
    icon: <Stethoscope size={48} className="text-[#5C4033]" />,
  },
  {
    title: "Ultra-Clean Guarantee",
    description: "Every room receives a deep-clean certification before your arrival, with sealed door tags confirming sanitation.",
    icon: <Sparkles size={48} className="text-[#D7BFA8]" />,
  },
];

export default function Health_Sanity() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="health-safety"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGES[currentBgIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#5C4033]/85 to-[#2E1A15]/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#F8F3EF] font-semibold tracking-wide text-sm uppercase">HEALTH & SAFETY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
             Your Health & 
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Wellbeing Priority First
            </span>
          </h2>
          <p className="text-[#F8F3EF] text-xl max-w-3xl mx-auto leading-relaxed">
            Your wellness is our priority. Experience world-class hospitality backed by 
            comprehensive health protocols and cutting-edge safety technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthSafetyData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl overflow-hidden hover:border-[#800000]/50 transition-all duration-300 border border-[#5C4033]/30"
            >
              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C1B16] mb-3 group-hover:text-[#800000] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#FAF5F0] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/booking" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5C4033] via-[#800000] to-[#A04040] text-white font-semibold rounded-full hover:from-[#800000] hover:via-[#A04040] hover:to-[#5C4033] transition-all duration-300 shadow-lg hover:shadow-[#800000]/40 transform hover:scale-105"
          >
            <Shield size={20} />
            Book With Confidence
          </a>
        </div>
      </div>
    </section>
  );
}
