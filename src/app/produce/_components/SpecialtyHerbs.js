"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../Card";

export default function SpecialtyHerbs() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 3; // Number of navigation dots

  const products = [
    {
      image: "/OurProduce/SpecialityHerbs/Chef'sMix.jpg",
      alt: "Specialty Chef's Mix",
      category: "SPECIALTY HERBS",
      productName: "Specialty Chef's Mix (Custom)",
      description: "Aromatic leafy and specialty herbs with fresh, tangy, and fragrant flavors.",
      nutritionInfoHref: "/nutrition/specialty-chefs-mix",
      arrowHref: "/produce/specialty-chefs-mix",
    },
    {
      image: "/OurProduce/SpecialityHerbs/The Basil.jpg",
      alt: "Thai Basil",
      category: "SPECIALTY HERBS",
      productName: "Thai Basil",
      description: "A fragrant specialty herb with a spicy, anise-like flavor, widely used in Southeast Asian cuisine.",
      nutritionInfoHref: "/nutrition/thai-basil",
      arrowHref: "/produce/thai-basil",
    },
    {
      image: "/OurProduce/SpecialityHerbs/Dill.jpg",
      alt: "Dill",
      category: "SPECIALTY HERBS",
      productName: "Dill",
      description: "A delicate specialty herb with feathery leaves and a fresh, slightly tangy flavor, ideal for seafood and dressings.",
      nutritionInfoHref: "/nutrition/dill",
      arrowHref: "/produce/dill",
    },
    {
      image: "/OurProduce/SpecialityHerbs/Lemon Balm.jpg",
      alt: "Lemon Balm",
      category: "SPECIALTY HERBS",
      productName: "Lemon Balm",
      description: "A refreshing specialty herb with a gentle lemon aroma, commonly used in teas and wellness blends.",
      nutritionInfoHref: "/nutrition/lemon-balm",
      arrowHref: "/produce/lemon-balm",
    },
    {
      image: "/OurProduce/SpecialityHerbs/Sorrel.jpg",
      alt: "Sorrel",
      category: "SPECIALTY HERBS",
      productName: "Sorrel",
      description: "A vibrant specialty herb with tender leaves and a sharp, lemony taste, perfect for soups and sauces.",
      nutritionInfoHref: "/nutrition/sorrel",
      arrowHref: "/produce/sorrel",
    },
    {
      image: "/OurProduce/SpecialityHerbs/itialian Basil.jpg",
      alt: "Italian Basil",
      category: "SPECIALTY HERBS",
      productName: "Italian Basil",
      description: "A classic specialty herb with sweet, aromatic leaves, essential in Italian and Mediterranean dishes.",
      nutritionInfoHref: "/nutrition/italian-basil",
      arrowHref: "/produce/italian-basil",
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
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center">
          Specialty Herbs & Rare Crops
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
              <div key={index} className="flex-shrink-0 w-[396.66px]">
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
