import Image from "next/image";

export default function MediaHero() {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/img4.jpg"
          alt="Media gallery hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nausa-blue to-nausa-lightblue/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 text-shadow-lg">
            MEDIA <span className="text-nausa-vanilla">LIBRARY</span>
          </h1>
          <p className="text-base sm:text-lg font-medium">
            Relive the moments that unite us
          </p>
        </div>
      </div>
    </section>
  );
}
