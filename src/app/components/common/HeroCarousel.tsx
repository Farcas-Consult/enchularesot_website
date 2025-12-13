import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  interval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[340px] md:h-[480px] lg:h-[560px] overflow-hidden rounded-2xl shadow-lg">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Hero image ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          draggable={false}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-[#800000]' : 'bg-white/60'} border border-[#800000] transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
