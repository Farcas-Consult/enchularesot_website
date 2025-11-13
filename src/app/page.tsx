"use client";

import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import Health_Safety from "./components/homepage/health_safety";
import Sustainability from "./components/homepage/sustainability";
import Accessibility from "./components/homepage/accessibility";
import Rooms from "./components/homepage/rooms";
import Amenities from "./components/homepage/amenities";
import Gallery from "./components/homepage/gallery";
import Dining from "./components/homepage/dining";
import Kids_Family from "./components/homepage/kids_family";
import Wellness_Spa from "./components/homepage/wellness";
import Events_Weddings from "./components/homepage/events";
import Experience_Activities from "./components/homepage/experience_activities";
import Gym from "./components/homepage/gym";
import Booking from "./components/homepage/booking";
import Reviews_Testimonials from "./components/homepage/guest_reviews";
import Blog_TravelTips from "./components/homepage/blog";
import Contact from "./components/homepage/contact";

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* 2. About Group */}
      <section id="about">
        <About />
      </section>
      <section id="health-safety">
        <Health_Safety />
      </section>
      <section id="sustainability">
        <Sustainability />
      </section>
      <section id="accessibility">
        <Accessibility />
      </section>

      {/* 3. Stay Group */}
      <section id="rooms">
        <Rooms />
      </section>
      <section id="amenities">
        <Amenities />
      </section>
      <section id="gallery">
        <Gallery />
      </section>

      {/* 4. Experiences Group */}
      <section id="dining">
        <Dining />
      </section>
      <section id="kids_family">
        <Kids_Family />
      </section>
      <section id="wellness">
        <Wellness_Spa />
      </section>
      <section id="events">
        <Events_Weddings />
      </section>
      <section id="experience_activities">
        <Experience_Activities />
      </section>
      <section id="gym">
        <Gym />
      </section>

      {/* 5. Guest Info Group */}
      <section id="guest_reviews">
        <Reviews_Testimonials />
      </section>
      <section id="blog">
        <Blog_TravelTips />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* 6. Book Now */}
      <section id="booking">
        <Booking />
      </section>
    </div>
  );
}
