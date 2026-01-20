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
const BgRoom1 = `${S3_BASE}/Room3.jpg`;
const BgRoom2 = `${S3_BASE}/Room4.jpg`;
const BgRoom3 = `${S3_BASE}/Room8.jpg`;

// Room images
const DoubleRoom1 = `${S3_BASE}/Room3.jpg`;
const DoubleRoom2 = `${S3_BASE}/Room2.jpg`;
const DoubleRoom3 = `${S3_BASE}/Room1.jpg`;
const TwinRoom1 = `${S3_BASE}/Rooms.jpeg`;
const TwinRoom2 = `${S3_BASE}/Room10.jpg`;
const TwinRoom3 = `${S3_BASE}/Room1.jpg`;
const SuperiorRoom1 = `${S3_BASE}/Room4.jpg`;
const SuperiorRoom2 = `${S3_BASE}/Room5.jpg`;
const SuperiorRoom3 = `${S3_BASE}/Room9.jpg`;

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
      name: "Standard  Room",
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
      color: "from-[#D2BB9E] to-[#741F31]",
      hoverColor: "from-[#741F31] to-[#D2BB9E]",
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
      color: "from-[#D2BB9E] to-[#741F31]",
      hoverColor: "from-[#741F31] to-[#D2BB9E]",
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
        "King Beds",
        "Premium Bedding",
        "Mini Bar",
        "Free WiFi",
        "Smart TV",
        "Luxury Bathroom",
      ],
      color: "from-[#741F31] to-[#D2BB9E]",
      hoverColor: "from-[#D2BB9E] to-[#741F31]",
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#8F5F2F] drop-shadow-lg mb-2">{activeRoom.name}</h1>
          <div className="inline-block px-5 py-2 bg-white/80 rounded-full text-brand font-semibold text-lg shadow">{activeRoom.category}</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Room Anchors for direct navigation */}
        <div id="standard-double-room" />
        <div id="twin-room" />
        <div id="superior-room" />
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
          {activeRoom.images.map((img, idx) => (
            <div key={idx} className="w-full h-[340px] md:h-[480px] overflow-hidden p-0 m-0 group">
              <Image src={img} alt={`${activeRoom.name} image ${idx+1}`} width={800} height={600} className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" />
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
            <div className="text-2xl font-bold text-[#8F5F2F]">{activeRoom.price} <span className="text-base font-normal text-[#B99A66]">/ night</span></div>
          </div>
          <p className="text-[#4A2400] text-lg leading-relaxed mb-8" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>{activeRoom.description}</p>
          <h4 className="text-xl font-bold text-[#B99A66] mb-4 font-serif" style={{ fontFamily: 'Lora, serif' }}>Room Amenities</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {activeRoom.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#4A2400] bg-neutral-100 rounded-lg px-3 py-2 border border-neutral-200">
                <ChevronRight className="w-4 h-4 text-[#A04040]" />
                <span className="text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>{amenity}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/booking" passHref>
              <button className="relative px-7 py-4 bg-[#FFD3A3] text-[#4A2400] rounded-xl font-semibold shadow-2xl overflow-hidden group border border-[#8F5F2F] transition-all duration-300 flex items-center gap-2 text-lg hover:bg-[#8F5F2F] hover:text-white">
                Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </button>
            </Link>
            <Link href="/Virtual-tour" passHref>
              <button className="px-7 py-4 bg-[#FFD3A3] text-[#4A2400] rounded-xl font-semibold border border-[#8F5F2F] transition-all duration-300 text-lg hover:bg-[#8F5F2F] hover:text-white">
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
                  ? "bg-[#741F31] text-[#D2BB9E] border-[#741F31]"
                  : "bg-[#D2BB9E] text-[#741F31] border-[#741F31] hover:bg-[#741F31] hover:text-[#D2BB9E]"
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