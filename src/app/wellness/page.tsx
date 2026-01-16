"use client";


import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CarouselHero } from "./CarouselHero";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function WellnessPage() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col">
      {/* Hero Section with Carousel - full width */}
      <div className="relative w-screen h-96 mb-12 overflow-hidden">
        <CarouselHero images={[
          `${S3_BASE}/Wellness.webp`,
          `${S3_BASE}/Massage.webp`,
          `${S3_BASE}/Sauna.webp`,
        ]} />
      </div>
      <section className="flex-1 w-full flex flex-col items-center justify-start px-4 py-12">




      {/* Spa & Wellness Services */}
      <div className="mb-12">
        <h3 className="text-3xl font-serif font-bold text-[#B99A66] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
          Spa & Wellness Services
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Massage Therapy */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`${S3_BASE}/Massage.webp`}
                alt="Massage Therapy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Massage Therapy</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                Swedish, deep tissue, aromatherapy, and hot stone massages. Each session is tailored to your needs.
              </p>
            </div>
          </div>

          {/* Sauna & Steam Room */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`${S3_BASE}/Sauna.webp`}
                alt="Sauna & Steam Room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Sauna & Steam Room</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                Detoxify and relax in our sauna and steam rooms. Unwind after a long day or enhance your spa experience.
              </p>
            </div>
          </div>

          {/* Herbal Teas & Infusions */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`${S3_BASE}/Herbal.webp`}
                alt="Herbal Teas and Infusions"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Herbal Teas & Infusions</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                Complimentary wellness teas available throughout the day. Locally sourced herbs and botanicals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Wellness Services */}
      <div className="mb-12">
        <h3 className="text-3xl font-serif font-bold text-[#B99A66] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
          More Wellness Experiences
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`${S3_BASE}/Facial.webp`}
                alt="Facial Treatments"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h5 className="text-lg font-serif font-bold text-[#B99A66] mb-2" style={{ fontFamily: 'Lora, serif' }}>Facial Treatments</h5>
              <p className="text-[#4A2400] text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Organic facials for radiant, healthy skin.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`${S3_BASE}/BodyScrubs.webp`}
                alt="Body Scrubs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h5 className="text-lg font-serif font-bold text-[#B99A66] mb-2" style={{ fontFamily: 'Lora, serif' }}>Body Scrubs</h5>
              <p className="text-[#4A2400] text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Exfoliating treatments for smooth, rejuvenated skin.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={`${S3_BASE}/Reflexology.webp`}
                alt="Reflexology"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h5 className="text-lg font-serif font-bold text-[#B99A66] mb-2" style={{ fontFamily: 'Lora, serif' }}>Reflexology</h5>
              <p className="text-[#4A2400] text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>Therapeutic foot massage for deep relaxation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Packages */}
      <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 shadow-lg mb-12">
        <h4 className="text-3xl font-serif font-bold text-[#2E1A15] mb-6 text-center" style={{ fontFamily: 'Lora, serif' }}>
          Wellness Packages
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8F3EF] p-6 rounded-xl border border-[#5C4033]/10">
            <h5 className="text-xl font-serif font-bold text-[#A04040] mb-4" style={{ fontFamily: 'Lora, serif' }}>Half-Day Retreat</h5>
            <ul className="space-y-2 text-[#5C4033] text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
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
            <h5 className="text-xl font-serif font-bold text-[#A04040] mb-4" style={{ fontFamily: 'Lora, serif' }}>Full-Day Escape</h5>
            <ul className="space-y-2 text-[#5C4033] text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
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
        <h6 className="text-2xl font-serif font-bold text-[#2E1A15] mb-4" style={{ fontFamily: 'Lora, serif' }}>What Our Guests Say</h6>
        <p className="text-[#5C4033] text-lg italic" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
          “The massage was heavenly and the yoga sessions helped me truly unwind. I left feeling completely rejuvenated!”
        </p>
        <p className="text-[#A04040] mt-3" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>— Sarah M., Nairobi</p>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-16">
        <p className="text-[#2E1A15] mb-6 text-lg" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
          Ready to relax and restore your inner peace?
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-3 bg-[#D2BB9E] hover:bg-[#741F31] text-[#741F31] hover:text-[#D2BB9E] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#741F31]"
        >
          Book Your Wellness Session
        </Link>
      </div>
    </section>
    </div>
  );
}