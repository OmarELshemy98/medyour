const FirstSectionMobileSectionEn = () => (
  <div className="py-16 mt-8 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Background image container is hidden on mobile (block on md+) */}
      <div
        className="rounded-tl-3xl rounded-br-3xl bg-cover bg-center hidden md:block relative overflow-visible"
        style={{ backgroundImage: "url('../images/background-img.png')" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-10 relative z-10">
          {/* Content Side (right side + vertical yellow bar on far right) */}
          <div className="w-full relative z-20 text-left flex justify-start">
            <div className="flex items-start gap-3 md:gap-4 flex-row w-fit">
              {/* The yellow border bar */}
              <div className="flex flex-col text-left pl-6 md:pl-8 border-l-[6px] md:border-l-[8px] border-[#FFB800]">
                <h1 className="font-roboto text-[2.5rem] sm:text-[2.1rem] font-[900] text-white uppercase leading-[2.6rem] mb-2 md:mb-3 whitespace-normal md:whitespace-nowrap">
                  Your Gateway to a better
                  <span className="block">Healthcare</span>
                </h1>
                <p className="font-roboto text-[2rem] font-[300] text-white leading-[2.4rem] text-left">
                  experience – Without Limits
                  <br />
                  Empowering Well-being Through
                  <br />
                  Innovative Care.
                </p>
              </div>
            </div>
          </div>
          {/* Phone Image Side (left, lifted up) */}
          <div className="hidden md:block w-full relative">
            <div className="absolute right-[-4rem] top-[-30rem] w-[50rem] h-[65rem]">
              <Image
                src="../images/home-images/mob.png"
                alt="MedYour App"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain rotate-[6deg]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
      {/* On mobile: show the same content but without background image */}
      <div className="rounded-tl-3xl rounded-br-3xl bg-[#001117] md:hidden">
        <div className="flex flex-col items-center p-4">
          <div className="w-full relative z-10">
            <div className="flex items-start gap-4">
              <div className="min-w-[0.25rem] h-[5rem] bg-[#FFB800] rounded-full self-stretch"></div>
              <div className="flex flex-col">
                <h1 className="text-[1.5rem] font-[900] text-white uppercase leading-[2rem] mb-2 whitespace-normal">
                  Your Gateway to a better Healthcare
                  <span className="block">experience – Without Limits</span>
                </h1>
                <p className="text-[1.25rem] font-[300] text-white leading-[1.75rem]">
                  Empowering Well-being Through
                  Innovative Care.
                </p>
              </div>
            </div>
          </div>
          {/* No phone image on mobile as in original */}
        </div>
      </div>
    </div>
  </div>
);

export default FirstSectionMobileSectionEn;
import Image from 'next/image';
