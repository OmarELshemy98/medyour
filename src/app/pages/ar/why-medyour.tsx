// pages/why-medyour.tsx

// Content Import
import { whyMedyourContent } from '../../content/ar/why-medyour';

// Layout Imports

// Section Imports
import KeyFeaturesSection from '../../components/sections/why-medyour/KeyFeatures';
import ComparisonSection from '../../components/sections/why-medyour/Comparison';
import DifferenceSection from '../../components/sections/why-medyour/Difference';
import CtaSection from '../../components/sections/home/CtaSection';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';

const WhyMedyourPage: React.FC = () => {
    const { seo, hero, keyFeatures, comparison, difference, cta } = whyMedyourContent as any;
    
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. Hero Section */}
                <HeroHeader title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.image} dir="rtl" />
                
                {/* 2. Key Features Section */}
                <KeyFeaturesSection content={keyFeatures} />

                {/* 3. Comparison Section */}
                <ComparisonSection content={comparison} />

                {/* 4. Difference Section */}
                <DifferenceSection content={difference} />
                
                {/* 5. CTA Section */}
                <CtaSection content={cta} />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default WhyMedyourPage;
import HeroHeader from '../../components/common/HeroHeader';