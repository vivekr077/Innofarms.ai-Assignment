"use client";

import Image from "next/image";

export default function ContactForm() {
  return (
    <section id="contact-form" className="w-full py-8 md:py-10 lg:py-20 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Get in Touch
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base lg:text-xl font-normal text-[#1E1E1E]/80 text-center mb-8 md:mb-10 font-spartan">
          We&apos;re just a message away — reach out anytime.
        </p>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto rounded-lg overflow-visible items-stretch">
          {/* Left Column - Image */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
            <Image
              src="/Contact/GetInTouchImg.svg"
              alt="Get in touch"
              fill
              className="object-cover object-right"
              priority
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#3D550C] px-5 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 flex flex-col justify-center lg:-ml-px">
            {/* Introductory Text */}
            <div className="mb-6">
              <p className="text-lg md:text-2xl font-normal text-white uppercase font-montserrat tracking-wide mb-1">
                WE&apos;RE HERE FOR YOU
              </p>
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white uppercase font-montserrat mb-3">
                CONTACT US AND TELL US HOW WE CAN ASSIST!
              </h3>
              <div className="w-5 h-1.5 ml-1 bg-white mb-4"></div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors duration-300 pb-2 font-spartan text-sm md:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors duration-300 pb-2 font-spartan text-sm md:text-base"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors duration-300 pb-2 font-spartan text-sm md:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Tell us your message"
                  className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors duration-300 pb-2 resize-none font-spartan text-sm md:text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#DCBC88] text-[#3D550C] px-6 py-2 rounded-lg hover:bg-[#C9A96F] transition-colors duration-300 font-bold font-spartan text-sm md:text-base"
                >
                  Let&apos;s get started!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
