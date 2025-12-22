import { TeamLogo } from '../lib/types';
import { clubTeams } from './teams';

// Team IDs from clubTeams for the 4 competing teams
export const TEAM_IDS = {
    UYGHUR_UNITED: 2,
    LACHIN_FC: 1,
    SF_BAY: 5,
    BNYUU: 6,
} as const;

// Abbreviated team names for display
export const TEAM_ABBREVIATIONS: Record<number, string> = {
    [TEAM_IDS.UYGHUR_UNITED]: 'Uyghur Utd',
    [TEAM_IDS.LACHIN_FC]: 'Lachin FC',
    [TEAM_IDS.SF_BAY]: 'SF Bay',
    [TEAM_IDS.BNYUU]: 'BNYUU',
};

// Short abbreviations for mobile display
export const TEAM_ABBREVIATIONS_SHORT: Record<number, string> = {
    [TEAM_IDS.UYGHUR_UNITED]: 'Uyghur Utd',
    [TEAM_IDS.LACHIN_FC]: 'Lachin FC',
    [TEAM_IDS.SF_BAY]: 'SF Bay',
    [TEAM_IDS.BNYUU]: 'BNYUU',
};

// Helper to get team by ID
export function getTeamById(id: number): TeamLogo | undefined {
    return clubTeams.find(team => team.id === id);
}

// Team standing data
export interface TeamStanding {
    teamId: number;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
}

// Computed properties
export function getGoalDifference(standing: TeamStanding): number {
    return standing.goalsFor - standing.goalsAgainst;
}

export function getPoints(standing: TeamStanding): number {
    return standing.wins * 3 + standing.draws;
}

// Current standings after Game Day 1
export const standings: TeamStanding[] = [
    {
        teamId: TEAM_IDS.UYGHUR_UNITED,
        played: 3,
        wins: 2,
        draws: 0,
        losses: 1,
        goalsFor: 9,
        goalsAgainst: 4,
    },
    {
        teamId: TEAM_IDS.LACHIN_FC,
        played: 3,
        wins: 2,
        draws: 0,
        losses: 1,
        goalsFor: 4,
        goalsAgainst: 4,
    },
    {
        teamId: TEAM_IDS.SF_BAY,
        played: 3,
        wins: 2,
        draws: 0,
        losses: 1,
        goalsFor: 6,
        goalsAgainst: 3,
    },
    {
        teamId: TEAM_IDS.BNYUU,
        played: 3,
        wins: 0,
        draws: 0,
        losses: 3,
        goalsFor: 1,
        goalsAgainst: 9,
    },
];

// Sort standings by points, then goal difference, then goals for
export function getSortedStandings(): TeamStanding[] {
    return [...standings].sort((a, b) => {
        const pointsDiff = getPoints(b) - getPoints(a);
        if (pointsDiff !== 0) return pointsDiff;

        const gdDiff = getGoalDifference(b) - getGoalDifference(a);
        if (gdDiff !== 0) return gdDiff;

        return b.goalsFor - a.goalsFor;
    });
}

// Player stat for goals, yellow cards, red cards
export interface PlayerStat {
    jerseyNumber: number;
    teamId: number;
    goals: number;
    yellowCards: number;
    redCards: number;
}

// Current player stats after Game Day 1
export const playerStats: PlayerStat[] = [
    // Uyghur United FC scorers
    { jerseyNumber: 5, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 1, yellowCards: 1, redCards: 1 },
    { jerseyNumber: 7, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 8, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 10, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 4, yellowCards: 2, redCards: 0 },
    { jerseyNumber: 11, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 2, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 13, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 0, yellowCards: 2, redCards: 0 },
    { jerseyNumber: 19, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 1, yellowCards: 1, redCards: 0 },

    // BNYUU scorers
    { jerseyNumber: 28, teamId: TEAM_IDS.BNYUU, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.BNYUU, goals: 0, yellowCards: 0, redCards: 1 },
    { jerseyNumber: 2, teamId: TEAM_IDS.BNYUU, goals: 0, yellowCards: 1, redCards: 0 },

    // Lachin FC scorers
    { jerseyNumber: 66, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 12, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 19, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 33, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 23, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 15, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 27, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 9, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },

    // SF Bay scorers
    { jerseyNumber: 12, teamId: TEAM_IDS.SF_BAY, goals: 2, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 8, teamId: TEAM_IDS.SF_BAY, goals: 2, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 1, teamId: TEAM_IDS.SF_BAY, goals: 1, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 6, teamId: TEAM_IDS.SF_BAY, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 9, teamId: TEAM_IDS.SF_BAY, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.SF_BAY, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 88, teamId: TEAM_IDS.SF_BAY, goals: 0, yellowCards: 1, redCards: 0 },
];

// Combine group stage stats with finals day stats
export function getAllPlayerStats(): PlayerStat[] {
    // Create a map of player stats keyed by teamId-jerseyNumber
    const statsMap = new Map<string, PlayerStat>();

    // Add group stage stats
    for (const player of playerStats) {
        const key = `${player.teamId}-${player.jerseyNumber}`;
        statsMap.set(key, { ...player });
    }

    // Add finals day stats from final matches
    for (const match of finalMatches) {
        // Add goals (excluding own goals - they don't count as goals for the player)
        for (const goal of match.goalScorers) {
            if (goal.isOwnGoal) continue; // Own goals don't count for the scorer

            const key = `${goal.teamId}-${goal.jerseyNumber}`;
            const existing = statsMap.get(key);
            if (existing) {
                existing.goals += 1;
            } else {
                statsMap.set(key, {
                    jerseyNumber: goal.jerseyNumber,
                    teamId: goal.teamId,
                    goals: 1,
                    yellowCards: 0,
                    redCards: 0,
                });
            }
        }

        // Add yellow cards
        for (const card of match.yellowCards) {
            const key = `${card.teamId}-${card.jerseyNumber}`;
            const existing = statsMap.get(key);
            if (existing) {
                existing.yellowCards += 1;
            } else {
                statsMap.set(key, {
                    jerseyNumber: card.jerseyNumber,
                    teamId: card.teamId,
                    goals: 0,
                    yellowCards: 1,
                    redCards: 0,
                });
            }
        }

        // Add red cards
        for (const card of match.redCards) {
            const key = `${card.teamId}-${card.jerseyNumber}`;
            const existing = statsMap.get(key);
            if (existing) {
                existing.redCards += 1;
            } else {
                statsMap.set(key, {
                    jerseyNumber: card.jerseyNumber,
                    teamId: card.teamId,
                    goals: 0,
                    yellowCards: 0,
                    redCards: 1,
                });
            }
        }
    }

    return Array.from(statsMap.values());
}

// Get top scorers sorted by goals (descending)
export function getTopScorers(): PlayerStat[] {
    return getAllPlayerStats()
        .filter(p => p.goals > 0)
        .sort((a, b) => b.goals - a.goals);
}

// Get players with yellow cards sorted by count (descending)
export function getYellowCardLeaders(): PlayerStat[] {
    return getAllPlayerStats()
        .filter(p => p.yellowCards > 0)
        .sort((a, b) => b.yellowCards - a.yellowCards);
}

// Get players with red cards sorted by count (descending)
export function getRedCardLeaders(): PlayerStat[] {
    return getAllPlayerStats()
        .filter(p => p.redCards > 0)
        .sort((a, b) => b.redCards - a.redCards);
}

// Get total yellow and red cards for a team (aggregated from all stats including finals)
export function getTeamCardTotals(teamId: number): { yellowCards: number; redCards: number } {
    const teamPlayers = getAllPlayerStats().filter(p => p.teamId === teamId);
    return {
        yellowCards: teamPlayers.reduce((sum, p) => sum + p.yellowCards, 0),
        redCards: teamPlayers.reduce((sum, p) => sum + p.redCards, 0),
    };
}

// Assign ranks with ties (same count = same rank)
export function assignRanks<T>(items: T[], getValue: (item: T) => number): { item: T; rank: number }[] {
    if (items.length === 0) return [];

    const result: { item: T; rank: number }[] = [];
    let currentRank = 1;
    let previousValue = getValue(items[0]);

    items.forEach((item, index) => {
        const value = getValue(item);
        if (index === 0) {
            result.push({ item, rank: 1 });
        } else if (value === previousValue) {
            // Same value, same rank
            result.push({ item, rank: currentRank });
        } else {
            // Different value, rank = position + 1
            currentRank = index + 1;
            result.push({ item, rank: currentRank });
        }
        previousValue = value;
    });

    return result;
}

// Final Match Types
export interface MatchEvent {
    jerseyNumber: number;
    teamId: number;
    isOwnGoal?: boolean;  // true if own goal (scored against their own team)
}

export interface FinalMatch {
    matchId: "championship" | "third-place";
    title: string;
    homeTeam: number;
    awayTeam: number;
    homeScore: number | null;  // null = not played yet
    awayScore: number | null;
    penaltyHomeScore?: number | null;  // penalty shootout score
    penaltyAwayScore?: number | null;  // penalty shootout score
    goalScorers: MatchEvent[];
    yellowCards: MatchEvent[];
    redCards: MatchEvent[];
}

// Finals Day - December 20th, 2024
export const FINALS_DATE = "December 20th, 2024";

// Final matches data
export const finalMatches: FinalMatch[] = [
    {
        matchId: "championship",
        title: "Championship",
        homeTeam: TEAM_IDS.UYGHUR_UNITED,  // 1st place from group stage
        awayTeam: TEAM_IDS.SF_BAY,          // 2nd place from group stage
        homeScore: 2,
        awayScore: 2,
        penaltyHomeScore: 4,  // Uyghur Utd wins on penalties
        penaltyAwayScore: 2,
        goalScorers: [
            // Uyghur Utd goals
            { jerseyNumber: 5, teamId: TEAM_IDS.UYGHUR_UNITED },
            { jerseyNumber: 14, teamId: TEAM_IDS.SF_BAY, isOwnGoal: true },  // SF Bay own goal
            // SF Bay goals
            { jerseyNumber: 12, teamId: TEAM_IDS.SF_BAY },
            { jerseyNumber: 1, teamId: TEAM_IDS.SF_BAY },
        ],
        yellowCards: [
            { jerseyNumber: 21, teamId: TEAM_IDS.UYGHUR_UNITED },
            { jerseyNumber: 10, teamId: TEAM_IDS.UYGHUR_UNITED },  // First yellow
            { jerseyNumber: 12, teamId: TEAM_IDS.SF_BAY },
        ],
        redCards: [
            // { jerseyNumber: 10, teamId: TEAM_IDS.UYGHUR_UNITED },  // Second yellow = red
        ],
    },
    {
        matchId: "third-place",
        title: "Third Place",
        homeTeam: TEAM_IDS.LACHIN_FC,       // 3rd place from group stage
        awayTeam: TEAM_IDS.BNYUU,           // 4th place from group stage
        homeScore: 0,
        awayScore: 1,
        goalScorers: [
            { jerseyNumber: 9, teamId: TEAM_IDS.BNYUU },
        ],
        yellowCards: [],
        redCards: [],
    },
];

// Get a specific final match
export function getFinalMatch(matchId: "championship" | "third-place"): FinalMatch | undefined {
    return finalMatches.find(m => m.matchId === matchId);
}

// Check if finals have been played
export function areFinalsComplete(): boolean {
    return finalMatches.every(m => m.homeScore !== null && m.awayScore !== null);
}

// Get podium results (only valid after finals are complete)
export function getPodiumResults(): { first: number | null; second: number | null; third: number | null } {
    const championship = getFinalMatch("championship");
    const thirdPlace = getFinalMatch("third-place");

    if (!championship || championship.homeScore === null || championship.awayScore === null) {
        return { first: null, second: null, third: null };
    }

    // Determine championship winner (handle penalties if tied)
    let first: number;
    let second: number;

    if (championship.homeScore > championship.awayScore) {
        first = championship.homeTeam;
        second = championship.awayTeam;
    } else if (championship.homeScore < championship.awayScore) {
        first = championship.awayTeam;
        second = championship.homeTeam;
    } else {
        // Tied - check penalty scores
        const penHome = championship.penaltyHomeScore ?? 0;
        const penAway = championship.penaltyAwayScore ?? 0;
        if (penHome > penAway) {
            first = championship.homeTeam;
            second = championship.awayTeam;
        } else {
            first = championship.awayTeam;
            second = championship.homeTeam;
        }
    }

    // Determine third place winner
    let third: number | null = null;
    if (thirdPlace && thirdPlace.homeScore !== null && thirdPlace.awayScore !== null) {
        if (thirdPlace.homeScore > thirdPlace.awayScore) {
            third = thirdPlace.homeTeam;
        } else if (thirdPlace.homeScore < thirdPlace.awayScore) {
            third = thirdPlace.awayTeam;
        } else {
            // Tied - check penalty scores
            const penHome = thirdPlace.penaltyHomeScore ?? 0;
            const penAway = thirdPlace.penaltyAwayScore ?? 0;
            third = penHome > penAway ? thirdPlace.homeTeam : thirdPlace.awayTeam;
        }
    }

    return { first, second, third };
}
