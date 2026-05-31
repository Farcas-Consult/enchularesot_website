"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  MapPin,
  Navigation,
  Phone,
  Route,
  Sparkles,
  TreePine,
  Utensils,
} from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const tourSections = [
  {
    id: "arrival",
    label: "Arrival",
    icon: MapPin,
    images: [
      `${S3_BASE}/IMG_2256.webp`,
      `${S3_BASE}/Reception1.jpg`,
      `${S3_BASE}/Surrounding1.jpg`,
      `${S3_BASE}/Surroundings2.jpg`,
      `${S3_BASE}/Surroundings3.jpg`,
    ],
    info: "Start at the resort entrance, reception, and surrounding arrival areas before moving into the main guest spaces.",
    routeNote: "Use the main road approach, then follow resort signage to reception.",
  },
  {
    id: "rooms",
    label: "Rooms",
    icon: BedDouble,
    images: [
      `${S3_BASE}/Room7.jpg`,
      `${S3_BASE}/Room2.jpg`,
      `${S3_BASE}/Room3.jpg`,
      `${S3_BASE}/Room4.jpg`,
      `${S3_BASE}/Room10.jpg`,
      `${S3_BASE}/Room8.jpg`,
    ],
    info: "Preview accommodation areas so guests know what to expect after check-in.",
    routeNote: "Reception guides guests from check-in toward the room blocks.",
  },
  {
    id: "dining",
    label: "Dining",
    icon: Utensils,
    images: [
      `${S3_BASE}/IMG_2236.webp`,
      `${S3_BASE}/Dining1.jpg`,
      `${S3_BASE}/Dining2.jpg`,
      `${S3_BASE}/Dining3.jpg`,
      `${S3_BASE}/Dining6.jpg`,
      `${S3_BASE}/Dining4.jpg`,
    ],
    info: "Find the restaurant and dining areas for meals, drinks, and hosted gatherings.",
    routeNote: "Dining spaces are easy to locate from the central guest areas.",
  },
  {
    id: "events",
    label: "Events",
    icon: CalendarDays,
    images: [
      `${S3_BASE}/Conference1.jpg`,
      `${S3_BASE}/Conference2.jpg`,
      `${S3_BASE}/Event1.jpeg`,
      `${S3_BASE}/Event3.jpeg`,
      `${S3_BASE}/Event18.jpeg`,
      `${S3_BASE}/Event10.jpeg`,
    ],
    info: "Orient yourself around the conference, retreat, and event spaces before your gathering.",
    routeNote: "Event guests can confirm setup location with reception on arrival.",
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: Dumbbell,
    images: [
      `${S3_BASE}/IMG_2174.webp`,
      `${S3_BASE}/IMG_2173.webp`,
      `${S3_BASE}/Wellness.webp`,
      `${S3_BASE}/IMG_3391.webp`,
    ],
    info: "Locate the gym and wellness spaces for training, spa care, and recovery.",
    routeNote: "Ask reception for current gym, spa, and wellness session access.",
  },
  {
    id: "grounds",
    label: "Grounds",
    icon: TreePine,
    images: [
      `${S3_BASE}/Surrounding1.jpg`,
      `${S3_BASE}/Surroundings2.jpg`,
      `${S3_BASE}/Surroundings3.jpg`,
      `${S3_BASE}/Surroundings5.jpg`,
    ],
    info: "Explore the resort surroundings, pathways, and outdoor leisure areas.",
    routeNote: "Outdoor areas are best explored slowly after checking in at reception.",
  },
];

const directionSteps = [
  {
    title: "Set Your Destination",
    text: "Search for Enchula Resort or use the directions button to open Google Maps.",
  },
  {
    title: "Follow Nairobi-Namanga Road",
    text: "Use the main Kajiado approach and keep an eye out for resort signage near arrival.",
  },
  {
    title: "Check In at Reception",
    text: "On arrival, the reception team will guide you to rooms, dining, events, wellness, or activities.",
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

  .vt-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .vt-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .vt-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .vt-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.12) 0%, rgba(74,36,0,.76) 100%),
      linear-gradient(90deg, rgba(74,36,0,.6) 0%, rgba(74,36,0,.08) 62%);
  }

  .vt-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .vt-eyebrow {
    display: flex;
    align-items: center;
    gap: .75rem;
    color: var(--gold);
    font-size: .68rem;
    font-weight: 600;
    letter-spacing: .22em;
    margin-bottom: .8rem;
    text-transform: uppercase;
  }

  .vt-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .vt-title {
    max-width: 860px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .vt-title em {
    color: var(--peach);
    font-style: italic;
  }

  .vt-intro {
    max-width: 650px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .vt-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .vt-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .55rem;
    min-height: 46px;
    padding: .85rem 1.35rem;
    border: 1px solid rgba(255,211,163,.55);
    color: var(--brown-dark);
    background: var(--peach);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform .25s var(--ease-out), background .25s var(--ease-out), color .25s var(--ease-out);
  }

  .vt-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .vt-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .vt-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .vt-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .vt-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .vt-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .vt-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .vt-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .vt-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .vt-direction-grid {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    background: var(--white);
  }

  .vt-directions {
    padding: clamp(2rem, 5vw, 4rem);
  }

  .vt-address {
    border-top: 1px solid rgba(143,95,47,.25);
    border-bottom: 1px solid rgba(143,95,47,.25);
    margin: 1.8rem 0;
    padding: 1.25rem 0;
  }

  .vt-address strong {
    color: var(--brown);
    display: block;
    font-size: .7rem;
    letter-spacing: .16em;
    margin-bottom: .4rem;
    text-transform: uppercase;
  }

  .vt-address span {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.55rem;
    line-height: 1.12;
  }

  .vt-step-list {
    display: grid;
    gap: 1px;
    background: var(--sand);
    margin-top: 2rem;
  }

  .vt-step {
    background: var(--cream);
    padding: 1.25rem;
  }

  .vt-step strong {
    color: var(--brown-dark);
    display: block;
    font-family: var(--font-serif);
    font-size: 1.35rem;
    font-weight: 300;
    margin-bottom: .45rem;
  }

  .vt-step p {
    color: rgba(74,36,0,.72);
    line-height: 1.65;
    margin: 0;
  }

  .vt-map {
    min-height: 580px;
    background: var(--sand);
    position: relative;
  }

  .vt-map iframe {
    border: 0;
    height: 100%;
    inset: 0;
    position: absolute;
    width: 100%;
  }

  .vt-tour-shell {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    background: var(--white);
  }

  .vt-tabs {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--sand);
  }

  .vt-tab {
    align-items: center;
    background: var(--white);
    border: 0;
    color: var(--brown-dark);
    cursor: pointer;
    display: flex;
    gap: .9rem;
    min-height: 70px;
    padding: 1rem 1.2rem;
    text-align: left;
    transition: background .25s var(--ease-out), color .25s var(--ease-out);
  }

  .vt-tab:hover,
  .vt-tab.vt-active {
    background: var(--brown-dark);
    color: var(--peach);
  }

  .vt-tab-icon {
    align-items: center;
    border: 1px solid rgba(143,95,47,.25);
    display: flex;
    flex: 0 0 auto;
    height: 38px;
    justify-content: center;
    width: 38px;
  }

  .vt-active .vt-tab-icon,
  .vt-tab:hover .vt-tab-icon {
    border-color: rgba(255,211,163,.35);
  }

  .vt-tab span {
    display: block;
    font-size: .66rem;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .vt-viewer {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
    min-height: 620px;
  }

  .vt-image-stage {
    position: relative;
    overflow: hidden;
    background: var(--sand);
  }

  .vt-image {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform .9s var(--ease-out);
  }

  .vt-image-stage:hover .vt-image {
    transform: scale(1.035);
  }

  .vt-gallery-controls {
    position: absolute;
    inset: auto 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    z-index: 2;
  }

  .vt-arrow-row {
    display: flex;
    gap: .5rem;
  }

  .vt-icon-btn {
    align-items: center;
    background: var(--peach);
    border: 1px solid rgba(255,211,163,.55);
    color: var(--brown-dark);
    cursor: pointer;
    display: flex;
    height: 42px;
    justify-content: center;
    width: 42px;
    transition: background .25s var(--ease-out), transform .25s var(--ease-out);
  }

  .vt-icon-btn:hover {
    background: var(--gold);
    transform: translateY(-2px);
  }

  .vt-dots {
    display: flex;
    flex-wrap: wrap;
    gap: .45rem;
    justify-content: flex-end;
  }

  .vt-dot {
    background: rgba(255,211,163,.42);
    border: 0;
    cursor: pointer;
    height: 8px;
    width: 8px;
  }

  .vt-dot.vt-active {
    background: var(--peach);
    width: 28px;
  }

  .vt-info-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3.5rem);
  }

  .vt-panel-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.25rem, 4vw, 3.9rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .vt-note {
    border-top: 1px solid rgba(143,95,47,.25);
    margin-top: 2rem;
    padding-top: 1.25rem;
  }

  .vt-note strong {
    color: var(--brown);
    display: block;
    font-size: .7rem;
    letter-spacing: .16em;
    margin-bottom: .45rem;
    text-transform: uppercase;
  }

  .vt-note span {
    color: rgba(74,36,0,.74);
    line-height: 1.7;
  }

  .vt-cta {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 2rem;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
  }

  .vt-cta h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .vt-cta p {
    color: rgba(255,211,163,.78);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  @media (max-width: 980px) {
    .vt-hero {
      height: 64vh;
      min-height: 460px;
    }

    .vt-hero-content,
    .vt-section {
      width: min(100% - 2rem, 720px);
    }

    .vt-hero-content {
      padding-bottom: 3rem;
    }

    .vt-section {
      padding: 4rem 0;
    }

    .vt-section-heading,
    .vt-direction-grid,
    .vt-tour-shell,
    .vt-viewer {
      grid-template-columns: 1fr;
    }

    .vt-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .vt-map {
      min-height: 440px;
    }

    .vt-image-stage {
      min-height: 460px;
    }
  }

  @media (max-width: 560px) {
    .vt-hero {
      height: 58vh;
      min-height: 420px;
    }

    .vt-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .vt-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .vt-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .vt-btn {
      width: 100%;
    }

    .vt-tabs {
      grid-template-columns: 1fr;
    }

    .vt-tab {
      min-height: 58px;
    }

    .vt-image-stage {
      min-height: 340px;
    }

    .vt-gallery-controls {
      align-items: flex-start;
      flex-direction: column;
    }

    .vt-directions,
    .vt-info-panel {
      padding: 1.5rem;
    }
  }
`;

export default function VirtualTourPage() {
  const [activeSection, setActiveSection] = useState(tourSections[0].id);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeTour = useMemo(
    () => tourSections.find((section) => section.id === activeSection) || tourSections[0],
    [activeSection]
  );

  useEffect(() => {
    if (activeTour.images.length <= 1) return;

    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % activeTour.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeTour]);

  const handlePrevious = () => {
    setGalleryIndex((prev) => (prev > 0 ? prev - 1 : activeTour.images.length - 1));
  };

  const handleNext = () => {
    setGalleryIndex((prev) => (prev + 1) % activeTour.images.length);
  };

  return (
    <section id="virtual-tour" className="vt-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="vt-hero">
        <Image
          src={`${S3_BASE}/IMG_2256.webp`}
          alt="Directions to Enchula Resort"
          fill
          className="vt-hero-img"
          priority
          sizes="100vw"
        />
        <div className="vt-hero-overlay" />
        <div className="vt-hero-content">
          <div className="vt-eyebrow">Directions and resort orientation</div>
          <h1 className="vt-title">
            Find your way to <em>Enchula Resort</em>
          </h1>
          <p className="vt-intro">
            Use this page to get directions, preview arrival points, and understand where the main
            guest spaces sit before you arrive.
          </p>
          <div className="vt-actions">
            <a
              className="vt-btn"
              href="https://www.google.com/maps/dir/?api=1&destination=Enchula+Resort,+Nairobi-Namanga+Rd,+Kajiado,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} />
              Open Directions
            </a>
            <a className="vt-btn vt-btn-secondary" href="#arrival-guide">
              <Route size={16} />
              Arrival Guide
            </a>
          </div>
        </div>
      </div>

      <div id="arrival-guide" className="vt-section">
        <div className="vt-section-heading">
          <div>
            <div className="vt-kicker">Getting here</div>
            <h2 className="vt-heading">
              Clear directions, <em>then a calm arrival</em>
            </h2>
          </div>
          <p className="vt-copy">
            The route tools below help guests open navigation quickly, confirm the address, and
            know where to check in once they reach the resort.
          </p>
        </div>

        <div className="vt-direction-grid">
          <div className="vt-directions">
            <div className="vt-kicker">Destination</div>
            <h3 className="vt-panel-title">Enchula Resort, Kajiado</h3>
            <p className="vt-copy">
              Plan your arrival through the main road approach, then check in at reception for
              guidance to rooms, dining, events, wellness, or activities.
            </p>
            <div className="vt-address">
              <strong>Address</strong>
              <span>Nairobi-Namanga Rd, Kajiado, Kenya</span>
            </div>
            <div className="vt-actions">
              <a
                className="vt-btn"
                href="https://www.google.com/maps/dir/?api=1&destination=Enchula+Resort,+Nairobi-Namanga+Rd,+Kajiado,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={16} />
                Google Maps
              </a>
              <a className="vt-btn vt-btn-secondary" href="tel:+254727000027">
                <Phone size={16} />
                Call Reception
              </a>
            </div>
            <div className="vt-step-list">
              {directionSteps.map((step, index) => (
                <div className="vt-step" key={step.title}>
                  <strong>{String(index + 1).padStart(2, "0")} · {step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="vt-map">
            <iframe
              title="Enchula Resort directions map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.01962476013!2d36.7819502!3d-1.8497201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7e2e2e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sKajiado%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="vt-section">
        <div className="vt-section-heading">
          <div>
            <div className="vt-kicker">Resort orientation</div>
            <h2 className="vt-heading">
              Preview where to go <em>after arrival</em>
            </h2>
          </div>
          <p className="vt-copy">
            Move through the main resort zones before you arrive. Each view gives guests a quick
            sense of what to look for and where reception can guide them next.
          </p>
        </div>

        <div className="vt-tour-shell">
          <div className="vt-tabs" aria-label="Virtual tour areas">
            {tourSections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  type="button"
                  key={section.id}
                  className={`vt-tab ${activeSection === section.id ? "vt-active" : ""}`}
                  onClick={() => {
                    setActiveSection(section.id);
                    setGalleryIndex(0);
                  }}
                >
                  <span className="vt-tab-icon">
                    <Icon size={18} />
                  </span>
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>

          <div className="vt-viewer">
            <div className="vt-image-stage">
              <Image
                src={activeTour.images[galleryIndex]}
                alt={`${activeTour.label} at Enchula Resort`}
                fill
                className="vt-image"
                sizes="(max-width: 980px) 100vw, 50vw"
                priority
              />
              <div className="vt-gallery-controls">
                <div className="vt-arrow-row">
                  <button type="button" className="vt-icon-btn" onClick={handlePrevious} aria-label="Previous image">
                    <ChevronLeft size={22} />
                  </button>
                  <button type="button" className="vt-icon-btn" onClick={handleNext} aria-label="Next image">
                    <ChevronRight size={22} />
                  </button>
                </div>
                <div className="vt-dots">
                  {activeTour.images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      className={`vt-dot ${galleryIndex === index ? "vt-active" : ""}`}
                      onClick={() => setGalleryIndex(index)}
                      aria-label={`View ${activeTour.label} image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="vt-info-panel">
              <div className="vt-kicker">{activeTour.label}</div>
              <h3 className="vt-panel-title">{activeTour.label} directions</h3>
              <p className="vt-copy">{activeTour.info}</p>
              <div className="vt-note">
                <strong>Arrival note</strong>
                <span>{activeTour.routeNote}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="vt-cta">
          <Sparkles size={22} style={{ margin: "0 auto 1rem" }} />
          <h2>Arrive with the route already clear.</h2>
          <p>
            Open directions before you travel, then check in at reception for help finding your
            room, event space, dining area, or activity.
          </p>
          <div className="vt-actions" style={{ justifyContent: "center" }}>
            <a
              className="vt-btn"
              href="https://www.google.com/maps/dir/?api=1&destination=Enchula+Resort,+Nairobi-Namanga+Rd,+Kajiado,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} />
              Open Directions
            </a>
            <Link className="vt-btn vt-btn-secondary" href="/booking">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
