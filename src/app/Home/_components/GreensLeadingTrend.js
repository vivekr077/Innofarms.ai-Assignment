import Image from "next/image";
import Link from "next/link";

export default function GreensLeadingTrend() {
  const greens = [
    {
      image: "/Home/GreensLeadingImg/GreenLeafLettuce.jpg",
      category: "LEAFY GREENS",
      title: "Green Leaf Lettuce",
    },
    {
      image: "/Home/GreensLeadingImg/Spinach.jpg",
      category: "BABY GREENS",
      title: "Spinach",
    },
    {
      image: "/Home/GreensLeadingImg/Arugula.jpg",
      category: "MICROGREENS",
      title: "Arugula",
    },
    {
      image: "/Home/GreensLeadingImg/The Basil.jpg",
      category: "SPECIALTY HERBS & RARE CROPS",
      title: "Thai Basil",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-16 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-4">
          The Greens Leading The Trend
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-12 md:mb-12 font-spartan">
          The freshest, crunchiest varieties shaping today&apos;s culinary trends.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {greens.map((green, index) => (
            <div
              key={index}
              className="group rounded-[30px] overflow-hidden transition-all duration-300 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] max-w-[320px] flex flex-col hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              {/* Image - Rounded on all corners */}
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[30px]">
                <Image
                  src={green.image}
                  alt={green.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-[30px] transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
              </div>

              {/* Content - Separate section below image */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-[#5B8C51] rounded-full group-hover:bg-[#3D550C] transition-colors duration-300"></span>
                  <span className="text-xs md:text-sm font-normal text-[#999999] group-hover:text-[#3D550C] font-signika uppercase tracking-wide transition-colors duration-300">
                    {green.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-medium text-[#404A3D] mb-2 font-signika group-hover:text-[#3D550C] transition-colors duration-300">
                  {green.title}
                </h3>

                {/* Peek Inside Button */}
                <Link
                  href={`/greens/${green.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-center gap-3 bg-[#D2B284] text-[#404A3D] py-0.5 rounded-md hover:bg-[#C9A86A] group-hover:bg-[#3D550C] group-hover:text-white transition-all duration-300 font-medium font-signika text-sm md:text-base w-1/2 transform group-hover:translate-x-1"
                >
                  Peek Inside
                  <Image
                    src="/Home/GreensLeadingImg/Vector.svg"
                    alt="Arrow icon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
