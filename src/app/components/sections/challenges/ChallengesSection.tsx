// app/components/sections/challenges/ChallengesSection.tsx
import { AlertCircle, CheckCircle } from 'lucide-react';

type ChallengesSectionProps = {
  challenges: Array<{
    title: string;
    problem: string;
    solution: string;
  }>;
};

const ChallengesSection = ({ challenges }: ChallengesSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-12">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-200 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300"
            >
              {/* Challenge Title */}
              <div className="bg-gradient-to-r from-[#00CFC5] to-[#0099CC] p-6">
                <h3 className="text-2xl font-bold text-white font-cairo">
                  {challenge.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Problem */}
                <div className="p-8 border-l lg:border-l-2 border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="text-xl font-bold text-[#001218] font-cairo">
                      التحدي
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-8 bg-gradient-to-br from-[#E6F9F7] to-white">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#001218] font-cairo">
                      حلنا
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#F8F9FA] to-white p-8 rounded-2xl border-2 border-[#00CFC5]">
          <h3 className="text-2xl font-bold text-[#001218] font-cairo mb-4">
            مستعد لتجربة الحل؟
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            انضم لآلاف المستخدمين الذين حلوا هذه التحديات مع ميديور
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            ابدأ الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;