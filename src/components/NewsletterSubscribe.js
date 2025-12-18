"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email);
    // You can add your newsletter subscription logic here
    setEmail("");
  };

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
          <div className="absolute inset-0 bg-[#404A3D]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-12 lg:p-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-spartan text-center drop-shadow-lg">
            Subscribe to our newsletter
          </h2>

          {/* Sub-headline */}
          <p className="text-base md:text-lg lg:text-xl font-normal text-white/90 font-spartan text-center max-w-2xl mb-6">
            Stay in the loop — fresh updates delivered to your inbox.
          </p>

          {/* Email Input and Subscribe Button */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-2">
            {/* Container with white background - forms the pill shape */}
            <div className="relative w-full bg-white rounded-full overflow-hidden flex items-center">
              {/* Email Input - takes more space but balanced */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="flex-[2] px-4 md:px-6 py-3 md:py-4 bg-transparent text-[#1E1E1E] placeholder:text-gray-400 border-0 focus:outline-none font-spartan text-base md:text-lg"
              />
              {/* Subscribe Button - positioned inside with balanced proportions */}
              <button
                type="submit"
                className="flex-1 px-2 md:px-2 lg:px-2 py-2 md:py-2.5 my-1 mr-1 bg-[#3D550C] text-white font-semibold rounded-full hover:bg-[#2d3f0a] transition-colors duration-300 font-spartan text-base md:text-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
