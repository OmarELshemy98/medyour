// app/components/sections/services/CoreServices.tsx
import { Heart, Brain, Activity, Baby, Eye, Bone, Stethoscope, Pill } from 'lucide-react';

const iconMap = {
  Heart,
  Brain,
  Activity,
  Baby,
  Eye,
  Bone,
  Stethoscope,
  Pill
};

type CoreServicesProps = {
  content: {
    title: string;
    subtitle: string;
    services: Array<{
      icon: keyof typeof iconMap;
      name: string;
      description: string;
    }>;
  };
};

const CoreServicesSection = ({ content }: CoreServicesProps) => {
  const { title, subtitle, services } = content;

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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#00CFC5] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#001218] font-cairo mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;