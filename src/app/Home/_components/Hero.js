import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home/homebanner.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full pl-4 md:pl-6 lg:pl-10 xl:pl-16 pr-4 md:pr-6 lg:pr-4 xl:pr-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:space-y-8 col-span-2 justify-self-start">

            <h1 className=" text-2xl text-[#DCBC88] font-bold font-spartan">BEYOND ORGANIC • TRACEABLE • HYPER-LOCAL </h1>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan  text-white leading-none">
              India&apos;s First Premium Culinary Innovation Brand.
            </h1>

            {/* Descriptive Paragraph */}
            <p className="text-base md:text-lg lg:text-xl font-spartan text-[#FFFFFF] leading-relaxed tracking-normal opacity-90 max-w-[80%]">
              Ultra-premium, chef-focused, AI-powered & traceable fresh produce — grown under UAE/Singapore-grade precision farming technology by{" "}
              <span className="font-bold text-white">INNOFarms.AI</span>. Perfect for chefs, hoteliers, restaurateurs, and premium buyers who demand uncompromising quality and refined culinary excellence.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/book-tasting"
                className="px-6 py-3 border-2 border-[#DCBC88] text-[#DCBC88] bg-transparent rounded-full hover:bg-[#DCBC88] hover:text-white transition-colors text-center font-medium font-outfit whitespace-nowrap"
              >
                Book A Chef Tasting
              </Link>
              <Link
                href="/produce"
                className="px-6 py-3 border-2 border-[#DCBC88] text-[#DCBC88] bg-transparent rounded-full hover:bg-[#DCBC88] hover:text-white transition-colors text-center font-medium font-outfit whitespace-nowrap"
              >
                Explore Our Produce
              </Link>
            </div>

            {/* Sub-heading */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold font-spartan text-[#FFFFFF] pt-6">
              Ready to Elevate Your Ingredients?
            </h2>
          </div>

          {/* Right Side - Image Content */}
          <div className="relative flex justify-center lg:justify-end col-span-1 justify-self-end w-full">
            <div className="relative w-full">
              <div className="relative rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src="/Home/homebannerimg.png"
                  alt="Chef preparing fresh produce"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
