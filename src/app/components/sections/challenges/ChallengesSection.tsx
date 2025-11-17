
const ChallengesSection = () => {
  return (
    <>
      {/* Challenges Section */}
      <section className="healthcare-costs py-12">
        <div className="flex flex-col items-center mt-[2.5rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <h2 className="text-[#123D46]  text-[2.0625rem] font-normal leading-[4.375rem]">
              ارتفاع تكاليف الرعاية الصحية
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="w-full max-w-[13.75rem]">
                <img
                  src="../images/challenges-images/costs.png"
                  alt="تصاعد تكاليف الرعاية الصحية"
                  loading="lazy"
                  className="object-contain"
                />
                {/* Decorative squares */}
                <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
              نقدّم تغطية صحية شاملة بأسعار مخفضة ومنافسة تناسب جميع الفئات، لمساعدتك على مواجهة ارتفاع تكاليف العلاج، مع
              الحفاظ على جودة الخدمات المقدَّمة.
            </p>
          </div>
        </div>
      </section>

      {/* Line Separator */}
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      </div>

      {/* Financial Section */}
      <section className="financial py-12">
        <div className="flex flex-col items-center mt-[2.5rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <h2 className="text-[#123D46]  text-[2.0625rem] font-normal leading-[4.375rem]">
              الفجوات في التغطية
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="w-full max-w-[13.75rem]">
                <img
                  src="../images/challenges-images/financial.png"
                  alt="القيود المالية"
                  loading="lazy"
                  className="object-contain "
                />
                {/* Decorative squares */}
                <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
              نغلق الفجوات التي كانت تحرم بعض الفئات من الحصول على الرعاية، من خلال خطط شاملة تغطي جميع الأعمار والحالات
              الصحية، بما في ذلك الأمراض المزمنة والسابقة للتعاقد، لضمان حصول الجميع على الخدمات الصحية التي تليق بهم دون
              استثناء.
            </p>
          </div>
        </div>
      </section>

      {/* Line Separator */}
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      </div>

      {/* Administrative Section */}
      <section className="administrative py-12">
        <div className="flex flex-col items-center mt-[2.5rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <h2 className="text-[#123D46]  text-[2.0625rem] font-normal leading-[4.375rem]">
              القيود المالية
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="w-full max-w-[13.75rem]">
                <img
                  src="../images/challenges-images/administrative.png"
                  alt="الأعباء الإدارية"
                  loading="lazy"
                  className="object-contain "
                />
                {/* Decorative squares */}
                <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
              نُزيل القيود المالية التقليدية التي تحدّ من الاستفادة من الخدمات، مثل حدود الاستخدام والسقوف المالية
              واستثناء بعض الخدمات أو التعقيد في نسب التحمل، لنوفّر تغطية عادلة ومرنة تُمكِّن الجميع من الحصول على الرعاية
              التي يحتاجونها دون أعباء مالية أو شروط معقدة.
            </p>
          </div>
        </div>
      </section>
      {/* Line Separator */}
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      </div>

      {/* Inclusivity Section */}
      <section className="inclusivity py-12">
        <div className="flex flex-col items-center mt-[2.5rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <h2 className="text-[#123D46]  text-[2.0625rem] text-center font-normal leading-[4.375rem]">
              الأعباء الإدارية
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="w-full max-w-[13.75rem]">
                <img
                  src="../images/challenges-images/inclusivity.png"
                  alt="فجوات الشمول"
                  loading="lazy"
                  className="object-contain "
                />
                {/* Decorative squares */}
                <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
              نُبسّط الإجراءات الإدارية المعقدة ونقلّل المعاملات الورقية من خلال أنظمة رقمية متكاملة، تتيح متابعة الخدمات
              وتنفيذها بسهولة، مما يوفّر الوقت والجهد ويزيد من سرعة وكفاءة التجربة الصحية.
            </p>
          </div>
        </div>
      </section>

      {/* Line Separator */}
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      </div>

      {/* Accessibility Section */}
      <section className="accessibility py-12">
        <div className="flex flex-col items-center mt-[2.5rem]">
          <div className="flex flex-col items-center gap-[2rem]">
            <h2 className="text-[#123D46]  text-center text-[2.0625rem] font-normal leading-[4.375rem]">
              صعوبة الوصول إلى مقدّمي الخدمات
            </h2>
            <div className="w-full flex justify-center relative">
              <div className="w-full max-w-[13.75rem]">
                <img
                  src="../images/challenges-images/accessibility.png"
                  alt="الوصول إلى مقدمي الخدمات"
                  loading="lazy"
                  className="object-contain"
                />
                {/* Decorative squares */}
                <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3">
              مع تطبيق ميديور، يصبح الوصول إلى مقدّمي الرعاية الصحية الأقرب إليك أسرع وأسهل من أي وقتٍ مضى، عبر شبكة طبية
              واسعة النطاق ومتنوعة تغطي مختلف المحافظات والتخصصات، لتجد الرعاية التي تحتاجها بسهولة، أينما كنت.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChallengesSection;