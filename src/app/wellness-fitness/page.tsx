"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Dumbbell, HeartPulse, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const fitnessServices = [
  {
    name: "Equipment",
    kicker: "Strength and cardio",
    image: `${S3_BASE}/Image18.jpeg`,
    description:
      "Treadmills, ellipticals, bikes, free weights, resistance machines, and practical spaces for focused training.",
    features: ["Cardio machines", "Free weights", "Resistance training"],
  },
  {
    name: "Aerobic",
    kicker: "Guided movement",
    image: `${S3_BASE}/Image15.jpeg`,
    description:
      "Group fitness sessions including yoga, pilates, HIIT, and other energizing classes based on the daily schedule.",
    features: ["Group classes", "Yoga and pilates", "HIIT sessions"],
  },
  {
    name: "Personal Training",
    kicker: "Coached progress",
    image: `${S3_BASE}/Image19.jpeg`,
    description:
      "Certified trainers are available for personalized fitness plans, technique support, and guided coaching.",
    features: ["Personal coaching", "Custom plans", "Technique support"],
  },
];

const wellnessServices = [
  {
    name: "Massage Therapy",
    kicker: "Restore",
    image: `${S3_BASE}/Image32.jpg`,
    description: "Relaxing massage treatments tailored to help you unwind, recover, and reset.",
  },
  {
    name: "Sauna and Steam Room",
    kicker: "Detox",
    image: `${S3_BASE}/Image31.jpg`,
    description: "Slow down and release tension in warm wellness spaces made for deep relaxation.",
  },
];

const gallery = [
  { src: `${S3_BASE}/Image10.jpeg`, alt: "Gym at Enchula Resort" },
  { src: `${S3_BASE}/Image11.jpeg`, alt: "Fitness equipment at Enchula Resort" },
  { src: `${S3_BASE}/Image15.jpeg`, alt: "Massage therapy at Enchula Resort" },
  { src: `${S3_BASE}/Image31.jpg`, alt: "Sauna and steam room at Enchula Resort" },
  { src: `${S3_BASE}/Image17.jpeg`, alt: "Spa treatment space at Enchula Resort" },
  { src: `${S3_BASE}/Image19.jpeg`, alt: "Spa treatment space at Enchula Resort" },
  { src: `${S3_BASE}/Image18.jpeg`, alt: "Spa treatment space at Enchula Resort" },
];

const journeyItems = [
  { label: "Fitness", detail: "Cardio, weights and coaching", Icon: Dumbbell },
  { label: "Recovery", detail: "Massage, sauna and spa care", Icon: HeartPulse },
  { label: "Reset", detail: "Training, recovery and relaxation", Icon: Leaf },
  { label: "Access", detail: "Day use and membership options", Icon: CalendarCheck },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --wp-serif: 'Cormorant Garamond', Georgia, serif;
    --wp-sans: 'Jost', system-ui, sans-serif;
    --wp-line: color-mix(in srgb, var(--brand-primary) 24%, transparent);
    --wp-muted: color-mix(in srgb, var(--brand-gray) 70%, var(--brand-background));
    --wp-soft: color-mix(in srgb, var(--brand-background) 88%, var(--text-on-dark));
    --wp-ease: cubic-bezier(0.16, 1, 0.3, 1);
  }

  .wp-root {
    --brand-primary: #B99A66;
    --brand-black: #4A2400;
    --brand-gray: #5C4033;
    --brand-background: #FAF6F0;
    --brand-light-brown: #D2BB9E;
    --text-on-dark: #FFFFFF;
    --wp-blush: #D7BFA8;
    --wp-peach: #FFD3A3;
    min-height: 100vh;
    background: var(--brand-background);
    color: var(--brand-black);
    font-family: var(--wp-sans);
    overflow-x: hidden;
  }

  .wp-root * {
    box-sizing: border-box;
  }

  .wp-hero {
    position: relative;
    min-height: clamp(520px, 68vh, 760px);
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background: var(--brand-black);
  }

  .wp-hero-img {
    object-fit: cover;
    filter: saturate(.92) contrast(.95) brightness(.92);
    transform: scale(1.02);
  }

  .wp-hero-content {
    position: relative;
    z-index: 2;
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: clamp(4rem, 9vw, 7rem) 0 clamp(3.25rem, 7vw, 5.5rem);
    color: var(--text-on-dark);
    text-align: left;
  }

  .wp-hero-content .wp-eyebrow {
    justify-content: flex-start;
    color: var(--text-on-dark);
  }

  .wp-hero-content .wp-title {
    max-width: 820px;
    margin: 0;
    color: var(--text-on-dark);
    text-shadow: 0 16px 46px color-mix(in srgb, var(--brand-black) 42%, transparent);
  }

  .wp-hero-content .wp-title em {
    color: color-mix(in srgb, var(--brand-primary) 78%, var(--text-on-dark));
    font-style: italic;
  }

  .wp-hero-content .wp-intro {
    max-width: 650px;
    margin-left: 0;
    margin-right: 0;
    color: color-mix(in srgb, var(--text-on-dark) 84%, var(--brand-primary));
  }

  .wp-hero-content .wp-actions {
    justify-content: flex-start;
  }

  .wp-hero-content .wp-btn-secondary {
    border-color: color-mix(in srgb, var(--text-on-dark) 52%, transparent);
    color: var(--text-on-dark);
  }

  .wp-hero-content .wp-btn-secondary:hover {
    background: var(--text-on-dark);
    color: var(--brand-black);
  }

  .wp-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
  }

  .wp-kicker,
  .wp-eyebrow {
    color: var(--brand-primary);
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  .wp-eyebrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .85rem;
    margin-bottom: 1.15rem;
  }

  .wp-eyebrow::before,
  .wp-eyebrow::after,
  .wp-section-heading .wp-kicker::after {
    content: '';
    display: block;
    width: 34px;
    height: 1px;
    background: var(--brand-primary);
  }

  .wp-title,
  .wp-heading,
  .wp-feature-title,
  .wp-card-title,
  .wp-quote p,
  .wp-cta h2 {
    font-family: var(--wp-serif);
    font-weight: 400;
    letter-spacing: 0;
  }

  .wp-title {
    max-width: 880px;
    margin: 0 auto;
    color: var(--brand-black);
    font-size: clamp(3rem, 7vw, 6.5rem);
    line-height: .96;
    overflow-wrap: break-word;
  }

  .wp-title em,
  .wp-heading em {
    color: var(--brand-primary);
    font-style: italic;
  }

  .wp-intro {
    max-width: 740px;
    margin: 1.5rem auto 2rem;
    color: var(--wp-muted);
    font-size: clamp(1rem, 1.4vw, 1.15rem);
    line-height: 1.9;
  }

  .wp-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .85rem;
  }

  .wp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: .9rem 1.5rem;
    border: 1px solid var(--brand-primary);
    background: var(--brand-primary);
    color: var(--brand-black);
    font-size: .72rem;
    font-weight: 800;
    letter-spacing: .13em;
    text-decoration: none;
    text-transform: uppercase;
    transition: transform .25s var(--wp-ease), background .25s var(--wp-ease), color .25s var(--wp-ease);
  }

  .wp-btn:hover {
    transform: translateY(-2px);
    background: var(--wp-peach);
  }

  .wp-btn-secondary {
    background: transparent;
    color: var(--brand-black);
  }

  .wp-btn-secondary:hover {
    background: var(--brand-black);
    border-color: var(--brand-black);
    color: var(--text-on-dark);
  }

  .wp-section {
    padding: clamp(4.5rem, 8vw, 7rem) 0;
    border-top: 1px solid var(--wp-line);
  }

  .wp-wellness-intro-section {
    width: min(1120px, calc(100% - 3rem));
    padding: clamp(2.75rem, 5vw, 4rem) 0 clamp(3.75rem, 7vw, 5.5rem);
    border-top: 0;
    text-align: center;
  }

  .wp-editorial-title {
    color: color-mix(in srgb, var(--brand-black) 84%, var(--brand-gray));
    font-family: var(--wp-sans);
    font-size: clamp(1.9rem, 3.2vw, 2.35rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.08;
    margin: 0 0 1.55rem;
    text-transform: uppercase;
  }

  .wp-editorial-lead {
    max-width: 960px;
    margin: 0 auto 1.15rem;
    color: color-mix(in srgb, var(--brand-black) 74%, var(--brand-gray));
    font-size: clamp(1.05rem, 1.65vw, 1.3rem);
    line-height: 1.48;
  }

  .wp-editorial-copy {
    max-width: 980px;
    margin: 0 auto .95rem;
    color: color-mix(in srgb, var(--brand-black) 76%, var(--brand-background));
    font-size: clamp(.86rem, 1vw, .96rem);
    line-height: 1.7;
  }

  .wp-editorial-copy strong {
    color: var(--brand-black);
  }

  .wp-journey-heading {
    margin: clamp(2.2rem, 4vw, 3rem) auto 1.55rem;
    text-align: center;
  }

  .wp-journey-heading h3 {
    color: color-mix(in srgb, var(--brand-black) 84%, var(--brand-gray));
    font-family: var(--wp-sans);
    font-size: clamp(1.45rem, 2.4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.1;
    margin: 0 0 .75rem;
    text-transform: uppercase;
  }

  .wp-journey-heading p {
    color: color-mix(in srgb, var(--brand-black) 72%, var(--brand-background));
    font-size: .92rem;
    font-weight: 700;
    margin: 0;
  }

  .wp-section-heading {
    max-width: 900px;
    margin: 0 auto clamp(2.75rem, 5vw, 4rem);
    text-align: center;
  }

  .wp-section-heading .wp-kicker {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .wp-heading {
    margin: 0;
    color: var(--brand-black);
    font-size: clamp(2.45rem, 5vw, 4.85rem);
    line-height: 1;
    overflow-wrap: break-word;
  }

  .wp-copy {
    color: var(--wp-muted);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .wp-section-heading .wp-copy {
    max-width: 720px;
    margin: 1.25rem auto 0;
  }

  .wp-feature {
    display: grid;
    gap: clamp(2.25rem, 4vw, 3.5rem);
  }

  .wp-feature-content {
    display: grid;
    grid-template-columns: minmax(0, .86fr) minmax(400px, 1.14fr);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: start;
    padding-bottom: clamp(1.5rem, 4vw, 2.75rem);
  }

  .wp-feature-content .wp-kicker {
    grid-column: 1 / -1;
  }

  .wp-feature-title {
    max-width: 14ch;
    margin: 0;
    color: var(--brand-black);
    font-size: clamp(2.2rem, 4.5vw, 4.1rem);
    line-height: 1.02;
  }

  .wp-feature-content > .wp-copy {
    max-width: 62ch;
    padding-top: .35rem;
  }

  .wp-journey {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--wp-line);
    border-bottom: 1px solid var(--wp-line);
  }

  .wp-wellness-intro-section .wp-journey {
    width: min(880px, 100%);
    margin: 0 auto;
    border-top: 0;
    border-bottom: 0;
  }

  .wp-journey-item {
    min-height: 138px;
    padding: 1.45rem 1.2rem 1.45rem 1.85rem;
    border-right: 1px solid var(--wp-line);
  }

  .wp-wellness-intro-section .wp-journey-item {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .75rem;
    min-height: auto;
    padding: .45rem 1.45rem;
    text-align: left;
  }

  .wp-journey-item:last-child {
    border-right: 0;
  }

  .wp-journey-item::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin-bottom: 1.1rem;
    border-radius: 999px;
    background: var(--brand-primary);
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--brand-primary) 16%, transparent);
  }

  .wp-wellness-intro-section .wp-journey-item::before {
    display: none;
  }

  .wp-journey-icon {
    width: 30px;
    height: 30px;
    color: var(--brand-primary);
    stroke-width: 2.4;
  }

  .wp-journey-item strong {
    display: block;
    color: var(--brand-black);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: .13em;
    margin-bottom: .5rem;
    text-transform: uppercase;
  }

  .wp-journey-item span {
    color: var(--brand-gray);
    font-family: var(--wp-serif);
    font-size: clamp(1.2rem, 1.65vw, 1.45rem);
    line-height: 1.16;
  }

  .wp-wellness-intro-section .wp-journey-item strong {
    margin-bottom: .2rem;
    letter-spacing: .02em;
    text-transform: none;
  }

  .wp-wellness-intro-section .wp-journey-item span {
    color: color-mix(in srgb, var(--brand-black) 74%, var(--brand-background));
    font-family: var(--wp-sans);
    font-size: .86rem;
    line-height: 1.35;
  }

  .wp-wellness-carousel {
    margin: clamp(2.3rem, 4vw, 3.2rem) auto 0;
    max-width: 1120px;
    overflow: hidden;
  }

  .wp-wellness-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }

  .wp-wellness-carousel-card {
    aspect-ratio: 16 / 9;
    background: var(--wp-soft);
    overflow: hidden;
    position: relative;
  }

  .wp-wellness-carousel-layer {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: scale(1.025);
    transition: opacity 2s ease-in-out, transform 7s ease-out, filter 1.4s ease-in-out;
  }

  .wp-wellness-carousel-layer.active {
    opacity: 1;
    transform: scale(1.01);
  }

  .wp-wellness-carousel-layer img {
    object-fit: cover;
  }

  .wp-wellness-carousel-card:hover .wp-wellness-carousel-layer.active {
    filter: saturate(.96) contrast(.98) brightness(.94);
    transform: scale(1.025);
  }

  .wp-gallery {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-auto-rows: clamp(128px, 12vw, 178px);
    gap: clamp(.7rem, 1.35vw, 1rem);
  }

  .wp-gallery-item {
    position: relative;
    min-height: 0;
    overflow: hidden;
    border-radius: 8px;
    background: var(--brand-light-brown);
  }

  .wp-gallery-item:first-child {
    grid-column: span 5;
    grid-row: span 2;
  }

  .wp-gallery-item:nth-child(2) {
    grid-column: span 4;
    grid-row: span 2;
  }

  .wp-gallery-item:nth-child(3),
  .wp-gallery-item:nth-child(4) {
    grid-column: span 3;
  }

  .wp-gallery-item:nth-child(5),
  .wp-gallery-item:nth-child(6),
  .wp-gallery-item:nth-child(7) {
    grid-column: span 4;
  }

  .wp-img {
    object-fit: cover;
    filter: saturate(.92) contrast(.96) brightness(.98);
    transition: transform 1s var(--wp-ease), filter .45s var(--wp-ease);
  }

  .wp-gallery-item:hover .wp-img,
  .wp-card:hover .wp-img {
    transform: scale(1.035);
    filter: saturate(1) contrast(1) brightness(1);
  }

  .wp-card-grid,
  .wp-wellness-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
  }

  .wp-split-section {
    width: min(1275px, calc(100% - 4.5rem));
    padding-top: clamp(2.5rem, 5vw, 4rem);
  }

  .wp-split-section .wp-section-heading {
    max-width: 920px;
    margin-bottom: clamp(2.4rem, 4vw, 3.25rem);
  }

  .wp-split-list {
    display: grid;
    gap: clamp(3rem, 6vw, 4.5rem);
  }

  .wp-split-row {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
    gap: clamp(2.25rem, 4vw, 3.75rem);
    align-items: center;
    min-height: clamp(360px, 46vh, 430px);
    background: transparent;
    border: 0;
    border-radius: 0;
    overflow: visible;
    transition: none;
  }

  .wp-split-row:hover {
    transform: none;
    box-shadow: none;
  }

  .wp-split-media {
    position: relative;
    height: 100%;
    min-height: clamp(360px, 46vh, 430px);
    aspect-ratio: auto;
    overflow: hidden;
    background: var(--brand-light-brown);
  }

  .wp-split-row:hover .wp-img {
    transform: scale(1.035);
    filter: saturate(1) contrast(1) brightness(1);
  }

  .wp-split-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(.75rem, 2vw, 1.5rem) 0;
  }

  .wp-split-detail .wp-card-title {
    color: var(--brand-black);
    font-family: var(--wp-sans);
    font-size: clamp(1.65rem, 2.2vw, 2.15rem);
    font-weight: 600;
    letter-spacing: .04em;
    line-height: 1.28;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  .wp-split-detail .wp-card-text {
    color: color-mix(in srgb, var(--brand-black) 72%, var(--brand-background));
    font-size: clamp(.96rem, 1.2vw, 1.08rem);
    line-height: 1.72;
  }

  .wp-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .wp-wellness-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wp-card {
    background: var(--wp-soft);
    border: 1px solid var(--wp-line);
    border-radius: 8px;
    overflow: hidden;
    transition: transform .35s var(--wp-ease), box-shadow .35s var(--wp-ease);
  }

  .wp-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 54px color-mix(in srgb, var(--brand-black) 11%, transparent);
  }

  .wp-card-media {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--brand-light-brown);
  }

  .wp-wellness-grid .wp-card-media {
    aspect-ratio: 16 / 10;
  }

  .wp-card-body {
    padding: clamp(1.35rem, 2.5vw, 1.85rem);
  }

  .wp-card-kicker {
    display: block;
    color: var(--brand-primary);
    font-size: .68rem;
    font-weight: 800;
    letter-spacing: .16em;
    margin-bottom: .7rem;
    text-transform: uppercase;
  }

  .wp-card-title {
    color: var(--brand-black);
    font-size: clamp(1.9rem, 2.5vw, 2.35rem);
    line-height: 1.05;
    margin: 0 0 .85rem;
  }

  .wp-card-text {
    color: var(--wp-muted);
    line-height: 1.75;
    margin: 0;
  }

  .wp-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 0;
    margin: 1.2rem 0 0;
    list-style: none;
  }

  .wp-tags li {
    border: 1px solid var(--wp-line);
    color: var(--brand-gray);
    padding: .48rem .7rem;
    font-size: .74rem;
    letter-spacing: .04em;
  }

  .wp-quote {
    margin-top: clamp(3rem, 6vw, 5rem);
    padding-top: clamp(2rem, 4vw, 3.5rem);
    border-top: 1px solid var(--wp-line);
    text-align: center;
  }

  .wp-quote p {
    max-width: 860px;
    margin: 0 auto 1.2rem;
    color: var(--brand-black);
    font-size: clamp(2rem, 4vw, 3.85rem);
    font-style: italic;
    line-height: 1.08;
  }

  .wp-quote span {
    color: var(--brand-primary);
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .wp-cta {
    margin-top: clamp(3rem, 6vw, 5rem);
    padding: clamp(3rem, 6vw, 4.75rem) clamp(1.5rem, 4vw, 4rem);
    border-radius: 8px;
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--brand-black) 94%, var(--brand-primary)) 0%, var(--brand-black) 100%);
    color: var(--text-on-dark);
    text-align: center;
  }

  .wp-cta h2 {
    max-width: 760px;
    margin: 0 auto 1rem;
    color: var(--text-on-dark);
    font-size: clamp(2.2rem, 4vw, 4rem);
    line-height: 1.05;
  }

  .wp-cta p {
    max-width: 650px;
    margin: 0 auto 1.75rem;
    color: color-mix(in srgb, var(--wp-peach) 78%, var(--text-on-dark));
    line-height: 1.75;
  }

  .wp-cta .wp-btn-secondary {
    border-color: color-mix(in srgb, var(--text-on-dark) 45%, transparent);
    color: var(--text-on-dark);
  }

  .wp-cta .wp-btn-secondary:hover {
    background: var(--text-on-dark);
    color: var(--brand-black);
  }

  @media (max-width: 1080px) {
    .wp-feature-content {
      grid-template-columns: 1fr;
    }

    .wp-feature-title,
    .wp-feature-content > .wp-copy {
      max-width: 760px;
    }

    .wp-journey,
    .wp-card-grid,
    .wp-wellness-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wp-wellness-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wp-wellness-carousel-card:nth-child(3) {
      display: none;
    }

    .wp-journey-item:nth-child(2) {
      border-right: 0;
    }

    .wp-journey-item:nth-child(-n + 2) {
      border-bottom: 1px solid var(--wp-line);
    }
  }

  @media (max-width: 760px) {
    .wp-hero {
      min-height: 62vh;
    }

    .wp-hero-content,
    .wp-section {
      width: min(100% - 2rem, 620px);
    }

    .wp-split-section {
      width: min(100% - 2rem, 720px);
    }

    .wp-wellness-intro-section {
      width: min(100% - 2rem, 620px);
      padding: 3rem 0 3.75rem;
    }

    .wp-hero-content {
      padding: 4rem 0 3.25rem;
      text-align: center;
    }

    .wp-hero-content .wp-eyebrow,
    .wp-hero-content .wp-actions {
      justify-content: center;
    }

    .wp-hero-content .wp-intro {
      margin-left: auto;
      margin-right: auto;
    }

    .wp-section {
      padding: 3.75rem 0;
    }

    .wp-title {
      font-size: clamp(2.35rem, 10.5vw, 3.25rem);
      line-height: 1.05;
    }

    .wp-heading {
      font-size: clamp(2rem, 9vw, 2.8rem);
      line-height: 1.08;
    }

    .wp-feature-title {
      font-size: clamp(2rem, 9vw, 2.75rem);
      line-height: 1.08;
    }

    .wp-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .wp-btn {
      width: 100%;
    }

    .wp-journey,
    .wp-card-grid,
    .wp-wellness-grid {
      grid-template-columns: 1fr;
    }

    .wp-split-row {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .wp-split-row:nth-child(even) {
      grid-template-columns: 1fr;
    }

    .wp-split-row:nth-child(even) .wp-split-media,
    .wp-split-row:nth-child(even) .wp-split-detail {
      order: initial;
    }

    .wp-split-media {
      min-height: 280px;
    }

    .wp-split-detail {
      padding: 0;
    }

    .wp-wellness-strip {
      grid-template-columns: 1fr;
    }

    .wp-wellness-carousel-card {
      aspect-ratio: 4 / 3;
    }

    .wp-wellness-carousel-card:nth-child(2),
    .wp-wellness-carousel-card:nth-child(3) {
      display: none;
    }

    .wp-journey-item,
    .wp-journey-item:nth-child(2) {
      min-height: auto;
      border-right: 0;
      border-bottom: 1px solid var(--wp-line);
      padding: 1.35rem 0;
      text-align: center;
    }

    .wp-wellness-intro-section .wp-journey-item,
    .wp-wellness-intro-section .wp-journey-item:nth-child(2) {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 1rem 0;
      text-align: center;
    }

    .wp-journey-item:last-child {
      border-bottom: 0;
    }

    .wp-journey-item::before {
      margin-left: auto;
      margin-right: auto;
    }

    .wp-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: clamp(118px, 34vw, 170px);
      gap: .6rem;
    }

    .wp-gallery-item:first-child,
    .wp-gallery-item:nth-child(2),
    .wp-gallery-item:nth-child(5) {
      grid-column: span 2;
      grid-row: span 2;
    }

    .wp-gallery-item:nth-child(3),
    .wp-gallery-item:nth-child(4),
    .wp-gallery-item:nth-child(6),
    .wp-gallery-item:nth-child(7) {
      grid-column: span 1;
    }

    .wp-card-media,
    .wp-wellness-grid .wp-card-media {
      aspect-ratio: 4 / 3;
    }
  }
`;

export default function WellnessFitnessPage() {
  const [activeWellnessImage, setActiveWellnessImage] = useState(0);
  const wellnessCarouselSlots = [0, 1, 2];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveWellnessImage((current) => (current + 1) % gallery.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="wellness-fitness" className="wp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="wp-hero" aria-label="Wellness and fitness at Enchula Resort">
        <Image
          src={`${S3_BASE}/Image14.jpeg`}
          alt="Wellness and fitness at Enchula Resort"
          fill
          className="wp-hero-img"
          sizes="100vw"
          priority
        />
        <div className="wp-hero-content">
          <div className="wp-eyebrow">Wellness and fitness</div>
          <h1 className="wp-title">
            Move, restore, and <em>feel renewed</em>
          </h1>
          <div className="wp-actions">
            <Link className="wp-btn" href="/gym-subscriptions">
              View Gym Packages
            </Link>
            <a className="wp-btn wp-btn-secondary" href="#wellness-spaces">
              Explore Wellness
            </a>
          </div>
        </div>
      </div>

      <div id="wellness-spaces" className="wp-section wp-wellness-intro-section">

        <h2 className="wp-editorial-title">Wellness &amp; Fitness</h2>
        <p className="wp-editorial-lead">
          Enchula brings fitness and wellness into one warm, easy-to-use resort experience,
          shaped around movement, recovery, and unhurried reset.
        </p>
        <p className="wp-editorial-copy">
          Start the morning with focused training, ease into a sauna session, or book a soothing
          treatment after a long day. The spaces are practical for residents and resort guests who
          want to stay active while still making time to slow down.
        </p>
        <p className="wp-editorial-copy">
          <strong>Wellness at Enchula is experienced through steady training, calming recovery,
          and thoughtful care in a relaxed resort setting.</strong>
        </p>

        <div className="wp-journey-heading">
          <h3>Our Wellness Journey</h3>
          <p>A natural rhythm of fitness, recovery, reset, and access</p>
        </div>

        <div className="wp-journey" aria-label="Wellness experience overview">
          {journeyItems.map(({ Icon, ...item }) => (
            <div className="wp-journey-item" key={item.label}>
              <Icon className="wp-journey-icon" aria-hidden="true" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="wp-wellness-carousel" aria-label="Wellness and fitness photos">
          <div className="wp-wellness-strip">
            {wellnessCarouselSlots.map((slot) => (
              <div className="wp-wellness-carousel-card" key={slot}>
                {gallery.map((item, index) => (
                  <div
                    className={`wp-wellness-carousel-layer ${
                      index === (activeWellnessImage + slot) % gallery.length ? "active" : ""
                    }`}
                    key={`${slot}-${item.src}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wp-section wp-split-section">
      <div className="wp-section-heading">
          <div>
            <div className="wp-kicker">Fitness facilities</div>
            
          </div>
          
        </div>
        <div className="wp-split-list">
          {fitnessServices.map((service) => (
            <article className="wp-split-row" key={service.name}>
              <div className="wp-split-media">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="wp-img"
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
              </div>
              <div className="wp-split-detail">
                <span className="wp-card-kicker">{service.kicker}</span>
                <h3 className="wp-card-title">{service.name}</h3>
                <p className="wp-card-text">{service.description}</p>
                <ul className="wp-tags">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="wp-section wp-split-section">
        <div className="wp-section-heading">
          <div>
            <div className="wp-kicker">Spa and wellness services</div>
            
          </div>
          
        </div>

        <div className="wp-split-list">
          {wellnessServices.map((service) => (
            <article className="wp-split-row" key={service.name}>
              <div className="wp-split-media">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="wp-img"
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="wp-split-detail">
                <span className="wp-card-kicker">{service.kicker}</span>
                <h3 className="wp-card-title">{service.name}</h3>
                <p className="wp-card-text">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wp-cta">
          <h2>Start with a workout, finish with a reset.</h2>
          <p>
            Explore gym membership options or speak with reception about available spa and wellness
            sessions during your visit.
          </p>
          <div className="wp-actions" style={{ justifyContent: "center" }}>
            <Link className="wp-btn" href="/gym-subscriptions">
              Gym Membership Packages
            </Link>
            <a className="wp-btn wp-btn-secondary" href="tel:+254727000027">
              Call Reception
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
