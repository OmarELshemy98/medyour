// app/components/sections/about-us/VisionMission.tsx
import { Eye, Target } from 'lucide-react';

type VisionMissionProps = {
  content: {
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
      points: string[];
    };
  };
};

const VisionMissionSection = ({ content }: VisionMissionProps) => {
  const { vision, mission } = content;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-2xl p-8 md:p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold font-cairo">
                {vision.title}
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-white/95">
              {vision.description}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#001218] font-cairo">
                {mission.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {mission.description}
            </p>
            <ul className="space-y-3">
              {mission.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg">
                    {point}
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

export default VisionMissionSection;