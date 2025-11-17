// pages/faqs.tsx (إصدار مختصر بدون جلب محتوى الأسئلة الشائعة)
// Layout Imports
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import FAQSection from '../../components/sections/faqs/FAQSection';
import HeroHeader from '../../components/common/HeroHeader';

const FAQsPage: React.FC = () => {
    return (
        <>
            <HtmlNavbarAr />

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

            <HtmlFooterAr />
        </>
    );
};

export default FAQsPage;