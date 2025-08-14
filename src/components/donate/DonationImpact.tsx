import { Users, Trophy, Calendar, Heart } from "lucide-react";

export default function DonationImpact() {
  const impacts = [
    {
      icon: Users,
      amount: "$25",
      description: "Provides soccer equipment for players",
    },
    {
      icon: Trophy,
      amount: "$50",
      description: "Covers tournament registration for an athlete",
    },
    {
      icon: Calendar,
      amount: "$100",
      description: "Supports travel for an athlete to attend a tournament",
    },
    {
      icon: Heart,
      amount: "$250",
      description: "Funds lodging for a player's tournament attendance",
    },
  ];

  return (
    <section className="py-20 bg-nausa-lightblue/70">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            Your Impact <span className="text-nausa-vanilla">Matters</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="bg-nausa-blue rounded-full p-3 flex-shrink-0">
                    <Icon className="w-6 h-6 text-nausa-vanilla" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-nausa-blue">
                      {impact.amount}
                    </h3>
                    <p className="text-nausa-blue">{impact.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-nausa-blue to-blue-700 rounded-2xl p-8 text-nausa-vanilla text-center">
            <h3 className="text-2xl font-bold mb-4">
              100% of Your Donation Goes to Programs
            </h3>
            <p className="text-lg opacity-90 mb-6">
              As a 501(c)(3) nonprofit organization, your donation is
              tax-deductible. We maintain complete transparency in how funds are
              used to support our community.
            </p>
            <p className="text-sm opacity-75">
              Tax ID: 93-2985026 | You will receive a tax receipt via email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
