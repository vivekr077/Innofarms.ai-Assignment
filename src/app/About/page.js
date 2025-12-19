import AboutBanner from "./_components/AboutBanner";
import AboutContent from "./_components/AboutContent";
import FeedbackFromChefs from "./_components/FeedbackFromChefs";
import FAQ from "./_components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import SubscribeBanner from "@/components/SubscribeBanner";

export const metadata = {
  title: "About Us - INNOFarms.AI",
  description: "Learn about INNOFarms.AI, our AI-powered vertical farming technology, and Fresh From The Future produce brand.",
};

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
