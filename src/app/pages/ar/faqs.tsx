// pages/faqs.tsx (إصدار مختصر بدون جلب محتوى الأسئلة الشائعة)
// Layout Imports
import FAQSection from '../../components/sections/ar/faqs/FAQSection';
import HeroHeader from '../../components/common/HeroHeader';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import HeroNavbar from '../../components/sections/ar/navbar/HeroNavbar';

const FAQsPage: React.FC = () => {
    return (
        <>
            <HeroNavbar/>

            <main className="min-h-screen">

                {/* 1. FAQs Hero Section (قسم العنوان والوصف) */}
                <HeroHeader
                    title="الأسئلة الشائعة"
                    subtitle="ابحث عن إجابات لأكثر الأسئلة شيوعًا حول تغطيتك وخدمات الرعاية الصحية الخاصة بك"
                    backgroundImage="/images/background-img.png"
                    dir="rtl"
                />

                {/* 2. FAQ Section - الأسئلة والأجوبة */}
                <FAQSection />

            </main>

            <FooterAr />
        </>
    );
};

export default FAQsPage;