
import React from "react";
import LineSeparator from "../../../common/LineSeparator";

// Component for repeated h2 + p section (English version)
const TextSection = ({
  title,
  titleStyle = {},
  paragraph,
  mt = false,
}: {
  title: string;
  titleStyle?: React.CSSProperties;
  paragraph: React.ReactNode;
  mt?: boolean;
}) => (
  <section>
    <h2
      className={`text-[1.9375rem] font-[900] leading-[4.375rem]${mt ? " mt-8" : ""}`}
      style={titleStyle}
    >
      {title}
    </h2>
    {/* Allow multiple <p> nodes if needed */}
    {Array.isArray(paragraph) ? (
      paragraph.map((p, i) => (
        <p key={i} className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">
          {p}
        </p>
      ))
    ) : (
      <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">
        {paragraph}
      </p>
    )}
  </section>
);



// Decorative floating squares
const FloatSquare = ({
  className,
}: {
  className: string;
}) => <div className={className}></div>;

const VisionMissionSectionEn: React.FC = () => {
  return (
    <section className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg font-roboto">
      <div className="w-[90%] mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {/* Top floating square */}
          <FloatSquare className="hidden md:block absolute -top-[5rem] right-1/2 transform translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80" />

          {/* Main content */}
          <div className="space-y-6 relative">
            <FloatSquare className="hidden md:block absolute top-[2rem] -left-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80" />

            {/* Company Introduction */}
            <TextSection
              title="Medyour Egypt for Healthcare Solutions"
              titleStyle={{ fontFamily: "'Cairo',sans-serif !important" }}
              paragraph={[
                `Medyour Egypt specializes in digital and integrated healthcare solutions. Our mission is to provide premium medical services at competitive, affordable prices, making healthcare accessible to as many people as possible across Egypt.`,
                `We achieve this through innovative healthcare programs that cater to both individuals and organizations, supported by a wide network of top-tier healthcare providers across all specialties nationwide.`,
                `Medyour Egypt believes healthcare is a right for all, without discrimination. We work to remove traditional barriers, such as age, pre-existing conditions, or chronic diseases, to ensure everyone can access comprehensive, high-quality medical care.`
              ]}
            />

              <LineSeparator/>
            {/* Program description */}
            <TextSection
              title="About the Medyour Healthcare Program"
              mt
              paragraph={[
                `Medyour program offers a new, flexible approach to healthcare, beyond traditional health insurance systems. With offers affordable annual subscriptions, we provide a full access to comprehensive healthcare services for individuals and organizations alike. Our program ensures adding family members and parents in the subscription without limits, and without restrictions based on age or pre-existing or chronic conditions.`,
                `The program provides exceptional medical coverage, allowing unlimited access to services without limits on visits or usage, across a wide network covers most healthcare providers in Egypt, including hospitals, medical centers, clinics, labs, imaging centers, and pharmacies.`
              ]}
            />

            <FloatSquare className="hidden md:block absolute top-1/2 -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSectionEn;

