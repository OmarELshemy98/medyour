import LineSeparator from '../../../common/LineSeparator';

export default function ContactSectionAr() {
  const dir = 'rtl'; // Only "rtl" is used in this component.
  const hero = {
    title: 'تواصل معنا',
    subtitle:
      `نحن هنا لخدمتك! لأي استفسارات أو ملاحظات، يُرجى تعبئة نموذج التواصل أو التواصل معنا مباشرةً عبر وسائل الاتصال المتاحة.
ابقَ على اطلاع دائم بآخر التحديثات والمبادرات المجتمعية من خلال متابعتنا.`,
    image: '/images/background-img.png',
  };

  const form = {
    fields: [
      { name: 'phone', label: 'الهاتف', type: 'tel', placeholder: 'أدخل رقم هاتفك', required: true },
      { name: 'email', label: 'البريد الإلكتروني', type: 'email', placeholder: 'أدخل بريدك الإلكتروني', required: true },
      { name: 'location', label: 'الموقع', type: 'text', placeholder: 'أدخل عنوانك', required: false },
      { name: 'message', label: 'رسالتك', type: 'textarea', placeholder: 'اكتب رسالتك', required: true },
    ],
    buttonText: 'إرسال',
    note: 'يُرجى ملء جميع الحقول المطلوبة',
  };

  const social = [
    { name: 'facebook', label: 'فيسبوك', href: 'https://www.facebook.com/profile.php?id=61576602431934', icon: 'fab fa-facebook-f' },
    { name: 'instagram', label: 'انستجرام', href: 'https://www.instagram.com/medyouregypt/', icon: 'fab fa-instagram' },
    { name: 'linkedin', label: 'لينكدإن', href: 'https://www.linkedin.com/company/medyouregypt', icon: 'fab fa-linkedin-in' },
    { name: 'twitter', label: 'تويتر', href: 'https://x.com/medyouregypt', icon: 'fab fa-twitter' },
  ];

  return (
    <main dir={dir}>
      <div className="relative w-full overflow-hidden bg-[url('/images/background-img.png')] bg-cover bg-center bg-no-repeat h-auto pt-20 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative pt-20 pb-24 z-10 text-white w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4 text-center">
          <h1
            className={`text-center font-extrabold text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] leading-tight break-words max-w-4xl ${dir === 'rtl' ? 'font-ar-heading' : ''}`}
          >
            {hero.title}
          </h1>
          <p
            className={`text-center font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-normal sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.8rem] w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-1 overflow-hidden text-ellipsis whitespace-pre-line ${dir === 'rtl' ? 'font-ar-body' : ''}`}
          >
            {hero.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex justify-center py-[1.5rem] sm:py-[3rem] lg:py-[4rem]">
        <form className="space-y-4 sm:space-y-5 max-w-2xl w-full px-6">
          {form.fields.map((field) => (
            <div
              key={field.name}
              className={field.type === 'textarea' ? 'flex flex-col sm:flex-row sm:items-start mt-2' : 'flex flex-col sm:flex-row sm:items-center'}
            >
              <label
                className={
                  (field.type === 'textarea'
                    ? 'text-[#1C6D71] text-[1.625rem] font-normal leading-[2.5rem] mb-[0.5rem] sm:mb-0 sm:w-[7.25rem]'
                    : 'text-[#1C6D71] text-[1.625rem] font-normal leading-[3.5rem] mb-[0.25rem] sm:mb-0 sm:w-[7.25rem]'
                  ) + ` ${dir === 'rtl' ? 'font-ar-heading' : ''}`
                }
                htmlFor={field.name}
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`w-full px-[0.75rem] sm:px-[1rem] py-[0.5rem] sm:py-[0.75rem] rounded-md placeholder-[#A3A3A3] focus:outline-none text-black text-[1.125rem] font-normal leading-[1.125rem] shadow-md bg-white h-[9rem] resize-none ${dir === 'rtl' ? 'font-ar-body' : ''}`}
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`w-full px-[0.75rem] sm:px-[1rem] py-[0.5rem] sm:py-[0.75rem] rounded-md placeholder-[#A3A3A3] focus:outline-none text-[#A3A3A3] text-[1.125rem] font-normal leading-[1.125rem] shadow-sm bg-[#FFFFFF] ${dir === 'rtl' ? 'font-ar-body' : ''}`}
                />
              )}
            </div>
          ))}
          <div className="flex justify-start mt-[1rem]">
            <button
              type="submit"
              className={`bg-[#123D46] text-white px-[2.5rem] py-[0.3rem] rounded-md text-[1rem] font-normal leading-[1.5rem] hover:bg-[#004c52] transition-colors ${dir === 'rtl' ? 'font-ar-body' : ''}`}
            >
              {form.buttonText}
            </button>
          </div>
          {form.note && (
            <p className={`text-sm text-gray-700 text-center mt-2 ${dir === 'rtl' ? 'font-ar-body' : ''}`}>
              {form.note}
            </p>
          )}
        </form>
      </div>

      <LineSeparator />

      <div className="mx-auto flex justify-center py-[1.5rem] sm:py-[3rem] lg:py-[4rem] w-[90%]">
        <div className="text-center">
          <h2 className={`text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem] mb-[0.5rem] ${dir === 'rtl' ? 'font-ar-heading' : ''}`}>
            تابعنا:
          </h2>
          <p className={`text-[#123D46] text-[1.6875rem] font-normal leading-[2.0625rem] mb-[2rem] ${dir === 'rtl' ? 'font-ar-body' : ''}`}>
            ابق على تواصل معنا: لآخر التحديثات ومبادرات المجتمع
          </p>
          <div className="flex justify-center gap-[1rem] sm:gap-[1.5rem] mt-[1.5rem]">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-[3.5rem] h-[3.5rem] flex items-center justify-center"
                aria-label={item.label}
              >
                <i className={`${item.icon} text-[3rem] text-white`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
