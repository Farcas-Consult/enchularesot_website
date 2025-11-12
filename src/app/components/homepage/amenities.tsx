"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Wifi,
  Coffee,
  Car,
  Utensils,
  Bed,
  Bath,
  Briefcase,
  Baby,
  CreditCard,
  Bus,
  Building2,
  ConciergeBell,
  X,
  ChevronRight,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";

/* ----------------------------- TYPES ----------------------------- */
interface AmenityItem {
  name: string;
  icon: React.ReactNode;
  detail: string;
}

interface AmenityCategory {
  category: string;
  image: string;
  description: string;
  detailImages: string[];
  items: AmenityItem[];
}

/* --------------------------- DATA --------------------------- */
const amenitiesData: AmenityCategory[] = [
  {
    category: "Popular Amenities",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Our most sought-after facilities designed for your ultimate comfort and convenience.",
    detailImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    items: [
      { name: "Free Parking", icon: <Car className="w-5 h-5" />, detail: "Secure parking available 24/7 for all guests" },
      { name: "Free Breakfast", icon: <Coffee className="w-5 h-5" />, detail: "Complimentary buffet breakfast daily 7AM–10AM" },
      { name: "Free Wi-Fi", icon: <Wifi className="w-5 h-5" />, detail: "High-speed internet throughout the resort" },
      { name: "Restaurant", icon: <Utensils className="w-5 h-5" />, detail: "Fine dining with international and local cuisine" },
    ],
  },
  {
    category: "Internet",
    image: "https://images.unsplash.com/photo-1588004965885-6639b07d8439?w=800&q=80",
    description: "Stay connected with blazing-fast internet throughout your stay.",
    detailImages: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80",
    ],
    items: [
      { name: "High-Speed Wi-Fi", icon: <Wifi className="w-5 h-5" />, detail: "Fiber optic connection in all areas" },
      { name: "Business Center", icon: <Briefcase className="w-5 h-5" />, detail: "Workstations with printing facilities" },
    ],
  },
  {
    category: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description: "Indulge in exquisite culinary experiences from morning till night.",
    detailImages: [
      "https://images.unsplash.com/photo-1559339594-58d7cb561ad1?w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ],
    items: [
      { name: "Fine Dining Restaurant", icon: <Utensils className="w-5 h-5" />, detail: "Award-winning chefs and seasonal menus" },
      { name: "Rooftop Bar", icon: <Coffee className="w-5 h-5" />, detail: "Cocktails with panoramic sunset views" },
      { name: "Buffet Dinner", icon: <Utensils className="w-5 h-5" />, detail: "International buffet every evening 6PM–10PM" },
      { name: "24/7 Room Service", icon: <ConciergeBell className="w-5 h-5" />, detail: "Full menu available around the clock" },
      { name: "Free Breakfast", icon: <Coffee className="w-5 h-5" />, detail: "Continental and local breakfast options" },
    ],
  },
  // Add other categories as needed...
    {
    category: "Services",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    description: "Personalized services to make your stay effortless and memorable.",
    detailImages: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
    items: [
      { name: "24/7 Front Desk", icon: <ConciergeBell className="w-5 h-5" />, detail: "Multilingual staff always at your service" },
      { name: "Laundry Service", icon: <Building2 className="w-5 h-5" />, detail: "Same-day dry cleaning and pressing" },
      { name: "Daily Housekeeping", icon: <Bed className="w-5 h-5" />, detail: "Twice-daily cleaning service" },
      { name: "Turndown Service", icon: <Bed className="w-5 h-5" />, detail: "Evening preparation with treats" },
    ],
  },
  {
    category: "Payment Options",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "Flexible payment methods for your convenience.",
    detailImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    ],
    items: [
      { name: "All Major Cards", icon: <CreditCard className="w-5 h-5" />, detail: "Visa, Mastercard, Amex accepted" },
      { name: "Mobile Money", icon: <CreditCard className="w-5 h-5" />, detail: "M-Pesa and other mobile payments" },
      { name: "Bank Transfer", icon: <CreditCard className="w-5 h-5" />, detail: "Direct bank transfers accepted" },
    ],
  },
 
  {
    category: "Recreation",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    description: "Relax and rejuvenate with our premium wellness facilities.",
    detailImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    ],
    items: [
      { name: "Infinity Pool", icon: <Bath className="w-5 h-5" />, detail: "Heated pool with ocean views" },
      { name: "Fitness Center", icon: <Bath className="w-5 h-5" />, detail: "State-of-the-art gym equipment 24/7" },
      { name: "Spa & Wellness", icon: <Bath className="w-5 h-5" />, detail: "Massage, sauna, and beauty treatments" },
    ],
  },
  {
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    description: "Easy access and convenient transport options.",
    detailImages: [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    ],
    items: [
      { name: "Free Parking", icon: <Car className="w-5 h-5" />, detail: "Covered and open parking available" },
      { name: "Airport Shuttle", icon: <Bus className="w-5 h-5" />, detail: "Complimentary airport transfers" },
      { name: "Car Rental Desk", icon: <Car className="w-5 h-5" />, detail: "On-site vehicle rental service" },
    ],
  },
    {
    category: "Business & Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    description: "Professional facilities for meetings and special events.",
    detailImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c796?w=800&q=80",
    ],
    items: [
      { name: "Conference Rooms", icon: <Briefcase className="w-5 h-5" />, detail: "Capacity up to 200 people" },
      { name: "Business Center", icon: <Briefcase className="w-5 h-5" />, detail: "Printing, scanning, and office services" },
      { name: "Event Planning", icon: <Briefcase className="w-5 h-5" />, detail: "Dedicated event coordinator" },
    ],
  },
    {
    category: "Room Features",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
    description: "Luxurious amenities in every room for your comfort.",
    detailImages: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    ],
    items: [
      { name: "Rainfall Shower", icon: <Bath className="w-5 h-5" />, detail: "Premium bathrooms with luxury fixtures" },
      { name: "Soaking Tubs", icon: <Bath className="w-5 h-5" />, detail: "Available in premium suites" },
      { name: "Smart TV", icon: <Bath className="w-5 h-5" />, detail: "65-inch 4K with streaming services" },
      { name: "Climate Control", icon: <Bath className="w-5 h-5" />, detail: "Individual temperature control" },
    ],
  },

];

/* --------------------------- COMPONENT --------------------------- */
const Amenities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AmenityCategory | null>(null);
  const [showGuide, setShowGuide] = useState(true);

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
              World-Class Facilities
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-6 tracking-tight">
            Premium
            <span className="block bg-gradient-to-r from-[#5C4033] via-[#800000] to-[#A04040] bg-clip-text text-transparent">
              Amenities & Services
            </span>
          </h2>
          <p className="text-xl text-[#D7BFA8] max-w-3xl mx-auto leading-relaxed">
            Click any category below to explore our comprehensive range of luxury facilities and services.
          </p>
        </div>
        </div>

        {/* Interactive Guide */}
        {showGuide && (
          <div className="mb-8 bg-gradient-to-r from-[#5C4033]/20 to-[#800000]/20 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30 animate-pulse">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-[#A04040] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">How to Explore</h3>
                <p className="text-[#F8F3EF] mb-3">
                  Click on any amenity category card below to view detailed information, images, and full descriptions of our facilities.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#A9745B]">
                  <ChevronRight className="w-4 h-4" />
                  <span>Interactive cards • Detailed views • High-quality images</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                aria-label="Close guide"
                className="text-[#FAF5F0] hover:text-[#D7BFA8] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {amenitiesData.map((group, index) => {
  // Card content without onClick if it's Food & Drinks
  const cardContent = (
    <div
      className="group relative bg-[#2C1B16]/30 backdrop-blur-md rounded-3xl overflow-hidden border border-[#5C4033]/20 hover:border-[#800000]/50 transition-all duration-500 hover:scale-105 cursor-pointer shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={group.image}
          alt={group.category}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#FAF5F0] z-10">
          {group.category}
        </h3>
        <div className="absolute top-4 right-4 bg-[#5C4033] text-[#FAF5F0] px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
          <span>Explore</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#D7BFA8] text-sm mb-4">{group.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#A04040] font-semibold">{group.items.length} Features</span>
          <div className="w-10 h-10 bg-[#5C4033] rounded-full flex items-center justify-center text-[#FAF5F0]">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 w-12 h-12 bg-[#2C1B16]/60 backdrop-blur-sm rounded-full flex items-center justify-center text-[#FAF5F0] font-bold shadow-lg border border-[#5C4033]/30">
        {group.items.length}
      </div>
    </div>
  );

  if (group.category === "Food & Drinks") {
    return (
      <Link href="/posters/food-drinks" key={index} passHref>
        {cardContent}
      </Link>
    );
  }

  // For all other cards, keep the modal behavior
  return (
    <div key={index} onClick={() => setSelectedCategory(group)}>
      {cardContent}
    </div>
  );
})}

        {/* Detail Modal */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8">
              <div className="max-w-5xl mx-auto">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  aria-label="Close category view"
                  className="fixed top-6 right-6 text-[#FAF5F0] p-3 rounded-full bg-[#2C1B16]/40 hover:bg-[#5C4033]/30 backdrop-blur-md transition-all duration-300 border border-[#5C4033]/30"
                >
                  <X size={28} />
                </button>

                <div className="bg-[#2C1B16]/40 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={selectedCategory.image}
                      alt={selectedCategory.category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < 3 ? 'text-[#A04040] fill-[#A04040]' : 'text-[#D7BFA8]/50'
                            }`}
                          />
                        ))}
                      </div>
                      <h2 className="text-4xl font-bold text-[#FAF5F0] mb-2">{selectedCategory.category}</h2>
                      <p className="text-xl text-[#D7BFA8]">{selectedCategory.description}</p>
                    </div>
                  </div>

                  {selectedCategory.detailImages.length > 0 && (
                    <div className="p-8 border-b border-[#5C4033]/20">
                      <h3 className="text-2xl font-bold text-[#FAF5F0] mb-4">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedCategory.detailImages.map((img, idx) => (
                          <div key={idx} className="relative h-48 rounded-2xl overflow-hidden group">
                            <img
                              src={img}
                              alt={`${selectedCategory.category} ${idx + 1}`}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#FAF5F0] mb-6 flex items-center gap-3">
                      <CheckCircle className="w-7 h-7 text-[#5C4033]" />
                      Available Features
                    </h3>
                    <div className="grid gap-4">
                      {selectedCategory.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-[#2C1B16]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#5C4033]/20 hover:bg-[#5C4033]/10 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#5C4033] to-[#800000] rounded-xl flex items-center justify-center text-[#FAF5F0] flex-shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-[#FAF5F0] mb-2">{item.name}</h4>
                              <p className="text-[#F8F3EF] leading-relaxed">{item.detail}</p>
                            </div>
                            <CheckCircle className="w-6 h-6 text-[#5C4033]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Amenities;