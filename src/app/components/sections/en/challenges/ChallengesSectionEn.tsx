import React from "react";

// To fix the issue of images not appearing, use the `next/image` component from Next.js for reliable image optimization and paths.
// Also, image paths should be absolute from the public directory (so: `/images/...` not `../images/...`).

import Image from "next/image";
import LineSeparator from "../../../common/LineSeparator";

type ChallengeSectionProps = {
  className: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  paragraph: string;
  titleClassName?: string;
  SquaresComponent?: React.FC;
};

const SquaresHealthcareCosts: React.FC = () => (
  <>
    {/* Left side squares */}
    <div className="hidden md:block absolute -top-[3.5rem] -left-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
    <div className="hidden md:block absolute top-1/3 -left-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-[2.5rem] -left-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
    {/* Right side squares */}
    <div className="hidden md:block absolute top-[2rem] -right-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-1/3 -right-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
  </>
);

const SquaresFinancial: React.FC = () => (
  <>
    {/* Left side square */}
    <div className="hidden md:block absolute -top-[0.5rem] -left-[0.625rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
    {/* Bottom square */}
    <div className="hidden md:block absolute -bottom-[0.75rem] left-[3rem] w-[1.5rem] h-[1.5rem] bg-[#00FBFF] animate-float blur-[2px] opacity-80"></div>
    {/* Right side square */}
    <div className="hidden md:block absolute top-1/3 -right-0 w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
  </>
);

const SquaresAdministrative: React.FC = () => (
  <>
    {/* Top squares */}
    <div className="hidden md:block absolute -top-[2.5rem] right-0 w-[1rem] h-[1rem] bg-[#00FBFF] animate-float opacity-80"></div>
    <div className="hidden md:block absolute top-[1rem] left-[40%] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay blur-[2px] opacity-80"></div>
    {/* Right squares */}
    <div className="hidden md:block absolute bottom-[2.5rem] right-1/3 w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
  </>
);

const SquaresInclusivity: React.FC = () => (
  <>
    {/* Left side squares */}
    <div className="hidden md:block absolute -top-[1.5rem] -left-[2rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"></div>
    <div className="hidden md:block absolute bottom-1/3 -left-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay blur-[0.09375rem] opacity-80"></div>
    {/* Right side square */}
    <div className="hidden md:block absolute bottom-[3rem] -right-[0.625rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
  </>
);

const SquaresAccessibility: React.FC = () => (
  <>
    {/* Left side squares */}
    <div className="hidden md:block absolute -top-[3.5rem] -left-[1rem] w-[2rem] h-[2rem] bg-yellow-300 animate-float opacity-80"></div>
    <div className="hidden md:block absolute bottom-[2.5rem] -left-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
    {/* Right side squares */}
    <div className="hidden md:block absolute -top-[2.5rem] -right-[1rem] w-[1.5rem] h-[1.5rem] bg-[#00FBFF] animate-float opacity-80"></div>
    <div className="hidden md:block absolute top-[2rem] -right-[0.375rem] w-[1rem] h-[1rem] bg-[#49B1F7] animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-1/3 -left-[0.25rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"></div>
  </>
);

const ChallengeSectionEn: React.FC<ChallengeSectionProps> = ({
  className,
  title,
  imgSrc,
  imgAlt,
  paragraph,
  titleClassName = "text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem]",
  SquaresComponent,
}) => (
  <section className={`${className} py-12 font-roboto`}>
    <div className="flex flex-col items-center mt-[2.5rem]">
      <div className="flex flex-col items-center gap-[2rem]">
        <h2 className={titleClassName}>{title}</h2>
        <div className="w-full flex justify-center relative">
          <div className="w-full max-w-[13.75rem]">
            <Image
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              // unoptimized={false} // Comment or uncomment as needed for optimization troubleshooting
            />
            {/* Decorative squares */}
            {SquaresComponent && <SquaresComponent />}
          </div>
        </div>
        <p className="text-[#00313B] text-center text-[1.125rem] font-normal leading-[1.5rem] max-w-4xl mx-auto">
          {paragraph}
        </p>
      </div>
    </div>
  </section>
);

// Fix image paths: use absolute paths from public directory
const SECTIONS = [
  {
    className: "healthcare-costs",
    title: "Rising Healthcare Costs",
    imgSrc: "/images/challenges-images/costs.png",
    imgAlt: "Escalating Healthcare Costs",
    paragraph:
      "We offer extensive healthcare coverage at affordable and competitive prices suitable for all, helping you manage the rising costs of medical care while maintaining the highest quality of service.",
    overrideTitleClass: undefined,
    SquaresComponent: SquaresHealthcareCosts,
  },
  {
    className: "financial",
    title: "Coverage Gaps",
    imgSrc: "/images/challenges-images/financial.png",
    imgAlt: "Financial Limitations",
    paragraph:
      "Medyour bridges the gaps that once left some people without access to care. Our comprehensive plans cover all ages and health conditions, including chronic illnesses and pre-existing conditions, ensuring that everyone receives the care they deserve—without exception.",
    overrideTitleClass: undefined,
    SquaresComponent: SquaresFinancial,
  },
  {
    className: "administrative",
    title: "Financial Barriers",
    imgSrc: "/images/challenges-images/administrative.png",
    imgAlt: "Administrative Burdens",
    paragraph:
      "We remove traditional financial limitations that restrict access to care—such as usage caps, benefit ceilings, or complicated co-pay structures. Instead, we provide fair and flexible coverage that enables everyone to access the healthcare they need, free from financial strain or restrictive conditions.",
    overrideTitleClass: undefined,
    SquaresComponent: SquaresAdministrative,
  },
  {
    className: "inclusivity",
    title: "Administrative Burdens",
    imgSrc: "/images/challenges-images/inclusivity.png",
    imgAlt: "Inclusivity Gaps",
    paragraph:
      "Medyour simplifies complex administrative processes and minimizes paperwork through fully integrated digital systems. These platforms make it easy to manage and follow up on healthcare services, saving time and effort while ensuring a faster and more efficient healthcare experience.",
    overrideTitleClass: "text-[#123D46] text-[2rem] font-normal leading-[4.375rem]",
    SquaresComponent: SquaresInclusivity,
  },
  {
    className: "accessibility",
    title: "Difficulty Accessing Providers",
    imgSrc: "/images/challenges-images/accessibility.png",
    imgAlt: "Provider Accessibility",
    paragraph:
      "With the mobile app, finding healthcare providers is easier than ever—right at your fingertips. Our extensive and diverse network covers all regions and specialties, allowing you to access the care you need quickly and conveniently, wherever you are.",
    overrideTitleClass: "text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem]",
    SquaresComponent: SquaresAccessibility,
  },
];

const ChallengesSectionEn: React.FC = () => {
  return (
    <>
      {SECTIONS.map((section, idx) => (
        <React.Fragment key={section.className}>
          <ChallengeSectionEn
            className={section.className}
            title={section.title}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            paragraph={section.paragraph}
            titleClassName={section.overrideTitleClass}
            SquaresComponent={section.SquaresComponent}
          />
          {idx !== SECTIONS.length - 1 && <LineSeparator />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ChallengesSectionEn;