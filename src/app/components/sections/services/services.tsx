// app/components/sections/services/Partners.tsx

import React from "react";

const ServiceSection = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full py-[2rem] md:py-[3rem]">
        <div className="flex flex-col items-center gap-[1.5rem] md:gap-[2rem] w-full max-w-[75rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem]">
          <h2 className="text-[#123D46]  text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
            التغطية الصحية
          </h2>
          <div className="w-full flex justify-center">
            <div className="relative w-full sm:w-3/4 md:w-4/5 lg:w-3/4 transform">
              <img
                src="../images/services-images/healthcare-coverage.png"
                alt="تغطية الرعاية الصحية"
                loading="lazy"
                className="object-contain w-full h-auto"
              />
              <div className="hidden md:block absolute top-[0.5rem] left-[0.5rem] w-[1rem] h-[1rem] bg-[#00FBFF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-1/4 left-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] left-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float opacity-80"></div>
              <div className="hidden md:block absolute top-[0.5rem] right-[0.5rem] w-[1rem] h-[1rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
              <div className="hidden md:block absolute top-2/3 right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#00FF90] animate-float opacity-80"></div>
              <div className="hidden md:block absolute bottom-[0.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float-delay opacity-80"></div>
            </div>
          </div>
          <p className="text-[#00313B] text-center  text-[1.125rem] font-normal leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0">
            نقدّم برامج رعاية صحية مرنة وشاملة تناسب الأفراد والمؤسسات، من خلال اشتراك سنوي بأسعار مخفضة ومنافسة تلائم
            جميع الفئات، وشفافة دون أي رسوم إضافية.
            تتيح ميديور إمكانية إضافة جميع أفراد الأسرة والوالدين دون حد أقصى لعددهم، كما لا يوجد حد أقصى للخدمات المغطاة
            أو لعدد مرات الاستفادة من الخدمة.
            تركّز ميديور على تقديم تغطية طبية متكاملة تضمن راحة المشتركين وجودة الخدمات في كل زيارة، لتجعل الرعاية الصحية
            أكثر سهولة وفي متناول الجميع.
          </p>
        </div>
      </section>
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40 bg-[length:1.25rem_0.125rem] bg-[position:top] h-[0.125rem]"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40 bg-[length:1.25rem_0.125rem] bg-[position:top] h-[0.125rem]"></div>
      </div>
      <section>
        <div className="flex flex-col items-center w-full py-[2rem] md:py-[3rem]">
          <div className="flex flex-col items-center gap-[1.5rem] md:gap-[2rem] w-full max-w-[75rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem]">
            <h2 className="text-[#123D46]  text-[1.75rem] md:text-[2.0625rem] font-normal leading-[2.5rem] md:leading-[4.375rem]">
              شبكة مقدمي الخدمة
            </h2>
            <div className="w-full flex justify-center">
              <div className="relative w-full md:w-4/5 lg:w-3/4 transform">
                <img
                  src="../images/services-images/provider-network.png"
                  alt="شبكة مقدمي الرعاية الصحية"
                  className="object-contain w-full h-auto"
                  loading="lazy"
                />
                <div className="hidden md:block absolute top-0 -left-[0.5rem] w-[1.25rem] h-[1.25rem] bg-yellow-300 animate-float opacity-80"></div>
                <div className="hidden md:block absolute top-1/2 -translate-y-[2.5rem] -left-[2rem] w-[1.5rem] h-[1.5rem] bg-[#00FF90] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute left-[2rem] w-[1rem] h-[1rem] bg-[#8CE2FF] animate-float blur-[2px] opacity-80"></div>
                <div className="hidden md:block absolute top-[3.75rem] -right-[2rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] animate-float-delay opacity-80"></div>
                <div className="hidden md:block absolute top-2/3 -right-[2rem] w-[1.5rem] h-[1.5rem] bg-[#8CE2FF] animate-float opacity-80"></div>
              </div>
            </div>
            <p className="text-[#00313B] text-center  text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0">
              شبكة طبية واسعة تضم أكثر من 2500 مقدم خدمة معتمد تشمل معامل التحاليل، مراكز الأشعة، المستشفيات، المراكز
              الطبية، العيادات، والصيدليات في مختلف المحافظات.
              نضمن لك وصولًا سريعًا إلى خدمات موثوقة تغطي جميع التخصصات الطبية بأعلى معايير الجودة والاحترافية.
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center w-[80%] mx-auto mt-[2rem]">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40 bg-[length:1.25rem_0.125rem] bg-[position:top] h-[0.125rem]"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40 bg-[length:1.25rem_0.125rem] bg-[position:top] h-[0.125rem]"></div>
      </div>
      <section>
        <div className="flex flex-col items-center justify-center text-center w-[80%] mx-auto py-[3rem]">
          <h2 className="text-[#123D46]  text-[2.0625rem] font-normal leading-[4.375rem]">
            منصاتنا الإلكترونية
          </h2>
          <p className="text-[#00313B] text-center  text-[1rem] md:text-[1.125rem] font-normal leading-[1.25rem] md:leading-[1.5rem] max-w-4xl mx-auto px-[1rem] md:px-0 mb-3">
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