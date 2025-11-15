// pages/terms.tsx

// Content Import
import { termsContent } from '../../content/ar/terms';

// Layout Imports

// Section Imports
import TermsContentSection from '../../components/sections/legal/TermsContent';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';

const TermsPage: React.FC = () => {
    const { seo, hero, sections } = termsContent as any;
    
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
                
                {/* 2. Terms Content */}
                <TermsContentSection sections={sections} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default TermsPage;