// app/components/sections/legal/TermsContent.tsx

import React from "react";
import LineSeparator from "../../../common/LineSeparator";

type SectionType = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

const sections: SectionType[] = [
  {
    heading: "خدماتنا",
    paragraphs: [
      "توفر ميديور منصة ذكية ومتكاملة تتيح للأفراد والشركات الوصول إلى خدمات رعاية صحية فورية وبتكلفة مناسبة عبر شبكة طبية واسعة تغطي جميع أنحاء مصر. تشمل خدماتنا:",
    ],
    listItems: [
      "شبكة طبية تشمل: العيادات، المستشفيات، المراكز الطبية المتخصصة، معامل التحاليل، مراكز الأشعة، الصيدليات، خدمات الأسنان والعلاج الطبيعي، البصريات، الأجهزة التعويضية والمساعدة، وخدمات الطوارئ.",
      "حجز فوري إلكتروني، وسجلات طبية رقمية، وتوصيات ذكية للخدمات.",
      "أدوات مخصصة للشركات لإدارة وتتبّع تغطية الرعاية الصحية للموظفين.",
      "خطط شاملة تغطي جميع الفئات العمرية وتشمل الأمراض المزمنة والحالات القائمة مسبقًا.",
    ],
  },
  {
    heading: "شروط الأهلية",
    paragraphs: [
      "يجب أن يكون عمرك 16 عامًا أو أكثر لاستخدام خدماتنا. إن كنت أصغر من ذلك، يمكنك استخدام المنصة فقط تحت إشراف أحد الوالدين أو الوصي القانوني.",
    ],
  },
  {
    heading: "التزامات المستخدم",
    paragraphs: [
      "عند استخدامك لـ ميديور، فإنك تلتزم بما يلي:"
    ],
    listItems: [
      "إدخال معلومات صحيحة ومكتملة أثناء التسجيل.",
      "الحفاظ على سرية بيانات الدخول الخاصة بحسابك.",
      "استخدام المنصة بشكل قانوني وعدم إساءة استخدامها.",
      "الامتناع عن أي محاولة لتعطيل أو إتلاف المنصة أو خدماتها."
    ]
  },
  {
    heading: "الدفع والاشتراكات",
    paragraphs: [
      "قد يتطلب الوصول إلى خدمات ميديور سداد رسوم اشتراك. تتم معالجة جميع المدفوعات بشكل آمن من خلال مزودي بوابات الدفع الإلكتروني المعتمدين لدينا. جميع الرسوم غير قابلة للاسترداد إلا إذا نُص على خلاف ذلك بشكل صريح."
    ]
  },
  {
    heading: "حدود المسؤولية",
    paragraphs: [
      "لا تتحمل ميديور أي مسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية التي قد تنشأ نتيجة استخدامك لخدماتنا. وتقتصر مسؤوليتنا، في جميع الأحوال، على قيمة الخدمة المدفوعة التي تسببت في المشكلة محل النزاع."
    ]
  },
  {
    heading: "الإنهاء أو الإيقاف",
    paragraphs: [
      "يحق لـ ميديور تعليق أو إنهاء استخدامك للخدمة في حال مخالفة الشروط دون إشعار مسبق، وذلك وفقًا لتقديرنا."
    ]
  },
  {
    heading: "القانون المعمول به",
    paragraphs: [
      "تخضع هذه الشروط وتُفسر وفقًا لقوانين جمهورية مصر العربية، وتكون محاكم القاهرة هي المختصة في حال نشوء أي نزاع."
    ]
  },
];

const Heading: React.FC<{ children: React.ReactNode; mt?: boolean }> = ({ children, mt = false }) => (
  <h2 className={`text-[33px] font-semibold leading-[43px]${mt ? " mt-8" : ""}`}>{children}</h2>
);

const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[29px] font-normal leading-[43px]">{children}</p>
);

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="text-[29px] font-normal leading-[43px] list-disc pr-8 text-right">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

const TermsContentSection: React.FC = () => {
  return (
    <section
      className="mobile-app-section py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg text-[#00313B]"
      dir="rtl"
      lang="ar"
    >
      {/* Green square between header and section */}
      <div className="mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div
            className="hidden md:block absolute -top-[5rem] left-1/2 transform -translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float opacity-80"
          ></div>
          <div className="space-y-6 relative">
            {sections.map((sec, i) => (
              <React.Fragment key={sec.heading}>
                <Heading mt={i !== 0}>{sec.heading}</Heading>
                <LineSeparator />
                {sec.paragraphs.map((par, j) => (
                  <Text key={j}>{par}</Text>
                ))}
                {sec.listItems && <List items={sec.listItems} />}
              </React.Fragment>
            ))}
            <div
              className="hidden md:block absolute top-[2rem] -right-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float opacity-80"
            ></div>
            <div
              className="hidden md:block absolute top-1/2 -left-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float-delay opacity-60 blur-[2px]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContentSection;