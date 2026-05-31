"use client";

import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const eventSections = [
  {
    name: "Retreats and conferences",
    kicker: "Focused gatherings",
    description:
      "Host strategy sessions, board retreats, workshops, and conferences in calm resort spaces designed for productive conversations and polished coordination.",
    meta: ["Conference planning", "Refreshments and meals", "Projector support", "Retreat settings"],
    images: [
      `${S3_BASE}/Conference1.jpg`,
      `${S3_BASE}/Conference2.jpg`,
      `${S3_BASE}/Conference3.jpg`,
      `${S3_BASE}/Conference4.jpg`,
      `${S3_BASE}/Conferences1.jpeg`,
      `${S3_BASE}/Conferences2.jpeg`,
      `${S3_BASE}/Conferences3.jpeg`,
    ],
  },
  {
    name: "Corporate and social events",
    kicker: "Celebrations and occasions",
    description:
      "From company functions and product launches to weddings, parties, and private celebrations, the team handles details with warmth and clear organization.",
    meta: ["Event planning", "Decor coordination", "Catering support", "Indoor and outdoor setups"],
    images: [
      `${S3_BASE}/Event2.jpeg`,
      `${S3_BASE}/Event3.jpeg`,
      `${S3_BASE}/Event18.jpeg`,
      `${S3_BASE}/Party2.jpeg`,
      `${S3_BASE}/Event6.jpeg`,
      `${S3_BASE}/Events4.jpeg`,
      `${S3_BASE}/Event7.jpeg`,
      `${S3_BASE}/Party3.jpeg`,
      `${S3_BASE}/Event8.jpeg`,
      `${S3_BASE}/Event13.jpeg`,
      `${S3_BASE}/Event11.jpeg`,
      `${S3_BASE}/Event9.jpeg`,
      `${S3_BASE}/Event5.jpeg`,
      `${S3_BASE}/Event10.jpeg`,
    ],
  },
  {
    name: "Team building",
    kicker: "Shared energy",
    description:
      "Bring teams together for active, memorable resort experiences that balance connection, movement, meals, and time away from the usual office rhythm.",
    meta: ["Group activities", "Outdoor space", "Team meals", "Custom schedules"],
    images: [`${S3_BASE}/Team2.jpeg`, `${S3_BASE}/Team1.jpeg`, `${S3_BASE}/Event12.jpeg`],
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

  .ep-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .ep-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .ep-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .ep-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.12) 0%, rgba(74,36,0,.76) 100%),
      linear-gradient(90deg, rgba(74,36,0,.56) 0%, rgba(74,36,0,.08) 62%);
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
    max-width: 820px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
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
    border: 1px solid rgba(255,211,163,.55);
    color: var(--brown-dark);
    background: var(--peach);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
    transition: transform .25s var(--ease-out), background .25s var(--ease-out), color .25s var(--ease-out);
  }

  .ep-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
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
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .ep-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
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
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
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
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .ep-event-list {
    display: grid;
    gap: 2rem;
  }

  .ep-event-block {
    display: grid;
    grid-template-columns: 1.08fr .92fr;
    min-height: 560px;
    background: var(--white);
  }

  .ep-event-block:nth-child(even) .ep-gallery {
    order: 2;
  }

  .ep-event-block:nth-child(even) .ep-detail {
    order: 1;
  }

  .ep-gallery {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 132px;
    gap: .6rem;
    padding: .75rem;
    background: var(--white);
  }

  .ep-photo {
    position: relative;
    overflow: hidden;
    background: var(--sand);
  }

  .ep-photo:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  .ep-photo:nth-child(6),
  .ep-photo:nth-child(9),
  .ep-photo:nth-child(12) {
    grid-column: span 2;
  }

  .ep-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .ep-photo:hover .ep-img {
    transform: scale(1.035);
  }

  .ep-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4rem);
  }

  .ep-number {
    color: rgba(143,95,47,.32);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6.5rem);
    font-weight: 300;
    line-height: .8;
    margin-bottom: 1.35rem;
  }

  .ep-card-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.25rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .ep-meta {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 0;
    margin: 1.5rem 0 0;
    list-style: none;
  }

  .ep-meta li {
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    padding: .5rem .75rem;
    font-size: .76rem;
    letter-spacing: .04em;
  }

  .ep-contact {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 2rem;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
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
    color: rgba(255,211,163,.78);
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
      padding: 4rem 0;
    }

    .ep-section-heading,
    .ep-event-block {
      grid-template-columns: 1fr;
    }

    .ep-event-block:nth-child(even) .ep-gallery,
    .ep-event-block:nth-child(even) .ep-detail {
      order: initial;
    }

    .ep-gallery {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 145px;
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

    .ep-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 132px;
      gap: .5rem;
      padding: .5rem;
    }

    .ep-photo:first-child,
    .ep-photo:nth-child(6),
    .ep-photo:nth-child(9),
    .ep-photo:nth-child(12) {
      grid-column: span 2;
    }

    .ep-detail {
      padding: 1.5rem;
    }
  }
`;

export default function EventsPage() {
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
        <div className="ep-hero-overlay" />
        <div className="ep-hero-content">
          <div className="ep-eyebrow">Conferences and events</div>
          <h1 className="ep-title">
            Special moments in a <em>serene setting</em>
          </h1>
          <p className="ep-intro">
            Enchula plans and hosts social, corporate, retreat, and team events with thoughtful
            coordination, warm hospitality, and flexible resort spaces.
          </p>
          <div className="ep-actions">
            <a className="ep-btn" href="tel:+254723003164">
              Call Events Team
            </a>
            <a className="ep-btn ep-btn-secondary" href="#event-sections">
              Explore Spaces
            </a>
          </div>
        </div>
      </div>

      <div id="event-sections" className="ep-section">
        <div className="ep-section-heading">
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
        </div>

        <div className="ep-event-list">
          {eventSections.map((section, sectionIndex) => (
            <article className="ep-event-block" key={section.name}>
              <div className="ep-gallery" aria-label={`${section.name} photos`}>
                {section.images.map((image, imageIndex) => (
                  <div className="ep-photo" key={image}>
                    <Image
                      src={image}
                      alt={`${section.name} at Enchula Resort ${imageIndex + 1}`}
                      fill
                      className="ep-img"
                      sizes={imageIndex === 0 ? "(max-width: 980px) 66vw, 32vw" : "(max-width: 560px) 50vw, 16vw"}
                    />
                  </div>
                ))}
              </div>

              <div className="ep-detail">
                <div className="ep-number">{String(sectionIndex + 1).padStart(2, "0")}</div>
                <div className="ep-kicker">{section.kicker}</div>
                <h3 className="ep-card-title">{section.name}</h3>
                <p className="ep-copy">{section.description}</p>
                <ul className="ep-meta">
                  {section.meta.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="ep-contact">
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
        </div>
      </div>
    </section>
  );
}
