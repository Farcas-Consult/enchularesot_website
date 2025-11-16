"use client";
import Link from "next/link";
import React from "react";

export default function WellnessPage() {
  return (
    <section
      id="wellness"
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
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              WELLNESS & SPA
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Rejuvenate & Restore
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Reconnect with yourself in peace and nature.
          </p>
        </div>

        {/* Massage Treatments - Large Feature */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80" 
                alt="Massage Treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-[#800000] text-white px-4 py-2 rounded-full text-sm font-bold">
                From KSh 2,500
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-4">Massage Treatments</h2>
              <p className="text-[#F8F3EF] mb-6 leading-relaxed">
                Traditional and aromatherapy massages using natural oils. Available in-room or under the trees for a truly immersive experience.
              </p>
              <div className="space-y-3 text-[#D7BFA8] text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Swedish Massage - 60 min (KSh 2,500)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Deep Tissue - 75 min (KSh 3,200)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Aromatherapy - 90 min (KSh 3,800)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Couples Massage - 60 min (KSh 4,500)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yoga & Meditation */}
        <div className="mb-12 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8 flex flex-col justify-center md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-4">Yoga & Meditation</h2>
              <p className="text-[#F8F3EF] mb-6 leading-relaxed">
                Morning sessions by the pool. Mats provided. Suitable for all levels from beginners to advanced practitioners.
              </p>
              <div className="space-y-3 text-[#D7BFA8] text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Group Morning Yoga - 7:00 AM (Free for guests)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Private Session - 60 min (KSh 1,800)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#800000] rounded-full"></span>
                  <span>Sunset Meditation - 6:00 PM (KSh 800)</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96 overflow-hidden md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80" 
                alt="Yoga Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-[#800000] text-white px-4 py-2 rounded-full text-sm font-bold">
                Free Daily Classes
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Sauna & Steam Room */}
          <div className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521543992380-d5ff5e6b5f94?w=800&q=80" 
                alt="Sauna and Steam Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-end">
                  <h2 className="text-xl font-bold text-[#FAF5F0]">Sauna & Steam Room</h2>
                  <span className="text-[#D7BFA8] font-bold text-sm">KSh 1,200</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#F8F3EF] mb-4 text-sm">
                Detox and relax after a long journey or safari. Perfect for muscle recovery and stress relief.
              </p>
              <div className="space-y-2 text-[#D7BFA8] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>45-minute session</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Includes towels & robes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Complimentary herbal tea</span>
                </div>
              </div>
            </div>
          </div>

          {/* Herbal Teas */}
          <div className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" 
                alt="Herbal Teas and Infusions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-end">
                  <h2 className="text-xl font-bold text-[#FAF5F0]">Herbal Teas & Infusions</h2>
                  <span className="text-[#D7BFA8] font-bold text-sm">Complimentary</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#F8F3EF] mb-4 text-sm">
                Complimentary wellness teas available throughout the day. Locally sourced herbs and botanicals.
              </p>
              <div className="space-y-2 text-[#D7BFA8] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Chamomile & Lavender</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Ginger & Lemon Grass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Mint & Eucalyptus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Wellness Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 text-center">More Wellness Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Facial Treatments",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
                price: "KSh 2,200",
                desc: "Organic facials with natural ingredients"
              },
              {
                title: "Body Scrubs",
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
                price: "KSh 1,800",
                desc: "Exfoliating treatments with coffee & honey"
              },
              {
                title: "Reflexology",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
                price: "KSh 1,500",
                desc: "Therapeutic foot massage for relaxation"
              }
            ].map((service, i) => (
              <div key={i} className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#800000] text-white px-3 py-1.5 rounded-full text-xs font-bold">
                    {service.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#FAF5F0] mb-2">{service.title}</h3>
                  <p className="text-[#F8F3EF] text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Packages */}
        <div className="bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#5C4033]/30 mb-12">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6 text-center">Wellness Packages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2E1A15]/60 p-6 rounded-xl border border-[#5C4033]/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#FAF5F0]">Half-Day Retreat</h3>
                <span className="text-[#D7BFA8] font-bold">KSh 6,500</span>
              </div>
              <ul className="space-y-2 text-[#F8F3EF] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>60-min massage of your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Facial treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Sauna & steam access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Healthy lunch included</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2E1A15]/60 p-6 rounded-xl border border-[#5C4033]/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#FAF5F0]">Full-Day Escape</h3>
                <span className="text-[#D7BFA8] font-bold">KSh 11,000</span>
              </div>
              <ul className="space-y-2 text-[#F8F3EF] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>90-min aromatherapy massage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Body scrub & facial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Yoga & meditation session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>All-day spa access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#800000] mt-0.5">✓</span>
                  <span>Lunch & wellness teas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30 text-center mb-12">
          <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">What Our Guests Say</h3>
          <p className="text-[#D7BFA8] text-lg italic">
            “The massage was heavenly and the yoga sessions helped me truly unwind. I left feeling completely rejuvenated!”
          </p>
          <p className="text-[#A9745B] mt-3">— Sarah M., Nairobi</p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-[#D7BFA8] mb-6 text-lg">
            Ready to relax and restore your inner peace?
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Wellness Session
          </Link>
        </div>
      </div>
    </section>
  );
}