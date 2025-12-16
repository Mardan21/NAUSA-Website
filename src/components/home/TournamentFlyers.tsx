"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

const tournamentFlyers = [
  {
    id: 1,
    title: "UAC Tournament 2025",
    tabLabel: "Tournament Details",
    image: "/images/flyers/soccer-tournament-2025.jpg",
    dates: "December 17-20, 2025",
    description: "Memorial Hermann Sports Park-Katy",
  },
  {
    id: 2,
    title: "Tournament Schedule",
    tabLabel: "Game Schedule",
    image: "/images/flyers/schedule-2025.jpg",
    dates: "December 17-20, 2025",
    description: "Full match schedule & Opening Ceremony info",
  },
  {
    id: 3,
    title: "Tennis Open 2025",
    tabLabel: "Tennis Info",
    image: "/images/flyers/tennis-open-2025.jpg",
    dates: "December 15-16, 2025",
    description: "Memorial Park Tennis Center - 1pm to 5pm",
  },
  {
    id: 4,
    title: "Yashlar Event",
    tabLabel: "Rawan Youth Event",
    image: "/images/flyers/yashlar-event-2025.jpg",
    dates: "Sunday, Dec 21, 2025",
    description: "College info session, games, food & socializing",
  },
];

export default function TournamentFlyers() {
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const [showFullView, setShowFullView] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showFullView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFullView]);

  const nextFlyer = () => {
    setCurrentFlyer((prev) => (prev + 1) % tournamentFlyers.length);
  };

  const prevFlyer = () => {
    setCurrentFlyer(
      (prev) => (prev - 1 + tournamentFlyers.length) % tournamentFlyers.length
    );
  };

  // Handle modal close with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showFullView) {
        setShowFullView(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showFullView]);

  // Handle modal background click
  const handleModalBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowFullView(false);
    }
  };

  return (
    <>
      {/* Flyer carousel container */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto shadow-2xl">
        <div className="relative">
          {/* FIXED: Smaller portrait container with equal padding */}
          <div className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mx-auto rounded-xl overflow-hidden shadow-lg bg-white/5 p-3">
            <Image
              src={tournamentFlyers[currentFlyer].image}
              alt={tournamentFlyers[currentFlyer].title}
              fill
              className="object-contain"
            />

            {/* Full view button */}
            <button
              onClick={() => setShowFullView(true)}
              className="absolute top-1 right-1 bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-all hover:scale-110 z-10"
              aria-label="View full size"
            >
              <Maximize2 className="w-3 h-3" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevFlyer}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-all hover:scale-110 z-10"
              aria-label="Previous flyer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextFlyer}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-1.5 rounded-full hover:bg-black/90 transition-all hover:scale-110 z-10"
              aria-label="Next flyer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tournament info */}
          <div className="mt-2 text-center">
            <h4 className="text-sm font-black text-white mb-1">
              {tournamentFlyers[currentFlyer].title}
            </h4>
            <p className="text-nausa-vanilla font-bold text-xs mb-0.5">
              {tournamentFlyers[currentFlyer].dates}
            </p>
            <p className="text-white/90 text-xs hidden sm:block">
              {tournamentFlyers[currentFlyer].description}
            </p>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-2 space-x-1.5">
            {tournamentFlyers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFlyer(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentFlyer
                  ? "bg-nausa-vanilla scale-125"
                  : "bg-white/50 hover:bg-white/75"
                  }`}
                aria-label={`View ${tournamentFlyers[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Quick navigation tabs */}
        <div className="grid grid-cols-4 gap-1 mt-3">
          {tournamentFlyers.map((tournament, index) => (
            <button
              key={tournament.id}
              onClick={() => setCurrentFlyer(index)}
              className={`p-1.5 rounded-lg text-[8px] sm:text-[9px] font-bold uppercase transition-all text-center leading-tight min-h-[36px] flex items-center justify-center ${index === currentFlyer
                ? "bg-nausa-vanilla text-nausa-blue"
                : "bg-white/20 text-white hover:bg-white/30"
                }`}
            >
              {tournament.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* FIXED: Enhanced Modal with proper portrait display */}
      {showFullView && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={handleModalBackgroundClick}
        >
          <div className="relative w-full max-w-lg h-full max-h-[90vh] flex flex-col">
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowFullView(false)}
                className="bg-white/10 backdrop-blur-sm text-white hover:text-nausa-vanilla hover:bg-white/20 transition-colors p-3 rounded-full"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* FIXED: Proper modal image container */}
            <div className="relative flex-1 bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative w-full h-full p-4">
                <Image
                  src={tournamentFlyers[currentFlyer].image}
                  alt={tournamentFlyers[currentFlyer].title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Modal navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevFlyer}
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors p-3 rounded-full"
                aria-label="Previous flyer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-center text-white px-4">
                <h3 className="text-lg sm:text-xl font-black mb-1">
                  {tournamentFlyers[currentFlyer].title}
                </h3>
                <p className="text-nausa-vanilla font-bold text-sm sm:text-base">
                  {tournamentFlyers[currentFlyer].dates}
                </p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  {tournamentFlyers[currentFlyer].description}
                </p>
              </div>

              <button
                onClick={nextFlyer}
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors p-3 rounded-full"
                aria-label="Next flyer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal dots indicator */}
            <div className="flex justify-center mt-4 space-x-3">
              {tournamentFlyers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFlyer(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentFlyer
                    ? "bg-nausa-lightblue scale-125"
                    : "bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`View ${tournamentFlyers[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
