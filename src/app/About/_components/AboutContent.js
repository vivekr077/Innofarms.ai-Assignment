import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* First Section: About Fresh From The Future */}
        <div className="">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-[54px] font-bold text-[#3D550C] font-spartan">
                  About
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-[54px] font-bold text-[#3D550C] font-spartan">
                  Fresh From The Future
                </h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <p className="text-base md:text-[20px] text-[#1E1E1E]/80 font-roboto leading-[34px]">
                  Fresh From The Future is a premium HoReCa produce brand offering beyond-organic hydroponic leafy greens, microgreens, and edible flowers. Powered by INNOFarms.AI, our produce is grown in a fully controlled.
                </p>
                <p className="text-base md:text-[20px] text-[#1E1E1E]/80 font-roboto leading-[34px]">
                  AI-enabled, and traceable environment that ensures unmatched purity, consistency, and freshness. Designed on advanced Singapore and UAE precision farming models. our state-of-the-art facility in Gurugram enables us to deliver hyper-local, hyper-fresh, and completely pesticide-free produce.
                </p>
                <p className="text-base md:text-[20px] text-[#1E1E1E]/80 font-roboto leading-[34px]">
                  Every leaf is cultivated with precision, sustainability, and transparency—crafted to meet the highest standards of chefs, restaurants, and culinary professionals.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-xl h-auto">
                <Image
                  src="/About/FreshFoodImg.jpg"
                  alt="Fresh food presentation with leafy greens"
                  width={900}
                  height={900}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: The INNOGrowPod™ */}
        <div>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-0 items-start lg:items-center">
            {/* Left Side - Image and Caption */}
            <div className="w-full lg:w-1/2 flex flex-col items-end lg:pr-0">
              <div className="w-full h-auto mb-0 flex justify-end">
                <Image
                  src="/About/InnofarmsAi.svg"
                  alt="INNOGrowPod vertical farming unit"
                  width={1200}
                  height={1500}
                  className="w-full h-auto object-contain rounded-lg max-w-4xl -mr-20"
                  priority
                />
              </div>
              <div className="-mt-14 text-center w-full">
                <p className="text-lg md:text-xl font-bold text-[#1E1E1E] font-spartan mb-1">
                  Nespresso of Vertical Farming
                </p>
                <p className="text-base md:text-lg text-gray-600 font-roboto">
                  — elegant, smart, traceable, and profitable.
                </p>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-0 items-start">
              <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold text-[#3D550C] font-spartan mb-2">
                The INNOGrowPod™
              </h2>
              <p className="text-xl md:text-2xl font-normal text-[#1E1E1E]/80 font-spartan max-w-[70%] leading-[34px] tracking-normal">
                We provide the INNOGrowPod™, an AI-powered on-site farming unit for premium kitchens, enabling chefs to grow fresh, high-quality produce directly in their restaurants. This ensures superior flavor, sustainability, and control over ingredients from seed to plate. These pods are available in varied sizes from mini to max.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
