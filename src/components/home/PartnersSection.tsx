import { sponsors } from "../../data/sponsors";
import Button from "@/components/ui/Button";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { Handshake, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function PartnersSection() {
  // Convert sponsors to the format expected by LogoCarousel
  const sponsorLogos = sponsors.map((sponsor) => ({
    id: sponsor.id,
    name: sponsor.name,
    logoUrl: sponsor.logoUrl,
    website: sponsor.website,
  }));

  // Separate by sponsorship level for better presentation
  const platinumSponsors = sponsors.filter((s) => s.level === "platinum");
  const goldSponsors = sponsors.filter((s) => s.level === "gold");

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-nausa-blue overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-nausa-lightblue rounded-full mb-4">
            <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            OUR <span className="text-nausa-vanilla">PARTNERS</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Supporting Uyghur sports and community across North America
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-nausa-vanilla/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-nausa-vanilla" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2">
              Community Impact
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Reach 10,000+ Uyghur families across North America
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-nausa-vanilla/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-nausa-vanilla" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2">
              Brand Visibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Featured in tournaments, media, and community events
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-white/20">
            <div className="w-12 h-12 bg-nausa-vanilla/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-nausa-vanilla" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2">
              Social Responsibility
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Support cultural preservation and youth development
            </p>
          </div>
        </div>

        {/* Featured Sponsors (if any platinum) */}
        {platinumSponsors.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-nausa-vanilla text-center mb-4 sm:mb-6">
              PLATINUM PARTNERS
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {platinumSponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div
                    className="relative w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 flex items-center justify-center 
                                bg-white/10 backdrop-blur-sm rounded-xl 
                                hover:bg-white/20 transition-all duration-300 
                                border border-white/20 hover:border-nausa-vanilla/50
                                shadow-lg hover:shadow-xl"
                  >
                    <div className="relative w-full h-full p-4">
                      <Image
                        src={sponsor.logoUrl}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain filter grayscale brightness-0 invert opacity-80 
                                 group-hover:opacity-100 group-hover:scale-105 
                                 transition-all duration-300"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Logo Carousel for all sponsors */}
        <div className="mb-8 sm:mb-12">
          <LogoCarousel logos={sponsorLogos} className="py-6" />
        </div>

        {/* Partnership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-nausa-vanilla mb-1">
              {sponsors.length}+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Partners
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-nausa-vanilla mb-1">
              8+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Years Active
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-nausa-vanilla mb-1">
              15+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Cities
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-nausa-vanilla mb-1">
              100%
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Satisfaction
            </p>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-nausa-vanilla mb-3">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join our mission to promote unity through sports. Partner with us
              and help empower the next generation of Uyghur athletes and
              community leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                href="/sponsors"
                variant="outline"
                className="bg-nausa-lightblue border-2 border-nausa-lightblue 
                         text-white hover:bg-white hover:text-nausa-lightblue 
                         hover:border-white px-6 sm:px-8 py-3 rounded-full font-bold 
                         uppercase tracking-wide transition-all transform hover:scale-105
                         text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Become a Partner
              </Button>

              <a
                href="mailto:info@UyghurSports.com?subject=Partnership%20Inquiry"
                className="text-xs sm:text-sm text-nausa-vanilla hover:text-white font-semibold underline transition-colors"
              >
                Learn More About Partnership
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full" />
      </div>
    </section>
  );
}
