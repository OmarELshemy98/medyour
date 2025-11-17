// pages/privacy.tsx

import HeroHeader from '../../components/common/HeroHeader';

// Section Imports
import PrivacyContentSection from '../../components/sections/legal/PrivacyContent';
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';

const PrivacyPage: React.FC = () => {
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen bg-white">
                
            <HeroHeader
                title="سياسة الخصوصية"
                subtitle="في ميديور، نحرص على حماية خصوصيتك. توضح هذه السياسة كيف نقوم بجمع معلوماتك الشخصية، واستخدامها، ومشاركتها، وحمايتها."
                backgroundImage="/images/background-img.png"
                dir="rtl"
            />
                
                {/* 2. Privacy Content */}
                <PrivacyContentSection  />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default PrivacyPage;