export interface Tournament {
  year: number;
  location: string;
  teams: number;
  attendees?: number;
  canceled?: boolean;
  venue?: string;
  champion?: string;
  runnerUp?: string;
  thirdPlace?: string;
}

export interface TeamLogo {
  id: number;
  name: string;
  instagramUrl: string;
  logoUrl: string;
  established?: number;
  titles?: number;
}

export interface BoardMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}