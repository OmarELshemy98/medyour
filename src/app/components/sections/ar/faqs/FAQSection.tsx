// app/components/sections/faqs/FAQSection.tsx

import React from "react";
import LineSeparator from "../../../common/LineSeparator";

type FAQItemType = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItemType[] = [
  {
    question: "هل التغطية متاحة لجميع الأعمار؟",
    answer: (
      <>
        <div>
          نعم، خطط الرعاية الصحية مصممة لتناسب جميع الفئات العمرية بدون
          استثناء.
        </div>
      </>
    ),
  },
  {
    question: "ما الذي يميز ميديور عن مقدمي الرعاية الصحية التقليديين؟",
    answer: (
      <>
        <div>
          ميديور منصة رعاية صحية رقمية رائدة تعتمد على تقنيات متقدمة
          لتوفير وصول فوري إلى شبكة واسعة من أفضل مقدمي الخدمات الصحية،
        </div>
        <div>دون تعقيدات أو قيود، عبر منصات مبتكرة ومتطورة،</div>
        <div>مع دعم مستمر يعيد تعريف مفهوم الرعاية الصحية</div>
      </>
    ),
  },
  {
    question: "كيف يمكنني الوصول إلى سجلاتي الطبية؟",
    answer: (
      <>
        <div>
          يمكنك الوصول إلى سجلاتك الطبية بسهولة وأمان عبر منصتنا
          السحابية أو من خلال تطبيق ميديور على هاتفك.
        </div>
      </>
    ),
  },
];

const FAQItem: React.FC<FAQItemType & { showSeparator?: boolean }> = ({
  question,
  answer,
  showSeparator = false,
}) => (
  <section className="faq-item">
    <div className="pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] ">
      <h3 className=" text-base sm:text-lg lg:text-xl font-medium mb-[0.5rem] sm:mb-[0.75rem] lg:mb-[1rem] text-center">
        {question}
      </h3>
      <div className=" text-sm sm:text-base lg:text-lg font-normal leading-5 sm:leading-6 lg:leading-7 text-center mx-auto">
        {answer}
      </div>
    </div>
    {showSeparator && <LineSeparator />}
  </section>
);

const FAQSection: React.FC = () => {
  return (
    <main className="text-[#003439]" dir="rtl">
      <div className="mx-auto w-[90%] py-12">
        <div className="space-y-[1.5rem] sm:space-y-[2rem] lg:space-y-[2.5rem]">
          {faqItems.map((item, idx) => (
            <FAQItem
              key={idx}
              question={item.question}
              answer={item.answer}
              showSeparator={idx < faqItems.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQSection;