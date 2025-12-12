"use client";
import Image from "next/image";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/IMG_2395.webp`,
  `${S3_BASE}/IMG_2393.webp`,
  `${S3_BASE}/IMG_2387.webp`,
  `${S3_BASE}/IMG_2383.webp`,
];

export default function EventsPage() {
  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const events = [
    {
      title: "Weddings & Vow Renewals",
      images: [
        `${S3_BASE}/Marriage1.webp`,
        `${S3_BASE}/Marriage2.webp`,
        `${S3_BASE}/Marriage3.webp`,
      ],
      description: "Outdoor ceremonies with savannah views"
    },
    {
      title: "Corporate Retreats & Conferences",
      images: [
        "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/IMG_2395.webp",
        "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/IMG_2393.webp",
        "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/IMG_2387.webp",
        "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/IMG_2383.webp",
      ],
      description: "Professional meeting spaces & team building",
      packages: [
        {
          name: "Full Day Conference/Team Building",
          price: "Kshs. 4,000 per participant",
          includes: [
            "Conference Room",
            "10:00am and/or 4:00pm Tea/Coffee with snacks",
            "Lunch with a soft drink",
            "One/Two 500ml mineral water per day",
            "Mints/sweets",
            "Branded writing materials",
            "Flip board, charts and markers",
            "Complimentary high speed internet",
            "LCD Projector",
            "Grounds for Team Building"
          ]
        },
        {
          name: "Half Day Conference",
          price: "Kshs. 3,500 per participant",
          includes: [
            "Conference facilities",
            "Tea/Coffee break",
            "Meeting essentials",
            "High-speed internet access"
          ]
        }
      ],
      accommodation: [
        { type: "Single - Half Board", price: "Kshs. 11,000" },
        { type: "Single - Full Board", price: "Kshs. 13,000" },
        { type: "Double/Twin - Half Board", price: "Kshs. 17,000" },
        { type: "Double/Twin - Full Board", price: "Kshs. 19,000" }
      ],
      extras: [
        { item: "PA System", price: "Kshs. 10,000 per day" }
      ]
    },
    {
      title: "Birthday & Family Reunions",
      images: [
        `${S3_BASE}/Birthday1.webp`,
        `${S3_BASE}/Birthday2.webp`,
        `${S3_BASE}/Birthday3.webp`,
      ],
      description: "Custom celebrations & gatherings"
    }
  ];

  return (
    <section
      id="events"
      className={`relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-fixed events-bg`}
      style={{ backgroundImage: `url('${BACKGROUND_IMAGES[currentBgIndex]}')` }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              EVENTS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Your <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Special Moments</span>, Our Serene Setting
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Social Events | Corporate Events - Event Planning, Event Decor, Catering
          </p>
        </div>

        {/* Event Categories */}
        <div className="space-y-12 mb-16">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#2C1B16]/60 p-8 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-2">
                  {event.title}
                </h2>
                <p className="text-[#D7BFA8] text-lg">{event.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {event.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-56 md:h-64 rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`${event.title} ${imgIdx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2E1A15]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Conference Packages */}
              {event.packages && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#FAF5F0] border-b border-[#800000]/30 pb-3 mb-4">Conference Packages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.packages.map((pkg, pkgIdx) => (
                      <div key={pkgIdx} className="bg-[#2E1A15]/40 p-6 rounded-xl border border-[#5C4033]/40">
                        <h4 className="text-lg font-bold text-[#FAF5F0] mb-2">{pkg.name}</h4>
                        <p className="text-[#A04040] font-semibold text-xl mb-4">{pkg.price}</p>
                        <p className="text-[#D7BFA8] text-sm font-semibold mb-2">The Package includes:</p>
                        <ul className="space-y-1.5">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="text-[#F8F3EF] text-sm flex items-start">
                              <span className="text-[#800000] mr-2">★</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Accommodation Rates */}
                  {event.accommodation && (
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-[#FAF5F0] mb-4">Accommodation Rates</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {event.accommodation.map((room, i) => (
                          <div key={i} className="bg-[#2E1A15]/40 p-4 rounded-xl border border-[#5C4033]/40 text-center">
                            <p className="text-[#D7BFA8] text-xs mb-2">{room.type}</p>
                            <p className="text-[#FAF5F0] font-bold text-lg">{room.price}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extras */}
                  {event.extras && (
                    <div className="mt-6 bg-[#800000]/10 p-4 rounded-xl border border-[#800000]/30">
                      <h4 className="text-[#FAF5F0] font-bold mb-2">Extras</h4>
                      {event.extras.map((extra, i) => (
                        <p key={i} className="text-[#F8F3EF] text-sm">
                          {extra.item}: <span className="text-[#A04040] font-semibold">{extra.price}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  <p className="text-[#D7BFA8] text-xs italic mt-4">
                    Rates are inclusive of government taxes and levies. Terms and Conditions apply.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hero Gallery Banner */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            `${S3_BASE}/Marriage1.webp`,
            `${S3_BASE}/Birthday1.webp`,
            `${S3_BASE}/IMG_2395.webp`,
            `${S3_BASE}/IMG_2387.webp`,
          ].map((img, idx) => (
            <div key={idx} className="relative h-40 rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`Event venue ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5C4033]/30">
          <p className="text-[#FAF5F0] text-lg mb-6 font-semibold">
            Ready to plan your event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-[#D7BFA8]">
              <span className="text-2xl">📞</span>
              <a href="tel:+254723008164" className="text-[#FAF5F0] font-semibold hover:text-[#A04040] transition-colors">
                0723008164
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#D7BFA8]">
              <span className="text-2xl">✉️</span>
              <a href="mailto:events@enchularesort.co.ke" className="text-[#FAF5F0] font-semibold hover:text-[#A04040] transition-colors">
                events@enchularesort.co.ke
              </a>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center gap-3">
            <span className="text-[#D7BFA8]">Follow us:</span>
            <a 
              href="https://instagram.com/events.by.enchula" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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