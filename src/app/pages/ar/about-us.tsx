// pages/about-us.tsx (الإصدار النهائي)
import Head from 'next/head';
// Layout Imports
// Section Imports
// Content Import
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import OurStorySection from '@/app/components/sections/about-us/OurStory';
import VisionMissionSection from '@/app/components/sections/about-us/VisionMission';
import TeamSection from '@/app/components/sections/about-us/Team';
import CtaSection from '@/app/components/sections/home/CtaSection';
import { aboutUsContent } from '@/app/content/ar/about-us';

const AboutUsPage: React.FC = () => {
    // تم استخدام as any لتجنب الحاجة لتعريف الواجهة الكاملة هنا
    const { seo, hero, story, visionMission, team, cta } = aboutUsContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
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

            <Footer /> 
        </>
    );
};

export default AboutUsPage;