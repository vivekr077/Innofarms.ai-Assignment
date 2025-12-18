import Image from "next/image";

export default function CropJourney() {
  return (
    <section id="traceability-content" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] text-center mb-4">
          Scan to Explore the Crop Journey
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan">
          Enabling complete end-to-end visibility across every stage of the process.
        </p>

        {/* Image Gallery - Three Images */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-16">
          <div className="relative w-full md:w-1/3 max-w-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Traceability/img1.jpg"
              alt="Chefs with produce boxes"
              width={400}
              height={380}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/3 max-w-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Traceability/img2.jpg"
              alt="Produce boxes with QR codes"
              width={400}
              height={380}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/3 max-w-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Traceability/img3.jpg"
              alt="Chef holding produce box"
              width={400}
              height={380}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Descriptive Paragraph */}
        <div className="max-w-4xl mx-auto">
          <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed text-left">
            Transparency is at the heart of Fresh From The Future. Each pack carries a Traceability QR Code that unlocks the full story of your greens; where they were grown, the seed used, when they were planted, transplanted, and harvested, how their health improved over time, and the positive environmental impact along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
