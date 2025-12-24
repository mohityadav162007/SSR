import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import CoverageSection from "@/components/home/CoverageSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientLogosSection />
      <CoverageSection />
      <WhyChooseUsSection />
    </Layout>
  );
};

export default Index;
