"use client";

// src/components/ui/MosaicCollage.tsx
import Image from "next/image";
import { useMemo } from "react";

interface MosaicCollageProps {
  images: readonly string[];
}

export function MosaicCollage({ images }: MosaicCollageProps) {
  const tiles = useMemo(() => {
    if (images.length === 0) return [];

    // Create array of tiles with repeated images
    const result = [];
    for (let i = 0; i < 200; i++) {
      result.push({
        id: i,
        src: images[i % images.length],
      });
    }
    return result;
  }, [images]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Desktop Grid - Simple uniform grid */}
      <div className="hidden md:grid grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-0.5 w-full h-full">
        {tiles.map((tile) => (
          <div key={tile.id} className="relative aspect-square overflow-hidden">
            <Image
              src={tile.src}
              alt=""
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              sizes="10px 20px"
              priority={tile.id < 100}
              quality={75}
            />
          </div>
        ))}
      </div>

      {/* Mobile Grid */}
      <div className="grid md:hidden grid-cols-3 sm:grid-cols-4 gap-0.5 w-full h-full">
        {tiles.slice(0, 40).map((tile) => (
          <div key={tile.id} className="relative aspect-square overflow-hidden">
            <Image
              src={tile.src}
              alt=""
              fill
              className="object-cover"
              sizes="33vw"
              priority={tile.id < 12}
              quality={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
