"use client";

import React, { useState } from "react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";


export default function DiningPage() {
  // Hero carousel images
  const backgroundImages = [
    `${S3_BASE}/Dining1.jpg`,
    `${S3_BASE}/Dining4.jpg`,
  ];
  const [currentBg, setCurrentBg] = useState(0);
  // Auto-rotate background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const menuPages = [
    {
      title: "Breakfast & Starters",
      items: [
        { name: "Continental Breakfast", price: "KSh 800", description: "Fresh pastries, fruits, yogurt, coffee/tea" },
        { name: "Full English Breakfast", price: "KSh 1,200", description: "Eggs, bacon, sausage, beans, toast, tomatoes" },
        { name: "Kenyan Breakfast", price: "KSh 900", description: "Mandazi, sweet potato, chai, fresh juice" },
        { name: "Caesar Salad", price: "KSh 650", description: "Romaine, parmesan, croutons, classic dressing" },
        { name: "Caprese Salad", price: "KSh 700", description: "Fresh mozzarella, tomatoes, basil, balsamic" },
      ],
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Tilapia", price: "KSh 1,400", description: "Fresh Lake Naivasha fish with herbs and lemon" },
        { name: "Beef Nyama Choma", price: "KSh 1,600", description: "Grilled beef with ugali and kachumbari" },
        { name: "Chicken Tikka Masala", price: "KSh 1,300", description: "Creamy curry with basmati rice" },
        { name: "Vegetable Pasta", price: "KSh 1,100", description: "Penne with seasonal vegetables in garlic sauce" },
        { name: "Lamb Stew", price: "KSh 1,500", description: "Slow-cooked with potatoes and root vegetables" },
      ],
    },
    {
      title: "Drinks & Desserts",
      items: [
        { name: "Fresh Juice", price: "KSh 300", description: "Passion, mango, pineapple, or mixed" },
        { name: "Kenyan Coffee", price: "KSh 250", description: "Locally sourced, freshly brewed" },
        { name: "House Cocktails", price: "KSh 600", description: "Dawa, Mojito, Margarita" },
        { name: "Chocolate Lava Cake", price: "KSh 550", description: "Warm cake with vanilla ice cream" },
        { name: "Fruit Platter", price: "KSh 450", description: "Seasonal tropical fruits" },
      ],
    },
  ];

  const childrenMenu = [
    { name: "Mini Ugali & Chicken", price: "KSh 600", description: "Soft ugali with tender chicken pieces (nut-free, gluten-free)" },
    { name: "Cheesy Pasta", price: "KSh 550", description: "Mild cheese pasta with buttered veggies (contains dairy)" },
    { name: "Fruit & Yogurt Bowl", price: "KSh 450", description: "Fresh seasonal fruits with plain yogurt (gluten-free, nut-free)" },
    { name: "Mini Burger (Beef or Veggie)", price: "KSh 650", description: "Small patty with bun, lettuce, and tomato (gluten-free bun available on request)" },
    { name: "Mandazi & Juice", price: "KSh 400", description: "Freshly fried mandazi with passion or mango juice (vegan, nut-free)" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to reserve a table or inquire about dining options."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;


  return (
    <section id="dining" className="relative min-h-screen bg-[var(--brand-background)]">
      {/* Hero Banner Carousel */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === currentBg ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${currentBg === idx ? 'bg-[var(--brand-secondary-maroon)]' : 'bg-white/40'} transition-all`}
              onClick={() => setCurrentBg(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>


      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Dining Experiences Section */}
        <div className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-black)] mb-8 text-center">Dining Experiences</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Restaurant Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/Restaurant1.jpg`}
                  alt="Restaurant Interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[var(--brand-black)] mb-2">Signature Restaurant</h3>
                <p className="text-[var(--brand-gray)] mb-3">Savor international cuisine crafted with fresh local ingredients. Our restaurant offers a warm, elegant ambiance perfect for any meal.</p>
                <p className="text-[var(--brand-secondary-maroon)] font-semibold">Open daily 7AM – 10PM</p>
              </div>
            </div>
            {/* Bar Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/Bar2.jpg`}
                  alt="Bar Lounge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[var(--brand-black)] mb-2">Bar Lounge</h3>
                <p className="text-[var(--brand-gray)] mb-3">Unwind with expertly crafted cocktails, premium spirits, and a curated wine selection in our sophisticated bar lounge.</p>
                <p className="text-[var(--brand-secondary-maroon)] font-semibold">Open daily 12PM – 11PM</p>
              </div>
            </div>
          </div>
        </div>


        {/* Nightlife & Entertainment Section */}
        <div className="mb-16 bg-white rounded-2xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-black)] mb-8 text-center">Nightlife & Entertainment</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Nightlife Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/IMG_2204.webp`}
                  alt="Nightlife"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[var(--brand-black)] mb-2">Evening Entertainment</h3>
                <p className="text-[var(--brand-gray)] mb-3">Enjoy live music, themed nights, and a vibrant atmosphere. Our nightlife experience is perfect for unwinding and socializing after sunset.</p>
                <p className="text-[var(--brand-secondary-maroon)] font-semibold">Events every weekend</p>
              </div>
            </div>
            {/* Pool Bar Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-56 w-full">
                <Image
                  src={`${S3_BASE}/Bar1.jpg`}
                  alt="Pool Bar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-[var(--brand-black)] mb-2">Poolside Bar</h3>
                <p className="text-[var(--brand-gray)] mb-3">Sip signature cocktails and enjoy light bites by the pool, with stunning views and a relaxed vibe.</p>
                <p className="text-[var(--brand-secondary-maroon)] font-semibold">Open daily 10AM – 8PM</p>
              </div>
            </div>
          </div>
        </div>


        {/* WhatsApp Reservation Button */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 text-[#741F31] bg-[#D2BB9E] hover:bg-[#741F31] hover:text-[#D2BB9E] hover:scale-105 hover:shadow-xl border border-[#741F31]"
          >
            Reserve Your Table on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}