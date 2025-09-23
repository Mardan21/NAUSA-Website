import Image from "next/image";
import { Trophy, Target, Users, Heart, Globe } from "lucide-react";

export default function MissionSection() {
  const missionPillars = [
    {
      icon: Target,
      title: "Leadership Development",
      description: "Building character and sportsmanship in our youth",
    },
    {
      icon: Users,
      title: "Community Unity",
      description: "Bringing Uyghur families together across North America",
    },
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "Maintaining our heritage through shared experiences",
    },
    {
      icon: Globe,
      title: "Athletic Excellence",
      description: "Promoting fitness and competitive spirit",
    },
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/img85.jpg"
          alt="Team celebration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nausa-blue/95 via-nausa-blue/90 to-nausa-blue/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-nausa-lightblue rounded-full mb-4">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
              OUR <span className="text-nausa-vanilla">MISSION</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-nausa-vanilla italic">
              &quot;Promoting unity through sports&quot;
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/20">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white text-center max-w-4xl mx-auto">
              The purpose of North American Uyghur Sports Association is to
              advocate for Uyghur sports to promote the development of
              leadership, character, sportsmanship, tolerance, discipline, and
              athletic ability, and to nurture fitness, volunteerism, plus to
              preserve our Uyghur identity.
            </p>
          </div>

          {/* Mission Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20 group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-nausa-vanilla/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-nausa-vanilla" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-nausa-vanilla mb-3">
                Join Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Be part of something bigger. Help us build bridges through
                sports and preserve our culture for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/about"
                  className="bg-nausa-lightblue text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue transition-all transform hover:scale-105 text-sm"
                >
                  Learn More
                </a>
                <a
                  href="/donate"
                  className="border-2 border-nausa-vanilla text-nausa-vanilla px-6 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-nausa-vanilla hover:text-nausa-blue transition-all transform hover:scale-105 text-sm"
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
