// pages/privacy.tsx

// Content Import
import { privacyContent } from '../../content/ar/privacy';
import HeroHeader from '../../components/common/HeroHeader';

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
                
                <HeroHeader title={hero.title} subtitle={hero.lastUpdated} backgroundImage={hero.image || '/images/background-img.png'} dir="rtl" />
                
                {/* 2. Privacy Content */}
                <PrivacyContentSection sections={sections} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default PrivacyPage;