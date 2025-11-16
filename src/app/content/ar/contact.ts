// content/ar/contact.ts

export const contactContent = {
    seo: {
        title: 'تواصل مع ميديور للرعاية الصحية | دعم مخصص على مدار الساعة',
        description: 'تواصل مع فريق ميديور للرعاية الصحية الذكية لأي استفسار أو دعم. نحن هنا لخدمتك على مدار الساعة.',
    },
    hero: {
        breadcrumb: 'الرئيسية / تواصل معنا',
        title: 'تواصل معنا',
        subtitle: `نحن هنا لخدمتك! لأي استفسارات أو ملاحظات، يُرجى تعبئة نموذج التواصل أو التواصل معنا مباشرةً عبر وسائل الاتصال المتاحة.
ابقَ على اطلاع دائم بآخر التحديثات والمبادرات المجتمعية من خلال متابعتنا.`,
        image: '/images/background-img.png',
    },
    form: {
        fields: [
            {
                name: 'phone',
                label: 'الهاتف',
                type: 'tel',
                placeholder: 'أدخل رقم هاتفك',
                required: true,
            },
            {
                name: 'email',
                label: 'البريد الإلكتروني',
                type: 'email',
                placeholder: 'أدخل بريدك الإلكتروني',
                required: true,
            },
            {
                name: 'location',
                label: 'الموقع',
                type: 'text',
                placeholder: 'أدخل عنوانك',
                required: false,
            },
            {
                name: 'message',
                label: 'رسالتك',
                type: 'textarea',
                placeholder: 'اكتب رسالتك',
                required: true,
            }
        ],
        buttonText: 'إرسال',
        note: 'يُرجى ملء جميع الحقول المطلوبة'
    },
    social: [
        {
            name: 'facebook',
            label: 'فيسبوك',
            href: 'https://www.facebook.com/profile.php?id=61576602431934',
            icon: 'fab fa-facebook-f'
        },
        {
            name: 'instagram',
            label: 'انستجرام',
            href: 'https://www.instagram.com/medyouregypt/',
            icon: 'fab fa-instagram'
        },
        {
            name: 'linkedin',
            label: 'لينكدإن',
            href: 'https://www.linkedin.com/company/medyouregypt',
            icon: 'fab fa-linkedin-in'
        },
        {
            name: 'twitter',
            label: 'تويتر',
            href: 'https://x.com/medyouregypt',
            icon: 'fab fa-twitter'
        }
    ]
}