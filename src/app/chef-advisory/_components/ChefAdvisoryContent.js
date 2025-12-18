import Image from "next/image";
import Link from "next/link";

export default function ChefAdvisoryContent() {
  return (
    <section id="chef-advisory-content" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Top Section - Title and Subtitle */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center mb-1">
            Join Our Chef Advisory Council
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 text-center font-spartan">
            Collaborate, Innovate, and Elevate Culinary Excellence.
          </p>
        </div>

        {/* Mid-Section - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-[54px] font-bold font-spartan text-[#3D550C] leading-none">
              Community of culinary experts
            </h3>
            <div className="space-y-4">
              <p className="text-base md:text-xl font-normal text-[#666666] font-roboto leading-relaxed">
                Become a part of our Chef Advisory Council, a vibrant community of culinary experts dedicated to shaping the future of flavors. Share your unique insights, influence the creation of innovative products, and collaborate with fellow chefs to inspire kitchens everywhere.
              </p>
              <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed">
                Together, we drive culinary excellence, spark new ideas, and elevate the art of cooking for chefs and food lovers alike.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-auto max-w-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/ChefAdvisory/communityImg.jpg"
                alt="Chefs in professional kitchen"
                width={500}
                height={375}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] mb-4">
            Become a Council Member
          </h3>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 mb-6 font-spartan">
            Fill out the form below and share your culinary expertise with us.
          </p>
          <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed mb-6">
            Fill out the form below to apply and become a valued member of our Chef Advisory Council. Share your expertise and help us create extraordinary culinary experiences together.
          </p>
          <Link
            href="https://forms.gle/Mu3SSRhR8trpMGxQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg font-normal text-blue-600 underline hover:text-blue-800 transition-colors duration-300 break-all inline-block"
          >
            https://forms.gle/Mu3SSRhR8trpMGxQ6
          </Link>
        </div>
      </div>
    </section>
  );
}
