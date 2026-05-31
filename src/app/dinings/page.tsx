"use client";

import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const experiences = [
  {
    name: "Signature Restaurant",
    label: "All-day dining",
    image: `${S3_BASE}/Restaurant1.jpg`,
    hours: "Open daily 7AM - 10PM",
    description:
      "A relaxed restaurant experience shaped around fresh local ingredients, familiar international classics, and warm service from breakfast through dinner.",
    highlights: ["Fresh local produce", "Indoor and outdoor seating", "Family-friendly dining"],
  },
  {
    name: "Bar Lounge",
    label: "Cocktails and sundowners",
    image: `${S3_BASE}/Bar2.jpg`,
    hours: "Open daily 12PM - 11PM",
    description:
      "An easygoing lounge for crafted cocktails, premium spirits, wines, and unhurried conversations after a day at the resort.",
    highlights: ["Craft cocktails", "Curated wines", "Relaxed evening setting"],
  },
];

const gallery = [
  { src: `${S3_BASE}/Dining1.jpeg`, alt: "Elegant dining setup at Enchula Resort" },
  { src: `${S3_BASE}/Dining2.jpeg`, alt: "Warm restaurant seating at Enchula Resort" },
  { src: `${S3_BASE}/Dining3.jpeg`, alt: "Dining table detail at Enchula Resort" },
  { src: `${S3_BASE}/Dining4.jpeg`, alt: "Resort dining ambience at Enchula Resort" },
  { src: `${S3_BASE}/Dining5.jpeg`, alt: "Restaurant table setting at Enchula Resort" },
  { src: `${S3_BASE}/Dining6.jpeg`, alt: "Dining space at Enchula Resort" },
  { src: `${S3_BASE}/Dining7.jpeg`, alt: "Resort restaurant detail at Enchula Resort" },
  { src: `${S3_BASE}/Dining8.jpeg`, alt: "Warm dining atmosphere at Enchula Resort" },
  { src: `${S3_BASE}/Dining9.jpeg`, alt: "Dining experience at Enchula Resort" },
  { src: `${S3_BASE}/Dining10.jpeg`, alt: "Resort dining arrangement at Enchula Resort" },
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

  .dp-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .dp-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .dp-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .dp-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.12) 0%, rgba(74,36,0,.76) 100%),
      linear-gradient(90deg, rgba(74,36,0,.54) 0%, rgba(74,36,0,.08) 60%);
  }

  .dp-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .dp-eyebrow {
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

  .dp-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .dp-title {
    max-width: 760px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .dp-title em {
    color: var(--peach);
    font-style: italic;
  }

  .dp-intro {
    max-width: 610px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .dp-actions {
    display: flex;
    flex-wrap: wrap;
    gap: .85rem;
  }

  .dp-btn {
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

  .dp-btn:hover {
    transform: translateY(-2px);
    background: var(--gold);
  }

  .dp-btn-secondary {
    color: var(--peach);
    background: rgba(255,255,255,.12);
    backdrop-filter: blur(8px);
  }

  .dp-btn-secondary:hover {
    color: var(--brown-dark);
    background: var(--peach);
  }

  .dp-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .dp-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .9fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .dp-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .dp-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .dp-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .dp-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .dp-experience-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .dp-card {
    background: var(--white);
    overflow: hidden;
  }

  .dp-card-media {
    position: relative;
    height: 420px;
    overflow: hidden;
    background: var(--sand);
  }

  .dp-card-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .dp-card:hover .dp-card-img {
    transform: scale(1.035);
  }

  .dp-card-label {
    position: absolute;
    left: 1.25rem;
    bottom: 1.25rem;
    z-index: 2;
    background: var(--peach);
    color: var(--brown-dark);
    padding: .55rem .8rem;
    font-size: .66rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .dp-card-body {
    padding: 2rem;
  }

  .dp-card-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 2.3rem;
    font-weight: 300;
    line-height: 1.05;
    margin: 0 0 .85rem;
  }

  .dp-hours {
    color: var(--brown);
    font-size: .78rem;
    font-weight: 600;
    letter-spacing: .12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .dp-card-text {
    color: rgba(74,36,0,.72);
    line-height: 1.75;
    margin: 0 0 1.35rem;
  }

  .dp-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .dp-highlights li {
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    padding: .5rem .75rem;
    font-size: .76rem;
    letter-spacing: .04em;
  }

  .dp-showcase {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    background: var(--white);
  }

  .dp-gallery {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 152px;
    gap: .65rem;
    min-height: 620px;
    padding: .75rem;
    background: var(--white);
  }

  .dp-gallery-item {
    position: relative;
    overflow: hidden;
    background: var(--sand);
  }

  .dp-gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }

  .dp-gallery-item:nth-child(6),
  .dp-gallery-item:nth-child(9),
  .dp-gallery-item:nth-child(10) {
    grid-column: span 2;
  }

  .dp-gallery-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform 1s var(--ease-out);
  }

  .dp-gallery-item:hover .dp-gallery-img {
    transform: scale(1.035);
  }

  .dp-showcase-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 5vw, 4rem);
  }

  .dp-showcase-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0 0 1rem;
  }

  .dp-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .8rem;
    margin-top: 2rem;
  }

  .dp-info {
    border-top: 1px solid rgba(143,95,47,.25);
    padding-top: 1rem;
  }

  .dp-info strong {
    display: block;
    color: var(--brown);
    font-size: .7rem;
    letter-spacing: .16em;
    margin-bottom: .35rem;
    text-transform: uppercase;
  }

  .dp-info span {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.35rem;
    line-height: 1.1;
  }

  .dp-reserve {
    background: var(--brown-dark);
    color: var(--peach);
    margin-top: 0;
    padding: 4rem clamp(1.5rem, 4vw, 4rem);
    text-align: center;
  }

  .dp-reserve h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 auto 1rem;
    max-width: 760px;
  }

  .dp-reserve p {
    color: rgba(255,211,163,.78);
    line-height: 1.75;
    margin: 0 auto 1.75rem;
    max-width: 620px;
  }

  @media (max-width: 900px) {
    .dp-hero {
      height: 64vh;
      min-height: 460px;
    }

    .dp-hero-content,
    .dp-section {
      width: min(100% - 2rem, 680px);
    }

    .dp-hero-content {
      padding-bottom: 3rem;
    }

    .dp-section {
      padding: 4rem 0;
    }

    .dp-section-heading,
    .dp-experience-grid,
    .dp-showcase {
      grid-template-columns: 1fr;
    }

    .dp-card-media {
      height: 340px;
    }

    .dp-gallery {
      min-height: 560px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 150px;
    }
  }

  @media (max-width: 560px) {
    .dp-hero {
      height: 58vh;
      min-height: 420px;
    }

    .dp-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .dp-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .dp-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .dp-btn {
      width: 100%;
    }

    .dp-card-body,
    .dp-showcase-content {
      padding: 1.5rem;
    }

    .dp-card-media {
      height: 285px;
    }

    .dp-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 130px;
      gap: .5rem;
      padding: .5rem;
    }

    .dp-gallery-item:first-child,
    .dp-gallery-item:nth-child(6),
    .dp-gallery-item:nth-child(9),
    .dp-gallery-item:nth-child(10) {
      grid-column: span 2;
    }

    .dp-info-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function DiningPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to reserve a table or inquire about dining options."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;

  return (
    <section id="dining" className="dp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="dp-hero">
        <Image
          src={`${S3_BASE}/Dining1.jpg`}
          alt="Dining at Enchula Resort"
          fill
          className="dp-hero-img"
          priority
          sizes="100vw"
        />
        <div className="dp-hero-overlay" />
        <div className="dp-hero-content">
          <div className="dp-eyebrow">Dining at Enchula Resort</div>
          <h1 className="dp-title">
            Fine dining &amp; <em>easy evenings</em>
          </h1>
          <p className="dp-intro">
            Settle into warm hospitality, fresh flavors, and relaxed spaces made for breakfast,
            lunch, dinner, cocktails, and long conversations.
          </p>
          <div className="dp-actions">
            <a className="dp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Reserve a Table
            </a>
            <a className="dp-btn dp-btn-secondary" href="#dining-experiences">
              Explore Dining
            </a>
          </div>
        </div>
      </div>

      <div id="dining-experiences" className="dp-section">
        <div className="dp-section-heading">
          <div>
            <div className="dp-kicker">Restaurant and lounge</div>
            <h2 className="dp-heading">
              Warm spaces for every <em>kind of gathering</em>
            </h2>
          </div>
          <p className="dp-copy">
            From slow breakfasts to late-evening drinks, each dining space keeps the resort
            atmosphere polished, comfortable, and rooted in local warmth.
          </p>
        </div>

        <div className="dp-experience-grid">
          {experiences.map((experience) => (
            <article className="dp-card" key={experience.name}>
              <div className="dp-card-media">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="dp-card-img"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div className="dp-card-label">{experience.label}</div>
              </div>
              <div className="dp-card-body">
                <h3 className="dp-card-title">{experience.name}</h3>
                <div className="dp-hours">{experience.hours}</div>
                <p className="dp-card-text">{experience.description}</p>
                <ul className="dp-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="dp-section">
        <div className="dp-showcase">
          <div className="dp-gallery">
            {gallery.map((item, index) => (
              <div className="dp-gallery-item" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="dp-gallery-img"
                  sizes={index === 0 ? "(max-width: 900px) 66vw, 32vw" : "(max-width: 560px) 50vw, 18vw"}
                />
              </div>
            ))}
          </div>

          <div className="dp-showcase-content">
            <div className="dp-kicker">The experience</div>
            <h2 className="dp-showcase-title">A modern resort table with a familiar welcome.</h2>
            <p className="dp-copy">
              Every meal is shaped around comfort, conversation, and the gentle pace of the
              resort. Come in for a quiet breakfast, linger over dinner, or meet friends for
              drinks as the evening settles in.
            </p>
            <div className="dp-info-grid" aria-label="Dining highlights">
              <div className="dp-info">
                <strong>Best for</strong>
                <span>Breakfasts, dinners and drinks</span>
              </div>
              <div className="dp-info">
                <strong>Setting</strong>
                <span>Indoor and outdoor comfort</span>
              </div>
              <div className="dp-info">
                <strong>Food style</strong>
                <span>Local freshness, global classics</span>
              </div>
              <div className="dp-info">
                <strong>Bookings</strong>
                <span>Table requests by WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dp-reserve">
          <h2>Reserve a table before you arrive.</h2>
          <p>
            Share your preferred date, time, and group size with the team and they will help you
            plan the right dining experience.
          </p>
          <a className="dp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Reserve on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
