import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ClientLogos from "@/components/sections/client-logos";
import BusinessChallenges from "@/components/sections/business-challenges";
import ModernHealthDifference from "@/components/sections/modern-health-difference";
import RoiProof from "@/components/sections/roi-proof";
import CustomerSuccessStory from "@/components/sections/customer-success-story";
import CustomerTestimonials from "@/components/sections/customer-testimonials";
import PersonalizedCare from "@/components/sections/personalized-care";
import CustomerExperiences from "@/components/sections/customer-experiences";
import MemberImpact from "@/components/sections/member-impact";
import CommunityBuildingSection from "@/components/sections/community-building";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ClientLogos />
        <BusinessChallenges />
        <ModernHealthDifference />
        <RoiProof />
        <CustomerSuccessStory />
        <CustomerTestimonials />
        <PersonalizedCare />
        <CustomerExperiences />
        <MemberImpact />
        <CommunityBuildingSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}