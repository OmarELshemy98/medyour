import Head from 'next/head';


// Content Import - (افتراضي)
import {challengesContent as challengesPageContent } from '@/app/content/ar/challenges'; 

import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import ChallengesSection from '@/app/components/sections/challenges/ChallengesSection';

const ChallengesPage: React.FC = () => {
    // تم استخدام as any لافتراض الواجهة
    const { seo, hero, challengesList } = challengesPageContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
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
                <ChallengesSection challenges={challengesList} />
                
            </main>

            <Footer /> 
        </>
    );
};

export default ChallengesPage;