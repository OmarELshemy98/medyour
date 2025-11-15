// app/components/sections/why-medyour/KeyFeatures.tsx
import { Shield, Clock, Globe, Smartphone, DollarSign, Heart } from 'lucide-react';

const iconMap = {
  Shield,
  Clock,
  Globe,
  Smartphone,
  DollarSign,
  Heart
};

type KeyFeaturesProps = {
  content: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: keyof typeof iconMap;
      title: string;
      description: string;
    }>;
  };
};

const KeyFeaturesSection = ({ content }: KeyFeaturesProps) => {
  const { title, subtitle, features } = content;

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#001218] font-cairo mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;