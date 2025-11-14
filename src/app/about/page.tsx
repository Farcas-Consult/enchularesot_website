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

export default function About() {
  // ✅ Cleaned extra spaces in image URLs
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
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

      {/* 🎨 Refined Overlay: Dark Neutrals Only */}
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
            <span className="block bg-gradient-to-r from-[#5C4033] via-[#800000] to-[#A04040] bg-clip-text text-transparent">
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
              {/* Location */}
              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <MapPin className="text-[#5C4033]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Location</p>
                  <p className="text-[#D7BFA8]">Nairobi - Namanga Rd, Kajiado</p>
                  <p className="text-sm text-[#A9745B] mt-1">Scenic plains & wildlife</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <Phone className="text-[#800000]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">For Reservations Call:</p>
                  <p className="text-[#D7BFA8]">+254 727 000027</p>
                  <p className="text-sm text-[#A9745B] mt-1">Available 24/7</p>
                </div>
              </div>

              {/* Check-In */}
              <div className="flex items-start gap-4 bg-[#2C1B16]/40 rounded-xl p-4 border border-[#5C4033]/20">
                <Clock className="text-[#A04040]" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Check-In</p>
                  <p className="text-[#D7BFA8]">12:00 PM</p>
                </div>
              </div>

              {/* Check-Out */}
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

        {/* Highlights */}
        <div className="bg-[#2C1B16]/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#5C4033]/20">
          <h3 className="text-2xl font-bold text-center text-[#FAF5F0] mb-8">
            What Makes Us{" "}
            <span className="text-[#A04040]">Exceptional</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#2E1A15]/40 rounded-xl p-4 border border-[#5C4033]/20 hover:bg-[#2C1B16]/50 transition-all duration-300 group"
              >
                <CheckCircle className="w-6 h-6 text-[#5C4033] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-[#D7BFA8]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Established", value: "2018", color: "#5C4033" },
            { label: "Happy Guests", value: "10K+", color: "#800000" },
            { label: "Luxury Rooms", value: "45+", color: "#A04040" },
            { label: "Concierge", value: "24/7", color: "#5C4033" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center bg-[#2E1A15]/40 rounded-2xl p-6 border border-[#5C4033]/20"
            >
              <div className="text-4xl font-bold" style={{ color: stat.color }} mb-2>
                {stat.value}
              </div>
              <div className="text-[#A9745B] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5C4033] to-[#800000] text-[#FAF5F0] font-semibold rounded-full hover:from-[#800000] hover:to-[#A04040] transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95"
          >
            <Heart className="w-5 h-5" /> Plan Your Escape
          </a>
        </div>

        {/* Slideshow Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#A04040] w-8"
                  : "bg-[#D7BFA8]/30 hover:bg-[#D7BFA8]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}