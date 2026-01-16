import React from "react";
import Image from "next/image";

export function CarouselHero({ images }: { images: string[] }) {
  const [current, setCurrent] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, mounted]);

  if (!mounted) {
    // Render only the first image on the server to avoid hydration mismatch
    return (
      <Image
        src={images[0]}
        alt="Wellness Hero 1"
        fill
        className="object-cover absolute inset-0 transition-opacity duration-1000 opacity-100 z-10"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    );
  }

  return (
    <>
      {images.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt={`Wellness Hero ${idx + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={idx === 0}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-t from-[#741F31]/80 via-transparent to-transparent rounded-2xl z-20"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <span key={idx} className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#8F5F2F]' : 'bg-[#B99A66]/50'} block transition-all`} />
        ))}
      </div>
    </>
  );
}
