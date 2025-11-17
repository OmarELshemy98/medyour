// pages/terms.tsx

import HeroHeader from '../../components/common/HeroHeader';

// Layout Imports

// Section Imports
import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import TermsContentSection from '../../components/sections/legal/TermsContent';

const TermsPage: React.FC = () => {
    // termsContent removed; must hardcode or fetch values if necessary
 

    return (
        <>
            <HtmlNavbarAr /> 
            
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

            <HtmlFooterAr /> 
        </>
    );
};

export default TermsPage;