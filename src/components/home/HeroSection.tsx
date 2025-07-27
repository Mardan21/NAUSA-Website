import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// import { ImageCollage } from "../ui/ImageCollage";
// import { tournamentImages } from "@/lib/tournamentImages";
// import { MosaicCollage } from "../ui/MosaicCollage";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Mosaic Collage Background */}
      {/* <div className="absolute inset-0">
        <MosaicCollage images={tournamentImages} />
      </div> */}

      {/* Light Blue Tint Overlay */}
      {/* <div className="absolute inset-0 bg-blue-500/50 mix-blend-multiply"></div> */}

      <div className="absolute inset-0">
        <Image
          src="/images/other/field_background.jpeg"
          alt="Soccer action shot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-nausa-blue/20 to-nausa-lightblue/15"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            {/* <span className="inline-block px-6 py-2 bg-nausa-blue text-nausa-vanilla font-bold uppercase tracking-wider text-sm rounded-full">
              10th Anniversary Tournament
            </span> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-shadow-lg">
            UYGHUR
            <br />
            <span className="text-nausa-lightblue/80">AMERICAN CUP</span>
            <br />
            2025
          </h1>
          <p className="text-mg md:text-lg mb-8 font-medium max-w-3xl mx-auto">
            Join 1000+ community members for the largest Uyghur soccer
            tournament in North America
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/register"
              className="border-2 w-[32%] border-nausa-lightblue bg-nausa-lightblue text-white px-8 py-3 rounded-full font-black uppercase tracking-wide hover:bg-white hover:text-nausa-lightblue transition-all transform hover:scale-105 shadow-xl text-md"
            >
              Tournament Info
            </Link>
            <Link
              href="/media"
              className="border-2 w-[32%] border-white bg-white text-nausa-lightblue px-8 py-3 rounded-full font-black uppercase tracking-wide hover:bg-nausa-lightblue  hover:border-white hover:text-white transition-all transform hover:scale-105 text-md"
            >
              Past Highlights
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto justify-center items-center">
            <div className="bg-nausa-lightblue/10 backdrop-blur-md rounded-lg py-4 px-10">
              <p className="text-3xl font-black text-white">December 14-21</p>
              <p className="text-sm uppercase tracking-wide">
                Tournament Dates
              </p>
            </div>
            <div className="bg-nausa-lightblue/10 backdrop-blur-md rounded-lg py-4 px-10">
              <p className="text-3xl font-black">Houston, Texas</p>
              <p className="text-sm uppercase tracking-wide">Location</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-white" />
      </div>
    </section>
  );
}
