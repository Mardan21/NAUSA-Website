import Image from "next/image";
import { boardMembers } from "../../data/board-members";

export default function LeadershipTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16">
          LEADERSHIP <span className="text-nausa-green">TEAM</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {boardMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-nausa-green font-semibold mb-2">
                {member.position}
              </p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
