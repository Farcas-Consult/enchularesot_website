"use client";

import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const Step1Img1 = `${S3_BASE}/IMG_2256.webp`;
const Step1Img2 = `${S3_BASE}/IMG_2275.webp`;
const Step2Img1 = `${S3_BASE}/IMG_2429.webp`;
const Step2Img2 = `${S3_BASE}/IMG_3472.webp`;
const Step3Img1 = `${S3_BASE}/IMG_2318.webp`;
const Step3Img2 = `${S3_BASE}/IMG_2432.webp`;
const Overview1 = `${S3_BASE}/IMG_2340.webp`;
const Overview2 = `${S3_BASE}/IMG_2204.webp`;
const Overview3 = `${S3_BASE}/IMG_2227.webp`;
const Overview4 = `${S3_BASE}/IMG_2212.webp`;

// Hero carousel images
const HeroImg1 = `${S3_BASE}/IMG_2256.webp`;
const HeroImg2 = `${S3_BASE}/IMG_2429.webp`;
const HeroImg3 = `${S3_BASE}/IMG_2318.webp`;
const heroSlides = [
  { src: HeroImg1, alt: "Accessible Entrance" },
  { src: HeroImg2, alt: "Reception Area" },
  { src: HeroImg3, alt: "Accessible Room Pathway" },
];

const accessibilitySteps = [
  {
    step: 1,
    title: "Arrival & Entry",
    location: "Main Gate",
    images: [Step1Img1, Step1Img2],
    features: ["Gradual ramp (1:12 slope)", "Tactile paving", "Staff assistance"],
    landmark: "Gate with Enchula Logo",
  },
  {
    step: 2,
    title: "Reception & Check-In",
    location: "Main Lodge",
    images: [Step2Img1, Step2Img2],
    features: ["Lowered counter (75cm)", "Braille signage", "Hearing loop system"],
    landmark: "Wide Door with Plaque",
  },
  {
    step: 3,
    title: "Pathway to Rooms",
    location: "Central Walkway",
    images: [Step3Img1, Step3Img2],
    features: ["Wide pathway (1.5m)", "Handrails both sides", "Gentle slopes, no stairs"],
    landmark: "Plarcards on walls",
  },
];

const overviewGallery = [Overview1, Overview2, Overview3, Overview4];

const AccessibilityPage = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to inquire about accessible accommodations and services."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;

  // Hero carousel state (like Dinings page)
  const [heroIndex, setHeroIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accessibility" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel with overlay text */}
      <div className="relative h-screen min-h-[340px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${idx === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            style={{ backgroundImage: `url('${slide.src}')` }}
          />
        ))}
        <div className="relative z-30 text-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FAF5F0] mb-4 drop-shadow-lg">
            Accessibility
          </h1>
          <p className="text-lg md:text-2xl text-[#D7BFA8] max-w-2xl mx-auto font-light drop-shadow">
            From arrival to your room, every step of your journey at Enchula Resort is thoughtfully designed for full accessibility and comfort.
          </p>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${heroIndex === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
              onClick={() => setHeroIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Badge + Title */}
        {/* ...existing code... (remove old header) */}

        {/* Google Map */}
        <div className="mb-16 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg">
          <div className="p-6 bg-white text-center">
            <h2 className="text-2xl font-bold text-[#800000] mb-2">Find Us Easily</h2>
            <p className="text-[#5C4033]">
              Nairobi-Namanga Rd, Kajiado, Kenya
            </p>
          </div>
          <div className="relative h-72 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.940725256115!2d36.8122246!3d-1.8205425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fc51047f827ad%3A0xa2c659d8654d771e!2sEnchula%20Resort!5e0!3m2!1sen!2ske!4v1731432000000"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-4 bg-gray-100 text-center">
            <p className="text-[#800000] text-sm">
              <strong>Coordinates:</strong> -1.8205°S, 36.8122°E | <strong>Parking:</strong> Accessible spots within 20m of reception
            </p>
          </div>
        </div>

        {/* Accessibility Journey */}
        <div className="space-y-12 mb-16">
          {accessibilitySteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Images */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-1.5 p-4 md:p-6 bg-[#F8F3EF] rounded-xl">
                  {item.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-56 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${item.title} view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={idx === 0}
                      />
                      {/* No overlay for images */}
                      {idx === 0 && (
                        <div className="absolute top-3 left-3 bg-[#800000] text-white px-3 py-1.5 rounded-full font-bold text-sm">
                          Step {item.step}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="lg:col-span-1 p-6 flex flex-col justify-center bg-white rounded-xl">
                  <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-2">{item.title}</h3>
                  <p className="text-[#5C4033] mb-4">{item.location}</p>

                  <div className="mb-4 p-3 bg-[#F8F3EF] rounded-lg border border-[#5C4033]/10">
                    <p className="text-[#A04040] text-sm font-semibold mb-1">Landmark:</p>
                    <p className="text-[#2E1A15] text-sm">{item.landmark}</p>
                  </div>

                  <div>
                    <p className="text-[#A04040] text-sm font-semibold mb-2">Features:</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#5C4033] text-sm">
                          <span className="text-[#A04040] mt-0.5">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overview Gallery */}
        <div className="mb-16 bg-white rounded-2xl p-6 border border-[#5C4033]/20 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-[#2E1A15] text-center mb-6">
            Accessibility in Every Corner
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {overviewGallery.map((img, idx) => (
              <div key={idx} className="relative h-40 rounded-xl overflow-hidden bg-[#F8F3EF]">
                <Image
                  src={img}
                  alt={`Accessibility feature ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust / Testimonial */}
        <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 text-center mb-12 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-[#2E1A15] mb-4">Guests Feel Welcome</h3>
          <p className="text-[#5C4033] text-lg">
            &quot;As a wheelchair user, I was amazed by how smooth and dignified every step felt.&quot;
            <br />
            <em className="text-[#A9745B]">— James M., Nairobi</em>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-8 py-4 rounded-full bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] text-[#2E1A15] font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );

  // --- Carousel Component ---
  function HeroCarousel() {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionProperty: "opacity" }}
          />
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border-2 border-white bg-white/80 transition-all duration-300 ${
                i === index ? "scale-125 bg-[#800000] border-[#800000]" : "opacity-60"
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default AccessibilityPage;
