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
    <section className="py-14 bg-nausa-blue/50 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-12">
          OUR <span className="text-nausa-vanilla">VALUES</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform",
                    value.color
                  )}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-sm text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
