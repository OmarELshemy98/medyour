// app/components/sections/services/Partners.tsx

import React from "react";
import LineSeparator from "../../../common/LineSeparator";
import Image from "next/image";

type ImageConfig = {
  src: string;
  alt: string;
  className?: string;
  floatingDivs?: React.ReactNode;
  width?: number;
  height?: number;
};

interface SectionBlockProps {
  title: string;
  titleClassName?: string;
  imageConfig?: ImageConfig;
  children: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
}

const SectionBlock: React.FC<SectionBlockProps & { dir?: string }> = ({
  title,
  imageConfig,
  children,
  titleClassName = "",
  sectionClassName = "flex flex-col items-center w-full py-[2rem] md:py-[3rem]",
  containerClassName = "flex flex-col items-center gap-[1.5rem] md:gap-[2rem] w-full max-w-[75rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem]",
  dir = "rtl",
}) => (
  <section className={sectionClassName}>
    <div className={containerClassName}>
      <h2
        className={
          `${titleClassName} ${dir === "rtl" ? "font-ar-heading" : ""}`.trim()
        }
      >
        {title}
      </h2>
      {imageConfig && (
        <div className="w-full flex justify-center">
          <div className={(imageConfig.className || "") + " relative"}>
            <Image
              src={imageConfig.src}
              alt={imageConfig.alt}
              width={imageConfig.width ?? 220}
              height={imageConfig.height ?? 220}
              className="object-contain w-full h-full"
              priority={false}
            />
            {imageConfig.floatingDivs}
          </div>
        </div>
      )}
      {/* Wrap children in a div to apply font-ar-body if dir is rtl */}
      <div className={dir === "rtl" ? "font-ar-body w-full" : "w-full"}>
        {children}
      </div>
    </div>
  </section>
);

const ServiceSection: React.FC = () => {
  // For this AR component, dir is always 'rtl'; 
  // pass dir to SectionBlock and manually to standalone titles/content
  const dir = "rtl";
  return (
    <>
      <SectionBlock
        title="التغطية الصحية"
        titleClassName={`text-[#123D46] text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem] ${dir === "rtl" ? "font-ar-heading" : ""}`}
        imageConfig={{
          src: "/images/services-images/healthcare-coverage.png",
          alt: "تغطية الرعاية الصحية",
          className: "relative w-full sm:w-3/4 md:w-4/5 lg:w-3/4 transform",
          floatingDivs: (
            <>
              <div className="hidden md:block absolute top-[0.5rem] left-[0.5rem] w-[1rem] h-[1rem] bg-[#00FBFF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/4 left-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] left-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-[0.5rem] right-[0.5rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute top-2/3 right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float-delay opacity-80"></div>
            </>
          ),
        }}
        dir={dir}
      >
        <p className={`text-[#00313B] text-center text-[1.125rem] font-normal leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0 ${dir === "rtl" ? "font-ar-body" : ""}`}>
          نقدّم برامج رعاية صحية مرنة وشاملة تناسب الأفراد والمؤسسات، من خلال اشتراك سنوي بأسعار مخفضة ومنافسة تلائم
          جميع الفئات، وشفافة دون أي رسوم إضافية.
          تتيح ميديور إمكانية إضافة جميع أفراد الأسرة والوالدين دون حد أقصى لعددهم، كما لا يوجد حد أقصى للخدمات المغطاة
          أو لعدد مرات الاستفادة من الخدمة.
          تركّز ميديور على تقديم تغطية طبية متكاملة تضمن راحة المشتركين وجودة الخدمات في كل زيارة، لتجعل الرعاية الصحية
          أكثر سهولة وفي متناول الجميع.
        </p>
      </SectionBlock>
      <LineSeparator />
      <SectionBlock
        title="شبكة مقدمي الخدمة"
        titleClassName={`text-[#123D46] text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem] ${dir === "rtl" ? "font-ar-heading" : ""}`}
        imageConfig={{
          src: "/images/services-images/provider-network.png",
          alt: "شبكة مقدمي الرعاية الصحية",
          className: "relative w-full md:w-4/5 lg:w-3/4 transform",
          floatingDivs: (
            <>
              <div className="hidden md:block absolute top-0 -left-[0.5rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/2 -translate-y-[2.5rem] -left-[2rem] w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute left-[2rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
              <div className="hidden md:block absolute top-[3.75rem] -right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute top-2/3 -right-[2rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float opacity-80"></div>
            </>
          ),
        }}
        dir={dir}
      >
        <p className={`text-[#00313B] text-center text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0 ${dir === "rtl" ? "font-ar-body" : ""}`}>
          شبكة طبية واسعة تضم أكثر من 2500 مقدم خدمة معتمد تشمل معامل التحاليل، مراكز الأشعة، المستشفيات، المراكز
          الطبية، العيادات، والصيدليات في مختلف المحافظات.
          نضمن لك وصولًا سريعًا إلى خدمات موثوقة تغطي جميع التخصصات الطبية بأعلى معايير الجودة والاحترافية.
        </p>
      </SectionBlock>
      <LineSeparator />
      <section>
        <div className="flex flex-col items-center justify-center text-center w-[80%] mx-auto py-[3rem]">
          <h2 className={`text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem] ${dir === "rtl" ? "font-ar-heading" : ""}`}>
            منصاتنا الإلكترونية
          </h2>
          <p className={`text-[#00313B] text-center text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0 mb-3 ${dir === "rtl" ? "font-ar-body" : ""}`}>
            توفر منصات ميديور الإلكترونية التواصل المباشر والفوري بين جميع أطراف منظومة الرعاية الصحية من خلال نظام رقمي
            متكامل ومتزامن.
            تُتيح للمؤسسات إدارة اشتراكات موظفيها ومتابعة استخدام الخدمات وتحليل البيانات الصحية بسهولة ودقة، كما تُمكّن
            مقدّمي الخدمة من إدارة عملياتهم والتواصل المباشر والفعال مع المشتركين ومتابعة خدماتهم الطبية في الوقت الفعلي.
            ويكتمل هذا التكامل عبر الربط المباشر مع تطبيق ميديور الذي يوفّر تحديثات لحظية للمعلومات وتزامنًا مستمرًا بين
            جميع الأطراف، مما يجعل تجربة الرعاية الصحية أسهل وأسرع وأكثر كفاءة، ويوفّر الوقت والجهد دون الحاجة إلى إجراءات
            إدارية معقدة.
            تعتمد المنصات على تقنيات تشفير سحابية متقدمة تضمن حماية الملفات الطبية وخصوصية البيانات، مع سهولة الوصول إليها
            عند الحاجة.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;