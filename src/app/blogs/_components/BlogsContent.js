import Image from "next/image";
import Link from "next/link";

export default function BlogsContent() {
  return (
    <section id="blogs-content" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Top Section - Heading and Subheading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] mb-4">
            Explore Our Latest Blogs
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 font-roboto">
            Insights, tips, and stories to inspire every culinary journey
          </p>
        </div>

        {/* Main Content Block - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Blogs/blogimg.jpg"
                alt="Vertical farm with technician monitoring data"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-spartan text-[#3D550C] mb-4">
              Revolutionizing AgriTech: The Vision Behind the AWS for Agriculture
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-base md:text-base font-normal text-[#666666] font-roboto leading-relaxed">
                At InnoFarms.AI, we believe the future of agriculture lies at the intersection of intelligence, innovation, and integration. Farming has always been the backbone of human civilization — yet, in an era defined by data and digital transformation, it remains one of the least digitized sectors.
              </p>
              <p className="text-base md:text-base font-normal text-[#666666] font-roboto leading-relaxed">
                Our vision is to change that. Just as Amazon Web Services (AWS) transformed how businesses build and scale in the digital economy, InnoFarms.AI aims to become the &quot;AWS for Agriculture&quot; — the foundational digital infrastructure that empowers farmers, agribusinesses, and governments to build intelligent, scalable, and sustainable agricultural solutions.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#3D550C] text-white px-6 py-3 rounded-full hover:bg-[#2d3f0a] transition-colors duration-300 font-medium text-base md:text-lg font-outfit w-fit"
            >
              Learn More
              <Image
                src="/Blogs/arrowicon.svg"
                alt="Arrow icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
