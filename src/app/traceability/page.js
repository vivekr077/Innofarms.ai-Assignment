import TraceabilityBanner from "./_components/traceabilitybanner";
import CropJourney from "./_components/CropJourney";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

export default function TraceabilityPage() {
  return (
    <main>
      <TraceabilityBanner />
      <CropJourney />
      <NewsletterSubscribe />
    </main>
  );
}
