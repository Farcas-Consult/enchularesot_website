"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const GamesPage = () => {
  // Slideshow images from the original Games page
  const gameImages = [
    `${S3_BASE}/IMG_3394.webp`,
    `${S3_BASE}/IMG_2450.webp`,
    `${S3_BASE}/Ball.jpg`,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section id="kids-family" className="relative min-h-screen bg-white">
      {/* Kids & Family Hero Banner */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${S3_BASE}/IMG_2380.webp`}
          alt="Kids and Family Hero"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* No text overlay on hero banner */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Features Grid */}
        <div className="space-y-12 mb-16">
          {/* Kids' Activities Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2E1A15] mb-8 text-center">Kids&apos; Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Supervised Kids' Play Area",
                  desc: "Safe, shaded outdoor space for ages 4-12 with toys, games, and friendly staff.",
                  icon: "🎪",
                  image: `${S3_BASE}/IMG_2352.webp`,
                },
                {
                  title: "Composite Playground Structure",
                  desc: "A large, interconnected piece of playground equipment featuring multiple play elements like slides, tunnels, and climbing structures designed for various physical activities.",
                  icon: "🎨",
                  image: `${S3_BASE}/IMG_2277.webp`,
                },
                {
                  title: "Seesaw",
                  desc: "A classic playground game consisting of a long board balanced in the middle, on which children sit at opposite ends and move up and down by pushing off the ground.",
                  icon: "🌌",
                  image: `${S3_BASE}/IMG_2380.webp`,
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl text-[#800000]">{activity.icon}</span>
                      <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">{activity.title}</h3>
                    </div>
                    <p className="text-[#5C4033] mb-3">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Games Section with images and descriptions */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2E1A15] mb-8 text-center">Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pool Table Game (use first image) */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={gameImages[1]}
                    alt="Pool Table Game"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">Pool Table</h3>
                  <p className="text-[#5C4033] mb-3 flex-1">
                    Enjoy a classic game of pool in our games lounge. Whether you’re a seasoned player or just looking for some fun, our pool table is perfect for friendly matches and tournaments.
                  </p>
                </div>
              </div>
              {/* Other games from slideshow */}
              <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={gameImages[0]}
                    alt="Board Games & More"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">Board Games & More</h3>
                  <p className="text-[#5C4033] mb-3 flex-1">
                    Gather your friends and family for a variety of board games and group activities. There’s something for everyone to enjoy!
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={gameImages[2]}
                    alt="Outdoor Games"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">Outdoor Games</h3>
                  <p className="text-[#5C4033] mb-3 flex-1">
                    Step outside and enjoy a range of outdoor games and activities, perfect for all ages and skill levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 text-center mb-12 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-4">Why Families Love Us</h3>
          <p className="text-[#5C4033] text-lg">
            “We had a stress-free weekend — the kids were entertained all day, and we got some much-needed relaxation.”<br />
            <em className="text-[#A04040]">— The Otieno Family, Kisumu</em>
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-[#5C4033] mb-6 text-lg">
            Planning a family getaway? We&apos;ll make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              className="inline-flex items-center gap-3 border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
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
}

export default GamesPage;

