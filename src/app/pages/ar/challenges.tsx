// Content Import - (افتراضي)
import {challengesContent as challengesPageContent } from '../../content/ar/challenges'; 

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import ChallengesSection from '../../components/sections/challenges/ChallengesSection';

const ChallengesPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { hero, challenges } = challengesPageContent as any;
    
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. Challenges Hero Section (قسم العنوان والوصف) */}
                <section className="pt-24 md:pt-32 pb-16 bg-[#F8F9FA]" dir="rtl">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] font-cairo mb-4">
                            {hero.title}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {hero.subtitle}
                        </p>
                    </div>
                </section>
                
                {/* 2. Challenges List (قائمة التحديات) */}
                <ChallengesSection challenges={(challenges || []).map((c: any) => ({
                  title: c.title,
                  problem: c.description,
                  solution: Array.isArray(c.details) ? c.details.join(' ') : ''
                }))} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default ChallengesPage;