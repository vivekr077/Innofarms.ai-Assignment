import Image from "next/image";
import Link from "next/link";

export default function SubscriptionForm() {
  return (
    <section
      id="subscription-form"
      className="w-full py-12 md:py-12 lg:py-12 bg-white"
    >
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-spartan text-[#3D550C] text-center mb-4">
          Subscription Form
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl font-normal text-[#1E1E1E]/80 text-center mb-4 md:mb-4 font-spartan">
          Complete the form and get access to your chosen plan instantly.
        </p>

        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            
            {/* Laptop Image */}
            <div className="flex-shrink-0 lg:-mr-32">
              <Image
                src="/Subscription/subscriptiondesktopimg.svg"
                alt="Subscription form on laptop"
                width={1000}
                height={750}
                priority
                className="block w-auto h-auto max-w-[700px]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-start">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1E1E] font-spartan mb-4 md:mb-4">
                Subscribe to the Future of Possibilities
              </h3>

              <div className="space-y-1 mb-4 md:mb-4">
                <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed">
                  Click the link below to open the subscription form.
                </p>
                <p className="text-base md:text-lg font-normal text-[#666666] font-roboto leading-relaxed">
                  Fill in your details, submit, and your journey with us begins.
                </p>
              </div>

              <Link
                href="https://forms.gle/m85z2D9wJxeB7b9N6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-lg font-normal text-[#1E1E1E] font-roboto underline hover:text-[#3D550C] transition-colors duration-300 break-all"
              >
                https://forms.gle/m85z2D9wJxeB7b9N6
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
