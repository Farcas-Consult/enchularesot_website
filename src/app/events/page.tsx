"use client";

import Image from "next/image";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";


export default function EventsPage() {
  return (
    <section id="events" className="relative min-h-screen bg-white font-nunito">
      {/* Hero Banner Static Image */}
      <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${S3_BASE}/Event1.jpeg`}
          alt="Events hero image"
          fill
          className="object-cover rounded-2xl shadow-lg"
          quality={90}
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10">
            <span className="text-[#B99A66] font-semibold tracking-wide text-sm uppercase">
              EVENTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F5F2F] mb-6 leading-tight font-lora">
            Your <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Special Moments</span>, Our Serene Setting
          </h2>
          <p className="text-lg text-[#4A2400] max-w-3xl mx-auto font-nunito">
            Social Events | Corporate Events - Event Planning, Event Decor, Catering
          </p>
        </div>

        {/* Corporate Events Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/10 rounded-full border border-[#800000]/10">
              <span className="text-[#B99A66] font-semibold tracking-wide text-sm uppercase">CORPORATE EVENTS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#8F5F2F] mb-4 font-lora">Professional Retreats & Conferences</h3>
            <p className="text-lg text-[#4A2400] max-w-2xl mx-auto font-nunito">Host your retreats and conferences in our professional, inspiring spaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              `${S3_BASE}/Event2.jpeg`,
              `${S3_BASE}/Event3.jpeg`,
              `${S3_BASE}/Event7.jpeg`,
              `${S3_BASE}/Event8.jpeg`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Corporate event ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Events Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/10 rounded-full border border-[#800000]/10">
              <span className="text-[#B99A66] font-semibold tracking-wide text-sm uppercase">SOCIAL EVENTS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#8F5F2F] mb-4 font-lora">Celebrate Weddings, Parties & Gatherings</h3>
            <p className="text-lg text-[#4A2400] max-w-2xl mx-auto font-nunito">Celebrate weddings, parties, and corporate gatherings in style.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              `${S3_BASE}/Event18.jpeg`,
              `${S3_BASE}/Party2.jpeg`,
              `${S3_BASE}/Event6.jpeg`,
              `${S3_BASE}/Events4.jpeg`,
              `${S3_BASE}/Event7.jpeg`,
              `${S3_BASE}/Party3.jpeg`,
              `${S3_BASE}/Event8.jpeg`,
              `${S3_BASE}/Event13.jpeg`,
              `${S3_BASE}/Event11.jpeg`,
              `${S3_BASE}/Event9.jpeg`,
              `${S3_BASE}/Event5.jpeg`,
              `${S3_BASE}/Event10.jpeg`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Social event ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-8 rounded-2xl border border-[#5C4033]/20 shadow-lg">
          <p className="text-[#4A2400] text-lg mb-6 font-semibold font-nunito">
            Ready to plan your event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-[#A04040]">
              <span className="text-2xl">📞</span>
              <a href="tel:+254723003164" className="font-semibold transition-colors px-4 py-2 rounded-full bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]">
                0723003164
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#A04040]">
              <span className="text-2xl">✉️</span>
              <a href="mailto:events@enchularesort.co.ke" className="font-semibold transition-colors px-4 py-2 rounded-full bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]">
                events@enchularesort.co.ke
              </a>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center gap-3">
            <span className="text-[#A04040]">Follow us:</span>
              <a 
                href="https://instagram.com/events.by.enchula" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-[#FFD3A3] text-[#4A2400] hover:bg-[#8F5F2F] hover:text-white border border-[#8F5F2F]"
              >
                <span className="text-xl">📸</span>
                events.by.enchula
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}