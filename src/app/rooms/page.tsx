"use client";

import React, { useState, useEffect } from "react";
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
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Background Images for Section Carousel
import BgRoom1 from "@/assets/Room7_result.png";
import BgRoom2 from "@/assets/Room11_result.png";
import BgRoom3 from "@/assets/Room14_result.png";

// Double Room Images
import DoubleRoom1 from "@/assets/Room14_result.png";
import DoubleRoom2 from "@/assets/Room28_result.png";
import DoubleRoom3 from "@/assets/Room17_result.png";

// Twin Room Images
import TwinRoom1 from "@/assets/Room26_result.png";
import TwinRoom2 from "@/assets/Room23_result.png";
import TwinRoom3 from "@/assets/Room6_result.png";

export default function Rooms() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background carousel images
  const backgroundImages: StaticImageData[] = [BgRoom1, BgRoom2, BgRoom3];

  interface Room {
    id: number;
    name: string;
    category: string;
    price: string;
    images: StaticImageData[];
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
      images: [DoubleRoom1, DoubleRoom2, DoubleRoom3],
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
      images: [TwinRoom1, TwinRoom2, TwinRoom3],
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

  const activeRoom = rooms[activeRoomIndex];
  const totalRoomImages = activeRoom.images.length;
  const totalBgImages = backgroundImages.length;

  // Reset room image when switching rooms
  const handleRoomChange = (index: number) => {
    setActiveRoomIndex(index);
    setCurrentRoomImageIndex(0);
  };

  // Room image navigation
  const nextRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev + 1) % totalRoomImages);
  };

  const prevRoomImage = () => {
    setCurrentRoomImageIndex((prev) => (prev - 1 + totalRoomImages) % totalRoomImages);
  };

  // Auto-rotate background every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % totalBgImages);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalBgImages]);

  return (
    <section id="rooms" className="relative py-24 px-4 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={bg}
              alt={`Background view ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay on top of all backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95" />
      </div>

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
            Each room is crafted to exceed your expectations and create unforgettable memories.
          </p>
        </div>

        {/* Room Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => handleRoomChange(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoomIndex === index
                  ? `bg-gradient-to-r ${room.color} text-[#FAF5F0] shadow-lg scale-105`
                  : "bg-[#2C1B16]/40 text-[#D7BFA8] hover:bg-[#5C4033]/20 backdrop-blur-sm border border-[#5C4033]/30"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Image Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-3xl h-[500px] shadow-2xl">
            <Image
              src={activeRoom.images[currentRoomImageIndex]}
              alt={`${activeRoom.name} - View ${currentRoomImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent" />

            {/* Room Image Navigation */}
            {totalRoomImages > 1 && (
              <>
                <button
                  onClick={prevRoomImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-opacity"
                  aria-label="Previous room image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextRoomImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-opacity"
                  aria-label="Next room image"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Room Image Indicators */}
            {totalRoomImages > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {activeRoom.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentRoomImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentRoomImageIndex ? "bg-white w-4" : "bg-white/50"
                    }`}
                    aria-label={`Go to room image ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Price Badge */}
            <div
              className={`absolute top-6 right-6 px-6 py-3 bg-gradient-to-r ${activeRoom.color} rounded-full backdrop-blur-sm shadow-lg`}
            >
              <div className="text-[#FAF5F0] text-center">
                <div className="text-2xl font-bold">{activeRoom.price}</div>
                <div className="text-xs">per night</div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#2C1B16]/70 backdrop-blur-md rounded-full border border-[#5C4033]/40 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#A04040]" />
              <span className="text-[#D7BFA8] text-sm font-semibold">{activeRoom.category}</span>
            </div>
          </div>
        </div>

        {/* Room Info Card */}
        <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 p-8">
          <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">{activeRoom.name}</h3>

          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-[#D7BFA8]">
              <Users className="w-5 h-5 text-[#A04040]" />
              <span>{activeRoom.guests}</span>
            </div>
            <div className="flex items-center gap-2 text-[#D7BFA8]">
              <Bed className="w-5 h-5 text-[#5C4033]" />
              <span>{activeRoom.size}</span>
            </div>
          </div>

          <p className="text-[#F8F3EF] text-lg leading-relaxed mb-8">{activeRoom.description}</p>

          {/* Amenities */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#FAF5F0] mb-4">Room Amenities</h4>
            <div className="grid grid-cols-2 gap-3">
              {activeRoom.amenities.map((amenity, idx) => (
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
          <div className="flex flex-wrap gap-4">
            <Link href="/booking" passHref>
              <button className="relative px-6 py-4 bg-gradient-to-r from-[#A04040] to-[#5C2E2E] text-white rounded-xl font-semibold shadow-2xl overflow-hidden group border border-transparent hover:border-[#800000] transition-all duration-300 flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </button>
            </Link>

            <Link href="/Virtual-tour" passHref>
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