// app/components/sections/legal/TermsContent.tsx

type TermsContentProps = {
    sections: Array<{
      title: string;
      content: string[];
    }>;
  };
  
  const TermsContentSection = ({ sections }: TermsContentProps) => {
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
  
          {/* Important Notice */}
          <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 font-cairo mb-2">
                  ملاحظة هامة
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  استخدامك المستمر لمنصة ميديور يعني قبولك لهذه الشروط والأحكام. إذا كانت لديك أي أسئلة أو استفسارات، لا تتردد في التواصل مع فريق الدعم لدينا.
                </p>
              </div>
            </div>
          </div>
  
          {/* Contact Card */}
          <div className="mt-8 bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border-2 border-[#00CFC5]">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#001218] font-cairo mb-4">
                تحتاج لمساعدة في فهم الشروط؟
              </h3>
              <p className="text-gray-600 mb-6">
                فريق الدعم لدينا مستعد لتوضيح أي نقطة في الشروط والأحكام
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TermsContentSection;