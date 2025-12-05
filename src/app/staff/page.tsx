"use client";

import React from "react";
import Link from "next/link";
import { Users, Award, Heart, Star } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const StaffPage = () => {
  const staffMembers = [
    {
      name: "Chef de Cuisine",
      role: "Head Chef",
      image: `${S3_BASE}/IMG_2422.webp`,
      description: "Leading our kitchen team with passion and expertise in traditional and contemporary cuisine.",
    },
    {
      name: "Sous Chef",
      role: "Assistant Head Chef",
      image: `${S3_BASE}/IMG_2419.webp`,
      description: "Supporting kitchen operations and ensuring consistent quality in every dish.",
    },
    {
      name: "Pastry Chef",
      role: "Desserts & Bakery",
      image: `${S3_BASE}/IMG_2417.webp`,
      description: "Creating delightful desserts and fresh baked goods daily.",
    },
    {
      name: "Kitchen Staff",
      role: "Culinary Team",
      image: `${S3_BASE}/IMG_2412.webp`,
      description: "Working together to deliver exceptional dining experiences.",
    },
  ];

  return (
    <section
      id="staff"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage: `url('${S3_BASE}/IMG_2422.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/95 via-[#2C1B16]/90 to-[#2E1A15]/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase flex items-center gap-2 justify-center">
              <Users className="w-4 h-4" />
              OUR TEAM
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Culinary</span> Team
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Our talented catering team brings passion and expertise to every dish. From traditional flavors to contemporary cuisine, they create memorable dining experiences for our guests.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#5C4033]/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#800000]/20 border border-[#800000]/30 mx-auto">
                <Heart className="w-6 h-6 text-[#D7BFA8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FAF5F0]">Culinary Passion</h3>
              <p className="text-[#D7BFA8]">Each chef brings creativity and dedication to the kitchen</p>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#800000]/20 border border-[#800000]/30 mx-auto">
                <Award className="w-6 h-6 text-[#D7BFA8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FAF5F0]">Quality Ingredients</h3>
              <p className="text-[#D7BFA8]">Using fresh, locally-sourced produce for authentic flavors</p>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#800000]/20 border border-[#800000]/30 mx-auto">
                <Star className="w-6 h-6 text-[#D7BFA8]" />
              </div>
              <h3 className="text-xl font-semibold text-[#FAF5F0]">Memorable Experiences</h3>
              <p className="text-[#D7BFA8]">Creating dishes that delight and satisfy every guest</p>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/90 via-[#2E1A15]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-[#FAF5F0] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#A9745B] font-semibold mb-2">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#D7BFA8] leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-12 border border-[#5C4033]/30">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-4">
            Experience Our Culinary Excellence
          </h2>
          <p className="text-[#D7BFA8] mb-8 max-w-2xl mx-auto">
            Our catering team is ready to serve you exceptional meals throughout your stay. Explore our dining options and book your culinary experience today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-gradient-to-r from-[#A04040] to-[#800000] text-white font-semibold rounded-full hover:from-[#800000] hover:to-[#A04040] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#5C4033]/20 backdrop-blur-sm text-[#D7BFA8] font-semibold rounded-full border border-[#800000]/30 hover:bg-[#5C4033]/40 hover:border-[#800000]/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffPage;
