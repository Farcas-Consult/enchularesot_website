"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2E1A15] text-[#F8F3EF] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 text-[#A9745B]">
              <MapPin className="w-6 h-6 text-[#A04040]" />
              <span>ENCHULA</span>
            </div>
            <p className="text-[#D7BFA8] text-sm leading-relaxed">
              Experience the pinnacle of luxury hospitality in paradise. Your journey to unforgettable memories starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#A04040] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#A9745B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A9745B] transition-colors">About</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#A9745B] transition-colors">Rooms</a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#A9745B] transition-colors">Dining</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#A04040] font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-sm text-[#D7BFA8]">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#A9745B] mt-1" />
                <span>+254 727 000 027</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#A9745B] mt-1" />
                <span>reservations@enchularesort.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A9745B] mt-1" />
                <span>Tropical Paradise Island</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#A04040] font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#A9745B] transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#A9745B] transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#A9745B] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-[#A9745B] transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#A9745B]/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#D7BFA8]">
            <p>&copy; {new Date().getFullYear()} Enchula Resort. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#A04040] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#A04040] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#A04040] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
