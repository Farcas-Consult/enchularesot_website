"use client";
import Link from "next/link";
import React from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/IMG_2189.webp`,
  `${S3_BASE}/IMG_2187.webp`,
  `${S3_BASE}/IMG_2184.webp`,
];

export default function WellnessPage() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="wellness" className="relative min-h-screen bg-white">
        {/* Hero Banner Carousel */}
        <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
          {BACKGROUND_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 bg-cover bg-center ${index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          <div className="relative z-30 text-center w-full px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FAF5F0] mb-4 drop-shadow-lg">
              Wellness & Spa
            </h1>
            <p className="text-lg md:text-2xl text-[#D7BFA8] max-w-2xl mx-auto font-light drop-shadow">
              Rejuvenate, restore, and reconnect with yourself in peace and nature.
            </p>
          </div>
          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {BACKGROUND_IMAGES.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border border-white ${currentImageIndex === idx ? 'bg-[#A04040]' : 'bg-white/40'} transition-all`}
                onClick={() => setCurrentImageIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10">
              <span className="text-[#A04040] font-semibold tracking-wide text-sm uppercase">
                WELLNESS & SPA
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2E1A15] mb-6 leading-tight">
              Rejuvenate & Restore
            </h2>
            <p className="text-lg text-[#5C4033] max-w-3xl mx-auto">
              Reconnect with yourself in peace and nature.
            </p>
          </div>
          {/* Removed duplicate paragraph to fix JSX structure */}
        </div>

        {/* Massage Treatments - Large Feature */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img 
                src={`${S3_BASE}/Massage.webp`}
                alt="Massage Treatment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2E1A15] mb-4">Massage Treatments</h3>
              <p className="text-[#5C4033] mb-6 leading-relaxed">
                Traditional and aromatherapy massages using natural oils. Available in-room or under the trees for a truly immersive experience.
              </p>
              <div className="space-y-3 text-[#A04040] text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Swedish Massage - 60 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Deep Tissue - 75 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Aromatherapy - 90 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Couples Massage - 60 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yoga & Meditation */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-6 md:p-8 flex flex-col justify-center md:order-2">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2E1A15] mb-4">Yoga & Meditation</h3>
              <p className="text-[#5C4033] mb-6 leading-relaxed">
                Morning sessions by the pool. Mats provided. Suitable for all levels from beginners to advanced practitioners.
              </p>
              <div className="space-y-3 text-[#A04040] text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Group Morning Yoga - 7:00 AM daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Private Session - 60 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#A04040] rounded-full"></span>
                  <span>Sunset Meditation - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96 overflow-hidden md:order-1">
              <img 
                src={`${S3_BASE}/Yoga.webp`}
                alt="Yoga Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Grid of Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Sauna & Steam Room */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={`${S3_BASE}/Sauna.webp`}
                alt="Sauna and Steam Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[white]">Sauna & Steam Room</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#5C4033] mb-4 text-sm">
                Detox and relax after a long journey or safari. Perfect for muscle recovery and stress relief.
              </p>
              <div className="space-y-2 text-[#A04040] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>45-minute session</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Includes towels & robes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Complimentary herbal tea</span>
                </div>
              </div>
            </div>
          </div>

          {/* Herbal Teas */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={`${S3_BASE}/Herbal.webp`}
                alt="Herbal Teas and Infusions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[white]">Herbal Teas & Infusions</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#5C4033] mb-4 text-sm">
                Complimentary wellness teas available throughout the day. Locally sourced herbs and botanicals.
              </p>
              <div className="space-y-2 text-[#A04040] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Chamomile & Lavender</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Ginger & Lemon Grass</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                  <span>Mint & Eucalyptus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Wellness Services */}
        <div className="mb-12">
          <h3 className="text-3xl font-serif font-bold text-[#2E1A15] mb-8 text-center">More Wellness Experiences</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Facial Treatments",
                image: `${S3_BASE}/Facial.webp`,
                desc: "Organic facials with natural ingredients for radiant, healthy skin"
              },
              {
                title: "Body Scrubs",
                image: `${S3_BASE}/BodyScrubs.webp`,
                desc: "Exfoliating treatments with coffee & honey for smooth, rejuvenated skin"
              },
              {
                title: "Reflexology",
                image: `${S3_BASE}/Reflexology.webp`,
                desc: "Therapeutic foot massage for deep relaxation and stress relief"
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-lg font-serif font-bold text-[#2E1A15] mb-2">{service.title}</h5>
                  <p className="text-[#5C4033] text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Packages */}
        <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 shadow-lg mb-12">
          <h4 className="text-3xl font-serif font-bold text-[#2E1A15] mb-6 text-center">Wellness Packages</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F8F3EF] p-6 rounded-xl border border-[#5C4033]/10">
              <h5 className="text-xl font-serif font-bold text-[#A04040] mb-4">Half-Day Retreat</h5>
              <ul className="space-y-2 text-[#5C4033] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>60-minute massage of your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Facial treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Sauna & steam access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Healthy lunch included</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#F8F3EF] p-6 rounded-xl border border-[#5C4033]/10">
              <h5 className="text-xl font-serif font-bold text-[#A04040] mb-4">Full-Day Escape</h5>
              <ul className="space-y-2 text-[#5C4033] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>90-minute aromatherapy massage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Body scrub & facial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Yoga & meditation session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>All-day spa access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A04040] mt-0.5">✓</span>
                  <span>Lunch & wellness teas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 shadow-lg text-center mb-12">
          <h6 className="text-2xl font-serif font-bold text-[#2E1A15] mb-4">What Our Guests Say</h6>
          <p className="text-[#5C4033] text-lg italic">
            “The massage was heavenly and the yoga sessions helped me truly unwind. I left feeling completely rejuvenated!”
          </p>
          <p className="text-[#A04040] mt-3">— Sarah M., Nairobi</p>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-[#2E1A15] mb-6 text-lg">
            Ready to relax and restore your inner peace?
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#A04040] to-[#D7BFA8] hover:from-[#800000] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Wellness Session
          </Link>
        </div>
    </section>
  );
}