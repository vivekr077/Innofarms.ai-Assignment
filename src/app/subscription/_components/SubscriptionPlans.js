import Link from "next/link";

export default function SubscriptionPlans() {
  const plans = [
    {
      name: "Trial Plan",
      duration: "2-4 Weeks",
    },
    {
      name: "Starter Plan",
      duration: "3 Months",
    },
    {
      name: "Pro Plan",
      duration: "6 Months",
    },
  ];

  return (
    <section id="subscription-plans" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Flexible Subscription Plans
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 text-center mb-8 md:mb-8 font-spartan">
          We offer flexible subscription options — designed for kitchen efficiency & menu consistency.
        </p>

        {/* Subscription Plan Cards */}
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center mb-12 md:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#DCBC8870]/80 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center w-full sm:w-[280px] md:w-[300px] lg:w-auto lg:min-w-[280px] lg:max-w-[320px] shadow-[0_4px_14px_0_rgba(28,66,161,0.04)]"
            >
              {/* Plan Name */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#3D550C] font-archivo text-center">
                {plan.name}
              </h3>

              {/* Duration */}
              <p className="text-xl md:text-2xl font-normal text-[#3D550C] font-archivo text-center mb-6">
                {plan.duration}
              </p>

              {/* Enquire Now Button */}
              <Link
                href="#subscription-form"
                className="bg-[#3D550C] text-white px-12 py-1 rounded-lg hover:bg-[#2d3f0a] transition-colors duration-300 font-medium text-base md:text-lg font-outfit"
              >
                Enquire Now
              </Link>
            </div>
          ))}
        </div>

        {/* Explanatory Text */}
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed">
            Click Enquire Now or reach out to us directly via Call or WhatsApp to understand which subscription plan suits your needs. Our executive will assess your requirements and recommend the best plan for you.
          </p>
          <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed">
            Once you&apos;ve finalized the plan, simply fill out the subscription form below to proceed with your order. We harvest your produce on the same day of delivery, ensuring you receive the freshest greens every time.
          </p>
        </div>
      </div>
    </section>
  );
}
