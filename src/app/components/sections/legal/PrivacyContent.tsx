// app/components/sections/legal/PrivacyContent.tsx

type PrivacyContentProps = {
    sections: Array<{
      title: string;
      content: string[];
    }>;
  };
  
  const PrivacyContentSection = ({ sections }: PrivacyContentProps) => {
    return (
      <section className="py-12 md:py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="prose prose-lg max-w-none">
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#001218] font-cairo mb-4 pb-2 border-b-2 border-[#00CFC5]">
                  {section.title}
                </h2>
  
                {/* Section Content */}
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-700 leading-relaxed text-base md:text-lg"
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Contact Card */}
          <div className="mt-12 bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border-2 border-[#00CFC5]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#001218] font-cairo mb-4">
                هل لديك أسئلة حول سياسة الخصوصية؟
              </h3>
              <p className="text-gray-600 mb-6">
                فريقنا جاهز للإجابة على أي استفسارات لديك حول كيفية حماية معلوماتك
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PrivacyContentSection;