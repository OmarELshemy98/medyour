// app/components/sections/home/Testimonials.tsx
import { Star, Quote } from 'lucide-react';

type TestimonialsProps = {
  content: {
    title: string;
    subtitle: string;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
      image?: string;
    }>;
  };
};

const TestimonialsSection = ({ content }: TestimonialsProps) => {
  const { title, subtitle, testimonials } = content;

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-[#00CFC5]/20 to-[#0099CC]/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#00CFC5]" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#001218] font-cairo">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00CFC5]/10 to-[#0099CC]/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="font-semibold text-[#001218]">
              معدل رضا العملاء 4.9 من 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;