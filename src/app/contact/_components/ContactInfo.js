import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white mb-16">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Phone Number Card */}
          <div className="bg-white border-2 border-[#3D550C] rounded-lg p-3 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Contact/messagelogo.svg"
                alt="Phone icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1E1E1E] font-montserrat">
                Phone Number
              </h3>
            </div>
            <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
              +91 92203 09252
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white border-2 border-[#3D550C] rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Contact/messagelogo.svg"
                alt="Email icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1E1E1E] font-montserrat">
                Email
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
                Orders@FreshfromtheFuture.com <span className="text-[#666666]">(To Order)</span>
              </p>
              <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
                Chefs@FreshfromtheFuture.com <span className="text-[#666666]">(For Chefs Connect)</span>
              </p>
              <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
                Hello@FreshfromtheFuture.com <span className="text-[#666666]">(For Support)</span>
              </p>
            </div>
          </div>

          {/* Social Network Card */}
          <div className="bg-white border-2 border-[#3D550C] rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Contact/messagelogo.svg"
                alt="Social icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1E1E1E] font-montserrat">
                Social Network
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/Contact/instalogo.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-base md:text-lg text-[#1E1E1E] font-montserrat">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/Contact/LinkedIn.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-base md:text-lg text-[#1E1E1E] font-montserrat">linkedin</span>
              </div>
            </div>
          </div>

          {/* Offices Card */}
          <div className="bg-white border-2 border-[#3D550C] rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Contact/messagelogo.svg"
                alt="Office icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <h3 className="text-xl md:text-2xl font-bold text-[#1E1E1E] font-montserrat">
                Offices
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
                <span className="font-semibold">Registered office:</span> DLF Forum, Cybercity, Phase III, GURUGRAM, HARYANA, 122002
              </p>
              <p className="text-base md:text-lg text-[#1E1E1E] font-montserrat">
                <span className="font-semibold">Farm:</span> Sector -23 Gurugram, Haryana 122001
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
