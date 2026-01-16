import Image from "next/image";
import Link from "next/link";
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function FitnessPage() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col">
      {/* Hero Section - Clean, smooth, no text or overlay */}
      <div className="relative w-full h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden shadow-2xl mb-16">
        <Image
          src={`${S3_BASE}/IMG_2174.webp`}
          alt="Gym Hero"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-3000 ease-in-out opacity-100 z-10"
          sizes="100vw"
          priority
        />
      </div>
      {/* Gym Features */}
      <div className="mb-12 w-full px-4 max-w-7xl mx-auto">
        <h3 className="text-3xl font-serif font-bold text-[#B99A66] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>Fitness Facilities</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#5C4033]/20 shadow-lg group">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={`${S3_BASE}/IMG_2173.webp`}
                alt="Gym Equipment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2C1B16] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-serif font-bold text-[#B99A66]" style={{ fontFamily: 'Lora, serif' }}>Classes</h4>
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
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
      {/* Call to Action */}
      <div className="text-center mb-16 w-full px-4 max-w-7xl mx-auto">
        <p className="text-[#4A2400] mb-6 text-lg" style={{ fontFamily: 'Nunito, Open Sans, Arial, sans-serif' }}>
          Ready to start your fitness journey?
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-3 bg-[#FFD3A3] hover:bg-[#8F5F2F] text-[#4A2400] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#8F5F2F]"
        >
          Book Your Fitness Session
        </Link>
      </div>
    </div>
  );
}
