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
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 6,
        goalsAgainst: 3,
    },
    {
        teamId: TEAM_IDS.LACHIN_FC,
        played: 2,
        wins: 2,
        draws: 0,
        losses: 0,
        goalsFor: 3,
        goalsAgainst: 1,
    },
    {
        teamId: TEAM_IDS.SF_BAY,
        played: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsFor: 3,
        goalsAgainst: 3,
    },
    {
        teamId: TEAM_IDS.BNYUU,
        played: 2,
        wins: 0,
        draws: 0,
        losses: 2,
        goalsFor: 1,
        goalsAgainst: 6,
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
    { jerseyNumber: 10, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 3, yellowCards: 2, redCards: 0 },
    { jerseyNumber: 13, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 19, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.UYGHUR_UNITED, goals: 1, yellowCards: 1, redCards: 0 },

    // BNYUU scorers
    { jerseyNumber: 28, teamId: TEAM_IDS.BNYUU, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.BNYUU, goals: 0, yellowCards: 0, redCards: 1 },
    { jerseyNumber: 2, teamId: TEAM_IDS.BNYUU, goals: 0, yellowCards: 1, redCards: 0 },

    // Lachin FC scorers
    { jerseyNumber: 66, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 12, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 19, teamId: TEAM_IDS.LACHIN_FC, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 33, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 15, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 27, teamId: TEAM_IDS.LACHIN_FC, goals: 0, yellowCards: 1, redCards: 0 },

    // SF Bay scorers
    { jerseyNumber: 12, teamId: TEAM_IDS.SF_BAY, goals: 2, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 8, teamId: TEAM_IDS.SF_BAY, goals: 1, yellowCards: 0, redCards: 0 },
    { jerseyNumber: 21, teamId: TEAM_IDS.SF_BAY, goals: 0, yellowCards: 1, redCards: 0 },
    { jerseyNumber: 88, teamId: TEAM_IDS.SF_BAY, goals: 0, yellowCards: 1, redCards: 0 },
];

// Get top scorers sorted by goals (descending)
export function getTopScorers(): PlayerStat[] {
    return [...playerStats]
        .filter(p => p.goals > 0)
        .sort((a, b) => b.goals - a.goals);
}

// Get players with yellow cards sorted by count (descending)
export function getYellowCardLeaders(): PlayerStat[] {
    return [...playerStats]
        .filter(p => p.yellowCards > 0)
        .sort((a, b) => b.yellowCards - a.yellowCards);
}

// Get players with red cards sorted by count (descending)
export function getRedCardLeaders(): PlayerStat[] {
    return [...playerStats]
        .filter(p => p.redCards > 0)
        .sort((a, b) => b.redCards - a.redCards);
}

// Get total yellow and red cards for a team (aggregated from player stats)
export function getTeamCardTotals(teamId: number): { yellowCards: number; redCards: number } {
    const teamPlayers = playerStats.filter(p => p.teamId === teamId);
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
