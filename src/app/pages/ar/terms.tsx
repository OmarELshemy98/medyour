// pages/terms.tsx

// Content Import
import { termsContent } from '../../content/ar/terms';
import HeroHeader from '../../components/common/HeroHeader';

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
                
                <HeroHeader title={hero.title} subtitle={hero.lastUpdated} backgroundImage={hero.image || '/images/background-img.png'} dir="rtl" />
                
                {/* 2. Terms Content */}
                <TermsContentSection sections={sections} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default TermsPage;