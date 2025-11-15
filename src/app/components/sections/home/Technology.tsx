// app/components/sections/home/Technology.tsx
import { Smartphone, Lock, Zap, RefreshCw } from 'lucide-react';

const iconMap = {
  Smartphone,
  Lock,
  Zap,
  RefreshCw
};

type TechnologyProps = {
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

const TechnologySection = ({ content }: TechnologyProps) => {
  const { title, subtitle, features } = content;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001218] font-cairo mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-[#001218] font-cairo mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#00CFC5]/10 to-[#0099CC]/10 rounded-3xl p-8">
              {/* Mockup Placeholder */}
              <div className="aspect-square bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <Smartphone className="w-48 h-48 text-[#00CFC5]" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl shadow-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#0099CC] to-[#00CFC5] rounded-full shadow-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;