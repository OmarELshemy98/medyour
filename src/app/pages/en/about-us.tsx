import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import HeroHeader from '../../components/common/HeroHeader';
import { aboutUsContentEn } from '../../content/en/about-us';

const AboutUsPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <HeroHeader
          title={aboutUsContentEn.hero.title}
          subtitle={aboutUsContentEn.hero.subtitle}
          backgroundImage={aboutUsContentEn.hero.image}
          dir="ltr"
        />

        <section className="py-[5rem] md:py-[8rem] bg-[rgba(0,255,212,0.11)] rounded-lg">
          <div className="w-[90%] mx-auto px-6 relative">
            <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
              <div className="hidden md:block absolute -top-[5rem] right-1/2 transform translate-x-4/6 w-[1.5rem] h-[1.5rem] bg-[#00FF90] opacity-80" />
              <div className="space-y-6 relative">
                <div className="hidden md:block absolute top-[2rem] -left-[5rem] w-[1.25rem] h-[1.25rem] bg-[#FF00FB] opacity-80" />
                <section>
                  <h2 className="text-[1.9375rem] font-[900] leading-[4.375rem]">Medyour Egypt for Healthcare Solutions</h2>
                  <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">Medyour Egypt specializes in digital and integrated healthcare solutions. Our mission is to provide premium medical services at competitive, affordable prices, making healthcare accessible to as many people as possible across Egypt.</p>
                  <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">We achieve this through innovative healthcare programs that cater to both individuals and organizations, supported by a wide network of top-tier healthcare providers across all specialties nationwide.</p>
                  <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">Medyour Egypt believes healthcare is a right for all, without discrimination. We work to remove traditional barriers, such as age, pre-existing conditions, or chronic diseases, to ensure everyone can access comprehensive, high-quality medical care.</p>
                </section>
                <div className="flex items-center w-[80%] mx-auto mt-8">
                  <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]" />
                  <div className="flex items-center">
                    <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]" />
                    <div className="w-[200px] sm:w-[493px] border-t-[0.125rem] border-[#3A6070]" />
                    <div className="w-[0.0625rem] h-[0.5rem] bg-[#3A6070]" />
                  </div>
                  <div className="flex-1 border-t-[0.125rem] border-dashed border-[#3A6070] opacity-40 h-[0.125rem]" />
                </div>
                <section>
                  <h2 className="text-[1.9375rem] font-[900] leading-[4.375rem]">About the Medyour Healthcare Program</h2>
                  <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">Medyour program offers a new, flexible approach to healthcare, beyond traditional health insurance systems. With offers affordable annual subscriptions, we provide a full access to comprehensive healthcare services for individuals and organizations alike. Our program ensures adding family members and parents in the subscription without limits, and without restrictions based on age or pre-existing or chronic conditions.</p>
                  <p className="text-[1.125rem] font-normal leading-[1.8125rem] mt-2">The program provides exceptional medical coverage, allowing unlimited access to services without limits on visits or usage, across a wide network covers most healthcare providers in Egypt, including hospitals, medical centers, clinics, labs, imaging centers, and pharmacies.</p>
                </section>
                <div className="hidden md:block absolute top-1/2 -right-[4rem] w-[1rem] h-[1rem] bg-[#8CE2FF] opacity-60 blur-[2px]" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <HtmlFooterEn />
    </>
  );
};

export default AboutUsPageEn;