import Image from "next/image";

export default function DonationHero() {
  return (
    <section className="relative h-96 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/img18.jpg"
          alt="Donation page hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nausa-blue to-nausa-lightblue/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-black mb-6">
            SUPPORT <span className="text-nausa-vanilla">NAUSA</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-90">
            Your generosity helps us unite the Uyghur community through sports,
            preserve our cultural heritage, and empower the next generation of
            leaders. Every contribution makes a lasting impact on youth
            development programs and community events across North America.
          </p>
        </div>
      </div>
    </section>
  );
}
