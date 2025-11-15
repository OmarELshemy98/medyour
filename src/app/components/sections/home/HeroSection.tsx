// app/components/sections/home/HeroSection.tsx
import { ArrowLeft, Play } from 'lucide-react';

type HeroSectionProps = {
  content: {
    title: string;
    subtitle: string;
    description: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
};

const HeroSection = ({ content }: HeroSectionProps) => {
  const { title, subtitle, description, primaryButton, secondaryButton, stats } = content;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F8F9FA] via-white to-[#E6F9F7] overflow-hidden" dir="rtl">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00CFC5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0099CC]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            {/* Subtitle Badge */}
            <div className="inline-block bg-gradient-to-r from-[#00CFC5]/20 to-[#0099CC]/20 text-[#001218] px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {subtitle}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#001218] font-cairo mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href={primaryButton.link}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {primaryButton.text}
                <ArrowLeft className="w-5 h-5" />
              </a>
              <a
                href={secondaryButton.link}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#001218] font-bold py-4 px-8 rounded-full border-2 border-gray-200 hover:border-[#00CFC5] hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                {secondaryButton.text}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-[#00CFC5] font-cairo mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#00CFC5]/20 to-[#0099CC]/20 rounded-3xl p-8 backdrop-blur-sm">
              {/* Placeholder for Image/Illustration */}
              <div className="aspect-square bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <svg className="w-64 h-64 text-[#00CFC5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-2xl shadow-xl animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0099CC] to-[#00CFC5] rounded-full shadow-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;