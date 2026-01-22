"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";



export default function ExperiencesPage() {
  // Hero image for the top of the page

  return (
    <section id="experience-activities" className="relative min-h-screen bg-white font-nunito">
      {/* Hero Banner - Single Image */}
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

     

      {/* Activities Section */}
      <section id="experiences" className="relative z-10 w-full py-20 bg-linear-to-br from-[#F8F3EF] via-[#FDF6ED] to-[#F8F3EF] border-t border-[#D2BB9E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F5F2F] mb-12 text-center tracking-tight drop-shadow font-lora">Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Outdoor Picnics */}
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#8F5F2F] flex flex-col">
              <div className="bg-[#F8F3EF] p-6 flex items-center justify-between border-b border-[#D2BB9E]/30">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8F5F2F] font-lora">Outdoor Picnics</h3>
                  <p className="text-[#4A2400] text-lg font-nunito">Anytime</p>
                </div>
              </div>
              <div className="px-6 py-4 text-[#4A2400] text-base flex-1 font-nunito">
                Enjoy a relaxing outdoor picnic in our scenic grounds.
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={`${S3_BASE}/Party3.jpeg`}
                    alt="Outdoor Picnic"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="100vw"
                  />
                </div>
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={`${S3_BASE}/Party2.jpeg`}
                    alt="Outdoor Picnic 2"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
            {/* Guided Nature Walks */}
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#8F5F2F] flex flex-col">
              <div className="bg-[#F8F3EF] p-6 flex items-center justify-between border-b border-[#D2BB9E]/30">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8F5F2F] font-lora">Guided Nature Walks</h3>
                  <p className="text-[#4A2400] text-lg font-nunito">Daily 7:00 AM</p>
                </div>
              </div>
              <div className="px-6 py-4 text-[#4A2400] text-base flex-1 font-nunito">
                Explore the beauty of our natural surroundings with expert guides who share insights on local flora and fauna.
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={`${S3_BASE}/NatureWalk1.jpg`}
                    alt="Guided Nature Walk"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="100vw"
                  />
                </div>
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={`${S3_BASE}/NatureWalk2.jpg`}
                    alt="Guided Nature Walk 2"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}