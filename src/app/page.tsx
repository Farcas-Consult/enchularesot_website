"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/homepage/hero";
import { Maximize2, Users } from "lucide-react";

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
    .mosaic-badge {
      position: absolute; bottom: 3rem; left: 0; z-index: 2;
      background: var(--brand-black); color: var(--brand-background);
      padding: 1rem 1.5rem;
      box-shadow: 0 16px 32px color-mix(in srgb, var(--brand-black) 22%, transparent);
    }
    .mosaic-badge-num {
      font-family: var(--font-serif); font-size: 2.5rem; font-weight: 600;
      line-height: 1; display: block; color: var(--brand-primary);
    }
    .mosaic-badge-txt {
      font-size: .7rem; letter-spacing: .15em; text-transform: uppercase;
      color: color-mix(in srgb, var(--brand-background) 78%, transparent);
    }
    .features-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2.5rem; }
    .feature-card { padding: 1.5rem; border: 1px solid rgba(185,154,102,.2); background: white; transition: border-color .25s, transform .25s; }
    .feature-card:hover { border-color: var(--gold); transform: translateY(-3px); }
    .feature-card h4 { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600; color: var(--brown); margin-bottom: .4rem; }
    .feature-card p { font-size: .85rem; color: var(--brown-dark); opacity: .75; line-height: 1.6; }

    /* ── Rooms preview ── */
    .rooms-preview {
      background: var(--cream);
      padding: clamp(4.5rem, 8vw, 7rem) 1.5rem;
    }
    .rooms-preview-header {
      margin: 0 auto clamp(2rem, 4vw, 3rem);
      max-width: 760px;
      text-align: center;
    }
    .rooms-preview-title {
      color: color-mix(in srgb, var(--brand-black) 78%, var(--brown));
      font-family: var(--font-sans);
      font-size: clamp(2rem, 4vw, 3.25rem);
      font-weight: 700;
      letter-spacing: .04em;
      line-height: 1;
      margin: 0 0 1rem;
      text-transform: uppercase;
    }
    .rooms-preview-subtitle {
      color: rgba(74, 36, 0, .74);
      font-size: clamp(.95rem, 1.25vw, 1.08rem);
      line-height: 1.6;
      margin: 0;
    }
    .rooms-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1.25rem, 2.2vw, 1.75rem);
      margin: 0 auto;
      max-width: 1180px;
    }
    .room-card {
      background: transparent;
      color: var(--brown-dark);
      display: flex;
      flex-direction: column;
      height: auto;
      min-width: 0;
      overflow: visible;
      text-align: center;
    }
    .room-card-media {
      aspect-ratio: 16 / 10;
      background: var(--sand);
      margin-bottom: 1.2rem;
      overflow: hidden;
    }
    .room-card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .7s var(--ease-out), filter .5s;
    }
    .room-card:hover .room-card-img {
      transform: scale(1.04);
      filter: saturate(.96) contrast(.98) brightness(.94);
    }
    .room-card-title {
      color: color-mix(in srgb, var(--brand-black) 78%, var(--brown));
      font-family: var(--font-sans);
      font-size: clamp(1.2rem, 1.8vw, 1.65rem);
      font-weight: 800;
      letter-spacing: .02em;
      line-height: 1.15;
      margin: 0 auto .85rem;
      max-width: 16ch;
      text-transform: uppercase;
    }
    .room-card-meta {
      align-items: center;
      color: rgba(74, 36, 0, .78);
      display: flex;
      flex-wrap: wrap;
      font-size: .95rem;
      gap: .75rem;
      justify-content: center;
      line-height: 1.3;
      margin: 0 0 1.15rem;
    }
    .room-meta-item {
      align-items: center;
      display: inline-flex;
      gap: .45rem;
      white-space: nowrap;
    }
    .room-meta-item + .room-meta-item {
      border-left: 1px solid rgba(143, 95, 47, .28);
      padding-left: .75rem;
    }
    .room-meta-icon {
      color: #8a1f18;
      flex: 0 0 auto;
    }
    .room-card-price {
      color: var(--brown);
      font-size: .78rem;
      font-weight: 700;
      letter-spacing: .12em;
      margin: 0 0 1.25rem;
      text-transform: uppercase;
    }
    .room-card-actions {
      display: flex;
      gap: .9rem;
      justify-content: center;
      margin-top: auto;
    }
    .room-card-action {
      align-items: center;
      background: var(--brown);
      color: var(--white);
      display: inline-flex;
      font-size: .72rem;
      font-weight: 800;
      justify-content: center;
      letter-spacing: .09em;
      min-height: 46px;
      min-width: 138px;
      padding: .85rem 1.25rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: background .25s var(--ease-out), color .25s var(--ease-out), transform .25s var(--ease-out);
    }
    .room-card-action:hover {
      background: var(--brown-dark);
      color: var(--peach);
      transform: translateY(-2px);
    }
    /* ── Events ── */
    .events-showcase {
      position: relative;
      min-height: clamp(560px, 68vw, 760px);
      overflow: hidden;
      background: var(--brown-dark);
      color: var(--white);
      isolation: isolate;
    }
    .events-showcase-bg {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale(1.045);
      transition: opacity 2.2s ease-in-out, transform 8s ease-out;
      filter: saturate(.9) contrast(.95) brightness(.9);
      z-index: -3;
    }
    .events-showcase-bg.active {
      opacity: 1;
      transform: scale(1.015);
    }
    .events-showcase::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(74, 22, 6, .1) 0%, rgba(74, 22, 6, .08) 34%, rgba(74, 22, 6, .02) 72%),
        linear-gradient(180deg, rgba(0, 0, 0, .02) 0%, rgba(74, 22, 6, .1) 100%);
      z-index: -2;
      pointer-events: none;
    }
    .events-showcase-content {
      width: min(1180px, calc(100% - 3rem));
      min-height: inherit;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(4.5rem, 8vw, 7rem) 0;
    }
    .events-showcase-kicker {
      color: var(--gold);
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: .22em;
      margin: 0 0 .85rem;
      text-transform: uppercase;
    }
    .events-showcase-title {
      color: var(--gold);
      font-family: var(--font-serif);
      font-size: clamp(2.25rem, 4.5vw, 4.4rem);
      font-weight: 600;
      letter-spacing: 0;
      line-height: 1;
      margin: 0 0 1.2rem;
      max-width: 720px;
      text-transform: uppercase;
      text-shadow: 0 8px 26px rgba(0, 0, 0, .38);
    }
    .events-showcase-desc {
      color: rgba(255, 255, 255, .88);
      font-size: clamp(.92rem, 1.05vw, 1rem);
      font-weight: 600;
      line-height: 1.7;
      margin: 0 0 1.7rem;
      max-width: 600px;
      text-shadow: 0 5px 18px rgba(0, 0, 0, .42);
    }
    .events-full-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      min-height: 48px;
      padding: .9rem 1.7rem;
      background: var(--brand-primary);
      color: var(--brand-black);
      font-family: var(--font-sans);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: .13em;
      text-decoration: none;
      text-transform: uppercase;
      transition: background .25s var(--ease-out), transform .25s var(--ease-out), color .25s var(--ease-out);
    }
    .events-full-link:hover {
      background: var(--gold);
      color: var(--brown-dark);
      transform: translateY(-2px);
    }
    .events-card-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(130px, 1fr));
      gap: clamp(1rem, 2vw, 1.75rem);
      margin-top: clamp(1.5rem, 3vw, 2.25rem);
      max-width: 620px;
    }
    .event-card {
      appearance: none;
      border: 0;
      background: transparent;
      color: var(--white);
      cursor: pointer;
      padding: 0;
      text-align: left;
    }
    .event-card-thumb {
      position: relative;
      aspect-ratio: 16 / 10;
      border: 2px solid rgba(255, 255, 255, .18);
      display: block;
      margin-bottom: .75rem;
      overflow: hidden;
      transition: border-color .25s var(--ease-out), transform .25s var(--ease-out);
    }
    .event-card-thumb img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform .55s var(--ease-out);
    }
    .event-card:hover .event-card-thumb,
    .event-card.active .event-card-thumb {
      border-color: var(--gold);
      transform: translateY(-2px);
    }
    .event-card:hover img,
    .event-card.active img {
      transform: scale(1.045);
    }
    .event-card-name {
      color: var(--white);
      display: block;
      font-size: .88rem;
      font-weight: 800;
      line-height: 1.35;
      text-shadow: 0 2px 12px rgba(0, 0, 0, .45);
    }
    .event-card-desc {
      color: rgba(255, 255, 255, .72);
      display: block;
      font-size: .75rem;
      line-height: 1.4;
      margin-top: .3rem;
    }

    /* ── Dining ── */
    .dining-preview {
      background: var(--cream);
      overflow: hidden;
      padding: clamp(4.5rem, 8vw, 7rem) 0;
    }
    .dining-header {
      margin: 0 auto clamp(2rem, 4vw, 3rem);
      max-width: 760px;
      padding: 0 1.5rem;
      text-align: center;
    }
    .dining-title {
      color: color-mix(in srgb, var(--brand-black) 78%, var(--brown));
      font-family: var(--font-sans);
      font-size: clamp(2rem, 4vw, 3.25rem);
      font-weight: 700;
      letter-spacing: .04em;
      line-height: 1;
      margin: 0 0 1rem;
      text-transform: uppercase;
    }
    .dining-subtitle {
      color: rgba(74, 36, 0, .74);
      font-size: clamp(.95rem, 1.25vw, 1.08rem);
      line-height: 1.6;
      margin: 0;
    }
    .dining-carousel {
      margin: 0 auto;
      max-width: 1180px;
      overflow: hidden;
      padding: 0 1.5rem;
    }
    .dining-strip {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1.25rem, 2.2vw, 1.75rem);
    }
    .dining-card {
      aspect-ratio: 16 / 10;
      background: var(--sand);
      overflow: hidden;
      position: relative;
    }
    .dining-card-layer {
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(1.025);
      transition: opacity 2s ease-in-out, transform 7s ease-out, filter 1.4s ease-in-out;
    }
    .dining-card-layer.active {
      opacity: 1;
      transform: scale(1.01);
    }
    .dining-card img {
      display: block;
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
    .dining-card:hover .dining-card-layer.active {
      filter: saturate(.96) contrast(.98) brightness(.94);
      transform: scale(1.025);
    }
    .dining-actions {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      padding: 0 1.5rem;
    }
    .dining-full-link {
      align-items: center;
      background: var(--brown);
      color: var(--white);
      display: inline-flex;
      font-family: var(--font-sans);
      font-size: .72rem;
      font-weight: 800;
      justify-content: center;
      letter-spacing: .09em;
      min-height: 46px;
      min-width: 150px;
      padding: .85rem 1.25rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: background .25s var(--ease-out), color .25s var(--ease-out), transform .25s var(--ease-out);
    }
    .dining-full-link:hover {
      background: var(--brown-dark);
      color: var(--peach);
      transform: translateY(-2px);
    }

    /* ── Activities ── */
    .activities-showcase {
      position: relative;
      min-height: clamp(560px, 68vw, 760px);
      overflow: hidden;
      background: var(--brown-dark);
      color: var(--white);
      isolation: isolate;
    }
    .activities-showcase-bg {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale(1.045);
      transition: opacity 2.2s ease-in-out, transform 8s ease-out;
      filter: saturate(.92) contrast(.95) brightness(.92);
      z-index: -3;
    }
    .activities-showcase-bg.active {
      opacity: 1;
      transform: scale(1.015);
    }
    .activities-showcase::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(74, 22, 6, .1) 0%, rgba(74, 22, 6, .08) 34%, rgba(74, 22, 6, .02) 72%),
        linear-gradient(180deg, rgba(0, 0, 0, .02) 0%, rgba(74, 22, 6, .1) 100%);
      z-index: -2;
      pointer-events: none;
    }
    .activities-showcase-content {
      width: min(1180px, calc(100% - 3rem));
      min-height: inherit;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: clamp(4.5rem, 8vw, 7rem) 0;
    }
    .activities-showcase-kicker {
      color: var(--gold);
      font-size: .68rem;
      font-weight: 700;
      letter-spacing: .22em;
      margin: 0 0 .85rem;
      text-transform: uppercase;
      text-shadow: 0 5px 18px rgba(0, 0, 0, .35);
    }
    .activities-showcase-title {
      color: var(--gold);
      font-family: var(--font-serif);
      font-size: clamp(2.25rem, 4.5vw, 4.4rem);
      font-weight: 600;
      letter-spacing: 0;
      line-height: 1;
      margin: 0 0 1.2rem;
      max-width: 720px;
      text-transform: uppercase;
      text-shadow: 0 8px 26px rgba(0, 0, 0, .38);
    }
    .activities-showcase-desc {
      color: rgba(255, 255, 255, .88);
      font-size: clamp(.92rem, 1.05vw, 1rem);
      font-weight: 600;
      line-height: 1.7;
      margin: 0 0 1.7rem;
      max-width: 600px;
      text-shadow: 0 5px 18px rgba(0, 0, 0, .42);
    }
    .activities-full-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      min-height: 48px;
      padding: .9rem 1.7rem;
      background: var(--brand-primary);
      color: var(--brand-black);
      font-family: var(--font-sans);
      font-size: .72rem;
      font-weight: 800;
      letter-spacing: .13em;
      text-decoration: none;
      text-transform: uppercase;
      transition: background .25s var(--ease-out), transform .25s var(--ease-out), color .25s var(--ease-out);
    }
    .activities-full-link:hover {
      background: var(--gold);
      color: var(--brown-dark);
      transform: translateY(-2px);
    }
    .activities-card-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(130px, 1fr));
      gap: clamp(1rem, 2vw, 1.75rem);
      margin-top: clamp(1.5rem, 3vw, 2.25rem);
      max-width: 620px;
    }
    .activity-card {
      appearance: none;
      border: 0;
      background: transparent;
      color: var(--white);
      cursor: pointer;
      padding: 0;
      text-align: left;
    }
    .activity-card-thumb {
      position: relative;
      aspect-ratio: 16 / 10;
      border: 2px solid rgba(255, 255, 255, .18);
      display: block;
      margin-bottom: .75rem;
      overflow: hidden;
      transition: border-color .25s var(--ease-out), transform .25s var(--ease-out);
    }
    .activity-card-thumb img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform .55s var(--ease-out);
    }
    .activity-card:hover .activity-card-thumb,
    .activity-card.active .activity-card-thumb {
      border-color: var(--gold);
      transform: translateY(-2px);
    }
    .activity-card:hover img,
    .activity-card.active img {
      transform: scale(1.045);
    }
    .activity-card-name {
      color: var(--white);
      display: block;
      font-size: .88rem;
      font-weight: 800;
      line-height: 1.35;
      text-shadow: 0 2px 12px rgba(0, 0, 0, .45);
    }
    .activity-card-desc {
      color: rgba(255, 255, 255, .72);
      display: block;
      font-size: .75rem;
      line-height: 1.4;
      margin-top: .3rem;
    }

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
      .about-grid { grid-template-columns: 1fr; }
      .rooms-grid { grid-template-columns: 1fr; }
      .dining-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .dining-card:nth-child(3) { display: none; }
      .reviews-grid { grid-template-columns: 1fr; }
      .section { padding: 4rem 1.25rem; }
      .events-showcase-content { width: min(100% - 2rem, 720px); }
      .events-card-row { max-width: 100%; }
      .activities-showcase-content { width: min(100% - 2rem, 720px); }
      .activities-card-row { max-width: 100%; }
    }

    @media (max-width: 640px) {
      .dining-preview { padding: 4rem 0; }
      .dining-strip { grid-template-columns: 1fr; gap: .85rem; }
      .dining-card { aspect-ratio: 4 / 3; }
      .dining-card:nth-child(2),
      .dining-card:nth-child(3) { display: none; }
      .room-card { height: auto !important; }
      .room-card-actions { flex-direction: column; gap: .65rem; }
      .room-card-action { width: 100%; }
      .events-showcase { min-height: auto; }
      .events-showcase-content { padding: 4rem 0; }
      .events-card-row { grid-template-columns: 1fr; gap: 1rem; }
      .event-card { display: grid; grid-template-columns: 116px minmax(0, 1fr); gap: .9rem; align-items: center; }
      .event-card-thumb { margin-bottom: 0; }
      .activities-showcase { min-height: auto; }
      .activities-showcase-content { padding: 4rem 0; }
      .activities-card-row { grid-template-columns: 1fr; gap: 1rem; }
      .activity-card { display: grid; grid-template-columns: 116px minmax(0, 1fr); gap: .9rem; align-items: center; }
      .activity-card-thumb { margin-bottom: 0; }
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
            <img src={`${S3_BASE}/About2.jpeg`} alt="Resort" className="mosaic-img-main" />
            <img src={`${S3_BASE}/Superior Room2.jpeg`} alt="Dining" className="mosaic-img-accent" />
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
             Every detail is designed to create unforgettable memories from elegant accommodations and exceptional dining to modern conference facilities for corporate meetings, seminars, workshops, and special events.Our dedicated team and premium amenities ensure every business event and celebration is seamless, productive, and memorable.
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
  {
    id: 1,
    name: "Standard Room",
    category: "Comfort",
    price: "From Kshs. 10,000",
    image: `${S3_BASE}/Standard Room1.jpeg`,
    anchor: "standard-double-room",
    guests: "2 Guests",
    size: "30 m2",
  },
  {
    id: 2,
    name: "Twin Room",
    category: "Standard",
    price: "From Kshs. 10,000",
    image: `${S3_BASE}/Twin Room1.jpeg`,
    anchor: "twin-room",
    guests: "2 Guests",
    size: "26 m2",
  },
  {
    id: 3,
    name: "Superior Room",
    category: "Luxury",
    price: "From Kshs. 12,000",
    image: `${S3_BASE}/Superior Room1.jpeg`,
    anchor: "superior-room",
    guests: "2 Guests",
    size: "35 m2",
  },
];

function RoomsPreview() {
  return (
    <section id="rooms" className="rooms-preview">
      <div className="rooms-preview-header fade-in">
        <h2 className="rooms-preview-title">ROOMS</h2>
        <p className="rooms-preview-subtitle">Your private retreat at Enchula Resort</p>
      </div>

      <div className="rooms-grid fade-in">
        {roomsPreviewData.map((r) => (
          <article className="room-card" key={r.id}>
            <div className="room-card-media">
              <img src={r.image} alt={r.name} className="room-card-img" />
            </div>
            <h3 className="room-card-title">{r.name}</h3>
            <div className="room-card-meta">
              <span className="room-meta-item">
                <Users className="room-meta-icon" size={20} strokeWidth={2.2} />
                {r.guests}
              </span>
              <span className="room-meta-item">
                <Maximize2 className="room-meta-icon" size={18} strokeWidth={2.2} />
                {r.size}
              </span>
            </div>
            <p className="room-card-price">{r.price}</p>
            <div className="room-card-actions">
              <a className="room-card-action" href={`/rooms#${r.anchor}`}>
                View More
              </a>
              <a className="room-card-action" href="/booking">
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── Events ──────────────────────────────────────────────────────────────────
const eventsData = [
  {
    name: "Retreats & Conferences",
    desc: "Focused, productive gatherings",
    detail:
      "Host strategy sessions, board retreats, workshops, and conferences in calm resort spaces designed for productive conversations and polished coordination.",
    photos: [
      { src: `${S3_BASE}/Conferences.jpeg`, title: "Retreat Sessions" },
      { src: `${S3_BASE}/Conferences2.jpeg`, title: "Conference Spaces" },
      { src: `${S3_BASE}/Conferences3.jpeg`, title: "Focused Gatherings" },
    ],
  },
  {
    name: "Corporate & Social",
    desc: "Tailored events & celebrations",
    detail:
      "From company functions and product launches to weddings, parties, and private celebrations, the team handles details with warmth and clear organization.",
    photos: [
      { src: `${S3_BASE}/Events1.jpeg`,  title: "Corporate Events" },
      { src: `${S3_BASE}/Image.jpeg`,   title: "Social Gatherings" },
      { src: `${S3_BASE}/Image2.jpeg`,  title: "Celebrations" },
    ],
  },
  {
    name: "Team Building",
    desc: "Inspiring nature-based activities",
    detail:
      "Bring teams together for active, memorable resort experiences that balance connection, movement, meals, and time away from the usual office rhythm.",
    photos: [
      { src: `${S3_BASE}/Team2.jpeg`, title: "Group Activities" },
    ],
  },
];

function Events() {
  const [active, setActive] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const activeEvent = eventsData[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((currentPhoto) => {
        if (currentPhoto + 1 < activeEvent.photos.length) {
          return currentPhoto + 1;
        }

        setActive((currentEvent) => (currentEvent + 1) % eventsData.length);
        return 0;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [active, activeEvent.photos.length]);

  const handleEventSelect = (index: number) => {
    setActive(index);
    setActivePhoto(0);
  };

  return (
    <section id="events" className="events-showcase fade-in" aria-label="Conferences and events">
      {eventsData.map((event, eventIndex) =>
        event.photos.map((photo, photoIndex) => (
          <img
            key={`${event.name}-${photo.src}`}
            src={photo.src}
            alt={photo.title}
            className={`events-showcase-bg ${
              eventIndex === active && photoIndex === activePhoto ? "active" : ""
            }`}
            loading={eventIndex === 0 && photoIndex === 0 ? "eager" : "lazy"}
          />
        ))
      )}

      <div className="events-showcase-content">
        <p className="events-showcase-kicker">Gatherings at Enchula Resort</p>
        <h2 className="events-showcase-title">Conferences &amp; Events</h2>
        <p className="events-showcase-desc">{activeEvent.detail}</p>
        <a href="/events" className="events-full-link">
          Discover More
        </a>

        <div className="events-card-row" aria-label="Event subsections">
          {eventsData.map((event, index) => (
            <button
              type="button"
              key={event.name}
              className={`event-card ${index === active ? "active" : ""}`}
              onClick={() => handleEventSelect(index)}
            >
              <span className="event-card-thumb">
                <img src={event.photos[0].src} alt={event.photos[0].title} loading="lazy" />
              </span>
              <span>
                <span className="event-card-name">{event.name}</span>
                <span className="event-card-desc">{event.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dining ──────────────────────────────────────────────────────────────────
function Dining() {
  const items = [
    { src: `${S3_BASE}/Dining1.jpeg`, alt: "Dining at Enchula Resort" },
    { src: `${S3_BASE}/Dining2.jpeg`, alt: "Lounge dining at Enchula Resort" },
    { src: `${S3_BASE}/Dining6.jpeg`, alt: "Dining space at Enchula Resort" },
    { src: `${S3_BASE}/Dining7.jpeg`, alt: "Breakfast at Enchula Resort" },
    { src: `${S3_BASE}/Dining5.jpeg`, alt: "Restaurant table setting at Enchula Resort" },
    { src: `${S3_BASE}/Image7.jpeg`, alt: "Resort dining detail at Enchula Resort" },
    { src: `${S3_BASE}/Image8.jpeg`, alt: "Bar lounge at Enchula Resort" },
    { src: `${S3_BASE}/Image9.jpeg`, alt: "Signature restaurant at Enchula Resort" },
    { src: `${S3_BASE}/Dining3.jpeg`, alt: "Dining table detail at Enchula Resort" },
  ];
  const [activeDiningImage, setActiveDiningImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDiningImage((current) => (current + 1) % items.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const diningSlots = [0, 1, 2];

  return (
    <section id="dining" className="dining-preview">
      <div className="dining-header fade-in">
        <h2 className="dining-title">Dining &amp; Bars</h2>
        <p className="dining-subtitle">Where every meal becomes an occasion</p>
      </div>

      <div className="dining-carousel fade-in">
        <div className="dining-strip">
          {diningSlots.map((slot) => (
            <div key={slot} className="dining-card">
              {items.map((d, index) => (
                <div
                  key={`${slot}-${d.src}`}
                  className={`dining-card-layer ${
                    index === (activeDiningImage + slot) % items.length ? "active" : ""
                  }`}
                >
                  <img src={d.src} alt={d.alt} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dining-actions fade-in">
        <a href="/dinings" className="dining-full-link">
          View More
        </a>
      </div>
    </section>
  );
}

// ─── Activities ──────────────────────────────────────────────────────────────
function Activities() {
  const items = [
    { title: "Swimming Pool",    desc: "Take a refreshing dip or lounge by our sparkling pool, perfect for relaxation and family fun in the warm Kenyan sun.", images: [`${S3_BASE}/Swimmingpool.jpeg`] },
    { title: "Games & Recreation", desc: "Enjoy a variety of indoor and outdoor games for all ages — from board games and sports to evening tournaments.",       images: [`${S3_BASE}/Games1.jpeg`, `${S3_BASE}/Games2.jpeg`, `${S3_BASE}/Games3.jpeg`] },
    { title: "Kids Activities",  desc: "Creative and supervised activities designed to keep children entertained, engaged, and inspired throughout their stay.", images: [`${S3_BASE}/IMG_2277.webp`] },
  ];
  return (
    <section id="activities" className="section" style={{ background: "var(--cream)", padding: "7rem 0" }}>
      <div className="section-inner" style={{ padding: "0 1.5rem", marginBottom: "4rem" }}>
        <p className="section-label fade-in">Leisure</p>
        <h2 className="section-title fade-in">Activities &amp; <em>Experiences</em></h2>
        <a href="/experience" className="activities-full-link fade-in">
          View Experiences Page
        </a>
      </div>
      <div className="activities-list fade-in">
        {items.map(a => (
          <div key={a.title} className="activity-row">
            <div className={`activity-img ${a.images.length > 1 ? "activity-img-grid" : ""}`}>
              {a.images.map((src, index) => (
                <img key={src} src={src} alt={`${a.title} ${index + 1}`} loading="lazy" />
              ))}
            </div>
            <div className="activity-content">
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
function ActivitiesShowcase() {
  const items = [
    {
      title: "Swimming Pool",
      desc: "Poolside leisure",
      detail:
        "Take a refreshing dip or lounge by our sparkling pool, perfect for relaxation and family fun in the warm Kenyan sun.",
      images: [`${S3_BASE}/Swimmingpool.jpeg`, `${S3_BASE}/Image39.jpeg`],
    },
    {
      title: "Games & Recreation",
      desc: "Play and unwind",
      detail:
        "Enjoy a variety of indoor and outdoor games for all ages, from board games and sports to evening tournaments.",
      images: [`${S3_BASE}/Games1.jpeg`, `${S3_BASE}/Games2.jpeg`, `${S3_BASE}/Games3.jpeg`],
    },
    {
      title: "Kids Activities",
      desc: "Young explorers",
      detail:
        "Creative and supervised activities designed to keep children entertained, engaged, and inspired throughout their stay.",
      images: [`${S3_BASE}/IMG_2277.webp`],
    },
  ];
  const [activeActivity, setActiveActivity] = useState(0);
  const [activeActivityImage, setActiveActivityImage] = useState(0);
  const activeItem = items[activeActivity];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveActivityImage((currentImage) => {
        if (currentImage + 1 < activeItem.images.length) {
          return currentImage + 1;
        }

        setActiveActivity((currentActivity) => (currentActivity + 1) % items.length);
        return 0;
      });
    }, 3000);

    return () => window.clearInterval(timer);
  }, [activeActivity, activeItem.images.length, items.length]);

  const handleActivitySelect = (index: number) => {
    setActiveActivity(index);
    setActiveActivityImage(0);
  };

  return (
    <section
      id="activities"
      className="activities-showcase fade-in"
      aria-label="Activities and experiences"
    >
      {items.map((item, itemIndex) =>
        item.images.map((image, imageIndex) => (
          <img
            key={`${item.title}-${image}`}
            src={image}
            alt={`${item.title} at Enchula Resort ${imageIndex + 1}`}
            className={`activities-showcase-bg ${
              itemIndex === activeActivity && imageIndex === activeActivityImage ? "active" : ""
            }`}
            loading={itemIndex === 0 && imageIndex === 0 ? "eager" : "lazy"}
          />
        ))
      )}

      <div className="activities-showcase-content">
        <p className="activities-showcase-kicker">Leisure at Enchula Resort</p>
        <h2 className="activities-showcase-title">Activities &amp; Experiences</h2>
        <p className="activities-showcase-desc">{activeItem.detail}</p>
        <a href="/experience" className="activities-full-link">
          Discover More
        </a>

        <div className="activities-card-row" aria-label="Activity subsections">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`activity-card ${index === activeActivity ? "active" : ""}`}
              onClick={() => handleActivitySelect(index)}
            >
              <span className="activity-card-thumb">
                <img src={item.images[0]} alt={`${item.title} at Enchula Resort`} loading="lazy" />
              </span>
              <span>
                <span className="activity-card-name">{item.title}</span>
                <span className="activity-card-desc">{item.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <ActivitiesShowcase />
      <div className="divider" />
      <Reviews />
    </div>
  );
}
