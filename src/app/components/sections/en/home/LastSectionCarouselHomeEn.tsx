// app/components/sections/home/carouselHome.tsx
// هذا الملف الآن ثابت تماماً (SSG) ولا يحتوي على أي hooks

import Script from 'next/script';

const LastSectionCarouselHomeEn = () => (
  <>
    <section className="py-8 md:py-12 mx-auto max-w-7xl font-roboto">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Left Arrow */}
          <button
            className="carousel-button carousel-button-prev flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
            aria-label="Previous slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
              <path d="M15 35L1 18L15 1" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          {/* Carousel Container */}
          <div className="flex-1 overflow-hidden rounded-xl">
            <div className="carousel-container flex transition-transform duration-500 ease-in-out">
              {/* Card 1: Integrity */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/Integrity.png')]"></div>
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                    <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">
                      Integrity
                    </h3>
                    <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">
                      We uphold the highest standards of transparency and honesty in all our interactions.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2: Innovation */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[70px] rounded-bl-[70px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/innovation.png')]"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                    <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">
                      Innovation
                    </h3>
                    <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">
                      We leverage cutting-edge technology to continuously improve the healthcare experience
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3: Accessibility */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/accessibility.png')]"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                    <h3 className="text-[#0E263E] flex-1 text-[1.7rem] font-[900] leading-[1.5rem] mb-4">
                      Easy Access to Services
                    </h3>
                    <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">
                      We remove all barriers preventing people from obtaining healthcare, making the process faster and simpler than ever.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4: Quality */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[90px] rounded-[10px] rounded-bl-[70px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('/images/home-images/quality.png')]"></div>
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] justify-between mt-16 p-6">
                    <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] mb-4">
                      Quality
                    </h3>
                    <p className="flex-[3] text-[0.875rem] font-[500] leading-[1.125rem] mt-auto py-4 rounded-br-[70px]">
                      We guarantee the highest standards of safety and performance in every service we deliver, because your health is always our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Arrow */}
          <button
            className="carousel-button carousel-button-next flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
            aria-label="Next slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
              <path d="M0.5 0.999999L14.5 18L0.499999 35" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    {/* سلايدر JS العام */}
    <Script src="/js/script.js" strategy="lazyOnload" />
  </>
);

export default LastSectionCarouselHomeEn;