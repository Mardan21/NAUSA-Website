import Image from "next/image";
import { Calendar, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { TOURNAMENT_2025 } from "@/lib/constants";

export default function UpcomingTournament() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-black text-center mb-12">
          UPCOMING <span className="text-nausa-green">TOURNAMENT</span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/images/tournament/_DSC0013.jpg"
                  alt="Tournament preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden"></div>
              </div>
              <div className="p-10 md:p-16">
                <div className="inline-block px-4 py-2 bg-nausa-green text-white font-bold uppercase text-sm rounded-full mb-6">
                  Registration Open
                </div>
                <h3 className="text-4xl font-black mb-6">
                  Uyghur American Cup 2025
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-lg">
                    <Calendar className="w-6 h-6 text-nausa-green mr-3" />
                    <span className="font-semibold">
                      {TOURNAMENT_2025.dates}
                    </span>
                  </div>
                  <div className="flex items-center text-lg">
                    <MapPin className="w-6 h-6 text-nausa-green mr-3" />
                    <span className="font-semibold">
                      {TOURNAMENT_2025.location}
                    </span>
                  </div>
                  <div className="flex items-center text-lg">
                    <Clock className="w-6 h-6 text-nausa-green mr-3" />
                    <span className="font-semibold">
                      Early Bird Deadline: {TOURNAMENT_2025.earlyBirdDeadline}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/register" variant="primary">
                    Register Your Team
                  </Button>
                  <Button href="/tournaments/2024" variant="secondary">
                    View Last Year
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
