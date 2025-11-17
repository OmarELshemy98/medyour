// pages/about-us.tsx (الإصدار النهائي)
import HeroHeader from '../../components/common/HeroHeader';

// Script import
import VisionMissionSection from '../../components/sections/ar/about-us/VisionMission';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import HeroNavbar from '../../components/sections/ar/navbar/HeroNavbar';

const AboutUsPage: React.FC = () => {
    
    return (
        <>
            <HeroNavbar/>
            
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

            <FooterAr /> 
        </>
    );
};

export default AboutUsPage;