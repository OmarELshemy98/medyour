// app/components/sections/home/introduction.tsx

/**
 * "مقدمة" قسم — مطابق لقطعة كود index.html (206-222)
 * يستورد النصوص مباشرة من مجلد المحتوى.
 */

import { homePageContent } from '../../../content/ar/index';

const { introductionSection } = homePageContent;
const { title, paragraphs } = introductionSection;

const SecondSectionIntroduction = () => (
  <section className="py-10 " dir="rtl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 className="text-right text-[1.9375rem] font-[900] leading-[4.375rem]">
        {title}
      </h2>
      {paragraphs.map((text, idx) => (
        <p
          key={idx}
          className={
            "text-[1.125rem] block leading-[1.5rem] " +
            (idx === paragraphs.length - 1
              ? "font-bold pt-8"
              : "font-normal")
          }
        >
          {text}
        </p>
      ))}
    </div>
  </section>
);

export default SecondSectionIntroduction;