import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import TournamentFlyers from "./TournamentFlyers";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/other/field_background.jpeg"
          alt="Soccer action shot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-nausa-blue/20 to-nausa-lightblue/15"></div>
      </div>

      {/* Hero content - OPTIMIZED for mobile viewport */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-16 sm:pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
            {/* Left side - Text content - MOBILE OPTIMIZED */}
            <div className="text-center lg:text-left text-white order-2 lg:order-1">
              {/* MOBILE: Much smaller title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 lg:mb-6 leading-tight text-shadow-lg">
                UYGHUR
                <br />
                <span className="text-nausa-lightblue/80">AMERICAN CUP</span>
                <br />
                2025
              </h1>

              {/* MOBILE: Shorter description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 lg:mb-6 font-medium max-w-2xl mx-auto lg:mx-0">
                <span className="sm:hidden">
                  Join 1000+ for the largest Uyghur sports tournament in North
                  America
                </span>
                <span className="hidden sm:inline">
                  Join 1000+ community members for the largest Uyghur sports
                  tournament series in North America
                </span>
              </p>

              {/* MOBILE: Compact buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/media"
                  className="w-full sm:w-auto border-2 border-white bg-white text-nausa-lightblue px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold sm:font-black uppercase tracking-wide hover:bg-nausa-lightblue hover:border-white hover:text-white transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base text-center"
                >
                  Past Highlights
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto border-2 border-nausa-lightblue bg-nausa-lightblue text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold sm:font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side - Tournament flyers - MOBILE OPTIMIZED */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <TournamentFlyers />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on small mobile */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
      </div>
    </section>
  );
}
