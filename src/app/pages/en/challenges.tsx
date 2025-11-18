import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import ChallengesSectionEn from '../../components/sections/en/challenges/ChallengesSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

const ChallengesPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <HeroHeader
          title="We Understand the Challenges — and Deliver healthcare as It Should Be"
          subtitle="At Medyour, we address the most pressing challenges in healthcare through comprehensive digital solutions that make your experience simpler, faster, and more efficient—without unnecessary complexity or excessive costs."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />
        <ChallengesSectionEn />
      </main>
      <FooterEn />
    </>
  );
};

export default ChallengesPageEn;