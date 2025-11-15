import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import { faqsContentEn } from '../../content/en/faqs';

const FaqsPageEn: React.FC = () => {
  const { hero, sections, cta } = faqsContentEn as any;
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <div className="pt-24 md:pt-32 pb-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] mb-4">{hero.title}</h1>
            <p className="text-xl text-gray-600">{hero.subtitle}</p>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4">
            {sections.map((section: any, idx: number) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
                <div className="space-y-4">
                  {section.faqs.map((f: any, i: number) => (
                    <div key={i} className="p-4 rounded-lg border border-gray-200 bg-white">
                      <p className="font-semibold">{f.question}</p>
                      <p className="text-gray-700">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16 bg-[#F8F9FA] text-center">
          <h2 className="text-3xl font-bold mb-6">{cta.title}</h2>
          <a href={cta.buttonLink} className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full">{cta.buttonText}</a>
        </div>
      </main>
      <HtmlFooterEn />
    </>
  );
};

export default FaqsPageEn;