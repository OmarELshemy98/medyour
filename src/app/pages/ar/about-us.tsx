// pages/about-us.tsx (الإصدار النهائي)
// Content Import
import { aboutUsContent } from '../../content/ar/about-us';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import HeroHeader from '../../components/common/HeroHeader';
import VisionMissionSection from '../../components/sections/about-us/VisionMission';

// Script import
import Script from 'next/script';

const AboutUsPage: React.FC = () => {
    // تم استخدام as any لتجنب الحاجة لتعريف الواجهة الكاملة هنا
    const { seo, hero, story, visionMission } = aboutUsContent as any;
    
    return (
        <>
            <HtmlNavbarAr/>
            
            <main className="min-h-screen">
                
                {/* 1. About Hero Section (قسم العنوان فقط) */}
                <HeroHeader title={hero.title} subtitle={hero.subtitle} dir="rtl" />
                

                {/* 3. Vision and Mission Section (الرؤية والرسالة) */}
                <VisionMissionSection content={visionMission} />
                
                {/* 4. Team Section (فريق العمل) */}
          

            </main>

            <HtmlFooterAr /> 
            <Script src="/js/navbar-script.js" strategy="lazyOnload" />
        </>
    );
};

export default AboutUsPage;