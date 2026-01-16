"use client";
import Link from "next/link";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const HERO_IMAGE = `${S3_BASE}/NatureWalk1.jpg`;

const experiences = [
  {
    title: "Guided Nature Walks",
    when: "Daily 7:00 AM",
    images: [
      `${S3_BASE}/NatureWalk2.jpg`,
      `${S3_BASE}/NatureWalk1.jpg`,
    ],
  },
  {
    title: "Maasai Cultural Experience",
    when: "Thu & Sun",
    images: [
      `${S3_BASE}/Maasai1.webp`,
      `${S3_BASE}/Maasai2.webp`,
    ],
  },
  {
    title: "Stargazing Nights",
    when: "Clear nights",
    images: [
      `${S3_BASE}/Nights1.jpg`,
      `${S3_BASE}/Nights2.jpg`,
    ],
  },
  {
    title: "Outdoor Dining",
    when: "Daily",
    images: [
      `${S3_BASE}/Outdoor1.webp`,
      `${S3_BASE}/Outdoor2.webp`,
    ],
  },
];

export default function ExperiencesPage() {
  // Hero images from Kids & Family and Games sections
  const heroImages = [
    `${S3_BASE}/IMG_2352.webp`, // Kids Play Area
    `${S3_BASE}/IMG_2277.webp`, // Playground Structure
    `${S3_BASE}/IMG_2380.webp`, // Seesaw
    `${S3_BASE}/IMG_2450.webp`, // Pool Table
    `${S3_BASE}/IMG_3394.webp`, // Board Games
    `${S3_BASE}/Ball.jpg`,      // Outdoor Games
  ];
  const [heroIndex, setHeroIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="experience-activities" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel - Clean, smooth, no text or overlay */}
      <div className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden shadow-2xl mb-16">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[3000ms] ease-in-out ${idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
      </div>

      {/* Hotel Activities and Experiences Section */}
      <section className="relative z-10 w-full py-20 bg-gradient-to-br from-[#F8F3EF] via-[#FDF6ED] to-[#F8F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8F5F2F] mb-12 text-center tracking-tight drop-shadow">Hotel Activities & Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                title: "Supervised Kids' Play Area",
                desc: "Safe, shaded outdoor space for ages 4-12 with toys, games, and friendly staff.",
                icon: "🎪",
                image: `${S3_BASE}/IMG_2352.webp`,
              },
              {
                title: "Playground Structure",
                desc: "Slides, tunnels, and climbing structures for active fun.",
                icon: "🎨",
                image: `${S3_BASE}/IMG_2277.webp`,
              },
              {
                title: "Seesaw",
                desc: "A classic playground game for all ages.",
                icon: "🌌",
                image: `${S3_BASE}/IMG_2380.webp`,
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31] flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl md:text-4xl text-[#741F31] drop-shadow">{activity.icon}</span>
                    <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-1">{activity.title}</h3>
                  </div>
                  <p className="text-[#5C4033] mb-2 text-lg">{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Trust Section */}
          <div className="bg-[#D2BB9E]/60 p-10 border border-[#741F31]/20 text-center shadow-xl mx-auto max-w-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#B99A66] mb-4">Why Families Love Us</h3>
            <p className="text-[#4A2400] text-lg">
              “We had a stress-free weekend — the kids were entertained all day, and we got some much-needed relaxation.”<br />
              <em className="text-[#A04040]">— The Otieno Family, Kisumu</em>
            </p>
          </div>
        </div>
      </section>

      {/* Pool, Swimming Pool and Games Section */}
      <section className="relative z-10 w-full py-20 bg-gradient-to-br from-[#FDF6ED] via-[#F8F3EF] to-[#FDF6ED] border-t border-[#D2BB9E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8F5F2F] mb-12 text-center tracking-tight drop-shadow">Pool, Swimming Pool & Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31]">
              <div className="relative h-56 w-full">
                <img
                  src={`${S3_BASE}/IMG_2450.webp`}
                  alt="Pool Table Game"
                  className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-2">Pool Table</h3>
              </div>
            </div>
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31]">
              <div className="relative h-56 w-full">
                <img
                  src={`${S3_BASE}/IMG_3394.webp`}
                  alt="Board Games & More"
                  className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-2">Board Games & More</h3>
              </div>
            </div>
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31]">
              <div className="relative h-56 w-full">
                <img
                  src={`${S3_BASE}/Ball.jpg`}
                  alt="Outdoor Games"
                  className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-serif font-bold text-[#8F5F2F] mb-2">Outdoor Games</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="experiences" className="relative z-10 w-full py-20 bg-gradient-to-br from-[#F8F3EF] via-[#FDF6ED] to-[#F8F3EF] border-t border-[#D2BB9E]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8F5F2F] mb-12 text-center tracking-tight drop-shadow">Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20">
            {/* Fun activities and experience suggestions */}
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31] flex flex-col">
              <div className="bg-[#F8F3EF] p-6 flex items-center justify-between border-b border-[#D2BB9E]/30">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8F5F2F]">Outdoor Picnic</h3>
                  <p className="text-[#4A2400] text-lg">Anytime</p>
                </div>
              </div>
              <div className="px-6 py-4 text-[#4A2400] text-base flex-1">
                Enjoy a relaxing outdoor picnic in our scenic grounds.
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`${S3_BASE}/Outdoor1.webp`}
                    alt="Outdoor Picnic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`${S3_BASE}/Outdoor2.webp`}
                    alt="Outdoor Picnic 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden border border-[#D2BB9E] shadow-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#741F31] flex flex-col">
              <div className="bg-[#F8F3EF] p-6 flex items-center justify-between border-b border-[#D2BB9E]/30">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#8F5F2F]">Guided Nature</h3>
                  <p className="text-[#4A2400] text-lg">Daily 7:00 AM</p>
                </div>
              </div>
              <div className="px-6 py-4 text-[#4A2400] text-base flex-1">
                Explore the beauty of our natural surroundings with expert guides who share insights on local flora and fauna.
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`${S3_BASE}/NatureWalk1.jpg`}
                    alt="Guided Nature Walk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`${S3_BASE}/NatureWalk2.jpg`}
                    alt="Guided Nature Walk 2"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Full Width Banner */}
          <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              `${S3_BASE}/NatureWalk1.jpg`,
              `${S3_BASE}/Maasai1.webp`,
              `${S3_BASE}/Nights2.jpg`,
              `${S3_BASE}/Outdoor1.webp`,
              `${S3_BASE}/Nature2.webp`,
              `${S3_BASE}/Outdoor2.webp`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={`Resort moment ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          {/* Hero Collage */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative h-80 md:h-96 overflow-hidden">
              <img
                src={`${S3_BASE}/NatureWalk2.jpg`}
                alt="Featured experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#8F5F2F] mb-1">Create Your Story</h3>
                <p className="text-[#D7BFA8]">Every visit is unique</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={`${S3_BASE}/Nights1.jpg`}
                  alt="Experience 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-40 overflow-hidden">
                <img
                  src={`${S3_BASE}/Outdoor1.webp`}
                  alt="Experience 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 border border-[#5C4033]/30">
            <p className="text-[#FAF5F0] text-lg mb-6 font-semibold">
              Ready to experience Enchula?
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-[#FFD3A3] hover:bg-[#8F5F2F] text-[#4A2400] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#8F5F2F]"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}