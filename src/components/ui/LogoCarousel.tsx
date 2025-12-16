"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LogoCarouselProps {
  logos: Array<{
    id: number;
    name: string;
    logoUrl: string;
    website?: string;
  }>;
  speed?: number;
  className?: string;
}

export default function LogoCarousel({
  logos,
  speed = 2,
  className = "",
}: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const pixelsPerFrame = speed; // pixels per frame at 60fps

    const animate = () => {
      if (!isPaused) {
        scrollPosRef.current += pixelsPerFrame;

        // Get the width of one set of logos (1/3 of total since we triple them)
        const singleSetWidth = scrollContainer.scrollWidth / 3;

        // Reset seamlessly when we've scrolled past one full set
        if (scrollPosRef.current >= singleSetWidth) {
          scrollPosRef.current = scrollPosRef.current - singleSetWidth;
        }
      }

      scrollContainer.style.transform = `translateX(-${scrollPosRef.current}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed, isPaused]);

  // Triple logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient overlays for seamless loop effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-nausa-blue to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-nausa-blue to-transparent pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-8 lg:gap-12 will-change-transform"
      >
        {duplicatedLogos.map((logo, index) => (
          <a
            key={`${logo.id}-${index}`}
            href={logo.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block flex-shrink-0 group"
          >
            <div
              className="relative w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 flex items-center justify-center 
                          bg-white/5 backdrop-blur-sm rounded-lg 
                          hover:bg-white/10 transition-all duration-300 
                          border border-white/10 hover:border-white/20"
            >
              <div className="relative w-full h-full p-4">
                <Image
                  src={logo.logoUrl}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain filter grayscale brightness-0 invert opacity-70 
                           group-hover:opacity-90 group-hover:scale-105 
                           transition-all duration-300"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
