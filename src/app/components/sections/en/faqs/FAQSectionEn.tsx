// app/components/sections/en/faqs/FAQSection.tsx

import React from "react";
import LineSeparator from "../../../common/LineSeparator";

type FAQItemType = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItemType[] = [
  {
    question: "Is coverage available for all ages?",
    answer: (
      <>
        <div>
          Yes, our healthcare plans are designed to accommodate all ages
          without exception.
        </div>
      </>
    ),
  },
  {
    question: "What sets Medyour apart from traditional healthcare providers?",
    answer: (
      <>
        <div>
          Medyour is a leading digital healthcare platform that
          leverages
        </div>
        <div>
          advanced technology to provide instant access to a wide
          network
        </div>
        <div>
          of top healthcare providers, without complexity or
          restrictions,
        </div>
        <div>
          through innovative and advanced platforms, backed by
          continuous
        </div>
        <div>support that redefines healthcare.</div>
      </>
    ),
  },
  {
    question: "How can I access my medical records?",
    answer: (
      <>
        <div>
          You can easily and securely access your medical records
          through our
        </div>
        <div>
          cloud-based platform or via the Medyour app on your phone.
        </div>
      </>
    ),
  },
];

const FAQItem: React.FC<FAQItemType & { showSeparator?: boolean }> = ({
  question,
  answer,
  showSeparator = false,
}) => (
  <section className="faq-item">
    <div className="pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] ">
      <h3 className="text-[#003439] text-base sm:text-lg lg:text-xl font-medium mb-[0.5rem] sm:mb-[0.75rem] lg:mb-[1rem] text-center">
        {question}
      </h3>
      <div className="text-[#003439] text-sm sm:text-base lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-7 text-center mx-auto">
        {answer}
      </div>
    </div>
    {showSeparator && <LineSeparator />}
  </section>
);

const FAQSectionEn: React.FC = () => {
  return (
    <main className="text-[#003439]" dir="ltr">
      <div className="mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[2rem] py-[2rem] sm:py-[3rem] lg:py-[4rem]">
        <div className="space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2.5rem]">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              showSeparator={idx < faqItems.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQSectionEn;