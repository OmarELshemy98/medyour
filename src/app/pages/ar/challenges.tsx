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
                <HeroHeader title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.image} dir="rtl" />
                
                {/* 2. Challenges List (قائمة التحديات) */}
                <ChallengesSection />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default ChallengesPage;
import HeroHeader from '../../components/common/HeroHeader';