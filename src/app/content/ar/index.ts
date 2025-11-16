// app/content/ar/index.ts

export const homePageContent = {
  seo: {
    title: "مـيديـــــور | بوابتك للرعاية الصحية المتكاملة بلا حدود في الإمارات",
    description: "احجز موعدك مع نخبة الأطباء في الإمارات من خلال مديور. منصة رقمية للرعاية الصحية المتكاملة في مختلف التخصصات. سهولة الحجز، متابعة الحالة، ودعم متواصل من فريق متخصص."
  },

  hero: {
    title: "مـيديـــــور",
    subtitle: "بوابتك للرعاية الصحية المتكاملة بلا حدود",
    description: "",
    primaryButton: {
      text: "ابدأ الآن",
      link: "/contact"
    },
    secondaryButton: {
      text: "شاهد كيف تعمل",
      link: "#how-it-works"
    },
    stats: [
      { value: "500+", label: "طبيب معتمد" },
      { value: "50+", label: "مركز طبي" },
      { value: "10,000+", label: "مريض راضٍ" }
    ]
  },

  benefits: {
    title: "لماذا تختار مديور؟",
    subtitle: "رحلة رعاية صحية متكاملة تبدأ من هنا",
    benefits: [
      {
        icon: "Clock",
        title: "سهولة وسرعة الحجز",
        description: "احجز موعدك مع طبيبك المفضل خلال دقائق."
      },
      {
        icon: "Shield",
        title: "خصوصية وأمان",
        description: "تأمين كامل لبياناتك الطبية وسيرتك العلاجية."
      },
      {
        icon: "Users",
        title: "أطباء متميزون",
        description: "نخبة من الأطباء المعتمدين في جميع التخصصات."
      },
      {
        icon: "Smartphone",
        title: "إدارة صحية ذكية",
        description: "تابع زياراتك وتقاريرك وحالتك بسهولة رقمية."
      }
    ]
  },

  providers: {
    title: "تعرف على أطبائنا المتميزين",
    subtitle: "نخبة مختارة من أفضل الأطباء في الإمارات",
    providers: [
      {
        name: "د. فاتن ياسر",
        specialty: "أخصائية أمراض القلب",
        location: "دبي",
        rating: "4.9",
        reviews: 127,
        image: "home-images/doc-1.png"
      },
      {
        name: "د. عمر خالد",
        specialty: "جراحة عظام",
        location: "أبوظبي",
        rating: "4.8",
        reviews: 112,
        image: "home-images/doc-2.png"
      },
      {
        name: "د. هناء أحمد",
        specialty: "طب الأطفال",
        location: "الشارقة",
        rating: "4.8",
        reviews: 91,
        image: "home-images/doc-3.png"
      }
    ],
    viewAllButton: {
      text: "استعرض جميع الأطباء",
      link: "/services"
    }
  },

  specialities: {
    title: "التخصصات الطبية",
    subtitle: "جميع ما تحتاجه لرعاية متكاملة",
    specialities: [
      { icon: "Heart", name: "القلب والأوعية", count: "22+" },
      { icon: "Brain", name: "الأعصاب", count: "18+" },
      { icon: "Baby", name: "أطفال وحديثي الولادة", count: "30+" },
      { icon: "Eye", name: "العيون والرمد", count: "12+" },
      { icon: "Bone", name: "عظام ومفاصل", count: "16+" },
      { icon: "User", name: "أسرة وطب عام", count: "25+" }
    ]
  },

  technology: {
    title: "حلول تقنية مبتكرة لرعايتك",
    subtitle: "نوفر لك تجربة سلسة وتواصل آمن في كل خطوة",
    features: [
      {
        icon: "Smartphone",
        title: "تطبيق شامل وسهل",
        description: "تحكم في مواعيدك وسجلّك الصحي من أي مكان."
      },
      {
        icon: "Lock",
        title: "حماية متقدمة للبيانات",
        description: "حماية كاملة وسرية عالية لجميع معلوماتك."
      },
      {
        icon: "Zap",
        title: "تنبيهات ومتابعة ذكية",
        description: "تذكير دقيق بمواعيدك ومتابعة حالتك باستمرار."
      },
      {
        icon: "RefreshCw",
        title: "تكامل مع جهات عدة",
        description: "ربط مباشر مع المراكز والصيدليات والمختبرات."
      }
    ]
  },

  testimonials: {
    title: "آراء مستخدمينا",
    subtitle: "تجارب حقيقية لراحة ونتائج مثمرة",
    testimonials: [
      {
        name: "فاطمه خيري",
        role: "",
        content: "تجربتي مع مديور كانت استثنائية بحق. وجدت سهولة في الحجز وسرعة بالتواصل مع الطبيب ومتابعة حالتي خطوة بخطوة بطريقة لم أشهدها من قبل.",
        rating: 5,
        image: ""
      },
      {
        name: "عمر ت.",
        role: "المدير التنفيذي للشركة",
        content: "بصفتي شريكًا مؤسسيًا، أُقدّر التزام Medyour بتوفير تغطية شاملة لموظفيّ. دعمهم الاستباقي وأنظمتهم الفعّالة تُميّزهم حقًا في قطاع الرعاية الصحية.",
        rating: 5,
        image: ""
      },
      {
        name: "ليلي حمدي",
        role: "مصممه ازياء",
        content: "نهج مديور للرعاية الصحية منعش. الشفافية وسهولة الوصول أحدثت فرقًا كبيرًا في رحلة الرعاية الصحية لعائلتي.",
        rating: 5,
        image: ""
      }
    ]
  },

  cta: {
    title: "جاهز لبدء رحلتك الصحية؟",
    subtitle: "انضم لميديور واصنع فرق صحتك اليوم",
    primaryButton: {
      text: "ابدأ الآن",
      link: "/contact"
    },
    secondaryButton: {
      text: "اتصل بنا",
      link: "tel:8006339687"
    }
  }
};