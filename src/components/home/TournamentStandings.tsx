"use client";

import { useState } from "react";
import Image from "next/image";
import {
    getSortedStandings,
    getTopScorers,
    getYellowCardLeaders,
    getRedCardLeaders,
    getTeamById,
    getGoalDifference,
    getPoints,
    TEAM_ABBREVIATIONS,
    assignRanks,
    type PlayerStat,
} from "@/data/tournament2025";

type MainTab = "standings" | "stats";
type StatTab = "goals" | "yellow" | "red";

export default function TournamentStandings() {
    const [mainTab, setMainTab] = useState<MainTab>("standings");
    const [statTab, setStatTab] = useState<StatTab>("goals");

    const sortedStandings = getSortedStandings();

    return (
        <div className="w-full max-w-md lg:max-w-lg">
            {/* Main Tab Buttons */}
            <div className="flex">
                <button
                    onClick={() => setMainTab("standings")}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-t-lg transition-colors focus:outline-none ${mainTab === "standings"
                        ? "bg-black/70 text-white"
                        : "bg-black/40 text-white/70 hover:bg-black/50"
                        }`}
                >
                    Standings
                </button>
                <button
                    onClick={() => setMainTab("stats")}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-t-lg transition-colors focus:outline-none ${mainTab === "stats"
                        ? "bg-black/70 text-white"
                        : "bg-black/40 text-white/70 hover:bg-black/50"
                        }`}
                >
                    Stat Leaders
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-black/70 backdrop-blur-sm rounded-b-lg rounded-tr-lg overflow-hidden border border-white/10">
                {mainTab === "standings" ? (
                    <StandingsTable standings={sortedStandings} />
                ) : (
                    <StatLeadersTable statTab={statTab} setStatTab={setStatTab} />
                )}
            </div>
        </div>
    );
}

// Standings Table Component
function StandingsTable({
    standings,
}: {
    standings: ReturnType<typeof getSortedStandings>;
}) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-white text-xs sm:text-sm">
                <thead>
                    <tr className="border-b border-white/20 text-white/70">
                        <th className="py-2 px-2 text-left w-8"></th>
                        <th className="py-2 px-2 text-left">Club</th>
                        <th className="py-2 px-2 text-center w-8">W</th>
                        <th className="py-2 px-2 text-center w-8">D</th>
                        <th className="py-2 px-2 text-center w-8">L</th>
                        <th className="py-2 px-2 text-center w-8 hidden sm:table-cell">GF</th>
                        <th className="py-2 px-2 text-center w-8 hidden sm:table-cell">GA</th>
                        <th className="py-2 px-2 text-center w-10">GD</th>
                        <th className="py-2 px-2 text-center w-10 font-bold">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((standing, index) => {
                        const team = getTeamById(standing.teamId);
                        const abbrev = TEAM_ABBREVIATIONS[standing.teamId];
                        const gd = getGoalDifference(standing);
                        const pts = getPoints(standing);

                        return (
                            <tr
                                key={standing.teamId}
                                className={`border-b border-white/10 ${index % 2 === 0 ? "bg-white/5" : ""
                                    } hover:bg-white/10 transition-colors`}
                            >
                                <td className="py-2 px-2 text-white/70 font-bold">{index + 1}</td>
                                <td className="py-2 px-2">
                                    <div className="flex items-center gap-2">
                                        {team && (
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                                                <Image
                                                    src={team.logoUrl}
                                                    alt={team.name}
                                                    width={28}
                                                    height={28}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold truncate">{abbrev}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-2 text-center">{standing.wins}</td>
                                <td className="py-2 px-2 text-center">{standing.draws}</td>
                                <td className="py-2 px-2 text-center">{standing.losses}</td>
                                <td className="py-2 px-2 text-center hidden sm:table-cell">{standing.goalsFor}</td>
                                <td className="py-2 px-2 text-center hidden sm:table-cell">{standing.goalsAgainst}</td>
                                <td className="py-2 px-2 text-center">
                                    {gd > 0 ? `+${gd}` : gd}
                                </td>
                                <td className="py-2 px-2 text-center font-bold">{pts}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

// Stat Leaders Table Component
function StatLeadersTable({
    statTab,
    setStatTab,
}: {
    statTab: StatTab;
    setStatTab: (tab: StatTab) => void;
}) {
    return (
        <div>
            {/* Sub-tabs */}
            <div className="flex border-b border-white/20">
                <button
                    onClick={() => setStatTab("goals")}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none ${statTab === "goals"
                        ? "text-white border-b-2 border-nausa-lightblue"
                        : "text-white/60 hover:text-white"
                        }`}
                >
                    Goals
                </button>
                <button
                    onClick={() => setStatTab("yellow")}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none ${statTab === "yellow"
                        ? "text-white border-b-2 border-yellow-400"
                        : "text-white/60 hover:text-white"
                        }`}
                >
                    Yellow Cards
                </button>
                <button
                    onClick={() => setStatTab("red")}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus:outline-none ${statTab === "red"
                        ? "text-white border-b-2 border-red-500"
                        : "text-white/60 hover:text-white"
                        }`}
                >
                    Red Cards
                </button>
            </div>

            {/* Stat Content */}
            <div className="p-1 max-h-[210px] overflow-y-auto dark-scrollbar">
                {statTab === "goals" && <GoalsLeaderboard />}
                {statTab === "yellow" && <YellowCardsLeaderboard />}
                {statTab === "red" && <RedCardsLeaderboard />}
            </div>
        </div>
    );
}

// Goals Leaderboard
function GoalsLeaderboard() {
    const scorers = getTopScorers();
    const rankedScorers = assignRanks(scorers, (p) => p.goals);

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed text-white text-xs sm:text-sm">
                <thead>
                    <tr className="border-b border-white/20 text-white/70">

                        <th className="py-1 px-2 text-left">Player</th>
                        <th className="py-1 px-2 text-right w-16">Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {rankedScorers.map(({ item: player, rank }, index) => (
                        <PlayerStatRow
                            key={`${player.teamId}-${player.jerseyNumber}`}
                            player={player}
                            rank={rank}
                            statValue={player.goals}
                            isEven={index % 2 === 0}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Yellow Cards Leaderboard
function YellowCardsLeaderboard() {
    const leaders = getYellowCardLeaders();
    const rankedLeaders = assignRanks(leaders, (p) => p.yellowCards);

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed text-white text-xs sm:text-sm">
                <thead>
                    <tr className="border-b border-white/20 text-white/70">

                        <th className="py-1 px-2 text-left">Player</th>
                        <th className="py-1 px-2 text-right w-16">Cards</th>
                    </tr>
                </thead>
                <tbody>
                    {rankedLeaders.map(({ item: player, rank }, index) => (
                        <PlayerStatRow
                            key={`${player.teamId}-${player.jerseyNumber}`}
                            player={player}
                            rank={rank}
                            statValue={player.yellowCards}
                            isEven={index % 2 === 0}
                            cardColor="yellow"
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Red Cards Leaderboard
function RedCardsLeaderboard() {
    const leaders = getRedCardLeaders();

    if (leaders.length === 0) {
        return (
            <div className="py-8 text-center text-white/60 text-sm">
                <p>No red cards have been given yet.</p>
            </div>
        );
    }

    const rankedLeaders = assignRanks(leaders, (p) => p.redCards);

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-fixed text-white text-xs sm:text-sm">
                <thead>
                    <tr className="border-b border-white/20 text-white/70">

                        <th className="py-1 px-2 text-left">Player</th>
                        <th className="py-1 px-2 text-right w-16">Cards</th>
                    </tr>
                </thead>
                <tbody>
                    {rankedLeaders.map(({ item: player, rank }, index) => (
                        <PlayerStatRow
                            key={`${player.teamId}-${player.jerseyNumber}`}
                            player={player}
                            rank={rank}
                            statValue={player.redCards}
                            isEven={index % 2 === 0}
                            cardColor="red"
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Reusable Player Stat Row
function PlayerStatRow({
    player,
    rank,
    statValue,
    isEven,
    cardColor,
}: {
    player: PlayerStat;
    rank: number;
    statValue: number;
    isEven: boolean;
    cardColor?: "yellow" | "red";
}) {
    const team = getTeamById(player.teamId);
    const teamAbbrev = TEAM_ABBREVIATIONS[player.teamId];

    return (
        <tr
            className={`border-b border-white/10 ${isEven ? "bg-white/5" : ""
                } hover:bg-white/10 transition-colors`}
        >
            <td className="py-2 px-1">
                <div className="flex items-center gap-2">
                    <span className="w-6 text-center text-white/70 font-bold flex-shrink-0">{rank}</span>
                    {team && (
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                            <Image
                                src={team.logoUrl}
                                alt={team.name}
                                width={24}
                                height={24}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <div className="flex flex-col items-start ml-1">
                        <span className="font-bold">No. {player.jerseyNumber}</span>
                        <span className="text-white/60 text-[10px] sm:text-xs">{teamAbbrev}</span>
                    </div>
                </div>
            </td>
            <td className="py-2 px-2 text-right">
                <span
                    className={`font-bold ${cardColor === "yellow"
                        ? "text-yellow-400"
                        : cardColor === "red"
                            ? "text-red-500"
                            : ""
                        }`}
                >
                    {statValue}
                </span>
            </td>
        </tr>
    );
}
