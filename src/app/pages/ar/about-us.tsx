// pages/about-us.tsx (الإصدار النهائي)
// Content Import
import { aboutUsContent } from '../../content/ar/about-us';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import OurStorySection from '../../components/sections/about-us/OurStory';
import VisionMissionSection from '../../components/sections/about-us/VisionMission';
import TeamSection from '../../components/sections/about-us/Team';
import CtaSection from '../../components/sections/home/CtaSection';

const AboutUsPage: React.FC = () => {
    // تم استخدام as any لتجنب الحاجة لتعريف الواجهة الكاملة هنا
    const { seo, hero, story, visionMission, team, cta } = aboutUsContent as any;
    
    return (
        <>
            <HtmlNavbarAr/>
            
            <main className="min-h-screen">
                
                {/* 1. About Hero Section (قسم العنوان فقط) */}
                <section className="pt-24 md:pt-32 bg-white" dir="rtl">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] font-cairo mb-4">
                            {hero.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {hero.subtitle}
                        </p>
                    </div>
                </section>
                
                {/* 2. Our Story Section (قصتنا) */}
                <OurStorySection content={story} /> 

                {/* 3. Vision and Mission Section (الرؤية والرسالة) */}
                <VisionMissionSection content={visionMission} />
                
                {/* 4. Team Section (فريق العمل) */}
                <TeamSection content={team} />

                {/* 5. Cta Section (الدعوة للعمل) - القسم الأخير في الصفحة */}
                <CtaSection content={cta} />

            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default AboutUsPage;