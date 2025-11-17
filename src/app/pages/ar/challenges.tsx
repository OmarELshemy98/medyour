import HtmlNavbarAr from '../../components/html/HtmlNavbarAr';
import HtmlFooterAr from '../../components/html/HtmlFooterAr';
import ChallengesSection from '../../components/sections/challenges/ChallengesSection';
import HeroHeader from '../../components/common/HeroHeader';

const ChallengesPage: React.FC = () => {
    return (
        <>
            <HtmlNavbarAr /> 
            
            <main className="min-h-screen">
                
                {/* 1. Challenges Hero Section (قسم العنوان والوصف) */}
                <HeroHeader
                    title="نفهم التحديات... ونقدّم الرعاية كما يجب أن تكون"
                    subtitle="في ميديور، نواجه أبرز معوقات الرعاية الصحية عبر حلول رقمية متكاملة، تمنحك تجربة أبسط، أسرع، وأكثر كفاءة، دون تعقيد أو تكلفة مبالغ فيها."
                    backgroundImage="/images/background-img.png"
                    dir="rtl"
                />                
                {/* 2. Challenges List (قائمة التحديات) */}
                <ChallengesSection />
                
            </main>

            <HtmlFooterAr /> 
        </>
    );
};

export default ChallengesPage;