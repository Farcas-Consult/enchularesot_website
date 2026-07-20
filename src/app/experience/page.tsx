"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, Footprints, Gamepad2, Utensils, Waves } from "lucide-react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const experiences = [
  {
    name: "Swimming Pool",
    kicker: "Poolside leisure",
    image: `${S3_BASE}/Swimmingpool.jpeg`,
    description:
      "Take a refreshing dip, lounge in the warm Kenyan sun, or spend an easy afternoon by the water with family and friends.",
    features: ["Daytime access", "Family friendly", "Poolside lounging"],
  },
  {
    name: "Games and Recreation",
    kicker: "Play and unwind",
    image: `${S3_BASE}/Games1.jpeg`,
    description:
      "Enjoy indoor and outdoor recreation for all ages, from board games and light sports to relaxed resort competitions.",
    features: ["Board games", "Group play", "Evening recreation"],
  },
  {
    name: "Kids Activities",
    kicker: "Young explorers",
    image: `${S3_BASE}/IMG_2277.webp`,
    description:
      "Creative, supervised activities keep children engaged, entertained, and inspired throughout the stay.",
    features: ["Creative play", "Supervised fun", "Family stays"],
  },
  {
    name: "Outdoor Picnics",
    kicker: "Open-air moments",
    image: `${S3_BASE}/Image41.jpeg`,
    description:
      "Settle into scenic grounds for relaxed picnics, casual celebrations, and slow afternoons with resort service close by.",
    features: ["Scenic grounds", "Casual gatherings", "Anytime leisure"],
  },
  {
    name: "Guided Nature Walks",
    kicker: "Nature and calm",
    image: `${S3_BASE}/Image33.jpg`,
    description:
      "Explore the resort surroundings with guides who help guests notice the local landscape, plants, and quiet natural details.",
    features: ["Morning walks", "Local flora", "Guided pace"],
  },
];

const experienceJourney = [
  { label: "Swim", detail: "Poolside leisure and family time", Icon: Waves },
  { label: "Play", detail: "Games and easy recreation", Icon: Gamepad2 },
  { label: "Kids", detail: "Creative supervised activities", Icon: Baby },
  { label: "Picnic", detail: "Open-air meals and gatherings", Icon: Utensils },
  { label: "Walk", detail: "Guided nature and calm", Icon: Footprints },
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

  .xp-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .xp-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .xp-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .xp-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.12) 0%, rgba(74,36,0,.76) 100%),
      linear-gradient(90deg, rgba(74,36,0,.56) 0%, rgba(74,36,0,.08) 62%);
  }

  .xp-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .xp-eyebrow {
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

  .xp-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .xp-title {
    max-width: 820px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .xp-title em {
    color: var(--peach);
    font-style: italic;
  }

  .xp-intro {
    max-width: 650px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .xp-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .xp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    padding: .85rem 1.35rem;
    border: 1px solid color-mix(in srgb, var(--brand-peach) 55%, transparent);
    color: var(--brown-dark);
    background: var(--peach);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
    text-decoration: none;
    transition: transform .25s var(--ease-out), background .25s var(--ease-out), color .25s var(--ease-out);
  }

  .xp-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .xp-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .xp-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .xp-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .xp-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .xp-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .xp-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .xp-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .xp-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .xp-feature {
    background: var(--white);
    border-top: 1px solid rgba(143,95,47,.18);
    border-bottom: 1px solid rgba(143,95,47,.18);
    padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 4rem);
  }

  .xp-editorial-section {
    width: min(1120px, calc(100% - 3rem));
    padding: clamp(2.75rem, 5vw, 4rem) 0 clamp(3.75rem, 7vw, 5.5rem);
    text-align: center;
  }

  .xp-editorial-title {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.9rem, 3.2vw, 2.35rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.08;
    margin: 0 0 1.55rem;
    text-transform: uppercase;
  }

  .xp-editorial-lead {
    max-width: 960px;
    margin: 0 auto 1.15rem;
    color: rgba(74,36,0,.78);
    font-size: clamp(1.05rem, 1.65vw, 1.3rem);
    line-height: 1.48;
  }

  .xp-editorial-copy {
    max-width: 980px;
    margin: 0 auto .95rem;
    color: rgba(74,36,0,.74);
    font-size: clamp(.86rem, 1vw, .96rem);
    line-height: 1.7;
  }

  .xp-editorial-copy strong {
    color: var(--brown-dark);
  }

  .xp-journey-heading {
    margin: clamp(2.2rem, 4vw, 3rem) auto 1.55rem;
    text-align: center;
  }

  .xp-journey-heading h3 {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.45rem, 2.4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.1;
    margin: 0 0 .75rem;
    text-transform: uppercase;
  }

  .xp-journey-heading p {
    color: rgba(74,36,0,.72);
    font-size: .92rem;
    font-weight: 700;
    margin: 0;
  }

  .xp-journey {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    width: min(980px, 100%);
    margin: 0 auto;
  }

  .xp-journey-item {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .75rem;
    padding: .45rem 1.15rem;
    border-right: 1px solid rgba(143,95,47,.24);
    text-align: left;
  }

  .xp-journey-item:last-child {
    border-right: 0;
  }

  .xp-journey-icon {
    width: 30px;
    height: 30px;
    color: var(--brown);
    stroke-width: 2.35;
  }

  .xp-journey-item strong {
    display: block;
    color: var(--brown-dark);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: .02em;
    margin-bottom: .2rem;
  }

  .xp-journey-item span {
    color: rgba(74,36,0,.74);
    font-size: .84rem;
    line-height: 1.35;
  }

  .xp-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .xp-card:hover .xp-img,
  .xp-activity:hover .xp-img {
    transform: scale(1.035);
  }

  .xp-card-contain .xp-card-media {
    background: var(--cream);
  }

  .xp-img-contain {
    object-fit: contain;
    padding: clamp(.5rem, 1.5vw, 1rem);
  }

  .xp-card:hover .xp-img-contain {
    transform: none;
  }

  .xp-feature-content {
    max-width: 880px;
    margin: 0 auto;
    text-align: center;
  }

  .xp-feature-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.3rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 auto 1.2rem;
    max-width: 760px;
  }

  .xp-feature-content .xp-copy {
    font-size: clamp(1rem, 1.45vw, 1.12rem);
    max-width: 720px;
    margin: 0 auto;
  }

  .xp-activity-list {
    display: grid;
    gap: clamp(3rem, 6vw, 4.5rem);
    background: transparent;
  }

  .xp-activity {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
    gap: clamp(2.25rem, 4vw, 3.75rem);
    align-items: center;
    min-height: clamp(360px, 46vh, 430px);
    background: transparent;
  }

  .xp-activity-media {
    position: relative;
    height: 100%;
    min-height: clamp(360px, 46vh, 430px);
    overflow: hidden;
    background: var(--sand);
  }

  .xp-activity-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(.75rem, 2vw, 1.5rem) 0;
  }

  .xp-activity-title {
    color: var(--brown-dark);
    font-family: var(--font-sans);
    font-size: clamp(1.65rem, 2.2vw, 2.15rem);
    font-weight: 600;
    letter-spacing: .04em;
    line-height: 1.28;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  .xp-tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 0;
    margin: 1.5rem 0 0;
    list-style: none;
  }

  .xp-tags li {
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    padding: .5rem .75rem;
    font-size: .76rem;
    letter-spacing: .04em;
  }

  .xp-card-grid {
    display: grid;
    gap: 1.25rem;
  }

  .xp-card {
    display: grid;
    grid-template-columns: minmax(0, 7fr) minmax(280px, 3fr);
    background: var(--white);
    overflow: hidden;
  }

  .xp-card-media {
    position: relative;
    min-height: 430px;
    overflow: hidden;
    background: var(--sand);
  }

  .xp-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.75rem, 3.2vw, 3rem);
  }

  .xp-card-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2rem, 3.2vw, 3rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 0 .75rem;
  }

  .xp-card-text {
    color: rgba(74,36,0,.72);
    line-height: 1.75;
    margin: 0;
  }

  .xp-cta {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 2rem;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
  }

  .xp-cta h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .xp-cta p {
    color: color-mix(in srgb, var(--brand-peach) 78%, transparent);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  .xp-cta-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .85rem;
  }

  @media (max-width: 980px) {
    .xp-hero {
      height: 64vh;
      min-height: 460px;
    }

    .xp-hero-content,
    .xp-section {
      width: min(100% - 2rem, 720px);
    }

    .xp-hero-content {
      padding-bottom: 3rem;
    }

    .xp-section {
      padding: 4rem 0;
    }

    .xp-editorial-section {
      width: min(100% - 2rem, 720px);
    }

    .xp-section-heading,
    .xp-activity {
      grid-template-columns: 1fr;
    }

    .xp-journey {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      row-gap: 1rem;
    }

    .xp-journey-item:nth-child(3) {
      border-right: 0;
    }

    .xp-activity:nth-child(even) .xp-activity-media,
    .xp-activity:nth-child(even) .xp-activity-content {
      order: initial;
    }

    .xp-card {
      grid-template-columns: minmax(0, 7fr) minmax(260px, 3fr);
    }

    .xp-card-media {
      min-height: 360px;
    }
  }

  @media (max-width: 560px) {
    .xp-hero {
      height: 58vh;
      min-height: 420px;
    }

    .xp-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .xp-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .xp-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .xp-cta-actions {
      align-items: center;
      flex-direction: row;
    }

    .xp-btn {
      width: 100%;
    }

    .xp-cta-actions .xp-btn {
      width: min(100%, 260px);
    }

    .xp-editorial-section {
      width: min(100% - 2rem, 620px);
      padding: 3rem 0 3.75rem;
    }

    .xp-journey {
      grid-template-columns: 1fr;
    }

    .xp-journey-item,
    .xp-journey-item:nth-child(3) {
      grid-template-columns: 1fr;
      justify-items: center;
      border-right: 0;
      border-bottom: 1px solid rgba(143,95,47,.24);
      padding: 1rem 0;
      text-align: center;
    }

    .xp-journey-item:last-child {
      border-bottom: 0;
    }

    .xp-activity-content,
    .xp-card-body {
      padding: 0;
    }

    .xp-feature {
      padding: 1.5rem;
    }

    .xp-card {
      grid-template-columns: 1fr;
    }

    .xp-activity-media,
    .xp-card-media {
      min-height: 280px;
      height: 280px;
    }
  }
`;

export default function ExperiencesPage() {
  return (
    <section id="experience-activities" className="xp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="xp-hero">
        <Image
          src={`${S3_BASE}/IMG_2257.webp`}
          alt="Experiences at Enchula Resort"
          fill
          className="xp-hero-img"
          quality={90}
          priority
          sizes="100vw"
        />
        <div className="xp-hero-overlay" />
        <div className="xp-hero-content">
          <div className="xp-eyebrow">Activities and experiences</div>
          <h1 className="xp-title">
            Resort days made for <em>play and pause</em>
          </h1>
          <div className="xp-actions">
            <Link className="xp-btn" href="/booking">
              Reserve an Experience
            </Link>
            <a className="xp-btn xp-btn-secondary" href="#experiences">
              Explore Activities
            </a>
          </div>
        </div>
      </div>

      <div id="experiences" className="xp-section xp-editorial-section">
        <div className="xp-journey-heading">
          <h3>Our Experience Journey</h3>
          <p>A natural rhythm of swimming, play, family time, fresh air, and discovery</p>
        </div>

        <div className="xp-journey" aria-label="Experience overview">
          {experienceJourney.map(({ Icon, ...item }) => (
            <div className="xp-journey-item" key={item.label}>
              <Icon className="xp-journey-icon" aria-hidden="true" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="xp-section">
        <div className="xp-section-heading">
          <div>
            <div className="xp-kicker">Activities at Enchula</div>
           
          </div>
         
        </div>

        <div className="xp-activity-list">
          {experiences.map((experience) => (
            <article className="xp-activity" key={experience.name}>
              <div className="xp-activity-media">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="xp-img"
                  sizes="(max-width: 980px) 100vw, 50vw"
                />
              </div>
              <div className="xp-activity-content">
                <div className="xp-kicker">{experience.kicker}</div>
                <h3 className="xp-activity-title">{experience.name}</h3>
                <p className="xp-copy">{experience.description}</p>
                <ul className="xp-tags">
                  {experience.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="xp-cta">
          <h2>Plan the kind of day you want to remember.</h2>
          <p>
            Reserve activities with the team, ask about availability, or combine experiences with
            dining, wellness, and accommodation for a fuller resort stay.
          </p>
          <div className="xp-cta-actions">
            <Link className="xp-btn" href="/booking">
              Book an Experience
            </Link>
            <a className="xp-btn xp-btn-secondary" href="tel:+254727000027">
              Call Reception
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
