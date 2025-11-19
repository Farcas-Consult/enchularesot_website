"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  CalendarDays,
  Award,
  Users,
  Sparkles,
  Heart,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

// ✅ Import local images from assets
import Exterior1 from "@/assets/Balcony2_result_result.png";
import Environment1 from "@/assets/Exterior2_result.png";
import Entrance1 from "@/assets/Entrance5_result.png";
import Exterior2 from "@/assets/Exterior13_result.png";
import Outside1 from "@/assets/Outside5_result.png";

export default function About() {
  // Use local images
  const images = [Exterior1, Environment1, Entrance1, Exterior2, Outside1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    { icon: <Award className="w-8 h-8" />, title: "4-Star Luxury", description: "Award-winning service" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Team", description: "Dedicated hospitality" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Premium Amenities", description: "World-class facilities" },
    { icon: <Heart className="w-8 h-8" />, title: "Warm Hospitality", description: "Kenyan excellence" },
  ];

  const highlights = [
    "Panoramic views of Kajiado plains",
    "Exquisite farm-to-table dining",
    "Infinity pool with sunset vistas",
    "Private event spaces available",
    "Wellness spa and fitness center",
    "Guided safari experiences",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image} alt="Enchula Resort" fill className="object-cover" priority={index === 0} />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-[#F8F3EF]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              About Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#FAF5F0]">
            Where Luxury Meets{" "}
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Kenyan Serenity
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Story Box */}
          <div className="lg:col-span-2 bg-[#2C1B16]/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#5C4033]/20 hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-[#FAF5F0]">Our Story</h3>
            </div>
            <p className="text-lg leading-relaxed text-[#D7BFA8] mb-6">
              Nestled in the breathtaking plains of{" "}
              <strong className="text-[#A04040]">Kajiado County</strong>, Enchula
              Resort blends the untamed beauty of Kenya with the refined elegance
              of modern hospitality...
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-[#2E1A15]/40 rounded-2xl p-4 border border-[#5C4033]/20 hover:bg-[#2C1B16]/50 transition-all duration-300"
                >
                  <div className="text-[#A04040] flex justify-center mb-2">{feature.icon}</div>
                  <h4 className="font-bold text-sm mb-1 text-[#FAF5F0]">{feature.title}</h4>
                  <p className="text-xs text-[#A9745B]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-[#2E1A15]/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#5C4033]/30 hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-[#FAF5F0]">Visit Us</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <MapPin className="text-[#5C4033]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Location</p>
                  <p className="text-[#D7BFA8]">Nairobi - Namanga Rd, Kajiado</p>
                  <p className="text-sm text-[#A9745B] mt-1">Scenic plains & wildlife</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <Phone className="text-[#800000]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">For Reservations Call:</p>
                  <p className="text-[#D7BFA8]">+254 727 000027</p>
                  <p className="text-sm text-[#A9745B] mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <Clock className="text-[#A04040]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Check-In</p>
                  <p className="text-[#D7BFA8]">12:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <CalendarDays className="text-[#800000]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Check-Out</p>
                  <p className="text-[#D7BFA8]">10:30 AM</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#A9745B] italic mt-6">
              Flexible booking and personalized service to match your schedule perfectly.
            </p>
          </div>
        </div>

        {/* Highlights, Stats, CTA, and Slide Indicators */}
        {/* Leave unchanged */}
      </div>
    </section>
  );
}
