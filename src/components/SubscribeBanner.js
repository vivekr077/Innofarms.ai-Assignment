"use client";

import Image from "next/image";
import Link from "next/link";

export default function SubscribeBanner() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/crop.png"
            alt="Green crops background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 blur-md bg-[#404A3D]/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 p-6 md:p-8 lg:p-20">
          {/* Left: Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#D2B284] rounded-full flex items-center justify-center">
              <Image
                src="/crophand.svg"
                alt="Hand with plant sprout icon"
                width={40}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </div>
          </div>

          {/* Center: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium text-white font-signika leading-tight">
              Begin your journey to consistently fresh, premium greens.
            </h2>
          </div>

          {/* Right: Subscribe Button */}
          <div className="flex-shrink-0">
            <Link
              href="/subscription"
              className="inline-block bg-white text-[#404A3D] px-6 md:px-8 lg:px-8 py-3 md:py-4 rounded-full hover:bg-[#F9F9F9] transition-colors duration-300 font-medium text-base font-signika whitespace-nowrap"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
