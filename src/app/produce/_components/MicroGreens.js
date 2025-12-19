"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../Card";

export default function MicroGreens() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 3; // Number of navigation dots

  const products = [
    {
      image: "/OurProduce/MicroGreens/Speciality Chef's Mix.jpg",
      alt: "Specialty Chef's Mix",
      category: "MICROGREENS",
      productName: "Specialty Chef's Mix",
      description: "A fresh, colorful mix of nutrient-packed microgreens with mild to zesty flavors.",
      nutritionInfoHref: "/nutrition/microgreens-specialty-chefs-mix",
      arrowHref: "/produce/microgreens-specialty-chefs-mix",
    },
    {
      image: "/OurProduce/MicroGreens/Red Amaranthus.jpg",
      alt: "Red Amaranthus",
      category: "MICROGREENS",
      productName: "Red Amaranthus",
      description: "Tender, vibrant red leaves with a mild, earthy flavor.",
      nutritionInfoHref: "/nutrition/microgreens-red-amaranthus",
      arrowHref: "/produce/microgreens-red-amaranthus",
    },
    {
      image: "/OurProduce/MicroGreens/Mizuna.jpg",
      alt: "Mizuna",
      category: "MICROGREENS",
      productName: "Mizuna",
      description: "Delicate, feathery greens with a light peppery taste.",
      nutritionInfoHref: "/nutrition/microgreens-mizuna",
      arrowHref: "/produce/microgreens-mizuna",
    },
    {
      image: "/OurProduce/MicroGreens/Basil.jpg",
      alt: "Basil",
      category: "MICROGREENS",
      productName: "Basil",
      description: "Aromatic leaves with a sweet, peppery fragrance and bold flavor.",
      nutritionInfoHref: "/nutrition/microgreens-basil",
      arrowHref: "/produce/microgreens-basil",
    },
    {
      image: "/OurProduce/MicroGreens/Kale.jpg",
      alt: "Kale",
      category: "MICROGREENS",
      productName: "Kale",
      description: "Hearty, nutrient-dense leaves with a rich, earthy taste.",
      nutritionInfoHref: "/nutrition/microgreens-kale",
      arrowHref: "/produce/microgreens-kale",
    },
    {
      image: "/OurProduce/MicroGreens/Arugula.jpg",
      alt: "Arugula",
      category: "MICROGREENS",
      productName: "Arugula",
      description: "Peppery, zesty greens with a sharp, fresh bite.",
      nutritionInfoHref: "/nutrition/microgreens-arugula",
      arrowHref: "/produce/microgreens-arugula",
    },
    {
      image: "/OurProduce/MicroGreens/Red Cabbage.jpg",
      alt: "Red Cabbage",
      category: "MICROGREENS",
      productName: "Red Cabbage",
      description: "Crisp purple leaves with a slightly sweet, crunchy flavor.",
      nutritionInfoHref: "/nutrition/microgreens-red-cabbage",
      arrowHref: "/produce/microgreens-red-cabbage",
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
    <section className="w-full bg-white py-12 md:py-12 lg:py-8">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center">
          Microgreens (cut mix or punnet options)
        </h2>
        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-12 font-spartan">
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
