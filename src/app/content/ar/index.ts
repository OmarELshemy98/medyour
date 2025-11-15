// content/ar/index.ts
export const homePageContent = {
    seo: {
      title: 'مديور | شبكة رعاية صحية متكاملة وحلول طبية للأفراد والشركات',
      description: 'احصل على رعاية صحية متكاملة مع ميديور. شبكة طبية واسعة تضم أفضل الأطباء، المعامل، والصيدليات. حمل التطبيق الآن لخدمة طبية أسهل وأسرع.',
    },
    hero: {
      title: 'حلول الرعاية الصحية الذكية للجميع.',
      subtitle: 'نوفر لك شبكة طبية واسعة، تغطية شاملة، وسهولة تامة في الوصول للخدمات الصحية.',
      buttonText: 'ابدأ الآن',
      buttonLink: '/contact',
      mainImage: '/images/background_img.png', 
      appImage: '/images/mobile-app.png',
    },
    benefits: [
      { icon: '/images/icon-doctors.svg', title: 'أفضل الأطباء', description: 'شبكة واسعة من الأطباء في جميع التخصصات.' },
      { icon: '/images/icon-insurance.svg', title: 'تغطية شاملة', description: 'خطط صحية مرنة تلبي كافة احتياجاتك.' },
      { icon: '/images/icon-easy.svg', title: 'سهولة الوصول', description: 'منصة رقمية تسهل حجز المواعيد والإجراءات.' },
    ],
    providers: {
      title: 'تواصل مع شبكة ميديور الواسعة من مقدمي الخدمة',
      subtitle: 'شبكتنا الشاملة تضمن حصولك على أفضل رعاية صحية في أي مكان وفي أي وقت.',
      list: [
          { icon: '/images/providers/icon-hospitals.svg', label: 'المستشفيات والمراكز المتخصصة' },
          { icon: '/images/providers/icon-doctors.svg', label: 'العيادات الخاصة والأطباء' },
          { icon: '/images/providers/icon-labs.svg', label: 'المختبرات والمعامل' },
          { icon: '/images/providers/icon-pharmacies.svg', label: 'الصيدليات' },
          { icon: '/images/providers/icon-radiology.svg', label: 'مراكز الأشعة والتحاليل' },
      ],
      backgroundImage: '/images/image_bea909.png', 
    },
    specialities: {
      title: 'تغطية شاملة لجميع الأقسام الطبية',
      subtitle: 'ميديور توفر تغطية لجميع التخصصات الصحية الهامة لضمان سلامتك وسلامة عائلتك.',
      list: [
          { icon: '/images/specialities/icon-dental.svg', label: 'الأسنان' },
          { icon: '/images/specialities/icon-eyes.svg', label: 'العيون' },
          { icon: '/images/specialities/icon-bones.svg', label: 'العظام' },
          { icon: '/images/specialities/icon-heart.svg', label: 'القلب' },
          { icon: '/images/specialities/icon-pediatrics.svg', label: 'الأطفال' },
          { icon: '/images/specialities/icon-therapy.svg', label: 'العلاج الطبيعي' },
      ],
    },
    technology: {
      title: 'التكنولوجيا الذكية في خدمتك',
      subtitle: 'حلولنا الرقمية تضع الرعاية الصحية في متناول يدك.',
      features: [
          'منصة حجز مواعيد فورية',
          'ملف صحي رقمي آمن',
          'متابعة ومراسلة الأطباء',
          'إصدار الموافقات الطبية إلكترونياً',
      ],
      mainImage: '/images/image_beb14a.png',
      buttonText: 'اكتشف المزيد عن حلولنا',
      buttonLink: '/solutions', 
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا؟',
      subtitle: 'الجودة والرضا هما هدفنا. ثقة عملائنا هي شهادتنا.',
      reviews: [
          {
            text: 'تجربة ممتازة! سهولة في حجز المواعيد وشبكة طبية واسعة من أفضل المراكز. ميديور أحدثت فرقاً كبيراً في تعاملي مع الرعاية الصحية.',
            name: 'محمد علي',
            jobTitle: 'مدير تنفيذي',
          },
          {
            text: 'المنصة الرقمية وفرت علينا الكثير من الوقت والمجهود. الموافقات الطبية تتم بسرعة فائقة. شكرًا ميديور على الخدمة الاحترافية.',
            name: 'فاطمة الزهراء',
            jobTitle: 'مهندسة برمجيات',
          },
          {
            text: 'استجابة سريعة ودعم فني على مدار الساعة. أشعر بالاطمئنان الكامل بفضل التغطية الشاملة التي توفرونها.',
            name: 'يوسف أحمد',
            jobTitle: 'رائد أعمال',
          },
      ],
    },
    cta: {
      title: 'هل أنت مستعد لخدمة صحية ذكية؟',
      subtitle: 'تواصل معنا اليوم واستمتع بأفضل مستويات الرعاية.',
      buttonText: 'ابدأ تجربتك الآن',
      buttonLink: '/contact',
    }
  };