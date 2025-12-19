import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10">
      {/* Top Bar Section */}
      <div className="w-full bg-[#3D550C] py-6 md:py-12">
        <div className="w-full px-4 md:px-6 lg:px-6 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Left Content */}
            <div className="text-[#DCBC88] font-bold font-spartan text-base sm:text-lg md:text-xl lg:text-3xl uppercase text-center md:text-left">
              BEYOND ORGANIC • TRACEABLE • HYPER-LOCAL
            </div>

            {/* Right Content - Contact Info */}
            <div className="flex flex-col sm:flex-row md:items-center gap-2 sm:gap-4 md:gap-6">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Home/Footer/callIcon.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <span className="text-[#FFFFFF] font-signika text-xs sm:text-sm md:text-base font-normal whitespace-nowrap">
                  +91 92203 09252
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/Home/Footer/messageIcon.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </div>
                <span className="text-[#FFFFFF] font-signika text-xs sm:text-sm md:text-base font-normal break-all sm:break-normal">
                  Hello@FreshfromtheFuture.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full py-12 md:py-16 bg-white">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20">
          <div className=" mx-auto">
            {/* Outer Container - Left and Right Sections */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center lg:items-start">
              {/* Left Section - Smaller */}
              <div className="lg:w-1/3 flex flex-col -mt-4 lg:-mt-8 items-center lg:items-start">
                {/* Row 1: Logo */}
                <div className="mb-6 -ml-4 md:-ml-0 lg:-ml-7">
                  <Image
                    src="/Home/Footer/Logo.svg"
                    alt="Fresh From The Future Logo"
                    width={200}
                    height={100}
                    className="w-auto h-auto"
                  />
                </div>

                {/* Row 2: Description */}
                <p className="text-sm md:text-base max-w-[80%] font-normal text-[#404A3D] mb-6 font-roboto leading-relaxed text-center lg:text-left">
                  Fresh From The Future is a premium HoReCa beyond organic Hydroponic Leafy, Micro Greens and edible flower produce brand powered by INNOFarms.AI
                </p>

                {/* Row 3: Social Media Icons */}
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-[#DCBC88]/44 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/Home/Footer/fbIcon.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-[#DCBC88]/44 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/Home/Footer/XIcon.svg"
                      alt="Twitter/X"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-[#DCBC88]/44 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/Home/Footer/linkedInIcon.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-[#DCBC88]/44 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/Home/Footer/InstaIcon.svg"
                      alt="Instagram"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Section - Larger */}
              <div className="lg:w-2/3 flex flex-col items-center lg:items-start">
                {/* Row 1: Tagline */}
                <h1 className="text-2xl md:text-3xl lg:text-[40px] max-w-[80%] font-bold text-[#1E1E1E] mb-8 md:mb-8 font-spartan text-center lg:text-left">
                  India&apos;s First Premium Culinary Innovation Brand.
                </h1>

                {/* Row 2: Three Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 max-w-[90%] w-full">
                  {/* Useful Link Column */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-medium text-[#404A3D] mb-4 font-signika">
                      Useful Link
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/produce" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          Our Produce
                        </Link>
                      </li>
                      <li>
                        <Link href="/chef-mixes" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          Chef Mixes
                        </Link>
                      </li>
                      <li>
                        <Link href="/traceability" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          Traceability
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Home Column */}
                  <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-medium text-[#404A3D] mb-4 font-signika">
                  Home
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/about" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/chef-advisory" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          Chef Advisory Council
                        </Link>
                      </li>
                      <li>
                        <Link href="/events-blogs" className="text-[#1E1E1E] hover:text-[#3D550C] transition-colors font-outfit text-lg font-normal">
                          Events & Blogs
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Our Address Column */}
                  <div className="text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-medium text-[#404A3D] font-signika">
                  Our Address
                    </h3>
                    <div className="space-y-3">
                      <p className="font-roboto text-[15px] font-bold leading-[28px] text-[#404A3D]/80">
                        Registered office:-DLF Forum, Cybercity, Phase III, GURUGRAM, HARYANA, 122002
                      </p>
                      <p className="font-roboto text-[15px] font-bold leading-[28px] text-[#404A3D]/80">
                        Farm:-Sector -23 Gurugram, Haryana 122001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3: Terms & Conditions, Privacy Policy, Copyright */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-[#6C757D] text-sm font-spartan">
                    <Link href="/terms" className="hover:text-[#3D550C] transition-colors">
                      Terms & Conditions
                    </Link>
                    <span className="hidden md:inline">|</span>
                    <Link href="/privacy" className="hover:text-[#3D550C] transition-colors">
                      Privacy Policy
                    </Link>
                    <span className="hidden md:inline">|</span>
                    <span>Copyright © 2026, All Rights Reserved.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
