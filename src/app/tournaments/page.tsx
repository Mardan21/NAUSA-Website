import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tournaments } from "../../data/tournaments";

export default function TournamentsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tournament-history.jpg"
            alt="Tournament history"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-black mb-4">TOURNAMENT HISTORY</h1>
            <p className="text-xl font-medium">
              A decade of competition and community
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {tournaments.map((tournament) => (
              <Link
                key={tournament.year}
                href={`/tournaments/${tournament.year}`}
                className={`relative overflow-hidden rounded-xl shadow-lg ${
                  !tournament.canceled
                    ? "cursor-pointer transform hover:scale-105 transition-all"
                    : "cursor-not-allowed"
                }`}
              >
                <div className="relative h-64">
                  <Image
                    src={`/images/tournaments/${tournament.year}.jpg`}
                    alt={`${tournament.year} Tournament`}
                    fill
                    className="object-cover"
                  />
                  {tournament.canceled && (
                    <div className="absolute inset-0 bg-red-600/80 flex items-center justify-center">
                      <p className="text-white font-black text-2xl">CANCELED</p>
                    </div>
                  )}
                  {!tournament.canceled && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-black mb-2">
                    {tournament.year}
                  </h3>
                  <p className="text-lg font-medium mb-2">
                    {tournament.location}
                  </p>
                  {!tournament.canceled && (
                    <div className="flex items-center justify-between">
                      <span className="text-nausa-green font-bold">
                        {tournament.teams} Teams
                      </span>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
