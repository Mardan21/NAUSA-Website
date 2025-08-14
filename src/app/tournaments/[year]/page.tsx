// import { notFound } from "next/navigation";
import { tournaments } from "../../../data/tournaments";
// import TournamentHero from "@/components/tournaments/TournamentHero";
// import TournamentStats from "@/components/tournaments/TournamentStats";
// import TournamentResults from "@/components/tournaments/TournamentResults";

// interface TournamentPageProps {
//   params: Promise<{
//     year: string;
//   }>;
// }

// Temporarily disabled for build
export default function TournamentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Coming Soon</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return tournaments
    .filter((t) => !t.canceled)
    .map((tournament) => ({
      year: tournament.year.toString(),
    }));
}
