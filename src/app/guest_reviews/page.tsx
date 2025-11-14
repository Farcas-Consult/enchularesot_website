"use client";

import React, { useState } from "react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Wanjiru M.",
    location: "Nairobi",
    rating: 5,
    date: "November 3, 2025",
    content: "Perfect escape from the city! The staff were so warm and welcoming. My kids loved the play area, and we enjoyed a beautiful sunset dinner by the pool.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
    ],
  },
  {
    id: 2,
    name: "David & Sarah T.",
    location: "Mombasa",
    rating: 5,
    date: "October 28, 2025",
    content: "We booked Enchula for our mini-moon and it was magical. The room was cozy, clean, and had such a peaceful view of the savannah.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
    ],
  },
  {
    id: 3,
    name: "Lina B.",
    location: "Germany",
    rating: 5,
    date: "September 30, 2025",
    content: "Visited during my East Africa tour. Enchula offered a peaceful, authentic experience. I appreciated the sustainability efforts — solar power, recycling, and support for local artisans.",
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
    ],
  },
  {
    id: 4,
    name: "The Otieno Family",
    location: "Kisumu",
    rating: 5,
    date: "September 20, 2025",
    content: "Best family weekend in years! Kids enjoyed camel rides and the mini club. Rooms connected perfectly for us. Food was delicious — especially the local dishes.",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80",
      "https://images.unsplash.com/photo-1590004448324-879d7ea9e954?w=400&q=80",
    ],
  },
];

const ReviewsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0 && formData.name && formData.review) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setRating(0);
        setFormData({ name: "", location: "", review: "" });
      }, 3000);
    }
  };

  const renderStars = (starRating: number, interactive = false) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < starRating ? "#800000" : "#D7BFA8"}
        className={`w-5 h-5 inline-block ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
        onClick={() => interactive && setRating(i + 1)}
        onMouseEnter={() => interactive && setHoverRating(i + 1)}
        onMouseLeave={() => interactive && setHoverRating(0)}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section
      id="guest-reviews"
      className="relative py-20 px-4 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
            REVIEWS & TESTIMONIALS
          </h1>
          <p className="text-xl text-[#D7BFA8] mb-8">
            Real experiences from travelers who&apos;ve stayed with us
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-[#3D2517]/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-[#5C4033]/50">
              <div className="text-4xl font-bold text-[#800000] mb-1">4.8/5</div>
              <div className="text-[#D7BFA8] text-sm">Average Rating</div>
            </div>
            <div className="bg-[#3D2517]/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-[#5C4033]/50">
              <div className="text-4xl font-bold text-[#800000] mb-1">200+</div>
              <div className="text-[#D7BFA8] text-sm">Happy Guests</div>
            </div>
            <div className="bg-[#3D2517]/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-[#5C4033]/50">
              <div className="text-4xl font-bold text-[#800000] mb-1">98%</div>
              <div className="text-[#D7BFA8] text-sm">Would Recommend</div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#A04040] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="text-2xl">✍️</span>
            Write Your Review
          </button>
        </div>

        {/* Review Submission Form */}
        {showForm && (
          <div className="mb-12 bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#5C4033]/50 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-6xl mb-4 block">🎉</span>
                <h3 className="text-3xl font-bold text-[#FAF5F0] mb-3">Thank You!</h3>
                <p className="text-[#D7BFA8] text-lg">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-[#FAF5F0] mb-6 text-center">Share Your Experience</h3>
                
                {/* Rating Stars */}
                <div className="mb-6 text-center">
                  <label className="block text-[#D7BFA8] mb-3 text-lg">Your Rating</label>
                  <div className="flex justify-center gap-2 text-4xl">
                    {renderStars(hoverRating || rating, true)}
                  </div>
                  {rating > 0 && (
                    <p className="text-[#D7BFA8] mt-2 text-sm">
                      {rating === 5 ? "Excellent!" : rating === 4 ? "Great!" : rating === 3 ? "Good" : rating === 2 ? "Fair" : "Needs Improvement"}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#D7BFA8] mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none transition-colors"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#D7BFA8] mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none transition-colors"
                      placeholder="Location"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[#D7BFA8] mb-2">Your Review *</label>
                  <textarea
                    value={formData.review}
                    onChange={(e) => setFormData({...formData, review: e.target.value})}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your experience at Enchula Resort..."
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleSubmit}
                    disabled={rating === 0}
                    className="px-8 py-3 bg-[#800000] hover:bg-[#A04040] disabled:bg-[#5C4033] text-white font-semibold rounded-full transition-all duration-300 disabled:cursor-not-allowed"
                  >
                    Submit Review
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-8 py-3 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-semibold rounded-full border border-[#5C4033]/50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Reviews Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#3D2517]/60 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-[#5C4033]/50 hover:border-[#800000]/70 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 group"
            >
              {/* Guest Images */}
              <div className="grid grid-cols-2 gap-2 p-3">
                {review.images.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`${review.name} photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 bg-[#2C1B16]/80">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FAF5F0] mb-1">{review.name}</h3>
                    <p className="text-[#D7BFA8] text-sm mb-2">
                      {review.location} • {review.date}
                    </p>
                    <div>{renderStars(review.rating)}</div>
                  </div>
                </div>

                <blockquote className="text-[#F8F3EF] leading-relaxed italic">
                  &aquot;{review.content}&aquot;
                </blockquote>

                <div className="mt-4 w-12 h-1 bg-[#800000] rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-[#2C1B16]/70 p-10 rounded-3xl border-2 border-[#800000]/40 backdrop-blur-sm">
          
          <h3 className="text-3xl font-bold text-[#FAF5F0] mb-4">
            Ready to Create Your Own Story?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="#booking"
              className="inline-flex items-center gap-3 bg-[#800000] hover:bg-[#A04040] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Your Stay
              
            </a>
            <Link
              href="https://wa.me/254727000027"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#800000] text-[#FAF5F0] hover:bg-[#800000] font-semibold px-10 py-4 rounded-full transition-all duration-300"
            >
              <span className="text-xl">💬</span>
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;