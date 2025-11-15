import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';

const AboutUsPageEn: React.FC = () => {
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <div className="relative  w-full overflow-hidden  bg-[url('/images/background-img.png')] bg-cover bg-center bg-no-repeat h-auto pt-20  flex flex-col justify-center">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative pt-20 pb-24 z-10 text-white w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4 ">
            <h1 className="text-center font-extrabold text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] leading-tight break-words max-w-4xl">Medyour: 15 Years of Excellence</h1>
            <p className="text-center font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-normal sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.8rem] w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-1 overflow-hidden text-ellipsis">Medyour pioneers smart digital solutions that transform healthcare access, combining innovative technology with a trusted network of providers.</p>
          </div>
        </div>

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