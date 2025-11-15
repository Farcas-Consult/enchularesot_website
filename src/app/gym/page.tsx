"use client";

import { useState } from "react";
import { 
  Dumbbell, 
  HeartPulse, 
  Users, 
  Clock, 
  Star 
} from "lucide-react";
import Link from "next/link";

const gymImages = [
  "https://images.unsplash.com/photo-1571019613454-1cb2d8a0b5f5?w=1920&q=80", // weights
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80", // cardio
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80", // yoga
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1920&q=80", // pool gym
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80", // spa fitness
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
    image: "https://images.unsplash.com/photo-1571019613454-1cb2d8a0b5f5?w=600&q=80",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Cardio & Endurance",
    desc: "Treadmills, bikes, rowers, and HIIT zones with heart-rate monitoring.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Group Classes",
    desc: "Yoga, Zumba, Spin, Pilates, and Bootcamp (daily schedule).",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Access",
    desc: "Train anytime with secure key-card entry and CCTV monitoring.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208737e9?w=600&q=80",
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

export default function GymPage() {
  // Static background (no carousel) for consistency with other pages
  const backgroundImage = gymImages[0];

  return (
    <section
      id="gym"
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with Badge */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-3 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              GYM
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Premium <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Gym Experience</span>
          </h1>
          <p className="text-lg text-[#D7BFA8] max-w-3xl mx-auto">
            Train in a world-class facility surrounded by nature. All equipment sanitized daily.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-[#800000] flex items-center justify-center text-[#FAF5F0] mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">{activity.title}</h3>
                <p className="text-[#F8F3EF] text-sm">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#FAF5F0] text-center mb-4">Membership Plans</h2>
          <p className="text-[#D7BFA8] text-center mb-8">
            Flexible options for every fitness journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border-2 relative ${
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
                <h3 className="text-lg font-bold text-[#FAF5F0] mb-3">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#800000]">{pkg.price}</div>
                  <div className="text-[#D7BFA8] text-sm">{pkg.period}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-[#800000] mt-0.5 flex-shrink-0" fill="#800000" />
                      <span className="text-[#F8F3EF]">{feature}</span>
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
          <h2 className="text-3xl font-bold text-[#FAF5F0] text-center mb-4">Additional Services</h2>
          <p className="text-[#D7BFA8] text-center mb-8">
            Enhance your fitness journey with expert support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2C1B16]/60 backdrop-blur-md p-6 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#FAF5F0] mb-2">{service.name}</h3>
                <div className="text-xl font-bold text-[#800000] mb-2">{service.price}</div>
                <p className="text-[#F8F3EF] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2C1B16]/40 backdrop-blur-md p-8 rounded-2xl border border-[#5C4033]/30">
          <span className="text-4xl mb-4 block">💪</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FAF5F0] mb-4">
            Ready to Transform?
          </h2>
          <p className="text-[#D7BFA8] max-w-2xl mx-auto mb-6">
            Join Enchula Fitness today and experience luxury wellness in the heart of Kenya’s wilderness.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book a Tour
          </Link>
        </div>
      </div>
    </section>
  );
}