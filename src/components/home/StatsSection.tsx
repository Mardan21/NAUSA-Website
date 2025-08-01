import { Trophy, Users, Heart, MapPin } from "lucide-react";
import { getYearsSinceStart } from "@/lib/utils";

export default function StatsSection() {
  const stats = [
    {
      icon: Trophy,
      value: getYearsSinceStart(),
      label: "Years Running",
      subtext: "Since 2015",
    },
    {
      icon: Users,
      value: "200+",
      label: "Active Players",
      subtext: "Across all teams",
    },
    {
      icon: Heart,
      value: "1K+",
      label: "Community Members",
      subtext: "Annual attendance",
    },
    {
      icon: MapPin,
      value: "13",
      label: "States & Provinces",
      subtext: "USA (11), Canada (2)",
    },
  ];

  return (
    <section className="py-14 pb-20 bg-nausa-lightblue/50 text-white relative overflow-hidden">
      {/* Wavy background */}
      <div className="waves-container z-[-1]">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="#2E294E"
              opacity="0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="#2E294E"
              opacity="0.5"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="4"
              fill="#2E294E"
              opacity="0.3"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="#2E294E"
              opacity="0.1"
            />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-16">
          {getYearsSinceStart()} YEARS OF{" "}
          <span className="text-nausa-vanilla">UYGHUR EXCELLENCE</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="w-30 h-30 bg-nausa-vanilla rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-4xl font-black text-nausa-blue">
                      {stat.value}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-nausa-blue rounded-full p-2">
                    <Icon className="w-5 h-5 text-nausa-vanilla" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="font-bold text-nausa-vanilla text-md">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
