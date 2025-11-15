// components/sections/faqs/FAQSection.tsx
import React from 'react';

// تحديد نوع محتوى السؤال
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    sectionTitle: string;
    sectionSubtitle: string;
}

// عنصر بطاقة FAQ (تفاعلي لكن بدون هوكس/react hooks، pure static SSG)
const FAQCard: React.FC<FAQItem & { index: number }> = ({ question, answer, index }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            {/* السؤال (زر يمكن الضغط عليه) */}
            <button
                type="button"
                className="faq-button flex justify-between items-center w-full text-right py-3 focus:outline-none"
                aria-expanded="false"
                data-faq-index={index}
            >
                <span className="text-xl font-bold text-[#001218] transition-colors font-cairo">
                    {question}
                </span>
                {/* أيقونة الفتح/الإغلاق */}
                <svg
                    className="w-6 h-6 text-[#001218] transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {/* الإجابة (محتوى مخفي/ظاهر حسب الزر) */}
            <div className="faq-answer overflow-hidden max-h-0 transition-all duration-300">
                <p className="pt-2 pb-4 text-lg text-gray-700 leading-relaxed pr-6">
                    {answer}
                </p>
            </div>
        </div>
    );
};

// إدخال كود JS الخام مباشرة في الصفحة (بشكل inline SSG) عن طريق dangerouslySetInnerHTML
const faqScript = `
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answerElement = button.nextElementSibling; // div.faq-answer

            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                answerElement.classList.remove('open');
                answerElement.style.maxHeight = null;
                button.querySelector('span').classList.remove('text-[#06D6A0]');
            } else {
                closeAllFaqs();
                button.setAttribute('aria-expanded', 'true');
                answerElement.classList.add('open');
                answerElement.style.maxHeight = answerElement.scrollHeight + 'px';
                button.querySelector('span').classList.add('text-[#06D6A0]');
            }
        });
    });

    function closeAllFaqs() {
        faqButtons.forEach(btn => {
            const answer = btn.nextElementSibling;
            btn.setAttribute('aria-expanded', 'false');
            answer.classList.remove('open');
            answer.style.maxHeight = null;
            btn.querySelector('span').classList.remove('text-[#06D6A0]');
        });
    }
});
`;

const FAQSection: React.FC<FAQSectionProps> = ({ items, sectionTitle, sectionSubtitle }) => {
    return (
        <section className="py-16 md:py-24 bg-white" dir="rtl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* عنوان القسم */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#001218] font-cairo mb-3">
                        {sectionTitle}
                    </h2>
                    <p className="text-lg font-light text-gray-600">
                        {sectionSubtitle}
                    </p>
                </div>

                {/* قائمة الأسئلة */}
                <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
                    {items.map((item, index) => (
                        <FAQCard key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
            {/* تضمين الكود جافاسكريبت مباشرة لشيفرة FAQ بشكل SSG بدون React ولا هوكس */}
            <script dangerouslySetInnerHTML={{ __html: faqScript }} />
        </section>
    );
};

export default FAQSection;