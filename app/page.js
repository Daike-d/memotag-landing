// app/page.tsx (if using App Router)

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TractionSection from "@/components/TractionSection";
import CTASection from "@/components/CTASection";
import { FeedbackSection } from "@/components/FeedbackSection";
import { FeatureSection } from "@/components/FeatureSection";

export default function HomePage() {


  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <TractionSection />
      <SolutionSection />
      <FeedbackSection/>
      {/* <FeatureSection/> */}
      <CTASection />
    </main>
  );
}
