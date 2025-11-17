import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import VisionMissionSectionEn from '../../components/sections/en/about-us/VisionMissionSectionEn';

const AboutUsPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <HeroHeader
          title="Medyour: 15 Years of Excellence"
          subtitle="Medyour pioneers smart digital solutions that transform healthcare access, combining innovative technology with a trusted network of providers."
          backgroundImage="/images/background-img.png"
          dir="ltr"
        />

       <VisionMissionSectionEn/>
      </main>
      <HtmlFooterEn />

    </>
  );
};

export default AboutUsPageEn;