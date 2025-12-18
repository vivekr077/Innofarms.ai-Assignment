import Image from "next/image";

export default function TraceCropJourney() {
  const journeyImages = [
    {
      src: "/Home/CropsJourney/img1.jpg",
      alt: "Growth/Farm Stage - Lollo Bionda lettuce in vertical farming",
    },
    {
      src: "/Home/CropsJourney/img2.jpg",
      alt: "Chef/Preparation Stage - Chef scanning QR code",
    },
    {
      src: "/Home/CropsJourney/img3.png",
      alt: "Customer Traceability Stage - Customer scanning QR code",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Trace Your Crop&apos;s Journey
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-10 font-spartan">
          Track your produce effortlessly. Just scan the QR code to unlock your crop&apos;s journey.
        </p>

        {/* Images Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-12">
          {journeyImages.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] max-w-[400px] rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-contain w-full h-auto rounded-lg"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        {/* Descriptive Text */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1280px] space-y-6">
            <p className="text-base md:text-[22px] font-normal text-[#1E1E1E]/80 leading-relaxed font-roboto">
              Your Crop Box comes with a QR code designed for complete transparency. Once scanned, it takes you to a dynamic Traceability Page where you can follow the crop&apos;s lifecycle—from planting conditions and farm specifics to crop monitoring data, sustainability certifications, and harvest information.
            </p>
            <p className="text-base md:text-[22px] font-normal text-[#1E1E1E]/80 leading-relaxed font-roboto">
              Explore a live impact snapshot, check product descriptions, and view every milestone of the crop journey. With one quick scan, you gain full access to the story behind your produce, backed by real-time farm insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
