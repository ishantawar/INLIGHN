import { useState, useEffect } from "react";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { EnhancedProgramsSection } from "@/components/home/EnhancedProgramsSection";
import { EnhancedTestimonialsSection } from "@/components/home/EnhancedTestimonialsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TechPartnersSection } from "@/components/home/TechPartnersSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/scroll-animations";
import { InteractiveLiquidLoader } from "@/components/ui/interactive-liquid-loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <InteractiveLiquidLoader
        duration={2500}
        onComplete={() => setIsLoading(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <ScrollProgress color="#0ED2F7" thickness={3} />

      {/* Main Content */}
      <main>
        <EnhancedHeroSection />
        <EnhancedProgramsSection />
        <EnhancedTestimonialsSection />
        <WhyChooseUsSection />
        <TechPartnersSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
