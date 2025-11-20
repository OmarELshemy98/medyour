import React from "react";
import Image from "next/image";
import LineSeparator from "../../../common/LineSeparator";

// Detect direction (RTL/LTR) -- for AR it's RTL
const dir = "rtl";

type ChallengeSectionProps = {
  className: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  paragraph: string;
  titleClassName?: string;
};

const DecorativeSquares: React.FC = () => (
  <>
    <div className="hidden md:block absolute -top-[3.5rem] -right-[1rem] w-[2rem] h-[2rem] bg-[#8CE2FF] animate-float opacity-80"></div>
    <div className="hidden md:block absolute top-1/3 -right-[0.25rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-[2.5rem] -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
    <div className="hidden md:block absolute top-[2rem] -left-[6rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
    <div className="hidden md:block absolute bottom-1/3 -left-[1.25rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float blur-[2px] opacity-80"></div>
  </>
);

const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  className,
  title,
  imgSrc,
  imgAlt,
  paragraph,
  titleClassName = "text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem]",
}) => (
  <section className={`${className} py-12`}>
    <div className="flex flex-col items-center mt-[2.5rem]">
      <div className="flex flex-col items-center gap-[2rem]">
        <h2
          className={`${titleClassName} ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
        >
          {title}
        </h2>
        <div className="w-full flex justify-center relative">
          <div className="w-full max-w-[13.75rem] relative">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              priority={false}
            />
            <DecorativeSquares />
          </div>
        </div>
        <p
          className={`text-[#00313B] text-center text-[1.125rem] font-normal leading-[1.5rem] max-w-5xl mx-auto mt-3 ${
            dir === 'rtl' ? 'font-ar-body' : ''
          }`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  </section>
);

const SECTIONS = [
  {
    className: "healthcare-costs",
    title: "ارتفاع تكاليف الرعاية الصحية",
    imgSrc: "/images/challenges-images/costs.png",
    imgAlt: "تصاعد تكاليف الرعاية الصحية",
    paragraph:
      "نقدّم تغطية صحية شاملة بأسعار مخفضة ومنافسة تناسب جميع الفئات، لمساعدتك على مواجهة ارتفاع تكاليف العلاج، مع الحفاظ على جودة الخدمات المقدَّمة.",
    overrideTitleClass: undefined,
  },
  {
    className: "financial",
    title: "الفجوات في التغطية",
    imgSrc: "/images/challenges-images/financial.png",
    imgAlt: "القيود المالية",
    paragraph:
      "نغلق الفجوات التي كانت تحرم بعض الفئات من الحصول على الرعاية، من خلال خطط شاملة تغطي جميع الأعمار والحالات الصحية، بما في ذلك الأمراض المزمنة والسابقة للتعاقد، لضمان حصول الجميع على الخدمات الصحية التي تليق بهم دون استثناء.",
    overrideTitleClass: undefined,
  },
  {
    className: "administrative",
    title: "القيود المالية",
    imgSrc: "/images/challenges-images/administrative.png",
    imgAlt: "الأعباء الإدارية",
    paragraph:
      "نُزيل القيود المالية التقليدية التي تحدّ من الاستفادة من الخدمات، مثل حدود الاستخدام والسقوف المالية واستثناء بعض الخدمات أو التعقيد في نسب التحمل، لنوفّر تغطية عادلة ومرنة تُمكِّن الجميع من الحصول على الرعاية التي يحتاجونها دون أعباء مالية أو شروط معقدة.",
    overrideTitleClass: undefined,
  },
  {
    className: "inclusivity",
    title: "الأعباء الإدارية",
    imgSrc: "/images/challenges-images/inclusivity.png",
    imgAlt: "فجوات الشمول",
    paragraph:
      "نُبسّط الإجراءات الإدارية المعقدة ونقلّل المعاملات الورقية من خلال أنظمة رقمية متكاملة، تتيح متابعة الخدمات وتنفيذها بسهولة، مما يوفّر الوقت والجهد ويزيد من سرعة وكفاءة التجربة الصحية.",
    overrideTitleClass: "text-[#123D46] text-[2.0625rem] text-center font-normal leading-[4.375rem]",
  },
  {
    className: "accessibility",
    title: "صعوبة الوصول إلى مقدّمي الخدمات",
    imgSrc: "/images/challenges-images/accessibility.png",
    imgAlt: "الوصول إلى مقدمي الخدمات",
    paragraph:
      "مع تطبيق ميديور، يصبح الوصول إلى مقدّمي الرعاية الصحية الأقرب إليك أسرع وأسهل من أي وقتٍ مضى، عبر شبكة طبية واسعة النطاق ومتنوعة تغطي مختلف المحافظات والتخصصات، لتجد الرعاية التي تحتاجها بسهولة، أينما كنت.",
    overrideTitleClass: "text-[#123D46]  text-center text-[2.0625rem] font-normal leading-[4.375rem]",
  },
];

const ChallengesSection: React.FC = () => {
  return (
    <>
      {SECTIONS.map((section, idx) => (
        <React.Fragment key={section.className}>
          <ChallengeSection
            className={section.className}
            title={section.title}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            paragraph={section.paragraph}
            titleClassName={
              section.overrideTitleClass
                ? `${section.overrideTitleClass} ${dir === 'rtl' ? 'font-ar-heading' : ''}`
                : undefined
            }
          />
          {idx !== SECTIONS.length - 1 && <LineSeparator />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ChallengesSection;