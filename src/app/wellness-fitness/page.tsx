"use client";
import Image from "next/image";
import Link from "next/link";
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function WellnessFitnessPage() {
  return (
          <div className="min-h-screen w-screen bg-white flex flex-col">
            {/* Hero Section - Fitness */}
            <div className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden shadow-2xl mb-16">
              <Image
                src={`${S3_BASE}/IMG_2174.webp`}
                alt="Gym Hero"
                fill
                      className="absolute inset-0 w-full h-full object-cover object-center z-10"
                sizes="100vw"
                priority
              />
            </div>
            {/* Fitness Facilities Section */}
            <div className="mb-12 w-full px-4 max-w-7xl mx-auto">
              <h3 className="text-3xl font-serif font-bold text-[#B99A66] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>Fitness Facilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`${S3_BASE}/IMG_2173.webp`}
                      alt="Gym Equipment"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Equipment</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Treadmills, ellipticals, bikes, free weights, resistance machines, and more.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`${S3_BASE}/IMG_2160.webp`}
                      alt="Fitness Classes"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Aerobic</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Group fitness classes available: yoga, pilates, HIIT, and more. Check schedule at reception.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`${S3_BASE}/IMG_2171.webp`}
                      alt="Personal Training"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Personal Training</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Certified trainers available for personalized fitness plans and coaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to Action for Fitness */}
            <div className="text-center mb-16 w-full px-4 max-w-7xl mx-auto">
              <p className="text-[#4A2400] mb-6 text-lg" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                Ready to start your fitness journey?
              </p>
              <Link
                href="/gym-subscriptions"
                className="inline-flex items-center gap-3 bg-[#FFD3A3] hover:bg-[#8F5F2F] text-[#4A2400] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#8F5F2F]"
              >
                Gym Membership Packages
              </Link>
            </div>
            {/* Spa & Wellness Services Section */}
            <div className="w-full px-4 max-w-7xl mx-auto">
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
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Massage Therapy</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Relaxing massages tailored for you.
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
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Sauna & Steam Room</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Detox and unwind in our sauna.
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
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Herbal Teas & Infusions</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A2400] mb-4 text-sm" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                      Enjoy complimentary wellness teas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 border border-[#5C4033]/20 shadow-lg text-center mb-12 w-full px-4 max-w-7xl mx-auto">
              <h6 className="text-2xl font-serif font-bold text-[#2E1A15] mb-4" style={{ fontFamily: 'Lora, serif' }}>What Our Guests Say</h6>
              <p className="text-[#5C4033] text-lg italic" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                “The massage was heavenly and the yoga sessions helped me truly unwind. I left feeling completely rejuvenated!”
              </p>
              <p className="text-[#8F5F2F] mt-3" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>— Sarah M., Nairobi</p>
            </div>
            {/* Call to Action for Wellness */}
            <div className="text-center mb-16 w-full px-4 max-w-7xl mx-auto">
              <p className="text-[#2E1A15] mb-6 text-lg" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
                Ready to relax and restore your inner peace?
              </p>
            </div>
    </div>
  );
}
