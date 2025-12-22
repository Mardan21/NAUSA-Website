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
    getTeamCardTotals,
    TEAM_ABBREVIATIONS,
    TEAM_ABBREVIATIONS_SHORT,
    assignRanks,
    finalMatches,
    FINALS_DATE,
    getPodiumResults,
    areFinalsComplete,
    type PlayerStat,
    type FinalMatch,
} from "@/data/tournament2025";

type MainTab = "finals" | "standings" | "stats";
type StatTab = "goals" | "yellow" | "red";

export default function TournamentStandings() {
    const [mainTab, setMainTab] = useState<MainTab>("finals");
    const [statTab, setStatTab] = useState<StatTab>("goals");

    const sortedStandings = getSortedStandings();

    return (
        <div className="w-full max-w-md lg:max-w-lg overflow-hidden">
            {/* Main Tab Buttons */}
            <div className="flex">
                <button
                    onClick={() => setMainTab("finals")}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-t-lg transition-colors focus:outline-none ${mainTab === "finals"
                        ? "bg-black/70 text-white"
                        : "bg-black/40 text-white/70 hover:bg-black/50"
                        }`}
                >
                    Finals
                </button>
                <button
                    onClick={() => setMainTab("standings")}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-t-lg transition-colors focus:outline-none ${mainTab === "standings"
                        ? "bg-black/70 text-white"
                        : "bg-black/40 text-white/70 hover:bg-black/50"
                        }`}
                >
                    Group Stage
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
                {mainTab === "finals" ? (
                    <FinalsView />
                ) : mainTab === "standings" ? (
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
        <div>
            <table className="w-full text-white text-xs sm:text-sm">
                <thead>
                    <tr className="border-b border-white/20 text-white/70 text-[10px] sm:text-xs">
                        <th className="py-2 pl-2 pr-1 text-center w-8"></th>
                        <th className="py-2 pl-1 text-left">Club</th>
                        <th className="py-2 px-1 text-center">MP</th>
                        <th className="py-2 px-1 text-center">W</th>
                        <th className="py-2 px-1 text-center">D</th>
                        <th className="py-2 px-1 text-center">L</th>
                        <th className="py-2 px-1 text-center">Y</th>
                        <th className="py-2 px-1 text-center">R</th>
                        <th className="py-2 px-1 text-center">GF</th>
                        <th className="py-2 px-1 text-center">GA</th>
                        <th className="py-2 px-1 text-center">GD</th>
                        <th className="py-2 px-1 text-center font-bold">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((standing, index) => {
                        const team = getTeamById(standing.teamId);
                        const abbrev = TEAM_ABBREVIATIONS[standing.teamId];
                        const abbrevShort = TEAM_ABBREVIATIONS_SHORT[standing.teamId];
                        const gd = getGoalDifference(standing);
                        const pts = getPoints(standing);
                        const cardTotals = getTeamCardTotals(standing.teamId);

                        return (
                            <tr
                                key={standing.teamId}
                                className={`border-b border-white/10 ${index % 2 === 0 ? "bg-white/5" : ""
                                    } hover:bg-white/10 transition-colors`}
                            >
                                <td className="py-2 pl-2 pr-1 text-center text-white/70 font-bold">{index + 1}</td>
                                <td className="py-2 pl-1">
                                    <div className="flex items-center gap-2">
                                        {team && (
                                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                                                <Image
                                                    src={team.logoUrl}
                                                    alt={team.name}
                                                    width={24}
                                                    height={24}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <span className="font-semibold truncate hidden md:inline">{abbrev}</span>
                                        <span className="font-semibold truncate md:hidden">{abbrevShort}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-1 text-center">{standing.played}</td>
                                <td className="py-2 px-1 text-center">{standing.wins}</td>
                                <td className="py-2 px-1 text-center">{standing.draws}</td>
                                <td className="py-2 px-1 text-center">{standing.losses}</td>
                                <td className="py-2 px-1 text-center text-yellow-400">{cardTotals.yellowCards}</td>
                                <td className="py-2 px-1 text-center text-red-500">{cardTotals.redCards}</td>
                                <td className="py-2 px-1 text-center">{standing.goalsFor}</td>
                                <td className="py-2 px-1 text-center">{standing.goalsAgainst}</td>
                                <td className="py-2 px-1 text-center">
                                    {gd > 0 ? `+${gd}` : gd}
                                </td>
                                <td className="py-2 px-1 text-center font-bold">{pts}</td>
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
                    className={`px-4 py-2 text-[10px] sm:text-xs font-medium transition-colors focus:outline-none ${statTab === "goals"
                        ? "text-white border-b-2 border-nausa-lightblue"
                        : "text-white/60 hover:text-white"
                        }`}
                >
                    Goals
                </button>
                <button
                    onClick={() => setStatTab("yellow")}
                    className={`px-4 py-2 text-[10px] sm:text-xs font-medium transition-colors focus:outline-none ${statTab === "yellow"
                        ? "text-white border-b-2 border-yellow-400"
                        : "text-white/60 hover:text-white"
                        }`}
                >
                    Yellow Cards
                </button>
                <button
                    onClick={() => setStatTab("red")}
                    className={`px-4 py-2 text-[10px] sm:text-xs font-medium transition-colors focus:outline-none ${statTab === "red"
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
                    <tr className="border-b border-white/20 text-white/70 text-[10px] sm:text-xs">
                        <th className="py-1 px-1 text-center w-10">Rank</th>
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
                    <tr className="border-b border-white/20 text-white/70 text-[10px] sm:text-xs">
                        <th className="py-1 px-1 text-center w-10">Rank</th>
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
                    <tr className="border-b border-white/20 text-white/70 text-[10px] sm:text-xs">
                        <th className="py-1 px-1 text-center w-10">Rank</th>
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
            <td className="py-2 px-1 text-center w-10">
                <span className="text-white/70 font-bold">{rank}</span>
            </td>
            <td className="py-2 px-1">
                <div className="flex items-center gap-2">
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
                    <div className="flex flex-col items-start">
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

// Finals View Component
function FinalsView() {
    const podiumResults = getPodiumResults();
    const finalsComplete = areFinalsComplete();

    return (
        <div className="p-3 space-y-4 relative overflow-hidden">
            {/* Confetti Animation (only when finals complete) */}
            {finalsComplete && <Confetti />}

            {/* Finals Header */}
            <div className="text-center relative z-10">
                <h3 className="text-white font-bold text-sm sm:text-base">
                    🏆 Finals
                </h3>
                <p className="text-white/60 text-[10px] sm:text-xs">{FINALS_DATE}</p>
            </div>

            {/* Podium (only shows when finals are complete) */}
            {finalsComplete && (
                <div className="relative z-10">
                    <Podium results={podiumResults} />
                </div>
            )}

            {/* Match Cards */}
            <div className="space-y-3 relative z-10">
                {finalMatches.map((match) => (
                    <MatchCard key={match.matchId} match={match} />
                ))}
            </div>
        </div>
    );
}

// Confetti Animation Component
function Confetti() {
    // Generate confetti pieces with varied properties
    const confettiPieces = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 2}s`,
        color: ['#FFD700', '#FFA500', '#FF6347', '#00CED1', '#9370DB', '#32CD32'][Math.floor(Math.random() * 6)],
        size: `${6 + Math.random() * 6}px`,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {confettiPieces.map((piece) => (
                <div
                    key={piece.id}
                    className="absolute animate-confetti-fall"
                    style={{
                        left: piece.left,
                        top: '-20px',
                        width: piece.size,
                        height: piece.size,
                        backgroundColor: piece.color,
                        animationDelay: piece.delay,
                        animationDuration: piece.duration,
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(400px) rotate(720deg);
                        opacity: 0;
                    }
                }
                .animate-confetti-fall {
                    animation: confetti-fall linear infinite;
                }
            `}</style>
        </div>
    );
}

// Podium Component (Compact version - no tall stands)
function Podium({ results }: {
    results: { first: number | null; second: number | null; third: number | null };
}) {
    const firstTeam = results.first ? getTeamById(results.first) : null;
    const secondTeam = results.second ? getTeamById(results.second) : null;
    const thirdTeam = results.third ? getTeamById(results.third) : null;

    return (
        <div className="flex justify-center items-center gap-4 py-2">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border-2 border-gray-400 flex items-center justify-center overflow-hidden">
                    {secondTeam ? (
                        <Image
                            src={secondTeam.logoUrl}
                            alt={secondTeam.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-white/30 text-sm">?</span>
                    )}
                </div>
                <span className="text-[10px] text-gray-400 font-medium mt-1">🥈 2nd</span>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center -mt-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 border-2 border-yellow-400 flex items-center justify-center overflow-hidden">
                    {firstTeam ? (
                        <Image
                            src={firstTeam.logoUrl}
                            alt={firstTeam.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-white/30 text-lg">?</span>
                    )}
                </div>
                <span className="text-[10px] text-yellow-400 font-bold mt-1">🏆 1st</span>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border-2 border-amber-600 flex items-center justify-center overflow-hidden">
                    {thirdTeam ? (
                        <Image
                            src={thirdTeam.logoUrl}
                            alt={thirdTeam.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-white/30 text-sm">?</span>
                    )}
                </div>
                <span className="text-[10px] text-amber-600 font-medium mt-1">🥉 3rd</span>
            </div>
        </div>
    );
}

// Match Card Component
function MatchCard({ match }: { match: FinalMatch }) {
    const homeTeam = getTeamById(match.homeTeam);
    const awayTeam = getTeamById(match.awayTeam);
    const isPlayed = match.homeScore !== null && match.awayScore !== null;
    const hasPenalties = match.penaltyHomeScore != null && match.penaltyAwayScore != null;

    // Get goals FOR each team (own goals count for the opposing team)
    const homeGoals = match.goalScorers.filter(g =>
        (g.teamId === match.homeTeam && !g.isOwnGoal) ||
        (g.teamId === match.awayTeam && g.isOwnGoal)
    );
    const awayGoals = match.goalScorers.filter(g =>
        (g.teamId === match.awayTeam && !g.isOwnGoal) ||
        (g.teamId === match.homeTeam && g.isOwnGoal)
    );
    const homeYellows = match.yellowCards.filter(c => c.teamId === match.homeTeam);
    const awayYellows = match.yellowCards.filter(c => c.teamId === match.awayTeam);
    const homeReds = match.redCards.filter(c => c.teamId === match.homeTeam);
    const awayReds = match.redCards.filter(c => c.teamId === match.awayTeam);

    return (
        <div className="bg-white/5 rounded-lg pt-1 sm:pt-2 px-3 pb-3 border border-white/10">
            {/* Match Title */}
            <div className="text-center mb-2">
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide ${match.matchId === "championship" ? "text-yellow-400" : "text-amber-600"
                    }`}>
                    {match.matchId === "championship" ? "🏆 " : "🥉 "}{match.title}
                </span>
            </div>

            {/* Teams and Score */}
            <div className="flex items-center justify-between">
                {/* Home Team */}
                <div className="flex flex-col items-center flex-1">
                    {homeTeam && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white/20 mb-1">
                            <Image
                                src={homeTeam.logoUrl}
                                alt={homeTeam.name}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <span className="text-white font-semibold text-[10px] sm:text-xs text-center">
                        {TEAM_ABBREVIATIONS[match.homeTeam]}
                    </span>
                </div>

                {/* Score / VS */}
                <div className="flex flex-col items-center px-3">
                    {isPlayed ? (
                        <>
                            <div className="flex items-center gap-1">
                                <span className="text-white font-extrabold text-4xl sm:text-5xl">
                                    {match.homeScore}
                                </span>
                                {hasPenalties && (
                                    <span className="text-white/60 font-bold text-lg sm:text-xl">
                                        ({match.penaltyHomeScore})
                                    </span>
                                )}
                                <span className="text-white/40 text-xl mx-1">-</span>
                                {hasPenalties && (
                                    <span className="text-white/60 font-bold text-lg sm:text-xl">
                                        ({match.penaltyAwayScore})
                                    </span>
                                )}
                                <span className="text-white font-extrabold text-4xl sm:text-5xl">
                                    {match.awayScore}
                                </span>
                            </div>
                            <span className="text-green-400 text-[10px] font-medium uppercase">
                                {hasPenalties ? "After Penalties" : "Full Time"}
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="text-white/60 font-bold text-xl sm:text-2xl">vs</span>
                            <span className="text-white/40 text-[10px]">Upcoming</span>
                        </>
                    )}
                </div>

                {/* Away Team */}
                <div className="flex flex-col items-center flex-1">
                    {awayTeam && (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white/20 mb-1">
                            <Image
                                src={awayTeam.logoUrl}
                                alt={awayTeam.name}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                    <span className="text-white font-semibold text-[10px] sm:text-xs text-center">
                        {TEAM_ABBREVIATIONS[match.awayTeam]}
                    </span>
                </div>
            </div>

            {/* Goal Scorers and Cards (only shown if match is played) */}
            {isPlayed && (homeGoals.length > 0 || awayGoals.length > 0 || homeYellows.length > 0 || awayYellows.length > 0 || homeReds.length > 0 || awayReds.length > 0) && (
                <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex justify-between text-[10px] text-white/70">
                        {/* Home Events */}
                        <div className="flex-1 space-y-1">
                            {homeGoals.map((g, i) => (
                                <div key={`goal-${i}`} className="flex items-center gap-1">
                                    <span>⚽</span>
                                    <span>No. {g.jerseyNumber}</span>
                                    {g.isOwnGoal && <span className="text-red-400">(OG)</span>}
                                </div>
                            ))}
                            {homeYellows.map((c, i) => (
                                <div key={`yellow-${i}`} className="flex items-center gap-1">
                                    <span className="text-yellow-400">🟨</span>
                                    <span>No. {c.jerseyNumber}</span>
                                </div>
                            ))}
                            {homeReds.map((c, i) => (
                                <div key={`red-${i}`} className="flex items-center gap-1">
                                    <span className="text-red-500">🟥</span>
                                    <span>No. {c.jerseyNumber}</span>
                                </div>
                            ))}
                        </div>

                        {/* Away Events */}
                        <div className="flex-1 space-y-1 text-right">
                            {awayGoals.map((g, i) => (
                                <div key={`goal-${i}`} className="flex items-center gap-1 justify-end">
                                    {g.isOwnGoal && <span className="text-red-400">(OG)</span>}
                                    <span>No. {g.jerseyNumber}</span>
                                    <span>⚽</span>
                                </div>
                            ))}
                            {awayYellows.map((c, i) => (
                                <div key={`yellow-${i}`} className="flex items-center gap-1 justify-end">
                                    <span>No. {c.jerseyNumber}</span>
                                    <span className="text-yellow-400">🟨</span>
                                </div>
                            ))}
                            {awayReds.map((c, i) => (
                                <div key={`red-${i}`} className="flex items-center gap-1 justify-end">
                                    <span>No. {c.jerseyNumber}</span>
                                    <span className="text-red-500">🟥</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
