"use client";


import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5A2E00] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 text-white font-lora">
              <MapPin className="w-6 h-6 text-[#FFFFFF]" />
              <span className="font-lora">ENCHULA</span>
            </div>
            <p className="text-white text-sm leading-relaxed font-nunito">
              Experience the pinnacle of luxury hospitality in paradise. Your journey to unforgettable memories starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-lora">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white font-nunito">
              <li>
                <Link href="/" className="hover:text-[#D7BFA8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#D7BFA8] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#D7BFA8] transition-colors">Rooms</Link>
              </li>
              <li>
                <Link href="/dinings" className="hover:text-[#D7BFA8] transition-colors">Dining</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-lora">Contact Info</h4>
            <div className="space-y-3 text-sm text-white font-nunito">
              <div className="flex items-start gap-2">
                <Phone className="w-6 h-6 text-white" />
                <div className="flex flex-col">
                  <span>+254 (0) 727000027</span>
                  <span>+254 (0) 734000027</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-6 h-6 text-white" />
                <span>info@enchularesort.co.ke</span>
              </div>
              {/* Removed Nairobi Namanga Road as requested */}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-lora">Follow Us</h4>
            <div className="flex flex-col gap-3 text-white font-nunito">
              <div className="flex gap-4">
                <a href="#" title="Facebook" className="hover:text-[#D7BFA8] transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" title="Instagram" className="hover:text-[#D7BFA8] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" title="Twitter" className="hover:text-[#D7BFA8] transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" title="LinkedIn" className="hover:text-[#D7BFA8] transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
              <a href="https://www.enchularesort.co.ke" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#D7BFA8] transition-colors">
                www.enchularesort.co.ke
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white font-nunito">
            <p className="font-nunito">&copy; {new Date().getFullYear()} Enchula Resort. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-nunito">
              <Link href="/privacy-policy" className="hover:text-[#D7BFA8] transition-colors font-nunito">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D7BFA8] transition-colors font-nunito">Terms & Conditions</Link>
              <Link href="/cookies" className="hover:text-[#D7BFA8] transition-colors font-nunito">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
