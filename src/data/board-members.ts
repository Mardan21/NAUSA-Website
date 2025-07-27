export interface BoardMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Ahmet Yilmaz",
    position: "President",
    bio: "Leading NAUSA since 2015, dedicated to promoting Uyghur sports and unity across North America.",
    imageUrl: "/images/board/president.jpg"
  },
  {
    id: 2,
    name: "Fatima Khan",
    position: "Vice President",
    bio: "Oversees tournament operations and community outreach programs.",
    imageUrl: "/images/board/vice-president.jpg"
  },
  {
    id: 3,
    name: "Mehmet Ozturk",
    position: "Secretary",
    bio: "Manages administrative duties and coordinates with member organizations.",
    imageUrl: "/images/board/secretary.jpg"
  },
  {
    id: 4,
    name: "Aisha Rahman",
    position: "Treasurer",
    bio: "Handles financial management and sponsorship coordination.",
    imageUrl: "/images/board/treasurer.jpg"
  },
  {
    id: 5,
    name: "Hassan Ali",
    position: "Board Member",
    bio: "Focuses on youth development and sports education programs.",
    imageUrl: "/images/board/board-member-1.jpg"
  },
  {
    id: 6,
    name: "Zara Ahmed",
    position: "Board Member",
    bio: "Specializes in media relations and public communications.",
    imageUrl: "/images/board/board-member-2.jpg"
  }
]; 