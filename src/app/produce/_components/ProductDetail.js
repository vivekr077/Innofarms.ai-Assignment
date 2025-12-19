"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ product }) {
  // Hardcoded nutrition facts (same for all products)
  const nutritionFacts = [
    {
      icon: "/Produces/calories.svg",
      alt: "Calories",
      text: "Calories: 17 kcal-per 100g",
    },
    {
      icon: "/Produces/Protein.svg",
      alt: "Protein",
      text: "Protein: 1.2g-per 100g",
    },
    {
      icon: "/Produces/Fiber.svg",
      alt: "Fiber",
      text: "Fiber: 2.1g-per 100g",
    },
    {
      icon: "/Produces/vitamin.svg",
      alt: "Vitamin A",
      text: "Vitamin A: 174% DV-per 100g",
    },
    {
      icon: "/Produces/vitamink.svg",
      alt: "Vitamin K",
      text: "Vitamin K: 85% DV-per 100g",
    },
    {
      icon: "/Produces/folate.svg",
      alt: "Folate",
      text: "Folate: 34% DV-per 100g",
    },
  ];

  // Hardcoded related products (same for all)
  const relatedProducts = [
    {
      name: "Bok Choy",
      image: "/Produces/BokChoy.jpg",
      slug: "bok-choy",
    },
    {
      name: "Sorrel Vein Leaf",
      image: "/Produces/SorrelVein.jpg",
      slug: "sorrel-vein-leaf",
    },
    {
      name: "Marigold Petals",
      image: "/Produces/MarigoldPetals.jpg",
      slug: "marigold-petals",
    },
  ];

  return (
    <main className="w-full bg-white min-h-screen">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Name, Description, and Stars */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D550C] mb-2 font-spartan">
                {product.productName}
              </h1>

              {/* Description */}
              <p className="text-sm text-[#666666] font-roboto font-normal leading-relaxed mb-2 max-w-2xl">
                {product.description}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Produces/star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ))}
              </div>
            </div>

            {/* Main Product Section - Image and Nutrition Blocks */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20 items-center lg:items-center">
              {/* Left Side - Product Image (Smaller) */}
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative w-[396px] h-[293px] aspect-square rounded-lg overflow-hidden border-2 border-[#404A3D]/20">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Side - Nutritional Information Blocks */}
              <div className="w-full lg:w-2/3 flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-lg:px-6 lg:gap-12">
                  {nutritionFacts.map((fact, index) => (
                    <div
                      key={index}
                      className="bg-[#3D550C]/21 rounded-lg p-2 border-2 border-[#404A3D]/20 flex items-center gap-3"
                    >
                      <Image
                        src={fact.icon}
                        alt={fact.alt}
                        width={32}
                        height={32}
                        className="w-6 h-6 flex-shrink-0"
                      />
                      <p className="text-[10px] font-medium text-[#1E1E1E] font-roboto">
                        {fact.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Products Section */}
            <div className=" pt-4 lg:pt-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-lg:text-center text-[#3D550C] font-spartan mb-8 md:mb-12">
                You may also be interested in the following
              </h2>

              <div className="flex flex-wrap gap-8 max-lg:px-6 max-lg:justify-center lg:gap-24 justify-start">
                {relatedProducts.map((related, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full sm:w-[180px] md:w-[200px] lg:w-[240px]"
                  >
                    {/* Product Name - Above Image */}
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#E3572B] font-signika mb-3 text-center">
                      {related.name}
                    </h3>
                    
                    {/* Image Container */}
                    <div className="relative w-full sm:w-[180px] md:w-[200px] lg:w-full aspect-[289/146] rounded-lg overflow-visible">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[#E3572B]/60">
                        <Image
                          src={related.image}
                          alt={related.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Nutrition Info Button - Half inside, half outside */}
                      <Link
                        href={`/produce/${related.slug}`}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#E3572B] border border-[#A5E32B] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-[#D2691E] transition-colors duration-300 font-medium text-sm md:text-base font-outfit whitespace-nowrap z-10"
                      >
                        Nutrition Info
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
