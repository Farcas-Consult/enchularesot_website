"use-client";
import Hero from "./components/homepage/hero";

import Image from "next/image";
const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const DoubleRoom1 = `${S3_BASE}/IMG_2346.webp`;
const TwinRoom1 = `${S3_BASE}/IMG_2321.webp`;
const SuperiorRoom1 = `${S3_BASE}/IMG_2300.webp`;

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">About Enchula Resort</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Enchula Resort is your destination for luxury, comfort, and authentic Kenyan hospitality. Enjoy breathtaking views, world-class amenities, and unforgettable experiences in a bright, welcoming atmosphere.
        </p>
        <Image src={`${S3_BASE}/IMG_2256.webp`} alt="About Enchula Resort" width={1200} height={500} className="mx-auto rounded-2xl shadow-lg" />
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

      {/* Reviews Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand">Guest Reviews</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8 text-neutral-800">
          Hear from our happy guests and see why Enchula Resort is a top choice for travelers.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4 text-neutral-800">“Absolutely stunning resort! The rooms are bright and the service is exceptional.”</p>
            <span className="font-semibold text-brand">— Jane D.</span>
          </div>
          <div className="card-bg max-w-xs p-6 shadow-md bg-white border border-neutral-200">
            <p className="mb-4 text-neutral-800">“Loved the food, the views, and the activities. Will definitely return!”</p>
            <span className="font-semibold text-brand">— Samuel K.</span>
          </div>
        </div>
        <a href="/guest_reviews" className="btn-primary mt-8 inline-block">Read More Reviews</a>
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