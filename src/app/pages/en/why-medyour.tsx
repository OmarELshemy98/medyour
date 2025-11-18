import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HeroHeader from '../../components/common/HeroHeader';
import WhyMedyourSectionEn from '../../components/sections/en/why-medyour/WhyMedyourSectionEn';
import FooterEn from '../../components/sections/en/footer/FooterEn';

const WhyMedyourPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
      <HeroHeader
        title="Why Choose MedYour?"
        subtitle="At Medyour, we offer advanced digital healthcare solutions that make access to quality care easier than ever. Our fully digital experience connects you with an extensive network of top-tier healthcare providers across all specialties, ensuring quality, safety, and efficiency at every step. Whether you’re an individual seeking premium healthcare for yourself and your family, or an organization aiming to manage employee healthcare comprehensively, Medyour delivers innovative solutions that meet your needs while ensuring comfort and satisfaction."
        backgroundImage="/images/background-img.png"
        dir="ltr"
      />
                <WhyMedyourSectionEn/>
      </main>
      <FooterEn />
    </>
  );
};

export default WhyMedyourPageEn;