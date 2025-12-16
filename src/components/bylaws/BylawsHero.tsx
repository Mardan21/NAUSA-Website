import Image from "next/image";

export default function BylawsHero() {
  return (
    <section className="relative h-96 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/img11.jpg"
          alt="Bylaws hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nausa-blue/90 to-nausa-lightblue/70"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-black mb-4 text-shadow-lg">
            NAUSA <span className="text-nausa-vanilla">BY-LAWS</span>
          </h1>
          <p className="text-lg font-medium">
            Adopted 2023 • Last Amended 2025
          </p>
        </div>
      </div>
    </section>
  );
}
