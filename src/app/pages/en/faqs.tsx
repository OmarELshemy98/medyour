import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import FAQSectionEn from '../../components/sections/en/faqs/FAQSectionEn';

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
      <HtmlFooterEn />
    </>
  );
};

export default FaqsPageEn;