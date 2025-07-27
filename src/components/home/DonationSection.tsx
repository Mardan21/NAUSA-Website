import Image from "next/image";
import { Heart } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DonationSection() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/tournament/_DSC8836.jpg"
          alt="Community gathering"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-nausa-vanilla/80 to-nausa-vanilla/80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-nausa-blue">
          <Heart className="w-16 h-16 mx-auto mb-8" />
          <h2 className="text-4xl font-black mb-8">SUPPORT THE FUTURE</h2>
          <p className="text-xl text-bold mb-10 leading-relaxed">
            Your contribution helps us foster cultural preservation, community
            unity, and the empowerment of Uyghur youth across North America.
            Every donation makes a difference in keeping our traditions alive
            through sports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              href="/donate"
              size="lg"
              className="border-2 w-[25%] border-nausa-lightblue bg-nausa-lightblue text-white px-8 py-4 rounded-full font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              Donate Now
            </Button>
            {/* <Button
              href="/sponsors"
              variant="outline"
              size="lg"
              className="border-2 w-[30%] border-white bg-white text-nausa-lightblue px-8 py-5 rounded-full font-black uppercase tracking-wide hover:bg-nausa-lightblue  hover:border-white hover:text-white transition-all transform hover:scale-105 text-md"
            >
              Become a Sponsor
            </Button> */}
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl font-black mb-2">$50K+</p>
              <p className="text-sm font-bold uppercase">Raised To-Date</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2">100%</p>
              <p className="text-sm font-bold uppercase">Goes to Programs</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2">501(c)(3)</p>
              <p className="text-sm font-bold uppercase">Tax Deductible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
