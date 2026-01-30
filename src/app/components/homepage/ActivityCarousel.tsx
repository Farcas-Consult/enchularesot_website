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

export default function ActivityCarousel({ images, interval = 2000, height = 320, width = 540 }: ActivityCarouselProps) {
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
          className="rounded-3xl object-cover shadow-xl pop-fade"
          style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px` }}
          priority
        />
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-[#B99A66] border-[#8F5F2F]' : 'bg-[#e0c9a6] border-[#B99A66]'} transition-all`}
          />
        ))}
      </div>
      <style jsx global>{`
        .pop-fade {
          animation: popFade 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes popFade {
          0% { opacity: 0; transform: scale(0.92); }
          60% { opacity: 1; transform: scale(1.04); }
          80% { transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
