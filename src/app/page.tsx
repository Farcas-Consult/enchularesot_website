"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/homepage/hero";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

// ─── Shared styles ────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --brown:       #8F5F2F;
      --brown-dark:  #4A2400;
      --brown-deep:  #5C4033;
      --gold:        #B99A66;
      --sand:        #D2BB9E;
      --blush:       #D7BFA8;
      --peach:       #FFD3A3;
      --cream:       #FAF6F0;
      --white:       #FFFFFF;
      --font-serif:  'Cormorant Garamond', Georgia, serif;
      --font-sans:   'Jost', system-ui, sans-serif;
      --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-sans); background: var(--cream); color: var(--brown-dark); }

    /* ── Section ── */
    .section { padding: 7rem 1.5rem; }
    .section-inner { max-width: 1200px; margin: 0 auto; }
    .section-label {
      font-size: .68rem; letter-spacing: .22em; text-transform: uppercase;
      color: var(--gold); font-weight: 600; margin-bottom: 1rem;
      display: flex; align-items: center; gap: .75rem;
    }
    .section-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--gold); }
    .section-title {
      font-family: var(--font-serif); font-size: clamp(2.2rem, 4vw, 3.8rem);
      font-weight: 300; color: var(--brown); line-height: 1.1;
      letter-spacing: -.01em; margin-bottom: 1.5rem;
    }
    .section-title em { font-style: italic; }
    .section-body { font-size: 1.05rem; line-height: 1.8; color: var(--brown-dark); opacity: .8; max-width: 56ch; }
    .divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--sand), transparent); }

    /* ── About ── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .about-image-mosaic { position: relative; height: 540px; }
    .mosaic-img-main { position: absolute; top: 0; left: 0; width: 72%; height: 80%; object-fit: cover; }
    .mosaic-img-accent { position: absolute; bottom: 0; right: 0; width: 50%; height: 52%; object-fit: cover; border: 6px solid var(--cream); }
    .mosaic-badge { position: absolute; bottom: 3rem; left: 0; z-index: 2; background: var(--brown-dark); color: var(--peach); padding: 1rem 1.5rem; }
    .mosaic-badge-num { font-family: var(--font-serif); font-size: 2.5rem; font-weight: 600; line-height: 1; display: block; color: var(--gold); }
    .mosaic-badge-txt { font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: rgba(255,211,163,.7); }
    .features-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2.5rem; }
    .feature-card { padding: 1.5rem; border: 1px solid rgba(185,154,102,.2); background: white; transition: border-color .25s, transform .25s; }
    .feature-card:hover { border-color: var(--gold); transform: translateY(-3px); }
    .feature-card h4 { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600; color: var(--brown); margin-bottom: .4rem; }
    .feature-card p { font-size: .85rem; color: var(--brown-dark); opacity: .75; line-height: 1.6; }

    /* ── Rooms preview ── */
    .rooms-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: var(--sand); margin-top: 4rem; }
    .room-card { position: relative; height: 520px; overflow: hidden; background: var(--cream); cursor: pointer; }
    .room-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s var(--ease-out), filter .5s; }
    .room-card:hover .room-card-img { transform: scale(1.06); filter: brightness(.85); }
    .room-card-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, transparent 35%, rgba(74,36,0,.9) 100%);
      display: flex; flex-direction: column; justify-content: flex-end; padding: 2rem;
      transition: background .4s;
    }
    .room-card:hover .room-card-overlay { background: linear-gradient(180deg, transparent 15%, rgba(74,36,0,.95) 100%); }
    .room-card-cat { font-size: .65rem; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: .5rem; }
    .room-card-name { font-family: var(--font-serif); font-size: 1.7rem; font-weight: 400; color: var(--white); line-height: 1.1; margin-bottom: .75rem; }
    .room-card-price { font-size: .8rem; color: var(--blush); margin-bottom: 1.25rem; opacity: 0; transform: translateY(8px); transition: opacity .35s, transform .35s; }
    .room-card:hover .room-card-price { opacity: 1; transform: translateY(0); }
    .room-card-cta { display: inline-flex; align-items: center; gap: .5rem; font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); font-weight: 600; text-decoration: none; opacity: 0; transform: translateY(8px); transition: opacity .35s .05s, transform .35s .05s; }
    .room-card:hover .room-card-cta { opacity: 1; transform: translateY(0); }
    .room-num { position: absolute; top: 1.5rem; right: 1.5rem; font-family: var(--font-serif); font-size: .8rem; color: rgba(255,255,255,.4); letter-spacing: .05em; }

    /* ── Events ── */
    .events-layout { display: grid; grid-template-columns: 1fr 1.6fr; gap: 5rem; align-items: start; }
    .events-sidebar { position: sticky; top: 8rem; }
    .event-tabs { display: flex; flex-direction: column; gap: .25rem; margin-top: 2.5rem; }
    .event-tab { padding: 1rem 1.25rem; cursor: pointer; border-left: 2px solid transparent; transition: all .25s; background: transparent; font-family: var(--font-sans); text-align: left; border: none; width: 100%; }
    .event-tab.active { border-left: 2px solid var(--gold); background: rgba(185,154,102,.08); }
    .event-tab-name { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 400; color: var(--brown); display: block; }
    .event-tab.active .event-tab-name { color: var(--brown-dark); font-weight: 600; }
    .event-tab-desc { font-size: .82rem; color: var(--brown-dark); opacity: .6; margin-top: .2rem; display: block; }

    /* ── Dynamic event gallery ── */
    .event-gallery-1  { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    .event-gallery-2  { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .event-gallery-3  { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .event-gallery-4  { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .event-gallery-5  { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .event-gallery-6  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .event-gallery-7  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .event-gallery-8  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .event-gallery-9  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .event-gallery-10 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }

    /* First photo always spans full width */
    .event-gallery-1  .event-photo:first-child,
    .event-gallery-2  .event-photo:first-child,
    .event-gallery-3  .event-photo:first-child,
    .event-gallery-4  .event-photo:first-child,
    .event-gallery-5  .event-photo:first-child,
    .event-gallery-6  .event-photo:first-child,
    .event-gallery-7  .event-photo:first-child,
    .event-gallery-8  .event-photo:first-child,
    .event-gallery-9  .event-photo:first-child,
    .event-gallery-10 .event-photo:first-child { grid-column: 1 / -1; }

    /* For 3-col grids with 7 or 10 photos, last row: span 2 middle */
    .event-gallery-7  .event-photo:nth-child(7)  { grid-column: span 1; }
    .event-gallery-10 .event-photo:nth-child(10) { grid-column: span 1; }

    .event-photo { position: relative; overflow: hidden; aspect-ratio: 4/3; }
    .event-gallery-1 .event-photo { aspect-ratio: 16/7; }
    .event-photo:first-child { aspect-ratio: 16/7; }
    .event-photo img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform .5s var(--ease-out);
      filter: brightness(.9) contrast(.95) saturate(.85) sepia(.12);
    }
    .event-photo:hover img { transform: scale(1.04); }

    /* ── Dining ── */
    .dining-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--sand); }
    .dining-card { position: relative; aspect-ratio: 3/4; overflow: hidden; cursor: pointer; }
    .dining-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s var(--ease-out), filter .4s; }
    .dining-card:hover img { transform: scale(1.07); filter: brightness(.75); }
    .dining-card-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 2rem 1.5rem; background: linear-gradient(0deg, rgba(74,36,0,.85) 0%, transparent 100%); }
    .dining-card-label { font-size: .65rem; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); }
    .dining-card-name { font-family: var(--font-serif); font-size: 1.4rem; font-weight: 400; color: var(--white); margin-top: .3rem; }

    /* ── Activities ── */
    .activities-list { display: flex; flex-direction: column; gap: 1px; background: var(--sand); }
    .activity-row { display: grid; grid-template-columns: 1fr 1fr; background: var(--cream); }
    .activity-row:nth-child(even) { direction: rtl; }
    .activity-row:nth-child(even) > * { direction: ltr; }
    .activity-img { position: relative; aspect-ratio: 16/9; overflow: hidden; }
    .activity-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s var(--ease-out); }
    .activity-row:hover .activity-img img { transform: scale(1.04); }
    .activity-content { display: flex; flex-direction: column; justify-content: center; padding: 4rem 5rem; }
    .activity-num { font-family: var(--font-serif); font-size: 3.5rem; font-weight: 300; color: rgba(185,154,102,.25); line-height: 1; margin-bottom: 1rem; }
    .activity-content h3 { font-family: var(--font-serif); font-size: 2rem; font-weight: 400; color: var(--brown); margin-bottom: .75rem; }
    .activity-content p { font-size: .95rem; line-height: 1.75; color: var(--brown-dark); opacity: .8; }

    /* ── Reviews ── */
    .reviews-section { background: var(--cream); }
    .reviews-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem; }
    .stats-row { display: flex; gap: 3rem; }
    .stat-item { text-align: center; }
    .stat-num { font-family: var(--font-serif); font-size: 2.8rem; font-weight: 400; color: var(--gold); display: block; line-height: 1; }
    .stat-label { font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--brown-dark); opacity: .65; margin-top: .4rem; display: block; }
    .reviews-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .review-card { padding: 2rem; border: 1px solid rgba(185,154,102,.22); background: var(--white); transition: border-color .25s; }
    .review-card:hover { border-color: rgba(185,154,102,.5); }
    .review-quote { font-family: var(--font-serif); font-size: 3.5rem; font-weight: 300; color: var(--gold); opacity: .4; line-height: .8; margin-bottom: 1rem; }
    .review-text { font-size: .95rem; line-height: 1.75; color: var(--brown-dark); opacity: .8; margin-bottom: 1.5rem; }
    .review-author { font-family: var(--font-serif); font-size: 1rem; font-style: italic; color: var(--gold); }

    /* ── Animations ── */
    @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    .fade-in { opacity: 0; transform: translateY(20px); transition: opacity .7s var(--ease-out), transform .7s var(--ease-out); }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    @media (max-width: 900px) {
      .about-grid, .events-layout { grid-template-columns: 1fr; }
      .rooms-grid, .dining-strip { grid-template-columns: 1fr; }
      .activity-row { grid-template-columns: 1fr; direction: ltr !important; }
      .activity-content { padding: 2.5rem; }
      .reviews-grid { grid-template-columns: 1fr; }
      .section { padding: 4rem 1.25rem; }
      .event-gallery-6, .event-gallery-7, .event-gallery-8, .event-gallery-9, .event-gallery-10 { grid-template-columns: 1fr 1fr; }
    }
  `}</style>
);

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--cream)" }}>
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image-mosaic fade-in">
            <img src={`${S3_BASE}/Superior Room2.jpeg`} alt="Resort" className="mosaic-img-main" />
            <img src={`${S3_BASE}/Dining1.jpeg`} alt="Dining" className="mosaic-img-accent" />
            <div className="mosaic-badge">
              <span className="mosaic-badge-num">4★</span>
              <span className="mosaic-badge-txt">Luxury Resort</span>
            </div>
          </div>
          <div className="fade-in">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">The Epitome of<br /><em>African Hospitality</em></h2>
            <p className="section-body">
              Nestled in the breathtaking plains of <strong style={{ color: "var(--brown)" }}>Kajiado County</strong>, Enchula Resort offers a unique blend of untamed Kenyan beauty and refined modern hospitality.
            </p>
            <p className="section-body" style={{ marginTop: "1rem" }}>
              Every detail is designed to create unforgettable memories — from elegant accommodations to exceptional dining and immersive natural experiences.
            </p>
            <div className="features-row">
              {[
                { title: "4-Star Luxury", desc: "Award-winning service & world-class facilities" },
                { title: "Expert Team", desc: "Dedicated professionals with warm Kenyan hospitality" },
                { title: "Premium Amenities", desc: "Curated experiences for every guest" },
                { title: "Nature Immersed", desc: "Set within the heart of the Kenyan savannah" },
              ].map(f => (
                <div key={f.title} className="feature-card">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Rooms Preview ────────────────────────────────────────────────────────────
const roomsPreviewData = [
  { id: 1, name: "Standard Room", category: "Comfort", price: "From Kshs. 10,000", image: `${S3_BASE}/Standard Room1.jpeg`, anchor: "standard-double-room" },
  { id: 2, name: "Twin Room",     category: "Standard", price: "From Kshs. 10,000", image: `${S3_BASE}/Twin Room1.jpeg`,     anchor: "twin-room" },
  { id: 3, name: "Superior Room", category: "Luxury",   price: "From Kshs. 12,000", image: `${S3_BASE}/Superior Room1.jpeg`, anchor: "superior-room" },
];

function RoomsPreview() {
  return (
    <section id="rooms" className="section" style={{ background: "var(--white)", padding: "7rem 0" }}>
      <div className="section-inner" style={{ padding: "0 1.5rem" }}>
        <p className="section-label fade-in">Accommodation</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1rem" }}>
          <h2 className="section-title fade-in" style={{ marginBottom: 0 }}>
            Rooms &amp; <em>Suites</em>
          </h2>
          <a
            href="/rooms"
            className="fade-in"
            style={{
              display: "inline-block",
              padding: ".6rem 1.8rem",
              border: "1px solid var(--brown)", color: "var(--brown)",
              fontSize: ".72rem", letterSpacing: ".12em", textTransform: "uppercase",
              fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-sans)",
              transition: "all .25s",
            }}
            onMouseOver={e => { e.currentTarget.style.background = "var(--brown)"; e.currentTarget.style.color = "var(--peach)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--brown)"; }}
          >
            View All Rooms →
          </a>
        </div>
      </div>
      <div className="rooms-grid fade-in">
        {roomsPreviewData.map((r, i) => (
          <a key={r.id} href={`/rooms#${r.anchor}`} style={{ textDecoration: "none" }}>
            <div className="room-card">
              <img src={r.image} alt={r.name} className="room-card-img" />
              <div className="room-card-overlay">
                <span className="room-card-cat">{r.category}</span>
                <h3 className="room-card-name">{r.name}</h3>
                <p className="room-card-price">{r.price} / night</p>
                <span className="room-card-cta">Explore Room <span style={{ marginLeft: ".25rem" }}>→</span></span>
              </div>
              <span className="room-num">0{i + 1}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Events ──────────────────────────────────────────────────────────────────
// Each subsection has `photos` array — 1 to 10 items. The gallery class is
// auto-selected based on count so the layout adjusts automatically.
const eventsData = [
  {
    name: "Retreats & Conferences",
    desc: "Focused, productive gatherings",
    photos: [
      { src: `${S3_BASE}/Conferences1.jpeg`, title: "Retreat Sessions" },
      { src: `${S3_BASE}/Conferences2.jpeg`, title: "Conference Spaces" },
      { src: `${S3_BASE}/Conferences3.jpeg`, title: "Focused Gatherings" },
    ],
  },
  {
    name: "Corporate & Social",
    desc: "Tailored events & celebrations",
    photos: [
      { src: `${S3_BASE}/Events1.jpeg`,  title: "Corporate Events" },
      { src: `${S3_BASE}/Event2.jpeg`,   title: "Social Gatherings" },
      { src: `${S3_BASE}/Events3.jpeg`,  title: "Celebrations" },
      { src: `${S3_BASE}/Events4.jpeg`,  title: "Outdoor Events" },
      { src: `${S3_BASE}/Events5.jpeg`,  title: "Private Functions" },
      { src: `${S3_BASE}/Event11.jpeg`,  title: "Hosted Moments" },
    ],
  },
  {
    name: "Team Building",
    desc: "Inspiring nature-based activities",
    photos: [
      { src: `${S3_BASE}/Team1.jpeg`, title: "Team Challenges" },
      { src: `${S3_BASE}/Team2.jpeg`, title: "Group Activities" },
    ],
  },
];

type EventPhoto = {
  src: string;
  title: string;
};

function EventGallery({ photos }: { photos: EventPhoto[] }) {
  const count = Math.min(Math.max(photos.length, 1), 10);
  return (
    <div className={`event-gallery-${count}`}>
      {photos.slice(0, 10).map((p, i) => (
        <div key={i} className="event-photo">
          <img src={p.src} alt={p.title} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function Events() {
  const [active, setActive] = useState(0);
  return (
    <section id="events" className="section" style={{ background: "var(--cream)" }}>
      <div className="section-inner">
        <div className="events-layout">
          <div className="events-sidebar fade-in">
            <p className="section-label">Gatherings</p>
            <h2 className="section-title">Conferences<br />&amp; <em>Events</em></h2>
            <p className="section-body">
              From strategic retreats to dynamic team-building sessions and elegant social gatherings — we provide the perfect setting for every occasion.
            </p>
            <div className="event-tabs">
              {eventsData.map((e, i) => (
                <button
                  key={e.name}
                  className={`event-tab ${i === active ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="event-tab-name">{e.name}</span>
                  <span className="event-tab-desc">{e.desc}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="fade-in">
            <EventGallery key={active} photos={eventsData[active].photos} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Dining ──────────────────────────────────────────────────────────────────
function Dining() {
  const items = [
    { src: `${S3_BASE}/Dining1.jpeg`, label: "Restaurant", name: "Senteu Grill" },
    { src: `${S3_BASE}/Dining2.jpeg`, label: "Lounge",     name: "The Savannah Bar" },
    { src: `${S3_BASE}/Dining3.jpeg`, label: "Poolside",   name: "Sunset Pool Bar" },
  ];
  return (
    <section id="dining" className="section" style={{ background: "var(--white)", padding: "7rem 0" }}>
      <div className="section-inner" style={{ padding: "0 1.5rem", marginBottom: "3rem" }}>
        <p className="section-label fade-in">Culinary</p>
        <h2 className="section-title fade-in">Fine Dining &amp; <em>Experiences</em></h2>
        <p className="section-body fade-in">Savor exceptional cuisine celebrating Kenyan flavours alongside international classics.</p>
      </div>
      <div className="dining-strip fade-in">
        {items.map(d => (
          <div key={d.name} className="dining-card">
            <img src={d.src} alt={d.name} loading="lazy" />
            <div className="dining-card-info">
              <span className="dining-card-label">{d.label}</span>
              <p className="dining-card-name">{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Activities ──────────────────────────────────────────────────────────────
function Activities() {
  const items = [
    { num: "01", title: "Swimming Pool",    desc: "Take a refreshing dip or lounge by our sparkling pool, perfect for relaxation and family fun in the warm Kenyan sun.", src: `${S3_BASE}/Swimmingpool.jpeg` },
    { num: "02", title: "Games & Recreation", desc: "Enjoy a variety of indoor and outdoor games for all ages — from board games and sports to evening tournaments.",       src: `${S3_BASE}/Games1.jpeg` },
    { num: "03", title: "Kids Activities",  desc: "Creative and supervised activities designed to keep children entertained, engaged, and inspired throughout their stay.", src: `${S3_BASE}/IMG_2277.webp` },
  ];
  return (
    <section id="activities" className="section" style={{ background: "var(--cream)", padding: "7rem 0" }}>
      <div className="section-inner" style={{ padding: "0 1.5rem", marginBottom: "4rem" }}>
        <p className="section-label fade-in">Leisure</p>
        <h2 className="section-title fade-in">Activities &amp; <em>Experiences</em></h2>
      </div>
      <div className="activities-list fade-in">
        {items.map(a => (
          <div key={a.num} className="activity-row">
            <div className="activity-img"><img src={a.src} alt={a.title} loading="lazy" /></div>
            <div className="activity-content">
              <div className="activity-num">{a.num}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    { text: "Perfect escape from the city! The staff were so warm and welcoming. My kids loved the play area, and we enjoyed a beautiful sunset dinner by the pool.",      author: "Wanjiru M.",          location: "Nairobi" },
    { text: "We booked Enchula for our mini-moon and it was magical. The room was cozy, clean, and had such a peaceful view of the savannah.",                             author: "David & Sarah T.",    location: "Mombasa" },
    { text: "Authentic experience with real sustainability efforts — solar power, recycling, and support for local artisans. Truly impressive.",                            author: "Lina B.",             location: "Germany" },
    { text: "Best family weekend in years! Kids enjoyed camel rides and the mini club. Food was delicious — especially the local dishes.",                                  author: "The Otieno Family",   location: "Kisumu" },
  ];
  return (
    <section className="section reviews-section">
      <div className="section-inner">
        <div className="reviews-header">
          <div>
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">Guest <em>Stories</em></h2>
          </div>
          <div className="stats-row">
            {[["4.8/5", "Avg Rating"], ["200+", "Happy Guests"], ["98%", "Recommend"]].map(([n, l]) => (
              <div key={l} className="stat-item">
                <span className="stat-num">{n}</span>
                <span className="stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-quote">&ldquo;</div>
              <p className="review-text">{r.text}</p>
              <span className="review-author">— {r.author}, {r.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  useScrollReveal();
  return (
    <div>
      <GlobalStyles />
      <Hero />
      <About />
      <div className="divider" />
      <RoomsPreview />
      <div className="divider" />
      <Events />
      <div className="divider" />
      <Dining />
      <div className="divider" />
      <Activities />
      <div className="divider" />
      <Reviews />
    </div>
  );
}
