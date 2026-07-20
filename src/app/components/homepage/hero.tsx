"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const slides = [
  {
    src: `${S3_BASE}/Welcome.jpeg`,
    eyebrow: "Kajiado County · Kenya",
    title: "Welcome to",
    titleAccent: "Enchula Resort",
    subtitle: "Discover luxury living and authentic Kenyan hospitality",
  },
  {
    src: `${S3_BASE}/IMG_2257.webp`,
    eyebrow: "Serenity & Nature",
    title: "Experience",
    titleAccent: "Pure Serenity",
    subtitle: "Surrounded by breathtaking landscapes and timeless elegance",
  },
  {
    src: `${S3_BASE}/Relax.jpeg`,
    eyebrow: "Rest & Relaxation",
    title: "Relax",
    titleAccent: "In Style",
    subtitle: "A unique resort experience crafted for your comfort",
  },
  {
    src: `${S3_BASE}/Swimmingpool.jpeg`,
    eyebrow: "Your Perfect Escape",
    title: "Your Perfect",
    titleAccent: "Getaway",
    subtitle: "Relax, unwind, and enjoy world-class hospitality",
  },
  {
    src: `${S3_BASE}/Event1.jpeg`,
    eyebrow: "Conferences & Events",
    title: "Unforgettable",
    titleAccent: "Events",
    subtitle: "Host extraordinary events in breathtaking surroundings",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setPrev(current);
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 1900);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, animating]);

  useEffect(() => {
    const syncViewport = () => setIsPhone(window.innerWidth < 768);

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  return (
    <section style={{
      position: "relative",
      height: "auto",
      minHeight: isPhone ? "62vh" : "clamp(520px, 68vh, 760px)",
      overflow: "hidden", background: "#1a0d00",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .hero-slide-enter { animation: heroSlideIn 1.9s ease-in-out forwards; }
        .hero-slide-exit  { animation: heroSlideOut 1.9s ease-in-out forwards; }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: scale(1.018); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroSlideOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(1.012); }
        }

        .hero-text-in { animation: heroTextIn 1.15s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-text-in-delay1 { animation: heroTextIn 1.15s cubic-bezier(0.16,1,0.3,1) .12s both; }
        .hero-text-in-delay2 { animation: heroTextIn 1.15s cubic-bezier(0.16,1,0.3,1) .26s both; }
        .hero-text-in-delay3 { animation: heroTextIn 1.15s cubic-bezier(0.16,1,0.3,1) .42s both; }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

      `}</style>

      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isLeaving = i === prev;
        return (
          <div
            key={i}
            className={isActive ? "hero-slide-enter" : isLeaving ? "hero-slide-exit" : ""}
            style={{
              position: "absolute", inset: 0,
              opacity: isActive || isLeaving ? undefined : 0,
              zIndex: isActive ? 2 : isLeaving ? 1 : 0,
            }}
          >
            <Image src={slide.src} alt={slide.title} fill priority={i === 0}
              style={{ objectFit: "cover", objectPosition: "center" }} quality={90} />
          </div>
        );
      })}

      {/* Multi-layer overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(180deg, color-mix(in srgb, var(--brand-black) 25%, transparent) 0%, color-mix(in srgb, var(--brand-black) 8%, transparent) 30%, color-mix(in srgb, var(--brand-black) 55%, transparent) 75%, color-mix(in srgb, var(--brand-black) 82%, transparent) 100%)",
      }} />
      {/* Side vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(90deg, color-mix(in srgb, var(--brand-black) 35%, transparent) 0%, transparent 30%, transparent 70%, color-mix(in srgb, var(--brand-black) 35%, transparent) 100%)",
      }} />

      {/* Content */}
      <div key={current} style={{
        position: "absolute", inset: 0, zIndex: 4,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: isPhone ? "0 1rem" : "0 1.5rem",
      }}>
        {/* Eyebrow */}
        <div className="hero-text-in" style={{
          display: "flex", alignItems: "center", gap: "1rem",
          marginBottom: isPhone ? ".65rem" : "1.5rem",
        }}>
          <div style={{ width: isPhone ? "24px" : "48px", height: "1px", background: "color-mix(in srgb, var(--brand-primary) 70%, transparent)" }} />
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: isPhone ? ".55rem" : ".68rem",
            letterSpacing: isPhone ? ".16em" : ".28em",
            textTransform: "uppercase",
            color: "var(--brand-primary)", fontWeight: 500,
          }}>{slides[current].eyebrow}</span>
          <div style={{ width: isPhone ? "24px" : "48px", height: "1px", background: "color-mix(in srgb, var(--brand-primary) 70%, transparent)" }} />
        </div>

        {/* Title */}
        <h1 className="hero-text-in-delay1" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: isPhone ? "clamp(1.8rem, 9vw, 2.6rem)" : "clamp(3rem, 8.5vw, 7.5rem)",
          fontWeight: 300, color: "var(--brand-white)", lineHeight: 1.02,
          letterSpacing: "-.01em", marginBottom: ".2rem",
        }}>
          {slides[current].title}
        </h1>
        <h1 className="hero-text-in-delay1" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: isPhone ? "clamp(1.8rem, 9vw, 2.6rem)" : "clamp(3rem, 8.5vw, 7.5rem)",
          fontWeight: 300, fontStyle: "italic", color: "var(--brand-peach)",
          lineHeight: 1.05, letterSpacing: "-.01em", marginBottom: isPhone ? ".75rem" : "1.75rem",
        }}>
          {slides[current].titleAccent}
        </h1>

        {/* Subtitle */}
        <p className="hero-text-in-delay2" style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: isPhone ? ".78rem" : "clamp(.9rem, 1.8vw, 1.15rem)",
          color: "color-mix(in srgb, var(--brand-background) 75%, transparent)", fontWeight: 300,
          letterSpacing: ".04em", maxWidth: "52ch",
          lineHeight: isPhone ? 1.45 : 1.7, marginBottom: isPhone ? "1rem" : "3rem",
        }}>
          {slides[current].subtitle}
        </p>

        {/* CTAs */}
        <div className="hero-text-in-delay3" style={{ display: "flex", gap: isPhone ? ".65rem" : "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/booking" style={{
            padding: isPhone ? ".65rem 1.25rem" : ".95rem 2.8rem",
            background: "var(--brand-warm-brown)", color: "var(--brand-peach)",
            fontFamily: "'Jost', sans-serif",
            fontSize: isPhone ? ".62rem" : ".75rem",
            letterSpacing: isPhone ? ".1em" : ".14em",
            textTransform: "uppercase",
            fontWeight: 600, border: "none", textDecoration: "none",
            display: "inline-block", transition: "background .25s",
          }}
            onMouseOver={e => e.currentTarget.style.background = "var(--brand-black)"}
            onMouseOut={e => e.currentTarget.style.background = "var(--brand-warm-brown)"}
          >
            Reserve Your Stay
          </Link>
          {!isPhone && <Link href="/#about" style={{
            padding: ".95rem 2.8rem", background: "transparent",
            color: "var(--brand-peach)", fontFamily: "'Jost', sans-serif",
            fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase",
            fontWeight: 600, border: "1px solid color-mix(in srgb, var(--brand-peach) 45%, transparent)",
            textDecoration: "none", display: "inline-block", transition: "all .25s",
          }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "var(--brand-peach)"; e.currentTarget.style.background = "color-mix(in srgb, var(--brand-peach) 8%, transparent)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "color-mix(in srgb, var(--brand-peach) 45%, transparent)"; e.currentTarget.style.background = "transparent"; }}
          >
            Explore Resort
          </Link>}
        </div>
      </div>

    </section>
  );
}
