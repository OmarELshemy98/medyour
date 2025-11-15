import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import { servicesContentEn } from '../../content/en/services';

const ServicesPageEn: React.FC = () => {
  const { sections, cta } = servicesContentEn as any;
  return (
    <>
      <HtmlNavbarEn />
      <main>
        <div className="pt-24 md:pt-32 pb-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001218] mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Medyour offers a fully digital ecosystem that redefines the healthcare experience, combining ease, security, and precision.</p>
          </div>
        </div>
        <div className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((s: any, idx: number) => (
              <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                {s.description.map((p: string, i: number) => (
                  <p key={i} className="text-gray-700 mb-3">{p}</p>
                ))}
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

export default ServicesPageEn;