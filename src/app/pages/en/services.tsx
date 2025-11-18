import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import ServiceSectionEn from '../../components/sections/en/services/ServiceSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

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
      <FooterEn />
    </>
  );
};

export default ServicesPageEn;