import Image from "next/image";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image - Blurred Card */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Contact/banner.jpg"
          alt="Contact-img"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        {/* Main Title Container */}
        <div className="relative w-[85%] rounded-[30px] px-8 md:px-12 lg:px-16 pt-4 md:pt-6 lg:pt-8 pb-6 md:pb-12 lg:pb-16 mb-8 overflow-hidden flex flex-col items-center justify-start">
          <div className="absolute inset-0 bg-[#3D550C]/20 backdrop-blur-md rounded-[30px]"></div>
          <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white font-spartan text-center mb-2">
            Contact Us
          </h1>
          <h1 className="relative z-10 text-2xl lg:text-3xl font-normal text-[#DCBC88] font-spartan text-center">Have questions or orders? Get in touch with us today.</h1>
        </div>

        {/* Contact Us Button */}
        <Link
          href="#contact-form"
          className="bg-white text-[#3D550C] px-5 md:px-6 lg:px-10 py-2 md:py-2 rounded-full border border-[#404A3D]/30 hover:bg-[#F9F9F9] transition-colors duration-300 font-[600] text-base md:text-lg font-outfit"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
