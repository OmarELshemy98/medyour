// pages/why-medyour.tsx

import HeroHeader from '../../components/common/HeroHeader';
import WhyMedyourSection from '../../components/sections/ar/why-medyour/WhyMedyourSection';
import FooterAr from '../../components/sections/ar/footer/FooterAr';
import HeroNavbar from '../../components/sections/ar/navbar/HeroNavbar';

const WhyMedyourPage: React.FC = () => {
    return (
        <>
            <HeroNavbar/> 
            
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

            <FooterAr/> 
        </>
    );
};

export default WhyMedyourPage;
