import Image from "next/image";
import { boardMembers } from "../../data/board-members";

export default function LeadershipTeam() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10 sm:mb-12 lg:mb-16">
          LEADERSHIP <span className="text-nausa-green">TEAM</span>
        </h2>
        {/* FIXED: Mobile responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {boardMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-nausa-green font-semibold mb-2 text-sm sm:text-base">
                {member.position}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
