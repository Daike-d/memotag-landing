// app/page.tsx (if using App Router)

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TractionSection from "@/components/TractionSection";
import CTASection from "@/components/CTASection";
import { FeatureSection } from "@/components/FeatureSection";

export default function HomePage() {


  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection />
      {/* <FeatureSection/> */}
      <CTASection />
    </main>
  );
}
