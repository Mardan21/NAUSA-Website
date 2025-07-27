import { notFound } from "next/navigation";
import { tournaments } from "../../../data/tournaments";
import TournamentHero from "@/components/tournaments/TournamentHero";
import TournamentStats from "@/components/tournaments/TournamentStats";
import TournamentResults from "@/components/tournaments/TournamentResults";

interface TournamentPageProps {
  params: {
    year: string;
  };
}

export default function TournamentPage({ params }: TournamentPageProps) {
  const tournament = tournaments.find((t) => t.year.toString() === params.year);

  if (!tournament || tournament.canceled) {
    notFound();
  }

  return (
    <>
      <TournamentHero tournament={tournament} />
      <TournamentStats tournament={tournament} />
      <TournamentResults tournament={tournament} />
    </>
  );
}

export async function generateStaticParams() {
  return tournaments
    .filter((t) => !t.canceled)
    .map((tournament) => ({
      year: tournament.year.toString(),
    }));
}
