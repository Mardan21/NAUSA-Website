import { Trophy, Award } from "lucide-react";
import { Tournament } from "@/lib/types";

interface TournamentResultsProps {
  tournament: Tournament;
}

export default function TournamentResults({
  tournament,
}: TournamentResultsProps) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-12">
          FINAL <span className="text-nausa-green">RESULTS</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {tournament.champion && (
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="w-12 h-12 text-white mr-4" />
                    <div className="text-white">
                      <p className="text-sm font-bold uppercase">Champion</p>
                      <h3 className="text-2xl font-black">
                        {tournament.champion}
                      </h3>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white">1st</div>
                </div>
              </div>
            )}

            {tournament.runnerUp && (
              <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-10 h-10 text-white mr-4" />
                    <div className="text-white">
                      <p className="text-sm font-bold uppercase">Runner-up</p>
                      <h3 className="text-xl font-black">
                        {tournament.runnerUp}
                      </h3>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">2nd</div>
                </div>
              </div>
            )}

            {tournament.thirdPlace && (
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-10 h-10 text-white mr-4" />
                    <div className="text-white">
                      <p className="text-sm font-bold uppercase">Third Place</p>
                      <h3 className="text-xl font-black">
                        {tournament.thirdPlace}
                      </h3>
                    </div>
                  </div>
                  <div className="text-2xl font-black text-white">3rd</div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Tournament Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-nausa-green mb-2">Top Scorer</h4>
                <p className="text-gray-700">Player Name - 8 Goals</p>
              </div>
              <div>
                <h4 className="font-bold text-nausa-green mb-2">
                  Best Goalkeeper
                </h4>
                <p className="text-gray-700">Player Name - 5 Clean Sheets</p>
              </div>
              <div>
                <h4 className="font-bold text-nausa-green mb-2">
                  Fair Play Award
                </h4>
                <p className="text-gray-700">
                  {tournament.champion || "Team Name"}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-nausa-green mb-2">
                  Best Young Player
                </h4>
                <p className="text-gray-700">Player Name - Age 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
