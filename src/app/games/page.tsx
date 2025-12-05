"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gamepad2, Users, Trophy, Clock } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const GamesPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const gameImages = [
    `${S3_BASE}/IMG_3394.webp`,
    `${S3_BASE}/IMG_2450.webp`,
    `${S3_BASE}/IMG_2444.webp`,
  ];

  const gameActivities = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Indoor Games",
      description: "Pool tables, board games, card games, and more in our comfortable indoor game lounge.",
      price: "Complimentary for guests",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Outdoor Activities",
      description: "Volleyball, badminton, lawn games, and team sports in our beautiful outdoor spaces.",
      price: "Free access",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournament Events",
      description: "Join our organized game tournaments and competitions throughout the week.",
      price: "Check schedule at reception",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Game Room Hours",
      description: "Open daily from 8:00 AM to 10:00 PM for your entertainment and relaxation.",
      price: "Daily access",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {gameImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/95 via-[#2C1B16]/90 to-[#2E1A15]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase flex items-center gap-2 justify-center">
              <Gamepad2 className="w-4 h-4" />
              GAMES & RECREATION
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Fun & <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Entertainment</span>
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Enjoy a variety of indoor and outdoor games at Enchula Resort. Whether you&apos;re looking for friendly competition or casual fun, we have something for everyone.
          </p>
        </div>

        {/* Image Navigation Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {gameImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-[#D7BFA8] w-8"
                  : "bg-[#5C4033] hover:bg-[#A9745B]"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Game Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {gameActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#A04040] to-[#5C4033] flex items-center justify-center text-[#FAF5F0] group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#FAF5F0] mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-[#D7BFA8] mb-3 leading-relaxed">
                    {activity.description}
                  </p>
                  <p className="text-[#A9745B] font-semibold">
                    {activity.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Games Section */}
        <div className="bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#5C4033]/30 mb-16">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-8 text-center">
            Available Games & Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#D7BFA8] mb-3">Indoor Games</h3>
              <ul className="text-[#D7BFA8] space-y-2">
                <li>Pool/Billiards</li>
                <li>Table Tennis</li>
                <li>Board Games</li>
                <li>Card Games</li>
                <li>Darts</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#D7BFA8] mb-3">Outdoor Activities</h3>
              <ul className="text-[#D7BFA8] space-y-2">
                <li>Volleyball</li>
                <li>Badminton</li>
                <li>Lawn Games</li>
                <li>Football</li>
                <li>Team Sports</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#D7BFA8] mb-3">Special Events</h3>
              <ul className="text-[#D7BFA8] space-y-2">
                <li>Weekly Tournaments</li>
                <li>Family Game Nights</li>
                <li>Team Building Games</li>
                <li>Kids Competitions</li>
                <li>Prize Events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#2C1B16]/60 backdrop-blur-sm rounded-2xl p-12 border border-[#5C4033]/30">
          <h2 className="text-3xl font-bold text-[#FAF5F0] mb-4">
            Ready for Some Fun?
          </h2>
          <p className="text-[#D7BFA8] mb-8 max-w-2xl mx-auto">
            Book your stay at Enchula Resort and enjoy unlimited access to all our games and recreational facilities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-gradient-to-r from-[#A04040] to-[#800000] text-white font-semibold rounded-full hover:from-[#800000] hover:to-[#A04040] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Stay
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#5C4033]/20 backdrop-blur-sm text-[#D7BFA8] font-semibold rounded-full border border-[#800000]/30 hover:bg-[#5C4033]/40 hover:border-[#800000]/50 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Auto-advance slideshow */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setInterval(() => {
              const dots = document.querySelectorAll('[aria-label^="View image"]');
              const current = Array.from(dots).findIndex(d => d.classList.contains('w-8'));
              const next = (current + 1) % dots.length;
              dots[next].click();
            }, 5000);
          `,
        }}
      />
    </section>
  );
};

export default GamesPage;
