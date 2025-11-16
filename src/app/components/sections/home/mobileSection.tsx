// app/components/sections/home/Benefits.tsx

/**
 * Benefits Section
 * This React component is rewritten to closely match the markup and structure from 
 * index.html (121-180) as requested. Tailwind classes and structure are preserved for 
 * consistency and visual accuracy with the original HTML. 
 * Responsive logic maintains the desktop/mobile separation as in the HTML.
 */

import { Clock, Shield, Users, Smartphone } from 'lucide-react';

const iconMap = {
  Clock,
  Shield,
  Users,
  Smartphone
};

type Benefit = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};

type BenefitsProps = {
  content: {
    title: string;
    subtitle: string;
    benefits: Benefit[];
  };
};

const BenefitsSection = ({ content }: BenefitsProps) => {
  const { title, subtitle, benefits } = content;

  return (
    <div className="py-16 mt-8 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop: background image section */}
        <div
          className="rounded-tl-3xl rounded-br-3xl bg-cover bg-center hidden md:block relative overflow-visible"
          style={{ backgroundImage: "url('./images/background-img.png')" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-10 relative z-10">

            {/* Content Side (header, subtitle, possible benefit grid on the right) */}
            <div className="w-full  relative z-20 text-right flex ">
              <div className="flex items-start gap-3 md:gap-4 flex-row-reverse w-fit">
                {/* Border on the right with yellow accent */}
                <div className="flex flex-col text-right pr-6 md:pr-8 border-r-[8px] md:border-r-[8px]   border-[#FFB800]">
                  <h1 className=" text-[2.5rem] md:text-[2.8rem] font-[900] text-white uppercase leading-[2.6rem] mb-2 md:mb-3 whitespace-normal md:whitespace-nowrap">
                    {title}
                  </h1>
                  <p className=" text-[2.1rem] md:text-[2.4rem] font-[300] text-white leading-[2.4rem] text-right">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone image side (on the left, lifted up) */}
            <div className="hidden md:block w-full relative">
              <div className="absolute left-[-6rem] top-[-30rem] w-[50rem] h-[65rem]">
                <img
                  src="./images/home-images/mob-ar.png"
                  alt="تطبيق ميديور"
                  className="object-contain rotate-[6deg] w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: content without background image */}
        <div className="rounded-tl-3xl rounded-br-3xl bg-[#001117] md:hidden">
          <div className="flex flex-col items-center p-4">
            <div className="w-full relative z-10 text-right">
              <div className="flex justify-end px-4 gap-4 border-r-[6px] border-[#FFB800] flex-row-reverse">
                <div className="flex flex-col ">
                  <h1 className=" text-[2.5rem] font-[900] text-white uppercase leading-[2.5rem] mb-2 whitespace-normal">
                    {title}
                  </h1>
                  <p className=" text-[2.375rem] font-[300] text-white leading-[2.625rem] text-right">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
            {/* No phone image on mobile */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;