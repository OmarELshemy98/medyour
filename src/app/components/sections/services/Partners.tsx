// app/components/sections/services/Partners.tsx

type PartnersProps = {
    content: {
      title: string;
      subtitle: string;
      partners: Array<{
        name: string;
        logo?: string;
      }>;
    };
  };
  
  const PartnersSection = ({ content }: PartnersProps) => {
    const { title, subtitle, partners } = content;
  
    return (
      <section className="py-16 md:py-24 bg-white" dir="rtl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001218] font-cairo mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {subtitle}
            </p>
          </div>
  
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl p-8 border border-gray-100 hover:border-[#00CFC5] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {partner.name.charAt(0)}
                    </div>
                    <p className="text-sm font-semibold text-[#001218] font-cairo">
                      {partner.name}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              نفخر بالشراكة مع أفضل مقدمي الخدمات الصحية في الإمارات
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;