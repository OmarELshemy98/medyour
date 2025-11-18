import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import FirstSectionMobileSectionEn from '../../components/sections/en/home/FirstSectionMobileSectionEn';
import SecondSectionIntroductionEn from '../../components/sections/en/home/SecondSectionIntroductionEn';
import FourthSectionVisionEn from '../../components/sections/en/home/FourthSectionVisionEn';
import ThirdSectionWhatMedyourEn from '../../components/sections/en/home/ThirdSectionWhatMedyourEn';
import LineSeparator from '../../components/common/LineSeparator';
import LastSectionCarouselHomeEn from '../../components/sections/en/home/LastSectionCarouselHomeEn';

const HomePageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn mode="hero" home />

      <FirstSectionMobileSectionEn/>
      <SecondSectionIntroductionEn/>
      <LineSeparator/>
      <ThirdSectionWhatMedyourEn/>
      <LineSeparator/>
      <FourthSectionVisionEn/>
    <LastSectionCarouselHomeEn/>
      <HtmlFooterEn />
      <script src="/js/script.js"></script>
    </>
  );
};

export default HomePageEn;