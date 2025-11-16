"use client";

import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";

const accessibilitySteps = [
  {
    step: 1,
    title: "Arrival & Entry",
    location: "Main Gate",
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    ],
    features: ["Gradual ramp (1:12 slope)", "Tactile paving", "Staff assistance"],
    landmark: "Tall acacia tree before gate",
  },
  {
    step: 2,
    title: "Reception & Check-In",
    location: "Main Lodge",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    ],
    features: ["Lowered counter (75cm)", "Braille signage", "Hearing loop system"],
    landmark: "Thatched roof with carved wooden sign",
  },
  {
    step: 3,
    title: "Pathway to Rooms",
    location: "Central Walkway",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&q=80",
    ],
    features: ["Wide pathway (1.5m)", "Handrails both sides", "Gentle slopes, no stairs"],
    landmark: "Water fountain on right side",
  },
  {
    step: 4,
    title: "Accessible Rooms",
    location: "Block A - Ground Floor",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    ],
    features: ["36-inch wide doors", "Roll-in showers", "Grab bars & emergency cord"],
    landmark: "Green accessibility plaque",
  },
  {
    step: 5,
    title: "Key Facilities",
    location: "Throughout Resort",
    images: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    features: ["Accessible restaurant", "Pool lift available", "Dedicated parking spots"],
    landmark: "Universal access symbols",
  },
];

const AccessibilityPage = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to inquire about accessible accommodations and services."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;

  return (
    <section
      id="accessibility"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Badge + Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              ACCESSIBILITY
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Designed for <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Every Guest</span>
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            From arrival to your room, every step of your journey at Enchula Resort is thoughtfully designed for full accessibility and comfort.
          </p>
        </div>

        {/* Google Map */}
        <div className="mb-16 bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 backdrop-blur-sm">
          <div className="p-6 bg-[#2C1B16]/80 text-center">
            <h2 className="text-2xl font-bold text-[#FAF5F0] mb-2">Find Us Easily</h2>
            <p className="text-[#D7BFA8]">
              Nairobi-Namanga Rd, Kajiado, Kenya
            </p>
          </div>
          <div className="relative h-72 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.940725256115!2d36.8122246!3d-1.8205425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182fc51047f827ad%3A0xa2c659d8654d771e!2sEnchula%20Resort!5e0!3m2!1sen!2ske!4v1731432000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-4 bg-[#2C1B16]/80 text-center">
            <p className="text-[#C9A87C] text-sm">
              <strong>Coordinates:</strong> -1.8205°S, 36.8122°E | <strong>Parking:</strong> Accessible spots within 20m of reception
            </p>
          </div>
        </div>

        {/* Accessibility Journey */}
        <div className="space-y-12 mb-16">
          {accessibilitySteps.map((item) => (
            <div
              key={item.step}
              className="bg-[#2C1B16]/60 rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Images */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-3 p-4 md:p-6">
                  {item.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative h-56 rounded-xl overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${item.title} view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/60 to-transparent"></div>
                      {idx === 0 && (
                        <div className="absolute top-3 left-3 bg-[#800000] text-white px-3 py-1.5 rounded-full font-bold text-sm">
                          Step {item.step}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="lg:col-span-1 p-6 flex flex-col justify-center bg-[#2C1B16]/70">
                  <h3 className="text-2xl font-bold text-[#FAF5F0] mb-2">{item.title}</h3>
                  <p className="text-[#D7BFA8] mb-4">{item.location}</p>

                  <div className="mb-4 p-3 bg-[#4A3426]/50 rounded-lg border border-[#5C4033]/30">
                    <p className="text-[#FAF5F0] text-sm font-semibold mb-1">Landmark:</p>
                    <p className="text-[#F8F3EF] text-sm">{item.landmark}</p>
                  </div>

                  <div>
                    <p className="text-[#FAF5F0] text-sm font-semibold mb-2">Features:</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#F8F3EF] text-sm">
                          <span className="text-[#800000] mt-0.5">✓</span> {feature}
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
        <div className="mb-16 bg-[#2C1B16]/60 rounded-2xl p-6 border border-[#5C4033]/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-[#FAF5F0] text-center mb-6">
            Accessibility in Every Corner
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
              "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
            ].map((img, idx) => (
              <div key={idx} className="relative h-40 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`Accessibility feature ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/50 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust / Testimonial */}
        <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30 text-center mb-12">
          <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">Guests Feel Welcome</h3>
          <p className="text-[#D7BFA8] text-lg">
            &quot;As a wheelchair user, I was amazed by how smooth and dignified every step felt.&quot;
            <br />
            <em className="text-[#A9745B]">— James M., Nairobi</em>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <p className="text-[#D7BFA8] mb-6 text-lg">
            Have specific needs? We’re happy to prepare in advance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
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

            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Heart className="w-5 h-5" /> Book Accessible Stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityPage;