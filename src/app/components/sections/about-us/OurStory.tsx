// app/components/sections/about-us/OurStory.tsx
import { Lightbulb, Target, Users } from 'lucide-react';

type OurStoryProps = {
  content: {
    title: string;
    paragraphs: string[];
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
};

const iconMap = {
  Lightbulb,
  Target,
  Users
};

const OurStorySection = ({ content }: OurStoryProps) => {
  const { title, paragraphs, highlights } = content;

  return (
    <section className="py-16 md:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001218] font-cairo mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#F8F9FA] to-white rounded-xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001218] font-cairo mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;