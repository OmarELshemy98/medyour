// app/components/sections/legal/TermsContent.tsx

import React from "react";

const TermsContentSection = () => {
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
            <h2 className="text-[33px] font-semibold leading-[43px]">خدماتنا</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              توفر ميديور منصة ذكية ومتكاملة تتيح للأفراد والشركات الوصول إلى خدمات رعاية صحية فورية وبتكلفة مناسبة عبر
              شبكة طبية واسعة تغطي جميع أنحاء مصر. تشمل خدماتنا:
            </p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pr-8 text-right">
              <li>
                شبكة طبية تشمل: العيادات، المستشفيات، المراكز الطبية المتخصصة، معامل التحاليل، مراكز الأشعة،
                الصيدليات، خدمات الأسنان والعلاج الطبيعي، البصريات، الأجهزة التعويضية والمساعدة، وخدمات الطوارئ.
              </li>
              <li>حجز فوري إلكتروني، وسجلات طبية رقمية، وتوصيات ذكية للخدمات.</li>
              <li>أدوات مخصصة للشركات لإدارة وتتبّع تغطية الرعاية الصحية للموظفين.</li>
              <li>خطط شاملة تغطي جميع الفئات العمرية وتشمل الأمراض المزمنة والحالات القائمة مسبقًا.</li>
            </ul>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">شروط الأهلية</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              يجب أن يكون عمرك 16 عامًا أو أكثر لاستخدام خدماتنا. إن كنت أصغر من ذلك، يمكنك استخدام المنصة فقط تحت إشراف
              أحد الوالدين أو الوصي القانوني.
            </p>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">التزامات المستخدم</h2>
            <p className="text-[29px] font-normal leading-[43px]">عند استخدامك لـ ميديور، فإنك تلتزم بما يلي:</p>
            <ul className="text-[29px] font-normal leading-[43px] list-disc pr-8 text-right">
              <li>إدخال معلومات صحيحة ومكتملة أثناء التسجيل.</li>
              <li>الحفاظ على سرية بيانات الدخول الخاصة بحسابك.</li>
              <li>استخدام المنصة بشكل قانوني وعدم إساءة استخدامها.</li>
              <li>الامتناع عن أي محاولة لتعطيل أو إتلاف المنصة أو خدماتها.</li>
            </ul>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">الدفع والاشتراكات</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              قد يتطلب الوصول إلى خدمات ميديور سداد رسوم اشتراك. تتم معالجة جميع المدفوعات بشكل آمن من خلال مزودي بوابات
              الدفع الإلكتروني المعتمدين لدينا. جميع الرسوم غير قابلة للاسترداد إلا إذا نُص على خلاف ذلك بشكل صريح.
            </p>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">حدود المسؤولية</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              لا تتحمل ميديور أي مسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية التي قد تنشأ نتيجة استخدامك
              لخدماتنا. وتقتصر مسؤوليتنا، في جميع الأحوال، على قيمة الخدمة المدفوعة التي تسببت في المشكلة محل النزاع.
            </p>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">الإنهاء أو الإيقاف</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              يحق لـ ميديور تعليق أو إنهاء استخدامك للخدمة في حال مخالفة الشروط دون إشعار مسبق، وذلك وفقًا لتقديرنا.
            </p>

            <h2 className="text-[33px] font-semibold leading-[43px] mt-8">القانون المعمول به</h2>
            <p className="text-[29px] font-normal leading-[43px]">
              تخضع هذه الشروط وتُفسر وفقًا لقوانين جمهورية مصر العربية، وتكون محاكم القاهرة هي المختصة في حال نشوء أي
              نزاع.
            </p>

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