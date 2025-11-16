// app/components/sections/home/carouselHome.tsx

/**
 * CSS-only Carousel Section for القيم (Values)
 * Pure component with no hooks - mimics the HTML in index.html (471-591).
 * All carousel movement (arrows) needs JS and should be added globally, but this component outputs pure markup only.
 */

type ValueCard = {
  title: string;
  description: string;
  image: string;
};

const VALUES: ValueCard[] = [
  {
    title: "النزاهة",
    description: "نلتزم بأعلى معايير الشفافية والصدق في جميع تعاملاتنا.",
    image: "/images/home-images/Integrity.png",
  },
  {
    title: "الابتكار",
    description: "نستخدم أحدث التقنيات والحلول لتطوير وتحسين تجربة الرعاية الصحية باستمرار.",
    image: "/images/home-images/innovation.png",
  },
  {
    title: "سهولة الوصول للخدمات",
    description:
      "نعمل على إزالة كل الحواجز التي تعيق حصول الجميع على الرعاية الصحية لتصبح العملية أسرع وأسهل من أي وقت مضى.",
    image: "/images/home-images/accessibility.png",
  },
  {
    title: "الجودة",
    description:
      "نضمن أعلى معايير الأداء والسلامة في كل خدمة نقدمها لأن صحتك هي أولويتنا دائمًا.",
    image: "/images/home-images/quality.png",
  },
];

const getCardCorners = (idx: number) => {
  // Mimic the original HTML carousel's custom roundness corners per card
  if (idx === 0)
    return 'rounded-tl-[70px] rounded-br-[70px]';
  if (idx === 1)
    return 'rounded-tr-[90px] rounded-bl-[90px]';
  if (idx === 2)
    return 'rounded-tl-[90px] rounded-br-[90px]';
  if (idx === 3)
    return 'rounded-tr-[90px] rounded-bl-[90px]';
  return '';
};

const CarouselHome = () => (
  <section className="py-8 md:py-12 mx-auto max-w-7xl">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-2 md:gap-4">
        {/* Left Arrow */}
        <button
          className="carousel-button carousel-button-prev flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
          aria-label="Previous slide"
          type="button"
        >
          {/* Left SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
            <path d="M0.5 0.999999L14.5 18L0.499999 35" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden rounded-xl">
          <div className="carousel-container flex transition-transform duration-500 flex-row-reverse ease-in-out">
            {VALUES.map((value, idx) => (
              <div key={value.title} className="carousel-slide flex-shrink-0 w-full">
                <div
                  className={`aspect-[4/3] relative flex flex-col justify-center overflow-hidden ${getCardCorners(idx)}`}
                >
                  {/* Background Image Layer */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${value.image}')` }}
                  />
                  {/* Overlay Layer (only on slides 0, 3 for full color, slides 1,2: commented/missing in the HTML) */}
                  {(idx === 0 || idx === 3) && (
                    <div className="absolute inset-0 bg-[#00416C] mix-blend-color"></div>
                  )}

                  {/* Content Layer */}
                  <div className="relative z-10 flex flex-col min-h-[180px] mt-16 justify-between p-6">
                    <h3 className="text-[#0E263E] flex-1 text-[1.875rem] font-[900] leading-[1.5rem] ">
                      {value.title}
                    </h3>
                    <p className="text-[0.875rem] flex-[3] font-[500] leading-[1.125rem] text-right mt-auto py-8 rounded-br-[90px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="carousel-button carousel-button-next flex-shrink-0 p-2 md:p-3 rounded-full bg-white/80 hover:bg-white shadow-lg text-gray-700 text-lg md:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
          aria-label="Next slide"
          type="button"
        >
          {/* Right Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 16 36" fill="none" className="md:w-4 md:h-9">
            <path d="M15 35L1 18L15 1" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

export default CarouselHome;