// content/ar/contact.ts

export const contactContent = {
    seo: {
        title: 'تواصل مع ميديور للرعاية الصحية | دعم مخصص على مدار الساعة',
        description: 'تواصل مع فريق ميديور للرعاية الصحية الذكية لأي استفسار أو دعم. نحن هنا لخدمتك على مدار الساعة.',
    },
    hero: {
        breadcrumb: 'الرئيسية / تواصل معنا',
        title: 'نحن هنا لخدمتك',
        subtitle: 'فريق دعم ميديور جاهز للرد على استفساراتك وتقديم المساعدة اللازمة في أي وقت.',
        image: '/images/background_img.png', 
    },
    contactInfo: {
        address: '123 شارع التحرير، الدقي، الجيزة، مصر',
        phone: '+20 100 123 4567',
        email: 'info@medyour.com',
        workingHours: 'من الأحد إلى الخميس: 9:00 صباحاً - 5:00 مساءً (الدعم الطارئ 24/7)',
    },
    form: {
        title: 'أرسل لنا رسالة',
        fields: [
            { name: 'name', label: 'الاسم بالكامل', type: 'text', placeholder: 'أدخل اسمك' },
            { name: 'email', label: 'البريد الإلكتروني', type: 'email', placeholder: 'example@email.com' },
            { name: 'subject', label: 'الموضوع', type: 'text', placeholder: 'استفسار عن تغطية الشركات' },
            { name: 'message', label: 'رسالتك', type: 'textarea', placeholder: 'كيف يمكننا مساعدتك؟' },
        ],
        buttonText: 'إرسال الرسالة',
        // ملاحظة: معالجة الـ Form ستتم في ملف pages/contact.tsx
    }
}