import Image from "next/image";
import Link from "next/link";

export default function OurProduceBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image - Blurred Card */}
      <div className="absolute inset-0 w-full h-full group">
        <Image
          src="/OurProduce/banner.jpg"
          alt="Fresh leafy vegetables background"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        {/* Main Title Container */}
        <div className="group relative w-[85%] rounded-[30px] px-8 md:px-12 lg:px-16 pt-4 md:pt-6 lg:pt-8 pb-6 md:pb-12 lg:pb-16 mb-8 overflow-hidden flex flex-col items-center justify-start hover:scale-105 transition-all duration-500">
          <div className="absolute inset-0 bg-[#3D550C]/20 backdrop-blur-md rounded-[30px] transition-all duration-500 group-hover:bg-[#3D550C]/30"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white font-spartan text-center mb-2 transition-transform duration-300 group-hover:scale-105">
            Our Produce
          </h1>
          <h1 className="relative z-10 max-md:text-xl max-md:mb-4 text-3xl md:text-4xl font-normal text-[#DCBC88] font-spartan text-center transition-transform duration-300 group-hover:scale-105">Every crop cultivated with care, freshness, and precision.</h1>
        </div>

        {/* Explore Our Produce Button */}
        <Link
          href="/produce"
          className="bg-white text-[#3D550C] px-5 md:px-6 lg:px-10 py-2 md:py-2 rounded-full border border-[#404A3D]/30 hover:bg-[#F9F9F9] hover:scale-110 hover:shadow-lg transition-all duration-300 font-[600] text-base md:text-lg font-outfit"
        >
          Our Produces
        </Link>
      </div>
    </section>
  );
}
