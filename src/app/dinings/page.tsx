"use client";

import Image from "next/image";
import { Coffee, GlassWater, Utensils, Users } from "lucide-react";
import { useEffect, useState } from "react";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

const experiences = [
  {
    name: "Signature Restaurant",
    label: "All-day dining",
    images: [`${S3_BASE}/Image4.jpeg`],
    hours: "Open daily 7AM - 10PM",
    description:
      "A relaxed restaurant experience shaped around fresh local ingredients, familiar international classics, and warm service from breakfast through dinner.",
    highlights: ["Fresh local produce", "Indoor and outdoor seating", "Family-friendly dining"],
  },
  {
    name: "Bar Lounge",
    label: "Cocktails and sundowners",
    images: [`${S3_BASE}/Image8.jpeg`, `${S3_BASE}/Bar1.jpeg` , `${S3_BASE}/Bar2.jpeg` , `${S3_BASE}/Bar1.jpg`],
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
  { src: `${S3_BASE}/Image4.jpeg`, alt: "Resort dining arrangement at Enchula Resort" },
  { src: `${S3_BASE}/Image5.jpeg`, alt: "Resort dining arrangement at Enchula Resort" },
  { src: `${S3_BASE}/Image6.jpeg`, alt: "Resort dining arrangement at Enchula Resort" },
  { src: `${S3_BASE}/Image7.jpeg`, alt: "Resort dining arrangement at Enchula Resort" },
];

const diningJourney = [
  { label: "Breakfast", detail: "Slow mornings and fresh starts", Icon: Coffee },
  { label: "Dining", detail: "Local freshness and global classics", Icon: Utensils },
  { label: "Lounge", detail: "Cocktails, wines and sundowners", Icon: GlassWater },
  { label: "Gather", detail: "Family meals and easy conversations", Icon: Users },
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
    border: 1px solid color-mix(in srgb, var(--brand-peach) 55%, transparent);
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

  .dp-editorial-section {
    width: min(1120px, calc(100% - 3rem));
    padding: clamp(2.75rem, 5vw, 4rem) 0 clamp(3.75rem, 7vw, 5.5rem);
    text-align: center;
  }

  .dp-editorial-title {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.9rem, 3.2vw, 2.35rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.08;
    margin: 0 0 1.55rem;
    text-transform: uppercase;
  }

  .dp-editorial-lead {
    max-width: 960px;
    margin: 0 auto 1.15rem;
    color: rgba(74,36,0,.78);
    font-size: clamp(1.05rem, 1.65vw, 1.3rem);
    line-height: 1.48;
  }

  .dp-editorial-copy {
    max-width: 980px;
    margin: 0 auto .95rem;
    color: rgba(74,36,0,.74);
    font-size: clamp(.86rem, 1vw, .96rem);
    line-height: 1.7;
  }

  .dp-editorial-copy strong {
    color: var(--brown-dark);
  }

  .dp-journey-heading {
    margin: clamp(2.2rem, 4vw, 3rem) auto 1.55rem;
    text-align: center;
  }

  .dp-journey-heading h3 {
    color: color-mix(in srgb, var(--brown-dark) 84%, var(--brown-deep));
    font-family: var(--font-sans);
    font-size: clamp(1.45rem, 2.4vw, 1.8rem);
    font-weight: 700;
    letter-spacing: .04em;
    line-height: 1.1;
    margin: 0 0 .75rem;
    text-transform: uppercase;
  }

  .dp-journey-heading p {
    color: rgba(74,36,0,.72);
    font-size: .92rem;
    font-weight: 700;
    margin: 0;
  }

  .dp-journey {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: min(880px, 100%);
    margin: 0 auto;
  }

  .dp-journey-item {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: .75rem;
    padding: .45rem 1.45rem;
    border-right: 1px solid rgba(143,95,47,.24);
    text-align: left;
  }

  .dp-journey-item:last-child {
    border-right: 0;
  }

  .dp-journey-icon {
    width: 30px;
    height: 30px;
    color: var(--brown);
    stroke-width: 2.35;
  }

  .dp-journey-item strong {
    display: block;
    color: var(--brown-dark);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: .02em;
    margin-bottom: .2rem;
  }

  .dp-journey-item span {
    color: rgba(74,36,0,.74);
    font-size: .84rem;
    line-height: 1.35;
  }

  .dp-editorial-carousel {
    margin: clamp(2.3rem, 4vw, 3.2rem) auto 0;
    max-width: 1120px;
    overflow: hidden;
  }

  .dp-editorial-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }

  .dp-editorial-card {
    aspect-ratio: 16 / 9;
    background: var(--sand);
    overflow: hidden;
    position: relative;
  }

  .dp-editorial-layer {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: scale(1.025);
    transition: opacity 2s ease-in-out, transform 7s ease-out, filter 1.4s ease-in-out;
  }

  .dp-editorial-layer.active {
    opacity: 1;
    transform: scale(1.01);
  }

  .dp-editorial-layer img {
    object-fit: cover;
  }

  .dp-editorial-card:hover .dp-editorial-layer.active {
    filter: saturate(.96) contrast(.98) brightness(.94);
    transform: scale(1.025);
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
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }

  .dp-card {
    background: var(--white);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, .9fr);
    align-items: stretch;
    overflow: hidden;
  }

  .dp-card-media {
    position: relative;
    min-height: 420px;
    overflow: hidden;
    background: var(--sand);
  }

  .dp-card-img {
    opacity: 0;
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: opacity .9s ease-in-out, transform 1s var(--ease-out);
  }

  .dp-card-img.dp-active {
    opacity: 1;
  }

  .dp-card:hover .dp-card-img {
    transform: scale(1.035);
  }

  .dp-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(2rem, 4vw, 3rem);
  }

  .dp-card-dots {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    z-index: 2;
    display: flex;
    gap: .45rem;
  }

  .dp-card-dot {
    appearance: none;
    width: 9px;
    height: 9px;
    border: 1px solid color-mix(in srgb, var(--brand-white) 72%, transparent);
    border-radius: 999px;
    background: color-mix(in srgb, var(--brand-white) 34%, transparent);
    cursor: pointer;
    padding: 0;
  }

  .dp-card-dot.dp-active {
    background: var(--brand-peach);
    border-color: var(--brand-peach);
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
    color: color-mix(in srgb, var(--brand-peach) 78%, transparent);
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

    .dp-editorial-section {
      width: min(100% - 2rem, 680px);
    }

    .dp-editorial-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dp-editorial-card:nth-child(3) {
      display: none;
    }

    .dp-journey {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 1rem;
    }

    .dp-journey-item:nth-child(2) {
      border-right: 0;
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

    .dp-editorial-section {
      width: min(100% - 2rem, 620px);
      padding: 3rem 0 3.75rem;
    }

    .dp-editorial-strip,
    .dp-journey {
      grid-template-columns: 1fr;
    }

    .dp-editorial-card {
      aspect-ratio: 4 / 3;
    }

    .dp-editorial-card:nth-child(2),
    .dp-editorial-card:nth-child(3) {
      display: none;
    }

    .dp-journey-item,
    .dp-journey-item:nth-child(2) {
      grid-template-columns: 1fr;
      justify-items: center;
      border-right: 0;
      border-bottom: 1px solid rgba(143,95,47,.24);
      padding: 1rem 0;
      text-align: center;
    }

    .dp-journey-item:last-child {
      border-bottom: 0;
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
  const [activeDiningImage, setActiveDiningImage] = useState(0);
  const [activeExperienceImages, setActiveExperienceImages] = useState(() =>
    experiences.map(() => 0)
  );
  const diningCarouselSlots = [0, 1, 2];
  const whatsappMessage = encodeURIComponent(
    "Hello Enchula Resort, I'd like to reserve a table or inquire about dining options."
  );
  const whatsappUrl = `https://wa.me/254727000027?text=${whatsappMessage}`;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDiningImage((current) => (current + 1) % gallery.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveExperienceImages((currentImages) =>
        currentImages.map((currentImage, index) => {
          const imageCount = experiences[index].images.length;
          return imageCount > 1 ? (currentImage + 1) % imageCount : 0;
        })
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const handleExperienceImageSelect = (experienceIndex: number, imageIndex: number) => {
    setActiveExperienceImages((currentImages) =>
      currentImages.map((currentImage, currentIndex) =>
        currentIndex === experienceIndex ? imageIndex : currentImage
      )
    );
  };

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
        <div className="dp-hero-content">
          <div className="dp-eyebrow">Dining at Enchula Resort</div>
          <h1 className="dp-title">
            Fine dining &amp; <em>easy evenings</em>
          </h1>
          <div className="dp-actions">
            <a className="dp-btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Reserve a Table
            </a>
            <a className="dp-btn dp-btn-secondary" href="#dining-experience">
              Explore Dining
            </a>
          </div>
        </div>
      </div>

      <div id="dining-experience" className="dp-section dp-editorial-section">

        <div className="dp-journey-heading">
          <h3>Our Dining Journey</h3>
          <p>A natural rhythm of breakfast, dining, lounge moments, and gathering</p>
        </div>

        <div className="dp-journey" aria-label="Dining experience overview">
          {diningJourney.map(({ Icon, ...item }) => (
            <div className="dp-journey-item" key={item.label}>
              <Icon className="dp-journey-icon" aria-hidden="true" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dp-editorial-carousel" aria-label="Dining photos">
          <div className="dp-editorial-strip">
            {diningCarouselSlots.map((slot) => (
              <div className="dp-editorial-card" key={slot}>
                {gallery.map((item, index) => (
                  <div
                    className={`dp-editorial-layer ${
                      index === (activeDiningImage + slot) % gallery.length ? "active" : ""
                    }`}
                    key={`${slot}-${item.src}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="dining-experiences" className="dp-section">
        <div className="dp-section-heading">
          <div>
            <div className="dp-kicker">Dining experiences</div>
            
          </div>
         
        </div>

        <div className="dp-experience-grid">
          {experiences.map((experience, experienceIndex) => (
            <article className="dp-card" key={experience.name}>
              <div className="dp-card-media">
                {experience.images.map((image, imageIndex) => (
                  <Image
                    src={image}
                    alt={`${experience.name} at Enchula Resort ${imageIndex + 1}`}
                    fill
                    className={`dp-card-img ${
                      imageIndex === activeExperienceImages[experienceIndex] ? "dp-active" : ""
                    }`}
                    key={image}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                ))}

                {experience.images.length > 1 && (
                  <div className="dp-card-dots" aria-label={`${experience.name} photos`}>
                    {experience.images.map((image, imageIndex) => (
                      <button
                        aria-label={`${experience.name} photo ${imageIndex + 1}`}
                        className={`dp-card-dot ${
                          imageIndex === activeExperienceImages[experienceIndex] ? "dp-active" : ""
                        }`}
                        key={image}
                        type="button"
                        onClick={() => handleExperienceImageSelect(experienceIndex, imageIndex)}
                      />
                    ))}
                  </div>
                )}
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
