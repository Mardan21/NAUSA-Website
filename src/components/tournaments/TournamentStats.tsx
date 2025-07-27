import { Users, Trophy, Calendar } from "lucide-react";
import { Tournament } from "@/lib/types";

interface TournamentStatsProps {
  tournament: Tournament;
}

export default function TournamentStats({ tournament }: TournamentStatsProps) {
  const stats = [
    {
      icon: Users,
      value: tournament.teams.toString(),
      label: "Teams",
      color: "text-nausa-green",
    },
    {
      icon: Users,
      value: tournament.attendees ? `${tournament.attendees}+` : "500+",
      label: "Attendees",
      color: "text-nausa-blue",
    },
    {
      icon: Calendar,
      value: "3",
      label: "Days",
      color: "text-nausa-red",
    },
    {
      icon: Trophy,
      value: "20+",
      label: "Matches",
      color: "text-nausa-gold",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <p className="text-lg font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
