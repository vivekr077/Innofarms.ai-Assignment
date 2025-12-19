import Image from "next/image";

export default function FeedbackFromChefs() {
  const feedbacks = [
    {
      image: "/Feedback/Brick And Beans.jpg",
      title: "Bricks and Beans",
    },
    {
      image: "/Feedback/The Big Tree.jpg",
      title: "The Big Tree",
    },
    {
      image: "/Feedback/Wine Company.jpg",
      title: "Wine Company",
    },
    {
      image: "/Feedback/Cafe Soul Garden.jpg",
      title: "Cafe Soul Garden",
    },
    {
      image: "/Feedback/Laidak Cafe.jpg",
      title: "Laidback Cafe",
    },
    {
      image: "/Feedback/LeMeridien.jpg",
      title: "Le Meridien",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Feedback from Visionary Chefs
        </h2>
        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan">
          Hear how chefs praise our innovative flavors and inspiring service.
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mx-auto max-w-full">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="group rounded-[10px] overflow-hidden transition-all duration-300 flex flex-col w-full hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="relative w-full h-[208px] md:h-[208px] overflow-hidden rounded-[10px]">
                <Image
                  src={feedback.image}
                  alt={feedback.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3D550C] mt-4 text-center font-spartan group-hover:text-[#2d3f0a] transition-colors duration-300">
                {feedback.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
