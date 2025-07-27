import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import MissionSection from "@/components/home/MissionSection";
import StatsSection from "@/components/home/StatsSection";
// import UpcomingTournament from "@/components/home/UpcomingTournament";
import PartnersSection from "@/components/home/PartnersSection";
import DonationSection from "@/components/home/DonationSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <MissionSection />
      <StatsSection />
      {/* <UpcomingTournament /> */}
      <PartnersSection />
      <DonationSection />
      <ContactSection />
    </>
  );
}
