"use client";

import React from "react";
import Link from "next/link";

const KidsFamilyPage = () => {
  return (
    <section
      id="kids-family"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              KIDS & FAMILY
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            A <span className="bg-gradient-to-r from-[#800000] to-[#5C4033] bg-clip-text text-transparent">Kid-Friendly</span> Getaway
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            At Enchula Resort, we welcome families with open arms. From supervised play areas to fun cultural activities, your children will have just as much fun as you do.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="space-y-12 mb-16">
          {/* Kids' Activities Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 flex items-center gap-3">
               Kids&apos; Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Supervised Kids' Play Area",
                  desc: "Safe, shaded outdoor space for ages 4–12 with toys, games, and friendly staff.",
                  icon: "🎪",
                  image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
                  price: "KSh 500/child per day",
                },
                {
                  title: "Maasai Craft Workshops",
                  desc: "Learn traditional beadwork and storytelling from local artisans.",
                  icon: "🎨",
                  image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80",
                  price: "KSh 800/session",
                },
                {
                  title: "Stargazing Nights",
                  desc: "Cozy blankets, hot cocoa, and fun facts about the night sky.",
                  icon: "🌌",
                  image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
                  price: "KSh 600/family",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#800000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {activity.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{activity.icon}</span>
                      <h3 className="text-xl font-bold text-[#FAF5F0]">{activity.title}</h3>
                    </div>
                    <p className="text-[#F8F3EF]">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Comforts Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 flex items-center gap-3">
               Family Comforts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Connecting Rooms",
                  desc: "Stay close without sacrificing privacy. Ideal for parents with older kids.",
                  icon: "🔗",
                  image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
                  price: "KSh 12,000/night",
                },
                {
                  title: "Baby Cots Available",
                  desc: "Free cots for infants under 2 years. Let us know in advance.",
                  icon: "🛏️",
                  image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
                  price: "Free",
                },
                {
                  title: "Children's Pool",
                  desc: "Shallow, safe pool with splash features for little ones.",
                  icon: "💦",
                  image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
                  price: "Included with stay",
                },
                {
                  title: "Kid-Friendly Menu",
                  desc: "Simple, tasty options like pasta, grilled chicken, and fruit platters.",
                  icon: "🍽️",
                  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
                  price: "From KSh 400/meal",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative h-48 md:h-auto md:col-span-2 overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 md:col-span-3 flex flex-col justify-center">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xl font-bold text-[#FAF5F0]">{feature.title}</h3>
                            <span className="text-[#D7BFA8] font-semibold text-sm whitespace-nowrap ml-2">
                              {feature.price}
                            </span>
                          </div>
                          <p className="text-[#F8F3EF]">{feature.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30 text-center mb-12">
          <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">Why Families Love Us</h3>
          <p className="text-[#D7BFA8] text-lg">
            &aquot;We had a stress-free weekend — the kids were entertained all day, and we got some much-needed relaxation.&aquot;<br />
            <em className="text-[#A9745B]">— The Otieno Family, Kisumu</em>
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-[#D7BFA8] mb-6 text-lg">
            Planning a family getaway? We&apos;ll make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Family Stay
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="https://wa.me/254727000027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#800000] text-[#FAF5F0] hover:bg-[#800000] font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Chat on WhatsApp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.297 1.26.47 1.69.62.712.256 1.36.199 1.87-.075.57-.297 1.92-1.823 2.12-2.12.2-.298.399-.198.696-.099.297.099 1.895.892 2.172 1.016.277.123.574.198.87.198.297 0 .372-.149.52-.447.149-.297.62-.744 1.165-1.24.546-.497.223-.174.421-.124.198.05.495.249.694.349.199.099.347.149.396.297.05.148.05.371-.025.62-.074.248-.272.94-.421 1.338-.149.399-.297.498-.57.696-.273.198-1.016.371-1.964.371-.94 0-2.559-.398-4.886-1.512z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsFamilyPage;