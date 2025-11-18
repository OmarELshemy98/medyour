import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import TermsContentSectionEn from '../../components/sections/en/legal/TermsContentSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

const TermsPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
      <HeroHeader
          title=" Medyour Terms of Service"
          subtitle="Welcome to Medyour, a digital-first healthcare platform. By accessing or using our services, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />        
        <TermsContentSectionEn/>  
      </main>
      <FooterEn/>
    </>
  );
};

export default TermsPageEn;