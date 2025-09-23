"use client";

import { useEffect, useRef } from "react";
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
  speed = 30,
  className = "",
}: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const step = Math.max(0.2, speed / 60); // pixels per frame

    const animate = () => {
      scrollPos += step;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [logos, speed]);

  // Duplicate logos for infinite effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays for seamless loop effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-nausa-blue to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-nausa-blue to-transparent pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-8 lg:gap-12 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
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
