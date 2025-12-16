import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import MissionSection from "@/components/home/MissionSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import DonationSection from "@/components/home/DonationSection";
import PartnersSection from "@/components/home/PartnersSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <HighlightsSection />
      <DonationSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
