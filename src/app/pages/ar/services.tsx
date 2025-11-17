// pages/services.tsx (الإصدار النهائي)
// Section Imports

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import HeroHeader from '../../components/common/HeroHeader';
import ServiceSection from '../../components/sections/services/services';

const ServicesPage: React.FC = () => {
    return (
        <>
            <HtmlNavbarAr /> 
            <main className="min-h-screen">
                {/* 1. Services Hero Section (العنوان والوصف) */}
                <HeroHeader
                  title="كل ما تحتاجه… في مكانٍ واحد"
                  subtitle="توفر ميديور منظومة رقمية متكاملة تُعيد تعريف تجربة الرعاية الصحية بأسلوب يجمع بين السلاسة، الأمان، والدقة. من خلال تطبيق رقمي سهل الاستخدام، يتيح للأفراد الوصول إلى شبكة واسعة من مقدمي الرعاية الصحية وتلقي الخدمات بسرعة وسلاسة ودون تعقيد، بينما تتيح المنصات الإلكترونية المتطورة للمؤسسات إدارة اشتراكات موظفيها ومتابعة التقارير بكفاءة، وتمكّن مقدمي الخدمة من إدارة عملياتهم والتواصل المباشر مع المشتركين بكل سهولة. يجمع هذا التكامل جميع الأطراف ضمن تجربة رقمية موحّدة ومتزامنة، تجعل الوصول إلى الرعاية الصحية أكثر سهولة وفاعلية من أي وقتٍ مضى."
                  backgroundImage="/images/background-img.png"
                  dir="rtl"
                />
                <ServiceSection/>
            </main>
            <HtmlFooterAr /> 
        </>
    );
};

export default ServicesPage;