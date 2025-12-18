import Image from "next/image";

export default function ChefCircle() {
  const images = [
    {
      src: "/Event/img1.jpg",
      alt: "Chefs at conference table",
      width: 389,
      height: 375,
    },
    {
      src: "/Event/img2.jpg",
      alt: "Chef holding tray with hydroponic greens",
      width: 389,
      height: 375,
    },
    {
      src: "/Event/img3.jpg",
      alt: "Culinary event with chef cooking",
      width: 389,
      height: 375,
    },
  ];

  return (
    <section id="events-content" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Top Section - Coming Soon */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] mb-4">
            Coming soon!
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 font-roboto">
            Stay tuned for the official announcement of the event date and time.
          </p>
        </div>

        {/* Event Title and Tagline */}
        <div className="mb-12 md:mb-16 text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] mb-4">
            Fresh From The Future - Chef Circle
          </h3>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 font-roboto">
            Experience, Learn, and Celebrate Culinary Moments
          </p>
        </div>

        {/* Image Gallery and Text Container - Same Width */}
        <div className="flex flex-col items-center mx-auto max-w-[1231px]">
          {/* Image Gallery - Three Images */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mb-12 md:mb-12 w-full">
            {images.map((image, index) => (
              <div key={index} className="relative w-full sm:w-[280px] md:w-[320px] lg:w-[389px] aspect-[389/375] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={389}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Descriptive Text - Same Width as Image Gallery */}
          <div className="w-full">
            <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed text-center">
              We&apos;re building a community where chefs can meet, learn, taste, and innovate together.{" "}
              <span className="font-bold">Chef Circle</span> is our monthly chef-only meetup designed to introduce our premium hydroponic greens while encouraging open conversations around flavour, sustainability, and kitchen needs. Think of it as a creative space where chefs connect—and fresh ideas grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
