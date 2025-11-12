"use client";
import Link from "next/link";
import React from "react";

export default function EventsPage() {
  const events = [
    {
      title: "Weddings & Vow Renewals",
      icon: "💍",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      ],
      description: "Outdoor ceremonies with savannah views"
    },
    {
      title: "Corporate Retreats",
      icon: "🎯",
      images: [
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      ],
      description: "Team building & meeting spaces"
    },
    {
      title: "Birthday & Family Reunions",
      icon: "🎂",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
      ],
      description: "Custom celebrations & gatherings"
    }
  ];

  return (
    <section
      className="py-20 px-4 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-3">
            Events & Celebrations
          </h1>
          <p className="text-xl text-[#D7BFA8]">Your special moments, our serene setting</p>
        </div>

        {/* Event Categories with Image Grids */}
        <div className="space-y-16">
          {events.map((event, idx) => (
            <div key={idx} className="bg-[#2C1B16]/50 p-8 rounded-3xl border border-[#5C4033]/40 backdrop-blur-sm">
              {/* Event Title */}
              <div className="text-center mb-6">
                <span className="text-5xl mb-3 block">{event.icon}</span>
                <h2 className="text-3xl font-bold text-[#FAF5F0] mb-2">{event.title}</h2>
                <p className="text-[#D7BFA8] text-lg">{event.description}</p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {event.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${event.title} ${imgIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Gallery Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
            "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80",
            "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=600&q=80",
            "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80",
          ].map((img, idx) => (
            <div key={idx} className="relative h-48 rounded-2xl overflow-hidden">
              <img
                src={img}
                alt={`Event venue ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-[#2C1B16]/60 p-8 rounded-3xl border border-[#5C4033]/40">
          <p className="text-[#FAF5F0] text-xl mb-6">Ready to plan your event?</p>
          <Link
            href="mailto:events@enchularesort.co.ke"
            className="inline-block px-10 py-4 bg-[#800000] hover:bg-[#A04040] text-white font-semibold rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Our Event Planner
          </Link>
        </div>
      </div>
    </section>
  );
}