"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Award,
  Users,
  Sparkles,
  Heart,
} from "lucide-react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function About() {
  const images = [
    `${S3_BASE}/IMG_2267.webp`,
    `${S3_BASE}/IMG_2377.webp`,
    `${S3_BASE}/IMG_2160.webp`,
    `${S3_BASE}/IMG_2161.webp`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-20 px-4"
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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              About Enchula Resort
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Where Luxury Meets{" "}
            <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Kenyan Serenity
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Story Section */}
          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-6">Our Story</h2>
            <div className="space-y-4 text-[#D7BFA8] leading-relaxed">
              <p>
                Nestled in the breathtaking plains of <strong className="text-[#FAF5F0]">Kajiado County</strong>, Enchula Resort offers a unique blend of untamed Kenyan beauty and refined modern hospitality.
              </p>
              <p>
                Our resort provides an escape from the ordinary, where guests can reconnect with nature while enjoying world-class amenities and warm Kenyan hospitality.
              </p>
              <p>
                From elegant accommodations to exceptional dining experiences, every detail at Enchula Resort is designed to create unforgettable memories.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#800000] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Location</p>
                  <p className="text-[#D7BFA8]">Along Nairobi - Namanga Road</p>
                  <p className="text-[#D7BFA8]">Kajiado, Kenya</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#800000] mt-1" size={24} />
                <div>
                  <p className="font-semibold text-[#FAF5F0] mb-1">Contact</p>
                  <p className="text-[#D7BFA8]">+254 727 000 027</p>
                  <p className="text-[#D7BFA8]">+254 734 000 027</p>
                  <p className="text-[#D7BFA8] mt-2">info@enchularesort.co.ke</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30 text-center hover:border-[#800000]/50 transition-all duration-300">
            <Award className="text-[#800000] mx-auto mb-4" size={40} />
            <h3 className="font-bold text-[#FAF5F0] mb-2">4-Star Luxury</h3>
            <p className="text-sm text-[#D7BFA8]">Award-winning service</p>
          </div>

          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30 text-center hover:border-[#800000]/50 transition-all duration-300">
            <Users className="text-[#800000] mx-auto mb-4" size={40} />
            <h3 className="font-bold text-[#FAF5F0] mb-2">Expert Team</h3>
            <p className="text-sm text-[#D7BFA8]">Dedicated hospitality</p>
          </div>

          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30 text-center hover:border-[#800000]/50 transition-all duration-300">
            <Sparkles className="text-[#800000] mx-auto mb-4" size={40} />
            <h3 className="font-bold text-[#FAF5F0] mb-2">Premium Amenities</h3>
            <p className="text-sm text-[#D7BFA8]">World-class facilities</p>
          </div>

          <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30 text-center hover:border-[#800000]/50 transition-all duration-300">
            <Heart className="text-[#800000] mx-auto mb-4" size={40} />
            <h3 className="font-bold text-[#FAF5F0] mb-2">Warm Hospitality</h3>
            <p className="text-sm text-[#D7BFA8]">Kenyan excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
