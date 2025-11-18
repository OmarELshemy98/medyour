import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import TermsContentSectionEn from '../../components/sections/en/legal/TermsContentSectionEn';

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
      <HtmlFooterEn />
    </>
  );
};

export default TermsPageEn;