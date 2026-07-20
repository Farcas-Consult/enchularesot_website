"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BriefcaseBusiness, PartyPopper, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const eventSections = [
  {
    name: "Retreats and conferences",
    kicker: "Focused gatherings",
    description:
      "Host strategy sessions, board retreats, workshops, and conferences in calm resort spaces designed for productive conversations and polished coordination.",
    details: [
      "This setup is ideal for teams that need a quiet, organized place to think, plan, train, and make decisions away from the normal office environment.",
      "The Enchula team can support the flow of the day with meeting spaces, refreshments, meals, basic presentation needs, and coordinated breaks so guests stay focused and comfortable.",
      "Retreats can also be paired with accommodation, dining, wellness, or outdoor moments for groups that want a fuller multi-day experience.",
    ],
    meta: ["Conference planning", "Refreshments and meals", "Projector support", "Retreat settings"],
    images: [ 
      `${S3_BASE}/Conferences.jpeg`,
      `${S3_BASE}/Conferences1.jpeg`,
      `${S3_BASE}/Conferences2.jpeg`,
      `${S3_BASE}/Conferences3.jpeg`,
      `${S3_BASE}/Conference2.jpg`,
     
    ],
  },
  {
    name: "Corporate and social events",
    kicker: "Celebrations and occasions",
    description:
      "From company functions and product launches to weddings, parties, and private celebrations, the team handles details with warmth and clear organization.",
    details: [
      "These events are planned around the mood of the occasion, whether the goal is polished and professional, intimate and relaxed, or lively and celebratory.",
      "Guests can expect help with venue setup, catering coordination, decor direction, timelines, and the practical details that make an event feel smooth from arrival to the final send-off.",
      "The resort setting works well for birthdays, weddings, launches, end-of-year gatherings, private lunches, and social occasions that need both scenery and service.",
    ],
    meta: ["Event planning", "Decor coordination", "Catering support", "Indoor and outdoor setups"],
    images: [
      `${S3_BASE}/Image21.jpeg`,
       `${S3_BASE}/Image23.jpeg`,
       `${S3_BASE}/Image26.jpeg`,
       `${S3_BASE}/Image25.jpeg`,
       `${S3_BASE}/Image27.jpeg`

    ],
  },
  {
    name: "Team building",
    kicker: "Shared energy",
    description:
      "Bring teams together for active, memorable resort experiences that balance connection, movement, meals, and time away from the usual office rhythm.",
    details: [
      "Team building days are shaped to help groups reconnect, communicate better, and enjoy shared activities in a relaxed resort environment.",
      "Programs can include outdoor games, group challenges, meal breaks, informal reflection time, and flexible schedules depending on the size and energy of the team.",
      "This option works especially well for companies, departments, schools, clubs, and groups that want a day that feels useful, social, and refreshing.",
    ],
    meta: ["Group activities", "Outdoor space", "Team meals", "Custom schedules"],
    images: [ `${S3_BASE}/Team1.jpeg`],
  },
];

const eventJourney = [
  { label: "Meet", detail: "Conferences, retreats and workshops", Icon: BriefcaseBusiness },
  { label: "Celebrate", detail: "Corporate and social occasions", Icon: PartyPopper },
  { label: "Connect", detail: "Team building and shared energy", Icon: UsersRound },
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

  .ep-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
    overflow-x: hidden;
  }

  .ep-root * {
    box-sizing: border-box;
  }

  .ep-hero {
    position: relative;
    height: clamp(560px, 74vh, 820px);
    min-height: 560px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .ep-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .ep-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .ep-eyebrow {
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

  .ep-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .ep-title {
    max-width: 860px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3.3rem, 6.8vw, 6.6rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .ep-title em {
    color: var(--peach);
    font-style: italic;
  }

  .ep-intro {
    max-width: 650px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .ep-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .ep-btn {
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

  .ep-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .ep-btn:focus-visible {
    outline: 2px solid var(--peach);
    outline-offset: 3px;
  }

  .ep-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .ep-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .ep-section {
    width: min(1275px, calc(100% - 4.5rem));
    margin: 0 auto;
    padding: clamp(1.75rem, 3vw, 2.75rem) 0 clamp(3rem, 6vw, 5rem);
  }

  .ep-editorial-section {
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: clamp(2.75rem, 5vw, 4rem) 0 clamp(3.75rem, 7vw, 5.5rem);
    text-align: center;
  }

  .ep-editorial-title {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.9rem, 3.2vw, 2.35rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.08;
    margin: 0 0 1.55rem;
    text-transform: uppercase;
  }

  .ep-editorial-lead {
    max-width: 960px;
    margin: 0 auto 1.15rem;
    color: rgba(74,36,0,.78);
    font-size: clamp(1.05rem, 1.65vw, 1.3rem);
    line-height: 1.48;
  }

  .ep-editorial-copy {
    max-width: 980px;
    margin: 0 auto .95rem;
    color: rgba(74,36,0,.74);
    font-size: clamp(.86rem, 1vw, .96rem);
    line-height: 1.7;
  }

  .ep-editorial-copy strong {
    color: var(--brown-dark);
  }

  .ep-journey-heading {
    margin: clamp(2.2rem, 4vw, 3rem) auto 1.55rem;
    text-align: center;
  }

  .ep-journey-heading h3 {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.45rem, 2.4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.1;
    margin: 0 0 .75rem;
    text-transform: uppercase;
  }

  .ep-journey-heading p {
    color: rgba(74,36,0,.72);
    font-size: .92rem;
    font-weight: 700;
    margin: 0;
  }

  .ep-journey {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: min(760px, 100%);
    margin: 0 auto;
  }

  .ep-journey-item {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .75rem;
    padding: .45rem 1.35rem;
    border-right: 1px solid rgba(143,95,47,.24);
    text-align: left;
  }

  .ep-journey-item:last-child {
    border-right: 0;
  }

  .ep-journey-icon {
    width: 30px;
    height: 30px;
    color: var(--brown);
    stroke-width: 2.35;
  }

  .ep-journey-item strong {
    display: block;
    color: var(--brown-dark);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: .02em;
    margin-bottom: .2rem;
  }

  .ep-journey-item span {
    color: rgba(74,36,0,.74);
    font-size: .84rem;
    line-height: 1.35;
  }

  .ep-section-heading {
    display: none;
    grid-template-columns: minmax(0, .88fr) minmax(320px, .72fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: end;
    margin-bottom: clamp(3rem, 6vw, 5rem);
  }

  .ep-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .ep-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 5vw, 5rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .ep-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .ep-copy {
    color: rgba(74,36,0,.72);
    font-size: clamp(.96rem, 1.2vw, 1.08rem);
    line-height: 1.72;
    margin: 0;
  }

  .ep-event-list {
    display: grid;
    gap: clamp(3rem, 6vw, 4.5rem);
  }

  .ep-event-block {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
    gap: clamp(2.25rem, 4vw, 3.75rem);
    align-items: center;
    min-height: clamp(360px, 46vh, 430px);
    background: transparent;
    border: 0;
  }

  .ep-carousel {
    position: relative;
    height: 100%;
    min-height: clamp(360px, 46vh, 430px);
    overflow: hidden;
    background: var(--sand);
  }

  .ep-carousel-track {
    display: flex;
    height: 100%;
    min-height: inherit;
    transition: transform .8s var(--ease-out);
  }

  .ep-carousel-slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 100%;
    min-height: inherit;
    overflow: hidden;
  }

  .ep-carousel-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .ep-carousel:hover .ep-carousel-img,
  .ep-carousel:focus-within .ep-carousel-img {
    transform: scale(1.035);
  }

  .ep-carousel-caption {
    display: none;
  }

  .ep-carousel-caption p {
    margin: 0;
  }

  .ep-carousel::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 68%, rgba(74,36,0,.08) 100%);
    pointer-events: none;
  }

  .ep-carousel-controls {
    position: absolute;
    left: clamp(1rem, 2vw, 1.5rem);
    top: auto;
    bottom: clamp(.9rem, 1.7vw, 1.25rem);
    z-index: 3;
    display: flex;
    gap: .45rem;
    opacity: .55;
  }

  .ep-carousel-dot {
    width: 34px;
    height: 3px;
    border: 0;
    background: color-mix(in srgb, var(--brand-peach) 42%, transparent);
    cursor: pointer;
    padding: 0;
    transition: background .25s var(--ease-out), transform .25s var(--ease-out);
  }

  .ep-carousel-dot:hover,
  .ep-carousel-dot:focus-visible,
  .ep-carousel-dot-active {
    background: var(--peach);
    transform: translateY(-1px);
  }

  .ep-carousel-dot:focus-visible {
    outline: 2px solid var(--peach);
    outline-offset: 4px;
  }

  .ep-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    padding: clamp(.75rem, 2vw, 1.5rem) 0;
    border-left: 0;
  }

  .ep-card-title {
    color: var(--brown-dark);
    font-family: var(--font-sans);
    font-size: clamp(1.65rem, 2.2vw, 2.15rem);
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: .04em;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  .ep-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 0;
    margin: 1.2rem 0 0;
    list-style: none;
  }

  .ep-meta li {
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    padding: .5rem .75rem;
    font-size: .76rem;
    letter-spacing: .04em;
    transition: transform .2s var(--ease-out), border-color .2s var(--ease-out);
  }

  .ep-meta li:hover {
    border-color: rgba(143,95,47,.38);
    transform: translateY(-1px);
  }

  .ep-contact {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: clamp(2rem, 4vw, 3rem);
    padding: clamp(2.4rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 4rem);
    text-align: center;
    border-radius: 0;
  }

  .ep-contact h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .ep-contact p {
    color: color-mix(in srgb, var(--brand-peach) 78%, transparent);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  .ep-contact-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .85rem;
  }

  @media (max-width: 980px) {
    .ep-hero {
      height: 64vh;
      min-height: 460px;
    }

    .ep-hero-content,
    .ep-section {
      width: min(100% - 2rem, 720px);
    }

    .ep-hero-content {
      padding-bottom: 3rem;
    }

    .ep-section {
      padding: clamp(2.25rem, 6vw, 3.5rem) 0;
    }

    .ep-editorial-section {
      width: min(100% - 2rem, 720px);
    }

    .ep-section-heading,
    .ep-event-block {
      grid-template-columns: 1fr;
    }

    .ep-carousel {
      min-height: 360px;
    }

    .ep-detail {
      border-left: 0;
      border-top: 0;
    }
  }

  @media (max-width: 560px) {
    .ep-hero {
      height: 58vh;
      min-height: 420px;
    }

    .ep-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .ep-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .ep-actions,
    .ep-contact-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .ep-btn {
      width: 100%;
    }

    .ep-editorial-section {
      width: min(100% - 2rem, 620px);
      padding: 3rem 0 3.75rem;
    }

    .ep-journey {
      grid-template-columns: 1fr;
    }

    .ep-journey-item {
      grid-template-columns: 1fr;
      justify-items: center;
      border-right: 0;
      border-bottom: 1px solid rgba(143,95,47,.24);
      padding: 1rem 0;
      text-align: center;
    }

    .ep-journey-item:last-child {
      border-bottom: 0;
    }

    .ep-event-block {
      min-height: auto;
    }

    .ep-carousel {
      min-height: 280px;
    }

    .ep-carousel-caption {
      left: .85rem;
      right: .85rem;
      bottom: .85rem;
      font-size: .9rem;
      padding: .8rem .9rem;
    }

    .ep-carousel-controls {
      left: .85rem;
      top: .85rem;
    }

    .ep-carousel-dot {
      width: 26px;
    }

    .ep-detail {
      padding: 1.5rem;
    }
  }
`;

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlides, setActiveSlides] = useState(() => eventSections.map(() => 0));
  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
      };
  const imageReveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.985 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlides((currentSlides) =>
        currentSlides.map((currentSlide, sectionIndex) => {
          const imageCount = eventSections[sectionIndex]?.images.length ?? 0;
          return imageCount > 1 ? (currentSlide + 1) % imageCount : currentSlide;
        })
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const getImageDescription = (section: (typeof eventSections)[number], imageIndex: number) => {
    const descriptions = [section.description, ...section.details];
    return descriptions[imageIndex % descriptions.length];
  };

  return (
    <section id="events" className="ep-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="ep-hero">
        <Image
          src={`${S3_BASE}/Event1.jpeg`}
          alt="Events at Enchula Resort"
          fill
          className="ep-hero-img"
          quality={90}
          priority
          sizes="100vw"
        />
        <motion.div className="ep-hero-content" {...reveal}>
          <div className="ep-eyebrow">Conferences and events</div>
          <h1 className="ep-title">
            Special moments in a <em>serene setting</em>
          </h1>
          <div className="ep-actions">
            <a className="ep-btn" href="tel:+254723003164">
              Call Events Team
            </a>
            <a className="ep-btn ep-btn-secondary" href="#event-sections">
              Explore Spaces
            </a>
          </div>
        </motion.div>
      </div>

      <div id="events-intro" className="ep-editorial-section">
        <div className="ep-journey-heading">
          <h3>Our Events Journey</h3>
          <p>A natural rhythm of meeting, celebrating, and connecting</p>
        </div>

        <div className="ep-journey" aria-label="Events overview">
          {eventJourney.map(({ Icon, ...item }) => (
            <div className="ep-journey-item" key={item.label}>
              <Icon className="ep-journey-icon" aria-hidden="true" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="event-sections" className="ep-section">
        <motion.div className="ep-section-heading" {...reveal}>
          <div>
            <div className="ep-kicker">Planning and hosting</div>
            <h2 className="ep-heading">
              Three ways to gather, <em>one thoughtful team</em>
            </h2>
          </div>
          <p className="ep-copy">
            Whether the occasion is focused, festive, or active, the resort team helps shape the
            setting, flow, catering, and details so the day feels easy from arrival to close.
          </p>
        </motion.div>

        <div className="ep-event-list">
          {eventSections.map((section, sectionIndex) => (
            <motion.article className="ep-event-block" key={section.name} {...reveal}>
              <motion.div className="ep-carousel" aria-label={`${section.name} photos`} {...imageReveal}>
                {section.images.length > 1 && (
                  <div className="ep-carousel-controls">
                    {section.images.map((image, imageIndex) => (
                      <button
                        className={`ep-carousel-dot ${
                          activeSlides[sectionIndex] === imageIndex ? "ep-carousel-dot-active" : ""
                        }`}
                        key={image}
                        type="button"
                        aria-label={`${section.name} ${imageIndex + 1}`}
                        onClick={() =>
                          setActiveSlides((currentSlides) =>
                            currentSlides.map((currentSlide, currentSectionIndex) =>
                              currentSectionIndex === sectionIndex ? imageIndex : currentSlide
                            )
                          )
                        }
                      />
                    ))}
                  </div>
                )}

                <div
                  className="ep-carousel-track"
                  style={{ transform: `translateX(-${activeSlides[sectionIndex] * 100}%)` }}
                >
                  {section.images.map((image, imageIndex) => (
                    <div className="ep-carousel-slide" key={image}>
                      <Image
                        src={image}
                        alt={`${section.name} at Enchula Resort ${imageIndex + 1}`}
                        fill
                        className="ep-carousel-img"
                        sizes="(max-width: 980px) 100vw, 75vw"
                      />
                      <div className="ep-carousel-caption">
                        <p>{getImageDescription(section, imageIndex)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="ep-detail" {...reveal}>
                <div className="ep-kicker">{section.kicker}</div>
                <h3 className="ep-card-title">{section.name}</h3>
                <p className="ep-copy">{section.description}</p>
                <ul className="ep-meta">
                  {section.meta.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div className="ep-contact" {...reveal}>
          <h2>Ready to plan your event?</h2>
          <p>
            Share your preferred date, guest count, and event style with the Enchula team and they
            will help you shape the right setup.
          </p>
          <div className="ep-contact-actions">
            <a className="ep-btn" href="tel:+254723003164">
              0723003164
            </a>
            <a className="ep-btn ep-btn-secondary" href="mailto:events@enchularesort.co.ke">
              events@enchularesort.co.ke
            </a>
            <a
              className="ep-btn ep-btn-secondary"
              href="https://instagram.com/events.by.enchula"
              target="_blank"
              rel="noopener noreferrer"
            >
              events.by.enchula
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
