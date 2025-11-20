// app/components/sections/home/carouselHome.tsx
// هذا الملف الآن ثابت تماماً (SSG) ولا يحتوي على أي hooks

import Script from 'next/script';

const lastSectionCarouselHome = ({ dir = 'ltr' }) => (
  <>
    <section className="py-8 md:py-12 mx-auto max-w-7xl" dir="ltr">
      <div className="max-w-7xl mx-auto  ">
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
          <div className="flex-1 overflow-hidden rounded-xl flex-row-reverse">
            <div className="carousel-container flex transition-transform duration-500 flex-row ease-in-out">
              {/* Card 1: Integrity */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/Integrity.png')]"></div>
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] mt-16 justify-between p-6">
                    <h3
                      className={`text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
                    >
                      النزاهة
                    </h3>
                    <p
                      className={`text-[0.875rem] flex-[3] font-[500] leading-[1.125rem] text-right mt-auto py-8 rounded-br-[90px] ${
                        dir === 'rtl' ? 'font-ar-body' : ''
                      }`}
                    >
                      نلتزم بأعلى معايير الشفافية والصدق في جميع تعاملاتنا.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2: Innovation */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[90px] rounded-bl-[90px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/innovation.png')]"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] mt-16 justify-between p-6">
                    <h3
                      className={`text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
                    >
                      الابتكار
                    </h3>
                    <p
                      className={`text-[0.875rem] flex-[3] font-[500] leading-[1.125rem] text-right mt-auto py-8 rounded-br-[90px] ${
                        dir === 'rtl' ? 'font-ar-body' : ''
                      }`}
                    >
                      نستخدم أحدث التقنيات والحلول لتطوير وتحسين تجربة الرعاية الصحية باستمرار.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3: Accessibility */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tl-[90px] rounded-br-[90px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/accessibility.png')]"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] mt-16 justify-between p-6">
                    <h3
                      className={`text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
                    >
                      سهولة الوصول للخدمات
                    </h3>
                    <p
                      className={`text-[0.875rem] flex-[3] font-[500] leading-[1.125rem] text-right mt-auto py-8 rounded-br-[90px] ${
                        dir === 'rtl' ? 'font-ar-body' : ''
                      }`}
                    >
                      نعمل على إزالة كل الحواجز التي تعيق حصول الجميع على الرعاية الصحية لتصبح العملية أسرع وأسهل من أي وقت مضى.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4: Quality */}
              <div className="carousel-slide flex-shrink-0 w-full">
                <div className="aspect-[4/3] relative flex flex-col justify-center rounded-tr-[90px] rounded-bl-[90px] overflow-hidden">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home-images/quality.png')]"></div>
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] mt-16 justify-between p-6">
                    <h3
                      className={`text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
                    >
                      الجودة
                    </h3>
                    <p
                      className={`text-[0.875rem] flex-[3] font-[500] leading-[1.125rem] text-right mt-auto py-8 rounded-br-[90px] ${
                        dir === 'rtl' ? 'font-ar-body' : ''
                      }`}
                    >
                      نضمن أعلى معايير الأداء والسلامة في كل خدمة نقدمها لأن صحتك هي أولويتنا دائمًا.
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
    {/* إطلاق السلايدر من الملف البرمجي العام */}
    <Script src="/js/script.js" strategy="lazyOnload" />
  </>
);

export default lastSectionCarouselHome;