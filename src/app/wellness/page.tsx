"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dumbbell, HeartPulse, Users, Clock, Star } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const BACKGROUND_IMAGES = [
  `${S3_BASE}/Sauna1.jpg`,
  
];
const gymImages = [
  `${S3_BASE}/IMG_2195.webp`,
  `${S3_BASE}/IMG_2174.webp`,
  `${S3_BASE}/IMG_2173.webp`,
  `${S3_BASE}/IMG_2171.webp`,
  `${S3_BASE}/IMG_2161.webp`,
  `${S3_BASE}/IMG_2160.webp`,
  `${S3_BASE}/IMG_2159.webp`,
  `${S3_BASE}/IMG_2182.webp`,
  `${S3_BASE}/IMG_2158.webp`,
];
const packages = [
  {
    id: 1,
    name: "Day Pass",
    price: "KSh 1,000",
    period: "Per Visit",
    features: ["Full facility access", "Locker room", "Towel service"],
    popular: false,
  },
  {
    id: 2,
    name: "Weekly Membership",
    price: "KSh 2,500",
    period: "7 Days",
    features: ["Unlimited access", "Group classes", "Personal training (1 session)"],
    popular: true,
  },
  {
    id: 3,
    name: "Monthly Membership",
    price: "KSh 7,000",
    period: "30 Days",
    features: ["Unlimited access", "All group classes", "4 personal training sessions", "Nutrition plan"],
    popular: false,
  },
  {
    id: 4,
    name: "Annual Membership",
    price: "KSh 66,000",
    period: "12 Months",
    features: ["Unlimited access", "All classes", "12 personal sessions", "Nutrition + wellness plan", "Priority booking"],
    popular: false,
  },
];
const activities = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Strength & Conditioning",
    desc: "Olympic lifting, functional training, and power circuits.",
    image: gymImages[5],
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Cardio & Endurance",
    desc: "Treadmills, bikes, rowers, and HIIT zones with heart-rate monitoring.",
    image: gymImages[1],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Classes",
    desc: "Yoga, Zumba, Spin, Pilates, and Bootcamp (daily schedule).",
    image: gymImages[2],
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Access",
    desc: "Train anytime with secure key-card entry and CCTV monitoring.",
    image: gymImages[3],
  },
];
const services = [
  {
    name: "Personal Training",
    price: "KSh 2,500/session",
    desc: "Tailored 1-on-1 coaching with certified trainers.",
  },
  {
    name: "Nutrition Consultation",
    price: "KSh 5,000/plan",
    desc: "Custom meal plans and dietary guidance.",
  },
  {
    name: "Body Composition Analysis",
    price: "KSh 1,500/test",
    desc: "Advanced scan for fat/muscle/water tracking.",
  },
  {
    name: "Recovery Therapy",
    price: "KSh 2,500/session",
    desc: "Massage, cryotherapy, and stretching sessions.",
  },
];

export default function WellnessPage() {
  // Hero banner carousel images
  const HERO_BANNER_IMAGES = [
    gymImages[5],
    BACKGROUND_IMAGES[0],
    gymImages[1],
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_BANNER_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [HERO_BANNER_IMAGES.length]);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + HERO_BANNER_IMAGES.length) % HERO_BANNER_IMAGES.length);
  const next = () => setCurrent((prev) => (prev + 1) % HERO_BANNER_IMAGES.length);

  return (
    <section id="wellness" className="relative min-h-screen bg-white">
      {/* Hero Banner Carousel */}
      <div className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        {HERO_BANNER_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={img}
              alt={`Wellness hero image ${idx + 1}`}
              fill
              className="object-cover w-full h-full"
              sizes="100vw"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Carousel Controls */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#800000] rounded-full p-2 shadow-md z-20" aria-label="Previous">
          &#8592;
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-[#800000] rounded-full p-2 shadow-md z-20" aria-label="Next">
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {HERO_BANNER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-[#800000] border-[#800000]' : 'bg-white border-[#800000]/50'} transition-all`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* GYM SECTION */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10">
            <span className="text-[#A04040] font-semibold tracking-wide text-sm uppercase">
              GYM & FITNESS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2E1A15] mb-6 leading-tight">
            Premium Gym Experience
          </h2>
          <p className="text-lg text-[#5C4033] max-w-3xl mx-auto">
            Train in a world-class facility surrounded by nature. All equipment sanitized daily.
          </p>
        </div>
        {/* Gym Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-12">
          {gymImages.map((img, idx) => (
            <div key={idx} className="relative w-full aspect-4/3 overflow-hidden group">
              <Image
                src={img}
                alt={`Gym image ${idx + 1}`}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group shadow"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#800000] flex items-center justify-center text-[#FAF5F0] mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2C1B16] mb-2">{activity.title}</h3>
                <p className="text-[#5C4033] text-sm">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2C1B16] text-center mb-4">Membership Plans</h2>
          <p className="text-[#5C4033] text-center mb-8">
            Flexible options for every fitness journey
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-6 border-2 relative ${
                  pkg.popular
                    ? "border-[#800000] shadow-lg scale-[1.02]"
                    : "border-[#5C4033]/30 hover:border-[#800000]/50"
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#800000] text-[#FAF5F0] px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-lg font-bold text-[#2C1B16] mb-3">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#800000]">{pkg.price}</div>
                  <div className="text-[#5C4033] text-sm">{pkg.period}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-[#800000] mt-0.5 shrink-0" fill="#800000" />
                      <span className="text-[#5C4033]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="block w-full py-2.5 text-center bg-[#800000] hover:bg-[#A04040] text-[#FAF5F0] font-semibold rounded-lg transition-colors duration-300 text-sm"
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2C1B16] text-center mb-4">Additional Services</h2>
          <p className="text-[#5C4033] text-center mb-8">
            Enhance your fitness journey with expert support
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 shadow"
              >
                <h3 className="text-lg font-bold text-[#2C1B16] mb-2">{service.name}</h3>
                <div className="text-xl font-bold text-[#800000] mb-2">{service.price}</div>
                <p className="text-[#5C4033] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="text-center bg-linear-to-r from-[#2C1B16]/10 to-[#800000]/10 p-8 rounded-2xl border border-[#5C4033]/30 shadow">
          <span className="text-4xl mb-4 block">💪</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C1B16] mb-4">
            Ready to Transform?
          </h2>
          <p className="text-[#5C4033] max-w-2xl mx-auto mb-6">
            Join Enchula Fitness today and experience luxury wellness in the heart of Kenya’s wilderness.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book a Tour
          </Link>
        </div>
      </div>

        {/* Massage Treatments - Large Feature */}
        <div className="mb-12 bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <Image
                src={`${S3_BASE}/Massage.webp`}
                alt="Massage Treatment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
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
              <Image
                src={`${S3_BASE}/Yoga.webp`}
                alt="Yoga Session"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* Grid of Additional Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Sauna & Steam Room */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`${S3_BASE}/Sauna.webp`}
                alt="Sauna and Steam Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
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
              <Image
                src={`${S3_BASE}/Herbal.webp`}
                alt="Herbal Teas and Infusions"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
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
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
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