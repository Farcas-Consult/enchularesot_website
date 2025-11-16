"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Hotel, UtensilsCrossed, Waves, Bed, Sparkles } from "lucide-react";
import Image from "next/image";
import Outside from '@/assets/Exterior1.webp';
import Inside from '@/assets/Exterior3.jpg';
import Exterior from '@/assets/Exterior4.jpg';
import Room1 from '@/assets/room3.webp';
import Room2 from '@/assets/twinroom.webp';
import Room3 from '@/assets/room2.jpg';
import Birthroom1 from '@/assets/bathroom1.jpg';
import Birthroom2 from '@/assets/bathroom2.jpg';
import Birthroom3 from '@/assets/bathroom3.jpg';
import Gym from '@/assets/gym.jpeg';
import Spa from '@/assets/spa.jpeg';
import Swimmingpool from '@/assets/swimmingpool.jpeg';
import Table from '@/assets/table.jpg';
import Breakfast from '@/assets/breakfast.jpg';
import Food from '@/assets/food.jpg';
import { StaticImageData } from "next/image";

interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  category: string;
}

export default function Gallery() {
  const galleryImages: GalleryImage[] = [
    { src: Outside, alt: "Luxury Resort Exterior", category: "Exterior" },
    { src: Room1, alt: "Premium Bedroom Suite", category: "Rooms" },
    { src: Birthroom1, alt: "Modern Bathroom", category: "Bathrooms" },
    { src: Swimmingpool, alt: "Infinity Pool", category: "Amenities" },
    { src: Breakfast, alt: "Gourmet Cuisine", category: "Dining" },
    { src: Inside, alt: "Beachfront View", category: "Exterior" },
    { src: Room2, alt: "Ocean View Suite", category: "Rooms" },
    { src: Birthroom2, alt: "Spa Bathroom", category: "Bathrooms" },
    { src: Gym, alt: "Fitness Center", category: "Amenities" }, // fixed typo: "Beach Cabana"
    { src: Table, alt: "Fine Dining", category: "Dining" },
    { src: Exterior, alt: "Resort Architecture", category: "Exterior" },
    { src: Room3, alt: "Presidential Suite", category: "Rooms" },
    { src: Birthroom3, alt: "Luxury Bathroom", category: "Bathrooms" },
    { src: Spa, alt: "Wellness Spa", category: "Amenities" },
    { src: Food, alt: "Chef's Special", category: "Dining" },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Exterior", "Rooms", "Bathrooms", "Amenities", "Dining"];
  
  const categoryIcons: { [key: string]: React.ReactNode } = {
    All: <Camera className="w-5 h-5" />,
    Exterior: <Hotel className="w-5 h-5 text-[#5C4033]" />,
    Rooms: <Bed className="w-5 h-5 text-[#800000]" />,
    Bathrooms: <Sparkles className="w-5 h-5 text-[#A04040]" />,
    Amenities: <Waves className="w-5 h-5 text-[#5C4033]" />,
    Dining: <UtensilsCrossed className="w-5 h-5 text-[#800000]" />,
  };

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => 
      (typeof img.src === 'string' ? img.src : img.src.src) === 
      (typeof selectedImage.src === 'string' ? selectedImage.src : selectedImage.src.src)
    );
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => 
      (typeof img.src === 'string' ? img.src : img.src.src) === 
      (typeof selectedImage.src === 'string' ? selectedImage.src : selectedImage.src.src)
    );
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section 
      id="gallery" 
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🎨 Refined overlay: dark neutrals only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">Visual Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Stunning Gallery
            </span>
          </h2>
          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty of Enchula Resort through our curated collection 
            of breathtaking spaces and unforgettable moments.
          </p>
        </div>

        {/* Category Filters — palette-aligned */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-[#5C4033] to-[#800000] text-[#FAF5F0] shadow-lg scale-105"
                  : "bg-[#2C1B16]/40 text-[#D7BFA8] hover:bg-[#5C4033]/20 backdrop-blur-sm border border-[#5C4033]/30"
              }`}
            >
              {categoryIcons[category]}
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-[#FAF5F0] mb-2">
                    {categoryIcons[image.category]}
                    <span className="text-xs font-semibold uppercase text-[#D7BFA8]">{image.category}</span>
                  </div>
                  <p className="text-sm text-[#F8F3EF]">{image.alt}</p>
                </div>
              </div>

              {/* Zoom icon — now brown/maroon */}
              <div className="absolute top-4 right-4 bg-[#5C4033]/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-[#A04040]" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section — palette-tuned */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Gallery Images", value: "15+", color: "#5C4033" },
            { label: "Categories", value: "6", color: "#800000" },
            { label: "Photo Shoots", value: "100+", color: "#A04040" },
            { label: "HD Quality", value: "4K", color: "#5C4033" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-[#2C1B16]/30 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/20"
            >
              <div className="text-4xl font-bold" style={{ color: stat.color }} mb-2>
                {stat.value}
              </div>
              <div className="text-[#D7BFA8] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal — full palette alignment */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#FAF5F0] p-3 rounded-full bg-[#5C4033]/20 hover:bg-[#800000]/30 backdrop-blur-md transition-all duration-300 border border-[#A04040]/30"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 text-[#FAF5F0] p-3 rounded-full bg-[#5C4033]/20 hover:bg-[#800000]/30 backdrop-blur-md transition-all duration-300 border border-[#A04040]/30"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-[#FAF5F0] p-3 rounded-full bg-[#5C4033]/20 hover:bg-[#800000]/30 backdrop-blur-md transition-all duration-300 border border-[#A04040]/30"
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
                {categoryIcons[selectedImage.category]}
                <span className="font-semibold text-[#D7BFA8]">{selectedImage.category}</span>
                <span className="text-[#A9745B]">•</span>
                <span className="text-[#F8F3EF]">{selectedImage.alt}</span>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="mt-4 flex gap-2">
              {filteredImages.map((img, idx) => (
                <button
                  key={idx}
                  aria-label={`View image ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    (typeof img.src === 'string' ? img.src : img.src.src) === 
                    (typeof selectedImage.src === 'string' ? selectedImage.src : selectedImage.src.src)
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