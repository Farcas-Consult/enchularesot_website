"use client";
import Link from "next/link";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/Nature1.webp`,
  `${S3_BASE}/Maasai1.webp`,
];

const experiences = [
  {
    title: "Guided Nature Walks",
    when: "Daily 7:00 AM",
    images: [
      `${S3_BASE}/Nature1.webp`,
      `${S3_BASE}/Nature2.webp`,
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
      `${S3_BASE}/Stargazing.webp`,
      `${S3_BASE}/Stargazing2.webp`,
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
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experiences"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage:
          `url('${BACKGROUND_IMAGES[currentBgIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              EXPERIENCES
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Moments That Become <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Moments that become memories
          </p>
        </div>

        {/* Experience Gallery */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
            >
              {/* Title Bar */}
              <div className="bg-[#2C1B16]/80 p-6 flex items-center justify-between border-b border-[#5C4033]/30">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0]">{exp.title}</h2>
                  <p className="text-[#D7BFA8] text-lg">{exp.when}</p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-3 p-4">
                {exp.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-56 md:h-64 rounded-xl overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${exp.title} ${imgIdx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            `${S3_BASE}/Nature1.webp`,
            `${S3_BASE}/Maasai1.webp`,
            `${S3_BASE}/Stargazing.webp`,
            `${S3_BASE}/Outdoor1.webp`,
            `${S3_BASE}/Nature2.webp`,
            `${S3_BASE}/Outdoor2.webp`,
          ].map((img, idx) => (
            <div key={idx} className="relative h-40 rounded-xl overflow-hidden">
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
          <div className="md:col-span-2 relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <img
              src={`${S3_BASE}/Maasai2.webp`}
              alt="Featured experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-1">Create Your Story</h3>
              <p className="text-[#D7BFA8]">Every visit is unique</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative h-40 rounded-2xl overflow-hidden">
              <img
                src={`${S3_BASE}/Stargazing2.webp`}
                alt="Experience 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 rounded-2xl overflow-hidden">
              <img
                src={`${S3_BASE}/Outdoor1.webp`}
                alt="Experience 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5C4033]/30">
          <p className="text-[#FAF5F0] text-lg mb-6 font-semibold">
            Ready to experience Enchula?
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
}