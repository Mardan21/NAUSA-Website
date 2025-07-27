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
    name: "Tech Circle",
    logoUrl: "/images/sponsors/tech_circle_logo.png",
    website: "https://www.techcircleschool.com/",
    level: "gold"
  },
  {
    id: 6,
    name: "Mims Food",
    logoUrl: "/images/sponsors/mims_food_logo.png",
    website: "https://www.mimsfood.com/",
    level: "gold"
  },
  {
    id: 7,
    name: "Metrica Academy",
    logoUrl: "/images/sponsors/metrica_academy_logo.png",
    website: "https://www.metricaacademy.com/",
    level: "gold"
  }
]; 