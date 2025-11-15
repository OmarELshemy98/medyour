// app/components/sections/why-medyour/Comparison.tsx
import { Check, X } from 'lucide-react';

type ComparisonProps = {
  content: {
    title: string;
    subtitle: string;
    medyour: {
      title: string;
      features: string[];
    };
    traditional: {
      title: string;
      features: string[];
    };
  };
};

const ComparisonSection = ({ content }: ComparisonProps) => {
  const { title, subtitle, medyour, traditional } = content;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white" dir="rtl">
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

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Medyour Column */}
          <div className="bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-cairo mb-2">
                {medyour.title}
              </h3>
              <div className="h-1 w-20 bg-white rounded-full"></div>
            </div>

            <ul className="space-y-4">
              {medyour.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#00CFC5]" />
                  </div>
                  <span className="text-white text-lg leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traditional Column */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-cairo text-gray-800 mb-2">
                {traditional.title}
              </h3>
              <div className="h-1 w-20 bg-gray-300 rounded-full"></div>
            </div>

            <ul className="space-y-4">
              {traditional.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-600 text-lg leading-relaxed line-through opacity-75">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;