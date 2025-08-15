import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyNowSection from "@/components/WhyNowSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetMarketSection from "@/components/TargetMarketSection";
import StatusSection from "@/components/StatusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyNowSection />
      <FeaturesSection />
      <TargetMarketSection />
      <StatusSection />
      <Footer />
    </div>
  );
};

export default Index;
