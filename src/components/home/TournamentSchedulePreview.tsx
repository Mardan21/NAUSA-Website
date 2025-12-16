"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Trophy, X, ChevronRight } from "lucide-react";
import { TOURNAMENT_2025 } from "@/lib/constants";

export default function TournamentSchedulePreview() {
    const [showFullSchedule, setShowFullSchedule] = useState(false);

    const highlightMatches = [
        {
            label: "OPENING MATCH",
            date: "Dec 17",
            time: "2:00 PM",
            match: "Lachin FC vs SF Uyghur FC",
            icon: Calendar,
        },
        {
            label: "CHAMPIONSHIP",
            date: "Dec 20",
            time: "4:30 PM",
            match: "Final Championship Game",
            icon: Trophy,
        },
    ];

    return (
        <>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 w-full max-w-sm lg:max-w-lg">
                <h4 className="text-sm font-black text-nausa-vanilla mb-3 uppercase tracking-wide">
                    Schedule Highlights
                </h4>

                <div className="space-y-3">
                    {highlightMatches.map((item) => (
                        <div
                            key={item.label}
                            className="bg-white/10 rounded-lg p-3 border border-white/20"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <item.icon className="w-3.5 h-3.5 text-nausa-vanilla" />
                                <span className="text-[10px] font-bold text-nausa-vanilla uppercase">
                                    {item.label}
                                </span>
                            </div>
                            <p className="text-white font-bold text-sm">{item.match}</p>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-white/80 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {item.date}
                                </span>
                                <span className="text-xs text-white/80 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {item.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setShowFullSchedule(true)}
                    className="w-full mt-3 bg-nausa-vanilla text-nausa-blue py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-1"
                >
                    View Full Schedule
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Full Schedule Modal */}
            {showFullSchedule && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowFullSchedule(false)}
                >
                    <div
                        className="relative max-w-2xl w-full max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowFullSchedule(false)}
                            className="absolute top-2 right-2 sm:-top-2 sm:-right-2 bg-white text-nausa-blue p-2 rounded-full hover:bg-nausa-vanilla transition-colors z-10"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="bg-white rounded-xl p-6">
                            <h3 className="text-xl font-black text-nausa-blue mb-4 text-center">
                                {TOURNAMENT_2025.name} Schedule
                            </h3>

                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                                <MapPin className="w-4 h-4" />
                                <span>{TOURNAMENT_2025.location}</span>
                            </div>

                            <div className="space-y-2">
                                {TOURNAMENT_2025.schedule.map((match, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 p-3 rounded-lg ${match.match.includes("Championship") || match.match.includes("🏆")
                                            ? "bg-nausa-blue text-white"
                                            : "bg-gray-100"
                                            }`}
                                    >
                                        <div className="min-w-[60px] text-center">
                                            <p className="font-black text-sm">{match.date}</p>
                                            <p className="text-xs opacity-80">{match.time}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-sm">{match.match}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-nausa-vanilla/20 rounded-lg">
                                <h4 className="font-bold text-nausa-blue text-sm mb-2">
                                    🎉 Opening Ceremony
                                </h4>
                                <p className="text-sm text-gray-700">
                                    {TOURNAMENT_2025.openingCeremony.date} at{" "}
                                    {TOURNAMENT_2025.openingCeremony.time}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {TOURNAMENT_2025.openingCeremony.venue}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {TOURNAMENT_2025.openingCeremony.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
