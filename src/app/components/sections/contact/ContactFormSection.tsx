// app/components/sections/contact/ContactFormSection.tsx
import { Send } from 'lucide-react';

type ContactFormProps = {
  formConfig: {
    title: string;
    subtitle: string;
    fields: Array<{
      name: string;
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
    }>;
    submitButton: string;
    successMessage: string;
  };
};

const ContactFormSection = ({ formConfig }: ContactFormProps) => {
  const { title = '', subtitle = '', fields = [], submitButton = 'إرسال' } = formConfig;

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-[#001218] font-cairo mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {subtitle}
      </p>

      <form className="space-y-6">
        {(fields || []).map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-semibold text-[#001218] mb-2">
              {field.label}
              {field.required && <span className="text-red-500 mr-1">*</span>}
            </label>
            
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00CFC5] focus:outline-none transition-colors text-right"
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                required={field.required}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00CFC5] focus:outline-none transition-colors text-right"
              >
                <option value="">{field.placeholder}</option>
                <option value="general">استفسار عام</option>
                <option value="appointment">حجز موعد</option>
                <option value="technical">دعم فني</option>
                <option value="partnership">شراكات</option>
                <option value="other">أخرى</option>
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00CFC5] focus:outline-none transition-colors text-right"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {submitButton}
        </button>

        <p className="text-sm text-gray-600 text-center">
          سنقوم بالرد على رسالتك خلال 24 ساعة
        </p>
      </form>
    </div>
  );
};

export default ContactFormSection;