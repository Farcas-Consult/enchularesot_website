"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home",             href: "/" },
  { name: "Rooms",            href: "/rooms" },
  { name: "Dining",           href: "/dinings" },
  { name: "Events",           href: "/events" },
  { name: "Wellness",         href: "/wellness-fitness" },
  { name: "Experiences",      href: "/experience" },
  { name: "Gallery",          href: "/gallery" },
  { name: "Virtual Tour",     href: "/Virtual-tour" },
];

const PHONE_BREAKPOINT = 768;

// WhatsApp SVG icon
const WhatsAppIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPhone, setIsPhone] = useState<boolean | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen && isPhone ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isPhone, menuOpen]);

  useEffect(() => {
    const syncViewport = () => {
      const phone = window.innerWidth < PHONE_BREAKPOINT;
      setIsPhone(phone);
      if (!phone) setMenuOpen(false);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

        .nav-root {
          position: sticky; top: 0; left: 0; right: 0; z-index: 100;
          font-family: 'Jost', system-ui, sans-serif;
          transition: background .4s, box-shadow .4s;
        }
        .nav-root.scrolled {
          box-shadow: 0 4px 32px rgba(26,13,0,.35);
        }

        /* top accent bar */
        .nav-accent-bar {
          height: 2px;
          background: linear-gradient(90deg, #4A2400, #B99A66 40%, #D2BB9E 60%, #B99A66 80%, #4A2400);
        }

        /* ── Desktop ── */
        .nav-desktop {
          position: relative;
          display: grid;
          grid-template-columns: minmax(160px, 220px) minmax(0, 1fr) minmax(160px, 220px);
          grid-template-rows: auto auto;
          background: #4A2400;
          padding: 1rem 2.5rem .9rem;
          align-items: center;
          gap: .65rem 1.5rem;
          min-height: 148px;
          border-bottom: 1px solid rgba(185,154,102,.18);
        }
        .nav-contact-icons {
          display: flex; gap: .35rem; align-items: center;
          grid-column: 1; grid-row: 1; justify-self: start;
        }
        .nav-icon-btn {
          width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
          color: rgba(255,211,163,.7); border: 1px solid rgba(185,154,102,.22);
          background: rgba(255,211,163,.04); cursor: pointer;
          transition: color .2s, background .2s, border-color .2s, transform .2s; text-decoration: none;
        }
        .nav-icon-btn:hover {
          color: #FFD3A3; background: rgba(255,211,163,.1);
          border-color: rgba(185,154,102,.55); transform: translateY(-1px);
        }

        .nav-logo-wrap {
          display: flex; flex-direction: column; align-items: center; gap: .25rem;
          text-decoration: none; flex-shrink: 0;
          grid-column: 2; grid-row: 1; justify-self: center;
        }
        .nav-logo-img {
          width: 132px; height: 88px; object-fit: contain;
          filter: drop-shadow(0 6px 16px rgba(0,0,0,.18));
        }
        .nav-logo-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: .68rem; letter-spacing: .28em; text-transform: uppercase;
          color: rgba(255,211,163,.72); font-weight: 400;
        }

        .nav-links-row {
          display: flex; align-items: center; gap: .25rem; list-style: none;
          flex-wrap: wrap; justify-content: center;
          grid-column: 1 / -1; grid-row: 2;
          border-top: 1px solid rgba(185,154,102,.14);
          padding-top: .8rem;
        }
        .nav-link {
          font-size: .68rem; letter-spacing: .12em; text-transform: uppercase;
          font-weight: 600; color: rgba(255,211,163,.68); text-decoration: none;
          padding: .55rem .8rem; position: relative; transition: color .2s, background .2s;
          white-space: nowrap;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: .25rem; left: .8rem; right: .8rem;
          height: 1px; background: #B99A66;
          transform: scaleX(0); transition: transform .25s;
        }
        .nav-link:hover { color: #FFD3A3; background: rgba(255,211,163,.055); }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-book-btn {
          grid-column: 3; grid-row: 1; justify-self: end;
          padding: .8rem 1.65rem;
          background: #B99A66; color: #4A2400;
          font-family: 'Jost', sans-serif;
          font-size: .68rem; letter-spacing: .14em; text-transform: uppercase;
          font-weight: 700; border: none; cursor: pointer; transition: all .25s;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
        }
        .nav-book-btn:hover { background: #FFD3A3; transform: translateY(-1px); }

        /* ── Mobile ── */
        .nav-mobile {
          background: #4A2400;
          display: flex; flex-direction: column;
          border-bottom: 1px solid rgba(185,154,102,.18);
        }
        .nav-mobile-topbar {
          position: relative;
          display: flex; align-items: center; justify-content: space-between;
          min-height: 88px;
          padding: .65rem .85rem;
          border-bottom: 1px solid rgba(185,154,102,.15);
        }
        .nav-hamburger {
          width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
          color: rgba(255,211,163,.8); border: none; background: transparent; cursor: pointer;
          border: 1px solid rgba(185,154,102,.25); border-radius: 2px; transition: all .2s;
          position: relative; z-index: 2;
        }
        .nav-hamburger:hover { border-color: #B99A66; color: #FFD3A3; }
        .nav-mobile-contacts {
          display: flex; align-items: center; gap: .15rem;
        }
        .nav-mobile-logo {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          display: flex; align-items: center; justify-content: center;
        }
        .nav-mobile-logo-img {
          width: 96px; height: 70px; object-fit: contain;
          filter: drop-shadow(0 6px 16px rgba(0,0,0,.18));
        }
        .nav-mobile-book {
          grid-column: auto; grid-row: auto; justify-self: auto;
          font-size: .6rem; padding: .58rem .82rem;
          position: relative; z-index: 2;
        }
        .nav-mobile-contact-strip {
          display: flex; justify-content: center; gap: .45rem;
          padding: .42rem 0;
          border-bottom: 1px solid rgba(185,154,102,.12);
        }

        /* Drawer */
        .nav-drawer-overlay {
          position: fixed; inset: 0; background: rgba(26,13,0,.6);
          z-index: 200; backdrop-filter: blur(3px);
        }
        .nav-drawer {
          position: fixed; top: 0; right: 0; bottom: 0; width: min(85vw, 320px);
          background: #3A1C00; z-index: 201;
          display: flex; flex-direction: column;
          animation: drawerSlideIn .32s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes drawerSlideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .nav-drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid rgba(185,154,102,.15);
        }
        .nav-drawer-brand {
          font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400;
          color: #FFD3A3; letter-spacing: .05em;
        }
        .nav-drawer-brand em { font-style: italic; color: #B99A66; }
        .nav-close-btn {
          width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
          color: rgba(255,211,163,.6); border: 1px solid rgba(185,154,102,.25);
          background: transparent; cursor: pointer; border-radius: 2px; transition: all .2s;
        }
        .nav-close-btn:hover { color: #FFD3A3; border-color: #B99A66; }
        .nav-drawer-links {
          flex: 1; overflow-y: auto; padding: 1.25rem 0;
        }
        .nav-drawer-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: .9rem 1.5rem; font-size: .82rem; letter-spacing: .1em;
          text-transform: uppercase; font-weight: 500; color: rgba(255,211,163,.65);
          text-decoration: none; border-left: 2px solid transparent; transition: all .2s;
        }
        .nav-drawer-link:hover {
          color: #FFD3A3; border-left-color: #B99A66;
          background: rgba(185,154,102,.07);
        }
        .nav-drawer-link span { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: .8rem; color: rgba(185,154,102,.4); }
        .nav-drawer-footer {
          padding: 1.5rem; border-top: 1px solid rgba(185,154,102,.15);
          display: flex; flex-direction: column; gap: 1rem;
        }
        .nav-drawer-book {
          display: block; text-align: center;
          padding: 1rem; background: #B99A66; color: #4A2400;
          font-family: 'Jost', sans-serif; font-size: .75rem;
          letter-spacing: .14em; text-transform: uppercase; font-weight: 700;
          text-decoration: none; transition: background .25s;
        }
        .nav-drawer-book:hover { background: #FFD3A3; }
        .nav-drawer-contacts {
          display: flex; justify-content: center; gap: .5rem;
        }

        @media (max-width: 380px) {
          .nav-mobile-topbar { min-height: 82px; padding-left: .65rem; padding-right: .65rem; }
          .nav-hamburger { width: 38px; height: 38px; }
          .nav-mobile-logo-img { width: 84px; height: 62px; }
          .nav-mobile-book { padding: .55rem .68rem; letter-spacing: .1em; }
          .nav-mobile-contact-strip { padding: .35rem 0; }
        }
      `}</style>

      <header className={`nav-root ${scrolled ? "scrolled" : ""}`} style={{ background: "#4A2400" }}>
        <div className="nav-accent-bar" />

        {/* ── Desktop ── */}
        {isPhone === false && (
        <div className="nav-desktop">
          {/* Left: contact icons */}
          <div className="nav-contact-icons">
            <a href="tel:+254727000027" className="nav-icon-btn" title="Call us"><Phone size={15} /></a>
            <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" className="nav-icon-btn" title="WhatsApp">
              <WhatsAppIcon size={15} />
            </a>
            <a href="mailto:info@enchularesort.co.ke" className="nav-icon-btn" title="Email"><Mail size={15} /></a>
          </div>

          {/* Center: logo */}
          <Link href="/" className="nav-logo-wrap">
            <Image
              src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Logo8.png"
              alt="Enchula Resort"
              width={132}
              height={88}
              className="nav-logo-img"
              priority
            />
            <span className="nav-logo-text">Resort &amp; Retreat</span>
          </Link>

          <ul className="nav-links-row">
            {navLinks.map(l => (
              <li key={l.name}>
                <Link href={l.href} className="nav-link">{l.name}</Link>
              </li>
            ))}
          </ul>

          {/* Right: book now */}
          <Link href="/booking" className="nav-book-btn">Book Now</Link>
        </div>
        )}

        {/* ── Mobile ── */}
        {isPhone === true && (
        <div className="nav-mobile">
          <div className="nav-mobile-topbar">
            {/* Hamburger */}
            <button type="button" className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={20} />
            </button>

            {/* Logo centered */}
            <Link href="/" className="nav-mobile-logo">
              <Image
                src="https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app/Logo8.png"
                alt="Enchula Resort"
                width={102}
                height={76}
                className="nav-mobile-logo-img"
                priority
              />
            </Link>

            {/* Book */}
            <Link href="/booking" className="nav-book-btn nav-mobile-book">Book</Link>
          </div>

          {/* Contact strip */}
          <div className="nav-mobile-contact-strip">
            <a href="tel:+254727000027" className="nav-icon-btn"><Phone size={14} /></a>
            <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" className="nav-icon-btn"><WhatsAppIcon size={14} /></a>
            <a href="mailto:info@enchularesort.co.ke" className="nav-icon-btn"><Mail size={14} /></a>
          </div>
        </div>
        )}
      </header>

      {/* Drawer */}
      {menuOpen && isPhone && (
        <>
          <div className="nav-drawer-overlay" onClick={() => setMenuOpen(false)} />
          <nav className="nav-drawer">
            <div className="nav-drawer-header">
              <span className="nav-drawer-brand">Enchu<em>la</em></span>
              <button type="button" className="nav-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="nav-drawer-links">
              {navLinks.map((l, i) => (
                <Link key={l.name} href={l.href} className="nav-drawer-link" onClick={() => setMenuOpen(false)}>
                  {l.name}
                  <span>0{i + 1}</span>
                </Link>
              ))}
            </div>
            <div className="nav-drawer-footer">
              <Link href="/booking" className="nav-drawer-book" onClick={() => setMenuOpen(false)}>
                Reserve Your Stay
              </Link>
              <div className="nav-drawer-contacts">
                <a href="tel:+254727000027" className="nav-icon-btn"><Phone size={15} /></a>
                <a href="https://wa.me/254727000027" target="_blank" rel="noopener noreferrer" className="nav-icon-btn"><WhatsAppIcon size={15} /></a>
                <a href="mailto:info@enchularesort.co.ke" className="nav-icon-btn"><Mail size={15} /></a>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
