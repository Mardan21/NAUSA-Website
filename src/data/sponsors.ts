export interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
  website?: string;
  level: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Smart Water",
    logoUrl: "/images/sponsors/smartwater_logo_2.png",
    website: "https://www.coca-cola.com/us/en/brands/smartwater",
    level: "platinum"
  },
  {
    id: 2,
    name: "Dolan",
    logoUrl: "/images/sponsors/dolan_logo.png",
    website: "https://www.dolanuyghur.com/",
    level: "gold"
  },
  {
    id: 3,
    name: "Kusan",
    logoUrl: "/images/sponsors/kusan_logo.png",
    website: "https://www.kusanbazaar.com/",
    level: "gold"
  },
  {
    id: 4,
    name: "Bostan",
    logoUrl: "/images/sponsors/bostan_logo.png",
    website: "https://www.bostanuyghurcuisine.com/",
    level: "gold"
  },
  {
    id: 5,
    name: "Metrica Academy",
    logoUrl: "/images/sponsors/metrica_academy_logo.png",
    website: "https://www.metricaacademy.com/",
    level: "gold"
  },
  {
    id: 6,
    name: "Rawan Mentorship",
    logoUrl: "/images/sponsors/rawan_logo.svg",
    website: "https://www.rawanmentorship.org/",
    level: "gold"
  },
  {
    id: 7,
    name: "United Uyghur Youth",
    logoUrl: "/images/sponsors/uuy_logo_1.png",
    website: "https://www.uniteduyghuryouth.org/",
    level: "gold"
  }
]; 