// types/common.ts

// واجهة لروابط التنقل الأساسية
export interface NavLink {
    href: string;
    label: string;
  }
  
  // واجهة لعنصر في قائمة مزايا/خدمات
  export interface ContentItem {
    icon: string;
    title: string;
    description: string;
  }
  
  // واجهة لبطاقة مزود خدمة
  export interface ProviderItem {
    icon: string;
    label: string;
  }
  
  // واجهة للقسم الذي يحوي قائمة بالعناصر (مثل التخصصات)
  export interface ListSection {
    title: string;
    subtitle: string;
    list: ProviderItem[];
  }
  
  // واجهة للـ SEO (الميتا داتا)
  export interface SeoData {
      title: string;
      description: string;
  }