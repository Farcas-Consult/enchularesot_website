"use client";
import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import Amenities from "./components/homepage/amenities";
import Health_Safety from "./components/homepage/health_safety";
import Sustainability from "./components/homepage/sustainability";
import Gallery from "./components/homepage/gallary";
import Rooms from "./components/homepage/rooms";
import Contact from "./components/homepage/contact";
import Reviews_Testimonials from "./components/homepage/guest_reviews";
import Blog_TravelTips from "./components/homepage/blog";
import Kids_Family from "./components/homepage/kids_family";
import Experience_Activities from "./components/homepage/experience_activities";
import Dining from "./components/homepage/dining";
import Wellness_Spa from "./components/homepage/wellness";
import Events_Weddings from "./components/homepage/events";
import Accessibility from "./components/homepage/accessibility";
import Booking from "./components/homepage/booking";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Amenities Section */}
      <section id="amenities">
        <Amenities />
      </section>

      {/* Dining Section */}
      <section id="dining">
        <Dining />
      </section>

      {/* Kids & Family Section */}
      <section id="kids_family">
        <Kids_Family />
      </section>

      {/* Experience & Activities Section */}
      <section id="experience_activities">
        <Experience_Activities />
      </section>

      {/* Wellness & Spa Section */}
      <section id="wellness">
        <Wellness_Spa />
      </section>

      {/* Events & Weddings Section */}
      <section id="events">
        <Events_Weddings />
      </section>

      {/* Accessibility Section */}
      <section id="accessibility">
        <Accessibility />
      </section>

      {/* Health & Safety Section */}
      <section id="health-safety">
        <Health_Safety />
      </section>

      {/* Sustainability Section */}
      <section id="sustainability">
        <Sustainability />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Rooms Section */}
      <section id="rooms">
        <Rooms />
      </section>
      {/* Booking Section */}
      <section id="booking">
        <Booking />
      </section>

      {/* Reviews & Testimonials Section */}
      <section id="guest_reviews">
        <Reviews_Testimonials />
      </section>

      {/* Blog & Travel Tips Section */}
      <section id="blog">
        <Blog_TravelTips />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
