import { Globe, Shield, Target, Heart, Users, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Globe,
    title: "Unity",
    description:
      "Bringing together Uyghur communities across North America through shared passion for sports.",
    color: "bg-nausa-lightblue/25",
  },
  {
    icon: Shield,
    title: "Cultural Preservation",
    description:
      "Maintaining and celebrating our rich Uyghur heritage for future generations.",
    color: "bg-nausa-lightblue/40",
  },
  {
    icon: Target,
    title: "Youth Empowerment",
    description:
      "Developing leadership, character, and athletic ability in our young community members.",
    color: "bg-nausa-lightblue/55",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Creating lasting bonds and memories that strengthen our diaspora community.",
    color: "bg-nausa-lightblue/70",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Welcoming all skill levels and ages to participate in our events and programs.",
    color: "bg-nausa-lightblue/85",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "Striving for the highest standards in sportsmanship and event organization.",
    color: "bg-nausa-lightblue",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-10 sm:py-14 bg-nausa-blue/50 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 sm:mb-12">
          OUR <span className="text-nausa-vanilla">VALUES</span>
        </h2>
        {/* FIXED: Mobile responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div
                  className={cn(
                    "w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform",
                    value.color
                  )}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
