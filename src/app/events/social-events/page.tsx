"use client";
import Image from "next/image";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function SocialEventsPage() {
  return (
    <section id="social-events" className="relative min-h-screen bg-white font-nunito">
      <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${S3_BASE}/Event18.jpeg`}
          alt="Social Events hero image"
          fill
          className="object-cover rounded-2xl shadow-lg"
          quality={90}
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10">
            <span className="text-[#B99A66] font-semibold tracking-wide text-sm uppercase">
              SOCIAL EVENTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F5F2F] mb-6 leading-tight font-lora">
            Celebrate <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Weddings, Parties & Gatherings</span>
          </h2>
          <p className="text-lg text-[#4A2400] max-w-3xl mx-auto font-nunito">
            Celebrate weddings, parties, and corporate gatherings in style.
          </p>
        </div>
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              `${S3_BASE}/Event18.jpeg`,
              `${S3_BASE}/Party2.jpeg`,
              `${S3_BASE}/Event6.jpeg`,
              `${S3_BASE}/Event9.jpeg`,
              `${S3_BASE}/Event10.jpeg`,
              `${S3_BASE}/Event11.jpeg`,
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
        <div className="text-center bg-white p-8 rounded-2xl border border-[#5C4033]/20 shadow-lg">
          <p className="text-[#4A2400] text-lg mb-6 font-semibold font-nunito">
            Ready to plan your social event?
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
        </div>
      </div>
    </section>
  );
}
