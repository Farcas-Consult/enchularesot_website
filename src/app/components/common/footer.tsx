"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .ft-root {
          background: linear-gradient(170deg, #2E1400 0%, #3D1A00 40%, #4A2400 100%);
          color: white;
          font-family: 'Jost', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .ft-bg-letter {
          position: absolute; bottom: -2rem; right: 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: 28rem; font-weight: 300; line-height: 1;
          color: rgba(185,154,102,.035); pointer-events: none; user-select: none;
          letter-spacing: -.04em;
        }
        .ft-top-border {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(185,154,102,.55) 30%, rgba(210,187,158,.8) 50%, rgba(185,154,102,.55) 70%, transparent 100%);
        }
        .ft-inner { max-width: 1200px; margin: 0 auto; padding: 0 2rem; position: relative; z-index: 1; }
        .ft-brand-row {
          display: flex; flex-wrap: wrap;
          align-items: center; justify-content: space-between;
          gap: 2rem; padding: 4rem 0 3rem;
          border-bottom: 1px solid rgba(185,154,102,.12);
          margin-bottom: 4rem;
        }
        .ft-logo-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 300; color: #FFD3A3;
          letter-spacing: .02em; line-height: 1;
        }
        .ft-logo-mark em { font-style: italic; color: #B99A66; }
        .ft-logo-sub {
          font-size: .6rem; letter-spacing: .28em; text-transform: uppercase;
          color: rgba(185,154,102,.5); margin-top: .35rem; display: block;
        }
        .ft-tagline { font-size: .88rem; line-height: 1.8; color: rgba(215,191,168,.6); max-width: 34ch; }
        .ft-social-row { display: flex; gap: .6rem; align-items: center; }
        .ft-social-btn {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(185,154,102,.22);
          color: rgba(215,191,168,.55); background: transparent;
          cursor: pointer; text-decoration: none; transition: all .25s;
        }
        .ft-social-btn:hover { border-color: #B99A66; color: #FFD3A3; background: rgba(185,154,102,.1); }
        .ft-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 3.5rem; padding-bottom: 4rem;
          border-bottom: 1px solid rgba(185,154,102,.1);
          margin-bottom: 2.5rem;
        }
        @media (max-width: 900px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .ft-brand-row { flex-direction: column; gap: 1.5rem; }
        }
        @media (max-width: 560px) {
          .ft-inner { padding: 0 1rem; }
          .ft-bg-letter { font-size: 15rem; right: -.75rem; bottom: 1rem; }
          .ft-brand-row {
            align-items: flex-start;
            gap: 1.25rem;
            padding: 3rem 0 2rem;
            margin-bottom: 2.5rem;
          }
          .ft-logo-mark { font-size: 2.45rem; }
          .ft-logo-sub { letter-spacing: .18em; line-height: 1.5; }
          .ft-tagline { max-width: none; }
          .ft-social-row { width: 100%; justify-content: space-between; }
          .ft-social-btn { width: 42px; height: 42px; }
          .ft-grid { grid-template-columns: 1fr; gap: 2.25rem; padding-bottom: 2.5rem; margin-bottom: 2rem; }
          .ft-col-label { margin-bottom: 1rem; }
          .ft-contact-item { margin-bottom: 1rem; }
          .ft-bottom {
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 2.25rem;
            padding-right: 3.25rem;
          }
          .ft-legal-links { gap: .85rem 1.25rem; }
          .ft-top-btn { right: 0; top: auto; bottom: 2.25rem; }
        }
        .ft-col-label {
          font-size: .6rem; letter-spacing: .22em; text-transform: uppercase;
          color: #B99A66; font-weight: 600; margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: .6rem;
        }
        .ft-col-label::before { content: ''; display: block; width: 16px; height: 1px; background: #B99A66; }
        .ft-about-text { font-size: .88rem; line-height: 1.85; color: rgba(215,191,168,.6); }
        .ft-links { list-style: none; display: flex; flex-direction: column; gap: .7rem; }
        .ft-link {
          font-size: .85rem; color: rgba(215,191,168,.6); text-decoration: none;
          display: inline-flex; align-items: center; gap: .5rem; transition: color .2s;
        }
        .ft-link::before { content: ''; display: block; width: 0; height: 1px; background: #B99A66; transition: width .25s; flex-shrink: 0; }
        .ft-link:hover { color: #FFD3A3; }
        .ft-link:hover::before { width: 10px; }
        .ft-contact-item { display: flex; gap: .9rem; align-items: flex-start; margin-bottom: 1.25rem; }
        .ft-contact-icon-wrap {
          width: 32px; height: 32px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(185,154,102,.2); color: #B99A66;
        }
        .ft-contact-text { font-size: .85rem; color: rgba(215,191,168,.65); line-height: 1.65; text-decoration: none; transition: color .2s; }
        .ft-contact-text:hover { color: #FFD3A3; }
        .ft-bottom {
          display: flex; flex-wrap: wrap;
          justify-content: space-between; align-items: center;
          gap: 1rem; padding-bottom: 3rem;
        }
        .ft-copyright { font-size: .75rem; color: rgba(215,191,168,.35); letter-spacing: .04em; }
        .ft-legal-links { display: flex; gap: 2rem; flex-wrap: wrap; }
        .ft-legal-link { font-size: .72rem; color: rgba(215,191,168,.35); text-decoration: none; letter-spacing: .04em; transition: color .2s; }
        .ft-legal-link:hover { color: rgba(215,191,168,.8); }
        .ft-top-btn {
          position: absolute; top: -20px; right: 0;
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          background: #B99A66; color: #4A2400;
          border: none; cursor: pointer; z-index: 2; transition: all .25s;
        }
        .ft-top-btn:hover { background: #FFD3A3; transform: translateY(-2px); }
      `}</style>

      <footer className="ft-root">
        <div className="ft-top-border" />
        <div className="ft-bg-letter">E</div>

        <div className="ft-inner">
          <div className="ft-brand-row">
            <div>
              <p className="ft-logo-mark">Enchu<em>la</em></p>
              <span className="ft-logo-sub">Resort &amp; Retreat · Kajiado County, Kenya</span>
            </div>
            <p className="ft-tagline">
              Experience the pinnacle of luxury hospitality nestled in the breathtaking plains of Kenya. Your journey to unforgettable memories starts here.
            </p>
            <div className="ft-social-row">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} title={label} className="ft-social-btn">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="ft-grid">
            <div>
              <p className="ft-col-label">About Enchula</p>
              <p className="ft-about-text">
                Set within the heart of Kajiado County, Enchula Resort blends untamed Kenyan wilderness with refined modern luxury. From curated experiences to award-winning hospitality, every detail is crafted for you.
              </p>
            </div>
            <div>
              <p className="ft-col-label">Explore</p>
              <ul className="ft-links">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/#about" },
                  { label: "Rooms & Suites", href: "/rooms" },
                  { label: "Dining", href: "/dinings" },
                  { label: "Activities", href: "/#activities" },
                  { label: "Gallery", href: "/gallery" },
                ].map(({ label, href }) => (
                  <li key={label}><Link href={href} className="ft-link">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="ft-col-label">Services</p>
              <ul className="ft-links">
                {[
                  { label: "Book a Room", href: "/booking" },
                  { label: "Virtual Tour", href: "/Virtual-tour" },
                  { label: "Conferences", href: "/events" },
                  { label: "Team Building", href: "/events" },
                  { label: "Wellness", href: "/wellness-fitness" },
                  { label: "Experiences", href: "/experience" },
                ].map(({ label, href }) => (
                  <li key={label}><Link href={href} className="ft-link">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="ft-col-label">Get in Touch</p>
              <div className="ft-contact-item">
                <div className="ft-contact-icon-wrap"><Phone size={13} /></div>
                <div>
                  <a href="tel:+254727000027" className="ft-contact-text" style={{ display: "block" }}>+254 (0) 727 000 027</a>
                  <a href="tel:+254734000027" className="ft-contact-text" style={{ display: "block" }}>+254 (0) 734 000 027</a>
                </div>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon-wrap"><Mail size={13} /></div>
                <a href="mailto:info@enchularesort.co.ke" className="ft-contact-text">info@enchularesort.co.ke</a>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon-wrap"><MapPin size={13} /></div>
                <a href="https://www.enchularesort.co.ke" target="_blank" rel="noopener noreferrer" className="ft-contact-text">
                  www.enchularesort.co.ke
                </a>
              </div>
            </div>
          </div>

          <div className="ft-bottom" style={{ position: "relative" }}>
            <p className="ft-copyright">© {new Date().getFullYear()} Enchula Resort. All rights reserved.</p>
            <div className="ft-legal-links">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cookies", href: "/cookies" },
              ].map(({ label, href }) => (
                <Link key={label} href={href} className="ft-legal-link">{label}</Link>
              ))}
            </div>
            <button className="ft-top-btn" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
