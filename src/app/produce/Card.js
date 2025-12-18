import Image from "next/image";
import Link from "next/link";

export default function Card({ image, alt, category, productName, description, nutritionInfoHref, arrowHref }) {
  return (
    <div className="rounded-[30px] overflow-visible flex flex-col relative">
      {/* Card Background Image with Color Overlay */}
      <div 
        className="absolute inset-0 rounded-[30px] overflow-hidden"
        style={{
          maskImage: 'url(/OurProduce/cardbackground.png)',
          WebkitMaskImage: 'url(/OurProduce/cardbackground.png)',
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center'
        }}
      >
        {/* Background.png as base */}
        <Image
          src="/OurProduce/Background.png"
          alt="Card background"
          fill
          className="object-cover rounded-[30px]"
        />
        <div className="absolute inset-0 bg-[#DCBC8870]/44 rounded-[30px]"></div>
      </div>

      {/* Product Image Area */}
      <div className="relative z-10 w-full overflow-hidden rounded-t-[30px] p-4 flex justify-center">
        <div className="w-[396.66px] h-[293.63px] rounded-[20px] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            width={396.66}
            height={293.63}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Product Details Area */}
      <div className="relative z-10 px-6 pb-8 flex flex-col">
        {/* Category Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-[#3D550C] rounded-full"></span>
          <span className="text-sm font-normal text-[#3D550C] font-signika uppercase tracking-wide">
            {category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xl md:text-[26px] font-medium text-[#E3572B] font-signika">
          {productName}
        </h3>
        <hr className=" my-2 border-t-2 border-[#404A3D1A]"/>
        {/* Description */}
        <p className="text-sm md:text-base font-normal max-w-[90%] line-clamp-2 text-[#666666] mb-1 mt-1 font-roboto leading-relaxed">
          {description}
        </p>

        {/* Nutrition Info Button - Half inside, half outside */}
        <Link
          href={nutritionInfoHref || "#"}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#E3572B] border border-[#A5E32B] text-white px-6 py-3 rounded-full hover:bg-[#D2691E] transition-colors duration-300 font-medium text-base md:text-lg text-center font-outfit z-10"
        >
          Nutrition Info
        </Link>
      </div>

      {/* Arrow Icon - Bottom Right in the space of the shape */}
      <Link
        href={arrowHref || "#"}
        className="absolute bottom-0 right-0 w-12 h-12 bg-[#3D550C] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm z-20"
      >
        <Image
          src="/OurProduce/arrowicon.svg"
          alt="Arrow icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </Link>
    </div>
  );
}
