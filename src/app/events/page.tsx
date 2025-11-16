"use client";
import Link from "next/link";
import React from "react";

export default function EventsPage() {
  const events = [
    {
      title: "Weddings & Vow Renewals",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      ],
      description: "Outdoor ceremonies with savannah views"
    },
    {
      title: "Corporate Retreats",
      images: [
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      ],
      description: "Team building & meeting spaces"
    },
    {
      title: "Birthday & Family Reunions",
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
      id="events"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              EVENTS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Special Moments</span>, Our Serene Setting
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Your special moments, our serene setting
          </p>
        </div>

        {/* Event Categories */}
        <div className="space-y-12 mb-16">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#2C1B16]/60 p-8 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-2">
                  {event.title}
                </h2>
                <p className="text-[#D7BFA8] text-lg">{event.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {event.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-56 md:h-64 rounded-xl overflow-hidden group"
                  >
                    <img
                      src={img}
                      alt={`${event.title} ${imgIdx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Gallery Banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
            "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80",
            "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=600&q=80",
            "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80",
          ].map((img, idx) => (
            <div key={idx} className="relative h-40 rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`Event venue ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5C4033]/30">
          <p className="text-[#FAF5F0] text-lg mb-6 font-semibold">
            Ready to plan your event?
          </p>
          <Link
            href="mailto:info@delfintours.co.ke"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Our Event Planner
          </Link>
        </div>
      </div>
    </section>
  );
}