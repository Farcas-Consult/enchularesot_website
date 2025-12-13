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

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

// Background carousel images
const BgRoom1 = `${S3_BASE}/IMG_2346.webp`;
const BgRoom2 = `${S3_BASE}/IMG_2336.webp`;
const BgRoom3 = `${S3_BASE}/IMG_2323.webp`;

// Room images
const DoubleRoom1 = `${S3_BASE}/IMG_2346.webp`;
const DoubleRoom2 = `${S3_BASE}/IMG_2336.webp`;
const DoubleRoom3 = `${S3_BASE}/IMG_2323.webp`;
const TwinRoom1 = `${S3_BASE}/IMG_2321.webp`;
const TwinRoom2 = `${S3_BASE}/IMG_2315.webp`;
const TwinRoom3 = `${S3_BASE}/IMG_2310.webp`;
const SuperiorRoom1 = `${S3_BASE}/IMG_2300.webp`;
const SuperiorRoom2 = `${S3_BASE}/IMG_2305.webp`;
const SuperiorRoom3 = `${S3_BASE}/IMG_2346.webp`;

export default function Rooms() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [currentRoomImageIndex, setCurrentRoomImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background carousel images
  const backgroundImages: string[] = [BgRoom1, BgRoom2, BgRoom3];

  interface Room {
    id: number;
    name: string;
    category: string;
    price: string;
    images: string[];
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
      price: "From Kshs. 10,000",
      images: [DoubleRoom1, DoubleRoom2, DoubleRoom3],
      guests: "2 Guests",
      size: "30m²",
      description:
        "Designed for comfort and simplicity, featuring a cozy double bed, modern bathroom, and all essential amenities. Kenyan residents and non-residents rates available.",
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
      price: "From Kshs. 10,000",
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
    {
      id: 3,
      name: "Superior Room",
      category: "Luxury",
      price: "From Kshs. 12,000",
      images: [SuperiorRoom1, SuperiorRoom2, SuperiorRoom3],
      guests: "2 Guests",
      size: "35m²",
      description:
        "Experience enhanced luxury in our Superior Rooms with premium amenities, spacious layout, and elegant furnishings.",
      amenities: [
        "King/Twin Beds",
        "Premium Bedding",
        "Mini Bar",
        "Free WiFi",
        "Smart TV",
        "Luxury Bathroom",
      ],
      color: "from-[#800000] to-[#A04040]",
      hoverColor: "from-[#A04040] to-[#800000]",
    },
  ];

  const activeRoom = rooms[activeRoomIndex];
  const totalRoomImages = activeRoom.images.length;
  const totalBgImages = backgroundImages.length;

  // Reset room image when switching rooms
  const handleRoomChange = (index: number) => {
    setActiveRoomIndex(index);
    setCurrentRoomImageIndex(0);
    // Update hash in URL for accessibility
    const anchors = ["standard-double-room", "twin-room", "superior-room"];
    if (typeof window !== "undefined") {
      window.location.hash = `#${anchors[index]}`;
    }
  };

  // On mount or hash change, select the correct room
  useEffect(() => {
    const anchors = ["standard-double-room", "twin-room", "superior-room"];
    function setRoomFromHash() {
      const hash = window.location.hash.replace("#", "");
      const idx = anchors.indexOf(hash);
      if (idx !== -1) {
        setActiveRoomIndex(idx);
        setCurrentRoomImageIndex(0);
      }
    }
    setRoomFromHash();
    window.addEventListener("hashchange", setRoomFromHash);
    return () => window.removeEventListener("hashchange", setRoomFromHash);
  }, []);

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
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[420px] md:h-[520px] flex items-end justify-center overflow-hidden mb-12">
        <Image
          src={activeRoom.images[0]}
          alt={activeRoom.name}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 text-center pb-12 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">{activeRoom.name}</h1>
          <div className="inline-block px-5 py-2 bg-white/80 rounded-full text-brand font-semibold text-lg shadow">{activeRoom.category}</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Room Anchors for direct navigation */}
        <div id="standard-double-room" />
        <div id="twin-room" />
        <div id="superior-room" />
        {/* Gallery */}
        <div className="flex flex-row gap-6 mb-10 overflow-x-auto pb-2 snap-x">
          {activeRoom.images.map((img, idx) => (
            <div key={idx} className="min-w-[340px] h-[220px] md:min-w-[480px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg snap-center">
              <Image src={img} alt={`${activeRoom.name} image ${idx+1}`} width={480} height={320} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        {/* Details & Amenities */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="inline-flex items-center gap-2 text-lg text-brand font-semibold"><Users className="w-5 h-5 text-[#A04040]" /> {activeRoom.guests}</span>
              <span className="inline-flex items-center gap-2 text-lg text-brand font-semibold"><Bed className="w-5 h-5 text-[#5C4033]" /> {activeRoom.size}</span>
            </div>
            <div className="text-2xl font-bold text-[#A04040]">{activeRoom.price} <span className="text-base font-normal text-neutral-500">/ night</span></div>
          </div>
          <p className="text-neutral-800 text-lg leading-relaxed mb-8">{activeRoom.description}</p>
          <h4 className="text-xl font-bold text-brand mb-4">Room Amenities</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {activeRoom.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-neutral-700 bg-neutral-100 rounded-lg px-3 py-2 border border-neutral-200">
                <ChevronRight className="w-4 h-4 text-[#A04040]" />
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/booking" passHref>
              <button className="relative px-7 py-4 bg-gradient-to-r from-[#A04040] to-[#5C2E2E] text-white rounded-xl font-semibold shadow-2xl overflow-hidden group border border-transparent hover:border-[#800000] transition-all duration-300 flex items-center gap-2 text-lg">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </button>
            </Link>
            <Link href="/Virtual-tour" passHref>
              <button className="px-7 py-4 bg-neutral-100 hover:bg-neutral-200 text-brand rounded-xl font-semibold border border-neutral-300 transition-all duration-300 text-lg">
                Virtual Tour
              </button>
            </Link>
          </div>
        </div>

        {/* Room Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => handleRoomChange(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border text-lg ${
                activeRoomIndex === index
                  ? `bg-gradient-to-r ${room.color} text-white shadow-lg scale-105 border-transparent`
                  : "bg-white text-brand border-neutral-300 hover:bg-neutral-100"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}