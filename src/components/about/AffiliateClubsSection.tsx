import Image from "next/image";
import { clubTeams } from "../../data/teams";

export default function AffiliateClubs() {
  return (
    <section className="py-14 bg-nausa-lightblue/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-12">
          AFFILIATE <span className="text-nausa-vanilla">CLUBS</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {clubTeams.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-square mb-4 flex items-center justify-center">
                <Image
                  src={member.logoUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              {/* <p className="text-white font-semibold mb-2">
                {member.instagramUrl}
              </p> */}
              <p className="text-md text-nausa-vanilla">
                {/* {Array.from({ length: member.titles }).fill("🏆").join(" ")}{" "} */}
                Est. {member.established}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
