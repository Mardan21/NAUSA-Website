import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Calendar, Users } from "lucide-react";
import TournamentStandings from "./TournamentStandings";
import TournamentFlyers from "./TournamentFlyers";
import { TOURNAMENT_2025 } from "@/lib/constants";

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

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-16 sm:pt-20 pb-16 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left side - Tournament Info */}
            <div className="text-center lg:text-left text-white order-1 lg:order-1 p-2">
              {/* Tournament Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 lg:mb-6 leading-tight text-shadow-lg">
                UYGHUR
                <br />
                <span className="text-nausa-lightblue">AMERICAN CUP</span>
                <br />
                2025
              </h1>

              {/* Tournament Standings */}
              <div className="mb-4 lg:mb-6 flex flex-col items-center lg:items-start">
                <TournamentStandings />
              </div>

              {/* Venue and Date Info */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4 lg:mb-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-nausa-vanilla" />
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold text-white">
                      {TOURNAMENT_2025.location}
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/80">
                      {TOURNAMENT_2025.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-nausa-vanilla" />
                  <p className="text-xs sm:text-sm font-bold text-white">
                    {TOURNAMENT_2025.dates}
                  </p>
                </div>
              </div>

              {/* Teams */}
              <div className="mb-4 lg:mb-6">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                  <Users className="w-4 h-4 text-nausa-vanilla" />
                  <span className="text-xs font-bold text-nausa-vanilla uppercase">
                    Competing Teams
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {TOURNAMENT_2025.teams.map((team) => (
                    <span
                      key={team}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-white border border-white/30 hover:bg-white/30 transition-colors"
                    >
                      {team}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/media"
                  className="border-2 border-white bg-white text-nausa-lightblue px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold sm:font-black uppercase tracking-wide hover:bg-nausa-lightblue hover:border-white hover:text-white transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base text-center"
                >
                  Past Highlights
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-nausa-lightblue bg-nausa-lightblue text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-bold sm:font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue transition-all transform hover:scale-105 text-xs sm:text-sm lg:text-base text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side - Tournament Flyers Carousel */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-0">
              <TournamentFlyers />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
      </div>
    </section>
  );
}
