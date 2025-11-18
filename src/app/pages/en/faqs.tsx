import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import FAQSectionEn from '../../components/sections/en/faqs/FAQSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

const FaqsPageEn: React.FC = () => {
  // Removed faqsContentEn. You may need to fetch or define content here.
  return (
    <>
      <HtmlNavbarEn />
      <main>
        {/* Placeholder content since faqsContentEn is removed */}
        <HeroHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about your healthcare coverage and services."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />       
        <FAQSectionEn/>
      </main>
      <FooterEn />
    </>
  );
};

export default FaqsPageEn;