import SubscriptionBanner from "./_components/subscriptionbanner";
import SubscriptionPlans from "./_components/SubscriptionPlans";
import SubscriptionForm from "./_components/SubscriptionForm";
import NewsletterSubscribe from "@/components/NewsletterSubscribe";

export default function SubscriptionPage() {
  return (
    <main>
      <SubscriptionBanner />
      <SubscriptionPlans />
      <SubscriptionForm />
      <NewsletterSubscribe />
    </main>
  );
}
