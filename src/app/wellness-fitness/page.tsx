"use client";

import Image from "next/image";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const fitnessServices = [
  {
    name: "Equipment",
    kicker: "Strength and cardio",
    image: `${S3_BASE}/IMG_2173.webp`,
    description:
      "Treadmills, ellipticals, bikes, free weights, resistance machines, and practical spaces for focused training.",
    features: ["Cardio machines", "Free weights", "Resistance training"],
  },
  {
    name: "Aerobic",
    kicker: "Guided movement",
    image: `${S3_BASE}/IMG_2160.webp`,
    description:
      "Group fitness sessions including yoga, pilates, HIIT, and other energizing classes based on the daily schedule.",
    features: ["Group classes", "Yoga and pilates", "HIIT sessions"],
  },
  {
    name: "Personal Training",
    kicker: "Coached progress",
    image: `${S3_BASE}/IMG_2171.webp`,
    description:
      "Certified trainers are available for personalized fitness plans, technique support, and guided coaching.",
    features: ["Personal coaching", "Custom plans", "Technique support"],
  },
];

const wellnessServices = [
  {
    name: "Massage Therapy",
    kicker: "Restore",
    image: `${S3_BASE}/Massage.webp`,
    description: "Relaxing massage treatments tailored to help you unwind, recover, and reset.",
  },
  {
    name: "Sauna and Steam Room",
    kicker: "Detox",
    image: `${S3_BASE}/Sauna.webp`,
    description: "Slow down and release tension in warm wellness spaces made for deep relaxation.",
  },
  {
    name: "Herbal Teas and Infusions",
    kicker: "Refresh",
    image: `${S3_BASE}/Herbal.webp`,
    description: "Enjoy calming wellness teas and infusions as part of your restorative experience.",
  },
  {
    name: "Facial Treatments",
    kicker: "Glow",
    image: `${S3_BASE}/Facial.webp`,
    description: "Gentle facial treatments designed to leave your skin feeling clean, refreshed, and cared for.",
  },
  {
    name: "Body Scrubs",
    kicker: "Renew",
    image: `${S3_BASE}/BodyScrubs.webp`,
    description: "Body care rituals that polish, soften, and bring a little resort calm back into the day.",
  },
];

const gallery = [
  { src: `${S3_BASE}/IMG_2174.webp`, alt: "Gym at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2173.webp`, alt: "Fitness equipment at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2160.webp`, alt: "Fitness class space at Enchula Resort" },
  { src: `${S3_BASE}/IMG_2171.webp`, alt: "Personal training area at Enchula Resort" },
  { src: `${S3_BASE}/Wellness.webp`, alt: "Wellness area at Enchula Resort" },
  { src: `${S3_BASE}/Massage.webp`, alt: "Massage therapy at Enchula Resort" },
  { src: `${S3_BASE}/Sauna.webp`, alt: "Sauna and steam room at Enchula Resort" },
  { src: `${S3_BASE}/IMG_3391.webp`, alt: "Spa treatment space at Enchula Resort" },
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

  .wp-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .wp-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .wp-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .wp-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.1) 0%, rgba(74,36,0,.74) 100%),
      linear-gradient(90deg, rgba(74,36,0,.54) 0%, rgba(74,36,0,.08) 62%);
  }

  .wp-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .wp-eyebrow {
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

  .wp-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .wp-title {
    max-width: 820px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .wp-title em {
    color: var(--peach);
    font-style: italic;
  }

  .wp-intro {
    max-width: 650px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .wp-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .wp-btn {
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

  .wp-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .wp-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .wp-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .wp-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .wp-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .wp-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .wp-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .wp-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .wp-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .wp-feature {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    background: var(--white);
  }

  .wp-gallery {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 150px;
    gap: .65rem;
    min-height: 610px;
    padding: .75rem;
    background: var(--white);
  }

  .wp-gallery-item {
    position: relative;
    overflow: hidden;
    background: var(--sand);
  }

  .wp-gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  .wp-gallery-item:nth-child(5),
  .wp-gallery-item:nth-child(8) {
    grid-column: span 2;
  }

  .wp-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .wp-gallery-item:hover .wp-img,
  .wp-card:hover .wp-img {
    transform: scale(1.035);
  }

  .wp-feature-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4rem);
  }

  .wp-feature-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.3rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .wp-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .8rem;
    margin-top: 2rem;
  }

  .wp-info {
    border-top: 1px solid rgba(143,95,47,.25);
    padding-top: 1rem;
  }

  .wp-info strong {
    display: block;
    color: var(--brown);
    font-size: .7rem;
    letter-spacing: .16em;
    margin-bottom: .35rem;
    text-transform: uppercase;
  }

  .wp-info span {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1.1;
  }

  .wp-card-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .wp-wellness-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
  }

  .wp-card {
    background: var(--white);
    overflow: hidden;
  }

  .wp-card-media {
    position: relative;
    height: 330px;
    overflow: hidden;
    background: var(--sand);
  }

  .wp-card-body {
    padding: 1.55rem;
  }

  .wp-card-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 2.1rem;
    font-weight: 300;
    line-height: 1.05;
    margin: 0 0 .75rem;
  }

  .wp-card-text {
    color: rgba(74,36,0,.72);
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
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    padding: .48rem .7rem;
    font-size: .74rem;
    letter-spacing: .04em;
  }

  .wp-quote {
    background: var(--white);
    margin-top: 2rem;
    padding: clamp(2rem, 5vw, 4rem);
    text-align: center;
  }

  .wp-quote p {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2rem, 4vw, 3.8rem);
    font-style: italic;
    font-weight: 300;
    line-height: 1.08;
    margin: 0 auto 1.2rem;
    max-width: 860px;
  }

  .wp-quote span {
    color: var(--brown);
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .wp-cta {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 2rem;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
  }

  .wp-cta h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .wp-cta p {
    color: rgba(255,211,163,.78);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 640px;
  }

  @media (max-width: 1080px) {
    .wp-wellness-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 980px) {
    .wp-hero {
      height: 64vh;
      min-height: 460px;
    }

    .wp-hero-content,
    .wp-section {
      width: min(100% - 2rem, 720px);
    }

    .wp-hero-content {
      padding-bottom: 3rem;
    }

    .wp-section {
      padding: 4rem 0;
    }

    .wp-section-heading,
    .wp-feature {
      grid-template-columns: 1fr;
    }

    .wp-gallery {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 145px;
      min-height: 560px;
    }

    .wp-card-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .wp-hero {
      height: 58vh;
      min-height: 420px;
    }

    .wp-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .wp-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .wp-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .wp-btn {
      width: 100%;
    }

    .wp-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 130px;
      gap: .5rem;
      padding: .5rem;
    }

    .wp-gallery-item:first-child,
    .wp-gallery-item:nth-child(5),
    .wp-gallery-item:nth-child(8) {
      grid-column: span 2;
    }

    .wp-feature-content,
    .wp-card-body {
      padding: 1.5rem;
    }

    .wp-info-grid,
    .wp-wellness-grid {
      grid-template-columns: 1fr;
    }

    .wp-card-media {
      height: 285px;
    }
  }
`;

export default function WellnessFitnessPage() {
  return (
    <section id="wellness-fitness" className="wp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="wp-hero">
        <Image
          src={`${S3_BASE}/IMG_2174.webp`}
          alt="Wellness and fitness at Enchula Resort"
          fill
          className="wp-hero-img"
          sizes="100vw"
          priority
        />
        <div className="wp-hero-overlay" />
        <div className="wp-hero-content">
          <div className="wp-eyebrow">Wellness and fitness</div>
          <h1 className="wp-title">
            Move, restore, and <em>feel renewed</em>
          </h1>
          <p className="wp-intro">
            Train with intention, slow down with restorative spa rituals, and enjoy a wellness
            experience shaped around balance, recovery, and resort calm.
          </p>
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

      <div id="wellness-spaces" className="wp-section">
        <div className="wp-section-heading">
          <div>
            <div className="wp-kicker">Gym, spa and recovery</div>
            <h2 className="wp-heading">
              A modern wellness rhythm for <em>active resort days</em>
            </h2>
          </div>
          <p className="wp-copy">
            From focused workouts to quiet recovery rituals, Enchula brings fitness and wellness
            into one warm, easy-to-use resort experience.
          </p>
        </div>

        <div className="wp-feature">
          <div className="wp-gallery">
            {gallery.map((item, index) => (
              <div className="wp-gallery-item" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="wp-img"
                  sizes={index === 0 ? "(max-width: 980px) 66vw, 32vw" : "(max-width: 560px) 50vw, 18vw"}
                />
              </div>
            ))}
          </div>

          <div className="wp-feature-content">
            <div className="wp-kicker">The experience</div>
            <h2 className="wp-feature-title">Built for movement, recovery, and unhurried reset.</h2>
            <p className="wp-copy">
              Start the morning with training, ease into a sauna session, or book a soothing
              treatment after a long day. The spaces are simple, warm, and practical for both
              residents and resort guests.
            </p>
            <div className="wp-info-grid">
              <div className="wp-info">
                <strong>Fitness</strong>
                <span>Cardio, weights and coaching</span>
              </div>
              <div className="wp-info">
                <strong>Wellness</strong>
                <span>Massage, sauna and spa care</span>
              </div>
              <div className="wp-info">
                <strong>Best for</strong>
                <span>Training, recovery and relaxation</span>
              </div>
              <div className="wp-info">
                <strong>Access</strong>
                <span>Day use and membership options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wp-section">
        <div className="wp-section-heading">
          <div>
            <div className="wp-kicker">Fitness facilities</div>
            <h2 className="wp-heading">
              Train with structure, <em>space and support</em>
            </h2>
          </div>
          <p className="wp-copy">
            The gym combines practical equipment, class options, and guided training support for
            guests who want to stay active while at the resort.
          </p>
        </div>

        <div className="wp-card-grid">
          {fitnessServices.map((service) => (
            <article className="wp-card" key={service.name}>
              <div className="wp-card-media">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="wp-img"
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
              </div>
              <div className="wp-card-body">
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

      <div className="wp-section">
        <div className="wp-section-heading">
          <div>
            <div className="wp-kicker">Spa and wellness services</div>
            <h2 className="wp-heading">
              Gentle rituals for <em>rest and renewal</em>
            </h2>
          </div>
          <p className="wp-copy">
            Choose restorative spa treatments and calming wellness details that help the body slow
            down and the day feel lighter.
          </p>
        </div>

        <div className="wp-wellness-grid">
          {wellnessServices.map((service) => (
            <article className="wp-card" key={service.name}>
              <div className="wp-card-media">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="wp-img"
                  sizes="(max-width: 1080px) 50vw, 20vw"
                />
              </div>
              <div className="wp-card-body">
                <h3 className="wp-card-title">{service.name}</h3>
                <p className="wp-card-text">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wp-quote">
          <p>&quot;The massage was heavenly and the yoga sessions helped me truly unwind.&quot;</p>
          <span>Guest reflection</span>
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
