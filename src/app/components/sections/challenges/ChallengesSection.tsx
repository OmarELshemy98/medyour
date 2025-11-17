// app/components/sections/challenges/ChallengesSection.tsx

import { challengesContent } from '../../../content/ar/challenges';
import Image from 'next/image';

// Decorative squares exactly as in the HTML snippet
const DecorativeSquares = () => (
  <>
    <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
    <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
    <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
  </>
);

// Separator as in the HTML
function Separator() {
  return (
    <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
      <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      <div className="flex items-center">
        <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
        <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
      </div>
      <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
    </div>
  );
}

const ChallengesSection = () => {
  const challenges = challengesContent.challenges;
  const separatorShow = challengesContent.separator?.show ?? true;

  return (
    <main>
    

      {/* Challenge Sections rendered as section, matching HTML */}
      {challenges.map((challenge: any, i: number) => (
        <section
          className="py-12"
          key={challenge.key || challenge.title}
        >
          <div className="flex flex-col items-center mt-[2.5rem]">
            <div className="flex flex-col items-center gap-[2rem]">
              <h2 className="text-[#123D46]  text-[2.0625rem] font-normal leading-[4.375rem]">
                {challenge.title}
              </h2>
              <div className="w-full flex justify-center relative">
                <div className="w-full max-w-[13.75rem]">
                  <Image
                    src={challenge.image}
                    alt={challenge.alt}
                    loading="lazy"
                    className="object-contain"
                    width={220}
                    height={220}
                  />
                </div>
                <DecorativeSquares />
              </div>
              <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
                {challenge.description}
              </p>
            </div>
          </div>
          {separatorShow && i !== challenges.length - 1 && <Separator />}
        </section>
      ))}
    </main>
  );
};

export default ChallengesSection;