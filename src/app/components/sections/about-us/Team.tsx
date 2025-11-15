// app/components/sections/about-us/Team.tsx
import { Linkedin, Mail } from 'lucide-react';

type TeamProps = {
  content: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image?: string;
      linkedin?: string;
      email?: string;
    }>;
  };
};

const TeamSection = ({ content }: TeamProps) => {
  const { title, subtitle, members } = content;

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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00CFC5] hover:shadow-2xl transition-all duration-300"
            >
              {/* Member Image */}
              <div className="relative h-64 bg-gradient-to-br from-[#00CFC5]/20 to-[#0099CC]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001218] font-cairo mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00CFC5] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gradient-to-br from-[#00CFC5] to-[#0099CC] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;