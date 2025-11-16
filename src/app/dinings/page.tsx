"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

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
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              DINING
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            A <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Culinary Journey</span> Awaits
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            From farm-fresh Kenyan ingredients to sunset cocktails by the pool — every bite tells a story.
          </p>
        </div>

        {/* Restaurant & Bar Section */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

        {/* Special Dining Experiences */}
        <div className="space-y-8 mb-16">
          <div className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-6 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-2xl font-bold text-[#FAF5F0] mb-3">
                  Sunset Dinner
                </h2>
                <p className="text-[#F8F3EF]">
                  Private table by the pool with a curated menu and live acoustic music. Available upon reservation.
                </p>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
                <img
                  src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                  alt="Sunset Dinner by Pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2C1B16]/40 p-6 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1603133872878-684f208737e9?w=800&q=80"
                  alt="Cocktail mixing class"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">
                Cocktail Classes
              </h3>
              <p className="text-[#F8F3EF] text-sm">
                Learn to mix signature drinks with our expert bartender — perfect for couples and small groups.
              </p>
            </div>

            <div className="bg-[#2C1B16]/40 p-6 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
                  alt="Farm-to-table dinner"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">
                Farm-to-Table Dinners
              </h3>
              <p className="text-[#F8F3EF] text-sm">
                Monthly themed dinners featuring produce from nearby farms and Maasai cooperatives.
              </p>
            </div>
          </div>
        </div>

        {/* Main Menu with Pagination */}
        <div className="bg-[#2C1B16]/60 p-8 rounded-2xl border border-[#5C4033]/30 mb-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 text-center">
            Our Menu
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#D7BFA8] mb-6 text-center">
              {menuPages[currentPage].title}
            </h3>
            <div className="space-y-5">
              {menuPages[currentPage].items.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#5C4033]/30 pb-4 last:border-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg md:text-xl font-semibold text-[#FAF5F0]">
                      {item.name}
                    </h4>
                    <span className="text-[#D7BFA8] font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#F8F3EF]/80 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-5 py-2 rounded-full bg-[#800000] text-[#FAF5F0] font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#600000] transition-all"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {menuPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  aria-label={`Go to ${menuPages[index].title} menu`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-[#800000] w-6"
                      : "bg-[#5C4033]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentPage(Math.min(menuPages.length - 1, currentPage + 1))
              }
              disabled={currentPage === menuPages.length - 1}
              className="px-5 py-2 rounded-full bg-[#800000] text-[#FAF5F0] font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#600000] transition-all"
            >
              Next
            </button>
          </div>
        </div>

        {/* Children's Menu */}
        <div className="bg-[#2C1B16]/60 p-8 rounded-2xl border border-[#5C4033]/30 mb-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6 text-center">
            Children’s Menu
          </h2>
          <p className="text-[#D7BFA8] text-center mb-6 text-sm">
            Thoughtfully prepared with allergy-friendly options clearly marked.
          </p>
          <div className="space-y-5">
            {childrenMenu.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#5C4033]/30 pb-4 last:border-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-[#FAF5F0]">
                    {item.name}
                  </h4>
                  <span className="text-[#D7BFA8] font-bold">{item.price}</span>
                </div>
                <p className="text-[#F8F3EF]/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30 text-center mb-12">
          <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">Guests Say</h3>
          <p className="text-[#D7BFA8] text-lg">
            &quot;The Nyama Choma was the best I’ve ever had — and the sunset cocktail hour felt like magic.&quot;
            <br />
            <em className="text-[#A9745B]">— Wanjiru K., Mombasa</em>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <p className="text-[#D7BFA8] mb-6 text-lg">
            Ready to dine under the stars? Reserve your table today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex items-center gap-3 border-2 border-[#800000] text-[#FAF5F0] hover:bg-[#800000] font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Reserve a Table
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.297 1.26.47 1.69.62.712.256 1.36.199 1.87-.075.57-.297 1.92-1.823 2.12-2.12.2-.298.399-.198.696-.099.297.099 1.895.892 2.172 1.016.277.123.574.198.87.198.297 0 .372-.149.52-.447.149-.297.62-.744 1.165-1.24.546-.497.223-.174.421-.124.198.05.495.249.694.349.199.099.347.149.396.297.05.148.05.371-.025.62-.074.248-.272.94-.421 1.338-.149.399-.297.498-.57.696-.273.198-1.016.371-1.964.371-.94 0-2.559-.398-4.886-1.512z"/>
              </svg>
            </Link>

            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Heart className="w-5 h-5" /> Book Your Stay & Meal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}