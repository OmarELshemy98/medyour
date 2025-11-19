import React from "react";
import LineSeparator from "../../../common/LineSeparator";
import Image from "next/image";

type ImageConfig = {
  src: string;
  alt: string;
  className?: string;
  floatingDivs?: React.ReactNode;
};

interface SectionBlockProps {
  title: string;
  titleClassName?: string;
  imageConfig?: ImageConfig;
  children: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  imageConfig,
  children,
  titleClassName = "",
  sectionClassName = "flex flex-col items-center w-full py-[2rem] md:py-[3rem] rounded-lg relative",
  containerClassName = "flex flex-col items-center md:gap-[2rem] w-full px-[1rem] md:px-[1.5rem] lg:px-[2rem]",
}) => (
  <section className={sectionClassName}>
    <div className={containerClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {imageConfig && (
        <div className="w-full flex justify-center relative py-[2rem] md:py-[3rem]">
          <div className={(imageConfig.className || "") + " relative"}>
            <Image
              src={imageConfig.src}
              alt={imageConfig.alt}
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 800px"
              className="object-contain"
              priority={false}
            />
            {imageConfig.floatingDivs}
          </div>
        </div>
      )}
      {children}
    </div>
  </section>
);


const ServiceSectionEn: React.FC = () => {
  return (
    <>
      {/* Mobile App Section */}
      <SectionBlock
        title="Mobile App"
        titleClassName="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]"
        sectionClassName="flex flex-col items-center w-full py-[2rem] md:py-[3rem] bg-[rgba(0,255,212,0.11)] rounded-lg relative"
        imageConfig={{
          src: "/images/services-images/mobile-app.png",
          alt: "Mobile App",
          className: "relative sm:w-[13.75rem] md:w-[17.5rem] lg:w-[28.125rem] transform",
          floatingDivs: (
            <>
              {/* Left side squares */}
              <div className="hidden md:block absolute -top-[1rem] -left-[1.5rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/3 -left-[2rem] w-[1.5rem] h-[1.5rem] bg-green-400 animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute bottom-1/4 -left-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
              {/* Right side squares */}
              <div className="hidden md:block absolute -top-[2rem] -right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/2 -right-[2.5rem] w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float-delay blur-[0.0625rem] opacity-80"></div>
              <div className="hidden md:block absolute -bottom-[1rem] -right-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-80"></div>
            </>
          ),
        }}
      >
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0">
          The Medyour mobile app delivers a truly integrated digital healthcare experience that puts everything you need
          right at your fingertips. With its smooth and intuitive design, you can subscribe directly to the program
          without complicated administrative steps and access all the medical services you need with ease. The app
          allows you to locate the nearest in-network healthcare providers based on your geographic location and offers
          secure electronic payment options for both annual subscriptions and medical service co-pays. You can also
          receive your lab and test results instantly through the app—no need to visit the provider in person. Medyour
          ensures a complete, connected experience that lets you monitor your healthcare services and medical records
          anytime and anywhere, with continuous support accompanying you throughout your entire healthcare journey.
        </p>
        <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center w-[80%] mx-auto">
          {/* <!-- Left dashed line --> */}
          <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>

          {/* <!-- Center separator with small bars and main line --> */}
          <div className="flex items-center">
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
            <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
            <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          </div>

          {/* <!-- Right dashed line --> */}
          <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        </div>
      </div>
      </SectionBlock>
      {/* Healthcare Coverage */}
      <SectionBlock
        title="Healthcare Coverage"
        titleClassName="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]"
        // removing bg color for this section
        sectionClassName="flex flex-col items-center w-full py-[2rem] md:py-[3rem] rounded-lg relative"
        imageConfig={{
          src: "/images/services-images/healthcare-coverage.png",
          alt: "Healthcare Coverage",
          className: "relative  transform",
          floatingDivs: (
            <>
              <div className="hidden md:block absolute top-[0.5rem] left-[0.5rem] w-[1rem] h-[1rem] bg-[#00FBFF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/4 left-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] left-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-[0.5rem] right-[0.5rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute top-2/3 right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float-delay opacity-80"></div>
            </>
          ),
        }}
      >
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0">
          We offer flexible, comprehensive healthcare programs to suit individuals and organizations alike, all through an affordable annual subscription with no hidden fees. Medyour enables you to add your entire family and parents—there is no maximum limit for the number of covered family members or for the number of services you can use. We focus on providing fully inclusive coverage for optimal comfort and service quality at every visit, making healthcare easier and more accessible for everyone.
        </p>
      </SectionBlock>
      <LineSeparator/>
      {/* Provider Network */}
      <SectionBlock
        title="Provider Network"
        titleClassName="text-[#123D46] font-roboto text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]"
        // removing bg color for this section
        sectionClassName="flex flex-col items-center w-full py-[2rem] md:py-[3rem] rounded-lg relative"
        imageConfig={{
          src: "/images/services-images/provider-network.png",
          alt: "Provider Network",
          className: "relative   transform",
          floatingDivs: (
            <>
              <div className="hidden md:block absolute -top-[1rem] -left-[1.5rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/3 -left-[2rem] w-[1.5rem] h-[1.5rem] bg-green-400 animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute bottom-1/4 -left-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
              <div className="hidden md:block absolute -top-[2rem] -right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/2 -right-[2.5rem] w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float-delay blur-[0.0625rem] opacity-80"></div>
              <div className="hidden md:block absolute -bottom-[1rem] -right-[1.5rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-80"></div>
            </>
          ),
        }}
      >
        <p className="text-[#00313B] text-center font-roboto text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-2xl mx-auto px-[1rem] md:px-0">
          A vast network of over 2500 healthcare ensures access to the
          highest standard of care. This network includes hospitals,
          clinics, specialists, and wellness centers, all committed to
          promoting health and well-being.
        </p>
      </SectionBlock>
      <LineSeparator/>
      {/* Digital Platforms Section */}
      <section>
        <div className="flex flex-col items-center justify-center text-center py-[3rem]">
          <h2 className="text-[#123D46] font-roboto text-[2.0625rem] font-normal leading-[4.375rem]">
            Digital Platforms{" "}
          </h2>
          <p className="text-[#00313B] text-center font-roboto text-[1.5rem] font-normal leading-[2.375rem] max-w-4xl mx-auto mb-[5rem]">
            Our integrated and synchronized digital platforms provide direct, real-time communication among all parties
            within the healthcare system. The platforms allow organizations to manage their employees’ subscriptions,
            monitor service usage, and analyze health data easily and accurately. At the same time, they enable
            healthcare providers to manage their operations, communicate directly and effectively with subscribers, and track their
            medical services in real time.<br />
            This seamless integration is further enhanced through a direct connection with the mobile app, which keeps
            all information constantly updated and synchronized across all parties, making the healthcare experience easier,
            faster, and more efficient, while saving time and effort without unnecessary administrative procedures.
            All platforms rely on advanced cloud encryption technologies that protect medical files and ensure the
            privacy of personal data, while providing secure, easy access whenever needed.
          </p>
        </div>
      </section>
      
    </>
  );
};

export default ServiceSectionEn;