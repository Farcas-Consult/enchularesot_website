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

// Background carousel images
const backgroundImages = [
  `${S3_BASE}/IMG_2338.webp`,
  `${S3_BASE}/IMG_3385.webp`,
  `${S3_BASE}/IMG_2355.webp`,
];

const AmenitiesPage = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const amenities = [
    {
      title: "Housekeeping Services",
      description: "Daily housekeeping with fresh linens, towel service, and room maintenance to ensure your comfort throughout your stay.",
      image: `${S3_BASE}/IMG_2362.webp`,
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Laundry Services",
      description: "Professional laundry and dry cleaning services available. Same-day service for your convenience.",
      image: `${S3_BASE}/IMG_2356.webp`,
      icon: <Shirt className="w-6 h-6" />,
    },
    {
      title: "Restaurant",
      description: "Exquisite dining experience featuring local and international cuisine. Open for breakfast, lunch, and dinner.",
      image: `${S3_BASE}/IMG_2236.webp`,
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      title: "Bar Lounge",
      description: "Relax and unwind at our elegant bar with a wide selection of premium beverages, cocktails, and light snacks.",
      image: `${S3_BASE}/IMG_2230.webp`,
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art gym equipped with modern cardio and strength training equipment. Open daily for all guests.",
      image: `${S3_BASE}/IMG_2171.webp`,
      icon: <Dumbbell className="w-6 h-6" />,
    },
    {
      title: "Swimming Pool",
      description: "Stunning outdoor pool with comfortable loungers and poolside service. Perfect for relaxation and recreation.",
      image: `${S3_BASE}/IMG_3385.webp`,
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: "Events & Conferences",
      description: "Versatile event spaces for meetings, conferences, weddings, and special occasions. Full catering and AV equipment available.",
      image: `${S3_BASE}/IMG_2280.webp`,
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "24/7 Reception",
      description: "Our friendly front desk team is available around the clock to assist with your needs, bookings, and inquiries.",
      image: `${S3_BASE}/IMG_2240.webp`,
      icon: <Phone className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative min-h-screen">
      {/* Background Carousel */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/95 via-[#2C1B16]/90 to-[#2E1A15]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
              <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
                AMENITIES & SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF5F0] mb-6 leading-tight">
              World-Class <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Facilities</span>
            </h1>
            <p className="text-lg md:text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
              Experience exceptional comfort and convenience with our comprehensive range of premium amenities and services, designed to make your stay unforgettable.
            </p>
          </div>

          {/* Background Navigation Dots */}
          <div className="flex justify-center gap-2 mb-12">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBg(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBg
                    ? "bg-[#D7BFA8] w-8"
                    : "bg-[#5C4033] hover:bg-[#A9745B]"
                }`}
                aria-label={`View background ${index + 1}`}
              />
            ))}
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#2C1B16]/70 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/90 via-[#2E1A15]/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#A04040] to-[#5C4033] flex items-center justify-center text-[#FAF5F0] border-2 border-[#FAF5F0]/20">
                    {amenity.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#FAF5F0] mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-[#D7BFA8] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Reception Image */}
          <div className="mb-16 bg-[#2C1B16]/70 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`${S3_BASE}/IMG_2437.webp`}
                  alt="Reception Desk"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">
                  Concierge Services
                </h3>
                <p className="text-[#D7BFA8] leading-relaxed mb-6">
                  Our dedicated concierge team is here to assist you with restaurant reservations, tour bookings, transportation arrangements, and any special requests to enhance your stay at Enchula Resort.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-[#D7BFA8]">
                    <Phone className="w-5 h-5 text-[#A9745B]" />
                    <span>+254 727 000 027</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#D7BFA8]">
                    <Phone className="w-5 h-5 text-[#A9745B]" />
                    <span>+254 734 000 027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Bar Image */}
          <div className="mb-16 bg-[#2C1B16]/70 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">
                  Signature Bar Experience
                </h3>
                <p className="text-[#D7BFA8] leading-relaxed">
                  Discover our carefully curated selection of wines, spirits, and craft cocktails. Our skilled bartenders create signature drinks in an elegant atmosphere perfect for evening relaxation or socializing with friends.
                </p>
              </div>
              <div className="relative h-80 overflow-hidden order-1 md:order-2">
                <img
                  src={`${S3_BASE}/IMG_2229.webp`}
                  alt="Bar Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Alternative Gym Image */}
          <div className="mb-16 bg-[#2C1B16]/70 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={`${S3_BASE}/IMG_2160.webp`}
                  alt="Gym Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">
                  Premium Fitness Equipment
                </h3>
                <p className="text-[#D7BFA8] leading-relaxed">
                  Stay active during your stay with access to our fully-equipped fitness center featuring treadmills, ellipticals, free weights, and resistance machines. Personal training sessions available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-[#2C1B16]/70 backdrop-blur-md rounded-2xl p-12 border border-[#5C4033]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FAF5F0] mb-4">
              Experience Luxury & Comfort
            </h2>
            <p className="text-[#D7BFA8] mb-8 max-w-2xl mx-auto text-lg">
              Book your stay at Enchula Resort and enjoy access to all our premium amenities and personalized services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#A04040] to-[#800000] text-white font-semibold rounded-full hover:from-[#800000] hover:to-[#A04040] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Stay
              </Link>
              <Link
                href="/rooms"
                className="px-8 py-4 bg-[#5C4033]/20 backdrop-blur-sm text-[#D7BFA8] font-semibold rounded-full border border-[#800000]/30 hover:bg-[#5C4033]/40 hover:border-[#800000]/50 transition-all duration-300"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPage;