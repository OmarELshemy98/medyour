import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import ChallengesSectionEn from '../../components/sections/en/challenges/ChallengesSectionEn';

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
      <HtmlFooterEn />
    </>
  );
};

export default ChallengesPageEn;