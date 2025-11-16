"use client";

import React from "react";
import {
  Wifi,
  Coffee,
  Car,
  Utensils,
  Bed,
  Bath,
  Briefcase,
  CreditCard,
  Bus,
  Building2,
  ConciergeBell,
  Star,
  CheckCircle,
} from "lucide-react";

/* ----------------------------- TYPES ----------------------------- */
interface AmenityItem {
  name: string;
  icon: React.ReactNode;
  detail: string;
  image: string;
}

interface AmenityCategory {
  category: string;
  image: string;
  description: string;
  items: AmenityItem[];
}

/* --------------------------- DATA --------------------------- */
const amenitiesData: AmenityCategory[] = [
  {
    category: "Popular Amenities",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Our most sought-after facilities designed for your ultimate comfort and convenience.",
    items: [
      { 
        name: "Free Parking", 
        icon: <Car className="w-5 h-5" />, 
        detail: "Secure parking available 24/7 for all guests with covered and open spaces. CCTV surveillance ensures your vehicle's safety throughout your stay.",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80"
      },
      { 
        name: "Free Breakfast", 
        icon: <Coffee className="w-5 h-5" />, 
        detail: "Complimentary buffet breakfast daily 7AM–10AM featuring international and local cuisine. Fresh pastries, tropical fruits, and made-to-order options available.",
        image: "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?w=800&q=80"
      },
      { 
        name: "Free Wi-Fi", 
        icon: <Wifi className="w-5 h-5" />, 
        detail: "High-speed fiber optic internet throughout the resort with no data limits. Perfect for streaming, video calls, and remote work needs.",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80"
      },
      { 
        name: "Restaurant", 
        icon: <Utensils className="w-5 h-5" />, 
        detail: "Fine dining with international and local cuisine prepared by award-winning chefs. Open for breakfast, lunch, and dinner with both indoor and outdoor seating.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
      },
    ],
  },
  {
    category: "Internet & Business",
    image: "https://images.unsplash.com/photo-1588004965885-6639b07d8439?w=800&q=80",
    description: "Stay connected and productive with our state-of-the-art business facilities.",
    items: [
      { 
        name: "High-Speed Wi-Fi", 
        icon: <Wifi className="w-5 h-5" />, 
        detail: "Fiber optic connection in all areas with speeds up to 500 Mbps. Dedicated business network available for enhanced security and reliability.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      },
      { 
        name: "Business Center", 
        icon: <Briefcase className="w-5 h-5" />, 
        detail: "Fully equipped workstations with printing, scanning, and copying facilities. Private meeting rooms and video conferencing capabilities available 24/7.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
      },
    ],
  },
  {
    category: "Guest Services",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    description: "Personalized services to make your stay effortless and memorable.",
    items: [
      { 
        name: "24/7 Front Desk", 
        icon: <ConciergeBell className="w-5 h-5" />, 
        detail: "Multilingual staff always at your service for check-in, concierge assistance, and local recommendations. We speak English, Swahili, French, and German.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
      },
      { 
        name: "Laundry Service", 
        icon: <Building2 className="w-5 h-5" />, 
        detail: "Same-day dry cleaning, pressing, and laundry service available. Express service within 4 hours for urgent needs. Eco-friendly cleaning products used.",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
      },
      { 
        name: "Daily Housekeeping", 
        icon: <Bed className="w-5 h-5" />, 
        detail: "Twice-daily cleaning service with morning refresh and evening turndown. Premium linens changed daily and fresh towels provided throughout the day.",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
      },
      { 
        name: "Turndown Service", 
        icon: <Bed className="w-5 h-5" />, 
        detail: "Evening preparation with complimentary chocolates, fresh flowers, and ambient lighting. Your room transformed into a peaceful sanctuary each night.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
      },
    ],
  },
  {
    category: "Payment Options",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "Flexible and secure payment methods for your convenience.",
    items: [
      { 
        name: "All Major Cards", 
        icon: <CreditCard className="w-5 h-5" />, 
        detail: "We accept Visa, Mastercard, American Express, and Discover. Secure contactless payment terminals available throughout the property.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
      },
      { 
        name: "Mobile Money", 
        icon: <CreditCard className="w-5 h-5" />, 
        detail: "M-Pesa, Airtel Money, and other mobile payment platforms accepted. Instant confirmation and digital receipts sent directly to your phone.",
        image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80"
      },
      { 
        name: "Bank Transfer", 
        icon: <CreditCard className="w-5 h-5" />, 
        detail: "Direct bank transfers accepted for advance bookings. Multiple currency options available with competitive exchange rates and no hidden fees.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
      },
    ],
  },
  {
    category: "Recreation & Wellness",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    description: "Relax and rejuvenate with our premium wellness facilities.",
    items: [
      { 
        name: "Infinity Pool", 
        icon: <Bath className="w-5 h-5" />, 
        detail: "Heated infinity pool with breathtaking ocean views and underwater LED lighting. Poolside bar service available with comfortable loungers and cabanas.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
      },
      { 
        name: "Fitness Center", 
        icon: <Bath className="w-5 h-5" />, 
        detail: "State-of-the-art gym equipment available 24/7 including cardio machines, free weights, and resistance training. Personal trainers available upon request.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
      },
      { 
        name: "Spa & Wellness", 
        icon: <Bath className="w-5 h-5" />, 
        detail: "Full-service spa offering massage therapy, sauna, steam room, and beauty treatments. Traditional and modern therapies using organic, locally-sourced products.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
      },
    ],
  },
  {
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    description: "Easy access and convenient transport options for seamless travel.",
    items: [
      { 
        name: "Free Parking", 
        icon: <Car className="w-5 h-5" />, 
        detail: "Covered and open parking spaces available with 24/7 security. Electric vehicle charging stations and valet parking service included for all guests.",
        image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80"
      },
      { 
        name: "Airport Shuttle", 
        icon: <Bus className="w-5 h-5" />, 
        detail: "Complimentary airport transfers available on request. Luxury vehicles with professional drivers ensure comfortable transportation to and from the airport.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
      },
      { 
        name: "Car Rental Desk", 
        icon: <Car className="w-5 h-5" />, 
        detail: "On-site vehicle rental service with a wide selection of cars. Economy to luxury vehicles available with GPS navigation and full insurance coverage included.",
        image: "https://images.unsplash.com/photo-1552930151-3fa4062a5ac8?w=800&q=80"
      },
    ],
  },
];

/* --------------------------- COMPONENT --------------------------- */
const Amenities: React.FC = () => {
  return (
    <section
      id="amenities"
      className="relative py-24 px-4 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              AMENITIES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
            Premium
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              World-Class Facilities
            </span>
          </h2>
          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of luxury facilities and services designed for your ultimate comfort.
          </p>
        </div>

        {/* Amenities Sections */}
        <div className="space-y-20">
          {amenitiesData.map((category, index) => (
            <div
              key={index}
              className="bg-[#2C1B16]/40 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 overflow-hidden shadow-2xl"
            >
              {/* Category Header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/95 via-[#2E1A15]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < 4 ? 'text-[#A04040] fill-[#A04040]' : 'text-[#D7BFA8]/50'
                        }`}
                      />
                    ))}
                  </div>
                  <h2 className="text-4xl font-bold text-[#FAF5F0] mb-3">{category.category}</h2>
                  <p className="text-xl text-[#D7BFA8] max-w-3xl">{category.description}</p>
                  <div className="mt-4 inline-block px-4 py-2 bg-[#5C4033]/60 backdrop-blur-sm rounded-full border border-[#800000]/30">
                    <span className="text-[#FAF5F0] font-semibold text-sm">
                      {category.items.length} Premium Features
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Grid with Images */}
              <div className="p-8">
                <div className="grid gap-8">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-[#2C1B16]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#5C4033]/20 hover:bg-[#5C4033]/20 hover:border-[#800000]/50 transition-all duration-300 shadow-lg"
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1B16]/30"></div>
                          <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-[#5C4033] to-[#800000] rounded-xl flex items-center justify-center text-[#FAF5F0] shadow-lg">
                            {item.icon}
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                          <div className="flex items-start gap-3 mb-4">
                            <h4 className="text-2xl font-bold text-[#FAF5F0] flex-1">{item.name}</h4>
                            <CheckCircle className="w-6 h-6 text-[#5C4033] flex-shrink-0 mt-1" />
                          </div>
                          <p className="text-[#D7BFA8] leading-relaxed text-lg">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#5C4033]/20 to-[#800000]/20 backdrop-blur-md rounded-2xl p-8 border border-[#5C4033]/30">
            <h3 className="text-2xl font-bold text-[#FAF5F0] mb-3">
              Experience Luxury Like Never Before
            </h3>
            <p className="text-[#D7BFA8] mb-6 max-w-2xl">
              All these premium amenities and more await you at our resort. Book your stay today and indulge in world-class hospitality.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#5C4033] to-[#800000] text-[#FAF5F0] rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <a 
              href="/booking">
              Book Your Stay Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;