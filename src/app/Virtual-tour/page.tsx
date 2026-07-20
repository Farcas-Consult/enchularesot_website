"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  MapPin,
  Navigation,
  Pause,
  Phone,
  Play,
  Sparkles,
  Utensils,
  Volume2,
} from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

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

const introHighlights = [
  {
    label: "Arrival",
    text: "Know where to check in and where the team will meet you.",
    icon: MapPin,
  },
  {
    label: "Stay",
    text: "Preview room, dining, wellness, event, and leisure zones.",
    icon: BedDouble,
  },
  {
    label: "Gather",
    text: "Find the spaces that support meetings, meals, and celebrations.",
    icon: Utensils,
  },
  {
    label: "Settle",
    text: "Arrive with a clear route and an easy sense of the resort layout.",
    icon: Sparkles,
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --brown:      var(--brand-warm-brown);
    --brown-dark: var(--brand-black);
    --brown-deep: var(--brand-gray);
    --gold:       var(--brand-primary);
    --sand:       var(--brand-light-brown);
    --blush:      var(--brand-blush);
    --peach:      var(--brand-peach);
    --cream:      var(--brand-background);
    --white:      var(--brand-white);
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
    border: 1px solid color-mix(in srgb, var(--brand-peach) 55%, transparent);
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

  .vt-intro-section {
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: clamp(3rem, 6vw, 5rem) 0 clamp(2.5rem, 5vw, 4rem);
    text-align: center;
  }

  .vt-journey-heading {
    margin-bottom: 2rem;
    text-align: center;
  }

  .vt-journey-heading h3 {
    color: var(--brown-dark);
    font-family: var(--font-sans);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 400;
    letter-spacing: .08em;
    margin: 0;
    text-transform: uppercase;
  }

  .vt-journey-heading p {
    color: var(--brown-deep);
    font-size: .95rem;
    letter-spacing: .08em;
    margin: .7rem 0 0;
    text-transform: uppercase;
  }

  .vt-journey {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    margin-top: 0;
    background: rgba(143,95,47,.22);
  }

  .vt-journey-item {
    background: var(--cream);
    min-height: 170px;
    padding: 1.4rem 1.15rem;
    text-align: left;
  }

  .vt-journey-icon {
    color: var(--brown);
    margin-bottom: 1rem;
  }

  .vt-journey-item strong {
    color: var(--brown-dark);
    display: block;
    font-family: var(--font-serif);
    font-size: 1.45rem;
    font-weight: 300;
    margin-bottom: .45rem;
  }

  .vt-journey-item span {
    color: rgba(74,36,0,.68);
    display: block;
    font-size: .94rem;
    line-height: 1.65;
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
    grid-template-columns: minmax(0, .95fr) minmax(320px, .85fr);
    background: var(--white);
    box-shadow: 0 18px 50px rgba(74,36,0,.08);
    align-items: stretch;
  }

  .vt-directions {
    padding: clamp(1.35rem, 3vw, 2.25rem);
  }

  .vt-address {
    border-top: 1px solid rgba(143,95,47,.25);
    border-bottom: 1px solid rgba(143,95,47,.25);
    margin: 1.25rem 0;
    padding: 1rem 0;
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
    font-size: clamp(1.2rem, 2vw, 1.45rem);
    line-height: 1.12;
  }

  .vt-step-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: .75rem;
    margin-top: 1.25rem;
  }

  .vt-step {
    background: color-mix(in srgb, var(--cream) 82%, var(--white));
    border: 1px solid rgba(143,95,47,.16);
    padding: 1rem;
  }

  .vt-step strong {
    color: var(--brown-dark);
    display: block;
    font-size: .78rem;
    font-weight: 800;
    letter-spacing: .12em;
    line-height: 1.35;
    margin-bottom: .45rem;
    text-transform: uppercase;
  }

  .vt-step p {
    color: rgba(74,36,0,.72);
    font-size: .9rem;
    line-height: 1.55;
    margin: 0;
  }

  .vt-map {
    min-height: 100%;
    height: clamp(340px, 34vw, 420px);
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

  .vt-directions-section {
    padding-top: clamp(2.5rem, 4vw, 3.75rem);
  }

  .vt-directions-section .vt-section-heading {
    margin-bottom: 1.6rem;
  }

  .vt-tour-shell {
    display: grid;
    grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
    background: var(--white);
    box-shadow: 0 18px 50px rgba(74,36,0,.08);
  }

  .vt-intro-showcase {
    background: var(--white);
    box-shadow: 0 18px 50px rgba(74,36,0,.08);
    margin-top: clamp(1.5rem, 4vw, 2.5rem);
    margin-inline: calc(50% - 50vw);
    overflow: hidden;
    width: auto;
  }

  .vt-intro-video-frame {
    position: relative;
    background: transparent;
    max-height: clamp(360px, 46vw, 620px);
    overflow: hidden;
  }

  .vt-intro-video {
    display: block;
    height: auto;
    max-width: none;
    min-width: 100%;
    width: 100%;
    background: transparent;
  }

  .vt-video-controls {
    align-items: center;
    background: rgba(74,36,0,.78);
    backdrop-filter: blur(10px);
    bottom: 1rem;
    color: var(--peach);
    display: flex;
    gap: .9rem;
    left: 50%;
    min-height: 48px;
    padding: .55rem .75rem;
    position: absolute;
    transform: translateX(-50%);
    width: min(360px, calc(100% - 2rem));
    z-index: 2;
  }

  .vt-video-button {
    align-items: center;
    appearance: none;
    background: var(--gold);
    border: 0;
    color: var(--brown-dark);
    cursor: pointer;
    display: inline-flex;
    flex: 0 0 38px;
    height: 38px;
    justify-content: center;
    transition: background .25s var(--ease-out), transform .25s var(--ease-out);
    width: 38px;
  }

  .vt-video-button:hover {
    background: var(--peach);
    transform: translateY(-1px);
  }

  .vt-video-volume {
    align-items: center;
    display: flex;
    flex: 1;
    gap: .65rem;
    min-width: 0;
  }

  .vt-video-volume input {
    accent-color: var(--gold);
    cursor: pointer;
    width: 100%;
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
    border-color: color-mix(in srgb, var(--brand-peach) 35%, transparent);
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
    grid-template-columns: minmax(0, 1.75fr) minmax(260px, .65fr);
    min-height: 560px;
  }

  .vt-image-stage {
    position: relative;
    overflow: hidden;
    background: var(--sand);
    min-width: 0;
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
    border: 1px solid color-mix(in srgb, var(--brand-peach) 55%, transparent);
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
    background: color-mix(in srgb, var(--brand-peach) 42%, transparent);
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
    color: color-mix(in srgb, var(--brand-peach) 78%, transparent);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  .vt-cta-icon {
    display: block;
    margin: 0 auto 1rem;
  }

  .vt-cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
    justify-content: center;
    align-items: center;
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

    .vt-intro-section {
      width: min(100% - 2rem, 720px);
    }

    .vt-intro-showcase {
      margin-inline: calc(50% - 50vw);
    }

    .vt-journey {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .vt-intro-video-frame {
      height: auto;
      max-height: clamp(320px, 58vw, 500px);
    }

    .vt-tabs {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .vt-map {
      min-height: 300px;
      height: 320px;
    }

    .vt-image-stage {
      min-height: 390px;
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

    .vt-cta-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .vt-btn {
      width: 100%;
    }

    .vt-journey {
      grid-template-columns: 1fr;
    }

    .vt-step-list {
      grid-template-columns: 1fr;
    }

    .vt-map {
      min-height: 260px;
      height: 280px;
    }

    .vt-intro-showcase {
      min-height: auto;
    }

    .vt-intro-video-frame {
      height: auto;
      max-height: 340px;
    }

    .vt-video-controls {
      bottom: .75rem;
      gap: .7rem;
      width: calc(100% - 1.5rem);
    }

    .vt-video-button {
      flex-basis: 34px;
      height: 34px;
      width: 34px;
    }

    .vt-video-volume {
      gap: .5rem;
    }

    .vt-tabs {
      grid-template-columns: 1fr;
    }

    .vt-tab {
      min-height: 58px;
    }

    .vt-image-stage {
      min-height: 280px;
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
  const tourVideoRef = useRef<HTMLVideoElement>(null);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [tourVolume, setTourVolume] = useState(0);

  useEffect(() => {
    const video = tourVideoRef.current;
    if (!video) return;

    const handlePlay = () => setIsTourPlaying(true);
    const handlePause = () => setIsTourPlaying(false);

    video.volume = tourVolume;
    video.muted = tourVolume === 0;
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handlePause);
    };
  }, [tourVolume]);

  const toggleTourVideo = async () => {
    const video = tourVideoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play().catch(() => setIsTourPlaying(false));
    } else {
      video.pause();
    }
  };

  const handleTourVolumeChange = (value: number) => {
    const video = tourVideoRef.current;
    setTourVolume(value);
    if (video) {
      video.volume = value;
      video.muted = value === 0;
    }
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
        <div className="vt-hero-content">
          <div className="vt-eyebrow">Directions and resort orientation</div>
          <h1 className="vt-title">
            Find your way to <em>Enchula Resort</em>
          </h1>
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
              Arrival Guide
            </a>
          </div>
        </div>
      </div>

      <div id="tour-intro" className="vt-intro-section">
        <div className="vt-journey-heading">
          <h3>Our Virtual Tour Journey</h3>
          <p>A natural rhythm of arrival, stay, gathering, and settling in</p>
        </div>

        <div className="vt-journey" aria-label="Virtual tour overview">
          {introHighlights.map(({ icon: Icon, ...item }) => (
            <div className="vt-journey-item" key={item.label}>
              <Icon className="vt-journey-icon" size={28} aria-hidden="true" />
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="vt-intro-showcase" aria-label="Virtual tour video">
          <div className="vt-intro-video-frame">
            <video
              ref={tourVideoRef}
              className="vt-intro-video"
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster={`${S3_BASE}/IMG_2256.webp`}
              onClick={toggleTourVideo}
            >
              <source src={`${S3_BASE}/Virtual%20Tour.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="vt-video-controls" aria-label="Virtual tour video controls">
              <button
                type="button"
                className="vt-video-button"
                onClick={toggleTourVideo}
                aria-label={isTourPlaying ? "Pause virtual tour video" : "Play virtual tour video"}
              >
                {isTourPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <label className="vt-video-volume">
                <Volume2 size={18} aria-hidden="true" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={tourVolume}
                  onChange={(event) => handleTourVolumeChange(Number(event.target.value))}
                  aria-label="Virtual tour volume"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div id="arrival-guide" className="vt-section vt-directions-section">
        <div className="vt-section-heading">
          <div>
            <div className="vt-kicker">Getting here</div>
            
          </div>
         
        </div>

        <div className="vt-direction-grid">
          <div className="vt-directions">
            <div className="vt-kicker">Destination</div>
            <h3 className="vt-panel-title">Enchula Resort, Kajiado</h3>
            <p className="vt-copy">
              Use the main road approach, then follow resort signage to reception.
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
              {directionSteps.map((step) => (
                <div className="vt-step" key={step.title}>
                  <strong>{step.title}</strong>
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
        <div className="vt-cta">
          <Sparkles className="vt-cta-icon" size={22} />
          <h2>Arrive with the route already clear.</h2>
          <p>
            Open directions before you travel, then check in at reception for help finding your
            room, event space, dining area, or activity.
          </p>
          <div className="vt-cta-actions">
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
