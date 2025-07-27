import Image from "next/image";
import { sponsors } from "../../data/sponsors";
import Button from "@/components/ui/Button";

export default function PartnersSection() {
  const platinumSponsors = sponsors.filter((s) => s.level === "platinum");
  const goldSponsors = sponsors.filter((s) => s.level === "gold");
  const otherSponsors = sponsors.filter(
    (s) => s.level === "silver" || s.level === "bronze"
  );

  return (
    <section className="py-14 bg-nausa-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-white mb-4">
          OUR <span className="text-nausa-vanilla">PARTNERS</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 text-md">
          Supporting Uyghur sports across North America
        </p>

        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center text-nausa-vanilla mb-6">
              PLATINUM SPONSORS
            </h3>
            <div className="flex justify-center items-center gap-4">
              {platinumSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur p-4 rounded-xl hover:bg-white/20 transition-all group mx-4 w-[200px] h-[125px] flex items-center justify-center"
                >
                  <div className="relative w-full h-full ">
                    <Image
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      width={200}
                      height={200}
                      className="object-containfilter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {goldSponsors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-center text-nausa-vanilla mb-6">
              GOLD SPONSORS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {goldSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur p-4 rounded-xl hover:bg-white/20 transition-all group mx-auto w-[200px] h-[125px] flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      fill
                      className="object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {otherSponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur p-4 rounded-xl hover:bg-white/20 transition-all group"
            >
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
                width={120}
                height={60}
                className="filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity w-full h-auto"
              />
            </a>
          ))}
        </div>

        <div className="text-center mt-6 ">
          <Button
            href="/sponsors"
            variant="outline"
            className="bg-nausa-lightblue border-2 border-nausa-lightblue text-sm text-white hover:bg-white hover:text-nausa-lightblue hover:border-nausa-lightblue"
          >
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
