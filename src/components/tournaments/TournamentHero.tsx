import Image from "next/image";
import { Tournament } from "@/lib/types";

interface TournamentHeroProps {
  tournament: Tournament;
}

export default function TournamentHero({ tournament }: TournamentHeroProps) {
  return (
    <section className="relative h-96 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={`/images/tournaments/${tournament.year}-hero.jpg`}
          alt={`${tournament.year} Tournament`}
          fill
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/images/tournament-default-hero.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-black mb-4 text-shadow-lg">
            {tournament.year}{" "}
            <span className="text-nausa-green">TOURNAMENT</span>
          </h1>
          <p className="text-2xl font-medium">
            {tournament.location} {tournament.venue && `• ${tournament.venue}`}
          </p>
        </div>
      </div>
    </section>
  );
}
