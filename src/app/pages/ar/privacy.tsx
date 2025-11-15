// pages/privacy.tsx
import Head from 'next/head';

// Content Import
import { privacyContent } from '../../content/ar/privacy';

// Layout Imports

// Section Imports
import PrivacyContentSection from '../../components/sections/legal/PrivacyContent';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const PrivacyPage: React.FC = () => {
    const { seo, hero, sections } = privacyContent as any;
    
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <html lang="ar" dir="rtl" />
            </Head>

            <Navbar /> 
            
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

            <Footer /> 
        </>
    );
};

export default PrivacyPage;