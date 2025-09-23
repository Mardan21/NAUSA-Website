"use client";

import { useState } from "react";
import Image from "next/image";
// import { tournaments } from "@/data/tournaments";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleries } from "@/data/galleryImages";

interface PhotoGalleryProps {
  filterYear?: number;
}

export default function PhotoGallery({ filterYear }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(
    filterYear || null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 18; // 6 columns, 3 rows

  // Transform the galleries object into flat array with year property
  const allImages = Object.entries(galleries).flatMap(([year, images]) =>
    images.map((url, index) => ({
      id: `${year}-${index}`,
      url,
      year: parseInt(year),
      alt: `Tournament photo ${url} from ${year}`,
      category: "tournament",
    }))
  );

  const filteredImages = selectedYear
    ? allImages.filter((img) => img.year === selectedYear)
    : allImages;

  // Pagination logic
  const totalImages = filteredImages.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // reset to page 1 when year changes
  const handleYearChange = (year: number | null) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  // Get available years from galleries (not tournaments)
  // const availableYears = Object.keys(galleries)
  //   .map(Number)
  //   .sort((a, b) => b - a);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <section
      className={cn(
        filterYear ? "py-14 bg-white" : "py-14 bg-nausa-lightblue/50"
      )}
    >
      <div className="container mx-auto px-4">
        {!filterYear && (
          <>
            <h2 className="text-3xl font-black text-center mb-8">
              PHOTO <span className="text-nausa-vanilla">GALLERY</span>
            </h2>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              <button
                // onClick={() => setSelectedYear(null)}
                onClick={() => handleYearChange(null)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full font-bold transition-colors",
                  selectedYear === null
                    ? "bg-nausa-vanilla text-nausa-blue"
                    : "bg-nausa-blue text-nausa-vanilla/70 hover:bg-nausa-vanilla/50"
                )}
              >
                All Years
              </button>
              {Object.keys(galleries).map((year) => (
                <button
                  key={year}
                  // onClick={() => setSelectedYear(year)}
                  onClick={() => handleYearChange(parseInt(year))}
                  className={cn(
                    "px-4 py-2 rounded-full font-bold text-sm transition-colors",
                    selectedYear === parseInt(year)
                      ? "bg-nausa-vanilla text-nausa-blue"
                      : "bg-nausa-blue text-nausa-vanilla/70 hover:bg-nausa-vanilla/50"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(startIndex + index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="font-bold capitalize text-xs sm:text-sm">
                    {image.category}
                  </p>
                  <p className="text-xs">{image.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 pt-10 ">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={cn(
                "px-4 py-2 rounded-full font-bold transition-colors text-sm",
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-nausa-blue text-nausa-vanilla hover:bg-nausa-vanilla/50"
              )}
            >
              Previous
            </button>

            <div className="text-center">
              <p className="text-sm font-bold text-nausa-vanilla">
                Page {currentPage} of {totalPages} ({endIndex} / {totalImages}{" "}
                images)
              </p>
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={cn(
                "px-4 py-2 rounded-full font-bold transition-colors text-sm",
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-nausa-blue text-nausa-vanilla hover:bg-nausa-vanilla/50"
              )}
            >
              Next
            </button>
          </div>
        )}

        {/* Single page indicator */}
        {totalPages === 1 && totalImages > 0 && (
          <div className="text-center pt-10">
            <p className="text-sm font-bold text-nausa-vanilla">
              Page 1 of 1 ({totalImages} / {totalImages} images)
            </p>
          </div>
        )}

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-nausa-lightblue transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrevious}
              disabled={selectedImage === 0}
              className="absolute left-4 text-white hover:text-nausa-lightblue transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              disabled={selectedImage === filteredImages.length - 1}
              className="absolute right-4 text-white hover:text-nausa-lightblue transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-5xl max-h-[90vh]">
              <Image
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].alt}
                width={1200}
                height={800}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
