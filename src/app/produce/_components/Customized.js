export default function Customized() {
  return (
    <section className="w-full bg-white py-12 md:py-12 lg:py-12">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold font-spartan text-[#3D550C] text-center mb-4 transition-transform duration-300 hover:scale-105 cursor-default">
          Customized – on special order
        </h2>
        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan transition-colors duration-300 hover:text-[#1E1E1E] cursor-default">
          Grown with precision for unmatched flavor and quality.
        </p>
        {/* Descriptive Paragraph */}
        <div className="max-w-4xl mx-auto group">
          <p className="text-base md:text-lg font-normal text-[#666666] text-center font-roboto leading-relaxed transition-colors duration-300 group-hover:text-[#404A3D]">
            From cultivation to harvest and delivery, we meticulously grow, hand-pick, and package each order to cater to your unique crop requirements. To facilitate the timely customized production and delivery of your desired varieties of specialty herbs, rare crops, and edible flowers, please provide 15 to 30 days' advance notice of your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
