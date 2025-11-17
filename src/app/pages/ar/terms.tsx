// pages/terms.tsx

import HeroHeader from '../../components/common/HeroHeader';

// Layout Imports

// Section Imports
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import TermsContentSection from '../../components/sections/ar/legal/TermsContent';
import HeroNavbar from '../../components/sections/ar/navbar/HeroNavbar';

const TermsPage: React.FC = () => {
    // termsContent removed; must hardcode or fetch values if necessary
 

    return (
        <>
            <HeroNavbar /> 
            
            <main className="min-h-screen bg-white">
                
            <HeroHeader
                title="شروط الاستخدام"
                subtitle="مرحبًا بك في ميديور، منصتك الرقمية الأولى للرعاية الصحية. باستخدامك لمنصتنا أو أي من خدماتنا، فإنك تُقر بموافقتك على هذه الشروط وسياسة الخصوصية الخاصة بنا. إذا كنت لا توافق على أي من بنودها، نرجو منك عدم استخدام خدماتنا."
                backgroundImage="/images/background-img.png"
                dir="rtl"
            />                
                {/* 2. Terms Content */}
                <TermsContentSection />
                
            </main>

            <FooterAr /> 
        </>
    );
};

export default TermsPage;