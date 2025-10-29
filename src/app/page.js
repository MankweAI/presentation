// src/app/page.js

import TitleSlide from "@/components/TitleSlide";
import ProblemSlide from "@/components/ProblemSlide";
import SolutionSlide from "@/components/SolutionSlide";
import FounderSlide from "@/components/FounderSlide";
import VisionSlide from "@/components/VisionSlide"; // 1. Import
import AskSlide from "@/components/AskSlide"; // 2. Import

export default function Home() {
  return (
    <main>
      <TitleSlide />
      <ProblemSlide />
      <SolutionSlide />
      <FounderSlide />
      <VisionSlide /> {/* 3. Add here */}
      <AskSlide /> {/* 4. Add here */}
    </main>
  );
}
