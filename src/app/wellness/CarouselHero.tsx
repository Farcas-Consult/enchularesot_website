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

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[120vh] min-h-[400px] overflow-hidden flex-1">
        <Image
          src={images[0]}
          alt="Hero"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}