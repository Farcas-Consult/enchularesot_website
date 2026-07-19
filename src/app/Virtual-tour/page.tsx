"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  CalendarDays,
  Dumbbell,
  MapPin,
  Navigation,
  Phone,
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
      `${S3_BASE}/Image31.jpeg`,
      `${S3_BASE}/Image32.jpeg`,
      `${S3_BASE}/Image33.jpeg`,
      `${S3_BASE}/Image34.jpeg`,
      `${S3_BASE}/Image35.jpeg`,
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
      `${S3_BASE}/Image4.jpeg`,
      `${S3_BASE}/Dining1.jpg`,
      `${S3_BASE}/Image5.jpeg`,
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
      `${S3_BASE}/Conferences.jpeg`,
      `${S3_BASE}/Image27.jpeg`,
      `${S3_BASE}/Image21.jpeg`,
      `${S3_BASE}/Image23.jpeg`,
      `${S3_BASE}/Image25.jpeg`,
      `${S3_BASE}/Image26.jpeg`,
    ],
    info: "Orient yourself around the conference, retreat, and event spaces before your gathering.",
    routeNote: "Event guests can confirm setup location with reception on arrival.",
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: Dumbbell,
    images: [
      `${S3_BASE}/Image10.jpeg`,
      `${S3_BASE}/Image11.jpeg`,
      `${S3_BASE}/Image12.jpeg`,
      `${S3_BASE}/Image13.jpeg`,
      `${S3_BASE}/Image14.jpeg`,
      `${S3_BASE}/Image15.jpeg`,
    ],
    info: "Locate the gym and wellness spaces for training, spa care, and recovery.",
    routeNote: "Ask reception for current gym, spa, and wellness session access.",
  },
  {
    id: "grounds",
    label: "Grounds",
    icon: TreePine,
    images: [
      `${S3_BASE}/Swimmingpool.jpeg`,
      `${S3_BASE}/Games1.jpeg`,
      `${S3_BASE}/Image39.jpeg`,
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

  .vt-intro-section {
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: clamp(3rem, 6vw, 5rem) 0 clamp(2.5rem, 5vw, 4rem);
    text-align: center;
  }

  .vt-intro-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.6vw, 4.8rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 auto 1.25rem;
    max-width: 860px;
  }

  .vt-intro-title em {
    color: var(--brown);
    font-style: italic;
  }

  .vt-intro-lead {
    color: rgba(74,36,0,.78);
    font-size: clamp(1.05rem, 1.7vw, 1.3rem);
    line-height: 1.75;
    margin: 0 auto 1rem;
    max-width: 860px;
  }

  .vt-intro-copy {
    color: rgba(74,36,0,.68);
    line-height: 1.85;
    margin: 0 auto;
    max-width: 760px;
  }

  .vt-intro-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    margin-top: clamp(2.25rem, 4vw, 3.25rem);
    background: rgba(143,95,47,.22);
  }

  .vt-intro-card {
    background: var(--cream);
    min-height: 170px;
    padding: 1.4rem 1.15rem;
    text-align: left;
  }

  .vt-intro-card svg {
    color: var(--brown);
    margin-bottom: 1rem;
  }

  .vt-intro-card strong {
    color: var(--brown-dark);
    display: block;
    font-family: var(--font-serif);
    font-size: 1.45rem;
    font-weight: 300;
    margin-bottom: .45rem;
  }

  .vt-intro-card span {
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

  .vt-orientation-section {
    padding: clamp(2.5rem, 4vw, 3.75rem) 0;
  }

  .vt-orientation-showcase {
    background: var(--white);
    box-shadow: 0 18px 50px rgba(74,36,0,.08);
    overflow: hidden;
  }

  .vt-orientation-frame {
    position: relative;
    min-height: clamp(360px, 44vw, 500px);
    overflow: hidden;
    background: var(--brown-dark);
    color: var(--white);
    isolation: isolate;
  }

  .vt-orientation-bg {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.045);
    transition: opacity 2s ease-in-out, transform 8s ease-out;
    filter: saturate(.9) contrast(.95) brightness(.9);
    z-index: -3;
  }

  .vt-orientation-bg.vt-active {
    opacity: 1;
    transform: scale(1.015);
  }

  .vt-orientation-frame::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(74,22,6,.18) 0%, rgba(74,22,6,.09) 42%, rgba(74,22,6,.02) 74%),
      linear-gradient(180deg, rgba(0,0,0,.03) 0%, rgba(74,22,6,.16) 100%);
    z-index: -2;
    pointer-events: none;
  }

  .vt-orientation-content {
    width: min(980px, calc(100% - 3rem));
    min-height: inherit;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(3rem, 6vw, 5rem) 0;
  }

  .vt-orientation-kicker {
    color: var(--gold);
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .22em;
    margin: 0 0 .85rem;
    text-transform: uppercase;
  }

  .vt-orientation-title {
    color: var(--gold);
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.8vw, 3.7rem);
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1;
    margin: 0 0 1.2rem;
    max-width: 720px;
    text-transform: uppercase;
    text-shadow: 0 8px 26px rgba(0,0,0,.38);
  }

  .vt-orientation-desc {
    color: rgba(255,255,255,.88);
    font-size: clamp(.92rem, 1.05vw, 1rem);
    font-weight: 600;
    line-height: 1.7;
    margin: 0 0 1.35rem;
    max-width: 560px;
    text-shadow: 0 5px 18px rgba(0,0,0,.42);
  }

  .vt-orientation-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    min-height: 48px;
    padding: .9rem 1.7rem;
    background: var(--gold);
    color: var(--brown-dark);
    font-size: .72rem;
    font-weight: 800;
    letter-spacing: .13em;
    text-decoration: none;
    text-transform: uppercase;
    transition: background .25s var(--ease-out), transform .25s var(--ease-out), color .25s var(--ease-out);
  }

  .vt-orientation-link:hover {
    background: var(--peach);
    transform: translateY(-2px);
  }

  .vt-orientation-card-row {
    display: flex;
    gap: .9rem;
    overflow-x: auto;
    padding: 1rem;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
  }

  .vt-orientation-card {
    appearance: none;
    border: 1px solid rgba(143,95,47,.16);
    background: var(--cream);
    color: var(--brown-dark);
    cursor: pointer;
    flex: 0 0 clamp(150px, 17vw, 190px);
    padding: 0;
    text-align: left;
    scroll-snap-align: start;
    transition: border-color .25s var(--ease-out), transform .25s var(--ease-out), background .25s var(--ease-out);
  }

  .vt-orientation-thumb {
    position: relative;
    aspect-ratio: 16 / 10;
    border: 0;
    display: block;
    overflow: hidden;
  }

  .vt-orientation-thumb img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform .55s var(--ease-out);
  }

  .vt-orientation-card:hover .vt-orientation-thumb,
  .vt-orientation-card.vt-active .vt-orientation-thumb {
    transform: none;
  }

  .vt-orientation-card:hover img,
  .vt-orientation-card.vt-active img {
    transform: scale(1.045);
  }

  .vt-orientation-name {
    color: var(--brown-dark);
    display: block;
    font-size: .88rem;
    font-weight: 800;
    line-height: 1.35;
    padding: .85rem .9rem;
    text-shadow: none;
  }

  .vt-orientation-card:hover,
  .vt-orientation-card.vt-active {
    border-color: var(--gold);
    background: var(--white);
    transform: translateY(-2px);
  }

  .vt-orientation-note {
    color: rgba(74,36,0,.68);
    display: block;
    font-size: .75rem;
    line-height: 1.4;
    margin-top: .3rem;
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

    .vt-intro-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .vt-orientation-content {
      width: min(100% - 2rem, 720px);
    }

    .vt-orientation-card-row {
      max-width: 100%;
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

    .vt-intro-grid {
      grid-template-columns: 1fr;
    }

    .vt-step-list {
      grid-template-columns: 1fr;
    }

    .vt-map {
      min-height: 260px;
      height: 280px;
    }

    .vt-orientation-showcase {
      min-height: auto;
    }

    .vt-orientation-content {
      padding: 4rem 0;
    }

    .vt-orientation-card-row {
      gap: 1rem;
    }

    .vt-orientation-card {
      display: block;
      flex-basis: 170px;
    }

    .vt-orientation-thumb {
      margin-bottom: 0;
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
  const [activeSection, setActiveSection] = useState(tourSections[0].id);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeTour = useMemo(
    () => tourSections.find((section) => section.id === activeSection) || tourSections[0],
    [activeSection]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setGalleryIndex((currentImage) => {
        if (currentImage + 1 < activeTour.images.length) {
          return currentImage + 1;
        }

        setActiveSection((currentSection) => {
          const currentIndex = tourSections.findIndex((section) => section.id === currentSection);
          const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % tourSections.length : 0;
          return tourSections[nextIndex].id;
        });
        return 0;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeTour.images.length]);

  const handleOrientationSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setGalleryIndex(0);
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
        <h2 className="vt-intro-title">
          Know the resort before <em>you arrive</em>
        </h2>
        <p className="vt-intro-lead">
          Enchula Resort is easier to enjoy when guests already understand the arrival point,
          reception flow, and main hospitality spaces.
        </p>
        <p className="vt-intro-copy">
          Use this guide to orient yourself around the resort, preview the spaces you may visit,
          and then open practical directions when it is time to travel.
        </p>

        <div className="vt-intro-grid" aria-label="Virtual tour overview">
          {introHighlights.map(({ icon: Icon, ...item }) => (
            <div className="vt-intro-card" key={item.label}>
              <Icon size={28} aria-hidden="true" />
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="resort-orientation" className="vt-section vt-orientation-section">
        <div className="vt-orientation-showcase" aria-label="Resort orientation">
          <div className="vt-orientation-frame">
            {tourSections.map((section, sectionIndex) =>
              section.images.map((image, imageIndex) => (
                <img
                  key={`${section.id}-${image}`}
                  src={image}
                  alt={`${section.label} at Enchula Resort`}
                  className={`vt-orientation-bg ${
                    section.id === activeSection && imageIndex === galleryIndex ? "vt-active" : ""
                  }`}
                  loading={sectionIndex === 0 && imageIndex === 0 ? "eager" : "lazy"}
                />
              ))
            )}

            <div className="vt-orientation-content">
              <p className="vt-orientation-kicker">Resort orientation</p>
              <h2 className="vt-orientation-title">{activeTour.label}</h2>
              <p className="vt-orientation-desc">{activeTour.info}</p>
              <a href="#arrival-guide" className="vt-orientation-link">
                Plan Your Arrival
              </a>
            </div>
          </div>

          <div className="vt-orientation-card-row" aria-label="Resort orientation areas">
            {tourSections.map((section) => (
              <button
                type="button"
                key={section.id}
                className={`vt-orientation-card ${section.id === activeSection ? "vt-active" : ""}`}
                onClick={() => handleOrientationSelect(section.id)}
              >
                <span className="vt-orientation-thumb">
                  <img src={section.images[0]} alt={`${section.label} preview`} loading="lazy" />
                </span>
                <span className="vt-orientation-name">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="arrival-guide" className="vt-section vt-directions-section">
        <div className="vt-section-heading">
          <div>
            <div className="vt-kicker">Getting here</div>
            <h2 className="vt-heading">
              Clear directions, <em>then a calm arrival</em>
            </h2>
          </div>
          <p className="vt-copy">
            Open maps, confirm the resort address, and check in at reception for guidance around
            the property.
          </p>
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
