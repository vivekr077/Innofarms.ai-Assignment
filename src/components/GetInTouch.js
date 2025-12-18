export default function GetInTouch() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center">
          Get in Touch
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-xl lg:text-2xl font-normal text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan">
          We&apos;d love to hear from you—whether it&apos;s a question, feedback, or collaboration.
        </p>

        {/* Form Container */}
        <div className="max-w-6xl mx-auto">
          {/* Form Section Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#404A3D] mb-6 font-signika">
            Send a message
          </h3>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-[#3D550C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D550C] font-spartan placeholder:text-[#6C757D]"
              />
            </div>

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-[#3D550C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D550C] font-spartan placeholder:text-[#6C757D]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 border border-[#3D550C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D550C] font-spartan placeholder:text-[#6C757D]"
                />
              </div>
            </div>

            {/* Subject and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-[#3D550C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D550C] font-spartan placeholder:text-[#6C757D]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-[#3D550C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D550C] font-spartan placeholder:text-[#6C757D]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#3D550C] text-white px-8 py-3 rounded-full hover:bg-[#2d3f0a] transition-colors duration-300 font-bold font-playfair flex items-center gap-2"
            >
              Submit Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M12 4L4 12M12 4H8M12 4V8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
