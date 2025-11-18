
import React from 'react';
import LineSeparator from '../../../common/LineSeparator';

type ListProps = {
  items: React.ReactNode[];
  className?: string;
};

const SectionList: React.FC<ListProps> = ({ items, className }) => (
  <ul className={`text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 ${className ?? ''}`}>
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);

type SectionProps = {
  title: string;
  paragraph?: React.ReactNode;
  list?: React.ReactNode[];
  listClassName?: string;
  extra?: React.ReactNode;
  titleClassName?: string;
  paragraphClassName?: string;
  containerClassName?: string;
};

const ContentSection: React.FC<SectionProps> = ({
  title,
  paragraph,
  list,
  extra,
  listClassName,
  titleClassName = '',
  paragraphClassName = '',
  containerClassName = '',
}) => (
  <div className={containerClassName}>
    <h2 className={`text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem]${titleClassName ? ' ' + titleClassName : ''}`}>{title}</h2>
    {/* Imported the separator instead of duplicating the code */}
    <LineSeparator />
    {paragraph && (
      <p className={`text-[1.8rem] font-normal leading-[2.7rem]${paragraphClassName ? ' ' + paragraphClassName : ''}`}>
        {paragraph}
      </p>
    )}
    {list && <SectionList items={list} className={listClassName} />}
    {extra}
  </div>
);

const privacySections: SectionProps[] = [
  {
    title: "المعلومات التي نقوم بجمعها",
    paragraph: "نجمع المعلومات التالية من مستخدمينا:",
    list: [
      "بيانات شخصية: الاسم، رقم الهاتف، البريد الإلكتروني، تاريخ الميلاد، والسجل الطبي.",
      "بيانات الاستخدام: كيفية تفاعلك مع المنصة، نوع الجهاز، سجل النشاط.",
      "معلومات الدفع: يتم جمعها فقط لمعالجة المعاملات عبر جهات دفع آمنة.",
    ],
  },
  {
    title: "كيف نستخدم بياناتك",
    paragraph: "نستخدم معلوماتك من أجل:",
    list: [
      "تفعيل الحساب وتقديم الخدمات الطبية.",
      "تحسين أداء المنصة وتخصيص تجربة الاستخدام.",
      "إرسال الإشعارات، التنبيهات والعروض.",
      "الالتزام بالقوانين والأنظمة المطبقة.",
    ],
    titleClassName: "mt-8",
  },
  {
    title: "مشاركة البيانات",
    paragraph: "قد نشارك بياناتك مع:",
    list: [
      "مزودي الخدمات الطبية: لتقديم العلاج أو الخدمات الصحية المطلوبة.",
      "مزودي الخدمات الخارجيين: مثل بوابات الدفع والدعم الفني.",
      "الجهات الرسمية: في حال الطلب القانوني.",
    ],
    titleClassName: "mt-8",
  },
  {
    title: "تخزين وحماية البيانات",
    paragraph:
      "نحتفظ ببياناتك طالما كانت ضرورية لتقديم الخدمة أو كما يتطلب القانون. ونلتزم باتخاذ كافة التدابير التقنية والإدارية لحمايتها.",
    titleClassName: "mt-8",
  },
  {
    title: "حقوق المستخدم",
    paragraph: "لك كامل الحق في:",
    list: [
      "الوصول إلى بياناتك وتعديلها.",
      "طلب حذف بياناتك الشخصية.",
      "سحب موافقتك على المعالجة في أي وقت.",
    ],
    extra: (
      <p className="text-[1.8rem] font-normal leading-[2.7rem]">
        يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:info@medyour.com" className="underline text-[#005071]">info@medyour.com</a> لممارسة هذه الحقوق.
      </p>
    ),
    titleClassName: "mt-8",
  },
  {
    title: "خصوصية القُصّر",
    paragraph: "لا تقدم ميديور خدماتها للأطفال دون سن 16 عامًا، ولا تجمع بياناتهم بشكل مقصود.",
    titleClassName: "mt-8",
  },
  {
    title: "التعديلات على السياسة",
    paragraph: "قد نقوم بتحديث سياسة الخصوصية من حين لآخر. سنقوم بإبلاغك بأي تغييرات مهمة من خلال الموقع أو البريد الإلكتروني.",
    titleClassName: "mt-8",
  },
  {
    title: "تواصل معنا",
    paragraph: "لأي استفسارات بخصوص الشروط أو سياسة الخصوصية، يمكنك التواصل معنا عبر:",
    list: [
      <a key={0} href="mailto:info@medyour.com" className="inline-block underline text-[#005071]">البريد الإلكتروني: info@medyour.com</a>,
      <a key={1} href="https://www.medyour.com" className="inline-block underline text-[#005071]">الموقع الرسمي: www.medyour.com</a>,
    ],
    listClassName: "flex flex-col space-y-1",
    titleClassName: "mt-8",
  },
];

const FloatDiv: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => <div {...props} />;

const PrivacyContentSection: React.FC = () => {
  return (
    <section className="mobile-app-section py-20 md:py-32 bg-[rgba(0,255,212,0.11)] rounded-lg text-[#00313B] relative overflow-visible" dir="rtl">
      {/* Green square between header and section */}
      <div className="mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto relative">
          {/* Floating green square */}
          <FloatDiv
            className="hidden md:block absolute -top-20 right-1/2 translate-x-2/3 w-6 h-6 bg-[#00FF90] rounded animate-float opacity-80 z-10"
          />
          <div className="space-y-7 md:space-y-10 relative text-right">
            {privacySections.map((section, idx) => (
              <ContentSection
                key={idx}
                {...section}
              />
            ))}

            {/* Two floating effect divs like the HTML */}
            <FloatDiv
              className="hidden md:block absolute top-8 -left-20 w-5 h-5 bg-[#FF00FB] rounded animate-float opacity-80"
            />
            <FloatDiv
              className="hidden md:block absolute top-1/2 -right-16 w-4 h-4 bg-[#8CE2FF] rounded animate-float-delay opacity-60 blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContentSection;

