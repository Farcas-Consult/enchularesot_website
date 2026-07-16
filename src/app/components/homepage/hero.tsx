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
    setTimeout(() => { setPrev(null); setAnimating(false); }, 1000);
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
      height: isPhone ? "50vh" : "100vh",
      minHeight: isPhone ? "0" : "640px",
      overflow: "hidden", background: "#1a0d00",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .hero-slide-enter { animation: heroSlideIn 1.1s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-slide-exit  { animation: heroSlideOut 1.1s cubic-bezier(0.16,1,0.3,1) forwards; }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroSlideOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(.97); }
        }

        .hero-text-in { animation: heroTextIn .85s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-text-in-delay1 { animation: heroTextIn .85s cubic-bezier(0.16,1,0.3,1) .1s both; }
        .hero-text-in-delay2 { animation: heroTextIn .85s cubic-bezier(0.16,1,0.3,1) .22s both; }
        .hero-text-in-delay3 { animation: heroTextIn .85s cubic-bezier(0.16,1,0.3,1) .36s both; }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-line-grow { animation: heroLineGrow 6.5s linear forwards; }
        @keyframes heroLineGrow {
          from { width: 0%; }
          to   { width: 100%; }
        }

        .hero-scroll-pulse {
          animation: scrollPulse 2.2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: .5; transform: translateY(0); }
          50%       { opacity: 1; transform: translateY(5px); }
        }

        .hero-dot-btn {
          transition: all .3s ease;
          cursor: pointer;
          border: none; background: none; padding: 0;
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
        background: "linear-gradient(180deg, rgba(26,13,0,.25) 0%, rgba(26,13,0,.08) 30%, rgba(26,13,0,.55) 75%, rgba(26,13,0,.82) 100%)",
      }} />
      {/* Side vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(90deg, rgba(26,13,0,.35) 0%, transparent 30%, transparent 70%, rgba(26,13,0,.35) 100%)",
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
          <div style={{ width: isPhone ? "24px" : "48px", height: "1px", background: "rgba(185,154,102,.7)" }} />
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: isPhone ? ".55rem" : ".68rem",
            letterSpacing: isPhone ? ".16em" : ".28em",
            textTransform: "uppercase",
            color: "#B99A66", fontWeight: 500,
          }}>{slides[current].eyebrow}</span>
          <div style={{ width: isPhone ? "24px" : "48px", height: "1px", background: "rgba(185,154,102,.7)" }} />
        </div>

        {/* Title */}
        <h1 className="hero-text-in-delay1" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: isPhone ? "clamp(1.8rem, 9vw, 2.6rem)" : "clamp(3rem, 8.5vw, 7.5rem)",
          fontWeight: 300, color: "#FFFFFF", lineHeight: 1.02,
          letterSpacing: "-.01em", marginBottom: ".2rem",
        }}>
          {slides[current].title}
        </h1>
        <h1 className="hero-text-in-delay1" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: isPhone ? "clamp(1.8rem, 9vw, 2.6rem)" : "clamp(3rem, 8.5vw, 7.5rem)",
          fontWeight: 300, fontStyle: "italic", color: "#FFD3A3",
          lineHeight: 1.05, letterSpacing: "-.01em", marginBottom: isPhone ? ".75rem" : "1.75rem",
        }}>
          {slides[current].titleAccent}
        </h1>

        {/* Subtitle */}
        <p className="hero-text-in-delay2" style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: isPhone ? ".78rem" : "clamp(.9rem, 1.8vw, 1.15rem)",
          color: "rgba(250,246,240,.75)", fontWeight: 300,
          letterSpacing: ".04em", maxWidth: "52ch",
          lineHeight: isPhone ? 1.45 : 1.7, marginBottom: isPhone ? "1rem" : "3rem",
        }}>
          {slides[current].subtitle}
        </p>

        {/* CTAs */}
        <div className="hero-text-in-delay3" style={{ display: "flex", gap: isPhone ? ".65rem" : "1.25rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/booking" style={{
            padding: isPhone ? ".65rem 1.25rem" : ".95rem 2.8rem",
            background: "#8F5F2F", color: "#FFD3A3",
            fontFamily: "'Jost', sans-serif",
            fontSize: isPhone ? ".62rem" : ".75rem",
            letterSpacing: isPhone ? ".1em" : ".14em",
            textTransform: "uppercase",
            fontWeight: 600, border: "none", textDecoration: "none",
            display: "inline-block", transition: "background .25s",
          }}
            onMouseOver={e => e.currentTarget.style.background = "#4A2400"}
            onMouseOut={e => e.currentTarget.style.background = "#8F5F2F"}
          >
            Reserve Your Stay
          </Link>
          {!isPhone && <Link href="/#about" style={{
            padding: ".95rem 2.8rem", background: "transparent",
            color: "#FFD3A3", fontFamily: "'Jost', sans-serif",
            fontSize: ".75rem", letterSpacing: ".14em", textTransform: "uppercase",
            fontWeight: 600, border: "1px solid rgba(255,211,163,.45)",
            textDecoration: "none", display: "inline-block", transition: "all .25s",
          }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "#FFD3A3"; e.currentTarget.style.background = "rgba(255,211,163,.08)"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,211,163,.45)"; e.currentTarget.style.background = "transparent"; }}
          >
            Explore Resort
          </Link>}
        </div>
      </div>

      {/* Slide progress — bottom left */}
      {!isPhone && <div style={{
        position: "absolute", bottom: "2.5rem", left: "3rem", zIndex: 5,
        display: "flex", alignItems: "center",
      }}>
        {/* Progress bar */}
        <div style={{ width: "80px", height: "1px", background: "rgba(255,211,163,.2)", position: "relative", overflow: "hidden" }}>
          <div key={current} className="hero-line-grow" style={{
            position: "absolute", top: 0, left: 0, height: "100%",
            background: "#B99A66",
          }} />
        </div>
      </div>}

      {/* Dot nav — bottom center */}
      {!isPhone && <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)", zIndex: 5,
        display: "flex", gap: ".65rem",
      }}>
        {slides.map((_, i) => (
          <button key={i} className="hero-dot-btn" onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? "36px" : "20px",
              height: "2px",
              background: i === current ? "#B99A66" : "rgba(255,211,163,.3)",
            }}
          />
        ))}
      </div>}

      {/* Scroll indicator — bottom right */}
      {!isPhone && <div style={{
        position: "absolute", bottom: "2.5rem", right: "3rem", zIndex: 5,
        display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem",
      }}>
        <span style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: ".6rem", letterSpacing: ".2em", textTransform: "uppercase",
          color: "rgba(255,211,163,.5)", writingMode: "vertical-rl",
          marginBottom: ".5rem",
        }}>Scroll</span>
        <div className="hero-scroll-pulse" style={{
          width: "1px", height: "48px",
          background: "linear-gradient(180deg, rgba(185,154,102,.7), transparent)",
        }} />
      </div>}

    </section>
  );
}
