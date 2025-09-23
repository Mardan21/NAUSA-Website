import Image from "next/image";
import { clubTeams } from "../../data/teams";

export default function AffiliateClubs() {
  return (
    <section className="py-10 sm:py-14 bg-nausa-lightblue/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 sm:mb-12">
          AFFILIATE <span className="text-nausa-vanilla">CLUBS</span>
        </h2>
        {/* FIXED: Mobile responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {clubTeams.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-square mb-3 sm:mb-4 flex items-center justify-center">
                <Image
                  src={member.logoUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-nausa-vanilla text-center">
                Est. {member.established}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
