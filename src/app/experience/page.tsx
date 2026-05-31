"use client";

import Image from "next/image";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const experiences = [
  {
    number: "01",
    name: "Swimming Pool",
    kicker: "Poolside leisure",
    image: `${S3_BASE}/Swimmingpool.jpeg`,
    description:
      "Take a refreshing dip, lounge in the warm Kenyan sun, or spend an easy afternoon by the water with family and friends.",
    features: ["Daytime access", "Family friendly", "Poolside lounging"],
  },
  {
    number: "02",
    name: "Games and Recreation",
    kicker: "Play and unwind",
    image: `${S3_BASE}/Games1.jpeg`,
    description:
      "Enjoy indoor and outdoor recreation for all ages, from board games and light sports to relaxed resort competitions.",
    features: ["Board games", "Group play", "Evening recreation"],
  },
  {
    number: "03",
    name: "Kids Activities",
    kicker: "Young explorers",
    image: `${S3_BASE}/IMG_2277.webp`,
    description:
      "Creative, supervised activities keep children engaged, entertained, and inspired throughout the stay.",
    features: ["Creative play", "Supervised fun", "Family stays"],
  },
  {
    number: "04",
    name: "Outdoor Picnics",
    kicker: "Open-air moments",
    image: `${S3_BASE}/Party3.jpeg`,
    description:
      "Settle into scenic grounds for relaxed picnics, casual celebrations, and slow afternoons with resort service close by.",
    features: ["Scenic grounds", "Casual gatherings", "Anytime leisure"],
  },
  {
    number: "05",
    name: "Guided Nature Walks",
    kicker: "Nature and calm",
    image: `${S3_BASE}/NatureWalk1.jpg`,
    description:
      "Explore the resort surroundings with guides who help guests notice the local landscape, plants, and quiet natural details.",
    features: ["Morning walks", "Local flora", "Guided pace"],
  },
];

const gallery = [
  { src: `${S3_BASE}/IMG_2257.webp`, alt: "Resort experience at Enchula" },
  { src: `${S3_BASE}/Swimmingpool.jpeg`, alt: "Swimming pool at Enchula Resort" },
  { src: `${S3_BASE}/Swimmingpool1_result.png`, alt: "Pool view at Enchula Resort" },
  { src: `${S3_BASE}/Swimmingpool2_result.png`, alt: "Poolside lounge at Enchula Resort" },
  { src: `${S3_BASE}/Games1.jpeg`, alt: "Games and recreation at Enchula Resort" },
  { src: `${S3_BASE}/IMG_3394.webp`, alt: "Games area at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2450.webp`, alt: "Recreation area at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2277.webp`, alt: "Kids activities at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2380.webp`, alt: "Children activities at Enchula Resort" },
  { src: `${S3_BASE}/NatureWalk2.jpg`, alt: "Guided nature walk at Enchula Resort" },
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
    border: 1px solid rgba(255,211,163,.55);
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
    display: grid;
    grid-template-columns: 1.08fr .92fr;
    background: var(--white);
  }

  .xp-gallery {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 142px;
    gap: .65rem;
    min-height: 610px;
    padding: .75rem;
    background: var(--white);
  }

  .xp-gallery-item {
    position: relative;
    overflow: hidden;
    background: var(--sand);
  }

  .xp-gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  .xp-gallery-item:nth-child(6),
  .xp-gallery-item:nth-child(9),
  .xp-gallery-item:nth-child(10) {
    grid-column: span 2;
  }

  .xp-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .xp-gallery-item:hover .xp-img,
  .xp-card:hover .xp-img,
  .xp-activity:hover .xp-img {
    transform: scale(1.035);
  }

  .xp-feature-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4rem);
  }

  .xp-feature-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.3rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .xp-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .8rem;
    margin-top: 2rem;
  }

  .xp-info {
    border-top: 1px solid rgba(143,95,47,.25);
    padding-top: 1rem;
  }

  .xp-info strong {
    display: block;
    color: var(--brown);
    font-size: .7rem;
    letter-spacing: .16em;
    margin-bottom: .35rem;
    text-transform: uppercase;
  }

  .xp-info span {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1.1;
  }

  .xp-activity-list {
    display: grid;
    gap: 1px;
    background: var(--sand);
  }

  .xp-activity {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--white);
  }

  .xp-activity:nth-child(even) .xp-activity-media {
    order: 2;
  }

  .xp-activity:nth-child(even) .xp-activity-content {
    order: 1;
  }

  .xp-activity-media {
    position: relative;
    min-height: 430px;
    overflow: hidden;
    background: var(--sand);
  }

  .xp-activity-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4.5rem);
  }

  .xp-number {
    color: rgba(143,95,47,.28);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 300;
    line-height: .8;
    margin-bottom: 1.35rem;
  }

  .xp-activity-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 3.8rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .xp-card {
    background: var(--white);
    overflow: hidden;
  }

  .xp-card-media {
    position: relative;
    height: 330px;
    overflow: hidden;
    background: var(--sand);
  }

  .xp-card-label {
    position: absolute;
    left: 1.1rem;
    bottom: 1.1rem;
    z-index: 2;
    background: var(--peach);
    color: var(--brown-dark);
    padding: .5rem .72rem;
    font-size: .64rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .xp-card-body {
    padding: 1.55rem;
  }

  .xp-card-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 2.1rem;
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
    color: rgba(255,211,163,.78);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
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

    .xp-section-heading,
    .xp-feature,
    .xp-activity {
      grid-template-columns: 1fr;
    }

    .xp-activity:nth-child(even) .xp-activity-media,
    .xp-activity:nth-child(even) .xp-activity-content {
      order: initial;
    }

    .xp-gallery {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 145px;
      min-height: 560px;
    }

    .xp-card-grid {
      grid-template-columns: 1fr;
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

    .xp-btn {
      width: 100%;
    }

    .xp-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 130px;
      gap: .5rem;
      padding: .5rem;
    }

    .xp-gallery-item:first-child,
    .xp-gallery-item:nth-child(6),
    .xp-gallery-item:nth-child(9),
    .xp-gallery-item:nth-child(10) {
      grid-column: span 2;
    }

    .xp-feature-content,
    .xp-activity-content,
    .xp-card-body {
      padding: 1.5rem;
    }

    .xp-info-grid {
      grid-template-columns: 1fr;
    }

    .xp-activity-media,
    .xp-card-media {
      min-height: 285px;
      height: 285px;
    }
  }
`;

export default function ExperiencesPage() {
  const featured = experiences.slice(0, 3);
  const secondary = experiences.slice(3);

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
          <p className="xp-intro">
            Move between poolside leisure, games, kids activities, picnics, and nature walks, all
            shaped around the warm, unhurried rhythm of Enchula Resort.
          </p>
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

      <div id="experiences" className="xp-section">
        <div className="xp-section-heading">
          <div>
            <div className="xp-kicker">Leisure at Enchula</div>
            <h2 className="xp-heading">
              Simple pleasures, <em>beautifully hosted</em>
            </h2>
          </div>
          <p className="xp-copy">
            The experience page now brings together the resort activities guests naturally look for:
            pool time, family-friendly play, recreation, picnics, and guided time outdoors.
          </p>
        </div>

        <div className="xp-feature">
          <div className="xp-gallery">
            {gallery.map((item, index) => (
              <div className="xp-gallery-item" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="xp-img"
                  sizes={index === 0 ? "(max-width: 980px) 66vw, 32vw" : "(max-width: 560px) 50vw, 18vw"}
                />
              </div>
            ))}
          </div>

          <div className="xp-feature-content">
            <div className="xp-kicker">The setting</div>
            <h2 className="xp-feature-title">Relaxed resort energy, with room for every guest.</h2>
            <p className="xp-copy">
              Families, couples, teams, and day visitors can shape their time around easy movement,
              quiet corners, refreshing swims, and shared moments across the grounds.
            </p>
            <div className="xp-info-grid">
              <div className="xp-info">
                <strong>Best for</strong>
                <span>Families, groups and day visitors</span>
              </div>
              <div className="xp-info">
                <strong>Style</strong>
                <span>Poolside, outdoor and indoor leisure</span>
              </div>
              <div className="xp-info">
                <strong>Pace</strong>
                <span>Easy, playful and unhurried</span>
              </div>
              <div className="xp-info">
                <strong>Booking</strong>
                <span>Reserve through reception</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xp-section">
        <div className="xp-section-heading">
          <div>
            <div className="xp-kicker">Featured activities</div>
            <h2 className="xp-heading">
              Choose your resort <em>rhythm</em>
            </h2>
          </div>
          <p className="xp-copy">
            These core activities give guests an easy way to plan a stay that feels active,
            restorative, social, or family-focused.
          </p>
        </div>

        <div className="xp-activity-list">
          {featured.map((experience) => (
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
                <div className="xp-number">{experience.number}</div>
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
      </div>

      <div className="xp-section">
        <div className="xp-section-heading">
          <div>
            <div className="xp-kicker">More to enjoy</div>
            <h2 className="xp-heading">
              Fresh air, games, and <em>shared moments</em>
            </h2>
          </div>
          <p className="xp-copy">
            Add a picnic or guided walk to your stay for a slower, more grounded experience of the
            resort grounds.
          </p>
        </div>

        <div className="xp-card-grid">
          {secondary.map((experience) => (
            <article className="xp-card" key={experience.name}>
              <div className="xp-card-media">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="xp-img"
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
                <div className="xp-card-label">{experience.kicker}</div>
              </div>
              <div className="xp-card-body">
                <h3 className="xp-card-title">{experience.name}</h3>
                <p className="xp-card-text">{experience.description}</p>
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
          <div className="xp-actions" style={{ justifyContent: "center" }}>
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
