export const SITE_CONFIG = {
  name: 'NAUSA',
  fullName: 'North American Uyghur Sports Association',
  description: 'Promoting unity through sports since 2015',
  email: 'info@UyghurSports.com',
  location: 'Vienna, Virginia USA',
  social: {
    facebook: 'https://www.facebook.com/p/North-American-Uyghur-Sports-Association-61559532757224/',
    instagram: 'https://www.instagram.com/uyghursports.us/',
    twitter: 'https://twitter.com/nausa',
    youtube: 'https://www.youtube.com/@uyghuramericancup',
  }
};

export const TOURNAMENT_2025 = {
  name: 'Uyghur American Cup 2025',
  dates: 'December 17-20, 2025',
  startDate: '2025-12-17T14:00:00-06:00', // First match start time (CST)
  location: 'Memorial Hermann Sports Park-Katy',
  city: 'Houston, Texas',
  teams: ['Lachin FC', 'SF Uyghur FC', 'Uyghur United FC', 'BNUUFC'],
  openingCeremony: {
    date: 'December 17, 2025',
    time: '7:00 PM',
    venue: "Bijan's Restaurant",
    address: '5922 Hillcroft St #A, Houston, TX 77036',
  },
  schedule: [
    { date: 'Dec 17', time: '2:00 PM', match: 'Lachin FC vs SF Uyghur FC' },
    { date: 'Dec 17', time: '3:30 PM', match: 'Uyghur United FC vs BNUUFC' },
    { date: 'Dec 18', time: '2:00 PM', match: 'SF Uyghur FC vs UUFC' },
    { date: 'Dec 18', time: '3:30 PM', match: 'Lachin FC vs BNUUFC' },
    { date: 'Dec 19', time: '3:00 PM', match: 'Lachin FC vs UUFC' },
    { date: 'Dec 19', time: '4:30 PM', match: 'SF Uyghur FC vs BNUUFC' },
    { date: 'Dec 20', time: '3:00 PM', match: '3rd Place Game' },
    { date: 'Dec 20', time: '4:30 PM', match: 'Final Championship Game 🏆' },
    { date: 'Dec 20', time: '6:30 PM', match: 'Closing Ceremony' },
  ],
  socialMedia: {
    instagram: '@Uyghur.American.Cup',
    website: 'www.UyghurSports.com',
  },
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // { label: 'Tournaments', href: '/tournaments' },
  { label: 'Media', href: '/media' },
  { label: 'By-Laws', href: '/bylaws' },
];