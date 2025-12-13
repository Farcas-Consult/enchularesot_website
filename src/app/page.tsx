"use-client";
import Hero from "./components/homepage/hero";

import Image from "next/image";
import { Hand, UserCheck, Droplet, Shield, Sparkles, Wind, Thermometer, Stethoscope } from "lucide-react";

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
    icon: <Droplet size={48} className="text-[#A04040]" />,
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
    icon: <Hand size={48} className="text-[#A04040]" />,
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
const DoubleRoom1 = `${S3_BASE}/IMG_2346.webp`;
const TwinRoom1 = `${S3_BASE}/IMG_2321.webp`;
const SuperiorRoom1 = `${S3_BASE}/IMG_2300.webp`;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section - Customized from About Page, styled like Rooms section */}
      <section className="bg-white py-20 px-4 text-center text-[#2E1A15]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/10 backdrop-blur-sm rounded-full border border-[#800000]/10 text-[#A9745B] font-semibold tracking-wide text-sm uppercase">
              About Enchula Resort
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Where Luxury Meets{' '}
              <span className="bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
                Kenyan Serenity
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12 text-left">
            {/* Image from About page */}
            <div className="flex justify-center lg:justify-end">
              <Image src={`${S3_BASE}/IMG_2267.webp`} alt="About Enchula Resort" width={540} height={400} className="rounded-xl shadow-md border-4 border-[#A9745B]/10" />
            </div>
            {/* Story and Contact */}
            <div className="lg:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand">Our Story</h3>
              <div className="space-y-4 text-neutral-800 leading-relaxed mb-6">
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
              <div className="bg-[#F8F3EF] rounded-xl p-6 border border-[#A9745B]/10 shadow flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg className="text-brand mt-1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C12.1566 4 13.6566 4.84285 14.5 6.11803C15.3434 4.84285 16.8434 4 18.5 4C21.5376 4 24 6.46243 24 9.5C24 13.5 17 21 17 21H12Z" /></svg>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p>Along Nairobi - Namanga Road</p>
                    <p>Kajiado, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="text-brand mt-1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11L8.09 11.91a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <p className="font-semibold mb-1">Contact</p>
                    <p>+254 727 000 027</p>
                    <p>+254 734 000 027</p>
                    <p className="mt-2">info@enchularesort.co.ke</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-[#F8F3EF] rounded-xl p-6 border border-[#A9745B]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 text-brand">4-Star Luxury</h4>
              <p className="text-sm text-neutral-800">Award-winning service</p>
            </div>
            <div className="bg-[#F8F3EF] rounded-xl p-6 border border-[#A9745B]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V17a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 17v1.5A2.5 2.5 0 0 0 5.5 21z" /></svg>
              <h4 className="font-bold mb-2 text-brand">Expert Team</h4>
              <p className="text-sm text-neutral-800">Dedicated hospitality</p>
            </div>
            <div className="bg-[#F8F3EF] rounded-xl p-6 border border-[#A9745B]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M2 12h20" /></svg>
              <h4 className="font-bold mb-2 text-brand">Premium Amenities</h4>
              <p className="text-sm text-neutral-800">World-class facilities</p>
            </div>
            <div className="bg-[#F8F3EF] rounded-xl p-6 border border-[#A9745B]/10 text-center hover:shadow-md transition-all duration-300">
              <svg className="text-brand mx-auto mb-4" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C12.1566 4 13.6566 4.84285 14.5 6.11803C15.3434 4.84285 16.8434 4 18.5 4C21.5376 4 24 6.46243 24 9.5C24 13.5 17 21 17 21H12Z" /></svg>
              <h4 className="font-bold mb-2 text-brand">Warm Hospitality</h4>
              <p className="text-sm text-neutral-800">Kenyan excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Rooms & Suites</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Choose from a variety of bright, spacious rooms and suites designed for your comfort and relaxation.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <Image src={DoubleRoom1} alt="Standard Double Room" width={480} height={320} className="rounded-xl shadow-md" />
          <Image src={TwinRoom1} alt="Twin Room" width={480} height={320} className="rounded-xl shadow-md" />
          <Image src={SuperiorRoom1} alt="Superior Room" width={480} height={320} className="rounded-xl shadow-md" />
        </div>
        <a href="/rooms" className="btn-primary mt-8 inline-block">View All Rooms</a>
      </section>

      {/* Dining Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Dining</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Savor delicious cuisine in our bright, inviting restaurants and bars, offering local and international flavors.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <Image src={`${S3_BASE}/IMG_2236.webp`} alt="Restaurant Interior" width={540} height={340} className="rounded-xl shadow-md" />
          <Image src={`${S3_BASE}/IMG_2229.webp`} alt="Bar Lounge" width={540} height={340} className="rounded-xl shadow-md" />
        </div>
        <a href="/dinings" className="btn-primary mt-8 inline-block">Explore Dining</a>
      </section>

      {/* Experiences Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Experiences</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Enjoy a range of activities: spa, wellness, family fun, events, and more—all in a bright, uplifting setting.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <Image src={`${S3_BASE}/IMG_3391.webp`} alt="Spa" width={480} height={320} className="rounded-xl shadow-md" />
          <Image src={`${S3_BASE}/IMG_2257.webp`} alt="Family" width={480} height={320} className="rounded-xl shadow-md" />
        </div>
        <a href="/experience_activities" className="btn-primary mt-8 inline-block">See All Experiences</a>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Gallery</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Explore our gallery and see the beauty of Enchula Resort for yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <Image src={`${S3_BASE}/IMG_2272.webp`} alt="Gallery 1" width={350} height={220} className="rounded-xl shadow-md" />
          <Image src={`${S3_BASE}/IMG_2275.webp`} alt="Gallery 2" width={350} height={220} className="rounded-xl shadow-md" />
          <Image src={`${S3_BASE}/IMG_2383.webp`} alt="Gallery 3" width={350} height={220} className="rounded-xl shadow-md" />
        </div>
        <a href="/gallery" className="btn-primary mt-8 inline-block">View Gallery</a>
      </section>

      {/* Health & Safety Section (merged) */}
      <section className="relative py-24 px-4 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
              <span className="text-[#A04040] font-semibold tracking-wide text-sm uppercase">HEALTH & SAFETY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1A15] mb-6 tracking-tight">
              Your Health & <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Wellbeing Priority First</span>
            </h2>
            <p className="text-[#5C4033] text-lg max-w-3xl mx-auto leading-relaxed">
              Your wellness is our priority. Experience world-class hospitality backed by comprehensive health protocols and cutting-edge safety technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthSafetyData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#F8F3EF] rounded-2xl overflow-hidden hover:border-[#800000]/50 transition-all duration-300 border border-[#5C4033]/20"
              >
                <div className="relative z-10 p-6">
                  <div className="mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C1B16] mb-3 group-hover:text-[#800000] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#5C4033] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a 
              href="/booking" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5C4033] via-[#800000] to-[#A04040] text-white font-semibold rounded-full hover:from-[#800000] hover:via-[#A04040] hover:to-[#5C4033] transition-all duration-300 shadow-lg hover:shadow-[#800000]/40 transform hover:scale-105"
            >
              <Shield size={20} />
              Book With Confidence
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section (merged) */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Guest Reviews</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Hear from our happy guests and see why Enchula Resort is a top choice for travelers.
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
            <p className="mb-4 text-neutral-800">“Perfect escape from the city! The staff were so warm and welcoming. My kids loved the play area, and we enjoyed a beautiful sunset dinner by the pool.”</p>
            <span className="font-semibold text-brand">— Wanjiru M. (Nairobi)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4 text-neutral-800">“We booked Enchula for our mini-moon and it was magical. The room was cozy, clean, and had such a peaceful view of the savannah.”</p>
            <span className="font-semibold text-brand">— David & Sarah T. (Mombasa)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4 text-neutral-800">“Visited during my East Africa tour. Enchula offered a peaceful, authentic experience. I appreciated the sustainability efforts — solar power, recycling, and support for local artisans.”</p>
            <span className="font-semibold text-brand">— Lina B. (Germany)</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4 text-neutral-800">“Best family weekend in years! Kids enjoyed camel rides and the mini club. Rooms connected perfectly for us. Food was delicious — especially the local dishes.”</p>
            <span className="font-semibold text-brand">— The Otieno Family (Kisumu)</span>
          </div>
        </div>
        {/* Review Submission CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary mt-4 inline-block">Write Your Review</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Contact Us</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Ready to book or have questions? Reach out to our team—we’re here to help!
        </p>
        <a href="/contact" className="btn-primary inline-block">Contact & Location</a>
      </section>
    </div>
  );
}