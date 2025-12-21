"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";


const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const { [e.target.name]: _removed, ...rest } = errors;
    setErrors(rest);
  };

  // Validate form fields
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate sending (replace with actual API call if needed)
    setTimeout(() => {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    }, 800);
  };



  return (
    <section id="contact" className="py-16 px-4 bg-[var(--brand-background)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-2 text-center">Contact Us</h1>
        <p className="text-center text-[var(--brand-primary-brown)] mb-8">We&apos;d love to hear from you. Reach out for bookings, directions, or any questions!</p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl border border-[var(--brand-light-brown)] shadow p-8 flex flex-col gap-6 justify-center">
            <div>
              <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-1 flex items-center gap-2"><Phone className="inline w-5 h-5 text-[var(--brand-primary)]" /> Reservations</h2>
              <p className="text-[var(--brand-primary-brown)]">+254 (0) 727000027<br />+254 (0) 734000027</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-1 flex items-center gap-2"><Mail className="inline w-5 h-5 text-[var(--brand-primary)]" /> Email</h2>
              <p className="text-[var(--brand-primary-brown)]">info@enchularesort.co.ke</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--brand-primary)] mb-1 flex items-center gap-2"><MapPin className="inline w-5 h-5 text-[var(--brand-primary)]" /> Address</h2>
              <p className="text-[var(--brand-primary-brown)]">Kajiado, Kenya<br />P.O. Box 62575 00200, Nairobi</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#DCC7A1] shadow p-8 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-[var(--brand-primary-brown)] mb-2 flex items-center gap-2"><MessageCircle className="w-6 h-6 text-[var(--brand-primary)]" />Send Us a Message</h2>
            <div>
              <label className="block text-sm font-semibold text-[var(--brand-primary-brown)] mb-1">Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-[var(--brand-background)] border border-[var(--brand-light-brown)] rounded text-[var(--brand-primary-brown)] placeholder-[var(--brand-secondary-maroon)] focus:outline-none focus:border-[var(--brand-primary)]" placeholder="John Doe" />
              {errors.name && <p className="text-[#CC5555] text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--brand-primary-brown)] mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-[var(--brand-background)] border border-[var(--brand-light-brown)] rounded text-[var(--brand-primary-brown)] placeholder-[var(--brand-secondary-maroon)] focus:outline-none focus:border-[var(--brand-primary)]" placeholder="john@email.com" />
              {errors.email && <p className="text-[#CC5555] text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--brand-primary-brown)] mb-1">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-[var(--brand-background)] border border-[var(--brand-light-brown)] rounded text-[var(--brand-primary-brown)] placeholder-[var(--brand-secondary-maroon)] focus:outline-none focus:border-[var(--brand-primary)]" placeholder="+254 712 345 678" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--brand-primary-brown)] mb-1">Your Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 bg-[var(--brand-background)] border border-[var(--brand-light-brown)] rounded text-[var(--brand-primary-brown)] placeholder-[var(--brand-secondary-maroon)] focus:outline-none focus:border-[var(--brand-primary)] resize-none" placeholder="How can we help you?" />
              {errors.message && <p className="text-[#CC5555] text-xs mt-1 flex items-center gap-1"><span>⚠️</span>{errors.message}</p>}
            </div>
            {success && (
              <div className="p-2 rounded bg-[var(--brand-background)] border border-[var(--brand-primary)]/30 text-[var(--brand-primary)] text-center text-xs flex items-center justify-center gap-2">
                ✅ Message sent successfully! We’ll be in touch shortly.
              </div>
            )}
            <button type="submit" className="w-full px-6 py-3 bg-[var(--brand-primary)] text-white rounded font-semibold flex items-center justify-center gap-2 shadow hover:bg-[var(--brand-primary-brown)] transition-all duration-200">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-[#DCC7A1] shadow">
          <iframe
            title="Enchula Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.01962476013!2d36.7819502!3d-1.8497201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sKajiado%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="350"
            className="contact-map-iframe"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex justify-center mt-4 mb-2">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kajiado,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#7A1F2E] text-white rounded font-semibold shadow hover:bg-[#4E2E0E] transition-all duration-200"
            >
              Get Directions from Your Location
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;