import Image from "next/image";
import Link from "next/link";

export default function BlogCards() {
  const blogPosts = [
    {
      image: "/Blogs/img1.jpg",
      date: "15TH SEPTEMBER 2025",
      title: "INNOFarms.AI Launches GrowSmartRobotics at GVF 2025 Dubai",
    },
    {
      image: "/Blogs/img2.jpg",
      date: "18TH DECEMBER 2025",
      title: "INNOFarms.AI's integrated agri-tech ecosystem aims to revolutionise sustainable food production",
    },
    {
      image: "/Blogs/img3.jpg",
      date: "18TH AUGUST 2025",
      title: "From Crop Planning to Retail Shelf: Closing the Loop in Indoor Vertical Farming & Controlled Environment Agriculture Food Systems.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex-1 flex flex-col max-w-md mx-auto md:max-w-none">
              {/* Image Block - Separate from content, no border */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>

              {/* Content Block - Separate from image, no border */}
              <div className="flex flex-col">
                {/* Date with Calendar Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src="/Blogs/calender.svg"
                    alt="Calendar icon"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-xs font-normal text-[#666666] font-roboto">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#404A3D] font-signika leading-9">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
