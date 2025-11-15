// app/components/sections/home/Benefits.tsx
import { Clock, Shield, Users, Smartphone } from 'lucide-react';

const iconMap = {
  Clock,
  Shield,
  Users,
  Smartphone
};

type BenefitsProps = {
  content: {
    title: string;
    subtitle: string;
    benefits: Array<{
      icon: keyof typeof iconMap;
      title: string;
      description: string;
    }>;
  };
};

const BenefitsSection = ({ content }: BenefitsProps) => {
  const { title, subtitle, benefits } = content;

  return (
    <section className="py-16 md:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001218] font-cairo mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#001218] font-cairo mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00CFC5]/5 to-[#0099CC]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;