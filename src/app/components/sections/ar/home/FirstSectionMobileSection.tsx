import Image from 'next/image';

const dir = 'rtl';

const FirstSectionMobileSection = () => (
  <div className="py-16 mt-8 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Background image container is hidden on mobile (block on md+) */}
      {/* Background image container */}
      <div
        className="rounded-tl-3xl rounded-br-3xl bg-cover bg-center hidden  md:block relative "
        style={{ backgroundImage: "url('/images/background-img.png')" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-10 relative z-10">
          {/* Content Side (الكلام على اليمين + الشريط على أقصى اليمين) */}
          <div className="w-full  relative z-20 flex justify-end">
            <div className="flex items-start gap-3 md:gap-4 flex-row w-fit">
              {/* النص مع بوردر يمين بنفس لون الخط الأصفر */}
              <div className="flex flex-col text-right pr-6 md:pr-8 border-r-[8px] md:border-r-[8px]   border-[#FFB800]">
                <h1 className={`text-[2.5rem] md:text-[2.8rem] font-[900] text-white uppercase leading-[2.6rem] mb-2 md:mb-3 whitespace-normal md:whitespace-nowrap ${dir === 'rtl' ? 'font-ar-heading' : ''}`}>
                  مـيديـــــور
                </h1>
                <p className={`text-[2.1rem] md:text-[2.4rem] font-[300] text-white leading-[2.4rem] text-right ${dir === 'rtl' ? 'font-ar-body' : ''}`}>
                  بوابتك للرعاية الصحية المتكاملة<br />
                  بلا حدود
                </p>
              </div>
            </div>
          </div>

          {/* Phone Image Side (على الشمال ومرفوعة لفوق) */}
          <div className="hidden md:block w-full relative">
            {/* دفعت الصوره اكتر نحية الشمال بـ left-[-4rem] بدل left-0 */}
            <div className="absolute left-[-4rem] top-[-15rem] w-[50rem] h-[35rem] overflow-hidden">
              <Image
                src="/images/home-images/mob-ar.png"
                alt="تطبيق ميديور"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain rotate-[6deg]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* On mobile: show the same content but without background image */}
      <div className="rounded-tl-3xl rounded-br-3xl bg-[#001117] md:hidden">
        <div className="flex flex-col items-end p-4">
          <div className="w-full relative z-10 text-right flex justify-end">
            <div className="flex px-4 gap-4 border-r-[6px] border-[#FFB800] flex-row-reverse">
              {/* <div className="min-w-[0.25rem] h-[5rem] bg-[#FFB800] rounded-full self-stretch"></div> */}
              <div className="flex flex-col ">
                <h1 className={`text-[2.5rem] font-[900] text-white uppercase leading-[2.5rem] mb-2 whitespace-normal ${dir === 'rtl' ? 'font-ar-heading' : ''}`}>
                  مـيديـــــور
                </h1>
                <p className={`text-[2.375rem] font-[300] text-white leading-[2.625rem] text-right ${dir === 'rtl' ? 'font-ar-body' : ''}`}>
                  بوابتك للرعاية الصحية المتكاملة<br />
                  بلا حدود
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

export default FirstSectionMobileSection;
