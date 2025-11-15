// pages/privacy.tsx

// Content Import
import { privacyContent } from '../../content/ar/privacy';

// Layout Imports

// Section Imports
import PrivacyContentSection from '../../components/sections/legal/PrivacyContent';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';

const PrivacyPage: React.FC = () => {
    const { seo, hero, sections } = privacyContent as any;
    
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen bg-white">
                
                {/* 1. Hero Section */}
                <section className="pt-24 md:pt-32 pb-12 bg-[#F8F9FA]" dir="rtl">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] font-cairo mb-4">
                            {hero.title}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {hero.lastUpdated}
                        </p>
                    </div>
                </section>
                
                {/* 2. Privacy Content */}
                <PrivacyContentSection sections={sections} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default PrivacyPage;