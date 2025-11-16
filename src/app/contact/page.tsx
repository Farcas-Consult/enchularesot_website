"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Luxury from '@/assets/Exterior1.webp';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }
    console.log("Form submitted:", formData);
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      message: '',
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: "24/7 Reservations",
      primary: "+254 (727) 000-027",
      secondary: "WhatsApp available",
      iconColor: "text-[#5C4033]",
      hoverGradient: "from-[#5C4033] to-[#800000]",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Us",
      primary: "stay@enchularesort.com",
      secondary: "Response within 30 min",
      iconColor: "text-[#800000]",
      hoverGradient: "from-[#800000] to-[#A04040]",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Visit Us",
      primary: "Nairobi-Namanga Rd, Kajiado",
      secondary: "Oceanfront paradise",
      iconColor: "text-[#A04040]",
      hoverGradient: "from-[#A04040] to-[#5C4033]",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Operating Hours",
      primary: "Check-in: 3:00 PM",
      secondary: "Check-out: 11:00 AM",
      iconColor: "text-[#5C4033]",
      hoverGradient: "from-[#5C4033] to-[#800000]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay with palette-consistent dark brown */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/70 via-[#2E1A15]/50 to-[#2C1B16]/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/40">
            <span className="text-[#F8F3EF] font-semibold tracking-wide text-sm uppercase">Let’s Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F8F3EF] mb-6 tracking-tight">
            Start Your
            <span className="block bg-gradient-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">
              Journey With Us
            </span>
          </h2>
          <p className="text-[#D7BFA8] text-xl max-w-3xl mx-auto leading-relaxed">
            Your perfect escape is just a message away. Our dedicated team is ready to craft
            your personalized luxury experience.
          </p>
        </div>

        {/* Contact Info Cards — refined colors & gradient consistency */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#D7BFA8]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#5C4033]/20 hover:border-[#800000]/60 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`${item.iconColor} mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F8F3EF] mb-2">{item.title}</h3>
                <p className="text-[#FAF5F0] font-medium mb-1">{item.primary}</p>
                <p className="text-[#A9745B] text-sm">{item.secondary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Image */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Panel */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={Luxury}
                alt="Enchula Resort Exterior"
                width={600}
                height={400}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1A15]/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-[#FAF5F0]">Luxury Awaits</h3>
                <p className="text-[#D7BFA8]">World-Class Service</p>
              </div>
            </div>
          </div>

          {/* Contact Form — color-tuned */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#2E1A15]/40 backdrop-blur-md rounded-3xl border border-[#5C4033]/30 p-8 shadow-xl space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-[#D7BFA8]" />
              <h3 className="text-2xl font-bold text-[#FAF5F0]">Send Us a Message</h3>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] placeholder-[#A9745B] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000]"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-[#CC5555] text-sm mt-1 flex items-center gap-1"><span>⚠️</span>{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] placeholder-[#A9745B] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000]"
                  placeholder="john@email.com"
                />
                {errors.email && <p className="text-[#CC5555] text-sm mt-1 flex items-center gap-1"><span>⚠️</span>{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] placeholder-[#A9745B] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000]"
                  placeholder="+254 712 345 678"
                />
              </div>
            </div>

            {/* Check-In/Out */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Check-In Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000]"
                  placeholder="date in"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Check-Out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000]"
                  placeholder="date out"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                aria-label="select guests"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000] appearance-none"
              >
                <option value="" className="text-[#A9745B]">Select guests</option>
                <option value="1" className="bg-[#2E1A15] text-[#FAF5F0]">1 Guest</option>
                <option value="2" className="bg-[#2E1A15] text-[#FAF5F0]">2 Guests</option>
                <option value="3" className="bg-[#2E1A15] text-[#FAF5F0]">3 Guests</option>
                <option value="4" className="bg-[#2E1A15] text-[#FAF5F0]">4 Guests</option>
                <option value="5+" className="bg-[#2E1A15] text-[#FAF5F0]">5+ Guests</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#D7BFA8] mb-2">Your Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#2C1B16]/50 border border-[#5C4033]/40 rounded-xl text-[#FAF5F0] placeholder-[#A9745B] focus:outline-none focus:border-[#5C4033] focus:ring-1 focus:ring-[#800000] resize-none"
                placeholder="Tell us about your dream getaway…"
              />
              {errors.message && <p className="text-[#CC5555] text-sm mt-1 flex items-center gap-1"><span>⚠️</span>{errors.message}</p>}
            </div>

            {/* Success Message */}
            {success && (
              <div className="p-3 rounded-lg bg-[#5C4033]/20 border border-[#800000]/30 text-[#D7BFA8] text-center text-sm flex items-center justify-center gap-2">
                ✅ Message sent successfully! We’ll be in touch shortly.
              </div>
            )}

            {/* Submit Button — primary brown → maroon emphasis */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#5C4033] to-[#800000] text-[#FAF5F0] rounded-xl hover:from-[#800000] hover:to-[#A04040] active:scale-95 transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-[#800000]/30"
            >
              <Send className="w-5 h-5" />
              Send Your Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;