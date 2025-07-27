export default function AboutHero() {
  return (
    <section className="relative h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        {/* <Image
          src="/images/badges/nausa_logo.jpg"
          alt="Team huddle"
          fill
          className="object-center"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-nausa-lightblue/70 to-nausa-blue/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-black mb-4">
            ABOUT <span className="text-nausa-vanilla">NAUSA</span>
          </h1>
          <div className="container mx-auto px-4 pt-12 flex flex-col gap-10 w-2/3 text-left">
            <p className="text-md font-medium">
              The North American Uyghur Sports Association, inaugurated on
              August 8th, 2023, in Fairfax, Virginia, emerged as a collaborative
              effort orchestrated by representatives and coaches hailing from
              eight distinct Uyghur football clubs dispersed across North
              America. These clubs include Uyghur United FC, Maryland Uyghur FC,
              Yulghun FC, California Uyghur FC, Bogda FC, Boston & NY Uyghur
              United FC, Izchilar FC, and Lachin FC.
            </p>
            <p className="text-md font-medium">
              The establishment witnessed the election of five permanent board
              members, meticulously chosen from the aforementioned football
              clubs. These individuals were entrusted with the responsibility of
              articulating and safeguarding the foundational principles and
              overarching vision of the organization. Simultaneously, a quintet
              of board trustees assumed their roles for a three-year term,
              vested with the authority to oversee and administer the
              operational facets of the association. Within this cadre, distinct
              responsibilities were apportioned, designating roles such as
              chairman, treasurer, team liaison, event coordinator, and
              media/marketing director to individual trustees.
            </p>
            <p className="text-md font-medium">
              The fundamental objective underpinning the North American Uyghur
              Sports Association revolves around the advancement and advocacy of
              Uyghur sportsmanship. In essence, the association aspires to
              catalyze the multifaceted development of leadership qualities,
              character, sportsmanship, tolerance, discipline, and athletic
              prowess. Beyond the realm of athletic achievements, the
              association endeavors to foster fitness, volunteerism, and
              concurrently endeavors to safeguard and perpetuate the distinctive
              Uyghur identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
