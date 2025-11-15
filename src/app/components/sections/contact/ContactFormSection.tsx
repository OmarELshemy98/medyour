import React from 'react';

interface FormConfig {
    title: string;
    buttonText: string;
    // ... أي إعدادات أخرى للنموذج
}

interface ContactFormSectionProps {
    formConfig: FormConfig;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ formConfig }) => {

    // دالة وهمية لمعالجة الإرسال - يتم استبدالها في بيئة العمل الفعلي
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // هنا يمكن استدعاء دالة خارجية من Pure JS أو مكتبة Form
        console.log("Form submission attempted. Logic should be handled externally or via server action.");

        // مثال على كيفية الحصول على قيمة الحقول باستخدام Pure JS (إذا تم استخدام Ref)
        // في هذا التصميم الثابت، يجب أن تتم المعالجة بالكامل في ملف JS خارجي يتم تحميله.
        alert('تم استلام النموذج. (تحتاج إلى كود JavaScript خارجي لمعالجة الإرسال)'); 
    };

    return (
        <div className="p-8 bg-white rounded-xl shadow-2xl">
            <h2 className="text-3xl font-extrabold text-[#001218] font-cairo mb-4">
                {formConfig.title}
            </h2>
            <p className="text-gray-600 mb-8">
                نحن نسعد بتلقي استفساراتك واقتراحاتك. املأ النموذج وسنتواصل معك قريباً.
            </p>

            {/* النموذج الثابت - يستخدم onSubmit كـ Placeholder */}
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* الاسم الكامل */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#06D6A0] focus:border-[#06D6A0] transition-colors"
                        placeholder="أدخل اسمك بالكامل"
                    />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#06D6A0] focus:border-[#06D6A0] transition-colors"
                        placeholder="example@domain.com"
                    />
                </div>

                {/* الموضوع */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#06D6A0] focus:border-[#06D6A0] transition-colors"
                        placeholder="استفسار، شكوى، اقتراح، إلخ."
                    />
                </div>

                {/* الرسالة */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">رسالتك</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#06D6A0] focus:border-[#06D6A0] transition-colors"
                        placeholder="اكتب رسالتك هنا بالتفصيل..."
                    />
                </div>

                {/* زر الإرسال */}
                <div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#001218] text-white text-lg font-bold py-3 px-8 rounded-full hover:bg-[#06D6A0] hover:text-[#001218] transition-colors shadow-lg"
                    >
                        {formConfig.buttonText}
                    </button>
                </div>
            </form>
            
            {/* رسالة للتأكيد على ضرورة معالجة الإرسال خارج React State */}
            <p className="mt-4 text-center text-sm text-red-500">
                ⚠️ ملاحظة: هذا النموذج يتطلب معالجة الإرسال (Submit) عبر Pure JavaScript أو مكتبة Forms خارجية لتجنب استخدام React Hooks.
            </p>

        </div>
    );
};

export default ContactFormSection;