// app/components/sections/home/Providers.tsx
import { Star, MapPin, Award } from 'lucide-react';

type ProvidersProps = {
  content: {
    title: string;
    subtitle: string;
    providers: Array<{
      name: string;
      specialty: string;
      location: string;
      rating: number;
      reviews: number;
      image?: string;
    }>;
    viewAllButton: {
      text: string;
      link: string;
    };
  };
};

const ProvidersSection = ({ content }: ProvidersProps) => {
  const { title, subtitle, providers, viewAllButton } = content;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white" dir="rtl">
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

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00CFC5]"
            >
              {/* Provider Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#00CFC5]/20 to-[#0099CC]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-20 h-20 text-[#00CFC5]" />
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-[#001218]">{provider.rating}</span>
                </div>
              </div>

              {/* Provider Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001218] font-cairo mb-2">
                  {provider.name}
                </h3>
                <p className="text-[#00CFC5] font-semibold mb-3">
                  {provider.specialty}
                </p>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{provider.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{provider.reviews} تقييم</span>
                  </div>
                  <button className="text-[#00CFC5] font-semibold hover:text-[#0099CC] transition-colors">
                    احجز الآن ←
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href={viewAllButton.link}
            className="inline-block bg-gradient-to-r from-[#00CFC5] to-[#0099CC] text-white font-bold py-3 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {viewAllButton.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;