// app/components/sections/why-medyour/Difference.tsx
import { Clock, Award, Heart, TrendingUp } from 'lucide-react';

const iconMap = {
  Clock,
  Award,
  Heart,
  TrendingUp
};

type DifferenceProps = {
  content: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: keyof typeof iconMap;
    }>;
  };
};

const DifferenceSection = ({ content }: DifferenceProps) => {
  const { title, subtitle, items } = content;

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

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-[#F8F9FA] p-8 rounded-2xl border-2 border-gray-100 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00CFC5]/10 to-transparent rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl md:text-2xl font-bold text-[#001218] font-cairo mb-4">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;