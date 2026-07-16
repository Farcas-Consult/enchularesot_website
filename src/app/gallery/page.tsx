"use client";

import { useEffect, useMemo, useState } from "react";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: `${S3_BASE}/Surrounding1.jpg`, alt: "Surroundings 1", category: "Interior" },
  { src: `${S3_BASE}/Surroundings2.jpg`, alt: "Surroundings 2", category: "Interior" },
  { src: `${S3_BASE}/Surroundings3.jpg`, alt: "Surroundings 3", category: "Interior" },
  { src: `${S3_BASE}/Surroundings5.jpg`, alt: "Surroundings 5", category: "Interior" },
  { src: `${S3_BASE}/Pathway1.jpg`, alt: "Pathway 1", category: "Interior" },
  { src: `${S3_BASE}/IMG_2256.webp`, alt: "Resort pathway", category: "Interior" },
  { src: `${S3_BASE}/Reception1.jpg`, alt: "Reception 1", category: "Interior" },
  { src: `${S3_BASE}/IMG_2272.webp`, alt: "Luxury Resort Exterior", category: "Interior" },
  { src: `${S3_BASE}/IMG_2275.webp`, alt: "Tranquil Haven", category: "Interior" },
  { src: `${S3_BASE}/IMG_3457.webp`, alt: "Scenic Retreat", category: "Interior" },
  { src: `${S3_BASE}/IMG_2237.webp`, alt: "Luxury Bathroom", category: "Interior" },

  { src: `${S3_BASE}/Conferences1.jpeg`, alt: "Conference 1", category: "Conference & Events" },
  { src: `${S3_BASE}/Conferences2.jpeg`, alt: "Conference 2", category: "Conference & Events" },
  { src: `${S3_BASE}/Conferences3.jpeg`, alt: "Conference 3", category: "Conference & Events" },
  { src: `${S3_BASE}/Event2.jpeg`, alt: "Corporate event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event1.jpeg`, alt: "Event setup", category: "Conference & Events" },
  { src: `${S3_BASE}/Event3.jpeg`, alt: "Event gathering", category: "Conference & Events" },
  { src: `${S3_BASE}/Events4.jpeg`, alt: "Outdoor event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event5.jpeg`, alt: "Hosted event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event6.jpeg`, alt: "Celebration setup", category: "Conference & Events" },
  { src: `${S3_BASE}/Event18.jpeg`, alt: "Resort celebration", category: "Conference & Events" },
  { src: `${S3_BASE}/Event15.jpeg`, alt: "Private event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event8.jpeg`, alt: "Outdoor gathering", category: "Conference & Events" },
  { src: `${S3_BASE}/Event9.jpeg`, alt: "Social event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event7.jpeg`, alt: "Resort occasion", category: "Conference & Events" },
  { src: `${S3_BASE}/Event11.jpeg`, alt: "Hosted moment", category: "Conference & Events" },
  { src: `${S3_BASE}/Party3.jpeg`, alt: "Outdoor party", category: "Conference & Events" },
  { src: `${S3_BASE}/Event13.jpeg`, alt: "Guest event", category: "Conference & Events" },
  { src: `${S3_BASE}/Event17.jpeg`, alt: "Event decor", category: "Conference & Events" },
  { src: `${S3_BASE}/Event16.jpeg`, alt: "Event reception", category: "Conference & Events" },
  { src: `${S3_BASE}/Event10.jpeg`, alt: "Event space", category: "Conference & Events" },
  { src: `${S3_BASE}/Team2.jpeg`, alt: "Team building 2", category: "Conference & Events" },
  { src: `${S3_BASE}/Team1.jpeg`, alt: "Team building 1", category: "Conference & Events" },
  { src: `${S3_BASE}/Event12.jpeg`, alt: "Team event", category: "Conference & Events" },
  { src: `${S3_BASE}/Party2.jpeg`, alt: "Picnic event", category: "Conference & Events" },

  { src: `${S3_BASE}/Bar1.jpg`, alt: "Bar 1", category: "Bar" },
  { src: `${S3_BASE}/Bar2.jpg`, alt: "Bar 2", category: "Bar" },

  { src: `${S3_BASE}/Standard Room1.jpeg`, alt: "Room 1", category: "Rooms" },
  { src: `${S3_BASE}/Standard Room2.jpeg`, alt: "Room 2", category: "Rooms" },
  { src: `${S3_BASE}/Standard Room3.jpeg`, alt: "Room 3", category: "Rooms" },
  { src: `${S3_BASE}/Standard Room4.jpeg`, alt: "Room 4", category: "Rooms" },
  { src: `${S3_BASE}/Standard Room5.jpeg`, alt: "Room 5", category: "Rooms" },
  { src: `${S3_BASE}/Standard Room6.jpeg`, alt: "Room 6", category: "Rooms" },
  { src: `${S3_BASE}/Superior Room1.jpeg`, alt: "Room 7", category: "Rooms" },
  { src: `${S3_BASE}/Superior Room2.jpeg`, alt: "Room 8", category: "Rooms" },
  { src: `${S3_BASE}/Superior Room3.jpeg`, alt: "Room 9", category: "Rooms" },
  { src: `${S3_BASE}/Twin Room1.jpeg`, alt: "Room 10", category: "Rooms" },
  { src: `${S3_BASE}/Twin Room2.jpeg`, alt: "Elegant Retreat", category: "Rooms" },
  { src: `${S3_BASE}/Twin Room3.jpeg`, alt: "Modern Washroom", category: "Rooms" },
  { src: `${S3_BASE}/Twin Room4.jpeg`, alt: "Bedroom Suite", category: "Rooms" },


  { src: `${S3_BASE}/Dining1.jpeg`, alt: "Dining 1", category: "Dining" },
  { src: `${S3_BASE}/Dining2.jpeg`, alt: "Dining 2", category: "Dining" },
  { src: `${S3_BASE}/Dining3.jpeg`, alt: "Dining 3", category: "Dining" },
  { src: `${S3_BASE}/Dining4.jpeg`, alt: "Dining 4", category: "Dining" },
  { src: `${S3_BASE}/Dining5.jpeg`, alt: "Dining 5", category: "Dining" },
  { src: `${S3_BASE}/Dining6.jpeg`, alt: "Dining 6", category: "Dining" },
  { src: `${S3_BASE}/Dining7.jpeg`, alt: "Breakfast 1", category: "Dining" },
  { src: `${S3_BASE}/Dining8.jpeg`, alt: "Gourmet Cuisine", category: "Dining" },
  { src: `${S3_BASE}/Dining9.jpeg`, alt: "Fine Dining", category: "Dining" },
  { src: `${S3_BASE}/Dining10.jpeg`, alt: "Elegant Meals", category: "Dining" },

  { src: `${S3_BASE}/IMG_2173.webp`, alt: "Fitness Center", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/IMG_3391.webp`, alt: "Wellness Spa", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/IMG_2174.webp`, alt: "Gym Hero", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/IMG_2160.webp`, alt: "Fitness Classes", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/IMG_2171.webp`, alt: "Personal Training", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/Massage.webp`, alt: "Massage Therapy", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/Sauna.webp`, alt: "Sauna and Steam Room", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/Herbal.webp`, alt: "Herbal Teas and Infusions", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/Facial.webp`, alt: "Facial Treatments", category: "Wellness & Fitness" },
  { src: `${S3_BASE}/BodyScrubs.webp`, alt: "Body Scrubs", category: "Wellness & Fitness" },

  { src: `${S3_BASE}/Swimmingpool.jpeg`, alt: "Infinity Pool", category: "Fun and Activities" },
  { src: `${S3_BASE}/Team2.jpeg`, alt: "Team Building 2", category: "Fun and Activities" },
  { src: `${S3_BASE}/Team1.jpeg`, alt: "Team Building 1", category: "Fun and Activities" },
  { src: `${S3_BASE}/IMG_3429.webp`, alt: "Swimming Pool View 1", category: "Fun and Activities" },
  { src: `${S3_BASE}/Swimmingpool2_result.png`, alt: "Swimming Pool View 2", category: "Fun and Activities" },
  { src: `${S3_BASE}/Games1.jpeg`, alt: "Games Area 1", category: "Fun and Activities" },
  { src: `${S3_BASE}/Games2.jpeg`, alt: "Games Area 2", category: "Fun and Activities" },
    { src: `${S3_BASE}/Games3.jpeg`, alt: "Games Area 2", category: "Fun and Activities" },
  { src: `${S3_BASE}/IMG_2277.webp`, alt: "Kids Activities 1", category: "Fun and Activities" },
  { src: `${S3_BASE}/IMG_2380.webp`, alt: "Kids Activities 2", category: "Fun and Activities" },
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

  .gp-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .gp-hero {
    position: relative;
    height: 70vh;
    min-height: 520px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .gp-hero-img {
    object-fit: cover;
    transform: scale(1.03);
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
  }

  .gp-hero-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(74,36,0,.12) 0%, rgba(74,36,0,.76) 100%),
      linear-gradient(90deg, rgba(74,36,0,.58) 0%, rgba(74,36,0,.08) 62%);
  }

  .gp-hero-content {
    position: relative;
    z-index: 2;
    width: min(1120px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 0 4.5rem;
  }

  .gp-eyebrow {
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

  .gp-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .gp-title {
    max-width: 820px;
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.8rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .gp-title em {
    color: var(--peach);
    font-style: italic;
  }

  .gp-intro {
    max-width: 650px;
    color: rgba(255,255,255,.84);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 1.35rem 0 2rem;
  }

  .gp-section {
    width: min(1160px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 0;
  }

  .gp-section-heading {
    display: grid;
    grid-template-columns: minmax(0, .95fr) minmax(280px, .7fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.25rem;
  }

  .gp-kicker {
    color: var(--brown);
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    margin-bottom: .75rem;
  }

  .gp-heading {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 4.2vw, 4.4rem);
    font-weight: 300;
    line-height: 1.02;
    margin: 0;
  }

  .gp-heading em {
    color: var(--brown);
    font-style: italic;
  }

  .gp-copy {
    color: rgba(74,36,0,.72);
    font-size: 1rem;
    line-height: 1.85;
    margin: 0;
  }

  .gp-filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-bottom: 1.5rem;
  }

  .gp-filter {
    border: 1px solid rgba(143,95,47,.22);
    background: var(--white);
    color: var(--brown-deep);
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: .68rem;
    font-weight: 600;
    letter-spacing: .12em;
    min-height: 42px;
    padding: .7rem .9rem;
    text-transform: uppercase;
    transition: background .25s var(--ease-out), color .25s var(--ease-out), border-color .25s var(--ease-out);
  }

  .gp-filter:hover,
  .gp-filter.gp-active {
    background: var(--brown-dark);
    border-color: var(--brown-dark);
    color: var(--peach);
  }

  .gp-summary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--sand);
    margin-bottom: 2rem;
  }

  .gp-stat {
    background: var(--white);
    padding: 1.4rem;
  }

  .gp-stat strong {
    display: block;
    color: var(--brown);
    font-family: var(--font-serif);
    font-size: 2.4rem;
    font-weight: 300;
    line-height: 1;
    margin-bottom: .45rem;
  }

  .gp-stat span {
    color: rgba(74,36,0,.66);
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .gp-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-auto-rows: 168px;
    gap: .65rem;
    background: var(--white);
    padding: .75rem;
  }

  .gp-tile {
    position: relative;
    border: 0;
    background: var(--sand);
    cursor: pointer;
    overflow: hidden;
    padding: 0;
    text-align: left;
  }

  .gp-tile:nth-child(12n + 1),
  .gp-tile:nth-child(12n + 8) {
    grid-column: span 2;
    grid-row: span 2;
  }

  .gp-tile:nth-child(12n + 5),
  .gp-tile:nth-child(12n + 11) {
    grid-column: span 2;
  }

  .gp-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform .9s var(--ease-out), filter .45s var(--ease-out);
  }

  .gp-tile:hover .gp-img {
    transform: scale(1.04);
    filter: saturate(.9) sepia(.08) contrast(.92) brightness(.88);
  }

  .gp-empty {
    background: var(--white);
    color: rgba(74,36,0,.7);
    padding: 3rem;
    text-align: center;
  }

  .gp-lightbox {
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(22,10,0,.96);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .gp-lightbox-frame {
    width: min(1180px, 100%);
    max-height: 88vh;
    display: grid;
    grid-template-rows: minmax(0, 1fr);
  }

  .gp-lightbox-image {
    position: relative;
    min-height: min(72vh, 760px);
    background: rgba(255,211,163,.08);
    overflow: hidden;
  }

  .gp-lightbox-image img {
    object-fit: contain;
  }

  .gp-icon-btn {
    position: fixed;
    z-index: 1001;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,211,163,.45);
    background: var(--peach);
    color: var(--brown-dark);
    cursor: pointer;
    transition: background .25s var(--ease-out), color .25s var(--ease-out), transform .25s var(--ease-out);
  }

  .gp-icon-btn:hover {
    background: var(--gold);
    transform: translateY(-2px);
  }

  .gp-close {
    top: 1.5rem;
    right: 1.5rem;
  }

  .gp-prev {
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .gp-next {
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .gp-prev:hover,
  .gp-next:hover {
    transform: translateY(calc(-50% - 2px));
  }

  @media (max-width: 980px) {
    .gp-hero {
      height: 64vh;
      min-height: 460px;
    }

    .gp-hero-content,
    .gp-section {
      width: min(100% - 2rem, 720px);
    }

    .gp-hero-content {
      padding-bottom: 3rem;
    }

    .gp-section {
      padding: 4rem 0;
    }

    .gp-section-heading {
      grid-template-columns: 1fr;
    }

    .gp-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-auto-rows: 158px;
    }

    .gp-summary {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .gp-hero {
      height: 58vh;
      min-height: 420px;
    }

    .gp-title {
      font-size: clamp(2.45rem, 13vw, 3.5rem);
    }

    .gp-intro {
      font-size: .94rem;
      line-height: 1.65;
    }

    .gp-filter-bar {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .gp-filter {
      width: 100%;
      padding-left: .5rem;
      padding-right: .5rem;
    }

    .gp-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 132px;
      gap: .5rem;
      padding: .5rem;
    }

    .gp-tile:nth-child(12n + 1),
    .gp-tile:nth-child(12n + 8),
    .gp-tile:nth-child(12n + 5),
    .gp-tile:nth-child(12n + 11) {
      grid-column: span 2;
    }

    .gp-lightbox {
      padding: 1rem;
    }

    .gp-lightbox-image {
      min-height: 62vh;
    }

    .gp-close {
      top: .75rem;
      right: .75rem;
    }

    .gp-prev {
      left: .75rem;
    }

    .gp-next {
      right: .75rem;
    }
  }
`;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryImages.map((image) => image.category)))],
    []
  );

  const filteredImages = useMemo(
    () =>
      activeFilter === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeFilter),
    [activeFilter]
  );

  const selectedIndex = selectedImage
    ? filteredImages.findIndex((image) => image.src === selectedImage.src)
    : -1;

  const handlePrevious = () => {
    if (!selectedImage || filteredImages.length === 0) return;
    const currentIndex = selectedIndex >= 0 ? selectedIndex : 0;
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage || filteredImages.length === 0) return;
    const currentIndex = selectedIndex >= 0 ? selectedIndex : 0;
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <section id="gallery" className="gp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="gp-hero">
        <Image
          src={`${S3_BASE}/IMG_2256.webp`}
          alt="Enchula Resort gallery"
          fill
          className="gp-hero-img"
          priority
          sizes="100vw"
        />
        <div className="gp-hero-overlay" />
        <div className="gp-hero-content">
          <div className="gp-eyebrow">Resort gallery</div>
          <h1 className="gp-title">
            Moments from <em>across Enchula</em>
          </h1>
          <p className="gp-intro">
            Explore the rooms, dining spaces, wellness areas, events, activities, and quiet resort
            corners that shape the Enchula experience.
          </p>
        </div>
      </div>

      <div className="gp-section">
        <div className="gp-section-heading">
          <div>
            <div className="gp-kicker">Curated views</div>
            <h2 className="gp-heading">
              Browse the resort by <em>space and story</em>
            </h2>
          </div>
          <p className="gp-copy">
            Use the filters to move through the gallery, then open any image for a larger view.
            Every crop stays rectangular and warm, matching the updated pages across the site.
          </p>
        </div>

        <div className="gp-summary">
          <div className="gp-stat">
            <strong>{galleryImages.length}</strong>
            <span>Gallery images</span>
          </div>
          <div className="gp-stat">
            <strong>{categories.length - 1}</strong>
            <span>Categories</span>
          </div>
          <div className="gp-stat">
            <strong>{filteredImages.length}</strong>
            <span>{activeFilter === "All" ? "Currently visible" : activeFilter}</span>
          </div>
        </div>

        <div className="gp-filter-bar" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              type="button"
              className={`gp-filter ${category === activeFilter ? "gp-active" : ""}`}
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setSelectedImage(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <div className="gp-grid">
            {filteredImages.map((image, index) => (
              <button
                type="button"
                className="gp-tile"
                key={`${image.src}-${index}`}
                onClick={() => setSelectedImage(image)}
                aria-label={`Open ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gp-img"
                  sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 20vw"
                  priority={index < 6}
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="gp-empty">
            <Camera size={28} />
            <p>No images found for this category.</p>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="gp-lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.alt}>
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="gp-icon-btn gp-close"
            aria-label="Close gallery image"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={handlePrevious}
            className="gp-icon-btn gp-prev"
            aria-label="Previous gallery image"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="gp-icon-btn gp-next"
            aria-label="Next gallery image"
          >
            <ChevronRight size={26} />
          </button>

          <div className="gp-lightbox-frame">
            <div className="gp-lightbox-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
