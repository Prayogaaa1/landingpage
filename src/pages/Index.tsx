import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ConsultationForm from "@/components/ConsultationForm";
import PortfolioSection from "@/components/PortfolioSection";
import PortfolioSectionShoppe from "@/components/PortfolioSectionShoppe";
import PortfolioSectionMeta from "@/components/PortfolioSectionMeta";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <PortfolioSection />
      <PortfolioSectionShoppe />
      <PortfolioSectionMeta />
      <TargetAudienceSection />
      <TestimonialSection />
      <BrandPartnersSection />
      <FAQSection />
      <PricingSection />
      <ConsultationForm />
      <CTASection />
      <WhatsAppFloat />
      <Footer />
    </main>
  );
};

export default Index;
