import Image from "next/image";

export default function FeedbackFromChefs() {
  const feedbacks = [
    {
      image: "/Home/FeedbackImg/BreaksAndBeans.jpg",
      title: "Bricks and Beans",
    },
    {
      image: "/Home/FeedbackImg/TheBigTree.jpg",
      title: "The Big Tree",
    },
    {
      image: "/Home/FeedbackImg/WineCompany.jpg",
      title: "Wine Company",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-4">
          Feedback from Visionary Chefs
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-gray-600 text-center mb-12 md:mb-12 font-spartan">
          Hear how chefs praise our innovative flavors and inspiring service.
        </p>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="rounded-[30px] overflow-hidden transition-shadow duration-300 flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-[400px] flex flex-col"
            >
              {/* Image - Rounded on all corners */}
              <div className="w-full h-[250px] overflow-hidden rounded-[30px]">
                <Image
                  src={feedback.image}
                  alt={feedback.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full rounded-[30px]"
                  priority={index < 2}
                />
              </div>

              {/* Title Below Image */}
              <h3 className="text-xl md:text-2xl font-medium text-[#3D550C] mt-6 text-center font-signika">
                {feedback.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
