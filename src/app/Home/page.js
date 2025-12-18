import Hero from "./_components/Hero";
import WhyWeAreDifferent from "./_components/WhyWeAreDifferent";
import GreensLeadingTrend from "./_components/GreensLeadingTrend";
import FeedbackFromChefs from "./_components/FeedbackFromChefs";
import TechnologyCultivates from "./_components/TechnologyCultivates";
import TraceCropJourney from "./_components/TraceCropJourney";
import ProduceCategories from "./_components/ProduceCategories";
import GetOurGreens from "./_components/GetOurGreens";
import GetInTouch from "@/components/GetInTouch";
import SubscribeBanner from "@/components/SubscribeBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyWeAreDifferent />
      <GreensLeadingTrend />
      <FeedbackFromChefs />
      <TechnologyCultivates />
      <SubscribeBanner />
      <TraceCropJourney />
      <ProduceCategories />
      <GetOurGreens />
      <GetInTouch />
    </>
  );
}
