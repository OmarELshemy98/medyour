// app/components/sections/home/Specialities.tsx
import { Heart, Brain, Activity, Baby, Eye, Bone } from 'lucide-react';

const iconMap = {
  Heart,
  Brain,
  Activity,
  Baby,
  Eye,
  Bone
};

type SpecialitiesProps = {
  content: {
    title: string;
    subtitle: string;
    specialities: Array<{
      icon: keyof typeof iconMap;
      name: string;
      count: string;
    }>;
  };
};

const SpecialitiesSection = ({ content }: SpecialitiesProps) => {
  const { title, subtitle, specialities } = content;

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

        {/* Specialities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialities.map((speciality, index) => {
            const IconComponent = iconMap[speciality.icon];
            
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-[#001218] font-cairo mb-2">
                  {speciality.name}
                </h3>

                {/* Count */}
                <p className="text-sm text-gray-600">
                  {speciality.count}
                </p>
              </div>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block text-[#00CFC5] font-bold hover:text-[#0099CC] transition-colors"
          >
            استكشف جميع التخصصات ←
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;