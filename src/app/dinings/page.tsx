"use client";

import React, { useState } from "react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function DiningPage() {
  // Removed unused currentPage state
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [
    `${S3_BASE}/IMG_2209.webp`,
    `${S3_BASE}/IMG_2204.webp`,
  ];

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
    <section
      id="dining"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      {/* Background Carousel */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-fixed ${
              index === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              DINING
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            A <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Culinary Journey</span> Awaits
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            From farm-fresh Kenyan ingredients to sunset cocktails by the pool — every bite tells a story.
          </p>
        </div>

        {/* Restaurant & Bar Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <Image
                src={`${S3_BASE}/IMG_2236.webp`}
                alt="Restaurant Interior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-3">
                Restaurant & Bar
              </h2>
              <p className="text-[#F8F3EF] mb-4">
                Savor international cuisine crafted with fresh local ingredients. Our restaurant offers a warm, elegant ambiance perfect for any meal.
              </p>
              <p className="text-[#D7BFA8] font-semibold">
                Open daily 7AM – 10PM
              </p>
            </div>
          </div>
        </div>

        {/* Bar Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-3">
                Bar Lounge
              </h2>
              <p className="text-[#F8F3EF] mb-4">
                Unwind with expertly crafted cocktails, premium spirits, and a curated wine selection in our sophisticated bar lounge.
              </p>
              <p className="text-[#D7BFA8] font-semibold">
                Open daily 12PM – 11PM
              </p>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
              <Image
                src={`${S3_BASE}/IMG_2229.webp`}
                alt="Bar Lounge"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-6 text-center">Our Menu</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {menuPages.map((page, idx) => (
              <div key={idx} className="flex-1 min-w-[260px]">
                <h3 className="text-xl font-bold text-[#D7BFA8] mb-4 text-center">{page.title}</h3>
                <ul className="space-y-4">
                  {page.items.map((item, i) => (
                    <li key={i} className="bg-[#2C1B16]/80 rounded-xl p-4 border border-[#5C4033]/30 text-[#F8F3EF] shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-[#FAF5F0]">{item.name}</span>
                        <span className="text-[#A04040] font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-[#D7BFA8]">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Children's Menu Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-6 text-center">Children&apos;s Menu</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {childrenMenu.map((item, i) => (
              <li key={i} className="bg-[#2C1B16]/80 rounded-xl p-4 border border-[#5C4033]/30 text-[#F8F3EF] shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[#FAF5F0]">{item.name}</span>
                  <span className="text-[#A04040] font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-[#D7BFA8]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Reservation Button */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Reserve Your Table on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}