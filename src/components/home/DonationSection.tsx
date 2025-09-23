import Image from "next/image";
import { Heart, Target, Award, Users as UsersIcon } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DonationSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-nausa-lightblue/50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/img424.jpg"
          alt="Community gathering"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nausa-lightblue/30 via-nausa-vanilla/20 to-nausa-lightblue/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-nausa-blue rounded-full mb-3 sm:mb-4 shadow-lg">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-nausa-vanilla fill-current" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-nausa-blue mb-3 sm:mb-4">
              SUPPORT THE <span className="text-nausa-vanilla">FUTURE</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-nausa-blue/80 font-medium leading-relaxed max-w-3xl mx-auto">
              Your contribution helps us foster cultural preservation, community
              unity, and the empowerment of Uyghur youth across North America.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Impact Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/60 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nausa-blue mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-nausa-lightblue" />
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-black text-nausa-lightblue mb-1">
                    $50K+
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-nausa-blue/70 uppercase tracking-wide">
                    Raised To-Date
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-black text-nausa-lightblue mb-1">
                    100%
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-nausa-blue/70 uppercase tracking-wide">
                    Goes to Programs
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/60 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nausa-blue mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-nausa-lightblue" />
                Tax Benefits
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-nausa-blue">
                    501(c)(3) Status
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white bg-nausa-lightblue px-2 py-1 rounded shadow">
                    ✓ VERIFIED
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-nausa-blue/70">
                  All donations are tax-deductible to the fullest extent allowed
                  by law.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Amounts */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-white/60 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-nausa-blue mb-4 text-center flex items-center justify-center gap-2">
              <UsersIcon className="w-5 h-5 text-nausa-lightblue" />
              How Your Donation Helps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-nausa-blue/5 rounded-lg p-3 sm:p-4 text-center border border-nausa-blue/20">
                <p className="text-lg sm:text-xl font-black text-nausa-lightblue mb-1">
                  $25
                </p>
                <p className="text-xs sm:text-sm font-medium text-nausa-blue/70">
                  Supports one youth athlete for a tournament
                </p>
              </div>
              <div className="bg-nausa-blue/5 rounded-lg p-3 sm:p-4 text-center border border-nausa-blue/20">
                <p className="text-lg sm:text-xl font-black text-nausa-lightblue mb-1">
                  $100
                </p>
                <p className="text-xs sm:text-sm font-medium text-nausa-blue/70">
                  Covers equipment and uniforms for a team
                </p>
              </div>
              <div className="bg-nausa-blue/5 rounded-lg p-3 sm:p-4 text-center border border-nausa-blue/20">
                <p className="text-lg sm:text-xl font-black text-nausa-lightblue mb-1">
                  $500
                </p>
                <p className="text-xs sm:text-sm font-medium text-nausa-blue/70">
                  Sponsors an entire tournament event
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-4">
              <p className="text-sm sm:text-base text-nausa-blue/80 font-medium">
                Every donation makes a difference in keeping our traditions
                alive through sports.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
              <Button
                href="/donate"
                size="lg"
                className="w-full sm:w-auto border-2 border-white bg-white text-nausa-blue px-6 sm:px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-nausa-lightblue hover:border-nausa-lightblue hover:scale-[1.02] transition-all shadow-lg text-sm sm:text-base"
              >
                Donate Now
              </Button>

              <a
                href="mailto:info@UyghurSports.com?subject=Donation%20Inquiry"
                className="text-xs sm:text-sm text-nausa-blue hover:text-nausa-lightblue font-semibold underline transition-colors"
              >
                Questions about donating?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-nausa-blue/30 rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-nausa-blue/30 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-nausa-blue/30 rounded-full" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-nausa-blue/40 to-transparent"></div>
    </section>
  );
}
