// app/components/sections/home/CtaSection.tsx
import { ArrowLeft, Phone } from 'lucide-react';

type CtaProps = {
  content: {
    title: string;
    subtitle: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton?: {
      text: string;
      link: string;
    };
  };
};

const CtaSection = ({ content }: CtaProps) => {
  const { title, subtitle, primaryButton, secondaryButton } = content;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#00CFC5] via-[#0099CC] to-[#00CFC5] relative overflow-hidden" dir="rtl">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-cairo mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButton.link}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#00CFC5] font-bold py-4 px-8 rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {primaryButton.text}
              <ArrowLeft className="w-5 h-5" />
            </a>
            
            {secondaryButton && (
              <a
                href={secondaryButton.link}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white hover:bg-white hover:text-[#00CFC5] hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {secondaryButton.text}
              </a>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>متاح 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>استجابة فورية</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>أطباء معتمدون</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;