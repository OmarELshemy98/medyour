
import React from 'react';

const PrivacyContentSection = () => {
  return (
    <section className="mobile-app-section py-20 md:py-32 bg-[rgba(0,255,212,0.11)] rounded-lg text-[#00313B] relative overflow-visible" dir="rtl">
      {/* Green square between header and section */}
      <div className="mx-auto px-6 relative">
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto relative">
          {/* Floating green square */}
          <div
            className="hidden md:block absolute -top-20 right-1/2 translate-x-2/3 w-6 h-6 bg-[#00FF90] rounded animate-float opacity-80 z-10"
          />
          <div className="space-y-7 md:space-y-10 relative text-right">
            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem]">المعلومات التي نقوم بجمعها</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">نجمع المعلومات التالية من مستخدمينا:</p>
            <ul className="text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 space-y-2">
              <li>بيانات شخصية: الاسم، رقم الهاتف، البريد الإلكتروني، تاريخ الميلاد، والسجل الطبي.</li>
              <li>بيانات الاستخدام: كيفية تفاعلك مع المنصة، نوع الجهاز، سجل النشاط.</li>
              <li>معلومات الدفع: يتم جمعها فقط لمعالجة المعاملات عبر جهات دفع آمنة.</li>
            </ul>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">كيف نستخدم بياناتك</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">نستخدم معلوماتك من أجل:</p>
            <ul className="text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 space-y-2">
              <li>تفعيل الحساب وتقديم الخدمات الطبية.</li>
              <li>تحسين أداء المنصة وتخصيص تجربة الاستخدام.</li>
              <li>إرسال الإشعارات، التنبيهات والعروض.</li>
              <li>الالتزام بالقوانين والأنظمة المطبقة.</li>
            </ul>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">مشاركة البيانات</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">قد نشارك بياناتك مع:</p>
            <ul className="text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 space-y-2">
              <li>مزودي الخدمات الطبية: لتقديم العلاج أو الخدمات الصحية المطلوبة.</li>
              <li>مزودي الخدمات الخارجيين: مثل بوابات الدفع والدعم الفني.</li>
              <li>الجهات الرسمية: في حال الطلب القانوني.</li>
            </ul>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">تخزين وحماية البيانات</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">
              نحتفظ ببياناتك طالما كانت ضرورية لتقديم الخدمة أو كما يتطلب القانون. ونلتزم باتخاذ كافة التدابير التقنية والإدارية لحمايتها.
            </p>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">حقوق المستخدم</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">لك كامل الحق في:</p>
            <ul className="text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 space-y-2">
              <li>الوصول إلى بياناتك وتعديلها.</li>
              <li>طلب حذف بياناتك الشخصية.</li>
              <li>سحب موافقتك على المعالجة في أي وقت.</li>
            </ul>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">
              يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:info@medyour.com" className="underline text-[#005071]">info@medyour.com</a> لممارسة هذه الحقوق.
            </p>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">خصوصية القُصّر</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">
              لا تقدم ميديور خدماتها للأطفال دون سن 16 عامًا، ولا تجمع بياناتهم بشكل مقصود.
            </p>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">التعديلات على السياسة</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">
              قد نقوم بتحديث سياسة الخصوصية من حين لآخر. سنقوم بإبلاغك بأي تغييرات مهمة من خلال الموقع أو البريد الإلكتروني.
            </p>

            <h2 className="text-[2.1rem] md:text-[2.25rem] font-semibold leading-[2.7rem] mt-8">تواصل معنا</h2>
            <p className="text-[1.8rem] font-normal leading-[2.7rem]">
              لأي استفسارات بخصوص الشروط أو سياسة الخصوصية، يمكنك التواصل معنا عبر:
            </p>
            <ul className="text-[1.8rem] font-normal leading-[2.7rem] list-disc pl-8 flex flex-col space-y-1">
                <li>
                  <a href="mailto:info@medyour.com" className="inline-block underline text-[#005071]">البريد الإلكتروني: info@medyour.com</a>
                </li>
                <li>
                  <a href="https://www.medyour.com" className="inline-block underline text-[#005071]">الموقع الرسمي: www.medyour.com</a>
                </li>
            </ul>

            {/* Two floating effect divs like the HTML */}
            <div
              className="hidden md:block absolute top-8 -left-20 w-5 h-5 bg-[#FF00FB] rounded animate-float opacity-80"
            />
            <div
              className="hidden md:block absolute top-1/2 -right-16 w-4 h-4 bg-[#8CE2FF] rounded animate-float-delay opacity-60 blur-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContentSection;

