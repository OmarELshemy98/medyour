// app/components/sections/services/ServiceCategories.tsx
import { Calendar, Video, Home, FileText } from 'lucide-react';

const iconMap = {
  Calendar,
  Video,
  Home,
  FileText
};

type ServiceCategoriesProps = {
  content: {
    title: string;
    subtitle: string;
    categories: Array<{
      icon: keyof typeof iconMap;
      title: string;
      description: string;
      features: string[];
    }>;
  };
};

const ServiceCategoriesSection = ({ content }: ServiceCategoriesProps) => {
  const { title, subtitle, categories } = content;

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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl p-8 border border-gray-100 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#001218] font-cairo mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {category.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;