
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Utensils,
  Coffee,
  Dumbbell,
  Waves,
  Calendar,
  Phone,
  Shirt,
} from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

function AmenitiesPage() {
  // Carousel images
  const backgroundImages = [
    `${S3_BASE}/Bar1.jpg`,
    `${S3_BASE}/Restaurant1.jpg`,
    `${S3_BASE}/IMG_2160.webp`,
  ];
  const [currentBg, setCurrentBg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const amenities = [
    {
      title: "Housekeeping Services",
      description:
        "Daily housekeeping with fresh linens, towel service, and room maintenance to ensure your comfort throughout your stay.",
      image: `${S3_BASE}/Housekeeping.png`,
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      title: "Laundry Services",
      description:
        "Professional laundry and dry cleaning services available. Same-day service for your convenience.",
      image: `${S3_BASE}/Laundry.png`,
      icon: <Shirt className="w-7 h-7" />,
    },
    {
      title: "Restaurant",
      description:
        "Exquisite dining experience featuring local and international cuisine. Open for breakfast, lunch, and dinner.",
      image: `${S3_BASE}/Restaurant1.jpg`,
      icon: <Utensils className="w-7 h-7" />,
    },
    {
      title: "Bar Lounge",
      description:
        "Relax and unwind at our elegant bar with a wide selection of premium beverages, cocktails, and light snacks.",
      image: `${S3_BASE}/Bar2.jpg`,
      icon: <Coffee className="w-7 h-7" />,
    },
    {
      title: "Fitness Center",
      description:
        "State-of-the-art gym equipped with modern cardio and strength training equipment. Open daily for all guests.",
      image: `${S3_BASE}/IMG_2160.webp`,
      icon: <Dumbbell className="w-7 h-7" />,
    },
    {
      title: "Swimming Pool",
      description:
        "Stunning outdoor pool with comfortable loungers and poolside service. Perfect for relaxation and recreation.",
      image: `${S3_BASE}/Swimmingpool1_result.png`,
      icon: <Waves className="w-7 h-7" />,
    },
    {
      title: "Events & Conferences",
      description:
        "Versatile event spaces for meetings, conferences, weddings, and special occasions. Full catering and AV equipment available.",
      image: `${S3_BASE}/Conference2.jpg`,
      icon: <Calendar className="w-7 h-7" />,
    },
    {
      title: "24/7 Reception",
      description:
        "Our friendly front desk team is available around the clock to assist with your needs, bookings, and inquiries.",
      image: `${S3_BASE}/Reception1.jpg`,
      icon: <Phone className="w-7 h-7" />,
    },
  ];

  return (
    <section id="amenities" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel with overlay text */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${idx === currentBg ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${currentBg === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
              onClick={() => setCurrentBg(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Amenities Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2E1A15] mb-8 text-center">Our Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-56 w-full">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#A04040] to-[#5C4033] flex items-center justify-center text-[#FAF5F0] border-2 border-[#FAF5F0]/20">
                    {amenity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">{amenity.title}</h3>
                  <p className="text-[#5C4033] leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Reception/Concierge Section */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 w-full">
            <img
              src={`${S3_BASE}/IMG_2419.webp`}
              alt="Reception Desk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold text-[#2E1A15] mb-4">Concierge Services</h3>
            <p className="text-[#5C4033] leading-relaxed mb-6">
              Our dedicated concierge team is here to assist you with restaurant reservations, tour bookings, transportation arrangements, and any special requests to enhance your stay at Enchula Resort.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#5C4033]">
                <Phone className="w-5 h-5 text-[#A9745B]" />
                <span>+254 727 000 027</span>
              </div>
              <div className="flex items-center gap-2 text-[#5C4033]">
                <Phone className="w-5 h-5 text-[#A9745B]" />
                <span>+254 734 000 027</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bar Section */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-3xl font-serif font-bold text-[#2E1A15] mb-4">Signature Bar Experience</h3>
            <p className="text-[#5C4033] leading-relaxed">
              Discover our carefully curated selection of wines, spirits, and craft cocktails. Our skilled bartenders create signature drinks in an elegant atmosphere perfect for evening relaxation or socializing with friends.
            </p>
          </div>
          <div className="relative h-80 w-full order-1 md:order-2">
            <img
              src={`${S3_BASE}/IMG_2229.webp`}
              alt="Bar Service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Gym Section */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 w-full">
            <img
              src={`${S3_BASE}/IMG_2160.webp`}
              alt="Gym Equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold text-[#2E1A15] mb-4">Premium Fitness Equipment</h3>
            <p className="text-[#5C4033] leading-relaxed">
              Stay active during your stay with access to our fully-equipped fitness center featuring treadmills, ellipticals, free weights, and resistance machines. Personal training sessions available upon request.
            </p>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/booking"
            className="inline-block text-lg px-8 py-4 rounded-full bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] text-[#2E1A15] font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AmenitiesPage;