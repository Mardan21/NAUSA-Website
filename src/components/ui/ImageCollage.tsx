import Image from "next/image";
import { useMemo } from "react";

interface ImageCollageProps {
  images: readonly string[];
}

export function ImageCollage({ images }: ImageCollageProps) {
  // shuffled array for random positioning of images
  const collageImages = useMemo(() => {
    if (images.length == 0) {
      return [];
    }

    // we want enough images to fill the screen
    // 10 columns and ~8 rows visible -> ~80 images
    const targetCount = 120; // extra to ensure full coverage
    const result: string[] = [];

    // fill array by repeating image set
    while (result.length < targetCount) {
      result.push(...images);
    }

    // trim to exact count and shuffle
    return result.slice(0, targetCount).sort(() => Math.random() - 0.5);
  }, [images]);

  return (
    <div className="image-collage hidden md:grid absolute inset-0 grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 auto-rows-fr">
      {collageImages.slice(0, 40).map((src, index) => (
        <div key={index} className="collage-item">
          <Image
            src={src}
            alt={`Tournament moment ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover hover:scale-110 transition-transform duration-300"
            loading={index < 8 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
