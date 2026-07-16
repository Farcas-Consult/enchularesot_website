"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const roomsData = [
  {
    id: 1,
    name: "Standard Room",
    category: "Comfort",
    price: "From Kshs. 10,000",
    images: [
      `${S3_BASE}/Standard Room1.jpeg`,
      `${S3_BASE}/Standard Room2.jpeg`,
      `${S3_BASE}/Standard Room3.jpeg`,
      `${S3_BASE}/Standard Room4.jpeg`,
      `${S3_BASE}/Standard Room5.jpeg`,
      `${S3_BASE}/Standard Room6.jpeg`,
    ],
    guests: "2 Guests",
    size: "30m²",
    description:
      "Designed for comfort and simplicity, featuring a cozy double bed, modern bathroom, and all essential amenities. Kenyan residents and non-residents rates available.",
    amenities: ["Double Bed", "Air Conditioning", "Private Bathroom", "WiFi", "Flat-Screen TV", "Tea/Coffee Maker"],
  },
  {
    id: 2,
    name: "Twin Room",
    category: "Standard",
    price: "From Kshs. 10,000",
    images: [
      `${S3_BASE}/Twin Room1.jpeg`,
      `${S3_BASE}/Twin Room2.jpeg`,
      `${S3_BASE}/Twin Room3.jpeg`,
      `${S3_BASE}/Twin Room4.jpeg`,
    ],
    guests: "2 Guests",
    size: "26m²",
    description:
      "A warm and inviting twin room with two single beds, ideal for friends or colleagues. Enjoy modern amenities and every comfort.",
    amenities: ["Two Single Beds", "Free WiFi", "Private Bathroom", "Smart TV", "Desk Area", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Superior Room",
    category: "Luxury",
    price: "From Kshs. 12,000",
    images: [
      `${S3_BASE}/Superior Room1.jpeg`,
      `${S3_BASE}/Superior Room2.jpeg`,
      `${S3_BASE}/Superior Room3.jpeg`,
    ],
    guests: "2 Guests",
    size: "35m²",
    description:
      "Experience enhanced luxury in our Superior Rooms with premium amenities, spacious layout, and elegant furnishings.",
    amenities: ["King Beds", "Premium Bedding", "Mini Bar", "Free WiFi", "Smart TV", "Luxury Bathroom"],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --brown:      #8F5F2F;
    --brown-dark: #4A2400;
    --brown-deep: #5C4033;
    --gold:       #B99A66;
    --sand:       #D2BB9E;
    --blush:      #D7BFA8;
    --peach:      #FFD3A3;
    --cream:      #FAF6F0;
    --white:      #FFFFFF;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans:  'Jost', system-ui, sans-serif;
    --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  }

  .rp-root {
    font-family: var(--font-sans);
    background: var(--cream);
    min-height: 100vh;
    color: var(--brown-dark);
  }

  /* ── Hero ── */
  .rp-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .rp-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s var(--ease-out), transform 8s linear;
    transform: scale(1.04);
  }

  .rp-hero-img.rp-hero-active {
    transform: scale(1);
  }

  .rp-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(74,36,0,.18) 0%, rgba(74,36,0,.72) 100%);
  }

  .rp-hero-content {
    position: relative;
    z-index: 2;
    padding: 0 4rem 4rem;
    width: 100%;
  }

  .rp-hero-eyebrow {
    font-size: .68rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: .75rem;
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  .rp-hero-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .rp-hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 5.5vw, 5rem);
    font-weight: 300;
    color: var(--white);
    line-height: 1.05;
    letter-spacing: -.01em;
    margin-bottom: 2rem;
  }

  .rp-hero-title em {
    font-style: italic;
    color: var(--peach);
  }

  /* ── Room Switcher tabs in hero ── */
  .rp-switcher {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }

  .rp-switcher-btn {
    padding: .7rem 2rem;
    font-family: var(--font-sans);
    font-size: .72rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border-right: 1px solid rgba(255,211,163,.2);
    background: rgba(255,255,255,.12);
    color: rgba(255,211,163,.65);
    backdrop-filter: blur(6px);
    transition: all .25s;
  }

  .rp-switcher-btn:last-child {
    border-right: none;
  }

  .rp-switcher-btn.rp-active {
    background: var(--gold);
    color: var(--brown-dark);
  }

  .rp-switcher-btn:hover:not(.rp-active) {
    background: rgba(255,255,255,.22);
    color: var(--peach);
  }

  /* ── Detail section ── */
  .rp-detail {
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    min-height: 600px;
    background: var(--white);
  }

  /* ── Gallery ── */
  .rp-gallery {
    position: relative;
    overflow: hidden;
  }

  .rp-gallery-main {
    width: 100%;
    height: 100%;
    min-height: 560px;
    object-fit: cover;
    display: block;
    transition: opacity .6s var(--ease-out);
  }

  .rp-gallery-thumbs {
    position: absolute;
    bottom: 1.75rem;
    left: 1.75rem;
    display: flex;
    gap: .5rem;
  }

  .rp-thumb {
    width: 66px;
    height: 46px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
    opacity: .55;
    transition: border-color .25s, opacity .25s;
  }

  .rp-thumb.rp-thumb-active {
    border-color: var(--gold);
    opacity: 1;
  }

  .rp-gallery-counter {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: .7rem;
    letter-spacing: .12em;
    color: rgba(255,255,255,.65);
    background: rgba(74,36,0,.45);
    padding: .35rem .75rem;
    backdrop-filter: blur(4px);
  }

  /* ── Detail content ── */
  .rp-content {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .rp-content-eyebrow {
    font-size: .65rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: .65rem;
  }

  .rp-content-title {
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 300;
    color: var(--brown);
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  .rp-content-price {
    font-family: var(--font-serif);
    font-size: 1.9rem;
    font-weight: 400;
    color: var(--brown-dark);
    margin-bottom: .25rem;
  }

  .rp-content-price span {
    font-size: .9rem;
    font-weight: 300;
    color: var(--gold);
    font-family: var(--font-sans);
    margin-left: .35rem;
  }

  .rp-meta {
    display: flex;
    gap: 2.5rem;
    padding: 1.5rem 0;
    margin: 1.25rem 0;
    border-top: 1px solid rgba(185,154,102,.2);
    border-bottom: 1px solid rgba(185,154,102,.2);
  }

  .rp-meta-item {
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }

  .rp-meta-label {
    font-size: .6rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .rp-meta-val {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--brown-dark);
  }

  .rp-desc {
    font-size: .95rem;
    line-height: 1.8;
    color: var(--brown-dark);
    opacity: .8;
    margin-bottom: 2rem;
  }

  .rp-amenities-label {
    font-size: .6rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .rp-amenities {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .65rem;
    margin-bottom: 2.5rem;
  }

  .rp-amenity {
    display: flex;
    align-items: center;
    gap: .65rem;
    font-size: .85rem;
    color: var(--brown-dark);
  }

  .rp-amenity-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--gold);
    flex-shrink: 0;
  }

  .rp-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .rp-btn-primary {
    padding: 1rem 2.6rem;
    background: var(--brown-dark);
    color: var(--peach);
    font-family: var(--font-sans);
    font-size: .75rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background .25s;
    text-decoration: none;
    display: inline-block;
  }

  .rp-btn-primary:hover {
    background: var(--brown);
  }

  .rp-btn-ghost {
    padding: 1rem 2.6rem;
    background: transparent;
    color: var(--brown);
    font-family: var(--font-sans);
    font-size: .75rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid var(--brown);
    cursor: pointer;
    transition: all .25s;
    text-decoration: none;
    display: inline-block;
  }

  .rp-btn-ghost:hover {
    background: var(--brown);
    color: var(--peach);
  }

  /* ── Progress bar ── */
  .rp-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--gold);
    transition: width 7s linear;
  }

  /* ── Other rooms ── */
  .rp-other-section {
    background: var(--cream);
    padding: 6rem 1.5rem;
  }

  .rp-other-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .rp-section-label {
    font-size: .68rem;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: .75rem;
    display: flex;
    align-items: center;
    gap: .75rem;
  }

  .rp-section-label::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .rp-section-title {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    color: var(--brown);
    margin-bottom: 3rem;
    line-height: 1.1;
  }

  .rp-section-title em {
    font-style: italic;
  }

  .rp-other-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5px;
    background: var(--sand);
  }

  .rp-other-card {
    position: relative;
    height: 400px;
    overflow: hidden;
    cursor: pointer;
    background: var(--cream);
  }

  .rp-other-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .7s var(--ease-out), filter .4s;
  }

  .rp-other-card:hover .rp-other-card-img {
    transform: scale(1.06);
    filter: brightness(.82);
  }

  .rp-other-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 35%, rgba(74,36,0,.88) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    transition: background .4s;
  }

  .rp-other-card:hover .rp-other-card-overlay {
    background: linear-gradient(180deg, transparent 15%, rgba(74,36,0,.94) 100%);
  }

  .rp-other-card-cat {
    font-size: .62rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: .4rem;
  }

  .rp-other-card-name {
    font-family: var(--font-serif);
    font-size: 1.7rem;
    font-weight: 400;
    color: var(--white);
    line-height: 1.1;
    margin-bottom: .75rem;
  }

  .rp-other-card-price {
    font-size: .8rem;
    color: var(--blush);
    margin-bottom: 1.25rem;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity .3s, transform .3s;
  }

  .rp-other-card:hover .rp-other-card-price {
    opacity: 1;
    transform: translateY(0);
  }

  .rp-other-card-cta {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    font-size: .68rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity .3s .05s, transform .3s .05s;
  }

  .rp-other-card:hover .rp-other-card-cta {
    opacity: 1;
    transform: translateY(0);
  }

  .rp-other-card-num {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    font-family: var(--font-serif);
    font-size: .75rem;
    color: rgba(255,255,255,.35);
    letter-spacing: .06em;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .rp-detail {
      grid-template-columns: 1fr;
    }
    .rp-hero-content {
      padding: 0 1.5rem 3rem;
    }
    .rp-content {
      padding: 2.5rem;
    }
    .rp-gallery-main {
      min-height: 320px;
    }
    .rp-other-grid {
      grid-template-columns: 1fr;
    }
    .rp-other-card {
      height: 300px;
    }
    .rp-meta {
      gap: 1.5rem;
    }
    .rp-hero-title {
      font-size: clamp(2rem, 8vw, 3rem);
    }
  }

  @media (max-width: 640px) {
    .rp-amenities {
      grid-template-columns: 1fr;
    }
    .rp-switcher-btn {
      padding: .6rem 1.25rem;
      font-size: .65rem;
    }
  }
`;

export default function RoomsPage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeImg, setActiveImg] = useState(0);
  const [progress, setProgress] = useState(0);

  const room = roomsData[activeRoom];
  const otherRooms = roomsData.filter((_, i) => i !== activeRoom);

  // Auto-advance gallery with progress bar
  useEffect(() => {
    const tick = setTimeout(() => setProgress(100), 50);
    const advance = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % room.images.length);
      setProgress(0);
      setTimeout(() => setProgress(100), 50);
    }, 7000);
    return () => {
      clearTimeout(tick);
      clearInterval(advance);
    };
  }, [activeRoom, activeImg, room.images.length]);

  // Hash-based navigation for SSR/accessibility
  useEffect(() => {
    const anchors = ["standard-double-room", "twin-room", "superior-room"];
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      const idx = anchors.indexOf(hash);
      if (idx !== -1) {
        setActiveRoom(idx);
        setActiveImg(0);
        setProgress(0);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleRoomChange = (index: number) => {
    setActiveRoom(index);
    setActiveImg(0);
    setProgress(0);
    const anchors = ["standard-double-room", "twin-room", "superior-room"];
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `#${anchors[index]}`);
    }
  };

  return (
    <div className="rp-root">
      <style>{styles}</style>

      {/* ── Hero ── */}
      <div className="rp-hero">
        {roomsData.map((r, i) => (
          <img
            key={r.id}
            src={r.images[0]}
            alt={r.name}
            className={`rp-hero-img ${i === activeRoom ? "rp-hero-active" : ""}`}
            style={{ opacity: i === activeRoom ? 1 : 0 }}
          />
        ))}
        <div className="rp-hero-overlay" />
        <div className="rp-hero-content">
          <p className="rp-hero-eyebrow">{room.category} · Enchula Resort</p>
          <h1 className="rp-hero-title">
            {room.name.split(" ")[0]}{" "}
            <em>{room.name.split(" ").slice(1).join(" ")}</em>
          </h1>
          <div className="rp-switcher">
            {roomsData.map((r, i) => (
              <button
                key={r.id}
                className={`rp-switcher-btn ${i === activeRoom ? "rp-active" : ""}`}
                onClick={() => handleRoomChange(i)}
                id={["standard-double-room", "twin-room", "superior-room"][i]}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Room Detail ── */}
      <div className="rp-detail">
        {/* Gallery */}
        <div className="rp-gallery">
          <img
            key={`${activeRoom}-${activeImg}`}
            src={room.images[activeImg]}
            alt={`${room.name} - image ${activeImg + 1}`}
            className="rp-gallery-main"
          />

          {/* Progress bar */}
          <div
            className="rp-progress"
            style={{ width: `${progress}%`, transition: progress === 0 ? "none" : "width 7s linear" }}
          />

          {/* Counter */}
          <div className="rp-gallery-counter">
            {String(activeImg + 1).padStart(2, "0")} / {String(room.images.length).padStart(2, "0")}
          </div>

          {/* Thumbnails */}
          <div className="rp-gallery-thumbs">
            {room.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${room.name} thumbnail ${i + 1}`}
                className={`rp-thumb ${i === activeImg ? "rp-thumb-active" : ""}`}
                onClick={() => {
                  setActiveImg(i);
                  setProgress(0);
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="rp-content">
          <p className="rp-content-eyebrow">{room.category}</p>

          <h2 className="rp-content-title">{room.name}</h2>

          <p className="rp-content-price">
            {room.price}
            <span>per night</span>
          </p>

          <div className="rp-meta">
            <div className="rp-meta-item">
              <span className="rp-meta-label">Guests</span>
              <span className="rp-meta-val">{room.guests}</span>
            </div>
            <div className="rp-meta-item">
              <span className="rp-meta-label">Room Size</span>
              <span className="rp-meta-val">{room.size}</span>
            </div>
            <div className="rp-meta-item">
              <span className="rp-meta-label">Category</span>
              <span className="rp-meta-val">{room.category}</span>
            </div>
          </div>

          <p className="rp-desc">{room.description}</p>

          <p className="rp-amenities-label">Room Amenities</p>
          <div className="rp-amenities">
            {room.amenities.map((a) => (
              <div key={a} className="rp-amenity">
                <span className="rp-amenity-dot" />
                {a}
              </div>
            ))}
          </div>

          <div className="rp-actions">
            <Link href="/booking" className="rp-btn-primary">
              Book This Room
            </Link>
            <Link href="/Virtual-tour" className="rp-btn-ghost">
              Virtual Tour
            </Link>
          </div>
        </div>
      </div>

      {/* ── Other Rooms ── */}
      <div className="rp-other-section">
        <div className="rp-other-inner">
          <p className="rp-section-label">Explore More</p>
          <h2 className="rp-section-title">
            Other <em>Rooms</em>
          </h2>

          <div className="rp-other-grid">
            {otherRooms.map((r, i) => (
              <div
                key={r.id}
                className="rp-other-card"
                onClick={() => handleRoomChange(roomsData.indexOf(r))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleRoomChange(roomsData.indexOf(r))}
                aria-label={`View ${r.name}`}
              >
                <img src={r.images[0]} alt={r.name} className="rp-other-card-img" />
                <div className="rp-other-card-overlay">
                  <span className="rp-other-card-cat">{r.category}</span>
                  <h3 className="rp-other-card-name">{r.name}</h3>
                  <p className="rp-other-card-price">{r.price} / night</p>
                  <span className="rp-other-card-cta">
                    Explore Room{" "}
                    <span style={{ transition: "transform .25s", display: "inline-block" }}>→</span>
                  </span>
                </div>
                <span className="rp-other-card-num">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}