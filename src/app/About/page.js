import AboutBanner from "./_components/AboutBanner";
import AboutContent from "./_components/AboutContent";
import FeedbackFromChefs from "./_components/FeedbackFromChefs";
import FAQ from "./_components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import SubscribeBanner from "@/components/SubscribeBanner";

export default function AboutPage() {
  return (
    <main>
      <AboutBanner />
      <AboutContent />
      <FeedbackFromChefs />
      <SubscribeBanner />
      <FAQ />
      <GetInTouch />
    </main>
  );
}
