// Modern popping carousel for activities/experiences
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ActivityCarouselProps {
  images: { src: string; alt: string }[];
  interval?: number;
  height?: number;
  width?: number;
}

export default function ActivityCarousel({ images, interval = 4000, height = 240, width = 320 }: ActivityCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [images.length, interval]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div
        className="relative flex items-center justify-center"
        style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px` }}
      >
        <Image
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          width={width}
          height={height}
          className="rounded-2xl object-cover shadow-lg smooth-fade"
          style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px` }}
          priority
        />
      </div>
      <div className="flex gap-2 mt-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#B99A66]' : 'bg-[#e0c9a6]'} transition-all`}
          />
        ))}
      </div>
      <style jsx global>{`
        .smooth-fade {
          animation: smoothFade 1s ease-in-out both;
        }
        @keyframes smoothFade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
