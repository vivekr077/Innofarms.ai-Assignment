import Image from "next/image";

export default function TechnologyCultivates() {
  const technologies = [
    {
      logo: "/Home/TechnologyCultivates/INNOFarmsXOS.svg",
      title: "INNOFarmsXOS",
      subtitle: "AI-Powered Freshness",
      description: "Climate, nutrients, and light controlled to the micron — ensuring unwavering flavor, crunch & color.",
    },
    {
      logo: "/Home/TechnologyCultivates/GlobalSOPs.svg",
      title: "Global SOPs",
      subtitle: "UAE & Singapore Model Farms",
      description: "Hygiene, bio-security & operations modeled on our UAE and Singapore facilities for world-class standards.",
    },
    {
      logo: "/Home/TechnologyCultivates/BarProgram.svg",
      title: "Bar Program",
      subtitle: "Bar Botanica Collection",
      description: "Botanicals, edible flowers & micro-herbs curated for progressive cocktails & bar programs.",
    },
    {
      logo: "/Home/TechnologyCultivates/ZeroWaste.svg",
      title: "Zero-Waste",
      subtitle: "Pantry & Preservation",
      description: "Dehydrated micro powders, herb salts & infused oils crafted from surplus crops for a zero-waste kitchen.",
    },
    {
      logo: "/Home/TechnologyCultivates/CoCreatedWithChefs.svg",
      title: "Co-Created with Chefs",
      subtitle: "Exclusive Signature Mixes",
      description: "Monthly rotating blends designed in collaboration with India's leading chefs — exclusive to your kitchen.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Where Technology Cultivates Taste
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-gray-600 text-center mb-10 md:mb-14 font-spartan">
          Every leaf, every microgreen, every flower — grown with precision, data, and a chef&apos;s vision.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {technologies.map((tech, index) => {
            // First 3 cards: 33.333% width, last 2 cards: 50% width for centering
            const cardWidth = index < 3 
              ? "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]" 
              : "w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]";
            
            return (
            <div
              key={index}
              className={`bg-[#DCBC88]/44 rounded-lg p-6 transition-shadow duration-300 flex-shrink-0 ${cardWidth} max-w-[400px]`}
            >
              {/* Logo and Title Row */}
              <div className="flex items-center gap-2 mb-2 justify-center">
                {/* Logo with Background */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#3D550C] flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.title}
                    width={56}
                    height={56}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Title and Subtitle */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium text-[#404A3D] mb-1 font-signika">
                    {tech.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#404A3DCC]/80 leading-relaxed font-roboto"><p className="text-lg md:text-xl font-normal text-[#1E1E1E] font-signika">
                    {tech.subtitle}
                  </p></p>
              {/* Description */}
              <p className="text-lg md:text-xl text-[#404A3DCC]/80 leading-relaxed font-roboto">
                {tech.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
