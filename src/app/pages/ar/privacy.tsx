// pages/privacy.tsx

import HeroHeader from '../../components/common/HeroHeader';

// Section Imports
import PrivacyContentSection from '../../components/sections/ar/legal/PrivacyContent';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import HeroNavbar from '../../components/sections/ar/navbar/HeroNavbar';

const PrivacyPage: React.FC = () => {
    return (
        <>
            <HeroNavbar/> 
            
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

            <FooterAr/> 
        </>
    );
};

export default PrivacyPage;