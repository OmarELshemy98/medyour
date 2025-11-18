import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import ServiceSectionEn from '../../components/sections/en/services/ServiceSectionEn';

// Define hardcoded content to replace servicesContentEn


const ServicesPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
      <HeroHeader
          title="Our Services"
          subtitle="Medyour offers a fully digital ecosystem that redefines the healthcare experience, combining ease, security, and precision."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />     
        <ServiceSectionEn/>
      </main>
      <HtmlFooterEn />
    </>
  );
};

export default ServicesPageEn;