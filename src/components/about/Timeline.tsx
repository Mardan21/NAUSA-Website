import { tournaments } from "@/data/tournaments";
import { cn } from "@/lib/utils";

export default function Timeline() {
  const timelineEvents = tournaments.slice().reverse();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-16">
          OUR <span className="text-nausa-green">JOURNEY</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-nausa-green"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={cn(
                "flex items-center mb-16",
                index % 2 === 0 ? "flex-row-reverse" : ""
              )}
            >
              <div className="w-1/2"></div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-nausa-green rounded-full border-4 border-white z-10"></div>

              <div
                className={cn(
                  "w-1/2",
                  index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                )}
              >
                <div
                  className={cn(
                    "p-6 rounded-lg",
                    event.canceled ? "bg-red-100" : "bg-white shadow-lg"
                  )}
                >
                  <h3 className="text-2xl font-bold mb-2">{event.year}</h3>
                  {event.canceled ? (
                    <p className="text-red-600 font-medium">
                      Canceled due to COVID-19
                    </p>
                  ) : (
                    <>
                      <p className="text-gray-700 font-medium mb-1">
                        {event.location}
                      </p>
                      {event.venue && (
                        <p className="text-gray-600 text-sm mb-2">
                          {event.venue}
                        </p>
                      )}
                      <p className="text-nausa-green font-bold">
                        {event.teams} Teams
                      </p>
                      {event.attendees && (
                        <p className="text-gray-600 text-sm">
                          {event.attendees}+ Attendees
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
