"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Hotel,
  UtensilsCrossed,
  Waves,
  Bed,
  Sparkles,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const GalleryBg1 = `${S3_BASE}/Marriage1.webp`;
const GalleryBg2 = `${S3_BASE}/Birthday2.webp`;
const GalleryBg3 = `${S3_BASE}/IMG_2383.webp`;
const Outside = `${S3_BASE}/IMG_2272.webp`;
const Inside = `${S3_BASE}/IMG_2275.webp`;
const Exterior = `${S3_BASE}/IMG_3457.webp`;
const Room1 = `${S3_BASE}/IMG_2315.webp`;
const Room2 = `${S3_BASE}/IMG_2346.webp`;
const Room3 = `${S3_BASE}/IMG_2321.webp`;
const Birthroom1 = `${S3_BASE}/IMG_2342.webp`;
const Birthroom2 = `${S3_BASE}/IMG_3490.webp`;
const Birthroom3 = `${S3_BASE}/IMG_2237.webp`;
const Gym = `${S3_BASE}/IMG_2173.webp`;
const Spa = `${S3_BASE}/IMG_3391.webp`;
const Swimmingpool = `${S3_BASE}/IMG_3429.webp`;
const Table = `${S3_BASE}/IMG_2204.webp`;
const Breakfast = `${S3_BASE}/Breakfast.webp`;
const Food = `${S3_BASE}/Food.webp`;

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const galleryImages: GalleryImage[] = [
                      { src: `${S3_BASE}/Surrounding1.jpg`, alt: "Surroundings 1", category: "Surroundings" },
                    { src: `${S3_BASE}/Surroundings2.jpg`, alt: "Surroundings 2", category: "Surroundings" },
                    { src: `${S3_BASE}/Surroundings3.jpg`, alt: "Surroundings 3", category: "Surroundings" },
                    { src: `${S3_BASE}/Surroundings5.jpg`, alt: "Surroundings 5", category: "Surroundings" },
                  { src: `${S3_BASE}/Pathway1.jpg`, alt: "Pathway 1", category: "Pathway" },
                  { src: `${S3_BASE}/Reception1.jpg`, alt: "Reception 1", category: "Reception" },
                { src: `${S3_BASE}/Conference1.jpg`, alt: "Conference 1", category: "Conference" },
                { src: `${S3_BASE}/Conference2.jpg`, alt: "Conference 2", category: "Conference" },
                { src: `${S3_BASE}/Conference3.jpg`, alt: "Conference 3", category: "Conference" },
                { src: `${S3_BASE}/Conference4.jpg`, alt: "Conference 4", category: "Conference" },
              { src: `${S3_BASE}/Breakfast1.jpg`, alt: "Breakfast 1", category: "Breakfast" },
            { src: `${S3_BASE}/Bar1.jpg`, alt: "Bar 1", category: "Bar" },
            { src: `${S3_BASE}/Bar2.jpg`, alt: "Bar 2", category: "Bar" },
          { src: `${S3_BASE}/Room1.jpg`, alt: "Room 1", category: "Rooms" },
          { src: `${S3_BASE}/Room2.jpg`, alt: "Room 2", category: "Rooms" },
          { src: `${S3_BASE}/Room3.jpg`, alt: "Room 3", category: "Rooms" },
          { src: `${S3_BASE}/Room4.jpg`, alt: "Room 4", category: "Rooms" },
          { src: `${S3_BASE}/Room5.jpg`, alt: "Room 5", category: "Rooms" },
          { src: `${S3_BASE}/Room6.jpg`, alt: "Room 6", category: "Rooms" },
          { src: `${S3_BASE}/Room7.jpg`, alt: "Room 7", category: "Rooms" },
          { src: `${S3_BASE}/Room8.jpg`, alt: "Room 8", category: "Rooms" },
          { src: `${S3_BASE}/Room9.jpg`, alt: "Room 9", category: "Rooms" },
          { src: `${S3_BASE}/Room10.jpg`, alt: "Room 10", category: "Rooms" },
        { src: `${S3_BASE}/Dining1.jpg`, alt: "Dining 1", category: "Dining" },
        { src: `${S3_BASE}/Dining2.jpg`, alt: "Dining 2", category: "Dining" },
        { src: `${S3_BASE}/Dining3.jpg`, alt: "Dining 3", category: "Dining" },
        { src: `${S3_BASE}/Dining4.jpg`, alt: "Dining 4", category: "Dining" },
        { src: `${S3_BASE}/Dining5.jpg`, alt: "Dining 5", category: "Dining" },
        { src: `${S3_BASE}/Dining6.jpg`, alt: "Dining 6", category: "Dining" },
      // ...existing images...
    { src: Outside, alt: "Luxury Resort Exterior", category: "Exterior" },
    { src: Room1, alt: "Elegant Retreat", category: "Rooms" },
    { src: Birthroom1, alt: "Modern Washroom", category: "Bathrooms" },
    { src: Swimmingpool, alt: "Infinity Pool", category: "Amenities" },
    { src: Breakfast, alt: "Gourmet Cuisine", category: "Dining" },
    { src: Inside, alt: "Tranquil Haven", category: "Exterior" },
    { src: Room2, alt: "Bedroom Suite", category: "Rooms" },
    { src: Birthroom2, alt: "Modern Bathroom", category: "Bathrooms" },
    { src: Gym, alt: "Fitness Center", category: "Amenities" },
    { src: Table, alt: "Fine Dining", category: "Dining" },
    { src: Exterior, alt: "Scenic Retreat", category: "Exterior" },
    { src: Room3, alt: "Presidential Suite", category: "Rooms" },
    { src: Birthroom3, alt: "Luxury Bathroom", category: "Bathrooms" },
    { src: Spa, alt: "Wellness Spa", category: "Amenities" },
    { src: Food, alt: "Elegant Meals", category: "Dining" },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F5F2F] mb-4">Gallery</h2>
          <p className="text-lg text-[#4A2400] max-w-2xl mx-auto">
            Immerse yourself in the beauty of Enchula Resort through our curated collection of breathtaking spaces and unforgettable moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 p-0 m-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden aspect-square p-0 m-0"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                priority={index < 6}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Gallery Images", value: "15+" },
            { label: "Categories", value: "6" },
            { label: "Photo Shoots", value: "100+" },
            { label: "HD Quality", value: "4K" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-white rounded-2xl p-6 border border-neutral-200 shadow"
            >
              <div className="text-4xl font-bold text-[#8F5F2F] mb-2">
                {stat.value}
              </div>
              <div className="text-[#B99A66] text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#4A2400] p-3 rounded-full bg-[#FFD3A3] hover:bg-[#8F5F2F] hover:text-white backdrop-blur-md transition-all duration-300 border border-[#8F5F2F]"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 text-[#4A2400] p-3 rounded-full bg-[#FFD3A3] hover:bg-[#8F5F2F] hover:text-white backdrop-blur-md transition-all duration-300 border border-[#8F5F2F]"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 text-[#4A2400] p-3 rounded-full bg-[#FFD3A3] hover:bg-[#8F5F2F] hover:text-white backdrop-blur-md transition-all duration-300 border border-[#8F5F2F]"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image & Info */}
          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-2xl shadow-2xl"
              priority
            />

            {/* Info Bar */}
            <div className="mt-6 bg-[#2C1B16]/50 backdrop-blur-md rounded-2xl px-6 py-4 border border-[#5C4033]/30">
              <div className="flex items-center gap-3 text-[#FAF5F0]">
                <span className="font-semibold text-[#D7BFA8]">{selectedImage.category}</span>
                <span className="text-[#A9745B]">•</span>
                <span className="text-[#F8F3EF]">{selectedImage.alt}</span>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="mt-4 flex gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  aria-label={`View image ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    img.src === selectedImage.src
                      ? "bg-[#A04040] w-8"
                      : "bg-[#D7BFA8]/30 hover:bg-[#D7BFA8]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}