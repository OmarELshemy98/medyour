
import React from "react";

// Component for repeated h2 + p section
const TextSection = ({
  title,
  titleStyle = {},
  paragraph,
  mt = false,
}: {
  title: string;
  titleStyle?: React.CSSProperties;
  paragraph: React.ReactNode;
  mt?: boolean;
}) => (
  <section>
    <h2
      className={`text-right text-[1.9375rem] font-[900] leading-[4.375rem]${mt ? " mt-8" : ""}`}
      style={titleStyle}
    >
      {title}
    </h2>
    <p className="text-right text-[1.125rem] font-normal leading-[1.8125rem] mt-2">
      {paragraph}
    </p>
  </section>
);

// Component for the horizontal separator
const Separator = () => (
  <div className="flex items-center w-[80%] mx-auto mt-8">
    <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
    <div className="flex items-center">
      <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
      <div className="w-[200px] sm:w-[493px] border-t-[0.125rem] border-[#3A6070]"></div>
      <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
    </div>
    <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]"></div>
  </div>
);

// Component for decorative floating squares
const FloatSquare = ({
  className,
}: {
  className: string;
}) => <div className={className}></div>;

const VisionMissionSection = () => {
  return (
    <section className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg">
      <div className="w-[90%] mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
          {/* أعلى ديكور عالق */}
          <FloatSquare className="hidden md:block absolute -top-[5rem] right-1/2 transform translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80" />

          {/* Company Introduction */}
          <div className="space-y-6 relative">
            <FloatSquare className="hidden md:block absolute top-[2rem] -left-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80" />
            <TextSection
              title="عن شركة ميديور إيجيبت لحلول الرعاية الصحية"
              titleStyle={{ fontFamily: "'Cairo',sans-serif !important" }}
              paragraph={
                <>
                  ميديور إيجيبت هي شركة متخصصة في حلول الرعاية الصحية والرقمية المتكاملة، تهدف إلى إتاحة خدمات طبية
                  وعلاجية متميزة بأسعار مخفّضة ومنافسة، بما يضمن وصولها إلى أكبر عدد ممكن من المستفيدين في مصر.
                  <br />
                  نسعى إلى تحقيق هذا الهدف من خلال برامج رعاية صحية مبتكرة تلبي احتياجات الأفراد والمؤسسات على حد سواء،
                  مدعومة بشبكة واسعة من نخبة مقدمي الرعاية الصحية في مختلف التخصصات، تغطي أنحاء الجمهورية كافة.
                  <br />
                  تؤمن ميديور إيجيبت بأن الرعاية الصحية حق للجميع دون تمييز، ولذلك تسعى إلى إزالة الحواجز التقليدية التي
                  قد تحد من سهولة الحصول على الخدمات الصحية، مثل العمر أو الحالة الصحية أو الأمراض المزمنة، لضمان وصول
                  الجميع إلى رعاية طبية متكاملة وعالية الجودة.
                </>
              }
            />

            <Separator />

            <TextSection
              title="عن برنامج ميديور للرعاية الصحية"
              mt
              paragraph={
                <>
                  ميديور هو برنامج رعاية صحية متكامل بمفهوم جديد يختلف عن أنظمة التأمين الصحي التقليدية، حيث يتيح البرنامج
                  الاشتراك السنوي في مظلة رعاية صحية متكاملة سواء للأفراد أو للمؤسسات. كما يتيح للعاملين في المؤسسات ضم
                  أسرهم ووالديهم للاشتراك دون حد أقصى لعدد أفراد الأسرة، ودون التقيد بعمر المشترك أو بالأمراض المزمنة أو
                  السابقة للتعاقد.
                  <br />
                  يوفر برنامج ميديور للرعاية الصحية تغطية طبية وعلاجية متميزة تُمكّن المشتركين من تلقي الخدمات الصحية دون
                  عدد محدد من الزيارات أو حد أقصى للاستهلاك، سواء للفرد أو للأسرة، من ﺧﻼﻝ ﺷﺑﻛﺔ ﻁﺑﻳﺔ ﻭﺍﺳﻌﺔ ﺍﻟﻧﻁﺎﻕ ﻭﻣﺗﻧﻭﻋﺔ
                  ﺗﻐﻁﻲ ﻣﻌﻅﻡ ﻣﻘﺩﻣﻲ ﺍﻟﺧﺩﻣﺎﺕ ﺍﻟﺻﺣﻳﺔ ﻓﻲ ﻣﺻﺭ، تشمل المستشفيات، المراكز الطبية، العيادات، معامل التحاليل، مراكز
                  الأشعة، والصيدليات في مختلف أنحاء مصر.
                </>
              }
            />
            <FloatSquare className="hidden md:block absolute top-1/2 -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;

