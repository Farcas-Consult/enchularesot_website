"use client";
import Hero from "./components/homepage/hero";
import Image from "next/image";
import Link from "next/link";
import { Hand, UserCheck, Droplet, Shield, Sparkles, Wind, Thermometer, Stethoscope } from "lucide-react";

// 🔴 Fixed S3_BASE: removed trailing spaces
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const healthSafetyData = [
  {
    title: "Contactless Technology",
    description: "Seamless digital check-in/out and mobile room keys ensure zero-contact convenience throughout your entire stay.",
    icon: <UserCheck size={48} className="text-[#800000]" />,
  },
  {
    title: "Medical-Grade Sanitization",
    description: "Hospital-level disinfection protocols using EPA-approved products ensure every surface meets the highest hygiene standards.",
    icon: <Droplet size={48} className="text-[var(--brand-secondary-maroon)]" />,
  },
  {
    title: "Advanced Air Purification",
    description: "HEPA filtration systems continuously circulate and purify air, removing 99.97% of airborne particles and allergens.",
    icon: <Wind size={48} className="text-[#D7BFA8]" />,
  },
  {
    title: "Certified Safety Protocols",
    description: "Our staff undergo rigorous training and follow WHO-endorsed health protocols to ensure your complete protection.",
    icon: <Shield size={48} className="text-[#5C4033]" />,
  },
  {
    title: "Wellness Monitoring",
    description: "24/7 health support with temperature screening and on-call medical professionals for your peace of mind.",
    icon: <Thermometer size={48} className="text-[#800000]" />,
  },
  {
    title: "Hygiene Stations",
    description: "Premium hand sanitizer and hygiene stations strategically placed throughout the resort for instant access.",
    icon: <Hand size={48} className="text-[var(--brand-secondary-maroon)]" />,
  },
  {
    title: "On-Site Medical Care",
    description: "Fully equipped medical facility with licensed healthcare professionals available around the clock for any concerns.",
    icon: <Stethoscope size={48} className="text-[#5C4033]" />,
  },
  {
    title: "Ultra-Clean Guarantee",
    description: "Every room receives a deep-clean certification before your arrival, with sealed door tags confirming sanitation.",
    icon: <Sparkles size={48} className="text-[#D7BFA8]" />,
  },
];

// Room data
const rooms = [
  {
    id: 1,
    name: "Standard  Room",
    price: "From Kshs. 10,000",
    image: `${S3_BASE}/Room6.jpg`,
    anchor: "standard-double-room",
  },
  {
    id: 2,
    name: "Twin Room",
    price: "From Kshs. 10,000",
    image: `${S3_BASE}/Room8.jpg`,
    anchor: "twin-room",
  },
  {
    id: 3,
    name: "Superior Room",
    price: "From Kshs. 12,000",
    image: `${S3_BASE}/Room4.jpg`,
    anchor: "superior-room",
  },
];

export default function Home() {
  return (
    <div className="m-0 p-0">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4 text-center" style={{ color: '#4A2400' }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>About Us</h2>
            <p className="text-xl font-semibold mb-6" style={{ color: '#B99A66', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>The epitome of african hospitality.</p>
          </div>
          <div className="text-left">
            <div className="space-y-4 leading-relaxed mb-6" style={{ color: '#4A2400', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
              <p>
                Nestled in the breathtaking plains of <strong className="text-brand">Kajiado County</strong>, Enchula Resort offers a unique blend of untamed Kenyan beauty and refined modern hospitality.
              </p>
              <p>
                Our resort provides an escape from the ordinary, where guests can reconnect with nature while enjoying world-class amenities and warm Kenyan hospitality.
              </p>
              <p>
                From elegant accommodations to exceptional dining experiences, every detail at Enchula Resort is designed to create unforgettable memories.
              </p>
            </div>
          </div>
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-[var(--brand-background)] rounded-xl p-6 border border-[var(--brand-secondary-maroon)]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>4-Star Luxury</h4>
              <p className="text-sm" style={{ color: '#4A2400', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Award-winning service</p>
            </div>
            <div className="bg-[var(--brand-background)] rounded-xl p-6 border border-[var(--brand-secondary-maroon)]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>Expert Team</h4>
              <p className="text-sm" style={{ color: '#4A2400', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Dedicated hospitality</p>
            </div>
            <div className="bg-[var(--brand-background)] rounded-xl p-6 border border-[var(--brand-secondary-maroon)]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /></svg>
              <h4 className="font-bold mb-2 font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>Premium Amenities</h4>
              <p className="text-sm" style={{ color: '#4A2400', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>World-class facilities</p>
            </div>
            <div className="bg-[var(--brand-background)] rounded-xl p-6 border border-[var(--brand-secondary-maroon)]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C12.1566 4 13.6566 4.84285 14.5 6.11803C15.3434 4.84285 16.8434 4 18.5 4C21.5376 4 24 6.46243 24 9.5C24 13.5 17 21 17 21H12Z" /></svg>
              <h4 className="font-bold mb-2 font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>Warm Hospitality</h4>
              <p className="text-sm" style={{ color: '#4A2400', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Kenyan excellence</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#D7BFA8]/0 via-[#D7BFA8]/60 to-[#D7BFA8]/0 my-8" />

      {/* Rooms Section */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-4xl font-bold mb-2 text-center font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>Rooms & Suites</h2>
        <p className="text-lg text-center mb-8 max-w-2xl mx-auto" style={{ color: '#B99A66', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
          Discover our selection of comfortable, stylish rooms designed for relaxation and a memorable stay.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="relative rounded-xl shadow-md overflow-hidden group h-[420px] md:h-[520px] w-full max-w-[520px] mx-auto"
            >
              <Image src={room.image} alt={room.name} fill className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end px-8 pb-8 pt-32 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg font-serif" style={{ color: '#8F5F2F', fontFamily: 'Lora, serif' }}>{room.name}</h3>
                <div className="text-lg font-semibold mb-4 drop-shadow" style={{ color: '#B99A66', fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>{room.price}</div>
                <Link href={`/rooms#${room.anchor}`} className="inline-block px-6 py-2 rounded-full font-bold text-[#4A2400]" style={{ backgroundColor: '#FFD3A3' }}>
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#A9745B]/0 via-[#A9745B]/60 to-[#A9745B]/0 my-8" />

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {/* CONFERENCES AND EVENTS SECTION */}
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#8F5F2F' }}>Conferences and Events</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8" style={{ color: '#B99A66' }}>
          From strategic corporate retreats to dynamic team-building sessions and elegant social gatherings — we provide the perfect setting for every occasion.
        </p>

        {/* Corporate Events Subsection */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl mb-4" style={{ color: '#8F5F2F' }}>Corporate Events</h3>
          <p className="text-base mb-6" style={{ color: '#4A2400' }}>Professional meeting spaces, conferences, and business gatherings with full amenities.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              `${S3_BASE}/Conference1.jpg`,
              `${S3_BASE}/Conference2.jpg`,
              `${S3_BASE}/Conference3.jpg`,
              `${S3_BASE}/Conference4.jpg`,
            ].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Corporate event ${idx + 1}`}
                width={380}
                height={240}
                className="rounded-xl shadow-md object-cover"
              />
            ))}
          </div>
        </div>

        {/* Social Events Subsection */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl mb-4" style={{ color: '#8F5F2F' }}>Social Events (Weddings & Parties)</h3>
          <p className="text-base mb-6" style={{ color: '#4A2400' }}>Weddings, birthdays, family reunions, and parties — all tailored to your vision.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              `${S3_BASE}/Marriage1.webp`,
              `${S3_BASE}/Marriage2.webp`,
              `${S3_BASE}/Marriage3.webp`,
              `${S3_BASE}/Birthday1.webp`,
              `${S3_BASE}/Birthday2.webp`,
              `${S3_BASE}/Birthday3.webp`,
            ].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`Social event ${idx + 1}`}
                width={380}
                height={240}
                className="rounded-xl shadow-md object-cover"
              />
            ))}
          </div>
        </div>

        <a href="/events" className="mt-6 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400]" style={{ backgroundColor: '#FFD3A3' }}>
          Explore Event Options
        </a>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[var(--brand-secondary-maroon)]/0 via-[var(--brand-secondary-maroon)]/60 to-[var(--brand-secondary-maroon)]/0 my-8" />

      {/* Dining Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: '#8F5F2F' }}>Dining</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-center" style={{ color: '#B99A66' }}>
          Savor delicious cuisine in our bright, inviting restaurants and bars, offering local and international flavors.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Image
            src={`${S3_BASE}/Dining2.jpg`}
            alt="Restaurant Interior"
            width={540}
            height={340}
            className="rounded-xl shadow-md"
          />
          <Image
            src={`${S3_BASE}/Dining4.jpg`}
            alt="Bar Lounge"
            width={540}
            height={340}
            className="rounded-xl shadow-md"
          />
          <Image
            src={`${S3_BASE}/Dining6.jpg`}
            alt="Nightlife"
            width={540}
            height={340}
            className="rounded-xl shadow-md"
          />
          <Image
            src={`${S3_BASE}/Breakfast1.jpg`}
            alt="Pool Bar"
            width={540}
            height={340}
            className="rounded-xl shadow-md"
          />
        </div>
        <a href="/dinings" className="mt-8 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400]" style={{ backgroundColor: '#FFD3A3' }}>
          Explore
        </a>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[var(--brand-secondary-maroon)]/0 via-[var(--brand-secondary-maroon)]/60 to-[var(--brand-secondary-maroon)]/0 my-8" />

      {/* Fun Activities and Experiences */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: '#8F5F2F' }}>Fun Activities and Experiences</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-center" style={{ color: '#B99A66' }}>
          Enjoy a range of activities: spa, wellness, gym, games, and unique adventures—all in a bright, uplifting setting.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Image
            src={`${S3_BASE}/IMG_2174.webp`}
            alt="Modern Gym Facility"
            width={380}
            height={260}
            className="rounded-xl shadow-md object-contain"
          />
          <Image
            src={`${S3_BASE}/Facial.webp`}
            alt="Facial Treatment"
            width={380}
            height={260}
            className="rounded-xl shadow-md object-contain"
          />
          <Image
            src={`${S3_BASE}/IMG_3394.webp`}
            alt="Kids & Family Fun"
            width={380}
            height={260}
            className="rounded-xl shadow-md object-contain"
          />
          <Image
            src={`${S3_BASE}/IMG_2450.webp`}
            alt="Maasai Craft Workshop"
            width={380}
            height={260}
            className="rounded-xl shadow-md object-contain"
          />
          <Image
            src={`${S3_BASE}/Maasai2.webp`}
            alt="Maasai Cultural Experience"
            width={380}
            height={260}
            className="rounded-xl shadow-md object-contain"
          />
        </div>
        <a href="/experience_activities" className="mt-8 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400]" style={{ backgroundColor: '#FFD3A3' }}>
          Explore
        </a>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#5C4033]/0 via-[#5C4033]/60 to-[#5C4033]/0 my-8" />

      {/* Case Reviews */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: '#8F5F2F' }}>Case Reviews</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-center" style={{ color: '#B99A66' }}>
          Hear from our guests and see real-world experiences at Enchula Resort.
        </p>
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30">
            <div className="text-3xl font-bold text-[#800000] mb-1">4.8/5</div>
            <div className="text-[#D7BFA8] text-sm">Average Rating</div>
          </div>
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30">
            <div className="text-3xl font-bold text-[#800000] mb-1">200+</div>
            <div className="text-[#D7BFA8] text-sm">Happy Guests</div>
          </div>
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30">
            <div className="text-3xl font-bold text-[#800000] mb-1">98%</div>
            <div className="text-[#D7BFA8] text-sm">Would Recommend</div>
          </div>
        </div>
        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4" style={{ color: '#4A2400' }}>
              “Perfect escape from the city! The staff were so warm and welcoming. My kids loved the play area, and we enjoyed a beautiful sunset dinner by the pool.”
            </p>
            <span className="font-semibold" style={{ color: '#8F5F2F' }}>— Wanjiru M. (Nairobi)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4" style={{ color: '#4A2400' }}>
              “We booked Enchula for our mini-moon and it was magical. The room was cozy, clean, and had such a peaceful view of the savannah.”
            </p>
            <span className="font-semibold" style={{ color: '#8F5F2F' }}>— David & Sarah T. (Mombasa)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4" style={{ color: '#4A2400' }}>
              “Visited during my East Africa tour. Enchula offered a peaceful, authentic experience. I appreciated the sustainability efforts — solar power, recycling, and support for local artisans.”
            </p>
            <span className="font-semibold" style={{ color: '#8F5F2F' }}>— Lina B. (Germany)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4" style={{ color: '#4A2400' }}>
              “Best family weekend in years! Kids enjoyed camel rides and the mini club. Rooms connected perfectly for us. Food was delicious — especially the local dishes.”
            </p>
            <span className="font-semibold" style={{ color: '#8F5F2F' }}>— The Otieno Family (Kisumu)</span>
          </div>
        </div>
        {/* Review Submission CTA */}
        <div className="text-center">
          <a href="#contact" className="mt-8 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400]" style={{ backgroundColor: '#FFD3A3' }}>
            Write Your Review
          </a>
        </div>
      </section>
    </div>
  );
}