import Image from "next/image";

export default function MediaHero() {
  return (
    <section className="relative h-96 overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/2017/img7.jpeg"
          alt="Media gallery hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nausa-blue to-nausa-lightblue/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-black mb-4 text-shadow-lg">
            MEDIA <span className="text-nausa-vanilla">LIBRARY</span>
          </h1>
          <p className="text-lg font-medium">
            Relive the moments that unite us
          </p>
        </div>
      </div>
    </section>
  );
}
