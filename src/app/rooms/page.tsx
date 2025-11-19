"use client";

import React, { useState } from "react";
import {
  Bed,
  Users,
  Wifi,
  Coffee,
  Tv,
  Wind,
  Sparkles,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import TwinRoom from "@/assets/twinroom.webp";
import DoubleRoom from "@/assets/doubleroom.webp";
import Link from "next/link";

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  interface Room {
    id: number;
    name: string;
    category: string;
    price: string;
    image: StaticImageData;
    guests: string;
    size: string;
    description: string;
    amenities: string[];
    color: string;
    hoverColor: string;
  }

  const rooms: Room[] = [
    {
      id: 1,
      name: "Standard Double Room",
      category: "Comfort",
      price: "$19",
      image: DoubleRoom,
      guests: "2 Guests",
      size: "30m²",
      description:
        "Designed for comfort and simplicity, the Standard Double Room features a cozy double bed, modern bathroom, and all essential amenities.",
      amenities: [
        "Double Bed",
        "Air Conditioning",
        "Private Bathroom",
        "WiFi",
        "Flat-Screen TV",
        "Tea/Coffee Maker",
      ],
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
      description:
        "A warm and inviting twin room with two single beds, ideal for friends or colleagues. Enjoy modern amenities and comfort.",
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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              ROOMS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Perfect Sanctuary
            </span>
          </h2>

          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Each room is crafted to exceed your expectations and create
            unforgettable memories.
          </p>
        </div>

        {/* Room Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoom === index
                  ? `bg-gradient-to-r ${room.color} text-[#FAF5F0] shadow-lg scale-105`
                  : "bg-[#2C1B16]/40 text-[#D7BFA8] hover:bg-[#5C4033]/20 backdrop-blur-sm border border-[#5C4033]/30"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image */}
          <div className="relative group overflow-hidden rounded-3xl h-[500px] shadow-2xl">
            <Image
              src={rooms[activeRoom].image}
              alt={rooms[activeRoom].name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent"></div>

            {/* Price Badge */}
            <div
              className={`absolute top-6 right-6 px-6 py-3 bg-gradient-to-r ${rooms[activeRoom].color} rounded-full backdrop-blur-sm shadow-lg`}
            >
              <div className="text-[#FAF5F0] text-center">
                <div className="text-2xl font-bold">{rooms[activeRoom].price}</div>
                <div className="text-xs">per night</div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#2C1B16]/70 backdrop-blur-md rounded-full border border-[#5C4033]/40 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#A04040]" />
              <span className="text-[#D7BFA8] text-sm font-semibold">
                {rooms[activeRoom].category}
              </span>
            </div>
          </div>
        </div>

        {/* Room Info Card */}
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

          {/* Amenities */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#FAF5F0] mb-4">
              Room Amenities
            </h4>

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

          {/* Buttons */}
          <div className="flex gap-4">
            <Link href="/booking">
              <button className="relative px-6 py-4 bg-gradient-to-r from-[#A04040] to-[#5C2E2E] text-white rounded-xl font-semibold shadow-2xl overflow-hidden group border border-transparent hover:border-[#800000] transition-all duration-300 flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
            </Link>

            <Link href="/Virtual-tour">
              <button className="px-6 py-4 bg-[#2C1B16]/40 hover:bg-[#5C4033]/20 text-[#FAF5F0] rounded-xl font-semibold backdrop-blur-sm border border-[#5C4033]/30 transition-all duration-300">
                Virtual Tour
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
