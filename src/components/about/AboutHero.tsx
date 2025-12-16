export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-nausa-lightblue to-nausa-blue"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 sm:py-12">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8">
            ABOUT <span className="text-nausa-vanilla">NAUSA</span>
          </h1>
          {/* FIXED: Mobile responsive container */}
          <div className="container mx-auto max-w-4xl text-left space-y-4 sm:space-y-6 lg:space-y-8">
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
              The North American Uyghur Sports Association, inaugurated on
              August 8th, 2023, in Fairfax, Virginia, emerged as a collaborative
              effort orchestrated by representatives and coaches hailing from
              eight distinct Uyghur football clubs dispersed across North
              America. These clubs include Uyghur United FC, Maryland Uyghur FC,
              Yulghun FC, California Uyghur FC, Bogda FC, Boston & NY Uyghur
              United FC, Izchilar FC, and Lachin FC.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
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
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
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
