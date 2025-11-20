import React from "react";
import LineSeparator from "../../../common/LineSeparator";

type SectionType = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

const sections: SectionType[] = [
  {
    heading: "Services Provided",
    paragraphs: [
      "Medyour offers a unified, intelligent healthcare platform that enables individuals and corporate to access affordable, instant healthcare services through a wide medical network across Egypt. Our services include:",
    ],
    listItems: [
      "Nationwide network of clinics, hospitals & specialized centers, Laboratories & Radiology, pharmacies, Dental & therapy Services, Vision, Assistive & Prosthetic Devices, and Emergency Services.",
      "Real-time booking, digital medical records, and smart service recommendations.",
      "Corporate tools for managing employee healthcare coverage.",
      "Inclusive plans covering all ages and chronic/pre-existing conditions.",
    ],
  },
  {
    heading: "User Eligibility",
    paragraphs: [
      "You must be at least 16 years old to use our services. If you are under 16, you may use our platform only with the involvement of a parent or guardian.",
    ],
  },
  {
    heading: "User Responsibilities",
    paragraphs: [
      "By using our platform, you agree to:"
    ],
    listItems: [
      "Provide accurate and complete information during registration.",
      "Maintain the confidentiality of your account credentials.",
      "Use our services only for lawful purposes.",
      "Not interfere with or disrupt the operation of our platform."
    ]
  },
  {
    heading: "Payment Terms",
    paragraphs: [
      "Access to Medyour services may require a subscription fee. Payments are processed securely through our payment gateway providers. All fees are non-refundable unless otherwise stated."
    ]
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "Medyour is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service that caused the issue."
    ]
  },
  {
    heading: "Termination",
    paragraphs: [
      "We reserve the right to suspend or terminate your access to our services at our discretion, especially in cases of violation of these terms."
    ]
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of Egypt. Any disputes will be resolved in the competent courts of Cairo."
    ]
  },
];

const Heading: React.FC<{ children: React.ReactNode; mt?: boolean }> = ({ children, mt = false }) => (
  <h2 className={`text-[33px] font-semibold leading-[43px]${mt ? " mt-8" : ""}`}>{children}</h2>
);

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[29px] font-normal leading-[43px]">{children}</p>
);

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="text-[29px] font-normal leading-[43px] list-disc pl-8">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const TermsContentSectionEn: React.FC = () => {
  return (
    <section
      className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg text-[#00313B] font-roboto"
      dir="ltr"
      lang="en"
    >
      {/* Green square between header and section */}
      <div className="mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute -top-[5rem] left-1/2 transform -translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80"
          ></div>
          <div className="space-y-6 relative">
            {sections.map((sec, i) => (
              <React.Fragment key={sec.heading}>
                <Heading mt={i !== 0}>{sec.heading}</Heading>
                {sec.paragraphs.map((par, j) => (
                  <Text key={j}>{par}</Text>
                ))}
                {sec.listItems && <List items={sec.listItems} />}
                {i < sections.length - 1 && <LineSeparator />}
              </React.Fragment>
            ))}
            <div
              className="hidden md:block absolute top-[2rem] -right-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"
            ></div>
            <div
              className="hidden md:block absolute top-1/2 -left-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContentSectionEn;