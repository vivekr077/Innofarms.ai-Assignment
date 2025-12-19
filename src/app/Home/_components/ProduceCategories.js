import Image from "next/image";
import Link from "next/link";

export default function ProduceCategories() {
  const categories = [
    {
      image: "/Home/ProduceCategories/LeafyGreens.jpg",
      title: "Leafy Greens",
    },
    {
      image: "/Home/ProduceCategories/BabyGreens.jpg",
      title: "Baby Greens",
    },
    {
      image: "/Home/ProduceCategories/MicroGreens.jpg",
      title: "Microgreens",
    },
    {
      image: "/Home/ProduceCategories/SpecialityHerbs.jpg",
      title: "Specialty Herbs",
    },
    {
      image: "/Home/ProduceCategories/EdibleFlowers.jpg",
      title: "Edible Flowers",
    },
    {
      image: "/Home/ProduceCategories/Customized.jpg",
      title: "Customized",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-6 xl:px-8">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-4">
          Our Produce Categories
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-12 md:mb-16 font-spartan">
          Premium greens, harvested for flavor, consistency, and culinary excellence.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14">
          {categories.map((category, index) => {
            // First 4 cards: 25% width, last 2 cards: 50% width for centering
            const cardWidth = index < 4 
              ? "w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-2.5rem)]" 
              : "w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(50%-2.5rem)]";
            
            return (
              <div
                key={index}
                className={`group bg-[#FFF9F1] rounded-lg overflow-visible transition-all duration-300 flex-shrink-0 ${cardWidth} max-w-[300px] flex flex-col border-1 border-[#F9C06A]/42 relative hover:scale-105 hover:shadow-xl cursor-pointer hover:border-[#3D550C]/60`}
              >
                {/* Image */}
                <div className="w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={280}
                    className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col pb-10">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#3D550C] mb-1 text-center font-playfair group-hover:scale-105 transition-transform duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* View Now Button - Half inside, half outside, positioned relative to card */}
                <Link
                  href={`/produce/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#3D550C] text-white px-6 py-3 rounded-lg hover:bg-[#2d3f0a] group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 font-medium font-playfair text-center z-10"
                >
                  View Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
