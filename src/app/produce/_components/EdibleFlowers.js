"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../Card";

export default function EdibleFlowers() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 3; // Number of navigation dots

  const products = [
    {
      image: "/OurProduce/EdibleFlowers/Speciality Chef's Mix.jpg",
      alt: "Specialty Chef's Mix",
      category: "EDIBLE FLOWERS",
      productName: "Specialty Chef's Mix",
      description: "Vibrant edible flowers with delicate, tangy, and slightly sweet flavors.",
      nutritionInfoHref: "/nutrition/edible-flowers-specialty-chefs-mix",
      arrowHref: "/produce/edible-flowers-specialty-chefs-mix",
    },
    {
      image: "/OurProduce/EdibleFlowers/Nasturtium.jpg",
      alt: "Nasturtium",
      category: "EDIBLE FLOWERS",
      productName: "Nasturtium",
      description: "Bright, peppery edible flowers with a spicy, tangy taste, perfect for salads and garnishes.",
      nutritionInfoHref: "/nutrition/nasturtium",
      arrowHref: "/produce/nasturtium",
    },
    {
      image: "/OurProduce/EdibleFlowers/Viola.jpg",
      alt: "Viola",
      category: "EDIBLE FLOWERS",
      productName: "Viola",
      description: "Delicate edible flowers with a mild, slightly sweet flavor, often used for garnishes and desserts.",
      nutritionInfoHref: "/nutrition/viola",
      arrowHref: "/produce/viola",
    },
    {
      image: "/OurProduce/EdibleFlowers/Marigold Petals.jpg",
      alt: "Marigold Petals",
      category: "EDIBLE FLOWERS",
      productName: "Marigold Petals",
      description: "Colorful edible petals with a slightly citrusy, mildly bitter flavor, ideal for decoration and flavoring dishes.",
      nutritionInfoHref: "/nutrition/marigold-petals",
      arrowHref: "/produce/marigold-petals",
    },
  ];

  // Calculate scroll position and update active dot
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      // Calculate which dot should be active based on scroll position
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const newActiveDot = Math.min(
        Math.floor(scrollPercentage * (totalDots - 1)),
        totalDots - 1
      );
      
      setActiveDot(newActiveDot);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalDots]);

  // Handle dot click to scroll
  const handleDotClick = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    const scrollPosition = (index / (totalDots - 1)) * maxScroll;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-12 md:py-12 lg:py-12">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center">
          Edible Flowers
        </h2>
        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan">
          Grown with precision for unmatched flavor and quality.
        </p>
        {/* Cards Container - Horizontal Scroll (scrollbar hidden) */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-visible pb-8 scrollbar-hide lg:max-w-[1286px] lg:mx-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex gap-6 md:gap-8 min-w-max px-4 items-start">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[396.66px]">
                <Card
                  image={product.image}
                  alt={product.alt}
                  category={product.category}
                  productName={product.productName}
                  description={product.description}
                  nutritionInfoHref={product.nutritionInfoHref}
                  arrowHref={product.arrowHref}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeDot === index ? "bg-[#3D550C]" : "bg-gray-300"
              }`}
              aria-label={`Navigate to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
