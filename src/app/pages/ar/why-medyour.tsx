// pages/why-medyour.tsx

import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import HeroHeader from '../../components/common/HeroHeader';
import WhyMedyourSection from '../../components/sections/why-medyour/WhyMedyourSection';

const WhyMedyourPage: React.FC = () => {
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. Hero Section */}
                <HeroHeader
                  title="لماذا ميديور؟"
                  subtitle="في ميديور، نُقدّم حلولًا رقمية متطورة تجعل الرعاية الصحية أقرب وأسهل من أي وقت مضى.
نوفر لك تجربة رقمية تتيح الوصول السريع إلى شبكة واسعة من نخبة مقدمي الرعاية الصحية في مختلف التخصصات، مع ضمان الجودة والأمان في كل خطوة. سواء كنت فردًا تبحث عن خدمة مميزة لك ولعائلتك، أو مؤسسة تسعى لإدارة شاملة ومتكاملة للرعاية الصحية لموظفيها، نمنحك حلولًا مبتكرة تلبي احتياجاتك وتضمن راحتك ورضاك."
                  backgroundImage="/images/background-img.png"
                  dir="rtl"
                />  
                {/* 2. Key Features Section */}
                <WhyMedyourSection/>
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default WhyMedyourPage;
