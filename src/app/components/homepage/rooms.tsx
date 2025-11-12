"use client";

import React, { useState } from "react";
import { Bed, Users, Wifi, Coffee, Tv, Wind, Sparkles, ChevronRight, Star, ArrowRight } from 'lucide-react';
import Image from "next/image";
import TwinRoom from '@/assets/twinroom.webp';
import DoubleRoom from '@/assets/doubleroom.webp';
import Link from "next/link";

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      id: 1,
      name: "Standard Double Room",
      category: "Comfort",
      price: "$19",
      image: DoubleRoom,
      guests: "2 Guests",
      size: "30m²",
      description: "Designed for comfort and simplicity, the Standard Double Room features a cozy double bed, modern bathroom, and all essential amenities for a relaxing stay.",
      amenities: ["Double Bed", "Air Conditioning", "Private Bathroom", "WiFi", "Flat-Screen TV", "Tea/Coffee Maker"],
      // 🎨 Palette-aligned gradient: Primary Brown → Secondary Maroon (not gold)
      color: "from-[#5C4033] to-[#800000]",
      hoverColor: "from-[#800000] to-[#A04040]",
    },
    {
      id: 2,
      name: "Twin Room",
      category: "Standard",
      price: "$21",
      image: TwinRoom,
      guests: "2 Guests",
      size: "26m²",
      description: "A warm and inviting twin room with two single beds, ideal for friends or colleagues. Enjoy modern amenities and comfort.",
      amenities: [
        "Two Single Beds",
        "Free WiFi",
        "Private Bathroom",
        "Smart TV",
        "Desk Area",
        "Air Conditioning",
      ],
      color: "from-[#5C4033] to-[#A04040]",
      hoverColor: "from-[#A04040] to-[#5C4033]",
    },
  ];

  const featuredAmenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "High-Speed WiFi" },
    { icon: <Coffee className="w-6 h-6" />, name: "Premium Coffee" },
    { icon: <Tv className="w-6 h-6" />, name: "Smart TV" },
    { icon: <Wind className="w-6 h-6" />, name: "Climate Control" },
    { icon: <Sparkles className="w-6 h-6" />, name: "Daily Housekeeping" },
    { icon: <Bed className="w-6 h-6" />, name: "Luxury Bedding" },
  ];

  const stats = [
    { label: "Luxury Rooms", value: "45+" },
    { label: "Rating", value: "5-Star" },
    { label: "Room Service", value: "24/7" },
    { label: "Satisfaction", value: "100%" },
  ];

  return (
    <section
      id="rooms"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🎨 Refined overlay — dark neutrals only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header — palette-consistent text & accents */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">Luxury Accommodations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-[#5C4033] via-[#800000] to-[#A04040] bg-clip-text text-transparent">
              Perfect Sanctuary
            </span>
          </h2>
          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Each room is a masterpiece of design and comfort, crafted to exceed your highest expectations
            and create unforgettable memories.
          </p>
        </div>

        {/* Room Selection Buttons — brown/maroon gradients */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoom === index
                  ? `bg-gradient-to-r ${room.color} text-[#FAF5F0] shadow-lg scale-105`
                  : 'bg-[#2C1B16]/40 text-[#D7BFA8] hover:bg-[#5C4033]/20 backdrop-blur-sm border border-[#5C4033]/30'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Room Image */}
          <div className="relative group overflow-hidden rounded-3xl h-[500px] shadow-2xl">
            <Image
              src={rooms[activeRoom].image}
              alt={rooms[activeRoom].name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent"></div>

            {/* Price Badge — palette-aligned */}
            <div className={`absolute top-6 right-6 px-6 py-3 bg-gradient-to-r ${rooms[activeRoom].color} rounded-full backdrop-blur-sm shadow-lg`}>
              <div className="text-[#FAF5F0] text-center">
                <div className="text-2xl font-bold">{rooms[activeRoom].price}</div>
                <div className="text-xs">per night</div>
              </div>
            </div>

            {/* Category Badge — subtle, elegant */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#2C1B16]/70 backdrop-blur-md rounded-full border border-[#5C4033]/40">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#A04040] fill-[#A04040]" />
                <span className="text-[#D7BFA8] text-sm font-semibold">{rooms[activeRoom].category}</span>
              </div>
            </div>
          </div>

          {/* Room Info Panel — dark-neutral card */}
          <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 p-8">
            <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">{rooms[activeRoom].name}</h3>

            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-[#D7BFA8]">
                <Users className="w-5 h-5 text-[#A04040]" />
                <span>{rooms[activeRoom].guests}</span>
              </div>
              <div className="flex items-center gap-2 text-[#D7BFA8]">
                <Bed className="w-5 h-5 text-[#5C4033]" />
                <span>{rooms[activeRoom].size}</span>
              </div>
            </div>

            <p className="text-[#F8F3EF] text-lg leading-relaxed mb-8">
              {rooms[activeRoom].description}
            </p>

            {/* Room Amenities */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#FAF5F0] mb-4">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {rooms[activeRoom].amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[#D7BFA8] bg-[#2C1B16]/30 rounded-lg px-3 py-2 border border-[#5C4033]/20"
                  >
                    <ChevronRight className="w-4 h-4 text-[#5C4033]" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
             <button
  className={`flex-1 px-8 py-4 bg-gradient-to-r ${rooms[activeRoom].color} text-[#FAF5F0] rounded-xl font-semibold 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 ease-out 
    flex items-center justify-center gap-2 
    hover:scale-[1.02] active:scale-[0.98] 
    border border-white/10 hover:border-[#D7BFA8]/30
    group relative overflow-hidden`}
>
  <a
    href="#booking"
    className="flex items-center gap-2 w-full h-full"
  >
    Book Now
    <ArrowRight className="w-5 h-3 transition-transform duration-300 group-hover:translate-x-1" />
  </a>
  {/* Optional inner highlight on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
</button>
            <Link href="/Virtual-tour">
  <button className="px-6 py-4 bg-[#2C1B16]/40 hover:bg-[#5C4033]/20 text-[#FAF5F0] rounded-xl font-semibold backdrop-blur-sm border border-[#5C4033]/30 transition-all duration-300 hover:border-[#800000]">
    Virtual Tour
  </button>
</Link>
            </div>
          </div>
        </div>

        {/* All Room Categories Summary */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#FAF5F0] text-center mb-8">
            All Room Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                onClick={() => setActiveRoom(index)}
                className="group relative bg-[#2C1B16]/30 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/20 hover:border-[#800000]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${room.color} rounded-full text-[#FAF5F0] text-sm font-bold`}
                  >
                    {room.price}/night
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-[#FAF5F0] mb-2">
                    {room.name}
                  </h4>
                  <div className="flex items-center justify-between text-[#D7BFA8] text-sm">
                    <span>{room.guests}</span>
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Amenities — consistent icons & hover */}
        <div className="bg-[#2C1B16]/30 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 p-8">
          <h3 className="text-2xl font-bold text-[#FAF5F0] text-center mb-8">
            Standard in Every Room
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredAmenities.map((amenity, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="w-16 h-16 mx-auto mb-3 bg-[#2C1B16]/50 rounded-full flex items-center justify-center text-[#5C4033] group-hover:bg-gradient-to-r group-hover:from-[#5C4033] group-hover:to-[#800000] group-hover:text-[#FAF5F0] transition-all duration-300 group-hover:scale-110"
                >
                  {amenity.icon}
                </div>
                <p className="text-[#F8F3EF] text-sm font-medium">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section — palette-tuned */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-[#2C1B16]/30 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/20 hover:border-[#800000]/40 transition-colors"
            >
              <div className="text-4xl font-bold text-[#A04040] mb-2">
                {stat.value}
              </div>
              <div className="text-[#D7BFA8] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator — subtle & elegant */}
        <div className="flex justify-center mt-12">
          <div className="animate-bounce opacity-70">
            <div className="w-6 h-10 border-2 border-[#D7BFA8]/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[#A04040] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}