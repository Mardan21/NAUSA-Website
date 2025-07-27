import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { clubTeams } from "@/data/teams";

export default function TeamSocial() {
  return (
    <section className="py-20 bg-nausa-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center text-white mb-4">
          FOLLOW OUR <span className="text-nausa-green">TEAMS</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Stay connected with participating teams on social media
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clubTeams.map((team) => (
            <a
              key={team.name}
              href={team.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur p-8 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 group"
            >
              <Image
                src={team.logoUrl}
                alt={team.name}
                width={120}
                height={120}
                className="w-24 h-24 object-contain mx-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-center text-white font-bold">{team.name}</p>
              {team.established && (
                <p className="text-center text-gray-400 text-sm">
                  Est. {team.established}
                </p>
              )}
              <div className="flex items-center justify-center mt-3 text-nausa-green opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
