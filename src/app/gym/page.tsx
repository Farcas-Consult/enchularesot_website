"use client";

import { useState, useEffect } from "react";
import { 
  Dumbbell, 
  HeartPulse, 
  Users, 
  Clock, 
  Calendar, 
  Star, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

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
    price: "KSh 3,500/session",
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
    price: "KSh 4,000/session",
    desc: "Massage, cryotherapy, and stretching sessions.",
  },
];

export default function GymPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % gymImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % gymImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + gymImages.length) % gymImages.length);
  };

  return (
    <section
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {gymImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
          >
            <img
              src={image}
              alt={`Gym view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E1A15]/85 via-[#2C1B16]/70 to-[#2E1A15]/90" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#2C1B16]/70 hover:bg-[#5C4033] text-[#FAF5F0] backdrop-blur-sm border border-[#5C4033]/50 transition-all duration-300 hidden md:block"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#2C1B16]/70 hover:bg-[#5C4033] text-[#FAF5F0] backdrop-blur-sm border border-[#5C4033]/50 transition-all duration-300 hidden md:block"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-bold tracking-wide text-sm uppercase">
              GYM
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6">
            Premium
            <span className="block bg-gradient-to-r from-[#D7BFA8] to-[#FAF5F0] bg-clip-text text-transparent">
              Gym Experience
            </span>
          </h1>
          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto">
            Train in a world-class facility surrounded by nature. All equipment sanitized daily.
          </p>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mb-12">
          {gymImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#800000] w-8" : "bg-[#D7BFA8]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all duration-500 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-xl bg-[#800000] flex items-center justify-center text-[#FAF5F0] mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FAF5F0] mb-2">{activity.title}</h3>
                <p className="text-[#F8F3EF]">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#FAF5F0] text-center mb-4">Membership Plans</h2>
          <p className="text-[#D7BFA8] text-center mb-12">
            Flexible options for every fitness journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-[#2C1B16]/60 backdrop-blur-md rounded-3xl p-8 border-2 transition-all duration-500 relative ${
                  pkg.popular
                    ? "border-[#800000] shadow-2xl scale-105"
                    : "border-[#5C4033]/50 hover:border-[#800000]/50"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#800000] text-[#FAF5F0] px-6 py-2 rounded-full font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#800000]">{pkg.price}</div>
                  <div className="text-[#D7BFA8]">{pkg.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-[#800000] mt-0.5 flex-shrink-0" fill="#800000" />
                      <span className="text-[#F8F3EF]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#800000] hover:bg-[#A04040] text-[#FAF5F0] font-bold rounded-xl transition-colors">
                  <a
                     href="#booking">
                  Choose Plan
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#FAF5F0] text-center mb-4">Additional Services</h2>
          <p className="text-[#D7BFA8] text-center mb-12">
            Enhance your fitness journey with expert support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2C1B16]/60 backdrop-blur-md p-6 rounded-2xl border border-[#5C4033]/30 hover:border-[#800000]/50 transition-all"
              >
                <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-[#800000] mb-3">{service.price}</div>
                <p className="text-[#F8F3EF] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2C1B16]/70 p-12 rounded-3xl border-2 border-[#800000]/40 backdrop-blur-sm">
          <span className="text-5xl mb-4 block">💪</span>
          <h2 className="text-4xl font-bold text-[#FAF5F0] mb-6">
            Ready to Transform?
          </h2>
          <p className="text-[#D7BFA8] text-xl max-w-2xl mx-auto mb-8">
            Join Enchula Fitness today and experience luxury wellness in the heart of Kenya’s wilderness.
          </p>
          <button className="px-10 py-4 bg-[#800000] hover:bg-[#A04040] text-[#FAF5F0] font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105">
           <a 
           href="#booking">
            Book a Tour
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}