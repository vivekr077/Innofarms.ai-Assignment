"use client";

import { useRef, useState, useEffect } from "react";
import Card from "../Card";

export default function LeafyGreens() {
  const scrollContainerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const cardWidth = 396.66;
  const gap = 24; // gap-6 = 24px
  const totalDots = 3; // Number of navigation dots

  const products = [
    {
      image: "/OurProduce/LeafyGreens/speciality Chef's Mix.jpg",
      alt: "Specialty Chef's Mix",
      category: "LEAFY GREENS",
      productName: "Specialty Chef's Mix (Custom)",
      description: "A wholesome mix of leafy greens combining crunch, color, and refreshing aroma.",
      nutritionInfoHref: "/nutrition/specialty-chefs-mix",
      arrowHref: "/produce/specialty-chefs-mix",
    },
    {
      image: "/OurProduce/LeafyGreens/Romaine.jpg",
      alt: "Romaine Lettuce",
      category: "LEAFY GREENS",
      productName: "Romaine Lettuce",
      description: "Crisp, sturdy leaves with a mild, refreshing flavor.",
      nutritionInfoHref: "/nutrition/romaine-lettuce",
      arrowHref: "/produce/romaine-lettuce",
    },
    {
      image: "/OurProduce/LeafyGreens/Kale.jpg",
      alt: "Kale",
      category: "LEAFY GREENS",
      productName: "Kale",
      description: "Nutrient-dense leafy green with a hearty, earthy taste.",
      nutritionInfoHref: "/nutrition/kale",
      arrowHref: "/produce/kale",
    },
    {
      image: "/OurProduce/LeafyGreens/Red Leaf Lettuce.jpg",
      alt: "Red Leaf Lettuce",
      category: "LEAFY GREENS",
      productName: "Red Leaf Lettuce",
      description: "Tender leaves with a slightly sweet, delicate flavor.",
      nutritionInfoHref: "/nutrition/red-leaf-lettuce",
      arrowHref: "/produce/red-leaf-lettuce",
    },
    {
      image: "/OurProduce/LeafyGreens/Green Leaf Lettuce.jpg",
      alt: "Green Leaf Lettuce",
      category: "LEAFY GREENS",
      productName: "Green Leaf Lettuce",
      description: "Soft, leafy texture with a mild and fresh taste.",
      nutritionInfoHref: "/nutrition/green-leaf-lettuce",
      arrowHref: "/produce/green-leaf-lettuce",
    },
    {
      image: "/OurProduce/LeafyGreens/Basil.jpg",
      alt: "Basil",
      category: "LEAFY GREENS",
      productName: "Basil",
      description: "Aromatic herb with a sweet, peppery fragrance and vibrant flavor.",
      nutritionInfoHref: "/nutrition/basil",
      arrowHref: "/produce/basil",
    },
    {
      image: "/OurProduce/LeafyGreens/Butter Head Lettuce.jpg",
      alt: "Butter Head Lettuce",
      category: "LEAFY GREENS",
      productName: "Butter Head Lettuce",
      description: "A soft, tender leafy green with a mild, buttery flavor perfect for fresh salads and wraps.",
      nutritionInfoHref: "/nutrition/butter-head-lettuce",
      arrowHref: "/produce/butter-head-lettuce",
    },
    {
      image: "/OurProduce/LeafyGreens/Bok.jpg",
      alt: "Bok Choy",
      category: "LEAFY GREENS",
      productName: "Bok Choy",
      description: "A crisp, nutritious leafy green with juicy stalks and tender leaves, commonly used in stir-fries and soups.",
      nutritionInfoHref: "/nutrition/bok-choy",
      arrowHref: "/produce/bok-choy",
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
          Leafy Greens
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
