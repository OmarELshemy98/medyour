// app/components/sections/challenges/ChallengesSection.tsx

import { challengesContent } from '../../../content/ar/challenges';
import Image from 'next/image';

// No need for props/type for squares since they're always the same structure/order.
const DecorativeSquares = () => (
  <>
    {/* Top right large blue square */}
    <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
    {/* Top right medium yellow square */}
    <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
    {/* Bottom right small blue square (blur) */}
    <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
    {/* Top left small pink square */}
    <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
    {/* Bottom left medium green square (blur) */}
    <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
  </>
);

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
  // Pull out relevant content safely:
  const hero = challengesContent.hero;
  const challenges = challengesContent.challenges;
  const separatorShow = challengesContent.separator?.show ?? true;

  return (
    <main>
      {/* Header */}
      <div
        className="relative w-full overflow-hidden bg-[url('/images/background-img.png')] bg-cover bg-center bg-no-repeat h-auto pt-20 flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-20 pb-24 z-10 text-white w-full max-w-[90rem] mx-auto
            px-4 sm:px-8 md:px-12 lg:px-16
            flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-center font-extrabold text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] leading-tight break-words max-w-4xl">
            {hero?.title}
          </h1>
          <p className="text-center font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem]
            leading-normal sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.8rem] 
            w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-1 overflow-hidden text-ellipsis">
            {hero?.subtitle}
          </p>
        </div>
      </div>

      {/* Challenge Sections */}
      <div>
        {challenges.map((challenge: any, i: number) => (
          <section
            className="py-12"
            key={challenge.key || challenge.title}
          >
            <div className="flex flex-col items-center mt-[2.5rem]">
              <div className="flex flex-col items-center gap-[2rem]">
                <h2 className="text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem] text-center">
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
                  {/* Decorative squares always shown for all challenges as per the html */}
                  <DecorativeSquares />
                </div>
                <p className="text-[#00313B] text-center text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
                  {challenge.description}
                </p>
              </div>
            </div>
            {/* Don't render a separator after the last one */}
            {separatorShow && i !== challenges.length - 1 && <Separator />}
          </section>
        ))}
      </div>
    </main>
  );
};

export default ChallengesSection;