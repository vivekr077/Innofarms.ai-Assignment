import Image from "next/image";

export default function GetOurGreens() {
  const steps = [
    {
      image: "/Home/GetOurGreens/Img1.jpg",
      stepNumber: 1,
      description: "Choose the product that best fits your needs.",
    },
    {
      image: "/Home/GetOurGreens/Img2.jpg",
      stepNumber: 2,
      description: "Contact us directly or via WhatsApp for selecting the subscription plan.",
    },
    {
      image: "/Home/GetOurGreens/Img3.jpg",
      stepNumber: 3,
      description: "Fill the subscription form after discussing with our executive to proceed with shopping.",
    },
    {
      image: "/Home/GetOurGreens/Img4.jpg",
      stepNumber: 4,
      description: "Our team will harvest your order in the same day and deliver to ensure the products arrive fresh.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center">
          How You Get Our Greens
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-22 font-spartan">
          Grown smart. Picked fresh. Delivered green.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-[#FFF9F1] rounded-lg overflow-visible transition-all duration-300 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px] flex flex-col relative hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              {/* Image Container with Step Number Badge */}
              <div className="w-full relative bg-[#FFF9F1]">
                <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
                  <Image
                    src={step.image}
                    alt={`Step ${step.stepNumber}`}
                    width={300}
                    height={250}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    priority={index < 2}
                  />
                </div>
                
                {/* Step Number Badge - Centered at top, half inside, half outside */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-center shadow-lg z-10 group-hover:scale-110 group-hover:bg-[#E3572B] group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-5xl font-spartan group-hover:scale-110 transition-transform duration-300">
                    {step.stepNumber}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-5 flex-1 bg-[#FFF9F1] border-2 border-[#F9C06A6B]/42 rounded-b-lg group-hover:border-[#3D550C]/60 transition-colors duration-300">
                <p className="text-base md:text-lg font-medium text-[#3D550C]/80 group-hover:text-[#3D550C] leading-[100%] tracking-normal font-spartan text-left transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
