"use client";

import React, { useState } from "react";

export default function DiningPage() {
  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <section
      className="relative py-20 px-4 bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-4">
            Dining Experiences
          </h1>
          <p className="text-lg text-[#D7BFA8]">
            From farm-to-table meals to sunset cocktails.
          </p>
        </div>

        {/* Restaurant & Bar Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
              alt="Restaurant Interior"
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-3">
                🍽️ Restaurant & Bar
              </h2>
              <p className="text-[#F8F3EF] mb-4">
                Savor international cuisine crafted with fresh local
                ingredients. Our restaurant offers a warm ambiance perfect for
                breakfast, lunch, and dinner.
              </p>
              <p className="text-[#D7BFA8] font-semibold">
                Open daily 7AM–10PM
              </p>
            </div>
          </div>
        </div>

        {/* Special Dining Experiences */}
        <div className="space-y-8 text-[#F8F3EF] leading-relaxed mb-16">
          <div className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30">
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                alt="Sunset Dinner by Pool"
                className="w-full h-64 object-cover md:order-2"
              />
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#FAF5F0] mb-3">
                  🌅 Sunset Dinner
                </h2>
                <p>
                  Private table by the pool with curated menu and live acoustic
                  music. Available upon reservation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2C1B16]/40 p-6 rounded-2xl border border-[#5C4033]/30">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-3">
                🍹 Cocktail Classes
              </h2>
              <p>
                Learn to mix signature drinks with our bartender. Fun for
                couples and groups!
              </p>
            </div>

            <div className="bg-[#2C1B16]/40 p-6 rounded-2xl border border-[#5C4033]/30">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-3">
                🥗 Farm-to-Table Dinners
              </h2>
              <p>
                Monthly themed dinner featuring produce from nearby farms and
                Maasai cooperatives.
              </p>
            </div>
          </div>
        </div>

        {/* Food Menu with Pagination */}
        <div className="bg-[#2C1B16]/60 p-8 rounded-2xl border border-[#5C4033]/30 mb-12">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 text-center">
            Our Menu
          </h2>

          {/* Menu Items */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#D7BFA8] mb-6">
              {menuPages[currentPage].title}
            </h3>
            <div className="space-y-4">
              {menuPages[currentPage].items.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#5C4033]/30 pb-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-[#FAF5F0]">
                      {item.name}
                    </h4>
                    <span className="text-[#D7BFA8] font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#F8F3EF]/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-6 py-2 rounded-full bg-[#800000] text-[#FAF5F0] font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#600000] transition-all"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {menuPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label="click"
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-[#800000] w-8"
                      : "bg-[#5C4033]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentPage(
                  Math.min(menuPages.length - 1, currentPage + 1)
                )
              }
              disabled={currentPage === menuPages.length - 1}
              className="px-6 py-2 rounded-full bg-[#800000] text-[#FAF5F0] font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#600000] transition-all"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
