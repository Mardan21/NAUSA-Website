import Image from "next/image";
import { Trophy } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/tournament/_DSC1683.jpg"
          alt="Team celebration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-nausa-blue/90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Trophy className="w-16 h-16 mx-auto text-nausa-vanilla" />
          </div>
          <h2 className="text-3xl font-black mb-8">OUR MISSION</h2>
          <p className="text-2xl font-bold mb-6 text-nausa-vanilla italic">
            &ldquo;Promoting unity through sports&rdquo;
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            The purpose of North American Uyghur Sports Association is to
            advocate for Uyghur sports to promote the development of leadership,
            character, sportsmanship, tolerance, discipline, and athletic
            ability, and to nurture fitness, volunteerism, plus to preserve our
            Uyghur identity.
          </p>
        </div>
      </div>
    </section>
  );
}
