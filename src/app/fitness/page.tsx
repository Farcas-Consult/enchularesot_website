import Image from "next/image";
import Link from "next/link";
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

export default function FitnessPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${S3_BASE}/IMG_2174.webp`}
            alt="Gym Hero"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#741F31]/80 via-transparent to-transparent rounded-2xl"></div>
        </div>
        <div className="relative z-10 p-8 md:p-16 flex flex-col items-center justify-center h-96">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-center drop-shadow-lg">Gym</h1>
          <p className="text-lg md:text-2xl text-white text-center max-w-2xl drop-shadow-md">
            State-of-the-art fitness center with modern equipment for cardio, strength, and flexibility training. Open daily for all guests.
          </p>
        </div>
      </div>
      {/* Gym Features */}
      <div className="mb-12">
        <h3 className="text-3xl font-serif font-bold text-[#2E1A15] mb-8 text-center">Fitness Facilities</h3>
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
                <h4 className="text-xl font-serif font-bold text-[white]">Equipment</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#5C4033] mb-4 text-sm">
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
                <h4 className="text-xl font-serif font-bold text-[white]">Classes</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#5C4033] mb-4 text-sm">
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
                <h4 className="text-xl font-serif font-bold text-[white]">Personal Training</h4>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#5C4033] mb-4 text-sm">
                Certified trainers available for personalized fitness plans and coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mb-16">
        <p className="text-[#2E1A15] mb-6 text-lg">
          Ready to start your fitness journey?
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-3 bg-[#D2BB9E] hover:bg-[#741F31] text-[#741F31] hover:text-[#D2BB9E] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#741F31]"
        >
          Book Your Fitness Session
        </Link>
      </div>
    </section>
  );
}
