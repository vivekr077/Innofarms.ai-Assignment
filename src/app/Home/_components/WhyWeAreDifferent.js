import Image from "next/image";

export default function WhyWeAreDifferent() {
  const features = [
    {
      icon: "/Home/WhyWeAreDiffLogo/coffee-beans 1.svg",
      title: "Non GMO & Pesticide Free",
      description: "Only the best-quality seeds were sown, promising a rich harvest.",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/badge 1.svg",
      title: "UAE & Singapore-Grade Farming SOP",
      description: "Used AI & IOT SAAS technology by award winning INNOFarmsXOSAI Platform",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/sustainable-icon-illustration-arrow-icon-with-leaf-icon-related-to-ecology-renewable-energy-line-icon-style-simple-design-editable-vector 1.svg",
      title: "Hyper-Local",
      description: "From harvest-to-kitchen in under 24 hours for unmatched freshness and flavor.",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/best-price 1.svg",
      title: "Consistent Quality",
      description: "Uniform taste, texture, and appearance & consistent supply 365 days a year",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/png-transparent-qr-code-computer-icons-barcode-calligraphy-others-text-rectangle-logo 1.svg",
      title: "Traceability",
      description: "Full crop traceability from seed to harvest",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/pngtree-black-leaf-icon-design-template-vector-png-image_3010195 1.svg",
      title: "Custom Crop Requests",
      description: "Grown to match your menu and seasonal needs",
    },
    {
      icon: "/Home/WhyWeAreDiffLogo/handshake.svg",
      title: "No Middlemen",
      description: "Direct from our controlled environment to your kitchen",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Why are we different?
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-xl lg:text-2xl font-light text-gray-700 text-center mb-12 md:mb-8 font-spartan">
          Engineered freshness for culinary excellence.
        </p>

        {/* Feature Cards Flex */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFF9F1] hover:bg-[#DCBC88]/44 rounded-[30px] border border-[#F9C06A]/42 py-6 px-6 transition-colors duration-300 cursor-pointer flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[280px]"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2xl font-bold text-[#3D550C] mb-5 text-center leading-none tracking-normal font-spartan">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base font-normal text-gray-700 text-center leading-none tracking-normal font-spartan">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Subheading */}
        <p className="text-base md:text-lg lg:text-2xl text-gray-700 text-center mb-4 font-spartan">
          Where technology meets taste, every leaf perfected.
        </p>

        {/* Call to Action */}
        <div className="text-center">
          <button className="text-xl md:text-4xl font-bold text-[#3D550C] font-spartan hover:opacity-80 transition-opacity">
            Join Us Today!
          </button>
        </div>
      </div>
    </section>
  );
}
