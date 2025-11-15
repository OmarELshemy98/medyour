// app/components/sections/faqs/FAQSection.tsx
import { ChevronDown } from 'lucide-react';

type FAQSectionProps = {
  items: Array<{
    question: string;
    answer: string;
    category?: string;
  }>;
  sectionTitle: string;
  sectionSubtitle: string;
};

const FAQSection = ({ items, sectionTitle, sectionSubtitle }: FAQSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001218] font-cairo mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">
            {sectionSubtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group bg-gradient-to-br from-white to-[#F8F9FA] rounded-xl border border-gray-200 hover:border-[#00CFC5] transition-all duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#001218] font-cairo text-lg">
                <span className="flex-1">{item.question}</span>
                <ChevronDown className="w-6 h-6 text-[#00CFC5] flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6">
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#E6F9F7] to-white p-8 rounded-2xl border-2 border-[#00CFC5]">
          <h3 className="text-2xl font-bold text-[#001218] font-cairo mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            فريق الدعم لدينا جاهز لمساعدتك على مدار الساعة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              اتصل بنا
            </a>
            <a
              href="tel:800-633-9687"
              className="inline-block bg-white text-[#00CFC5] font-bold py-3 px-8 rounded-full border-2 border-[#00CFC5] hover:bg-[#00CFC5] hover:text-white hover:shadow-xl transition-all duration-300"
            >
              اتصل: 800-MEDYOUR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;