import HtmlNavbarEn from '../../components/html/HtmlNavbarEn';
import HtmlFooterEn from '../../components/html/HtmlFooterEn';
import { termsContentEn } from '../../content/en/terms';

const TermsPageEn: React.FC = () => {
  const { hero, sections } = termsContentEn as any;
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
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            {sections.map((sec: any, idx: number) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-3">{sec.title}</h2>
                {sec.content.map((block: any, i: number) => (
                  typeof block === 'string' ? (
                    <p key={i} className="text-gray-700 mb-2">{block}</p>
                  ) : (
                    <ul key={i} className="list-disc list-inside text-gray-700 space-y-1">
                      {block.items.map((li: string, k: number) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <HtmlFooterEn />
    </>
  );
};

export default TermsPageEn;