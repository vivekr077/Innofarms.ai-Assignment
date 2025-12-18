"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "1. How is the produce grown in your lab?",
      answer:
        "We use hydroponic and advanced precision farming techniques, powered by INNOFarms.AI. Every plant is nurtured under exact nutrient, light, and temperature conditions, ensuring the highest quality and freshness year-round.",
    },
    {
      question: "2. Are your products safe and pesticide-free?",
      answer:
        "Yes, absolutely. All our produce is grown in a completely controlled environment without any pesticides, herbicides, or harmful chemicals. We use only natural nutrients and advanced hydroponic systems to ensure the highest safety standards.",
    },
    {
      question: "3. Do you supply only to restaurants and hotels, or can individuals order as well?",
      answer:
        "While we primarily serve the HoReCa (Hotels, Restaurants, and Cafes) sector, we also offer our premium produce to individuals who value quality and freshness. You can place orders through our website or contact us directly.",
    },
    {
      question: "4. How do you ensure the produce stays fresh after harvest?",
      answer:
        "Our produce is harvested fresh daily and immediately packaged in temperature-controlled containers. We use advanced packaging techniques and maintain a cold chain from farm to delivery, ensuring maximum freshness and extended shelf life.",
    },
    {
      question: "5. What makes Fresh From The Future's produce different from regular?",
      answer:
        "Our produce is grown using AI-powered precision farming, ensuring consistent quality, flavor, and nutrition. Every crop is traceable from seed to plate, grown hyper-locally in controlled environments, and completely pesticide-free. We combine Singapore and UAE precision farming models with advanced technology to deliver unmatched freshness and quality.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-spartan text-[#3D550C] text-center mb-2">
          Frequently Asked Questions
        </h2>
        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-[#1E1E1E]/80 text-center mb-12 md:mb-16 font-spartan">
          Quick insights into how our AI-driven, pesticide-free farming works.
        </p>
        {/* FAQ Accordion */}
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-[#DCBC88] rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#1E1E1E] hover:no-underline font-outfit text-xl md:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 bg-white rounded-b-lg">
                  <p className="text-lg md:text-xl text-[#313638] font-outfit leading-relaxed tracking-normal py-6">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
