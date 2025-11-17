// Pure JS + simple dynamic rendering, no React hooks or "use client"

import { contactContent } from '../../../../content/ar/contact';

// ====== TypeScript type assertion to fix errors ======
type ContactField = {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
};

type SocialLink = {
  name: string;
  href: string;
  label?: string;
  icon?: string;
};

// ====== Ensure contactContent is typed safely ======
const contactContentTyped = contactContent as {
  config?: {
    title?: string;
    subtitle?: string;
    fields?: ContactField[];
    buttonText?: string;
    note?: string;
    [key: string]: any;
  };
  form?: {
    fields?: ContactField[];
    buttonText?: string;
    note?: string;
    [key: string]: any;
  };
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    workingHours?: string;
    [key: string]: any;
  };
  info?: {
    address?: string;
    phone?: string;
    email?: string;
    workingHours?: string;
    [key: string]: any;
  };
  social?: SocialLink[];
  [key: string]: any;
};

// ====== Fallback helpers ======
function getContactConfig() {
  return contactContentTyped?.config ?? contactContentTyped?.form ?? {};
}

function getSocialList() {
  return Array.isArray(contactContentTyped?.social) ? contactContentTyped.social : [];
}

// Always return an object with safe default fields, never undefined
function getContactInfo(): {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  [key: string]: any;
} {
  const fallback = {
    address: 'غير متوفر',
    phone: '',
    email: '',
    workingHours: '',
  };
  // Check for existence of contactInfo or info and fallback to empty object if missing
  const source: any =
    (contactContentTyped && typeof contactContentTyped === 'object' && (
      (contactContentTyped.contactInfo && typeof contactContentTyped.contactInfo === 'object' ? contactContentTyped.contactInfo : undefined)
      || (contactContentTyped.info && typeof contactContentTyped.info === 'object' ? contactContentTyped.info : undefined)
    )) || {};

  return {
    address: typeof source.address === 'string' && source.address.length > 0 ? source.address : fallback.address,
    phone: typeof source.phone === 'string' ? source.phone : fallback.phone,
    email: typeof source.email === 'string' ? source.email : fallback.email,
    workingHours: typeof source.workingHours === 'string' ? source.workingHours : fallback.workingHours,
    ...source, // keep extra fields
  };
}


// ====== Main component ======
export default function ContactFormSection() {
  // Defensive assignment: always ensure contactInfo is not undefined and has all needed fields
  const config = getContactConfig();
  const social = getSocialList();
  const contactInfo = getContactInfo() || {
    address: 'غير متوفر',
    phone: '',
    email: '',
    workingHours: '',
  };

  // Defensive: assign values safely
  const contactInfoItems = [
    { icon: 'MapPin', title: 'العنوان', value: contactInfo && typeof contactInfo.address === 'string' ? contactInfo.address : 'غير متوفر' },
    {
      icon: 'Phone',
      title: 'الهاتف',
      value: contactInfo && typeof contactInfo.phone === 'string' ? contactInfo.phone : '',
      link: contactInfo && typeof contactInfo.phone === 'string' && contactInfo.phone ? `tel:${contactInfo.phone}` : undefined,
    },
    {
      icon: 'Mail',
      title: 'البريد الإلكتروني',
      value: contactInfo && typeof contactInfo.email === 'string' ? contactInfo.email : '',
      link: contactInfo && typeof contactInfo.email === 'string' && contactInfo.email ? `mailto:${contactInfo.email}` : undefined,
    },
    { icon: 'Clock', title: 'ساعات العمل', value: contactInfo && typeof contactInfo.workingHours === 'string' ? contactInfo.workingHours : '' },
  ];

  const formFields: ContactField[] = Array.isArray(config.fields) ? config.fields : [];

  return (
    <main dir="rtl">
      {/* Page Header */}
      <div className="relative w-full overflow-hidden bg-[url('/images/background-img.png')] bg-cover bg-center bg-no-repeat h-auto pt-20 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative pt-20 pb-24 z-10 text-white w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-center font-extrabold text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] leading-tight break-words max-w-4xl">
            {config.title ?? 'تواصل معنا'}
          </h1>
          <p className="text-center font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-normal sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.8rem] w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-1 overflow-hidden text-ellipsis">
            {config.subtitle ??
              `نحن هنا لخدمتك! لأي استفسارات أو ملاحظات، يُرجى تعبئة نموذج التواصل أو التواصل معنا مباشرةً عبر وسائل الاتصال المتاحة.
ابقَ على اطلاع دائم بآخر التحديثات والمبادرات المجتمعية من خلال متابعتنا.`}
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="w-[90%] mx-auto flex flex-wrap md:flex-nowrap justify-center items-stretch gap-8 mb-8 mt-8">
        {contactInfoItems.map((item, idx) => (
          <div
            key={item.icon + idx}
            className="flex flex-col items-center justify-center bg-[#e6f3f4] px-6 py-4 rounded-lg shadow-md w-full md:w-auto flex-1"
          >
            <div className="text-[#123D46] text-3xl mb-2">
              {item.icon === 'MapPin' && <i className="fas fa-map-pin"></i>}
              {item.icon === 'Phone' && <i className="fas fa-phone"></i>}
              {item.icon === 'Mail' && <i className="fas fa-envelope"></i>}
              {item.icon === 'Clock' && <i className="fas fa-clock"></i>}
            </div>
            <div className="text-[#1C6D71] text-xl font-bold mb-1">{item.title}</div>
            {item.link && item.value ? (
              <a href={item.link} className="text-base text-[#3A6070] hover:underline break-words text-center">
                {item.value}
              </a>
            ) : (
              <div className="text-base text-[#3A6070] break-words text-center">{item.value}</div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-[90%] mx-auto flex justify-center py-[1.5rem] sm:py-[3rem] lg:py-[4rem]">
        <form className="space-y-4 sm:space-y-5 max-w-2xl w-full px-6" dir="rtl">
          {formFields.map((field, index) => (
            <div
              className={field.type === 'textarea' ? 'flex flex-col sm:flex-row sm:items-start mt-2' : 'flex flex-col sm:flex-row sm:items-center'}
              key={field.name + '-' + index}
            >
              <label
                className={
                  field.type === 'textarea'
                    ? 'text-[#1C6D71] text-[1.625rem] font-normal leading-[2.5rem] mb-[0.5rem] sm:mb-0 sm:w-[7.25rem]'
                    : 'text-[#1C6D71] text-[1.625rem] font-normal leading-[3.5rem] mb-[0.25rem] sm:mb-0 sm:w-[7.25rem]'
                }
                htmlFor={field.name}
              >
                {field.type !== 'textarea' ? field.label : ''}
                {field.required ? <span className="text-red-500 mr-1">*</span> : null}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder ?? ''}
                  required={field.required ?? false}
                  className="w-full px-[0.75rem] sm:px-[1rem] py-[0.5rem] sm:py-[0.75rem] rounded-md placeholder-[#A3A3A3] focus:outline-none text-black text-[1.125rem] font-normal leading-[1.125rem] shadow-md bg-white h-[9rem] resize-none"
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder ?? ''}
                  required={field.required ?? false}
                  className="w-full px-[0.75rem] sm:px-[1rem] py-[0.5rem] sm:py-[0.75rem] rounded-md placeholder-[#A3A3A3] focus:outline-none text-[#A3A3A3] text-[1.125rem] font-normal leading-[1.125rem] shadow-sm bg-[#FFFFFF]"
                />
              )}
            </div>
          ))}

          <div className="flex justify-start mt-[1rem]">
            <button
              type="submit"
              className="bg-[#123D46] text-[#FFF] px-[2.5rem] py-[0.3rem] rounded-md text-[1rem] font-normal leading-[1.5rem] hover:bg-[#004c52] transition-colors"
            >
              {config.buttonText ?? 'إرسال'}
            </button>
          </div>

          {config.note && <p className="text-sm text-gray-700 text-center mt-2">{config.note}</p>}
          <p className="text-sm text-gray-600 text-center mt-4">سنقوم بالرد على رسالتك خلال 24 ساعة</p>
        </form>
      </div>

      {/* Separator */}
      <div className="flex items-center w-[80%] mx-auto">
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
        <div className="flex items-center">
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
          <div className="w-[12.5rem] sm:w-[30.8125rem] border-t-2 border-[#3A6070]"></div>
          <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]"></div>
        </div>
        <div className="flex-1 border-t-2 border-dashed border-[#3A6070] opacity-40"></div>
      </div>

      {/* Social Links */}
      <div className="mx-auto flex justify-center py-[1.5rem] sm:py-[3rem] lg:py-[4rem] w-[90%]">
        <div>
          <h2 className="text-[#123D46] text-[2.0625rem] font-normal leading-[4.375rem] mb-[0.5rem]">تابعنا:</h2>
          <p className="text-[#123D46] text-[1.6875rem] font-normal leading-[2.0625rem] mb-[2rem]">
            ابق على تواصل معنا: لآخر التحديثات ومبادرات المجتمع
          </p>
          <div className="flex justify-center gap-[1rem] sm:gap-[1.5rem] mt-[1.5rem]">
            {social.map((item, idx) => (
              <a
                key={item.name + '-' + idx}
                href={item.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003439] rounded-md hover:bg-[#004c52] transition-colors w-[3.5rem] h-[3.5rem] flex items-end justify-center"
                aria-label={item.label ?? item.name}
              >
                <i className={`${item.icon ?? ''} text-[3rem] text-white`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
