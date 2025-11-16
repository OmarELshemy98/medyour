import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import { challengesContentEn } from '../../content/en/challenges';

const ChallengesPageEn: React.FC = () => {
  const { hero, challenges, cta } = challengesContentEn as any;
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <HeroHeader title={hero.title} subtitle={hero.subtitle} backgroundImage={hero.image} dir="ltr" />
        <div className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.sections.map((s: any, idx: number) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 bg-[#F8F9FA] text-center">
          <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
          <a href={cta.buttonLink} className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full">{cta.buttonText}</a>
        </div>
      </main>
      <HtmlFooterEn />
    </>
  );
};

export default ChallengesPageEn;