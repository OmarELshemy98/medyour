import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import PrivacyContentSectionEn from '../../components/sections/en/legal/PrivacyContentSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

const PrivacyPageEn: React.FC = () => {
  // Hardcoded privacy content since privacyContentEn import is removed

  return (
    <>
      <HtmlNavbarEn />
      <main>
      <HeroHeader
          title=" Medyour Privacy Policy"
          subtitle="At Medyour, we prioritize your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />        
      </main>
      <PrivacyContentSectionEn/>
      <FooterEn />
    </>
  );
};

export default PrivacyPageEn;