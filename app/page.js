// app/page.tsx (if using App Router)

import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TractionSection from "@/components/TractionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function HomePage() {


  return (
    <main>
      <DarkModeToggle/>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TractionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
