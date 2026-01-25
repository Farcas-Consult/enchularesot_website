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
    icon: <UserCheck size={48} className="text-[#4A2400]" />,
  },
  {
    title: "Medical-Grade Sanitization",
    description: "Hospital-level disinfection protocols using EPA-approved products ensure every surface meets the highest hygiene standards.",
    icon: <Droplet size={48} className="text-(--brand-secondary-maroon)" />,
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
    icon: <Thermometer size={48} className="text-[#4A2400]" />,
  },
  {
    title: "Hygiene Stations",
    description: "Premium hand sanitizer and hygiene stations strategically placed throughout the resort for instant access.",
    icon: <Hand size={48} className="text-(--brand-secondary-maroon)" />,
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
    image: `${S3_BASE}/Room8.jpg`,
    anchor: "standard-double-room",
  },
  {
    id: 2,
    name: "Twin Room",
    price: "From Kshs. 10,000",
    image: `${S3_BASE}/Room6.jpg`,
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
      <section id="about" className="bg-white py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 font-serif text-[#8F5F2F] tracking-tight">About Us</h2>
            <p className="text-lg sm:text-xl font-semibold mb-6 text-[#B99A66] font-nunito">The epitome of african hospitality.</p>
          </div>
          <div className="text-left">
            <div className="space-y-4 leading-relaxed mb-6 text-[#4A2400] font-nunito text-base sm:text-lg">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-(--brand-background) rounded-xl p-6 border border-(--brand-secondary-maroon)/10 text-center hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 font-serif text-[#8F5F2F] text-lg">4-Star Luxury</h4>
              <p className="text-sm text-[#4A2400] font-nunito">Award-winning service</p>
            </div>
            <div className="bg-(--brand-background) rounded-xl p-6 border border-(--brand-secondary-maroon)/10 text-center hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 font-serif text-[#8F5F2F] text-lg">Expert Team</h4>
              <p className="text-sm text-[#4A2400] font-nunito">Dedicated hospitality</p>
            </div>
            <div className="bg-(--brand-background) rounded-xl p-6 border border-(--brand-secondary-maroon)/10 text-center hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /></svg>
              <h4 className="font-bold mb-2 font-serif text-[#8F5F2F] text-lg">Premium Amenities</h4>
              <p className="text-sm text-[#4A2400] font-nunito">World-class facilities</p>
            </div>
            <div className="bg-(--brand-background) rounded-xl p-6 border border-(--brand-secondary-maroon)/10 text-center hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C12.1566 4 13.6566 4.84285 14.5 6.11803C15.3434 4.84285 16.8434 4 18.5 4C21.5376 4 24 6.46243 24 9.5C24 13.5 17 21 17 21H12Z" /></svg>
              <h4 className="font-bold mb-2 font-serif text-[#8F5F2F] text-lg">Warm Hospitality</h4>
              <p className="text-sm text-[#4A2400] font-nunito">Kenyan excellence</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#D7BFA8]/0 via-[#D7BFA8]/60 to-[#D7BFA8]/0 my-8" />

      {/* Rooms Section */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center font-serif text-[#8F5F2F] tracking-tight">Rooms & Suites</h2>
        <p className="text-lg sm:text-xl text-center mb-8 max-w-2xl mx-auto text-[#B99A66] font-nunito">
          Discover our selection of comfortable, stylish rooms designed for relaxation and a memorable stay.
        </p>
        <div className="-mx-4 sm:mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {rooms.map((room) => (
              <div key={room.id} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image src={room.image} alt={room.name} fill className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1 font-serif text-white drop-shadow-lg">{room.name}</h3>
                  <div className="text-base font-semibold mb-2 text-[#FFD3A3] drop-shadow font-nunito">{room.price}</div>
                  <Link href={`/rooms#${room.anchor}`} className="inline-block px-4 py-1 rounded-full font-bold text-[#4A2400] bg-[#FFD3A3] hover:bg-[#E6B87A] text-sm transition-colors mt-1 self-start">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#A9745B]/0 via-[#A9745B]/60 to-[#A9745B]/0 my-8" />

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {/* CONFERENCES AND EVENTS SECTION */}
      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center font-serif text-[#8F5F2F] tracking-tight">Conferences and Events</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8 text-[#B99A66] font-nunito">
          From strategic retreats to dynamic team-building sessions and elegant social gatherings — we provide the perfect setting for every occasion.
        </p>
        {/* Retreats and Conferences Subsection */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#8F5F2F]">Retreats and Conferences</h3>
          <p className="text-base sm:text-lg mb-6 text-[#4A2400] font-nunito">
            Host your next retreat or conference in our modern, fully equipped venues designed for productivity and inspiration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[`${S3_BASE}/Conference4.jpg`, `${S3_BASE}/Conference2.jpg`, `${S3_BASE}/Conference3.jpg`].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Retreat or conference ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Corporate and Social Events Subsection */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#8F5F2F]">Corporate and Social Events</h3>
          <p className="text-base sm:text-lg mb-6 text-[#4A2400] font-nunito">
            Celebrate milestones, host business meetings, or enjoy memorable social gatherings with our tailored event services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              `${S3_BASE}/Event18.jpeg`,
              `${S3_BASE}/Event1.jpeg`,
              `${S3_BASE}/Party3.jpeg`,
              `${S3_BASE}/Event2.jpeg`,
              `${S3_BASE}/Event13.jpeg`,
              `${S3_BASE}/Event11.jpeg`,
              `${S3_BASE}/Event7.jpeg`,
              `${S3_BASE}/Event5.jpeg`,
              `${S3_BASE}/Event14.jpeg`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Corporate or social event ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Team Building Subsection */}
        <div className="mb-12">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#8F5F2F]">Team Building</h3>
          <p className="text-base sm:text-lg mb-6 text-[#4A2400] font-nunito">
            Strengthen bonds and boost morale with our engaging team-building activities, set in inspiring natural surroundings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              `${S3_BASE}/Team1.jpeg`,
              `${S3_BASE}/Team2.jpeg`,
            ].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Team building activity ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-0.5 bg-linear-to-r from-(--brand-secondary-maroon)/0 via-(--brand-secondary-maroon)/60 to-(--brand-secondary-maroon)/0 my-8" />

      {/* Dining Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center font-serif text-[#8F5F2F] tracking-tight">Dining</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8 text-center text-[#B99A66] font-nunito">
          Savor delicious cuisine in our bright, inviting restaurants and bars, offering local and international flavors.
        </p>
        <div className="-mx-4 sm:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[`${S3_BASE}/Dining4.jpg`, `${S3_BASE}/Dining6.jpg`, `${S3_BASE}/Breakfast1.jpg`].map((img, idx) => (
              <div key={idx} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={img}
                  alt={['Bar Lounge', 'Nightlife', 'Pool Bar'][idx]}
                  fill
                  className="object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        <a href="/dinings" className="mt-8 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400] bg-[#FFD3A3] hover:bg-[#E6B87A] transition-colors">
          Explore
        </a>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-(--brand-secondary-maroon)/0 via-(--brand-secondary-maroon)/60 to-(--brand-secondary-maroon)/0 my-8" />

      {/* Fun Activities and Experiences */}
      <section className="relative bg-linear-to-br from-[#FFF8F0] via-[#F7E6D0] to-[#F3E9DD] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-center font-serif text-[#8F5F2F] drop-shadow-lg tracking-tight">Fun Activities & Experiences</h2>
          <p className="max-w-2xl mx-auto text-lg mb-14 text-center text-[#B99A66] font-medium">Enjoy a range of fun activities for all ages, including swimming, games, and kids activities.</p>
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Swimming Pool */}
            <div className="group bg-white/80 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch border border-[#EADBC8] hover:shadow-[0_8px_32px_rgba(139,94,33,0.12)] transition-all duration-300">
              <div className="flex flex-row gap-0 md:gap-4 w-full md:w-2/5 min-h-[180px] sm:min-h-[220px]">
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/Swimmingpool1_result.png`} alt="Swimming Pool View 1" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-l-3xl md:rounded-l-3xl md:rounded-tr-none md:rounded-bl-3xl" />
                </div>
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/Swimmingpool2_result.png`} alt="Swimming Pool View 2" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-r-3xl md:rounded-r-3xl md:rounded-tl-none md:rounded-br-3xl" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 md:py-0 md:pl-10 md:pr-6">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#8F5F2F]">Swimming Pool</h3>
                <p className="text-sm sm:text-base md:text-lg text-[#4A2400]">Take a refreshing dip or lounge by our sparkling pool, perfect for relaxation and family fun.</p>
              </div>
            </div>
            {/* Games */}
            <div className="group bg-white/80 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row-reverse items-stretch border border-[#EADBC8] hover:shadow-[0_8px_32px_rgba(139,94,33,0.12)] transition-all duration-300">
              <div className="flex flex-row gap-0 md:gap-4 w-full md:w-2/5 min-h-[180px] sm:min-h-[220px]">
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/IMG_3394.webp`} alt="Games Area 1" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-l-3xl md:rounded-l-3xl md:rounded-tr-none md:rounded-bl-3xl" />
                </div>
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/IMG_2450.webp`} alt="Games Area 2" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-r-3xl md:rounded-r-3xl md:rounded-tl-none md:rounded-br-3xl" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 md:py-0 md:pr-10 md:pl-6">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#8F5F2F]">Games</h3>
                <p className="text-sm sm:text-base md:text-lg text-[#4A2400]">Enjoy a variety of indoor and outdoor games for all ages, from board games to sports and more.</p>
              </div>
            </div>
            {/* Kids Activities */}
            <div className="group bg-white/80 backdrop-blur rounded-3xl shadow-2xl flex flex-col md:flex-row items-stretch border border-[#EADBC8] hover:shadow-[0_8px_32px_rgba(139,94,33,0.12)] transition-all duration-300">
              <div className="flex flex-row gap-0 md:gap-4 w-full md:w-2/5 min-h-[180px] sm:min-h-[220px]">
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/IMG_2277.webp`} alt="Kids Activities 1" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-l-3xl md:rounded-l-3xl md:rounded-tr-none md:rounded-bl-3xl" />
                </div>
                <div className="relative w-1/2 h-40 sm:h-56 overflow-hidden">
                  <Image src={`${S3_BASE}/IMG_2380.webp`} alt="Kids Activities 2" fill style={{ objectFit: 'cover' }} className="transition-transform duration-500 group-hover:scale-110 rounded-r-3xl md:rounded-r-3xl md:rounded-tl-none md:rounded-br-3xl" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-8 md:py-0 md:pl-10 md:pr-6">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#8F5F2F]">Kids Activities</h3>
                <p className="text-sm sm:text-base md:text-lg text-[#4A2400]">Creative and supervised activities designed to keep children entertained and engaged throughout their stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-0.5 bg-linear-to-r from-[#5C4033]/0 via-[#5C4033]/60 to-[#5C4033]/0 my-8" />

      {/* Case Reviews */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center font-serif text-[#8F5F2F] tracking-tight">Guest Reviews</h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8 text-center text-[#B99A66] font-nunito">
          Hear from our guests and see real-world experiences at Enchula Resort.
        </p>
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30 min-w-[120px]">
            <div className="text-3xl font-bold text-[#D7BFA8] mb-1">4.8/5</div>
            <div className="text-[#D7BFA8] text-sm">Average Rating</div>
          </div>
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30 min-w-[120px]">
            <div className="text-3xl font-bold text-[#D7BFA8] mb-1">200+</div>
            <div className="text-[#D7BFA8] text-sm">Happy Guests</div>
          </div>
          <div className="bg-[#2C1B16]/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-[#5C4033]/30 min-w-[120px]">
            <div className="text-3xl font-bold text-[#D7BFA8] mb-1">98%</div>
            <div className="text-[#D7BFA8] text-sm">Would Recommend</div>
          </div>
        </div>
        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            {
              text: "Perfect escape from the city! The staff were so warm and welcoming. My kids loved the play area, and we enjoyed a beautiful sunset dinner by the pool.",
              author: "— Wanjiru M. (Nairobi)"
            },
            {
              text: "We booked Enchula for our mini-moon and it was magical. The room was cozy, clean, and had such a peaceful view of the savannah.",
              author: "— David & Sarah T. (Mombasa)"
            },
            {
              text: "Visited during my East Africa tour. Enchula offered a peaceful, authentic experience. I appreciated the sustainability efforts — solar power, recycling, and support for local artisans.",
              author: "— Lina B. (Germany)"
            },
            {
              text: "Best family weekend in years! Kids enjoyed camel rides and the mini club. Rooms connected perfectly for us. Food was delicious — especially the local dishes.",
              author: "— The Otieno Family (Kisumu)"
            }
          ].map((review, idx) => (
            <div key={idx} className="card-bg max-w-xs w-full p-6 shadow-lg bg-white border border-neutral-200 rounded-2xl flex flex-col justify-between h-full">
              <p className="mb-4 text-[#4A2400] font-nunito text-base sm:text-lg">{review.text}</p>
              <span className="font-semibold text-[#8F5F2F] font-serif">{review.author}</span>
            </div>
          ))}
        </div>
        {/* Review Submission CTA */}
        <div className="text-center">
          <a href="#contact" className="mt-8 inline-block px-6 py-2 rounded-full font-bold text-[#4A2400] bg-[#FFD3A3] hover:bg-[#E6B87A] transition-colors">
            Write Your Review
          </a>
        </div>
      </section>
    </div>
  );
}