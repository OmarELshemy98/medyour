// pages/about-us.tsx (الإصدار النهائي)
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import HeroHeader from '../../components/common/HeroHeader';

// Script import
import VisionMissionSection from '../../components/sections/about-us/VisionMission';

const AboutUsPage: React.FC = () => {
    
    return (
        <>
            <HtmlNavbarAr/>
            
            <main className="min-h-screen">
                
                {/* 1. About Hero Section (قسم العنوان فقط) */}
                <HeroHeader
                    title="ميديور: 15 عامًا من التميز"
                    subtitle="نرتقي بتجربة الرعاية الصحية عبر دمج الحلول التقنية الذكية مع الخبرة لنقدم لك خدمة متميزة تضعك دائمًا في المقام الأول."
                    backgroundImage="/images/background-img.png"
                    dir="rtl"
                />
                <VisionMissionSection/>
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default AboutUsPage;