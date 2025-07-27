import { Tournament } from '../lib/types';

export const tournaments: Tournament[] = [
  { 
    year: 2024, 
    location: "Irvine, California", 
    venue: "Great Park Sports Complex", 
    teams: 8,
    champion: "LA Uyghur FC",
    runnerUp: "Uyghur United",
    thirdPlace: "Bogda FC"
  },
  { 
    year: 2023, 
    location: "Virginia, USA", 
    teams: 8, 
    attendees: 500,
    champion: "Uyghur United",
    runnerUp: "Boston Uyghur FC",
    thirdPlace: "LA Uyghur FC"
  },
  { year: 2022, location: "Toronto, Canada", teams: 6 },
  { year: 2021, location: "Virginia, USA", teams: 6 },
  { year: 2020, location: "Canceled", teams: 0, canceled: true },
  { year: 2019, location: "San Francisco, CA", teams: 6 },
  { year: 2018, location: "Virginia, USA", teams: 5 },
  { year: 2017, location: "Boston, MA", teams: 5 },
  { year: 2016, location: "Los Angeles, CA", teams: 4 },
  { year: 2015, location: "Fairfax, Virginia", teams: 4 }
];