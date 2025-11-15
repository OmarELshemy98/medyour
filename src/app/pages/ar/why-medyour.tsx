// pages/why-medyour.tsx
import Head from 'next/head';

// Content Import
import { whyMedyourContent } from '../../content/ar/why-medyour';

// Layout Imports

// Section Imports
import KeyFeaturesSection from '../../components/sections/why-medyour/KeyFeatures';
import ComparisonSection from '../../components/sections/why-medyour/Comparison';
import DifferenceSection from '../../components/sections/why-medyour/Difference';
import CtaSection from '../../components/sections/home/CtaSection';
import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';

const WhyMedyourPage: React.FC = () => {
    const { seo, hero, keyFeatures, comparison, difference, cta } = whyMedyourContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
            <main className="min-h-screen">
                
                {/* 1. Hero Section */}
                <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-[#F8F9FA] to-white" dir="rtl">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001218] font-cairo mb-6">
                            {hero.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            {hero.subtitle}
                        </p>
                    </div>
                </section>
                
                {/* 2. Key Features Section */}
                <KeyFeaturesSection content={keyFeatures} />

                {/* 3. Comparison Section */}
                <ComparisonSection content={comparison} />

                {/* 4. Difference Section */}
                <DifferenceSection content={difference} />
                
                {/* 5. CTA Section */}
                <CtaSection content={cta} />
                
            </main>

            <Footer /> 
        </>
    );
};

export default WhyMedyourPage;