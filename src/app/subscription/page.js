import SubscriptionBanner from "./_components/subscriptionbanner";
import SubscriptionPlans from "./_components/SubscriptionPlans";
import SubscriptionForm from "./_components/SubscriptionForm";

export default function SubscriptionPage() {
  return (
    <main>
      <SubscriptionBanner />
      <SubscriptionPlans />
      <SubscriptionForm />
    </main>
  );
}
